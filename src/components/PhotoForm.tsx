import { useRouter } from "next/router";
import { useState } from "react";
import { useQuery, useMutation } from "@apollo/client";
import {
  Image,
  UpdateImageDocument,
  UpdateImageMutationVariables,
  ImageUpdateInput,
  PhotoWithSkuDocument,
  PhotoEditOptionsDocument,
  UpdatePhotoDocument,
  UpdatePhotoMutationVariables,
  PhotoUpdateInput
} from "../graphql-operations";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

import PhotoImage from "./PhotoImage";
import Upload from "./Upload";

import {
  Box,
  Flex,
  Button,
  Stack,
  Heading,
  Card,
  FieldStack,
  InputField,
  Switch,
  Tag,
  TextareaField,
  SelectMenuField,
  Divider,
  Text,
  RadioGroupField,
  Tabs,
  useToasts
} from "bumbag";

type MenuOption = {
  key: number;
  label: string;
  value: string;
};

const PhotoForm: React.FC = () => {
  const router = useRouter();
  const { sku } = router.query;

  const [imageHasChanges, setImageHasChanges] = useState(false);

  // * BUILD MENUS
  const { error, loading, data } = useQuery(PhotoEditOptionsDocument, { ssr: false });

  const photographerSelectionOptions = data?.photoEditOptions?.photographers?.map(pg => {
    const menuOption: MenuOption = {
      key: pg.id,
      label: pg.name,
      value: pg.id.toString()
    };
    return menuOption;
  });

  const locationSelectionOptions = data?.photoEditOptions?.locations?.map(l => {
    const menuOption: MenuOption = {
      key: l.id,
      label: l.name,
      value: l.id.toString()
    };
    return menuOption;
  });

  const subjectSelectionOptions = data?.photoEditOptions?.subjects?.map(s => {
    const menuOption: MenuOption = {
      key: s.id,
      label: s.name,
      value: s.id.toString()
    };
    return menuOption;
  });

  /**
   * Map all possible tags into menu options.
   */
  const tagSelectionOptions = data?.photoEditOptions?.tags?.map(t => {
    const menuOption: MenuOption = {
      key: t.id,
      label: t.name,
      value: t.id.toString()
    };
    return menuOption;
  });

  /**
   * Map all possible collections into menu options.
   */
  const collectionSelectionOptions = data?.photoEditOptions?.collections?.map(c => {
    const menuOption: MenuOption = {
      key: c.id,
      label: c.name,
      value: c.id.toString()
    };
    return menuOption;
  });

  /**
   * Map all possible finishes into menu options.
   */
  const finishSelectionOptions = data?.photoEditOptions?.finishes?.map(f => {
    const menuOption: MenuOption = {
      key: f.id,
      label: f.name,
      value: f.id.toString()
    };
    return menuOption;
  });

  // * Load Photo with SKU
  const { data: photoData, refetch } = useQuery(PhotoWithSkuDocument, {
    variables: { sku: parseInt(sku as string) },
    ssr: false
  });

  const toasts = useToasts();

  /**
   * on submit, upload image, if upload to S3 successful, update mutation for image, then photo
   */
  const [updateImage] = useMutation(UpdateImageDocument, {
    onCompleted(data) {
      console.log(`Updated Image: ${JSON.stringify(data, null, 2)}`);
    }
  });

  const [updatePhoto] = useMutation(UpdatePhotoDocument, {
    onCompleted(data) {
      console.log(JSON.stringify(data, null, 2));
      if (data.updatePhoto.success) {
        toasts.success({
          title: `Successfully updated`,
          message: `${data.updatePhoto.message}`
        });
      } else {
        toasts.danger({
          title: `Updates failed`,
          message: `${data.updatePhoto.message}`
        });
      }
      refetch();
      router.push(`/photos`);
    }
  });

  if (error) return <p>Error loading photos</p>;
  if (loading) return <p>Loading...</p>;

  if (!photoData || !photoData.photoWithSku) {
    console.error(`Failed to fetch photo with sku: ${sku}`);
    return null;
  }

  const photo = photoData.photoWithSku;

  // console.log(`photoData: ${JSON.stringify(photo, null, 2)}`);
  if (photoData) {
    console.log(`loaded photo data.`);
  }

  // * Set Initial Values

  const initialPhotographer = photographerSelectionOptions?.find(
    x => x.value === photo?.photographer?.id
  );

  const initialLocation = locationSelectionOptions?.find(x => x.value === photo?.location?.id);

  /**
   * Select the photo's options in the select menu.
   */
  const photoSubjects = photo?.subjectsInPhoto?.map(s => s.subject.id);
  let initialSubjects: MenuOption[] | undefined;
  if (subjectSelectionOptions) {
    initialSubjects = subjectSelectionOptions.filter(x => photoSubjects?.includes(x.value));
  }

  /**
   * Select the photo's options in the select menu.
   */
  const photoTags = photo?.tagsForPhoto?.map(t => t.tag.id);
  let initialTags: MenuOption[] | undefined;
  if (tagSelectionOptions) {
    initialTags = tagSelectionOptions.filter(x => photoTags?.includes(x.value));
  }

  const photoCollections = photo?.collectionsForPhoto?.map(c => c.collection.id);
  let initialCollections: MenuOption[] | undefined;
  if (collectionSelectionOptions) {
    initialCollections = collectionSelectionOptions.filter(x =>
      photoCollections?.includes(x.value)
    );
  }

  const photoFinishes = photo?.finishesForPhoto?.map(f => f.finish.id);
  let initialFinishes: MenuOption[] | undefined;
  if (finishSelectionOptions) {
    initialFinishes = finishSelectionOptions.filter(x => photoFinishes?.includes(x.value));
  }

  const handleCancel = () => {
    router.push(`/photos`);
  };

  /**
   * Convert a dataUrl to a Blob so we can make a file to name and upload.
   */
  const dataURLtoBlob = (dataUrl: string) => {
    const arr = dataUrl.split(",");

    if (!arr) {
      console.error(`Failed to parse dataUrl: ${dataUrl}`);
    }

    const mime = arr[0].match(/:(.*?);/)?.[1];
    const bstr = atob(arr[1]);
    let n = bstr.length;
    const u8arr = new Uint8Array(n);
    while (n--) {
      u8arr[n] = bstr.charCodeAt(n);
    }
    return new Blob([u8arr], { type: mime });
  };

  type ImageResponse = {
    success: boolean;
    message: string;
    url?: string | undefined;
  };

  const uploadNewImage = async (): Promise<ImageResponse> => {
    if (tempImage && typeof tempImage.imageUrl === "string") {
      const blob: Blob = dataURLtoBlob(tempImage.imageUrl);

      const mimetype = blob.type.replace("image/", ".");

      const filename = photo.sku ? `photo_${photo.sku}${mimetype}` : "Untitled";

      if (!filename) {
        console.error(`Failed to generate filename.`);
        const failedResponse: ImageResponse = {
          success: false,
          message: "Failed to generate filename."
        };
        return failedResponse;
      }
      const toUpload = new File([blob], filename, {
        lastModified: Date.now()
      });
      console.log(toUpload);
      return await Upload(toUpload);
    } else {
      const failedResponse = {
        success: false,
        message: "Image value is not a string."
      };
      return failedResponse;
    }
  };

  // the image in the local cache is immutable, so copy its properties and pass it to the image component
  const tempImage = { ...photo?.images?.[0] };

  const initialValues: {
    image: Image | undefined;
    photographer: MenuOption | undefined;
    location: MenuOption | undefined;
    title: string;
    description: string;
    isFeatured: boolean;
    isLimitedEdition: boolean;
    rating: number;
    basePrice: number;
    priceModifier: number;
    subjects: MenuOption[];
    tags: MenuOption[];
    collections: MenuOption[];
    finishes: MenuOption[];
  } = {
    image: tempImage,
    photographer: initialPhotographer,
    location: initialLocation,
    title: photo?.title || "Untitled",
    description: photo?.description || "No description provided.",
    isFeatured: photo?.isFeatured || false,
    isLimitedEdition: photo?.isLimitedEdition || false,
    rating: photo?.rating || 5,
    basePrice: photo?.basePrice || 400,
    priceModifier: photo?.priceModifier || 0,
    subjects: initialSubjects || [],
    tags: initialTags || [],
    collections: initialCollections || [],
    finishes: initialFinishes || []
  };

  const validationObject = {
    title: Yup.string().max(30, "Must be 30 characters or fewer.").required("Required"),
    description: Yup.string().required("Required"),
    rating: Yup.number()
      .min(1, "Rating must be 1-10.")
      .max(10, "Rating must be 1-10.")
      .required("Required"),
    basePrice: Yup.number().min(1, "Must be greater than 0.").required("Required"),
    priceModifier: Yup.number().min(-75, "Must be greater than -75.").required("Required"),
    photographer: Yup.object().required("Required."),
    location: Yup.object().required("Required."),
    subjects: Yup.array().required("Must select at least 1 Subject.")
  };

  return (
    <Flex className="page-wrapper" flexDirection="column">
      <Formik
        initialValues={initialValues}
        validationSchema={Yup.object(validationObject)}
        onSubmit={async values => {
          if (imageHasChanges) {
            console.log(`image has changes.`);
            const imageUploadResponse = await uploadNewImage();
            console.log(`imageUploadResponse: ${JSON.stringify(imageUploadResponse, null, 2)}`);
            if (imageUploadResponse && imageUploadResponse.success) {
              // send image update mutation
              tempImage.altText = photo.title ? photo.title : "Untitled";
              tempImage.imageUrl = imageUploadResponse.url as string;
              if (!imageUploadResponse.url) {
                return;
              }
              const str = imageUploadResponse.url;
              const parts = str.split("/");
              const lastPart = parts[4];
              console.log(`last part: ${lastPart}`);
              const nameParts = lastPart.split(".");
              const name = nameParts[0];
              const ext = nameParts[1];

              const input: ImageUpdateInput = {
                imageName: name,
                fileExtension: ext,
                imageUrl: tempImage.imageUrl,
                altText: tempImage.altText,
                size: tempImage.size,
                width: tempImage.width,
                height: tempImage.height,
                photoId: parseInt(photo.id)
              };

              console.log(`image update input: ${JSON.stringify(input, null, 2)}`);

              const editImageVariables: UpdateImageMutationVariables = {
                id: parseInt(tempImage.id),
                input
              };
              updateImage({
                variables: editImageVariables
              });
            }
          }

          const input: PhotoUpdateInput = {
            title: values.title,
            description: values.description,
            isFeatured: values.isFeatured,
            isLimitedEdition: values.isLimitedEdition,
            rating: values.rating,
            basePrice: values.basePrice,
            priceModifier: values.priceModifier,
            photographerId: values.photographer ? parseInt(values.photographer.value) : null,
            locationId: values.location ? parseInt(values.location.value) : null,
            subjectIds: values.subjects ? values.subjects.map(subj => parseInt(subj.value)) : null,
            tagIds: values.tags ? values.tags.map(tag => parseInt(tag.value)) : null,
            collectionIds: values.collections
              ? values.collections.map(collection => parseInt(collection.value))
              : null,
            finishIds: values.finishes
              ? values.finishes.map(finish => parseInt(finish.value))
              : null
          };

          console.log(`INPUT on SUBMIT: ${JSON.stringify(input, null, 2)}`);

          const editVariables: UpdatePhotoMutationVariables = {
            id: photo?.id ? parseInt(photo.id) : 0,
            input
          };
          updatePhoto({
            variables: editVariables
          });
        }}
      >
        {({ values }) => (
          <Form autoComplete="off">
            <Flex flex="row wrap">
              <Flex
                className="image-wrapper"
                marginLeft="auto"
                marginRight="major-2"
                marginY="major-4"
              >
                {initialValues.image && (
                  <PhotoImage image={initialValues.image} setImageHasChanges={setImageHasChanges} />
                )}
              </Flex>
              <Flex
                className="info-card-wrapper"
                width="450px"
                height="300px"
                border="2px solid"
                borderColor="white800"
                borderRadius="10px"
                marginY="auto"
                marginLeft="major-2"
                marginRight="auto"
              >
                <Box margin="major-3">
                  <Heading use="h5">{values.title}</Heading>
                  <Heading use="h6" color="info500">
                    {values.photographer?.label}
                  </Heading>
                  <Text>{values.location?.label}</Text>
                  <Box width="100%" height="80px">
                    <Text fontSize="150">{values.description}</Text>
                  </Box>

                  {values.subjects && <Divider marginY="major-1" />}
                  {values.subjects &&
                    values.subjects?.map(s => (
                      <Tag key={s.key} palette="primary" marginX="minor-1">
                        {s.label}
                      </Tag>
                    ))}
                  {values.tags &&
                    values.tags?.map(t => (
                      <Tag key={t.key} palette="secondary" marginX="minor-1">
                        {t.label}
                      </Tag>
                    ))}
                  {values.collections && <Divider marginY="major-1" />}
                  {values.collections && (
                    <Text.Block fontVariant="small-caps">Collections</Text.Block>
                  )}
                  {values.collections &&
                    values.collections?.map(c => (
                      <Text.Block marginY="major-1" fontSize="150" key={c.key}>
                        {c.label}
                      </Text.Block>
                    ))}
                </Box>
              </Flex>
            </Flex>

            <Flex
              className="form-wrapper"
              padding="major-2"
              maxWidth="90%"
              marginX="auto"
              flexFlow="row wrap"
            >
              <Flex
                className="form-col1-wrapper"
                flexDirection="column"
                margin="major-2"
                flex="1 1 25%"
                maxWidth="450px"
                minWidth="300px"
              >
                <FieldStack orientation="vertical" spacing="major-3">
                  {locationSelectionOptions && (
                    <Field
                      component={SelectMenuField.Formik}
                      label="Location"
                      name="location"
                      placeholder="Location..."
                      options={locationSelectionOptions}
                    />
                  )}

                  {subjectSelectionOptions && (
                    <Field
                      component={SelectMenuField.Formik}
                      hasTags
                      isMultiSelect
                      label="Subjects"
                      placeholder="Select subjects..."
                      name="subjects"
                      options={subjectSelectionOptions}
                      popoverProps={{ backgroundColor: "info300", color: "red" }}
                      buttonProps={{ backgroundColor: "info500" }}
                    />
                  )}
                  {tagSelectionOptions && (
                    <Field
                      component={SelectMenuField.Formik}
                      hasTags
                      isMultiSelect
                      label="Tags"
                      placeholder="Select tags..."
                      name="tags"
                      options={tagSelectionOptions}
                    />
                  )}

                  {collectionSelectionOptions && (
                    <Field
                      component={SelectMenuField.Formik}
                      hasTags
                      isMultiSelect
                      label="Collections"
                      name="collections"
                      placeholder="Select collections..."
                      options={collectionSelectionOptions}
                    />
                  )}
                </FieldStack>
              </Flex>
              <Flex
                className="form-col2-wrapper"
                flexDirection="column"
                margin="major-2"
                flex="1 1 25%"
                maxWidth="450px"
                minWidth="300px"
              >
                <FieldStack orientation="vertical" spacing="major-3">
                  {photographerSelectionOptions && (
                    <Field
                      component={SelectMenuField.Formik}
                      label="Photographer"
                      name="photographer"
                      placeholder="Photographer..."
                      options={photographerSelectionOptions}
                    />
                  )}
                  <Field
                    component={InputField.Formik}
                    name="title"
                    label="Title"
                    type="text"
                    autoComplete="off"
                    value="title"
                  />
                  <Field
                    component={TextareaField.Formik}
                    name="description"
                    label="Description"
                    value="description"
                    textareaProps={{ rows: 5, resize: "none" }}
                  />
                </FieldStack>
              </Flex>
              <Flex
                className="form-col3-wrapper"
                flexDirection="column"
                margin="major-2"
                flex="1 1 20%"
                maxWidth="450px"
                minWidth="300px"
              >
                <Stack orientation="horizontal" spacing="major-2">
                  <Stack maxWidth="160px">
                    <Field
                      component={Switch.Formik}
                      label="Featured"
                      name="isFeatured"
                      marginTop="major-4"
                    />
                    <Field
                      component={Switch.Formik}
                      label="Limited Edition"
                      name="isLimitedEdition"
                      marginTop="major-2"
                    />
                  </Stack>
                  <Field
                    component={InputField.Formik}
                    name="rating"
                    label="Rating"
                    type="number"
                    value="rating"
                    step="1"
                    maxWidth="70px"
                    inputProps={{
                      textAlign: "right"
                    }}
                  />
                </Stack>

                <Card width="260px" marginTop="major-3">
                  <Heading use="h5">Pricing</Heading>
                  <Stack spacing="major-2" marginLeft="auto" marginRight="0">
                    <Field
                      addonBefore={<Button isStatic>$</Button>}
                      component={InputField.Formik}
                      name="basePrice"
                      textAlign="right"
                      type="number"
                      step="1"
                      autoComplete="off"
                      value="basePrice"
                      inputProps={{ textAlign: "right" }}
                    />
                    <Flex justifyContent="flex-end">
                      <Heading use="h5" alignSelf="flex-end">
                        X
                      </Heading>
                      <Field
                        marginLeft="major-3"
                        alignSelf="flexEnd"
                        addonBefore={<Button isStatic>%</Button>}
                        component={InputField.Formik}
                        name="priceModifier"
                        type="number"
                        step="1"
                        min="-75"
                        max="1000"
                        autoComplete="off"
                        value="priceModifier"
                        inputProps={{ textAlign: "right" }}
                      />
                    </Flex>
                    <Heading use="h3" textAlign="right">
                      {values.priceModifier > 0
                        ? values.basePrice +
                          Math.abs((values.priceModifier / 100) * values.basePrice)
                        : values.basePrice -
                          Math.abs((values.priceModifier / 100) * values.basePrice)}
                    </Heading>
                  </Stack>
                </Card>
              </Flex>
              <Flex
                className="form-col4-wrapper"
                flexDirection="column"
                margin="major-2"
                flex="1 1 20%"
                maxWidth="450px"
                minWidth="300px"
              >
                <Tabs selectedId="tab1">
                  <Tabs.List>
                    <Tabs.Tab tabId="tab1">Epic</Tabs.Tab>
                    <Tabs.Tab tabId="tab2">Art</Tabs.Tab>
                    <Tabs.Tab tabId="tab3">Thin</Tabs.Tab>
                    <Tabs.Tab tabId="tab4">Metal</Tabs.Tab>
                  </Tabs.List>
                  <Tabs.Panel tabId="tab1" padding="major-2">
                    <Field
                      component={RadioGroupField.Formik}
                      name="finishes"
                      value="finishes"
                      options={[
                        { key: 1, label: "12 x 18 $150 $600", value: "1218" },
                        { key: 2, label: "16 x 20", value: "1620" },
                        { key: 3, label: "20 x 30", value: "2030" },
                        { key: 4, label: "30 x 40", value: "3040" }
                      ]}
                    />
                  </Tabs.Panel>
                  <Tabs.Panel tabId="tab2" padding="major-2">
                    Cats are alright
                  </Tabs.Panel>
                  <Tabs.Panel tabId="tab3" padding="major-2">
                    Parrots are cool
                  </Tabs.Panel>
                  <Tabs.Panel tabId="tab4" padding="major-2">
                    Parrots are cool
                  </Tabs.Panel>
                </Tabs>
              </Flex>
            </Flex>
            <Flex
              flexDirection="horizontal"
              width="1100px"
              maxWidth="90%"
              marginX="auto"
              alignX="right"
            >
              <Button onClick={() => handleCancel()}>Cancel</Button>
              <Button type="submit" palette="secondary" marginLeft="major-2">
                Submit
              </Button>
            </Flex>
          </Form>
        )}
      </Formik>
    </Flex>
  );
};

export default PhotoForm;