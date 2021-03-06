import { Mat, SearchMatsDocument, DeleteMatDocument } from "../graphql-operations";
import { useMutation } from "@apollo/client";
import { Box, Flex, Columns, Heading, Paragraph, Text, Button, useToasts, Divider } from "bumbag";
import { Dispatch, SetStateAction } from "react";

// * name
// * type
// * description
// * coverImage
// * printSku
// * dimension1
// * dimension2
// * shippingCost
// * basePrice
// * priceModifier
// id
// __typename
// countOfPhotos
// createdAt
// updatedAt

type Props = {
  selectedItem: Mat;
  setSelectedItem: Dispatch<SetStateAction<Mat | undefined>>;
  setIsEditing: Dispatch<SetStateAction<boolean>>;
};

const PrintView: React.FC<Props> = ({ selectedItem: mat, setSelectedItem, setIsEditing }) => {
  const toasts = useToasts();
  const [deleteMat] = useMutation(DeleteMatDocument, {
    onCompleted() {
      toasts.success({
        title: `Successfully deleted`,
        message: `Deleted ${mat.name}.`
      });
    }
  });

  const onDelete = () => {
    deleteMat({
      variables: { id: parseInt(mat.id) },
      refetchQueries: [
        {
          query: SearchMatsDocument,
          variables: {
            input: {
              searchString: ""
            }
          }
        }
      ]
    });
    setSelectedItem(undefined);
  };

  return (
    <Flex>
      <Flex
        className="image-wrapper"
        flexDirection="column"
        margin="major-2"
        marginTop="30px"
        flex="1 1 25%"
        alignItems="flex-end"
        padding="major-2"
      >
        {mat.coverImage && mat.coverImage.imageUrl.length > 0 && (
          <img
            key={Date.now()}
            src={mat.coverImage.imageUrl}
            width="213px"
            height="140px"
            style={{
              borderRadius: "6px"
            }}
          />
        )}
      </Flex>
      <Flex className="fields-wrapper" flexDirection="column" margin="major-3" flex="2 1 50%">
        <Flex flexDirection="row" alignX="right" justifyContent="space-between">
          <Heading use="h3" marginTop="major-4">
            {mat?.name}
          </Heading>
        </Flex>
        <Paragraph marginTop="major-3">
          <Text>{mat.description}</Text>
        </Paragraph>
        <Columns marginTop="major-4">
          <Columns.Column alignX="center">
            <Text.Block fontWeight="600">SKU</Text.Block>
            <Divider
              orientation="horizontal"
              backgroundColor="info300"
              width="160px"
              height="1px"
              border="0 none"
              marginY="major-1"
            />
          </Columns.Column>
          <Columns.Column alignX="center">
            <Text.Block fontWeight="600">Dimensions</Text.Block>
            <Divider
              orientation="horizontal"
              backgroundColor="info300"
              width="160px"
              height="1px"
              border="0 none"
              marginY="major-1"
            />
          </Columns.Column>
          <Columns.Column alignX="center">
            <Text.Block fontWeight="600">Pricing</Text.Block>
            <Divider
              orientation="horizontal"
              backgroundColor="info300"
              width="160px"
              height="1px"
              border="0 none"
              marginY="major-1"
            />
          </Columns.Column>
        </Columns>
        <Columns>
          <Columns.Column alignX="right" fontWeight="300">
            <Text.Block paddingY="major-1">Type:</Text.Block>
            <Text.Block paddingY="major-1">SKU:</Text.Block>
          </Columns.Column>
          <Columns.Column alignX="left" fontWeight="500">
            <Text.Block paddingY="major-1">{mat.printType}</Text.Block>
            <Text.Block paddingY="major-1">{mat.matSku}</Text.Block>
          </Columns.Column>
          <Columns.Column alignX="right" fontWeight="300">
            <Text.Block paddingY="major-1">Aspect:</Text.Block>
            <Text.Block paddingY="major-1">Dimension 1:</Text.Block>
            <Text.Block paddingY="major-1">Dimension 2:</Text.Block>
          </Columns.Column>
          <Columns.Column alignX="left" fontWeight="500">
            <Text.Block paddingY="major-1">{mat.aspectRatio}</Text.Block>
            <Text.Block paddingY="major-1">{mat.dimension1}"</Text.Block>
            <Text.Block paddingY="major-1">{mat.dimension2}"</Text.Block>
          </Columns.Column>
          <Columns.Column alignX="right" fontWeight="300">
            <Text.Block paddingY="major-1">Cost:</Text.Block>
            <Text.Block paddingY="major-1">Base Price:</Text.Block>
            <Text.Block paddingY="major-1">Modifier:</Text.Block>
            <Text.Block paddingY="major-1">Resale:</Text.Block>
            <Text.Block paddingY="major-1">Markup:</Text.Block>
          </Columns.Column>
          <Columns.Column alignX="left" fontWeight="500">
            <Text.Block paddingY="major-1">${mat.cost}</Text.Block>
            <Text.Block paddingY="major-1">${mat.basePrice}</Text.Block>
            <Text.Block paddingY="major-1">{mat.priceModifier * 100}%</Text.Block>
            <Text.Block paddingY="major-1">
              ${(mat.priceModifier * mat.basePrice).toFixed(2)}
            </Text.Block>
            <Text.Block paddingY="major-1">
              ${(mat.priceModifier * mat.basePrice - mat.cost).toFixed(2)}
            </Text.Block>
          </Columns.Column>
        </Columns>
      </Flex>
      <Flex
        className="data-wrapper"
        flexDirection="column"
        margin="major-2"
        marginTop="30px"
        flex="1 1 25%"
      >
        <Box alignContent="flex-start" marginTop="major-2">
          <Button
            size="small"
            iconBefore="solid-edit"
            palette="warning"
            variant="outlined"
            onClick={() => setIsEditing(true)}
          >
            Edit
          </Button>
          <Button
            size="small"
            iconBefore="solid-trash-alt"
            marginLeft="major-1"
            palette="danger"
            variant="outlined"
            onClick={() => onDelete()}
          >
            Delete
          </Button>
        </Box>
        <Flex flexDirection="column" marginTop="major-2" fontSize="100">
          {mat?.id && <Text>id: {mat.id}</Text>}
          {mat?.__typename && <Text>type: {mat.__typename}</Text>}
          {mat?.createdAt && <Text>Created: {new Date(mat.createdAt).toDateString()}</Text>}
          {mat?.updatedAt && <Text>Updated: {new Date(mat.updatedAt).toDateString()}</Text>}
        </Flex>
      </Flex>
    </Flex>
  );
};

export default PrintView;
