import { TypedDocumentNode as DocumentNode } from "@graphql-typed-document-node/core";
import {
  FieldPolicy,
  FieldReadFunction,
  TypePolicies,
} from "@apollo/client/cache";
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The javascript `Date` as string. Type represents date and time as the ISO Date string. */
  DateTime: any;
};

export type Image = {
  __typename?: "Image";
  id: Scalars["ID"];
  imageName: Scalars["String"];
  fileExtension: Scalars["String"];
  imageUrl: Scalars["String"];
  altText: Scalars["String"];
  aspectRatio?: Maybe<Scalars["String"]>;
  size: Scalars["String"];
  width: Scalars["Int"];
  height: Scalars["Int"];
  isPortrait: Scalars["Boolean"];
  isPanoramic: Scalars["Boolean"];
  photo?: Maybe<Photo>;
  createdAt: Scalars["DateTime"];
  updatedAt: Scalars["DateTime"];
};

export type Location = {
  __typename?: "Location";
  /** The ID of the location. It is unique, numeric and automatically-generated. */
  id: Scalars["ID"];
  /** The name of the Location. It is required and must be unique. */
  name: Scalars["String"];
  /** A tag for the Location. It is required and must be unique. */
  tag: Scalars["String"];
  /** A description of the location, used as a vignette at the top of the Location's photos page. */
  description: Scalars["String"];
  /** Optional. A map of the location used in conenction with the vignette at the top of the Location's photos page. */
  coverImage?: Maybe<Image>;
  /** Nullable. An array of photos taken at the Location. */
  photos?: Maybe<Array<Photo>>;
  /** Count of photos taken at the location on the site. */
  countOfPhotos: Scalars["Int"];
  createdAt: Scalars["DateTime"];
  updatedAt: Scalars["DateTime"];
};

export type Collection = {
  __typename?: "Collection";
  id: Scalars["ID"];
  name: Scalars["String"];
  tag: Scalars["String"];
  description: Scalars["String"];
  /** Optional. An image of the tag used in connection with the vignetter at the top of the Tag's photos page. */
  coverImage?: Maybe<Image>;
  photosInCollection?: Maybe<Array<PhotoCollection>>;
  /** Count of photos in the collection. */
  countOfPhotos: Scalars["Int"];
  createdAt: Scalars["DateTime"];
  updatedAt: Scalars["DateTime"];
};

export type PhotoCollection = {
  __typename?: "PhotoCollection";
  collectionId: Collection;
  collection: Collection;
  photoId: Photo;
  photo: Photo;
};

export type Photographer = {
  __typename?: "Photographer";
  id: Scalars["ID"];
  /** The artist's full name */
  name: Scalars["String"];
  /** The artist's first name. */
  firstName: Scalars["String"];
  /** The artist's last name. */
  lastName: Scalars["String"];
  /** The artist's email address. */
  email: Scalars["String"];
  /** The Image for the artist's portrait. */
  coverImage?: Maybe<Image>;
  /** The artist's biography. */
  bio: Scalars["String"];
  /** Photos attributed to the artist. */
  photos?: Maybe<Array<Photo>>;
  /** Count of photos attributed to the photographer on the site. */
  countOfPhotos: Scalars["Int"];
  /** Date record was created. */
  createdAt: Scalars["DateTime"];
  /** Date record was most recently updated. */
  updatedAt: Scalars["DateTime"];
};

export type Subject = {
  __typename?: "Subject";
  id: Scalars["ID"];
  name: Scalars["String"];
  description?: Maybe<Scalars["String"]>;
  /** Optional. An image of the subject used in connection with the vignette at the top of the Subject's photos page. */
  coverImage?: Maybe<Image>;
  photosOfSubject?: Maybe<Array<PhotoSubject>>;
  /** Count of photos of the subject on the site. */
  countOfPhotos: Scalars["Int"];
  createdAt: Scalars["DateTime"];
  updatedAt: Scalars["DateTime"];
};

export type PhotoSubject = {
  __typename?: "PhotoSubject";
  subjectId: Subject;
  subject: Subject;
  photoId: Photo;
  photo: Photo;
};

export type Tag = {
  __typename?: "Tag";
  id: Scalars["ID"];
  /** The name of the tag. */
  name: Scalars["String"];
  /** Optional. A description of the tag used in connection with the vignette at the top of the Tag's photo page. */
  description: Scalars["String"];
  /** Optional. An image of the tag used in connection with the vignette at the top of the Tag's photos page. */
  coverImage?: Maybe<Image>;
  /** A connection through a join table to the photos tagged with the tag. */
  photosWithTag?: Maybe<Array<PhotoTag>>;
  /** Count of photos of the tag on the site. */
  countOfPhotos: Scalars["Int"];
  createdAt: Scalars["DateTime"];
  updatedAt: Scalars["DateTime"];
};

export type PhotoTag = {
  __typename?: "PhotoTag";
  tagId: Tag;
  tag: Tag;
  photoId: Photo;
  photo: Photo;
};

export type UserShoppingBagItem = {
  __typename?: "UserShoppingBagItem";
  userId: User;
  user: User;
  photoId: Photo;
  photo: Photo;
};

export type Photo = {
  __typename?: "Photo";
  id: Scalars["ID"];
  skuGenerator: Scalars["Int"];
  sku: Scalars["Int"];
  sortIndex: Scalars["Int"];
  title: Scalars["String"];
  description: Scalars["String"];
  isFeatured: Scalars["Boolean"];
  isLimitedEdition: Scalars["Boolean"];
  isHidden: Scalars["Boolean"];
  rating: Scalars["Int"];
  printTypes: Array<Scalars["String"]>;
  basePrice12?: Maybe<Scalars["Float"]>;
  priceModifier12?: Maybe<Scalars["Float"]>;
  basePrice16?: Maybe<Scalars["Float"]>;
  priceModifier16?: Maybe<Scalars["Float"]>;
  basePrice20?: Maybe<Scalars["Float"]>;
  priceModifier20?: Maybe<Scalars["Float"]>;
  basePrice24?: Maybe<Scalars["Float"]>;
  priceModifier24?: Maybe<Scalars["Float"]>;
  basePrice30?: Maybe<Scalars["Float"]>;
  priceModifier30?: Maybe<Scalars["Float"]>;
  photographer?: Maybe<Photographer>;
  location?: Maybe<Location>;
  images: Array<Image>;
  /** A 1,200px x 600px image for sharing. */
  sharingImage?: Maybe<Image>;
  subjectsInPhoto?: Maybe<Array<PhotoSubject>>;
  tagsForPhoto?: Maybe<Array<PhotoTag>>;
  collectionsForPhoto?: Maybe<Array<PhotoCollection>>;
  favoritedByUsers?: Maybe<Array<UserFavorite>>;
  inShoppingBagsOfUsers?: Maybe<Array<UserShoppingBagItem>>;
  createdAt: Scalars["DateTime"];
  updatedAt: Scalars["DateTime"];
};

export type UserFavorite = {
  __typename?: "UserFavorite";
  userId: User;
  user: User;
  photoId: Photo;
  photo: Photo;
};

export type User = {
  __typename?: "User";
  id: Scalars["ID"];
  name: Scalars["String"];
  email: Scalars["String"];
  email_verified?: Maybe<Scalars["DateTime"]>;
  image?: Maybe<Scalars["String"]>;
  roles: Array<Scalars["String"]>;
  isSubscribed: Scalars["Boolean"];
  userFavorites: Array<UserFavorite>;
  userShoppingBagItems: Array<UserShoppingBagItem>;
  createdAt: Scalars["DateTime"];
  updatedAt: Scalars["DateTime"];
};

export type SuccessMessageResponse = {
  __typename?: "SuccessMessageResponse";
  success: Scalars["Boolean"];
  message: Scalars["String"];
};

export type SearchCollectionsResponse = {
  __typename?: "SearchCollectionsResponse";
  datalist: Array<Collection>;
};

export type AddCollectionResponse = {
  __typename?: "AddCollectionResponse";
  success: Scalars["Boolean"];
  message: Scalars["String"];
  newCollection?: Maybe<Collection>;
};

export type UpdateCollectionResponse = {
  __typename?: "UpdateCollectionResponse";
  success: Scalars["Boolean"];
  message: Scalars["String"];
  updatedCollection?: Maybe<Collection>;
};

export type AllPhotosInCollectionResponse = {
  __typename?: "AllPhotosInCollectionResponse";
  collectionInfo: Collection;
  total: Scalars["Int"];
  photos: Array<Photo>;
};

export type Frame = {
  __typename?: "Frame";
  id: Scalars["ID"];
  name: Scalars["String"];
  displayName: Scalars["String"];
  description?: Maybe<Scalars["String"]>;
  material: Scalars["String"];
  color: Scalars["String"];
  printType: Scalars["String"];
  /** Optional. An image of the frame. */
  coverImage?: Maybe<Image>;
  frameSku: Scalars["String"];
  aspectRatio: Scalars["String"];
  dimension1: Scalars["Float"];
  dimension2: Scalars["Float"];
  cost: Scalars["Float"];
  shippingCost: Scalars["Float"];
  basePrice: Scalars["Float"];
  priceModifier: Scalars["Float"];
  createdAt: Scalars["DateTime"];
  updatedAt: Scalars["DateTime"];
};

export type SearchFramesResponse = {
  __typename?: "SearchFramesResponse";
  datalist: Array<Frame>;
};

export type AddFrameResponse = {
  __typename?: "AddFrameResponse";
  success: Scalars["Boolean"];
  message: Scalars["String"];
  newFrame?: Maybe<Frame>;
};

export type UpdateFrameResponse = {
  __typename?: "UpdateFrameResponse";
  success: Scalars["Boolean"];
  message: Scalars["String"];
  updatedFrame?: Maybe<Frame>;
};

export type AddImageResponse = {
  __typename?: "AddImageResponse";
  success: Scalars["Boolean"];
  message: Scalars["String"];
  newImage?: Maybe<Image>;
};

export type UpdateImageResponse = {
  __typename?: "UpdateImageResponse";
  success: Scalars["Boolean"];
  message: Scalars["String"];
  updatedImage?: Maybe<Image>;
};

export type PaginatedResponse = {
  __typename?: "PaginatedResponse";
  startCursor: Scalars["Int"];
  endCursor: Scalars["Int"];
  total: Scalars["Int"];
};

export type SearchLocationsResponse = {
  __typename?: "SearchLocationsResponse";
  datalist: Array<Location>;
};

export type LocationsResponse = {
  __typename?: "LocationsResponse";
  locations: Array<Location>;
};

export type AllPhotosAtLocationResponse = {
  __typename?: "AllPhotosAtLocationResponse";
  locationInfo: Location;
  total: Scalars["Int"];
  photos: Array<Photo>;
};

export type GroupedPhotosAtLocationResponse = {
  __typename?: "GroupedPhotosAtLocationResponse";
  photos: Array<Photo>;
  locationInfo: Location;
};

export type PaginatedPhotosAtLocationResponse = {
  __typename?: "PaginatedPhotosAtLocationResponse";
  photos: Array<Photo>;
  pageInfo: PaginatedResponse;
  locationInfo: Location;
};

export type AddLocationResponse = {
  __typename?: "AddLocationResponse";
  success: Scalars["Boolean"];
  message: Scalars["String"];
  newLocation?: Maybe<Location>;
};

export type UpdateLocationResponse = {
  __typename?: "UpdateLocationResponse";
  success: Scalars["Boolean"];
  message: Scalars["String"];
  updatedLocation?: Maybe<Location>;
};

export type Mat = {
  __typename?: "Mat";
  id: Scalars["ID"];
  name: Scalars["String"];
  displayName: Scalars["String"];
  description?: Maybe<Scalars["String"]>;
  color: Scalars["String"];
  printType: Scalars["String"];
  /** Optional. An image of the mat. */
  coverImage?: Maybe<Image>;
  matSku: Scalars["String"];
  aspectRatio: Scalars["String"];
  dimension1: Scalars["Float"];
  dimension2: Scalars["Float"];
  cost: Scalars["Float"];
  shippingCost: Scalars["Float"];
  basePrice: Scalars["Float"];
  priceModifier: Scalars["Float"];
  createdAt: Scalars["DateTime"];
  updatedAt: Scalars["DateTime"];
};

export type SearchMatsResponse = {
  __typename?: "SearchMatsResponse";
  datalist: Array<Mat>;
};

export type AddMatResponse = {
  __typename?: "AddMatResponse";
  success: Scalars["Boolean"];
  message: Scalars["String"];
  newMat?: Maybe<Mat>;
};

export type UpdateMatResponse = {
  __typename?: "UpdateMatResponse";
  success: Scalars["Boolean"];
  message: Scalars["String"];
  updatedMat?: Maybe<Mat>;
};

export type ItemCountList = {
  __typename?: "ItemCountList";
  itemCountList: Array<ItemCount>;
};

export type ItemCount = {
  __typename?: "ItemCount";
  name?: Maybe<Scalars["String"]>;
  count: Scalars["Int"];
};

export type Print = {
  __typename?: "Print";
  id: Scalars["ID"];
  name: Scalars["String"];
  description?: Maybe<Scalars["String"]>;
  type: Scalars["String"];
  /** Optional. An image of the print. */
  coverImage?: Maybe<Image>;
  printSku: Scalars["String"];
  aspectRatio: Scalars["String"];
  dimension1: Scalars["Float"];
  dimension2: Scalars["Float"];
  cost: Scalars["Float"];
  shippingCost: Scalars["Float"];
  basePrice: Scalars["Float"];
  priceModifier: Scalars["Float"];
  createdAt: Scalars["DateTime"];
  updatedAt: Scalars["DateTime"];
};

export type PrintsResponse = {
  __typename?: "PrintsResponse";
  success: Scalars["Boolean"];
  message: Scalars["String"];
  prints?: Maybe<Array<Print>>;
};

export type MatsResponse = {
  __typename?: "MatsResponse";
  success: Scalars["Boolean"];
  message: Scalars["String"];
  mats?: Maybe<Array<Mat>>;
};

export type FinishOptions = {
  __typename?: "FinishOptions";
  prints: Array<Print>;
  mats: Array<Mat>;
  frames: Array<Frame>;
};

export type PhotoWithFinishOptionsResponse = {
  __typename?: "PhotoWithFinishOptionsResponse";
  success: Scalars["Boolean"];
  message: Scalars["String"];
  photo?: Maybe<Photo>;
  prints?: Maybe<Array<Print>>;
  mats?: Maybe<Array<Mat>>;
  frames?: Maybe<Array<Frame>>;
};

export type SearchPhotographersResponse = {
  __typename?: "SearchPhotographersResponse";
  datalist: Array<Photographer>;
};

export type PhotographersResponse = {
  __typename?: "PhotographersResponse";
  photographers: Array<Photographer>;
};

export type AllPhotosByPhotographerResponse = {
  __typename?: "AllPhotosByPhotographerResponse";
  photographerInfo: Photographer;
  total: Scalars["Int"];
  photos: Array<Photo>;
};

export type GroupedPhotosByPhotographerResponse = {
  __typename?: "GroupedPhotosByPhotographerResponse";
  photos: Array<Photo>;
  photographerInfo: Photographer;
};

export type PaginatedPhotosByPhotographerResponse = {
  __typename?: "PaginatedPhotosByPhotographerResponse";
  photos: Array<Photo>;
  pageInfo: PaginatedResponse;
  photographerInfo: Photographer;
};

export type AddPhotographerResponse = {
  __typename?: "AddPhotographerResponse";
  success: Scalars["Boolean"];
  message: Scalars["String"];
  newPhotographer?: Maybe<Photographer>;
};

export type UpdatePhotographerResponse = {
  __typename?: "UpdatePhotographerResponse";
  success: Scalars["Boolean"];
  message: Scalars["String"];
  updatedPhotographer?: Maybe<Photographer>;
};

export type SelectionOption = {
  __typename?: "SelectionOption";
  id: Scalars["Int"];
  name: Scalars["String"];
};

export type PhotosResponse = {
  __typename?: "PhotosResponse";
  photos: Array<Photo>;
};

export type PhotographerSelectionOption = {
  __typename?: "PhotographerSelectionOption";
  id: Scalars["Int"];
  name: Scalars["String"];
};

export type LocationSelectionOption = {
  __typename?: "LocationSelectionOption";
  id: Scalars["Int"];
  name: Scalars["String"];
};

export type SubjectSelectionOption = {
  __typename?: "SubjectSelectionOption";
  id: Scalars["Int"];
  name: Scalars["String"];
};

export type TagSelectionOption = {
  __typename?: "TagSelectionOption";
  id: Scalars["Int"];
  name: Scalars["String"];
};

export type CollectionSelectionOption = {
  __typename?: "CollectionSelectionOption";
  id: Scalars["Int"];
  name: Scalars["String"];
};

export type PhotoEditSelectionOptions = {
  __typename?: "PhotoEditSelectionOptions";
  photographers: Array<PhotographerSelectionOption>;
  locations: Array<LocationSelectionOption>;
  subjects: Array<SubjectSelectionOption>;
  tags: Array<TagSelectionOption>;
  collections: Array<CollectionSelectionOption>;
};

export type SearchPhotosResponse = {
  __typename?: "SearchPhotosResponse";
  datalist: Array<Photo>;
};

export type PaginatedAllPhotosResponse = {
  __typename?: "PaginatedAllPhotosResponse";
  photos: Array<Photo>;
  pageInfo: PaginatedResponse;
};

export type PaginatedFeaturedPhotosResponse = {
  __typename?: "PaginatedFeaturedPhotosResponse";
  photos: Array<Photo>;
  pageInfo: PaginatedResponse;
};

export type AddPhotoResponse = {
  __typename?: "AddPhotoResponse";
  success: Scalars["Boolean"];
  message: Scalars["String"];
  newPhoto?: Maybe<Photo>;
};

export type UpdatePhotoResponse = {
  __typename?: "UpdatePhotoResponse";
  success: Scalars["Boolean"];
  message: Scalars["String"];
  updatedPhoto?: Maybe<Photo>;
};

export type AllFeaturedPhotosResponse = {
  __typename?: "AllFeaturedPhotosResponse";
  total: Scalars["Int"];
  photos: Array<Photo>;
};

export type SearchPrintsResponse = {
  __typename?: "SearchPrintsResponse";
  datalist: Array<Print>;
};

export type AddPrintResponse = {
  __typename?: "AddPrintResponse";
  success: Scalars["Boolean"];
  message: Scalars["String"];
  newPrint?: Maybe<Print>;
};

export type UpdatePrintResponse = {
  __typename?: "UpdatePrintResponse";
  success: Scalars["Boolean"];
  message: Scalars["String"];
  updatedPrint?: Maybe<Print>;
};

export type SubjectsResponse = {
  __typename?: "SubjectsResponse";
  subjects: Array<Subject>;
};

export type SearchSubjectsResponse = {
  __typename?: "SearchSubjectsResponse";
  datalist: Array<Subject>;
};

export type AllPhotosOfSubjectResponse = {
  __typename?: "AllPhotosOfSubjectResponse";
  subjectInfo: Subject;
  total: Scalars["Int"];
  photos: Array<Photo>;
};

export type GroupedPhotosOfSubjectResponse = {
  __typename?: "GroupedPhotosOfSubjectResponse";
  photos: Array<Photo>;
  subjectInfo: Subject;
};

export type PaginatedPhotosOfSubjectResponse = {
  __typename?: "PaginatedPhotosOfSubjectResponse";
  photos: Array<Photo>;
  pageInfo: PaginatedResponse;
  subjectInfo: Subject;
};

export type AddSubjectResponse = {
  __typename?: "AddSubjectResponse";
  success: Scalars["Boolean"];
  message: Scalars["String"];
  newSubject?: Maybe<Subject>;
};

export type UpdateSubjectResponse = {
  __typename?: "UpdateSubjectResponse";
  success: Scalars["Boolean"];
  message: Scalars["String"];
  updatedSubject?: Maybe<Subject>;
};

export type SearchTagsResponse = {
  __typename?: "SearchTagsResponse";
  datalist: Array<Tag>;
};

export type AllPhotosWithTagResponse = {
  __typename?: "AllPhotosWithTagResponse";
  tagInfo: Tag;
  total: Scalars["Int"];
  photos: Array<Photo>;
};

export type GroupedPhotosWithTagResponse = {
  __typename?: "GroupedPhotosWithTagResponse";
  photos: Array<Photo>;
  tagInfo: Tag;
};

export type PaginatedPhotosWithTagResponse = {
  __typename?: "PaginatedPhotosWithTagResponse";
  photos: Array<Photo>;
  pageInfo: PaginatedResponse;
  tagInfo: Tag;
};

export type AddTagResponse = {
  __typename?: "AddTagResponse";
  success: Scalars["Boolean"];
  message: Scalars["String"];
  newTag?: Maybe<Tag>;
};

export type UpdateTagResponse = {
  __typename?: "UpdateTagResponse";
  success: Scalars["Boolean"];
  message: Scalars["String"];
  updatedTag?: Maybe<Tag>;
};

export type FavoritesResponse = {
  __typename?: "FavoritesResponse";
  /** Returns list of Photo objects in user's favorites. */
  photoList?: Maybe<Array<Photo>>;
};

export type AddPhotoToFavoritesResponse = {
  __typename?: "AddPhotoToFavoritesResponse";
  success: Scalars["Boolean"];
  message: Scalars["String"];
  addedPhotoWithId?: Maybe<Scalars["ID"]>;
};

export type RemovePhotoFromFavoritesResponse = {
  __typename?: "RemovePhotoFromFavoritesResponse";
  success: Scalars["Boolean"];
  message: Scalars["String"];
  removedPhotoWithId?: Maybe<Scalars["ID"]>;
};

export type ShoppingBagItemsResponse = {
  __typename?: "ShoppingBagItemsResponse";
  /** Returns list of Photo objects in user's shopping bag. */
  photoList?: Maybe<Array<Photo>>;
};

export type AddPhotoToShoppingBagResponse = {
  __typename?: "AddPhotoToShoppingBagResponse";
  success: Scalars["Boolean"];
  message: Scalars["String"];
  addedPhotoWithId?: Maybe<Scalars["ID"]>;
};

export type RemovePhotoFromShoppingBagResponse = {
  __typename?: "RemovePhotoFromShoppingBagResponse";
  success: Scalars["Boolean"];
  message: Scalars["String"];
  removedPhotoWithId?: Maybe<Scalars["ID"]>;
};

export type UserPreferencesResponse = {
  __typename?: "UserPreferencesResponse";
  favorites?: Maybe<Array<UserFavorite>>;
  shoppingBagItems?: Maybe<Array<UserShoppingBagItem>>;
};

/** Inputs to create a new Collection. */
export type AddCollectionInput = {
  /** Name of the collection. Used in Photo Info links. */
  name: Scalars["String"];
  tag: Scalars["String"];
  /** A vignette used to introduce the subject. */
  description: Scalars["String"];
  /** A cover image to be displayed next to the opening vignette. */
  coverImageId?: Maybe<Scalars["Int"]>;
};

/** Optional inputs to be used to update the Collection Info. */
export type UpdateCollectionInput = {
  /** Optional. Name of the collection. Used in Photo Info links. */
  name?: Maybe<Scalars["String"]>;
  /** An optional tag for the collection. */
  tag?: Maybe<Scalars["String"]>;
  /** Optional. A vignette used to introduce the subject. */
  description?: Maybe<Scalars["String"]>;
  /** Optional. A cover image to be displayed next to the opening vignette. */
  coverImageId?: Maybe<Scalars["Float"]>;
};

export type SearchCollectionsInput = {
  searchString: Scalars["String"];
};

export type AllPhotosInCollectionInput = {
  name?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["Float"]>;
};

export type AddFrameInput = {
  name: Scalars["String"];
  displayName: Scalars["String"];
  description?: Maybe<Scalars["String"]>;
  material: Scalars["String"];
  color: Scalars["String"];
  printType: Scalars["String"];
  coverImageId?: Maybe<Scalars["Float"]>;
  frameSku: Scalars["String"];
  dimension1: Scalars["Float"];
  dimension2: Scalars["Float"];
  cost: Scalars["Float"];
  shippingCost: Scalars["Float"];
  basePrice: Scalars["Float"];
  priceModifier: Scalars["Float"];
};

export type UpdateFrameInput = {
  name?: Maybe<Scalars["String"]>;
  displayName?: Maybe<Scalars["String"]>;
  description?: Maybe<Scalars["String"]>;
  material?: Maybe<Scalars["String"]>;
  color?: Maybe<Scalars["String"]>;
  printType?: Maybe<Scalars["String"]>;
  coverImageId?: Maybe<Scalars["Float"]>;
  frameSku?: Maybe<Scalars["String"]>;
  dimension1?: Maybe<Scalars["Float"]>;
  dimension2?: Maybe<Scalars["Float"]>;
  cost?: Maybe<Scalars["Float"]>;
  shippingCost?: Maybe<Scalars["Float"]>;
  basePrice?: Maybe<Scalars["Float"]>;
  priceModifier?: Maybe<Scalars["Float"]>;
};

export type SearchFramesInput = {
  searchString: Scalars["String"];
};

export type AddImageInput = {
  imageName?: Maybe<Scalars["String"]>;
  fileExtension?: Maybe<Scalars["String"]>;
  imageUrl?: Maybe<Scalars["String"]>;
  altText?: Maybe<Scalars["String"]>;
  size?: Maybe<Scalars["String"]>;
  width?: Maybe<Scalars["Int"]>;
  height?: Maybe<Scalars["Int"]>;
  photoId?: Maybe<Scalars["Float"]>;
};

export type UpdateImageInput = {
  imageName?: Maybe<Scalars["String"]>;
  fileExtension?: Maybe<Scalars["String"]>;
  imageUrl?: Maybe<Scalars["String"]>;
  altText?: Maybe<Scalars["String"]>;
  size?: Maybe<Scalars["String"]>;
  width?: Maybe<Scalars["Int"]>;
  height?: Maybe<Scalars["Int"]>;
  photoId?: Maybe<Scalars["Float"]>;
};

/** Inputs to create a new Location entity. */
export type AddLocationInput = {
  /** Name of the location. */
  name: Scalars["String"];
  /** Tag used to ID the location in Photo Info links. */
  tag: Scalars["String"];
  /** Vignette describing the location. */
  description: Scalars["String"];
  /** id for cover image. */
  coverImageId?: Maybe<Scalars["Int"]>;
};

/** Optional inputs to be used to update the Location Info. */
export type UpdateLocationInput = {
  /** Optional. Name of the Location. */
  name?: Maybe<Scalars["String"]>;
  /** Optional. Tag used to identify the Location. */
  tag?: Maybe<Scalars["String"]>;
  /** Vignette describing the location. */
  description?: Maybe<Scalars["String"]>;
  /** Map of the location. Used at the top of the Location's Photo Gallery. Used to look up the Map and add it to the One-to-One relationship. */
  coverImageId?: Maybe<Scalars["Float"]>;
};

export type SearchLocationsInput = {
  searchString: Scalars["String"];
};

export type LocationSearchSortInput = {
  filter?: Maybe<Scalars["String"]>;
  orderBy?: Maybe<Scalars["String"]>;
  direction?: Maybe<SortDirection>;
};

/** Sort direction */
export enum SortDirection {
  Asc = "ASC",
  Desc = "DESC",
}

export type AllPhotosAtLocationInput = {
  name?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["Float"]>;
};

export type GroupedPhotosAtLocationInput = {
  name?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["Float"]>;
};

export type PaginatedPhotosAtLocationInput = {
  name?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["Float"]>;
  cursor?: Maybe<Scalars["Int"]>;
  take: Scalars["Int"];
};

export type AddMatInput = {
  name: Scalars["String"];
  shortDescription: Scalars["String"];
  description?: Maybe<Scalars["String"]>;
  color: Scalars["String"];
  printType: Scalars["String"];
  coverImageId?: Maybe<Scalars["Float"]>;
  matSku: Scalars["String"];
  dimension1: Scalars["Float"];
  dimension2: Scalars["Float"];
  cost: Scalars["Float"];
  shippingCost: Scalars["Float"];
  basePrice: Scalars["Float"];
  priceModifier: Scalars["Float"];
};

export type UpdateMatInput = {
  name?: Maybe<Scalars["String"]>;
  shortDescription?: Maybe<Scalars["String"]>;
  description?: Maybe<Scalars["String"]>;
  color?: Maybe<Scalars["String"]>;
  printType?: Maybe<Scalars["String"]>;
  coverImageId?: Maybe<Scalars["Float"]>;
  matSku?: Maybe<Scalars["String"]>;
  dimension1?: Maybe<Scalars["Float"]>;
  dimension2?: Maybe<Scalars["Float"]>;
  cost?: Maybe<Scalars["Float"]>;
  shippingCost?: Maybe<Scalars["Float"]>;
  basePrice?: Maybe<Scalars["Float"]>;
  priceModifier?: Maybe<Scalars["Float"]>;
};

export type SearchMatsInput = {
  searchString: Scalars["String"];
};

export type PhotoCollectionInput = {
  photoId: Scalars["Int"];
  collectionId: Scalars["Int"];
};

export type PrintsInput = {
  type: Scalars["String"];
  aspectRatio: Scalars["String"];
};

export type MatsInput = {
  printType: Scalars["String"];
  dimension1: Scalars["String"];
  dimension2: Scalars["String"];
};

/** Inputs to create a new Photographer entity. */
export type AddPhotographerInput = {
  /** Photographer's full name. */
  name: Scalars["String"];
  /** Photographer's first name. */
  firstName: Scalars["String"];
  /** Photographer's last name. */
  lastName: Scalars["String"];
  /** Photographer's email address. */
  email: Scalars["String"];
  /** Short biography for Photographer. Displayed at the top of the Photographer's photo gallery. */
  bio: Scalars["String"];
  /** id for cover image. */
  coverImageId?: Maybe<Scalars["Int"]>;
};

/** Inputs to update a Photographer entity. */
export type UpdatePhotographerInput = {
  /** Optional: Photographer's full name. */
  name?: Maybe<Scalars["String"]>;
  /** Optional: Photographer's first name. */
  firstName?: Maybe<Scalars["String"]>;
  /** Optional: Photographer's last name. */
  lastName?: Maybe<Scalars["String"]>;
  /** Optional: Photographer's email address. */
  email?: Maybe<Scalars["String"]>;
  /** Optional: Short biography for Photographer. Displayed at the top of the Photographer's photo gallery. */
  bio?: Maybe<Scalars["String"]>;
  /** id for cover image. */
  coverImageId?: Maybe<Scalars["Int"]>;
};

export type SearchPhotographersInput = {
  searchString: Scalars["String"];
};

export type AllPhotosByPhotographerInput = {
  id?: Maybe<Scalars["Float"]>;
  name?: Maybe<Scalars["String"]>;
};

export type GroupedPhotosByPhotographerInput = {
  id?: Maybe<Scalars["Float"]>;
  name?: Maybe<Scalars["String"]>;
};

export type PaginatedPhotosByPhotographerInput = {
  id?: Maybe<Scalars["Float"]>;
  name?: Maybe<Scalars["String"]>;
  cursor?: Maybe<Scalars["Int"]>;
  take: Scalars["Int"];
};

export type AddPhotoInput = {
  title?: Maybe<Scalars["String"]>;
  description?: Maybe<Scalars["String"]>;
  isFeatured?: Maybe<Scalars["Boolean"]>;
  isLimitedEdition?: Maybe<Scalars["Boolean"]>;
  rating?: Maybe<Scalars["Int"]>;
  basePrice12?: Maybe<Scalars["Float"]>;
  priceModifier12?: Maybe<Scalars["Float"]>;
  basePrice16?: Maybe<Scalars["Float"]>;
  priceModifier16?: Maybe<Scalars["Float"]>;
  basePrice20?: Maybe<Scalars["Float"]>;
  priceModifier20?: Maybe<Scalars["Float"]>;
  basePrice24?: Maybe<Scalars["Float"]>;
  priceModifier24?: Maybe<Scalars["Float"]>;
  basePrice30?: Maybe<Scalars["Float"]>;
  priceModifier30?: Maybe<Scalars["Float"]>;
  photographerId?: Maybe<Scalars["Int"]>;
  locationId?: Maybe<Scalars["Int"]>;
  subjectIds?: Maybe<Array<Scalars["Int"]>>;
  tagIds?: Maybe<Array<Scalars["Int"]>>;
  collectionIds?: Maybe<Array<Scalars["Int"]>>;
  imageId?: Maybe<Scalars["Int"]>;
  sharingImageId?: Maybe<Scalars["Int"]>;
};

export type UpdatePhotoInput = {
  title?: Maybe<Scalars["String"]>;
  description?: Maybe<Scalars["String"]>;
  isHidden?: Maybe<Scalars["Boolean"]>;
  isFeatured?: Maybe<Scalars["Boolean"]>;
  isLimitedEdition?: Maybe<Scalars["Boolean"]>;
  rating?: Maybe<Scalars["Int"]>;
  basePrice12?: Maybe<Scalars["Float"]>;
  priceModifier12?: Maybe<Scalars["Float"]>;
  basePrice16?: Maybe<Scalars["Float"]>;
  priceModifier16?: Maybe<Scalars["Float"]>;
  basePrice20?: Maybe<Scalars["Float"]>;
  priceModifier20?: Maybe<Scalars["Float"]>;
  basePrice24?: Maybe<Scalars["Float"]>;
  priceModifier24?: Maybe<Scalars["Float"]>;
  basePrice30?: Maybe<Scalars["Float"]>;
  priceModifier30?: Maybe<Scalars["Float"]>;
  imageId?: Maybe<Scalars["Int"]>;
  sharingImageId?: Maybe<Scalars["Int"]>;
  photographerId?: Maybe<Scalars["Int"]>;
  locationId?: Maybe<Scalars["Int"]>;
  subjectIds?: Maybe<Array<Scalars["Int"]>>;
  tagIds?: Maybe<Array<Scalars["Int"]>>;
  collectionIds?: Maybe<Array<Scalars["Int"]>>;
};

export type PhotoSearchSortInput = {
  filter?: Maybe<Scalars["String"]>;
  orderBy?: Maybe<Scalars["String"]>;
  direction?: Maybe<SortDirection>;
};

export type SearchPhotosInput = {
  searchString: Scalars["String"];
};

export type PaginatedPhotosInput = {
  cursor?: Maybe<Scalars["Int"]>;
  take: Scalars["Int"];
};

export type AddPrintInput = {
  name: Scalars["String"];
  description?: Maybe<Scalars["String"]>;
  type: Scalars["String"];
  coverImageId?: Maybe<Scalars["Float"]>;
  printSku: Scalars["String"];
  dimension1: Scalars["Float"];
  dimension2: Scalars["Float"];
  cost: Scalars["Float"];
  shippingCost: Scalars["Float"];
  basePrice: Scalars["Float"];
  priceModifier: Scalars["Float"];
};

export type UpdatePrintInput = {
  name?: Maybe<Scalars["String"]>;
  description?: Maybe<Scalars["String"]>;
  type?: Maybe<Scalars["String"]>;
  coverImageId?: Maybe<Scalars["Float"]>;
  printSku?: Maybe<Scalars["String"]>;
  dimension1?: Maybe<Scalars["Float"]>;
  dimension2?: Maybe<Scalars["Float"]>;
  cost?: Maybe<Scalars["Float"]>;
  shippingCost?: Maybe<Scalars["Float"]>;
  basePrice?: Maybe<Scalars["Float"]>;
  priceModifier?: Maybe<Scalars["Float"]>;
};

export type SearchPrintsInput = {
  searchString: Scalars["String"];
};

/** Inputs to create a new Subject entity. */
export type AddSubjectInput = {
  /** Name of the subject. Used in Photo Info links. */
  name: Scalars["String"];
  /** A vignette used to introduce the subject. */
  description?: Maybe<Scalars["String"]>;
  /** A cover image to be displayed next to the opening vignette. */
  coverImageId?: Maybe<Scalars["Int"]>;
};

/** Optional inputs to be used to update the Subject Info. */
export type UpdateSubjectInput = {
  /** Optional. Name of the subject. Used in Photo Info links. */
  name?: Maybe<Scalars["String"]>;
  /** Optional. A vignette used to introduce the subject. */
  description?: Maybe<Scalars["String"]>;
  /** Optional. A cover image to be displayed next to the opening vignette. */
  coverImageId?: Maybe<Scalars["Float"]>;
};

export type SubjectSearchSortInput = {
  filter?: Maybe<Scalars["String"]>;
  orderBy?: Maybe<Scalars["String"]>;
  direction?: Maybe<SortDirection>;
};

export type SearchSubjectsInput = {
  searchString: Scalars["String"];
};

export type AllPhotosOfSubjectInput = {
  name: Scalars["String"];
};

export type GroupedPhotosOfSubjectInput = {
  id?: Maybe<Scalars["Float"]>;
  name?: Maybe<Scalars["String"]>;
};

export type PaginatedPhotosOfSubjectInput = {
  name?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["Float"]>;
  cursor?: Maybe<Scalars["Int"]>;
  take: Scalars["Int"];
};

/** Inputs to create a new Tag entity. */
export type AddTagInput = {
  /** Name of the tag. Used in Photo Info links. */
  name: Scalars["String"];
  /** A vignette used to introduce the tag. */
  description: Scalars["String"];
  /** A cover image to be displayed nest to the opening vignette. */
  coverImageId?: Maybe<Scalars["Int"]>;
};

/** Optional inputs to be used to update the Tag Info. */
export type UpdateTagInput = {
  /** Optional. Name of the tag. Used in Photo Info links. */
  name?: Maybe<Scalars["String"]>;
  /** Optional. A vignette used to introduce the subject. */
  description?: Maybe<Scalars["String"]>;
  /** Optional. A cover image to be displayed next to the opening vignette. */
  coverImageId?: Maybe<Scalars["Float"]>;
};

export type SearchTagsInput = {
  searchString: Scalars["String"];
};

export type AllPhotosWithTagInput = {
  id?: Maybe<Scalars["Float"]>;
  name?: Maybe<Scalars["String"]>;
};

export type GroupedPhotosWithTagInput = {
  id?: Maybe<Scalars["Float"]>;
  name?: Maybe<Scalars["String"]>;
};

export type PaginatedPhotosWithTagInput = {
  name?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["Float"]>;
  cursor?: Maybe<Scalars["Int"]>;
  take: Scalars["Int"];
};

export type GetApiTokenInput = {
  userId: Scalars["Float"];
  email: Scalars["String"];
};

export type Query = {
  __typename?: "Query";
  /** Search collections. Returns Collection + Cover Image. */
  searchCollections: SearchCollectionsResponse;
  collectionsWithPhotos: Array<Collection>;
  collection: Collection;
  collectionWithPhotos: Collection;
  allPhotosInCollection: AllPhotosInCollectionResponse;
  /** Search Frames. Returns Frame + Cover Image. */
  searchFrames: SearchFramesResponse;
  framesWithAspectRatio: Array<Frame>;
  frame: Frame;
  images: Array<Image>;
  image: Image;
  /** Returns all Locations + cover images. Sortable and filterable. */
  locations: LocationsResponse;
  /** Search locations. Returns Location + Cover Image. */
  searchLocations: SearchLocationsResponse;
  /** Returns one Location + portrait, only or null, if no matching id is found. Meant to be used on the backend. */
  location?: Maybe<Location>;
  /** Returns one Location + portrait, only or null, if no matching name is found. */
  locationWithName?: Maybe<Location>;
  groupedPhotosAtLocation: GroupedPhotosAtLocationResponse;
  paginatedPhotosAtLocation: PaginatedPhotosAtLocationResponse;
  allPhotosAtLocation: AllPhotosAtLocationResponse;
  /** Search Mats. Returns Mat + Cover Image. */
  searchMats: SearchMatsResponse;
  matsWithAspectRatio: Array<Mat>;
  mat: Mat;
  photoCountBySubject: ItemCountList;
  photoCountByTag: ItemCountList;
  photoCountByCollection: ItemCountList;
  photoCountByLocation: ItemCountList;
  photoCountByPhotographer: ItemCountList;
  printsOfTypeAndAspectRatio: PrintsResponse;
  matsOfTypeAndSize: MatsResponse;
  finishOptions: FinishOptions;
  photoAndFinishOptionsForSku: PhotoWithFinishOptionsResponse;
  /** Returns all Photographers + portraits, only. Meant to be used on the backend. */
  searchPhotographers: SearchPhotographersResponse;
  /** Returns all Photographers + portraits, only. Meant to be used on the backend. */
  sortedPhotographers: PhotographersResponse;
  /** Returns one Photographer + portrait, only or null, if no matching id is found. Meant to be used on the backend. */
  photographer?: Maybe<Photographer>;
  /** Returns one Photographer + portrait AND Photographer's Photos and related data. Meant to be used on the frontend. Used for the Photographer's Gallery. */
  photographerWithName?: Maybe<Photographer>;
  groupedPhotosByPhotographer: GroupedPhotosByPhotographerResponse;
  paginatedPhotosByPhotographer: PaginatedPhotosByPhotographerResponse;
  allPhotosByPhotographer: AllPhotosByPhotographerResponse;
  /** Returns all Photos + all relations. Sortable and filterable. */
  photos: PhotosResponse;
  /** Returns all Photos + all relations. Searchable. */
  searchPhotos: SearchPhotosResponse;
  paginatedPhotos: PaginatedAllPhotosResponse;
  paginatedFeaturedPhotos: PaginatedFeaturedPhotosResponse;
  allFeaturedPhotos: AllFeaturedPhotosResponse;
  photo?: Maybe<Photo>;
  photoWithSku: Photo;
  photoEditOptions: PhotoEditSelectionOptions;
  /** Search Prints. Returns Print + Cover Image. */
  searchPrints: SearchPrintsResponse;
  print: Print;
  userSearch: Array<UserSearchResult>;
  /** Returns all Subjects + cover images. Sortable and filterable. */
  subjects: SubjectsResponse;
  /** Search subjects. Returns Subjects + Cover Image. */
  searchSubjects: SearchSubjectsResponse;
  subject?: Maybe<Subject>;
  subjectWithName?: Maybe<Subject>;
  groupedPhotosOfSubject: GroupedPhotosOfSubjectResponse;
  paginatedPhotosOfSubject: PaginatedPhotosOfSubjectResponse;
  allPhotosOfSubject: AllPhotosOfSubjectResponse;
  /** Search tags. Returns tag + Cover Image. */
  searchTags: SearchTagsResponse;
  tag: Tag;
  tagWithName?: Maybe<Tag>;
  groupedPhotosWithTag: GroupedPhotosWithTagResponse;
  paginatedPhotosWithTag: PaginatedPhotosWithTagResponse;
  allPhotosWithTag: AllPhotosWithTagResponse;
  /** Returns all Photos favorited by the signed in User. */
  favorites: FavoritesResponse;
  /** Returns all Photos in the shopping bag of the signed in User. */
  shoppingBagItems: ShoppingBagItemsResponse;
  users: Array<User>;
  user: User;
  userSummaries: Array<User>;
  newsletterSubscribers: Array<User>;
  getUserPreferences: UserPreferencesResponse;
};

export type QuerySearchCollectionsArgs = {
  input: SearchCollectionsInput;
};

export type QueryCollectionArgs = {
  id: Scalars["Int"];
};

export type QueryCollectionWithPhotosArgs = {
  id: Scalars["Int"];
};

export type QueryAllPhotosInCollectionArgs = {
  input: AllPhotosInCollectionInput;
};

export type QuerySearchFramesArgs = {
  input: SearchFramesInput;
};

export type QueryFramesWithAspectRatioArgs = {
  aspectRatio: Scalars["String"];
};

export type QueryFrameArgs = {
  id: Scalars["Int"];
};

export type QueryImageArgs = {
  id: Scalars["Int"];
};

export type QueryLocationsArgs = {
  input: LocationSearchSortInput;
};

export type QuerySearchLocationsArgs = {
  input: SearchLocationsInput;
};

export type QueryLocationArgs = {
  id: Scalars["Int"];
};

export type QueryLocationWithNameArgs = {
  name: Scalars["String"];
};

export type QueryGroupedPhotosAtLocationArgs = {
  input: GroupedPhotosAtLocationInput;
};

export type QueryPaginatedPhotosAtLocationArgs = {
  input: PaginatedPhotosAtLocationInput;
};

export type QueryAllPhotosAtLocationArgs = {
  input: AllPhotosAtLocationInput;
};

export type QuerySearchMatsArgs = {
  input: SearchMatsInput;
};

export type QueryMatsWithAspectRatioArgs = {
  aspectRatio: Scalars["String"];
};

export type QueryMatArgs = {
  id: Scalars["Int"];
};

export type QueryPrintsOfTypeAndAspectRatioArgs = {
  input: PrintsInput;
};

export type QueryMatsOfTypeAndSizeArgs = {
  input: MatsInput;
};

export type QueryFinishOptionsArgs = {
  aspectRatio: Scalars["String"];
};

export type QueryPhotoAndFinishOptionsForSkuArgs = {
  sku: Scalars["Int"];
};

export type QuerySearchPhotographersArgs = {
  input: SearchPhotographersInput;
};

export type QuerySortedPhotographersArgs = {
  asc: Scalars["Boolean"];
  orderBy: Scalars["String"];
  filter: Scalars["String"];
};

export type QueryPhotographerArgs = {
  id: Scalars["Int"];
};

export type QueryPhotographerWithNameArgs = {
  name: Scalars["String"];
};

export type QueryGroupedPhotosByPhotographerArgs = {
  input: GroupedPhotosByPhotographerInput;
};

export type QueryPaginatedPhotosByPhotographerArgs = {
  input: PaginatedPhotosByPhotographerInput;
};

export type QueryAllPhotosByPhotographerArgs = {
  input: AllPhotosByPhotographerInput;
};

export type QueryPhotosArgs = {
  input: PhotoSearchSortInput;
};

export type QuerySearchPhotosArgs = {
  input: SearchPhotosInput;
};

export type QueryPaginatedPhotosArgs = {
  input: PaginatedPhotosInput;
};

export type QueryPaginatedFeaturedPhotosArgs = {
  input: PaginatedPhotosInput;
};

export type QueryPhotoArgs = {
  id: Scalars["Int"];
};

export type QueryPhotoWithSkuArgs = {
  sku: Scalars["Int"];
};

export type QuerySearchPrintsArgs = {
  input: SearchPrintsInput;
};

export type QueryPrintArgs = {
  id: Scalars["Int"];
};

export type QueryUserSearchArgs = {
  phrase: Scalars["String"];
};

export type QuerySubjectsArgs = {
  input: SubjectSearchSortInput;
};

export type QuerySearchSubjectsArgs = {
  input: SearchSubjectsInput;
};

export type QuerySubjectArgs = {
  id: Scalars["Int"];
};

export type QuerySubjectWithNameArgs = {
  name: Scalars["String"];
};

export type QueryGroupedPhotosOfSubjectArgs = {
  input: GroupedPhotosOfSubjectInput;
};

export type QueryPaginatedPhotosOfSubjectArgs = {
  input: PaginatedPhotosOfSubjectInput;
};

export type QueryAllPhotosOfSubjectArgs = {
  input: AllPhotosOfSubjectInput;
};

export type QuerySearchTagsArgs = {
  input: SearchTagsInput;
};

export type QueryTagArgs = {
  id: Scalars["Int"];
};

export type QueryTagWithNameArgs = {
  name: Scalars["String"];
};

export type QueryGroupedPhotosWithTagArgs = {
  input: GroupedPhotosWithTagInput;
};

export type QueryPaginatedPhotosWithTagArgs = {
  input: PaginatedPhotosWithTagInput;
};

export type QueryAllPhotosWithTagArgs = {
  input: AllPhotosWithTagInput;
};

export type QueryUserArgs = {
  id: Scalars["Int"];
};

export type UserSearchResult = Subject | Tag | Location;

export type Mutation = {
  __typename?: "Mutation";
  addCollection: AddCollectionResponse;
  updateCollection: UpdateCollectionResponse;
  deleteCollection: Scalars["Boolean"];
  addFrame: AddFrameResponse;
  updateFrame: UpdateFrameResponse;
  deleteFrame: Scalars["Boolean"];
  addImage: AddImageResponse;
  updateImage: UpdateImageResponse;
  deleteImage: Scalars["Boolean"];
  addImageToPhoto: Image;
  addLocation: AddLocationResponse;
  updateLocation: UpdateLocationResponse;
  deleteLocation: Scalars["Boolean"];
  addMat: AddMatResponse;
  updateMat: UpdateMatResponse;
  deleteMat: Scalars["Boolean"];
  addPhotoToCollection: Scalars["Boolean"];
  removePhotoFromCollection: Scalars["Boolean"];
  addPhotographer: AddPhotographerResponse;
  updatePhotographer: UpdatePhotographerResponse;
  deletePhotographer: Scalars["Boolean"];
  addPhoto: AddPhotoResponse;
  updatePhoto: UpdatePhotoResponse;
  deletePhoto: Scalars["Boolean"];
  addPrint: AddPrintResponse;
  updatePrint: UpdatePrintResponse;
  deletePrint: Scalars["Boolean"];
  addSubject: AddSubjectResponse;
  updateSubject: UpdateSubjectResponse;
  deleteSubject: Scalars["Boolean"];
  subscribeToNewsletter: SuccessMessageResponse;
  unsubscribeFromNewsletter: SuccessMessageResponse;
  addTag: AddTagResponse;
  updateTag: UpdateTagResponse;
  deleteTag: Scalars["Boolean"];
  addPhotoToFavorites: AddPhotoToFavoritesResponse;
  removePhotoFromFavorites: RemovePhotoFromFavoritesResponse;
  addPhotoToShoppingBag: AddPhotoToShoppingBagResponse;
  removePhotoFromShoppingBag: RemovePhotoFromShoppingBagResponse;
  getApiToken: Scalars["String"];
};

export type MutationAddCollectionArgs = {
  input: AddCollectionInput;
};

export type MutationUpdateCollectionArgs = {
  input: UpdateCollectionInput;
  id: Scalars["Int"];
};

export type MutationDeleteCollectionArgs = {
  id: Scalars["Int"];
};

export type MutationAddFrameArgs = {
  input: AddFrameInput;
};

export type MutationUpdateFrameArgs = {
  input: UpdateFrameInput;
  id: Scalars["Int"];
};

export type MutationDeleteFrameArgs = {
  id: Scalars["Int"];
};

export type MutationAddImageArgs = {
  input: AddImageInput;
};

export type MutationUpdateImageArgs = {
  input: UpdateImageInput;
  id: Scalars["Int"];
};

export type MutationDeleteImageArgs = {
  id: Scalars["Int"];
};

export type MutationAddImageToPhotoArgs = {
  imageId: Scalars["Int"];
  photoId: Scalars["Int"];
};

export type MutationAddLocationArgs = {
  input: AddLocationInput;
};

export type MutationUpdateLocationArgs = {
  input: UpdateLocationInput;
  id: Scalars["Int"];
};

export type MutationDeleteLocationArgs = {
  id: Scalars["Int"];
};

export type MutationAddMatArgs = {
  input: AddMatInput;
};

export type MutationUpdateMatArgs = {
  input: UpdateMatInput;
  id: Scalars["Int"];
};

export type MutationDeleteMatArgs = {
  id: Scalars["Int"];
};

export type MutationAddPhotoToCollectionArgs = {
  input: PhotoCollectionInput;
};

export type MutationRemovePhotoFromCollectionArgs = {
  input: PhotoCollectionInput;
};

export type MutationAddPhotographerArgs = {
  input: AddPhotographerInput;
};

export type MutationUpdatePhotographerArgs = {
  input: UpdatePhotographerInput;
  id: Scalars["Int"];
};

export type MutationDeletePhotographerArgs = {
  id: Scalars["Int"];
};

export type MutationAddPhotoArgs = {
  input: AddPhotoInput;
};

export type MutationUpdatePhotoArgs = {
  input: UpdatePhotoInput;
  id: Scalars["Int"];
};

export type MutationDeletePhotoArgs = {
  id: Scalars["Int"];
};

export type MutationAddPrintArgs = {
  input: AddPrintInput;
};

export type MutationUpdatePrintArgs = {
  input: UpdatePrintInput;
  id: Scalars["Int"];
};

export type MutationDeletePrintArgs = {
  id: Scalars["Int"];
};

export type MutationAddSubjectArgs = {
  input: AddSubjectInput;
};

export type MutationUpdateSubjectArgs = {
  input: UpdateSubjectInput;
  id: Scalars["Int"];
};

export type MutationDeleteSubjectArgs = {
  id: Scalars["Int"];
};

export type MutationAddTagArgs = {
  input: AddTagInput;
};

export type MutationUpdateTagArgs = {
  input: UpdateTagInput;
  id: Scalars["Int"];
};

export type MutationDeleteTagArgs = {
  id: Scalars["Int"];
};

export type MutationAddPhotoToFavoritesArgs = {
  photoId: Scalars["Float"];
};

export type MutationRemovePhotoFromFavoritesArgs = {
  photoId: Scalars["Float"];
};

export type MutationAddPhotoToShoppingBagArgs = {
  photoId: Scalars["Float"];
};

export type MutationRemovePhotoFromShoppingBagArgs = {
  photoId: Scalars["Float"];
};

export type MutationGetApiTokenArgs = {
  input: GetApiTokenInput;
};

export type CollectionInfoFragment = { __typename: "Collection" } & Pick<
  Collection,
  | "id"
  | "name"
  | "tag"
  | "description"
  | "countOfPhotos"
  | "createdAt"
  | "updatedAt"
> & { coverImage?: Maybe<{ __typename?: "Image" } & ImageInfoFragment> };

export type SearchCollectionsQueryVariables = Exact<{
  input: SearchCollectionsInput;
}>;

export type SearchCollectionsQuery = { __typename?: "Query" } & {
  searchCollections: { __typename: "SearchCollectionsResponse" } & {
    datalist: Array<{ __typename?: "Collection" } & CollectionInfoFragment>;
  };
};

export type CollectionQueryVariables = Exact<{
  id: Scalars["Int"];
}>;

export type CollectionQuery = { __typename?: "Query" } & {
  collection: { __typename?: "Collection" } & CollectionInfoFragment;
};

export type AddCollectionMutationVariables = Exact<{
  input: AddCollectionInput;
}>;

export type AddCollectionMutation = { __typename?: "Mutation" } & {
  addCollection: { __typename?: "AddCollectionResponse" } & Pick<
    AddCollectionResponse,
    "success" | "message"
  > & {
      newCollection?: Maybe<
        { __typename?: "Collection" } & CollectionInfoFragment
      >;
    };
};

export type UpdateCollectionMutationVariables = Exact<{
  id: Scalars["Int"];
  input: UpdateCollectionInput;
}>;

export type UpdateCollectionMutation = { __typename?: "Mutation" } & {
  updateCollection: { __typename?: "UpdateCollectionResponse" } & Pick<
    UpdateCollectionResponse,
    "success" | "message"
  > & {
      updatedCollection?: Maybe<
        { __typename?: "Collection" } & CollectionInfoFragment
      >;
    };
};

export type DeleteCollectionMutationVariables = Exact<{
  id: Scalars["Int"];
}>;

export type DeleteCollectionMutation = { __typename?: "Mutation" } & Pick<
  Mutation,
  "deleteCollection"
>;

export type FrameInfoFragment = { __typename: "Frame" } & Pick<
  Frame,
  | "id"
  | "name"
  | "displayName"
  | "description"
  | "material"
  | "color"
  | "printType"
  | "frameSku"
  | "aspectRatio"
  | "dimension1"
  | "dimension2"
  | "cost"
  | "shippingCost"
  | "basePrice"
  | "priceModifier"
  | "createdAt"
  | "updatedAt"
> & { coverImage?: Maybe<{ __typename?: "Image" } & ImageInfoFragment> };

export type SearchFramesQueryVariables = Exact<{
  input: SearchFramesInput;
}>;

export type SearchFramesQuery = { __typename?: "Query" } & {
  searchFrames: { __typename: "SearchFramesResponse" } & {
    datalist: Array<{ __typename?: "Frame" } & FrameInfoFragment>;
  };
};

export type FrameQueryVariables = Exact<{
  id: Scalars["Int"];
}>;

export type FrameQuery = { __typename?: "Query" } & {
  frame: { __typename?: "Frame" } & FrameInfoFragment;
};

export type AddFrameMutationVariables = Exact<{
  input: AddFrameInput;
}>;

export type AddFrameMutation = { __typename?: "Mutation" } & {
  addFrame: { __typename?: "AddFrameResponse" } & Pick<
    AddFrameResponse,
    "success" | "message"
  > & { newFrame?: Maybe<{ __typename?: "Frame" } & FrameInfoFragment> };
};

export type UpdateFrameMutationVariables = Exact<{
  id: Scalars["Int"];
  input: UpdateFrameInput;
}>;

export type UpdateFrameMutation = { __typename?: "Mutation" } & {
  updateFrame: { __typename?: "UpdateFrameResponse" } & Pick<
    UpdateFrameResponse,
    "success" | "message"
  > & { updatedFrame?: Maybe<{ __typename?: "Frame" } & FrameInfoFragment> };
};

export type DeleteFrameMutationVariables = Exact<{
  id: Scalars["Int"];
}>;

export type DeleteFrameMutation = { __typename?: "Mutation" } & Pick<
  Mutation,
  "deleteFrame"
>;

export type ImageInfoFragment = { __typename?: "Image" } & Pick<
  Image,
  | "id"
  | "imageName"
  | "fileExtension"
  | "imageUrl"
  | "altText"
  | "aspectRatio"
  | "size"
  | "width"
  | "height"
  | "isPortrait"
  | "isPanoramic"
  | "createdAt"
  | "updatedAt"
>;

export type ImageQueryVariables = Exact<{
  id: Scalars["Int"];
}>;

export type ImageQuery = { __typename?: "Query" } & {
  image: { __typename?: "Image" } & ImageInfoFragment;
};

export type AddImageMutationVariables = Exact<{
  input: AddImageInput;
}>;

export type AddImageMutation = { __typename?: "Mutation" } & {
  addImage: { __typename?: "AddImageResponse" } & Pick<
    AddImageResponse,
    "success" | "message"
  > & { newImage?: Maybe<{ __typename?: "Image" } & ImageInfoFragment> };
};

export type UpdateImageMutationVariables = Exact<{
  id: Scalars["Int"];
  input: UpdateImageInput;
}>;

export type UpdateImageMutation = { __typename?: "Mutation" } & {
  updateImage: { __typename?: "UpdateImageResponse" } & Pick<
    UpdateImageResponse,
    "success" | "message"
  > & { updatedImage?: Maybe<{ __typename?: "Image" } & ImageInfoFragment> };
};

export type DeleteImageMutationVariables = Exact<{
  id: Scalars["Int"];
}>;

export type DeleteImageMutation = { __typename?: "Mutation" } & Pick<
  Mutation,
  "deleteImage"
>;

export type LocationInfoFragment = { __typename: "Location" } & Pick<
  Location,
  | "id"
  | "name"
  | "tag"
  | "description"
  | "countOfPhotos"
  | "createdAt"
  | "updatedAt"
> & { coverImage?: Maybe<{ __typename?: "Image" } & ImageInfoFragment> };

export type SearchLocationsQueryVariables = Exact<{
  input: SearchLocationsInput;
}>;

export type SearchLocationsQuery = { __typename?: "Query" } & {
  searchLocations: { __typename: "SearchLocationsResponse" } & {
    datalist: Array<{ __typename?: "Location" } & LocationInfoFragment>;
  };
};

export type LocationQueryVariables = Exact<{
  id: Scalars["Int"];
}>;

export type LocationQuery = { __typename?: "Query" } & {
  location?: Maybe<{ __typename?: "Location" } & LocationInfoFragment>;
};

export type AddLocationMutationVariables = Exact<{
  input: AddLocationInput;
}>;

export type AddLocationMutation = { __typename?: "Mutation" } & {
  addLocation: { __typename?: "AddLocationResponse" } & Pick<
    AddLocationResponse,
    "success" | "message"
  > & {
      newLocation?: Maybe<{ __typename?: "Location" } & LocationInfoFragment>;
    };
};

export type UpdateLocationMutationVariables = Exact<{
  id: Scalars["Int"];
  input: UpdateLocationInput;
}>;

export type UpdateLocationMutation = { __typename?: "Mutation" } & {
  updateLocation: { __typename?: "UpdateLocationResponse" } & Pick<
    UpdateLocationResponse,
    "success" | "message"
  > & {
      updatedLocation?: Maybe<
        { __typename?: "Location" } & LocationInfoFragment
      >;
    };
};

export type DeleteLocationMutationVariables = Exact<{
  id: Scalars["Int"];
}>;

export type DeleteLocationMutation = { __typename?: "Mutation" } & Pick<
  Mutation,
  "deleteLocation"
>;

export type GetApiTokenMutationVariables = Exact<{
  input: GetApiTokenInput;
}>;

export type GetApiTokenMutation = { __typename?: "Mutation" } & Pick<
  Mutation,
  "getApiToken"
>;

export type MatInfoFragment = { __typename: "Mat" } & Pick<
  Mat,
  | "id"
  | "name"
  | "description"
  | "color"
  | "printType"
  | "matSku"
  | "aspectRatio"
  | "dimension1"
  | "dimension2"
  | "cost"
  | "shippingCost"
  | "basePrice"
  | "priceModifier"
  | "createdAt"
  | "updatedAt"
> & { coverImage?: Maybe<{ __typename?: "Image" } & ImageInfoFragment> };

export type SearchMatsQueryVariables = Exact<{
  input: SearchMatsInput;
}>;

export type SearchMatsQuery = { __typename?: "Query" } & {
  searchMats: { __typename: "SearchMatsResponse" } & {
    datalist: Array<{ __typename?: "Mat" } & MatInfoFragment>;
  };
};

export type MatQueryVariables = Exact<{
  id: Scalars["Int"];
}>;

export type MatQuery = { __typename?: "Query" } & {
  mat: { __typename?: "Mat" } & MatInfoFragment;
};

export type AddMatMutationVariables = Exact<{
  input: AddMatInput;
}>;

export type AddMatMutation = { __typename?: "Mutation" } & {
  addMat: { __typename?: "AddMatResponse" } & Pick<
    AddMatResponse,
    "success" | "message"
  > & { newMat?: Maybe<{ __typename?: "Mat" } & MatInfoFragment> };
};

export type UpdateMatMutationVariables = Exact<{
  id: Scalars["Int"];
  input: UpdateMatInput;
}>;

export type UpdateMatMutation = { __typename?: "Mutation" } & {
  updateMat: { __typename?: "UpdateMatResponse" } & Pick<
    UpdateMatResponse,
    "success" | "message"
  > & { updatedMat?: Maybe<{ __typename?: "Mat" } & MatInfoFragment> };
};

export type DeleteMatMutationVariables = Exact<{
  id: Scalars["Int"];
}>;

export type DeleteMatMutation = { __typename?: "Mutation" } & Pick<
  Mutation,
  "deleteMat"
>;

export type PhotoCountBySubjectQueryVariables = Exact<{ [key: string]: never }>;

export type PhotoCountBySubjectQuery = { __typename?: "Query" } & {
  photoCountBySubject: { __typename?: "ItemCountList" } & {
    itemCountList: Array<
      { __typename?: "ItemCount" } & Pick<ItemCount, "name" | "count">
    >;
  };
};

export type PhotoCountByTagQueryVariables = Exact<{ [key: string]: never }>;

export type PhotoCountByTagQuery = { __typename?: "Query" } & {
  photoCountByTag: { __typename?: "ItemCountList" } & {
    itemCountList: Array<
      { __typename?: "ItemCount" } & Pick<ItemCount, "name" | "count">
    >;
  };
};

export type PhotoCountByCollectionQueryVariables = Exact<{
  [key: string]: never;
}>;

export type PhotoCountByCollectionQuery = { __typename?: "Query" } & {
  photoCountByCollection: { __typename?: "ItemCountList" } & {
    itemCountList: Array<
      { __typename?: "ItemCount" } & Pick<ItemCount, "name" | "count">
    >;
  };
};

export type PhotoCountByLocationQueryVariables = Exact<{
  [key: string]: never;
}>;

export type PhotoCountByLocationQuery = { __typename?: "Query" } & {
  photoCountByLocation: { __typename?: "ItemCountList" } & {
    itemCountList: Array<
      { __typename?: "ItemCount" } & Pick<ItemCount, "name" | "count">
    >;
  };
};

export type PhotoCountByPhotographerQueryVariables = Exact<{
  [key: string]: never;
}>;

export type PhotoCountByPhotographerQuery = { __typename?: "Query" } & {
  photoCountByPhotographer: { __typename?: "ItemCountList" } & {
    itemCountList: Array<
      { __typename?: "ItemCount" } & Pick<ItemCount, "name" | "count">
    >;
  };
};

export type PhotographerInfoFragment = { __typename?: "Photographer" } & Pick<
  Photographer,
  | "id"
  | "name"
  | "firstName"
  | "lastName"
  | "email"
  | "bio"
  | "countOfPhotos"
  | "createdAt"
  | "updatedAt"
> & { coverImage?: Maybe<{ __typename?: "Image" } & ImageInfoFragment> };

export type SearchPhotographersQueryVariables = Exact<{
  input: SearchPhotographersInput;
}>;

export type SearchPhotographersQuery = { __typename?: "Query" } & {
  searchPhotographers: { __typename: "SearchPhotographersResponse" } & {
    datalist: Array<{ __typename?: "Photographer" } & PhotographerInfoFragment>;
  };
};

export type PhotographerQueryVariables = Exact<{
  id: Scalars["Int"];
}>;

export type PhotographerQuery = { __typename?: "Query" } & {
  photographer?: Maybe<
    { __typename?: "Photographer" } & PhotographerInfoFragment
  >;
};

export type AddPhotographerMutationVariables = Exact<{
  input: AddPhotographerInput;
}>;

export type AddPhotographerMutation = { __typename?: "Mutation" } & {
  addPhotographer: { __typename?: "AddPhotographerResponse" } & Pick<
    AddPhotographerResponse,
    "success" | "message"
  > & {
      newPhotographer?: Maybe<
        { __typename?: "Photographer" } & PhotographerInfoFragment
      >;
    };
};

export type UpdatePhotographerMutationVariables = Exact<{
  id: Scalars["Int"];
  input: UpdatePhotographerInput;
}>;

export type UpdatePhotographerMutation = { __typename?: "Mutation" } & {
  updatePhotographer: { __typename?: "UpdatePhotographerResponse" } & Pick<
    UpdatePhotographerResponse,
    "success" | "message"
  > & {
      updatedPhotographer?: Maybe<
        { __typename?: "Photographer" } & PhotographerInfoFragment
      >;
    };
};

export type DeletePhotographerMutationVariables = Exact<{
  id: Scalars["Int"];
}>;

export type DeletePhotographerMutation = { __typename?: "Mutation" } & Pick<
  Mutation,
  "deletePhotographer"
>;

export type PhotoInfoFragment = { __typename?: "Photo" } & Pick<
  Photo,
  | "id"
  | "rating"
  | "sku"
  | "sortIndex"
  | "title"
  | "description"
  | "isFeatured"
  | "isLimitedEdition"
  | "isHidden"
  | "printTypes"
  | "basePrice12"
  | "priceModifier12"
  | "basePrice16"
  | "priceModifier16"
  | "basePrice20"
  | "priceModifier20"
  | "basePrice24"
  | "priceModifier24"
  | "basePrice30"
  | "priceModifier30"
  | "createdAt"
  | "updatedAt"
> & {
    sharingImage?: Maybe<{ __typename?: "Image" } & ImageInfoFragment>;
    images: Array<{ __typename?: "Image" } & ImageInfoFragment>;
    photographer?: Maybe<
      { __typename?: "Photographer" } & Pick<Photographer, "id" | "name">
    >;
    location?: Maybe<
      { __typename?: "Location" } & Pick<Location, "id" | "name">
    >;
    subjectsInPhoto?: Maybe<
      Array<
        { __typename?: "PhotoSubject" } & {
          subject: { __typename?: "Subject" } & Pick<Subject, "id" | "name">;
        }
      >
    >;
    tagsForPhoto?: Maybe<
      Array<
        { __typename?: "PhotoTag" } & {
          tag: { __typename?: "Tag" } & Pick<Tag, "id" | "name">;
        }
      >
    >;
    collectionsForPhoto?: Maybe<
      Array<
        { __typename?: "PhotoCollection" } & {
          collection: { __typename?: "Collection" } & Pick<
            Collection,
            "id" | "name"
          >;
        }
      >
    >;
  };

export type PaginatedPhotosQueryVariables = Exact<{
  input: PaginatedPhotosInput;
}>;

export type PaginatedPhotosQuery = { __typename?: "Query" } & {
  paginatedPhotos: { __typename?: "PaginatedAllPhotosResponse" } & {
    pageInfo: { __typename?: "PaginatedResponse" } & Pick<
      PaginatedResponse,
      "startCursor" | "endCursor" | "total"
    >;
    photos: Array<{ __typename?: "Photo" } & PhotoInfoFragment>;
  };
};

export type SearchPhotosQueryVariables = Exact<{
  input: SearchPhotosInput;
}>;

export type SearchPhotosQuery = { __typename?: "Query" } & {
  searchPhotos: { __typename: "SearchPhotosResponse" } & {
    datalist: Array<{ __typename?: "Photo" } & PhotoInfoFragment>;
  };
};

export type PhotoQueryVariables = Exact<{
  id: Scalars["Int"];
}>;

export type PhotoQuery = { __typename?: "Query" } & {
  photo?: Maybe<{ __typename?: "Photo" } & PhotoInfoFragment>;
};

export type PhotoWithSkuQueryVariables = Exact<{
  sku: Scalars["Int"];
}>;

export type PhotoWithSkuQuery = { __typename?: "Query" } & {
  photoWithSku: { __typename?: "Photo" } & PhotoInfoFragment;
};

export type PhotoEditOptionsQueryVariables = Exact<{ [key: string]: never }>;

export type PhotoEditOptionsQuery = { __typename?: "Query" } & {
  photoEditOptions: { __typename?: "PhotoEditSelectionOptions" } & {
    photographers: Array<
      { __typename?: "PhotographerSelectionOption" } & Pick<
        PhotographerSelectionOption,
        "id" | "name"
      >
    >;
    locations: Array<
      { __typename?: "LocationSelectionOption" } & Pick<
        LocationSelectionOption,
        "id" | "name"
      >
    >;
    subjects: Array<
      { __typename?: "SubjectSelectionOption" } & Pick<
        SubjectSelectionOption,
        "id" | "name"
      >
    >;
    tags: Array<
      { __typename?: "TagSelectionOption" } & Pick<
        TagSelectionOption,
        "id" | "name"
      >
    >;
    collections: Array<
      { __typename?: "CollectionSelectionOption" } & Pick<
        CollectionSelectionOption,
        "id" | "name"
      >
    >;
  };
};

export type AddPhotoMutationVariables = Exact<{
  input: AddPhotoInput;
}>;

export type AddPhotoMutation = { __typename?: "Mutation" } & {
  addPhoto: { __typename?: "AddPhotoResponse" } & Pick<
    AddPhotoResponse,
    "success" | "message"
  > & { newPhoto?: Maybe<{ __typename?: "Photo" } & PhotoInfoFragment> };
};

export type UpdatePhotoMutationVariables = Exact<{
  id: Scalars["Int"];
  input: UpdatePhotoInput;
}>;

export type UpdatePhotoMutation = { __typename?: "Mutation" } & {
  updatePhoto: { __typename?: "UpdatePhotoResponse" } & Pick<
    UpdatePhotoResponse,
    "success" | "message"
  > & { updatedPhoto?: Maybe<{ __typename?: "Photo" } & PhotoInfoFragment> };
};

export type DeletePhotoMutationVariables = Exact<{
  id: Scalars["Int"];
}>;

export type DeletePhotoMutation = { __typename?: "Mutation" } & Pick<
  Mutation,
  "deletePhoto"
>;

export type PrintInfoFragment = { __typename: "Print" } & Pick<
  Print,
  | "id"
  | "name"
  | "description"
  | "type"
  | "printSku"
  | "aspectRatio"
  | "dimension1"
  | "dimension2"
  | "cost"
  | "shippingCost"
  | "basePrice"
  | "priceModifier"
  | "createdAt"
  | "updatedAt"
> & { coverImage?: Maybe<{ __typename?: "Image" } & ImageInfoFragment> };

export type SearchPrintsQueryVariables = Exact<{
  input: SearchPrintsInput;
}>;

export type SearchPrintsQuery = { __typename?: "Query" } & {
  searchPrints: { __typename: "SearchPrintsResponse" } & {
    datalist: Array<{ __typename?: "Print" } & PrintInfoFragment>;
  };
};

export type PrintQueryVariables = Exact<{
  id: Scalars["Int"];
}>;

export type PrintQuery = { __typename?: "Query" } & {
  print: { __typename?: "Print" } & PrintInfoFragment;
};

export type AddPrintMutationVariables = Exact<{
  input: AddPrintInput;
}>;

export type AddPrintMutation = { __typename?: "Mutation" } & {
  addPrint: { __typename?: "AddPrintResponse" } & Pick<
    AddPrintResponse,
    "success" | "message"
  > & { newPrint?: Maybe<{ __typename?: "Print" } & PrintInfoFragment> };
};

export type UpdatePrintMutationVariables = Exact<{
  id: Scalars["Int"];
  input: UpdatePrintInput;
}>;

export type UpdatePrintMutation = { __typename?: "Mutation" } & {
  updatePrint: { __typename?: "UpdatePrintResponse" } & Pick<
    UpdatePrintResponse,
    "success" | "message"
  > & { updatedPrint?: Maybe<{ __typename?: "Print" } & PrintInfoFragment> };
};

export type DeletePrintMutationVariables = Exact<{
  id: Scalars["Int"];
}>;

export type DeletePrintMutation = { __typename?: "Mutation" } & Pick<
  Mutation,
  "deletePrint"
>;

export type SubjectInfoFragment = { __typename?: "Subject" } & Pick<
  Subject,
  "id" | "name" | "description" | "countOfPhotos" | "createdAt" | "updatedAt"
> & { coverImage?: Maybe<{ __typename?: "Image" } & ImageInfoFragment> };

export type SearchSubjectsQueryVariables = Exact<{
  input: SearchSubjectsInput;
}>;

export type SearchSubjectsQuery = { __typename?: "Query" } & {
  searchSubjects: { __typename: "SearchSubjectsResponse" } & {
    datalist: Array<{ __typename?: "Subject" } & SubjectInfoFragment>;
  };
};

export type SubjectQueryVariables = Exact<{
  id: Scalars["Int"];
}>;

export type SubjectQuery = { __typename?: "Query" } & {
  subject?: Maybe<{ __typename?: "Subject" } & SubjectInfoFragment>;
};

export type AddSubjectMutationVariables = Exact<{
  input: AddSubjectInput;
}>;

export type AddSubjectMutation = { __typename?: "Mutation" } & {
  addSubject: { __typename?: "AddSubjectResponse" } & Pick<
    AddSubjectResponse,
    "success" | "message"
  > & { newSubject?: Maybe<{ __typename?: "Subject" } & SubjectInfoFragment> };
};

export type UpdateSubjectMutationVariables = Exact<{
  id: Scalars["Int"];
  input: UpdateSubjectInput;
}>;

export type UpdateSubjectMutation = { __typename?: "Mutation" } & {
  updateSubject: { __typename?: "UpdateSubjectResponse" } & Pick<
    UpdateSubjectResponse,
    "success" | "message"
  > & {
      updatedSubject?: Maybe<{ __typename?: "Subject" } & SubjectInfoFragment>;
    };
};

export type DeleteSubjectMutationVariables = Exact<{
  id: Scalars["Int"];
}>;

export type DeleteSubjectMutation = { __typename?: "Mutation" } & Pick<
  Mutation,
  "deleteSubject"
>;

export type TagInfoFragment = { __typename?: "Tag" } & Pick<
  Tag,
  "id" | "name" | "description" | "countOfPhotos" | "createdAt" | "updatedAt"
> & { coverImage?: Maybe<{ __typename?: "Image" } & ImageInfoFragment> };

export type SearchTagsQueryVariables = Exact<{
  input: SearchTagsInput;
}>;

export type SearchTagsQuery = { __typename?: "Query" } & {
  searchTags: { __typename: "SearchTagsResponse" } & {
    datalist: Array<{ __typename?: "Tag" } & TagInfoFragment>;
  };
};

export type TagQueryVariables = Exact<{
  id: Scalars["Int"];
}>;

export type TagQuery = { __typename?: "Query" } & {
  tag: { __typename?: "Tag" } & TagInfoFragment;
};

export type AddTagMutationVariables = Exact<{
  input: AddTagInput;
}>;

export type AddTagMutation = { __typename?: "Mutation" } & {
  addTag: { __typename?: "AddTagResponse" } & Pick<
    AddTagResponse,
    "success" | "message"
  > & { newTag?: Maybe<{ __typename?: "Tag" } & TagInfoFragment> };
};

export type UpdateTagMutationVariables = Exact<{
  id: Scalars["Int"];
  input: UpdateTagInput;
}>;

export type UpdateTagMutation = { __typename?: "Mutation" } & {
  updateTag: { __typename?: "UpdateTagResponse" } & Pick<
    UpdateTagResponse,
    "message" | "success"
  > & { updatedTag?: Maybe<{ __typename?: "Tag" } & TagInfoFragment> };
};

export type DeleteTagMutationVariables = Exact<{
  id: Scalars["Int"];
}>;

export type DeleteTagMutation = { __typename?: "Mutation" } & Pick<
  Mutation,
  "deleteTag"
>;

export const ImageInfoFragmentDoc: DocumentNode<ImageInfoFragment, unknown> = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "ImageInfo" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "Image" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "id" } },
          { kind: "Field", name: { kind: "Name", value: "imageName" } },
          { kind: "Field", name: { kind: "Name", value: "fileExtension" } },
          { kind: "Field", name: { kind: "Name", value: "imageUrl" } },
          { kind: "Field", name: { kind: "Name", value: "altText" } },
          { kind: "Field", name: { kind: "Name", value: "aspectRatio" } },
          { kind: "Field", name: { kind: "Name", value: "size" } },
          { kind: "Field", name: { kind: "Name", value: "width" } },
          { kind: "Field", name: { kind: "Name", value: "height" } },
          { kind: "Field", name: { kind: "Name", value: "isPortrait" } },
          { kind: "Field", name: { kind: "Name", value: "isPanoramic" } },
          { kind: "Field", name: { kind: "Name", value: "createdAt" } },
          { kind: "Field", name: { kind: "Name", value: "updatedAt" } },
        ],
      },
    },
  ],
};
export const CollectionInfoFragmentDoc: DocumentNode<
  CollectionInfoFragment,
  unknown
> = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "CollectionInfo" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "Collection" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "id" } },
          { kind: "Field", name: { kind: "Name", value: "name" } },
          { kind: "Field", name: { kind: "Name", value: "tag" } },
          { kind: "Field", name: { kind: "Name", value: "description" } },
          { kind: "Field", name: { kind: "Name", value: "countOfPhotos" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "coverImage" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "FragmentSpread",
                  name: { kind: "Name", value: "ImageInfo" },
                },
              ],
            },
          },
          { kind: "Field", name: { kind: "Name", value: "__typename" } },
          { kind: "Field", name: { kind: "Name", value: "createdAt" } },
          { kind: "Field", name: { kind: "Name", value: "updatedAt" } },
        ],
      },
    },
    ...ImageInfoFragmentDoc.definitions,
  ],
};
export const FrameInfoFragmentDoc: DocumentNode<FrameInfoFragment, unknown> = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "FrameInfo" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "Frame" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "id" } },
          { kind: "Field", name: { kind: "Name", value: "name" } },
          { kind: "Field", name: { kind: "Name", value: "displayName" } },
          { kind: "Field", name: { kind: "Name", value: "description" } },
          { kind: "Field", name: { kind: "Name", value: "material" } },
          { kind: "Field", name: { kind: "Name", value: "color" } },
          { kind: "Field", name: { kind: "Name", value: "printType" } },
          { kind: "Field", name: { kind: "Name", value: "frameSku" } },
          { kind: "Field", name: { kind: "Name", value: "aspectRatio" } },
          { kind: "Field", name: { kind: "Name", value: "dimension1" } },
          { kind: "Field", name: { kind: "Name", value: "dimension2" } },
          { kind: "Field", name: { kind: "Name", value: "cost" } },
          { kind: "Field", name: { kind: "Name", value: "shippingCost" } },
          { kind: "Field", name: { kind: "Name", value: "basePrice" } },
          { kind: "Field", name: { kind: "Name", value: "priceModifier" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "coverImage" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "FragmentSpread",
                  name: { kind: "Name", value: "ImageInfo" },
                },
              ],
            },
          },
          { kind: "Field", name: { kind: "Name", value: "__typename" } },
          { kind: "Field", name: { kind: "Name", value: "createdAt" } },
          { kind: "Field", name: { kind: "Name", value: "updatedAt" } },
        ],
      },
    },
    ...ImageInfoFragmentDoc.definitions,
  ],
};
export const LocationInfoFragmentDoc: DocumentNode<
  LocationInfoFragment,
  unknown
> = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "LocationInfo" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "Location" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "id" } },
          { kind: "Field", name: { kind: "Name", value: "name" } },
          { kind: "Field", name: { kind: "Name", value: "tag" } },
          { kind: "Field", name: { kind: "Name", value: "description" } },
          { kind: "Field", name: { kind: "Name", value: "countOfPhotos" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "coverImage" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "FragmentSpread",
                  name: { kind: "Name", value: "ImageInfo" },
                },
              ],
            },
          },
          { kind: "Field", name: { kind: "Name", value: "__typename" } },
          { kind: "Field", name: { kind: "Name", value: "createdAt" } },
          { kind: "Field", name: { kind: "Name", value: "updatedAt" } },
        ],
      },
    },
    ...ImageInfoFragmentDoc.definitions,
  ],
};
export const MatInfoFragmentDoc: DocumentNode<MatInfoFragment, unknown> = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "MatInfo" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "Mat" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "id" } },
          { kind: "Field", name: { kind: "Name", value: "name" } },
          { kind: "Field", name: { kind: "Name", value: "description" } },
          { kind: "Field", name: { kind: "Name", value: "color" } },
          { kind: "Field", name: { kind: "Name", value: "printType" } },
          { kind: "Field", name: { kind: "Name", value: "matSku" } },
          { kind: "Field", name: { kind: "Name", value: "aspectRatio" } },
          { kind: "Field", name: { kind: "Name", value: "dimension1" } },
          { kind: "Field", name: { kind: "Name", value: "dimension2" } },
          { kind: "Field", name: { kind: "Name", value: "cost" } },
          { kind: "Field", name: { kind: "Name", value: "shippingCost" } },
          { kind: "Field", name: { kind: "Name", value: "basePrice" } },
          { kind: "Field", name: { kind: "Name", value: "priceModifier" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "coverImage" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "FragmentSpread",
                  name: { kind: "Name", value: "ImageInfo" },
                },
              ],
            },
          },
          { kind: "Field", name: { kind: "Name", value: "__typename" } },
          { kind: "Field", name: { kind: "Name", value: "createdAt" } },
          { kind: "Field", name: { kind: "Name", value: "updatedAt" } },
        ],
      },
    },
    ...ImageInfoFragmentDoc.definitions,
  ],
};
export const PhotographerInfoFragmentDoc: DocumentNode<
  PhotographerInfoFragment,
  unknown
> = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "PhotographerInfo" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "Photographer" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "id" } },
          { kind: "Field", name: { kind: "Name", value: "name" } },
          { kind: "Field", name: { kind: "Name", value: "firstName" } },
          { kind: "Field", name: { kind: "Name", value: "lastName" } },
          { kind: "Field", name: { kind: "Name", value: "email" } },
          { kind: "Field", name: { kind: "Name", value: "bio" } },
          { kind: "Field", name: { kind: "Name", value: "countOfPhotos" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "coverImage" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "FragmentSpread",
                  name: { kind: "Name", value: "ImageInfo" },
                },
              ],
            },
          },
          { kind: "Field", name: { kind: "Name", value: "createdAt" } },
          { kind: "Field", name: { kind: "Name", value: "updatedAt" } },
        ],
      },
    },
    ...ImageInfoFragmentDoc.definitions,
  ],
};
export const PhotoInfoFragmentDoc: DocumentNode<PhotoInfoFragment, unknown> = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "PhotoInfo" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "Photo" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "id" } },
          { kind: "Field", name: { kind: "Name", value: "rating" } },
          { kind: "Field", name: { kind: "Name", value: "sku" } },
          { kind: "Field", name: { kind: "Name", value: "sortIndex" } },
          { kind: "Field", name: { kind: "Name", value: "title" } },
          { kind: "Field", name: { kind: "Name", value: "description" } },
          { kind: "Field", name: { kind: "Name", value: "isFeatured" } },
          { kind: "Field", name: { kind: "Name", value: "isLimitedEdition" } },
          { kind: "Field", name: { kind: "Name", value: "isHidden" } },
          { kind: "Field", name: { kind: "Name", value: "rating" } },
          { kind: "Field", name: { kind: "Name", value: "printTypes" } },
          { kind: "Field", name: { kind: "Name", value: "basePrice12" } },
          { kind: "Field", name: { kind: "Name", value: "priceModifier12" } },
          { kind: "Field", name: { kind: "Name", value: "basePrice16" } },
          { kind: "Field", name: { kind: "Name", value: "priceModifier16" } },
          { kind: "Field", name: { kind: "Name", value: "basePrice20" } },
          { kind: "Field", name: { kind: "Name", value: "priceModifier20" } },
          { kind: "Field", name: { kind: "Name", value: "basePrice24" } },
          { kind: "Field", name: { kind: "Name", value: "priceModifier24" } },
          { kind: "Field", name: { kind: "Name", value: "basePrice30" } },
          { kind: "Field", name: { kind: "Name", value: "priceModifier30" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "sharingImage" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "FragmentSpread",
                  name: { kind: "Name", value: "ImageInfo" },
                },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "images" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "FragmentSpread",
                  name: { kind: "Name", value: "ImageInfo" },
                },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "photographer" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "name" } },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "location" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "name" } },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "subjectsInPhoto" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "subject" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      { kind: "Field", name: { kind: "Name", value: "name" } },
                    ],
                  },
                },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "tagsForPhoto" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "tag" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      { kind: "Field", name: { kind: "Name", value: "name" } },
                    ],
                  },
                },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "collectionsForPhoto" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "collection" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      { kind: "Field", name: { kind: "Name", value: "name" } },
                    ],
                  },
                },
              ],
            },
          },
          { kind: "Field", name: { kind: "Name", value: "createdAt" } },
          { kind: "Field", name: { kind: "Name", value: "updatedAt" } },
        ],
      },
    },
    ...ImageInfoFragmentDoc.definitions,
  ],
};
export const PrintInfoFragmentDoc: DocumentNode<PrintInfoFragment, unknown> = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "PrintInfo" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "Print" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "id" } },
          { kind: "Field", name: { kind: "Name", value: "name" } },
          { kind: "Field", name: { kind: "Name", value: "description" } },
          { kind: "Field", name: { kind: "Name", value: "type" } },
          { kind: "Field", name: { kind: "Name", value: "printSku" } },
          { kind: "Field", name: { kind: "Name", value: "aspectRatio" } },
          { kind: "Field", name: { kind: "Name", value: "dimension1" } },
          { kind: "Field", name: { kind: "Name", value: "dimension2" } },
          { kind: "Field", name: { kind: "Name", value: "cost" } },
          { kind: "Field", name: { kind: "Name", value: "shippingCost" } },
          { kind: "Field", name: { kind: "Name", value: "basePrice" } },
          { kind: "Field", name: { kind: "Name", value: "priceModifier" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "coverImage" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "FragmentSpread",
                  name: { kind: "Name", value: "ImageInfo" },
                },
              ],
            },
          },
          { kind: "Field", name: { kind: "Name", value: "__typename" } },
          { kind: "Field", name: { kind: "Name", value: "createdAt" } },
          { kind: "Field", name: { kind: "Name", value: "updatedAt" } },
        ],
      },
    },
    ...ImageInfoFragmentDoc.definitions,
  ],
};
export const SubjectInfoFragmentDoc: DocumentNode<
  SubjectInfoFragment,
  unknown
> = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "SubjectInfo" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "Subject" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "id" } },
          { kind: "Field", name: { kind: "Name", value: "name" } },
          { kind: "Field", name: { kind: "Name", value: "description" } },
          { kind: "Field", name: { kind: "Name", value: "countOfPhotos" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "coverImage" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "FragmentSpread",
                  name: { kind: "Name", value: "ImageInfo" },
                },
              ],
            },
          },
          { kind: "Field", name: { kind: "Name", value: "createdAt" } },
          { kind: "Field", name: { kind: "Name", value: "updatedAt" } },
        ],
      },
    },
    ...ImageInfoFragmentDoc.definitions,
  ],
};
export const TagInfoFragmentDoc: DocumentNode<TagInfoFragment, unknown> = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "TagInfo" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "Tag" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "id" } },
          { kind: "Field", name: { kind: "Name", value: "name" } },
          { kind: "Field", name: { kind: "Name", value: "description" } },
          { kind: "Field", name: { kind: "Name", value: "countOfPhotos" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "coverImage" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "FragmentSpread",
                  name: { kind: "Name", value: "ImageInfo" },
                },
              ],
            },
          },
          { kind: "Field", name: { kind: "Name", value: "createdAt" } },
          { kind: "Field", name: { kind: "Name", value: "updatedAt" } },
        ],
      },
    },
    ...ImageInfoFragmentDoc.definitions,
  ],
};
export const SearchCollectionsDocument: DocumentNode<
  SearchCollectionsQuery,
  SearchCollectionsQueryVariables
> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "searchCollections" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "input" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "SearchCollectionsInput" },
            },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "searchCollections" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "input" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "input" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "__typename" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "datalist" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "FragmentSpread",
                        name: { kind: "Name", value: "CollectionInfo" },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    ...CollectionInfoFragmentDoc.definitions,
  ],
};
export const CollectionDocument: DocumentNode<
  CollectionQuery,
  CollectionQueryVariables
> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "collection" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "collection" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "id" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "id" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "FragmentSpread",
                  name: { kind: "Name", value: "CollectionInfo" },
                },
              ],
            },
          },
        ],
      },
    },
    ...CollectionInfoFragmentDoc.definitions,
  ],
};
export const AddCollectionDocument: DocumentNode<
  AddCollectionMutation,
  AddCollectionMutationVariables
> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "addCollection" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "input" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "AddCollectionInput" },
            },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "addCollection" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "input" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "input" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "success" } },
                { kind: "Field", name: { kind: "Name", value: "message" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "newCollection" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "FragmentSpread",
                        name: { kind: "Name", value: "CollectionInfo" },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    ...CollectionInfoFragmentDoc.definitions,
  ],
};
export const UpdateCollectionDocument: DocumentNode<
  UpdateCollectionMutation,
  UpdateCollectionMutationVariables
> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "updateCollection" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "input" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "UpdateCollectionInput" },
            },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "updateCollection" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "id" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "id" },
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "input" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "input" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "success" } },
                { kind: "Field", name: { kind: "Name", value: "message" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "updatedCollection" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "FragmentSpread",
                        name: { kind: "Name", value: "CollectionInfo" },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    ...CollectionInfoFragmentDoc.definitions,
  ],
};
export const DeleteCollectionDocument: DocumentNode<
  DeleteCollectionMutation,
  DeleteCollectionMutationVariables
> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "deleteCollection" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "deleteCollection" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "id" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "id" },
                },
              },
            ],
          },
        ],
      },
    },
  ],
};
export const SearchFramesDocument: DocumentNode<
  SearchFramesQuery,
  SearchFramesQueryVariables
> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "searchFrames" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "input" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "SearchFramesInput" },
            },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "searchFrames" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "input" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "input" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "__typename" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "datalist" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "FragmentSpread",
                        name: { kind: "Name", value: "FrameInfo" },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    ...FrameInfoFragmentDoc.definitions,
  ],
};
export const FrameDocument: DocumentNode<FrameQuery, FrameQueryVariables> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "frame" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "frame" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "id" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "id" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "FragmentSpread",
                  name: { kind: "Name", value: "FrameInfo" },
                },
              ],
            },
          },
        ],
      },
    },
    ...FrameInfoFragmentDoc.definitions,
  ],
};
export const AddFrameDocument: DocumentNode<
  AddFrameMutation,
  AddFrameMutationVariables
> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "addFrame" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "input" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "AddFrameInput" },
            },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "addFrame" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "input" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "input" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "success" } },
                { kind: "Field", name: { kind: "Name", value: "message" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "newFrame" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "FragmentSpread",
                        name: { kind: "Name", value: "FrameInfo" },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    ...FrameInfoFragmentDoc.definitions,
  ],
};
export const UpdateFrameDocument: DocumentNode<
  UpdateFrameMutation,
  UpdateFrameMutationVariables
> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "updateFrame" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "input" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "UpdateFrameInput" },
            },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "updateFrame" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "id" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "id" },
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "input" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "input" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "success" } },
                { kind: "Field", name: { kind: "Name", value: "message" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "updatedFrame" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "FragmentSpread",
                        name: { kind: "Name", value: "FrameInfo" },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    ...FrameInfoFragmentDoc.definitions,
  ],
};
export const DeleteFrameDocument: DocumentNode<
  DeleteFrameMutation,
  DeleteFrameMutationVariables
> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "deleteFrame" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "deleteFrame" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "id" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "id" },
                },
              },
            ],
          },
        ],
      },
    },
  ],
};
export const ImageDocument: DocumentNode<ImageQuery, ImageQueryVariables> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "image" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "image" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "id" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "id" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "FragmentSpread",
                  name: { kind: "Name", value: "ImageInfo" },
                },
              ],
            },
          },
        ],
      },
    },
    ...ImageInfoFragmentDoc.definitions,
  ],
};
export const AddImageDocument: DocumentNode<
  AddImageMutation,
  AddImageMutationVariables
> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "addImage" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "input" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "AddImageInput" },
            },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "addImage" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "input" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "input" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "success" } },
                { kind: "Field", name: { kind: "Name", value: "message" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "newImage" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "FragmentSpread",
                        name: { kind: "Name", value: "ImageInfo" },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    ...ImageInfoFragmentDoc.definitions,
  ],
};
export const UpdateImageDocument: DocumentNode<
  UpdateImageMutation,
  UpdateImageMutationVariables
> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "updateImage" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "input" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "UpdateImageInput" },
            },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "updateImage" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "id" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "id" },
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "input" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "input" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "success" } },
                { kind: "Field", name: { kind: "Name", value: "message" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "updatedImage" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "FragmentSpread",
                        name: { kind: "Name", value: "ImageInfo" },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    ...ImageInfoFragmentDoc.definitions,
  ],
};
export const DeleteImageDocument: DocumentNode<
  DeleteImageMutation,
  DeleteImageMutationVariables
> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "deleteImage" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "deleteImage" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "id" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "id" },
                },
              },
            ],
          },
        ],
      },
    },
  ],
};
export const SearchLocationsDocument: DocumentNode<
  SearchLocationsQuery,
  SearchLocationsQueryVariables
> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "searchLocations" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "input" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "SearchLocationsInput" },
            },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "searchLocations" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "input" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "input" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "__typename" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "datalist" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "FragmentSpread",
                        name: { kind: "Name", value: "LocationInfo" },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    ...LocationInfoFragmentDoc.definitions,
  ],
};
export const LocationDocument: DocumentNode<
  LocationQuery,
  LocationQueryVariables
> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "location" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "location" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "id" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "id" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "FragmentSpread",
                  name: { kind: "Name", value: "LocationInfo" },
                },
              ],
            },
          },
        ],
      },
    },
    ...LocationInfoFragmentDoc.definitions,
  ],
};
export const AddLocationDocument: DocumentNode<
  AddLocationMutation,
  AddLocationMutationVariables
> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "addLocation" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "input" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "AddLocationInput" },
            },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "addLocation" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "input" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "input" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "success" } },
                { kind: "Field", name: { kind: "Name", value: "message" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "newLocation" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "FragmentSpread",
                        name: { kind: "Name", value: "LocationInfo" },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    ...LocationInfoFragmentDoc.definitions,
  ],
};
export const UpdateLocationDocument: DocumentNode<
  UpdateLocationMutation,
  UpdateLocationMutationVariables
> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "updateLocation" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "input" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "UpdateLocationInput" },
            },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "updateLocation" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "id" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "id" },
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "input" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "input" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "success" } },
                { kind: "Field", name: { kind: "Name", value: "message" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "updatedLocation" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "FragmentSpread",
                        name: { kind: "Name", value: "LocationInfo" },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    ...LocationInfoFragmentDoc.definitions,
  ],
};
export const DeleteLocationDocument: DocumentNode<
  DeleteLocationMutation,
  DeleteLocationMutationVariables
> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "deleteLocation" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "deleteLocation" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "id" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "id" },
                },
              },
            ],
          },
        ],
      },
    },
  ],
};
export const GetApiTokenDocument: DocumentNode<
  GetApiTokenMutation,
  GetApiTokenMutationVariables
> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "getApiToken" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "input" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "GetApiTokenInput" },
            },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "getApiToken" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "input" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "input" },
                },
              },
            ],
          },
        ],
      },
    },
  ],
};
export const SearchMatsDocument: DocumentNode<
  SearchMatsQuery,
  SearchMatsQueryVariables
> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "searchMats" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "input" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "SearchMatsInput" },
            },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "searchMats" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "input" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "input" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "__typename" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "datalist" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "FragmentSpread",
                        name: { kind: "Name", value: "MatInfo" },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    ...MatInfoFragmentDoc.definitions,
  ],
};
export const MatDocument: DocumentNode<MatQuery, MatQueryVariables> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "mat" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "mat" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "id" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "id" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "FragmentSpread",
                  name: { kind: "Name", value: "MatInfo" },
                },
              ],
            },
          },
        ],
      },
    },
    ...MatInfoFragmentDoc.definitions,
  ],
};
export const AddMatDocument: DocumentNode<
  AddMatMutation,
  AddMatMutationVariables
> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "addMat" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "input" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "AddMatInput" },
            },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "addMat" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "input" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "input" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "success" } },
                { kind: "Field", name: { kind: "Name", value: "message" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "newMat" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "FragmentSpread",
                        name: { kind: "Name", value: "MatInfo" },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    ...MatInfoFragmentDoc.definitions,
  ],
};
export const UpdateMatDocument: DocumentNode<
  UpdateMatMutation,
  UpdateMatMutationVariables
> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "updateMat" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "input" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "UpdateMatInput" },
            },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "updateMat" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "id" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "id" },
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "input" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "input" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "success" } },
                { kind: "Field", name: { kind: "Name", value: "message" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "updatedMat" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "FragmentSpread",
                        name: { kind: "Name", value: "MatInfo" },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    ...MatInfoFragmentDoc.definitions,
  ],
};
export const DeleteMatDocument: DocumentNode<
  DeleteMatMutation,
  DeleteMatMutationVariables
> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "deleteMat" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "deleteMat" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "id" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "id" },
                },
              },
            ],
          },
        ],
      },
    },
  ],
};
export const PhotoCountBySubjectDocument: DocumentNode<
  PhotoCountBySubjectQuery,
  PhotoCountBySubjectQueryVariables
> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "photoCountBySubject" },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "photoCountBySubject" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "itemCountList" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "name" } },
                      { kind: "Field", name: { kind: "Name", value: "count" } },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
};
export const PhotoCountByTagDocument: DocumentNode<
  PhotoCountByTagQuery,
  PhotoCountByTagQueryVariables
> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "photoCountByTag" },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "photoCountByTag" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "itemCountList" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "name" } },
                      { kind: "Field", name: { kind: "Name", value: "count" } },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
};
export const PhotoCountByCollectionDocument: DocumentNode<
  PhotoCountByCollectionQuery,
  PhotoCountByCollectionQueryVariables
> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "photoCountByCollection" },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "photoCountByCollection" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "itemCountList" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "name" } },
                      { kind: "Field", name: { kind: "Name", value: "count" } },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
};
export const PhotoCountByLocationDocument: DocumentNode<
  PhotoCountByLocationQuery,
  PhotoCountByLocationQueryVariables
> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "photoCountByLocation" },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "photoCountByLocation" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "itemCountList" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "name" } },
                      { kind: "Field", name: { kind: "Name", value: "count" } },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
};
export const PhotoCountByPhotographerDocument: DocumentNode<
  PhotoCountByPhotographerQuery,
  PhotoCountByPhotographerQueryVariables
> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "photoCountByPhotographer" },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "photoCountByPhotographer" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "itemCountList" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "name" } },
                      { kind: "Field", name: { kind: "Name", value: "count" } },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
};
export const SearchPhotographersDocument: DocumentNode<
  SearchPhotographersQuery,
  SearchPhotographersQueryVariables
> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "searchPhotographers" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "input" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "SearchPhotographersInput" },
            },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "searchPhotographers" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "input" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "input" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "__typename" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "datalist" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "FragmentSpread",
                        name: { kind: "Name", value: "PhotographerInfo" },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    ...PhotographerInfoFragmentDoc.definitions,
  ],
};
export const PhotographerDocument: DocumentNode<
  PhotographerQuery,
  PhotographerQueryVariables
> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "photographer" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "photographer" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "id" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "id" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "FragmentSpread",
                  name: { kind: "Name", value: "PhotographerInfo" },
                },
              ],
            },
          },
        ],
      },
    },
    ...PhotographerInfoFragmentDoc.definitions,
  ],
};
export const AddPhotographerDocument: DocumentNode<
  AddPhotographerMutation,
  AddPhotographerMutationVariables
> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "addPhotographer" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "input" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "AddPhotographerInput" },
            },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "addPhotographer" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "input" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "input" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "success" } },
                { kind: "Field", name: { kind: "Name", value: "message" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "newPhotographer" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "FragmentSpread",
                        name: { kind: "Name", value: "PhotographerInfo" },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    ...PhotographerInfoFragmentDoc.definitions,
  ],
};
export const UpdatePhotographerDocument: DocumentNode<
  UpdatePhotographerMutation,
  UpdatePhotographerMutationVariables
> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "updatePhotographer" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "input" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "UpdatePhotographerInput" },
            },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "updatePhotographer" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "id" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "id" },
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "input" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "input" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "success" } },
                { kind: "Field", name: { kind: "Name", value: "message" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "updatedPhotographer" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "FragmentSpread",
                        name: { kind: "Name", value: "PhotographerInfo" },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    ...PhotographerInfoFragmentDoc.definitions,
  ],
};
export const DeletePhotographerDocument: DocumentNode<
  DeletePhotographerMutation,
  DeletePhotographerMutationVariables
> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "deletePhotographer" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "deletePhotographer" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "id" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "id" },
                },
              },
            ],
          },
        ],
      },
    },
  ],
};
export const PaginatedPhotosDocument: DocumentNode<
  PaginatedPhotosQuery,
  PaginatedPhotosQueryVariables
> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "paginatedPhotos" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "input" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "PaginatedPhotosInput" },
            },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "paginatedPhotos" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "input" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "input" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "pageInfo" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "startCursor" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "endCursor" },
                      },
                      { kind: "Field", name: { kind: "Name", value: "total" } },
                    ],
                  },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "photos" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "FragmentSpread",
                        name: { kind: "Name", value: "PhotoInfo" },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    ...PhotoInfoFragmentDoc.definitions,
  ],
};
export const SearchPhotosDocument: DocumentNode<
  SearchPhotosQuery,
  SearchPhotosQueryVariables
> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "searchPhotos" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "input" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "SearchPhotosInput" },
            },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "searchPhotos" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "input" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "input" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "__typename" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "datalist" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "FragmentSpread",
                        name: { kind: "Name", value: "PhotoInfo" },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    ...PhotoInfoFragmentDoc.definitions,
  ],
};
export const PhotoDocument: DocumentNode<PhotoQuery, PhotoQueryVariables> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "photo" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "photo" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "id" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "id" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "FragmentSpread",
                  name: { kind: "Name", value: "PhotoInfo" },
                },
              ],
            },
          },
        ],
      },
    },
    ...PhotoInfoFragmentDoc.definitions,
  ],
};
export const PhotoWithSkuDocument: DocumentNode<
  PhotoWithSkuQuery,
  PhotoWithSkuQueryVariables
> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "photoWithSku" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "sku" } },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "photoWithSku" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "sku" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "sku" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "FragmentSpread",
                  name: { kind: "Name", value: "PhotoInfo" },
                },
              ],
            },
          },
        ],
      },
    },
    ...PhotoInfoFragmentDoc.definitions,
  ],
};
export const PhotoEditOptionsDocument: DocumentNode<
  PhotoEditOptionsQuery,
  PhotoEditOptionsQueryVariables
> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "photoEditOptions" },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "photoEditOptions" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "photographers" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      { kind: "Field", name: { kind: "Name", value: "name" } },
                    ],
                  },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "locations" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      { kind: "Field", name: { kind: "Name", value: "name" } },
                    ],
                  },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "subjects" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      { kind: "Field", name: { kind: "Name", value: "name" } },
                    ],
                  },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "tags" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      { kind: "Field", name: { kind: "Name", value: "name" } },
                    ],
                  },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "collections" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      { kind: "Field", name: { kind: "Name", value: "name" } },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
};
export const AddPhotoDocument: DocumentNode<
  AddPhotoMutation,
  AddPhotoMutationVariables
> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "addPhoto" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "input" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "AddPhotoInput" },
            },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "addPhoto" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "input" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "input" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "success" } },
                { kind: "Field", name: { kind: "Name", value: "message" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "newPhoto" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "FragmentSpread",
                        name: { kind: "Name", value: "PhotoInfo" },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    ...PhotoInfoFragmentDoc.definitions,
  ],
};
export const UpdatePhotoDocument: DocumentNode<
  UpdatePhotoMutation,
  UpdatePhotoMutationVariables
> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "updatePhoto" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "input" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "UpdatePhotoInput" },
            },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "updatePhoto" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "id" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "id" },
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "input" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "input" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "success" } },
                { kind: "Field", name: { kind: "Name", value: "message" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "updatedPhoto" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "FragmentSpread",
                        name: { kind: "Name", value: "PhotoInfo" },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    ...PhotoInfoFragmentDoc.definitions,
  ],
};
export const DeletePhotoDocument: DocumentNode<
  DeletePhotoMutation,
  DeletePhotoMutationVariables
> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "deletePhoto" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "deletePhoto" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "id" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "id" },
                },
              },
            ],
          },
        ],
      },
    },
  ],
};
export const SearchPrintsDocument: DocumentNode<
  SearchPrintsQuery,
  SearchPrintsQueryVariables
> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "searchPrints" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "input" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "SearchPrintsInput" },
            },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "searchPrints" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "input" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "input" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "__typename" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "datalist" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "FragmentSpread",
                        name: { kind: "Name", value: "PrintInfo" },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    ...PrintInfoFragmentDoc.definitions,
  ],
};
export const PrintDocument: DocumentNode<PrintQuery, PrintQueryVariables> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "print" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "print" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "id" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "id" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "FragmentSpread",
                  name: { kind: "Name", value: "PrintInfo" },
                },
              ],
            },
          },
        ],
      },
    },
    ...PrintInfoFragmentDoc.definitions,
  ],
};
export const AddPrintDocument: DocumentNode<
  AddPrintMutation,
  AddPrintMutationVariables
> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "addPrint" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "input" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "AddPrintInput" },
            },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "addPrint" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "input" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "input" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "success" } },
                { kind: "Field", name: { kind: "Name", value: "message" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "newPrint" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "FragmentSpread",
                        name: { kind: "Name", value: "PrintInfo" },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    ...PrintInfoFragmentDoc.definitions,
  ],
};
export const UpdatePrintDocument: DocumentNode<
  UpdatePrintMutation,
  UpdatePrintMutationVariables
> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "updatePrint" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "input" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "UpdatePrintInput" },
            },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "updatePrint" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "id" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "id" },
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "input" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "input" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "success" } },
                { kind: "Field", name: { kind: "Name", value: "message" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "updatedPrint" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "FragmentSpread",
                        name: { kind: "Name", value: "PrintInfo" },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    ...PrintInfoFragmentDoc.definitions,
  ],
};
export const DeletePrintDocument: DocumentNode<
  DeletePrintMutation,
  DeletePrintMutationVariables
> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "deletePrint" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "deletePrint" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "id" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "id" },
                },
              },
            ],
          },
        ],
      },
    },
  ],
};
export const SearchSubjectsDocument: DocumentNode<
  SearchSubjectsQuery,
  SearchSubjectsQueryVariables
> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "searchSubjects" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "input" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "SearchSubjectsInput" },
            },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "searchSubjects" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "input" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "input" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "__typename" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "datalist" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "FragmentSpread",
                        name: { kind: "Name", value: "SubjectInfo" },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    ...SubjectInfoFragmentDoc.definitions,
  ],
};
export const SubjectDocument: DocumentNode<
  SubjectQuery,
  SubjectQueryVariables
> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "subject" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "subject" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "id" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "id" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "FragmentSpread",
                  name: { kind: "Name", value: "SubjectInfo" },
                },
              ],
            },
          },
        ],
      },
    },
    ...SubjectInfoFragmentDoc.definitions,
  ],
};
export const AddSubjectDocument: DocumentNode<
  AddSubjectMutation,
  AddSubjectMutationVariables
> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "addSubject" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "input" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "AddSubjectInput" },
            },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "addSubject" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "input" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "input" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "success" } },
                { kind: "Field", name: { kind: "Name", value: "message" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "newSubject" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "FragmentSpread",
                        name: { kind: "Name", value: "SubjectInfo" },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    ...SubjectInfoFragmentDoc.definitions,
  ],
};
export const UpdateSubjectDocument: DocumentNode<
  UpdateSubjectMutation,
  UpdateSubjectMutationVariables
> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "updateSubject" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "input" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "UpdateSubjectInput" },
            },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "updateSubject" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "id" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "id" },
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "input" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "input" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "success" } },
                { kind: "Field", name: { kind: "Name", value: "message" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "updatedSubject" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "FragmentSpread",
                        name: { kind: "Name", value: "SubjectInfo" },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    ...SubjectInfoFragmentDoc.definitions,
  ],
};
export const DeleteSubjectDocument: DocumentNode<
  DeleteSubjectMutation,
  DeleteSubjectMutationVariables
> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "deleteSubject" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "deleteSubject" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "id" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "id" },
                },
              },
            ],
          },
        ],
      },
    },
  ],
};
export const SearchTagsDocument: DocumentNode<
  SearchTagsQuery,
  SearchTagsQueryVariables
> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "searchTags" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "input" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "SearchTagsInput" },
            },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "searchTags" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "input" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "input" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "__typename" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "datalist" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "FragmentSpread",
                        name: { kind: "Name", value: "TagInfo" },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    ...TagInfoFragmentDoc.definitions,
  ],
};
export const TagDocument: DocumentNode<TagQuery, TagQueryVariables> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "tag" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "tag" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "id" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "id" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "FragmentSpread",
                  name: { kind: "Name", value: "TagInfo" },
                },
              ],
            },
          },
        ],
      },
    },
    ...TagInfoFragmentDoc.definitions,
  ],
};
export const AddTagDocument: DocumentNode<
  AddTagMutation,
  AddTagMutationVariables
> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "addTag" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "input" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "AddTagInput" },
            },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "addTag" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "input" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "input" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "success" } },
                { kind: "Field", name: { kind: "Name", value: "message" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "newTag" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "FragmentSpread",
                        name: { kind: "Name", value: "TagInfo" },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    ...TagInfoFragmentDoc.definitions,
  ],
};
export const UpdateTagDocument: DocumentNode<
  UpdateTagMutation,
  UpdateTagMutationVariables
> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "updateTag" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "input" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "UpdateTagInput" },
            },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "updateTag" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "id" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "id" },
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "input" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "input" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "message" } },
                { kind: "Field", name: { kind: "Name", value: "success" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "updatedTag" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "FragmentSpread",
                        name: { kind: "Name", value: "TagInfo" },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    ...TagInfoFragmentDoc.definitions,
  ],
};
export const DeleteTagDocument: DocumentNode<
  DeleteTagMutation,
  DeleteTagMutationVariables
> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "deleteTag" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "deleteTag" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "id" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "id" },
                },
              },
            ],
          },
        ],
      },
    },
  ],
};
export type ImageKeySpecifier = (
  | "id"
  | "imageName"
  | "fileExtension"
  | "imageUrl"
  | "altText"
  | "aspectRatio"
  | "size"
  | "width"
  | "height"
  | "isPortrait"
  | "isPanoramic"
  | "photo"
  | "createdAt"
  | "updatedAt"
  | ImageKeySpecifier
)[];
export type ImageFieldPolicy = {
  id?: FieldPolicy<any> | FieldReadFunction<any>;
  imageName?: FieldPolicy<any> | FieldReadFunction<any>;
  fileExtension?: FieldPolicy<any> | FieldReadFunction<any>;
  imageUrl?: FieldPolicy<any> | FieldReadFunction<any>;
  altText?: FieldPolicy<any> | FieldReadFunction<any>;
  aspectRatio?: FieldPolicy<any> | FieldReadFunction<any>;
  size?: FieldPolicy<any> | FieldReadFunction<any>;
  width?: FieldPolicy<any> | FieldReadFunction<any>;
  height?: FieldPolicy<any> | FieldReadFunction<any>;
  isPortrait?: FieldPolicy<any> | FieldReadFunction<any>;
  isPanoramic?: FieldPolicy<any> | FieldReadFunction<any>;
  photo?: FieldPolicy<any> | FieldReadFunction<any>;
  createdAt?: FieldPolicy<any> | FieldReadFunction<any>;
  updatedAt?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type LocationKeySpecifier = (
  | "id"
  | "name"
  | "tag"
  | "description"
  | "coverImage"
  | "photos"
  | "countOfPhotos"
  | "createdAt"
  | "updatedAt"
  | LocationKeySpecifier
)[];
export type LocationFieldPolicy = {
  id?: FieldPolicy<any> | FieldReadFunction<any>;
  name?: FieldPolicy<any> | FieldReadFunction<any>;
  tag?: FieldPolicy<any> | FieldReadFunction<any>;
  description?: FieldPolicy<any> | FieldReadFunction<any>;
  coverImage?: FieldPolicy<any> | FieldReadFunction<any>;
  photos?: FieldPolicy<any> | FieldReadFunction<any>;
  countOfPhotos?: FieldPolicy<any> | FieldReadFunction<any>;
  createdAt?: FieldPolicy<any> | FieldReadFunction<any>;
  updatedAt?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type CollectionKeySpecifier = (
  | "id"
  | "name"
  | "tag"
  | "description"
  | "coverImage"
  | "photosInCollection"
  | "countOfPhotos"
  | "createdAt"
  | "updatedAt"
  | CollectionKeySpecifier
)[];
export type CollectionFieldPolicy = {
  id?: FieldPolicy<any> | FieldReadFunction<any>;
  name?: FieldPolicy<any> | FieldReadFunction<any>;
  tag?: FieldPolicy<any> | FieldReadFunction<any>;
  description?: FieldPolicy<any> | FieldReadFunction<any>;
  coverImage?: FieldPolicy<any> | FieldReadFunction<any>;
  photosInCollection?: FieldPolicy<any> | FieldReadFunction<any>;
  countOfPhotos?: FieldPolicy<any> | FieldReadFunction<any>;
  createdAt?: FieldPolicy<any> | FieldReadFunction<any>;
  updatedAt?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type PhotoCollectionKeySpecifier = (
  | "collectionId"
  | "collection"
  | "photoId"
  | "photo"
  | PhotoCollectionKeySpecifier
)[];
export type PhotoCollectionFieldPolicy = {
  collectionId?: FieldPolicy<any> | FieldReadFunction<any>;
  collection?: FieldPolicy<any> | FieldReadFunction<any>;
  photoId?: FieldPolicy<any> | FieldReadFunction<any>;
  photo?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type PhotographerKeySpecifier = (
  | "id"
  | "name"
  | "firstName"
  | "lastName"
  | "email"
  | "coverImage"
  | "bio"
  | "photos"
  | "countOfPhotos"
  | "createdAt"
  | "updatedAt"
  | PhotographerKeySpecifier
)[];
export type PhotographerFieldPolicy = {
  id?: FieldPolicy<any> | FieldReadFunction<any>;
  name?: FieldPolicy<any> | FieldReadFunction<any>;
  firstName?: FieldPolicy<any> | FieldReadFunction<any>;
  lastName?: FieldPolicy<any> | FieldReadFunction<any>;
  email?: FieldPolicy<any> | FieldReadFunction<any>;
  coverImage?: FieldPolicy<any> | FieldReadFunction<any>;
  bio?: FieldPolicy<any> | FieldReadFunction<any>;
  photos?: FieldPolicy<any> | FieldReadFunction<any>;
  countOfPhotos?: FieldPolicy<any> | FieldReadFunction<any>;
  createdAt?: FieldPolicy<any> | FieldReadFunction<any>;
  updatedAt?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type SubjectKeySpecifier = (
  | "id"
  | "name"
  | "description"
  | "coverImage"
  | "photosOfSubject"
  | "countOfPhotos"
  | "createdAt"
  | "updatedAt"
  | SubjectKeySpecifier
)[];
export type SubjectFieldPolicy = {
  id?: FieldPolicy<any> | FieldReadFunction<any>;
  name?: FieldPolicy<any> | FieldReadFunction<any>;
  description?: FieldPolicy<any> | FieldReadFunction<any>;
  coverImage?: FieldPolicy<any> | FieldReadFunction<any>;
  photosOfSubject?: FieldPolicy<any> | FieldReadFunction<any>;
  countOfPhotos?: FieldPolicy<any> | FieldReadFunction<any>;
  createdAt?: FieldPolicy<any> | FieldReadFunction<any>;
  updatedAt?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type PhotoSubjectKeySpecifier = (
  | "subjectId"
  | "subject"
  | "photoId"
  | "photo"
  | PhotoSubjectKeySpecifier
)[];
export type PhotoSubjectFieldPolicy = {
  subjectId?: FieldPolicy<any> | FieldReadFunction<any>;
  subject?: FieldPolicy<any> | FieldReadFunction<any>;
  photoId?: FieldPolicy<any> | FieldReadFunction<any>;
  photo?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type TagKeySpecifier = (
  | "id"
  | "name"
  | "description"
  | "coverImage"
  | "photosWithTag"
  | "countOfPhotos"
  | "createdAt"
  | "updatedAt"
  | TagKeySpecifier
)[];
export type TagFieldPolicy = {
  id?: FieldPolicy<any> | FieldReadFunction<any>;
  name?: FieldPolicy<any> | FieldReadFunction<any>;
  description?: FieldPolicy<any> | FieldReadFunction<any>;
  coverImage?: FieldPolicy<any> | FieldReadFunction<any>;
  photosWithTag?: FieldPolicy<any> | FieldReadFunction<any>;
  countOfPhotos?: FieldPolicy<any> | FieldReadFunction<any>;
  createdAt?: FieldPolicy<any> | FieldReadFunction<any>;
  updatedAt?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type PhotoTagKeySpecifier = (
  | "tagId"
  | "tag"
  | "photoId"
  | "photo"
  | PhotoTagKeySpecifier
)[];
export type PhotoTagFieldPolicy = {
  tagId?: FieldPolicy<any> | FieldReadFunction<any>;
  tag?: FieldPolicy<any> | FieldReadFunction<any>;
  photoId?: FieldPolicy<any> | FieldReadFunction<any>;
  photo?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type UserShoppingBagItemKeySpecifier = (
  | "userId"
  | "user"
  | "photoId"
  | "photo"
  | UserShoppingBagItemKeySpecifier
)[];
export type UserShoppingBagItemFieldPolicy = {
  userId?: FieldPolicy<any> | FieldReadFunction<any>;
  user?: FieldPolicy<any> | FieldReadFunction<any>;
  photoId?: FieldPolicy<any> | FieldReadFunction<any>;
  photo?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type PhotoKeySpecifier = (
  | "id"
  | "skuGenerator"
  | "sku"
  | "sortIndex"
  | "title"
  | "description"
  | "isFeatured"
  | "isLimitedEdition"
  | "isHidden"
  | "rating"
  | "printTypes"
  | "basePrice12"
  | "priceModifier12"
  | "basePrice16"
  | "priceModifier16"
  | "basePrice20"
  | "priceModifier20"
  | "basePrice24"
  | "priceModifier24"
  | "basePrice30"
  | "priceModifier30"
  | "photographer"
  | "location"
  | "images"
  | "sharingImage"
  | "subjectsInPhoto"
  | "tagsForPhoto"
  | "collectionsForPhoto"
  | "favoritedByUsers"
  | "inShoppingBagsOfUsers"
  | "createdAt"
  | "updatedAt"
  | PhotoKeySpecifier
)[];
export type PhotoFieldPolicy = {
  id?: FieldPolicy<any> | FieldReadFunction<any>;
  skuGenerator?: FieldPolicy<any> | FieldReadFunction<any>;
  sku?: FieldPolicy<any> | FieldReadFunction<any>;
  sortIndex?: FieldPolicy<any> | FieldReadFunction<any>;
  title?: FieldPolicy<any> | FieldReadFunction<any>;
  description?: FieldPolicy<any> | FieldReadFunction<any>;
  isFeatured?: FieldPolicy<any> | FieldReadFunction<any>;
  isLimitedEdition?: FieldPolicy<any> | FieldReadFunction<any>;
  isHidden?: FieldPolicy<any> | FieldReadFunction<any>;
  rating?: FieldPolicy<any> | FieldReadFunction<any>;
  printTypes?: FieldPolicy<any> | FieldReadFunction<any>;
  basePrice12?: FieldPolicy<any> | FieldReadFunction<any>;
  priceModifier12?: FieldPolicy<any> | FieldReadFunction<any>;
  basePrice16?: FieldPolicy<any> | FieldReadFunction<any>;
  priceModifier16?: FieldPolicy<any> | FieldReadFunction<any>;
  basePrice20?: FieldPolicy<any> | FieldReadFunction<any>;
  priceModifier20?: FieldPolicy<any> | FieldReadFunction<any>;
  basePrice24?: FieldPolicy<any> | FieldReadFunction<any>;
  priceModifier24?: FieldPolicy<any> | FieldReadFunction<any>;
  basePrice30?: FieldPolicy<any> | FieldReadFunction<any>;
  priceModifier30?: FieldPolicy<any> | FieldReadFunction<any>;
  photographer?: FieldPolicy<any> | FieldReadFunction<any>;
  location?: FieldPolicy<any> | FieldReadFunction<any>;
  images?: FieldPolicy<any> | FieldReadFunction<any>;
  sharingImage?: FieldPolicy<any> | FieldReadFunction<any>;
  subjectsInPhoto?: FieldPolicy<any> | FieldReadFunction<any>;
  tagsForPhoto?: FieldPolicy<any> | FieldReadFunction<any>;
  collectionsForPhoto?: FieldPolicy<any> | FieldReadFunction<any>;
  favoritedByUsers?: FieldPolicy<any> | FieldReadFunction<any>;
  inShoppingBagsOfUsers?: FieldPolicy<any> | FieldReadFunction<any>;
  createdAt?: FieldPolicy<any> | FieldReadFunction<any>;
  updatedAt?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type UserFavoriteKeySpecifier = (
  | "userId"
  | "user"
  | "photoId"
  | "photo"
  | UserFavoriteKeySpecifier
)[];
export type UserFavoriteFieldPolicy = {
  userId?: FieldPolicy<any> | FieldReadFunction<any>;
  user?: FieldPolicy<any> | FieldReadFunction<any>;
  photoId?: FieldPolicy<any> | FieldReadFunction<any>;
  photo?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type UserKeySpecifier = (
  | "id"
  | "name"
  | "email"
  | "email_verified"
  | "image"
  | "roles"
  | "isSubscribed"
  | "userFavorites"
  | "userShoppingBagItems"
  | "createdAt"
  | "updatedAt"
  | UserKeySpecifier
)[];
export type UserFieldPolicy = {
  id?: FieldPolicy<any> | FieldReadFunction<any>;
  name?: FieldPolicy<any> | FieldReadFunction<any>;
  email?: FieldPolicy<any> | FieldReadFunction<any>;
  email_verified?: FieldPolicy<any> | FieldReadFunction<any>;
  image?: FieldPolicy<any> | FieldReadFunction<any>;
  roles?: FieldPolicy<any> | FieldReadFunction<any>;
  isSubscribed?: FieldPolicy<any> | FieldReadFunction<any>;
  userFavorites?: FieldPolicy<any> | FieldReadFunction<any>;
  userShoppingBagItems?: FieldPolicy<any> | FieldReadFunction<any>;
  createdAt?: FieldPolicy<any> | FieldReadFunction<any>;
  updatedAt?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type SuccessMessageResponseKeySpecifier = (
  | "success"
  | "message"
  | SuccessMessageResponseKeySpecifier
)[];
export type SuccessMessageResponseFieldPolicy = {
  success?: FieldPolicy<any> | FieldReadFunction<any>;
  message?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type SearchCollectionsResponseKeySpecifier = (
  | "datalist"
  | SearchCollectionsResponseKeySpecifier
)[];
export type SearchCollectionsResponseFieldPolicy = {
  datalist?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type AddCollectionResponseKeySpecifier = (
  | "success"
  | "message"
  | "newCollection"
  | AddCollectionResponseKeySpecifier
)[];
export type AddCollectionResponseFieldPolicy = {
  success?: FieldPolicy<any> | FieldReadFunction<any>;
  message?: FieldPolicy<any> | FieldReadFunction<any>;
  newCollection?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type UpdateCollectionResponseKeySpecifier = (
  | "success"
  | "message"
  | "updatedCollection"
  | UpdateCollectionResponseKeySpecifier
)[];
export type UpdateCollectionResponseFieldPolicy = {
  success?: FieldPolicy<any> | FieldReadFunction<any>;
  message?: FieldPolicy<any> | FieldReadFunction<any>;
  updatedCollection?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type AllPhotosInCollectionResponseKeySpecifier = (
  | "collectionInfo"
  | "total"
  | "photos"
  | AllPhotosInCollectionResponseKeySpecifier
)[];
export type AllPhotosInCollectionResponseFieldPolicy = {
  collectionInfo?: FieldPolicy<any> | FieldReadFunction<any>;
  total?: FieldPolicy<any> | FieldReadFunction<any>;
  photos?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type FrameKeySpecifier = (
  | "id"
  | "name"
  | "displayName"
  | "description"
  | "material"
  | "color"
  | "printType"
  | "coverImage"
  | "frameSku"
  | "aspectRatio"
  | "dimension1"
  | "dimension2"
  | "cost"
  | "shippingCost"
  | "basePrice"
  | "priceModifier"
  | "createdAt"
  | "updatedAt"
  | FrameKeySpecifier
)[];
export type FrameFieldPolicy = {
  id?: FieldPolicy<any> | FieldReadFunction<any>;
  name?: FieldPolicy<any> | FieldReadFunction<any>;
  displayName?: FieldPolicy<any> | FieldReadFunction<any>;
  description?: FieldPolicy<any> | FieldReadFunction<any>;
  material?: FieldPolicy<any> | FieldReadFunction<any>;
  color?: FieldPolicy<any> | FieldReadFunction<any>;
  printType?: FieldPolicy<any> | FieldReadFunction<any>;
  coverImage?: FieldPolicy<any> | FieldReadFunction<any>;
  frameSku?: FieldPolicy<any> | FieldReadFunction<any>;
  aspectRatio?: FieldPolicy<any> | FieldReadFunction<any>;
  dimension1?: FieldPolicy<any> | FieldReadFunction<any>;
  dimension2?: FieldPolicy<any> | FieldReadFunction<any>;
  cost?: FieldPolicy<any> | FieldReadFunction<any>;
  shippingCost?: FieldPolicy<any> | FieldReadFunction<any>;
  basePrice?: FieldPolicy<any> | FieldReadFunction<any>;
  priceModifier?: FieldPolicy<any> | FieldReadFunction<any>;
  createdAt?: FieldPolicy<any> | FieldReadFunction<any>;
  updatedAt?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type SearchFramesResponseKeySpecifier = (
  | "datalist"
  | SearchFramesResponseKeySpecifier
)[];
export type SearchFramesResponseFieldPolicy = {
  datalist?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type AddFrameResponseKeySpecifier = (
  | "success"
  | "message"
  | "newFrame"
  | AddFrameResponseKeySpecifier
)[];
export type AddFrameResponseFieldPolicy = {
  success?: FieldPolicy<any> | FieldReadFunction<any>;
  message?: FieldPolicy<any> | FieldReadFunction<any>;
  newFrame?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type UpdateFrameResponseKeySpecifier = (
  | "success"
  | "message"
  | "updatedFrame"
  | UpdateFrameResponseKeySpecifier
)[];
export type UpdateFrameResponseFieldPolicy = {
  success?: FieldPolicy<any> | FieldReadFunction<any>;
  message?: FieldPolicy<any> | FieldReadFunction<any>;
  updatedFrame?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type AddImageResponseKeySpecifier = (
  | "success"
  | "message"
  | "newImage"
  | AddImageResponseKeySpecifier
)[];
export type AddImageResponseFieldPolicy = {
  success?: FieldPolicy<any> | FieldReadFunction<any>;
  message?: FieldPolicy<any> | FieldReadFunction<any>;
  newImage?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type UpdateImageResponseKeySpecifier = (
  | "success"
  | "message"
  | "updatedImage"
  | UpdateImageResponseKeySpecifier
)[];
export type UpdateImageResponseFieldPolicy = {
  success?: FieldPolicy<any> | FieldReadFunction<any>;
  message?: FieldPolicy<any> | FieldReadFunction<any>;
  updatedImage?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type PaginatedResponseKeySpecifier = (
  | "startCursor"
  | "endCursor"
  | "total"
  | PaginatedResponseKeySpecifier
)[];
export type PaginatedResponseFieldPolicy = {
  startCursor?: FieldPolicy<any> | FieldReadFunction<any>;
  endCursor?: FieldPolicy<any> | FieldReadFunction<any>;
  total?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type SearchLocationsResponseKeySpecifier = (
  | "datalist"
  | SearchLocationsResponseKeySpecifier
)[];
export type SearchLocationsResponseFieldPolicy = {
  datalist?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type LocationsResponseKeySpecifier = (
  | "locations"
  | LocationsResponseKeySpecifier
)[];
export type LocationsResponseFieldPolicy = {
  locations?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type AllPhotosAtLocationResponseKeySpecifier = (
  | "locationInfo"
  | "total"
  | "photos"
  | AllPhotosAtLocationResponseKeySpecifier
)[];
export type AllPhotosAtLocationResponseFieldPolicy = {
  locationInfo?: FieldPolicy<any> | FieldReadFunction<any>;
  total?: FieldPolicy<any> | FieldReadFunction<any>;
  photos?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type GroupedPhotosAtLocationResponseKeySpecifier = (
  | "photos"
  | "locationInfo"
  | GroupedPhotosAtLocationResponseKeySpecifier
)[];
export type GroupedPhotosAtLocationResponseFieldPolicy = {
  photos?: FieldPolicy<any> | FieldReadFunction<any>;
  locationInfo?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type PaginatedPhotosAtLocationResponseKeySpecifier = (
  | "photos"
  | "pageInfo"
  | "locationInfo"
  | PaginatedPhotosAtLocationResponseKeySpecifier
)[];
export type PaginatedPhotosAtLocationResponseFieldPolicy = {
  photos?: FieldPolicy<any> | FieldReadFunction<any>;
  pageInfo?: FieldPolicy<any> | FieldReadFunction<any>;
  locationInfo?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type AddLocationResponseKeySpecifier = (
  | "success"
  | "message"
  | "newLocation"
  | AddLocationResponseKeySpecifier
)[];
export type AddLocationResponseFieldPolicy = {
  success?: FieldPolicy<any> | FieldReadFunction<any>;
  message?: FieldPolicy<any> | FieldReadFunction<any>;
  newLocation?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type UpdateLocationResponseKeySpecifier = (
  | "success"
  | "message"
  | "updatedLocation"
  | UpdateLocationResponseKeySpecifier
)[];
export type UpdateLocationResponseFieldPolicy = {
  success?: FieldPolicy<any> | FieldReadFunction<any>;
  message?: FieldPolicy<any> | FieldReadFunction<any>;
  updatedLocation?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type MatKeySpecifier = (
  | "id"
  | "name"
  | "displayName"
  | "description"
  | "color"
  | "printType"
  | "coverImage"
  | "matSku"
  | "aspectRatio"
  | "dimension1"
  | "dimension2"
  | "cost"
  | "shippingCost"
  | "basePrice"
  | "priceModifier"
  | "createdAt"
  | "updatedAt"
  | MatKeySpecifier
)[];
export type MatFieldPolicy = {
  id?: FieldPolicy<any> | FieldReadFunction<any>;
  name?: FieldPolicy<any> | FieldReadFunction<any>;
  displayName?: FieldPolicy<any> | FieldReadFunction<any>;
  description?: FieldPolicy<any> | FieldReadFunction<any>;
  color?: FieldPolicy<any> | FieldReadFunction<any>;
  printType?: FieldPolicy<any> | FieldReadFunction<any>;
  coverImage?: FieldPolicy<any> | FieldReadFunction<any>;
  matSku?: FieldPolicy<any> | FieldReadFunction<any>;
  aspectRatio?: FieldPolicy<any> | FieldReadFunction<any>;
  dimension1?: FieldPolicy<any> | FieldReadFunction<any>;
  dimension2?: FieldPolicy<any> | FieldReadFunction<any>;
  cost?: FieldPolicy<any> | FieldReadFunction<any>;
  shippingCost?: FieldPolicy<any> | FieldReadFunction<any>;
  basePrice?: FieldPolicy<any> | FieldReadFunction<any>;
  priceModifier?: FieldPolicy<any> | FieldReadFunction<any>;
  createdAt?: FieldPolicy<any> | FieldReadFunction<any>;
  updatedAt?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type SearchMatsResponseKeySpecifier = (
  | "datalist"
  | SearchMatsResponseKeySpecifier
)[];
export type SearchMatsResponseFieldPolicy = {
  datalist?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type AddMatResponseKeySpecifier = (
  | "success"
  | "message"
  | "newMat"
  | AddMatResponseKeySpecifier
)[];
export type AddMatResponseFieldPolicy = {
  success?: FieldPolicy<any> | FieldReadFunction<any>;
  message?: FieldPolicy<any> | FieldReadFunction<any>;
  newMat?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type UpdateMatResponseKeySpecifier = (
  | "success"
  | "message"
  | "updatedMat"
  | UpdateMatResponseKeySpecifier
)[];
export type UpdateMatResponseFieldPolicy = {
  success?: FieldPolicy<any> | FieldReadFunction<any>;
  message?: FieldPolicy<any> | FieldReadFunction<any>;
  updatedMat?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type ItemCountListKeySpecifier = (
  | "itemCountList"
  | ItemCountListKeySpecifier
)[];
export type ItemCountListFieldPolicy = {
  itemCountList?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type ItemCountKeySpecifier = (
  | "name"
  | "count"
  | ItemCountKeySpecifier
)[];
export type ItemCountFieldPolicy = {
  name?: FieldPolicy<any> | FieldReadFunction<any>;
  count?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type PrintKeySpecifier = (
  | "id"
  | "name"
  | "description"
  | "type"
  | "coverImage"
  | "printSku"
  | "aspectRatio"
  | "dimension1"
  | "dimension2"
  | "cost"
  | "shippingCost"
  | "basePrice"
  | "priceModifier"
  | "createdAt"
  | "updatedAt"
  | PrintKeySpecifier
)[];
export type PrintFieldPolicy = {
  id?: FieldPolicy<any> | FieldReadFunction<any>;
  name?: FieldPolicy<any> | FieldReadFunction<any>;
  description?: FieldPolicy<any> | FieldReadFunction<any>;
  type?: FieldPolicy<any> | FieldReadFunction<any>;
  coverImage?: FieldPolicy<any> | FieldReadFunction<any>;
  printSku?: FieldPolicy<any> | FieldReadFunction<any>;
  aspectRatio?: FieldPolicy<any> | FieldReadFunction<any>;
  dimension1?: FieldPolicy<any> | FieldReadFunction<any>;
  dimension2?: FieldPolicy<any> | FieldReadFunction<any>;
  cost?: FieldPolicy<any> | FieldReadFunction<any>;
  shippingCost?: FieldPolicy<any> | FieldReadFunction<any>;
  basePrice?: FieldPolicy<any> | FieldReadFunction<any>;
  priceModifier?: FieldPolicy<any> | FieldReadFunction<any>;
  createdAt?: FieldPolicy<any> | FieldReadFunction<any>;
  updatedAt?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type PrintsResponseKeySpecifier = (
  | "success"
  | "message"
  | "prints"
  | PrintsResponseKeySpecifier
)[];
export type PrintsResponseFieldPolicy = {
  success?: FieldPolicy<any> | FieldReadFunction<any>;
  message?: FieldPolicy<any> | FieldReadFunction<any>;
  prints?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type MatsResponseKeySpecifier = (
  | "success"
  | "message"
  | "mats"
  | MatsResponseKeySpecifier
)[];
export type MatsResponseFieldPolicy = {
  success?: FieldPolicy<any> | FieldReadFunction<any>;
  message?: FieldPolicy<any> | FieldReadFunction<any>;
  mats?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type FinishOptionsKeySpecifier = (
  | "prints"
  | "mats"
  | "frames"
  | FinishOptionsKeySpecifier
)[];
export type FinishOptionsFieldPolicy = {
  prints?: FieldPolicy<any> | FieldReadFunction<any>;
  mats?: FieldPolicy<any> | FieldReadFunction<any>;
  frames?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type PhotoWithFinishOptionsResponseKeySpecifier = (
  | "success"
  | "message"
  | "photo"
  | "prints"
  | "mats"
  | "frames"
  | PhotoWithFinishOptionsResponseKeySpecifier
)[];
export type PhotoWithFinishOptionsResponseFieldPolicy = {
  success?: FieldPolicy<any> | FieldReadFunction<any>;
  message?: FieldPolicy<any> | FieldReadFunction<any>;
  photo?: FieldPolicy<any> | FieldReadFunction<any>;
  prints?: FieldPolicy<any> | FieldReadFunction<any>;
  mats?: FieldPolicy<any> | FieldReadFunction<any>;
  frames?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type SearchPhotographersResponseKeySpecifier = (
  | "datalist"
  | SearchPhotographersResponseKeySpecifier
)[];
export type SearchPhotographersResponseFieldPolicy = {
  datalist?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type PhotographersResponseKeySpecifier = (
  | "photographers"
  | PhotographersResponseKeySpecifier
)[];
export type PhotographersResponseFieldPolicy = {
  photographers?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type AllPhotosByPhotographerResponseKeySpecifier = (
  | "photographerInfo"
  | "total"
  | "photos"
  | AllPhotosByPhotographerResponseKeySpecifier
)[];
export type AllPhotosByPhotographerResponseFieldPolicy = {
  photographerInfo?: FieldPolicy<any> | FieldReadFunction<any>;
  total?: FieldPolicy<any> | FieldReadFunction<any>;
  photos?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type GroupedPhotosByPhotographerResponseKeySpecifier = (
  | "photos"
  | "photographerInfo"
  | GroupedPhotosByPhotographerResponseKeySpecifier
)[];
export type GroupedPhotosByPhotographerResponseFieldPolicy = {
  photos?: FieldPolicy<any> | FieldReadFunction<any>;
  photographerInfo?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type PaginatedPhotosByPhotographerResponseKeySpecifier = (
  | "photos"
  | "pageInfo"
  | "photographerInfo"
  | PaginatedPhotosByPhotographerResponseKeySpecifier
)[];
export type PaginatedPhotosByPhotographerResponseFieldPolicy = {
  photos?: FieldPolicy<any> | FieldReadFunction<any>;
  pageInfo?: FieldPolicy<any> | FieldReadFunction<any>;
  photographerInfo?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type AddPhotographerResponseKeySpecifier = (
  | "success"
  | "message"
  | "newPhotographer"
  | AddPhotographerResponseKeySpecifier
)[];
export type AddPhotographerResponseFieldPolicy = {
  success?: FieldPolicy<any> | FieldReadFunction<any>;
  message?: FieldPolicy<any> | FieldReadFunction<any>;
  newPhotographer?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type UpdatePhotographerResponseKeySpecifier = (
  | "success"
  | "message"
  | "updatedPhotographer"
  | UpdatePhotographerResponseKeySpecifier
)[];
export type UpdatePhotographerResponseFieldPolicy = {
  success?: FieldPolicy<any> | FieldReadFunction<any>;
  message?: FieldPolicy<any> | FieldReadFunction<any>;
  updatedPhotographer?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type SelectionOptionKeySpecifier = (
  | "id"
  | "name"
  | SelectionOptionKeySpecifier
)[];
export type SelectionOptionFieldPolicy = {
  id?: FieldPolicy<any> | FieldReadFunction<any>;
  name?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type PhotosResponseKeySpecifier = (
  | "photos"
  | PhotosResponseKeySpecifier
)[];
export type PhotosResponseFieldPolicy = {
  photos?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type PhotographerSelectionOptionKeySpecifier = (
  | "id"
  | "name"
  | PhotographerSelectionOptionKeySpecifier
)[];
export type PhotographerSelectionOptionFieldPolicy = {
  id?: FieldPolicy<any> | FieldReadFunction<any>;
  name?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type LocationSelectionOptionKeySpecifier = (
  | "id"
  | "name"
  | LocationSelectionOptionKeySpecifier
)[];
export type LocationSelectionOptionFieldPolicy = {
  id?: FieldPolicy<any> | FieldReadFunction<any>;
  name?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type SubjectSelectionOptionKeySpecifier = (
  | "id"
  | "name"
  | SubjectSelectionOptionKeySpecifier
)[];
export type SubjectSelectionOptionFieldPolicy = {
  id?: FieldPolicy<any> | FieldReadFunction<any>;
  name?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type TagSelectionOptionKeySpecifier = (
  | "id"
  | "name"
  | TagSelectionOptionKeySpecifier
)[];
export type TagSelectionOptionFieldPolicy = {
  id?: FieldPolicy<any> | FieldReadFunction<any>;
  name?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type CollectionSelectionOptionKeySpecifier = (
  | "id"
  | "name"
  | CollectionSelectionOptionKeySpecifier
)[];
export type CollectionSelectionOptionFieldPolicy = {
  id?: FieldPolicy<any> | FieldReadFunction<any>;
  name?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type PhotoEditSelectionOptionsKeySpecifier = (
  | "photographers"
  | "locations"
  | "subjects"
  | "tags"
  | "collections"
  | PhotoEditSelectionOptionsKeySpecifier
)[];
export type PhotoEditSelectionOptionsFieldPolicy = {
  photographers?: FieldPolicy<any> | FieldReadFunction<any>;
  locations?: FieldPolicy<any> | FieldReadFunction<any>;
  subjects?: FieldPolicy<any> | FieldReadFunction<any>;
  tags?: FieldPolicy<any> | FieldReadFunction<any>;
  collections?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type SearchPhotosResponseKeySpecifier = (
  | "datalist"
  | SearchPhotosResponseKeySpecifier
)[];
export type SearchPhotosResponseFieldPolicy = {
  datalist?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type PaginatedAllPhotosResponseKeySpecifier = (
  | "photos"
  | "pageInfo"
  | PaginatedAllPhotosResponseKeySpecifier
)[];
export type PaginatedAllPhotosResponseFieldPolicy = {
  photos?: FieldPolicy<any> | FieldReadFunction<any>;
  pageInfo?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type PaginatedFeaturedPhotosResponseKeySpecifier = (
  | "photos"
  | "pageInfo"
  | PaginatedFeaturedPhotosResponseKeySpecifier
)[];
export type PaginatedFeaturedPhotosResponseFieldPolicy = {
  photos?: FieldPolicy<any> | FieldReadFunction<any>;
  pageInfo?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type AddPhotoResponseKeySpecifier = (
  | "success"
  | "message"
  | "newPhoto"
  | AddPhotoResponseKeySpecifier
)[];
export type AddPhotoResponseFieldPolicy = {
  success?: FieldPolicy<any> | FieldReadFunction<any>;
  message?: FieldPolicy<any> | FieldReadFunction<any>;
  newPhoto?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type UpdatePhotoResponseKeySpecifier = (
  | "success"
  | "message"
  | "updatedPhoto"
  | UpdatePhotoResponseKeySpecifier
)[];
export type UpdatePhotoResponseFieldPolicy = {
  success?: FieldPolicy<any> | FieldReadFunction<any>;
  message?: FieldPolicy<any> | FieldReadFunction<any>;
  updatedPhoto?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type AllFeaturedPhotosResponseKeySpecifier = (
  | "total"
  | "photos"
  | AllFeaturedPhotosResponseKeySpecifier
)[];
export type AllFeaturedPhotosResponseFieldPolicy = {
  total?: FieldPolicy<any> | FieldReadFunction<any>;
  photos?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type SearchPrintsResponseKeySpecifier = (
  | "datalist"
  | SearchPrintsResponseKeySpecifier
)[];
export type SearchPrintsResponseFieldPolicy = {
  datalist?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type AddPrintResponseKeySpecifier = (
  | "success"
  | "message"
  | "newPrint"
  | AddPrintResponseKeySpecifier
)[];
export type AddPrintResponseFieldPolicy = {
  success?: FieldPolicy<any> | FieldReadFunction<any>;
  message?: FieldPolicy<any> | FieldReadFunction<any>;
  newPrint?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type UpdatePrintResponseKeySpecifier = (
  | "success"
  | "message"
  | "updatedPrint"
  | UpdatePrintResponseKeySpecifier
)[];
export type UpdatePrintResponseFieldPolicy = {
  success?: FieldPolicy<any> | FieldReadFunction<any>;
  message?: FieldPolicy<any> | FieldReadFunction<any>;
  updatedPrint?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type SubjectsResponseKeySpecifier = (
  | "subjects"
  | SubjectsResponseKeySpecifier
)[];
export type SubjectsResponseFieldPolicy = {
  subjects?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type SearchSubjectsResponseKeySpecifier = (
  | "datalist"
  | SearchSubjectsResponseKeySpecifier
)[];
export type SearchSubjectsResponseFieldPolicy = {
  datalist?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type AllPhotosOfSubjectResponseKeySpecifier = (
  | "subjectInfo"
  | "total"
  | "photos"
  | AllPhotosOfSubjectResponseKeySpecifier
)[];
export type AllPhotosOfSubjectResponseFieldPolicy = {
  subjectInfo?: FieldPolicy<any> | FieldReadFunction<any>;
  total?: FieldPolicy<any> | FieldReadFunction<any>;
  photos?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type GroupedPhotosOfSubjectResponseKeySpecifier = (
  | "photos"
  | "subjectInfo"
  | GroupedPhotosOfSubjectResponseKeySpecifier
)[];
export type GroupedPhotosOfSubjectResponseFieldPolicy = {
  photos?: FieldPolicy<any> | FieldReadFunction<any>;
  subjectInfo?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type PaginatedPhotosOfSubjectResponseKeySpecifier = (
  | "photos"
  | "pageInfo"
  | "subjectInfo"
  | PaginatedPhotosOfSubjectResponseKeySpecifier
)[];
export type PaginatedPhotosOfSubjectResponseFieldPolicy = {
  photos?: FieldPolicy<any> | FieldReadFunction<any>;
  pageInfo?: FieldPolicy<any> | FieldReadFunction<any>;
  subjectInfo?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type AddSubjectResponseKeySpecifier = (
  | "success"
  | "message"
  | "newSubject"
  | AddSubjectResponseKeySpecifier
)[];
export type AddSubjectResponseFieldPolicy = {
  success?: FieldPolicy<any> | FieldReadFunction<any>;
  message?: FieldPolicy<any> | FieldReadFunction<any>;
  newSubject?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type UpdateSubjectResponseKeySpecifier = (
  | "success"
  | "message"
  | "updatedSubject"
  | UpdateSubjectResponseKeySpecifier
)[];
export type UpdateSubjectResponseFieldPolicy = {
  success?: FieldPolicy<any> | FieldReadFunction<any>;
  message?: FieldPolicy<any> | FieldReadFunction<any>;
  updatedSubject?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type SearchTagsResponseKeySpecifier = (
  | "datalist"
  | SearchTagsResponseKeySpecifier
)[];
export type SearchTagsResponseFieldPolicy = {
  datalist?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type AllPhotosWithTagResponseKeySpecifier = (
  | "tagInfo"
  | "total"
  | "photos"
  | AllPhotosWithTagResponseKeySpecifier
)[];
export type AllPhotosWithTagResponseFieldPolicy = {
  tagInfo?: FieldPolicy<any> | FieldReadFunction<any>;
  total?: FieldPolicy<any> | FieldReadFunction<any>;
  photos?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type GroupedPhotosWithTagResponseKeySpecifier = (
  | "photos"
  | "tagInfo"
  | GroupedPhotosWithTagResponseKeySpecifier
)[];
export type GroupedPhotosWithTagResponseFieldPolicy = {
  photos?: FieldPolicy<any> | FieldReadFunction<any>;
  tagInfo?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type PaginatedPhotosWithTagResponseKeySpecifier = (
  | "photos"
  | "pageInfo"
  | "tagInfo"
  | PaginatedPhotosWithTagResponseKeySpecifier
)[];
export type PaginatedPhotosWithTagResponseFieldPolicy = {
  photos?: FieldPolicy<any> | FieldReadFunction<any>;
  pageInfo?: FieldPolicy<any> | FieldReadFunction<any>;
  tagInfo?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type AddTagResponseKeySpecifier = (
  | "success"
  | "message"
  | "newTag"
  | AddTagResponseKeySpecifier
)[];
export type AddTagResponseFieldPolicy = {
  success?: FieldPolicy<any> | FieldReadFunction<any>;
  message?: FieldPolicy<any> | FieldReadFunction<any>;
  newTag?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type UpdateTagResponseKeySpecifier = (
  | "success"
  | "message"
  | "updatedTag"
  | UpdateTagResponseKeySpecifier
)[];
export type UpdateTagResponseFieldPolicy = {
  success?: FieldPolicy<any> | FieldReadFunction<any>;
  message?: FieldPolicy<any> | FieldReadFunction<any>;
  updatedTag?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type FavoritesResponseKeySpecifier = (
  | "photoList"
  | FavoritesResponseKeySpecifier
)[];
export type FavoritesResponseFieldPolicy = {
  photoList?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type AddPhotoToFavoritesResponseKeySpecifier = (
  | "success"
  | "message"
  | "addedPhotoWithId"
  | AddPhotoToFavoritesResponseKeySpecifier
)[];
export type AddPhotoToFavoritesResponseFieldPolicy = {
  success?: FieldPolicy<any> | FieldReadFunction<any>;
  message?: FieldPolicy<any> | FieldReadFunction<any>;
  addedPhotoWithId?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type RemovePhotoFromFavoritesResponseKeySpecifier = (
  | "success"
  | "message"
  | "removedPhotoWithId"
  | RemovePhotoFromFavoritesResponseKeySpecifier
)[];
export type RemovePhotoFromFavoritesResponseFieldPolicy = {
  success?: FieldPolicy<any> | FieldReadFunction<any>;
  message?: FieldPolicy<any> | FieldReadFunction<any>;
  removedPhotoWithId?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type ShoppingBagItemsResponseKeySpecifier = (
  | "photoList"
  | ShoppingBagItemsResponseKeySpecifier
)[];
export type ShoppingBagItemsResponseFieldPolicy = {
  photoList?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type AddPhotoToShoppingBagResponseKeySpecifier = (
  | "success"
  | "message"
  | "addedPhotoWithId"
  | AddPhotoToShoppingBagResponseKeySpecifier
)[];
export type AddPhotoToShoppingBagResponseFieldPolicy = {
  success?: FieldPolicy<any> | FieldReadFunction<any>;
  message?: FieldPolicy<any> | FieldReadFunction<any>;
  addedPhotoWithId?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type RemovePhotoFromShoppingBagResponseKeySpecifier = (
  | "success"
  | "message"
  | "removedPhotoWithId"
  | RemovePhotoFromShoppingBagResponseKeySpecifier
)[];
export type RemovePhotoFromShoppingBagResponseFieldPolicy = {
  success?: FieldPolicy<any> | FieldReadFunction<any>;
  message?: FieldPolicy<any> | FieldReadFunction<any>;
  removedPhotoWithId?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type UserPreferencesResponseKeySpecifier = (
  | "favorites"
  | "shoppingBagItems"
  | UserPreferencesResponseKeySpecifier
)[];
export type UserPreferencesResponseFieldPolicy = {
  favorites?: FieldPolicy<any> | FieldReadFunction<any>;
  shoppingBagItems?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type QueryKeySpecifier = (
  | "searchCollections"
  | "collectionsWithPhotos"
  | "collection"
  | "collectionWithPhotos"
  | "allPhotosInCollection"
  | "searchFrames"
  | "framesWithAspectRatio"
  | "frame"
  | "images"
  | "image"
  | "locations"
  | "searchLocations"
  | "location"
  | "locationWithName"
  | "groupedPhotosAtLocation"
  | "paginatedPhotosAtLocation"
  | "allPhotosAtLocation"
  | "searchMats"
  | "matsWithAspectRatio"
  | "mat"
  | "photoCountBySubject"
  | "photoCountByTag"
  | "photoCountByCollection"
  | "photoCountByLocation"
  | "photoCountByPhotographer"
  | "printsOfTypeAndAspectRatio"
  | "matsOfTypeAndSize"
  | "finishOptions"
  | "photoAndFinishOptionsForSku"
  | "searchPhotographers"
  | "sortedPhotographers"
  | "photographer"
  | "photographerWithName"
  | "groupedPhotosByPhotographer"
  | "paginatedPhotosByPhotographer"
  | "allPhotosByPhotographer"
  | "photos"
  | "searchPhotos"
  | "paginatedPhotos"
  | "paginatedFeaturedPhotos"
  | "allFeaturedPhotos"
  | "photo"
  | "photoWithSku"
  | "photoEditOptions"
  | "searchPrints"
  | "print"
  | "userSearch"
  | "subjects"
  | "searchSubjects"
  | "subject"
  | "subjectWithName"
  | "groupedPhotosOfSubject"
  | "paginatedPhotosOfSubject"
  | "allPhotosOfSubject"
  | "searchTags"
  | "tag"
  | "tagWithName"
  | "groupedPhotosWithTag"
  | "paginatedPhotosWithTag"
  | "allPhotosWithTag"
  | "favorites"
  | "shoppingBagItems"
  | "users"
  | "user"
  | "userSummaries"
  | "newsletterSubscribers"
  | "getUserPreferences"
  | QueryKeySpecifier
)[];
export type QueryFieldPolicy = {
  searchCollections?: FieldPolicy<any> | FieldReadFunction<any>;
  collectionsWithPhotos?: FieldPolicy<any> | FieldReadFunction<any>;
  collection?: FieldPolicy<any> | FieldReadFunction<any>;
  collectionWithPhotos?: FieldPolicy<any> | FieldReadFunction<any>;
  allPhotosInCollection?: FieldPolicy<any> | FieldReadFunction<any>;
  searchFrames?: FieldPolicy<any> | FieldReadFunction<any>;
  framesWithAspectRatio?: FieldPolicy<any> | FieldReadFunction<any>;
  frame?: FieldPolicy<any> | FieldReadFunction<any>;
  images?: FieldPolicy<any> | FieldReadFunction<any>;
  image?: FieldPolicy<any> | FieldReadFunction<any>;
  locations?: FieldPolicy<any> | FieldReadFunction<any>;
  searchLocations?: FieldPolicy<any> | FieldReadFunction<any>;
  location?: FieldPolicy<any> | FieldReadFunction<any>;
  locationWithName?: FieldPolicy<any> | FieldReadFunction<any>;
  groupedPhotosAtLocation?: FieldPolicy<any> | FieldReadFunction<any>;
  paginatedPhotosAtLocation?: FieldPolicy<any> | FieldReadFunction<any>;
  allPhotosAtLocation?: FieldPolicy<any> | FieldReadFunction<any>;
  searchMats?: FieldPolicy<any> | FieldReadFunction<any>;
  matsWithAspectRatio?: FieldPolicy<any> | FieldReadFunction<any>;
  mat?: FieldPolicy<any> | FieldReadFunction<any>;
  photoCountBySubject?: FieldPolicy<any> | FieldReadFunction<any>;
  photoCountByTag?: FieldPolicy<any> | FieldReadFunction<any>;
  photoCountByCollection?: FieldPolicy<any> | FieldReadFunction<any>;
  photoCountByLocation?: FieldPolicy<any> | FieldReadFunction<any>;
  photoCountByPhotographer?: FieldPolicy<any> | FieldReadFunction<any>;
  printsOfTypeAndAspectRatio?: FieldPolicy<any> | FieldReadFunction<any>;
  matsOfTypeAndSize?: FieldPolicy<any> | FieldReadFunction<any>;
  finishOptions?: FieldPolicy<any> | FieldReadFunction<any>;
  photoAndFinishOptionsForSku?: FieldPolicy<any> | FieldReadFunction<any>;
  searchPhotographers?: FieldPolicy<any> | FieldReadFunction<any>;
  sortedPhotographers?: FieldPolicy<any> | FieldReadFunction<any>;
  photographer?: FieldPolicy<any> | FieldReadFunction<any>;
  photographerWithName?: FieldPolicy<any> | FieldReadFunction<any>;
  groupedPhotosByPhotographer?: FieldPolicy<any> | FieldReadFunction<any>;
  paginatedPhotosByPhotographer?: FieldPolicy<any> | FieldReadFunction<any>;
  allPhotosByPhotographer?: FieldPolicy<any> | FieldReadFunction<any>;
  photos?: FieldPolicy<any> | FieldReadFunction<any>;
  searchPhotos?: FieldPolicy<any> | FieldReadFunction<any>;
  paginatedPhotos?: FieldPolicy<any> | FieldReadFunction<any>;
  paginatedFeaturedPhotos?: FieldPolicy<any> | FieldReadFunction<any>;
  allFeaturedPhotos?: FieldPolicy<any> | FieldReadFunction<any>;
  photo?: FieldPolicy<any> | FieldReadFunction<any>;
  photoWithSku?: FieldPolicy<any> | FieldReadFunction<any>;
  photoEditOptions?: FieldPolicy<any> | FieldReadFunction<any>;
  searchPrints?: FieldPolicy<any> | FieldReadFunction<any>;
  print?: FieldPolicy<any> | FieldReadFunction<any>;
  userSearch?: FieldPolicy<any> | FieldReadFunction<any>;
  subjects?: FieldPolicy<any> | FieldReadFunction<any>;
  searchSubjects?: FieldPolicy<any> | FieldReadFunction<any>;
  subject?: FieldPolicy<any> | FieldReadFunction<any>;
  subjectWithName?: FieldPolicy<any> | FieldReadFunction<any>;
  groupedPhotosOfSubject?: FieldPolicy<any> | FieldReadFunction<any>;
  paginatedPhotosOfSubject?: FieldPolicy<any> | FieldReadFunction<any>;
  allPhotosOfSubject?: FieldPolicy<any> | FieldReadFunction<any>;
  searchTags?: FieldPolicy<any> | FieldReadFunction<any>;
  tag?: FieldPolicy<any> | FieldReadFunction<any>;
  tagWithName?: FieldPolicy<any> | FieldReadFunction<any>;
  groupedPhotosWithTag?: FieldPolicy<any> | FieldReadFunction<any>;
  paginatedPhotosWithTag?: FieldPolicy<any> | FieldReadFunction<any>;
  allPhotosWithTag?: FieldPolicy<any> | FieldReadFunction<any>;
  favorites?: FieldPolicy<any> | FieldReadFunction<any>;
  shoppingBagItems?: FieldPolicy<any> | FieldReadFunction<any>;
  users?: FieldPolicy<any> | FieldReadFunction<any>;
  user?: FieldPolicy<any> | FieldReadFunction<any>;
  userSummaries?: FieldPolicy<any> | FieldReadFunction<any>;
  newsletterSubscribers?: FieldPolicy<any> | FieldReadFunction<any>;
  getUserPreferences?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type MutationKeySpecifier = (
  | "addCollection"
  | "updateCollection"
  | "deleteCollection"
  | "addFrame"
  | "updateFrame"
  | "deleteFrame"
  | "addImage"
  | "updateImage"
  | "deleteImage"
  | "addImageToPhoto"
  | "addLocation"
  | "updateLocation"
  | "deleteLocation"
  | "addMat"
  | "updateMat"
  | "deleteMat"
  | "addPhotoToCollection"
  | "removePhotoFromCollection"
  | "addPhotographer"
  | "updatePhotographer"
  | "deletePhotographer"
  | "addPhoto"
  | "updatePhoto"
  | "deletePhoto"
  | "addPrint"
  | "updatePrint"
  | "deletePrint"
  | "addSubject"
  | "updateSubject"
  | "deleteSubject"
  | "subscribeToNewsletter"
  | "unsubscribeFromNewsletter"
  | "addTag"
  | "updateTag"
  | "deleteTag"
  | "addPhotoToFavorites"
  | "removePhotoFromFavorites"
  | "addPhotoToShoppingBag"
  | "removePhotoFromShoppingBag"
  | "getApiToken"
  | MutationKeySpecifier
)[];
export type MutationFieldPolicy = {
  addCollection?: FieldPolicy<any> | FieldReadFunction<any>;
  updateCollection?: FieldPolicy<any> | FieldReadFunction<any>;
  deleteCollection?: FieldPolicy<any> | FieldReadFunction<any>;
  addFrame?: FieldPolicy<any> | FieldReadFunction<any>;
  updateFrame?: FieldPolicy<any> | FieldReadFunction<any>;
  deleteFrame?: FieldPolicy<any> | FieldReadFunction<any>;
  addImage?: FieldPolicy<any> | FieldReadFunction<any>;
  updateImage?: FieldPolicy<any> | FieldReadFunction<any>;
  deleteImage?: FieldPolicy<any> | FieldReadFunction<any>;
  addImageToPhoto?: FieldPolicy<any> | FieldReadFunction<any>;
  addLocation?: FieldPolicy<any> | FieldReadFunction<any>;
  updateLocation?: FieldPolicy<any> | FieldReadFunction<any>;
  deleteLocation?: FieldPolicy<any> | FieldReadFunction<any>;
  addMat?: FieldPolicy<any> | FieldReadFunction<any>;
  updateMat?: FieldPolicy<any> | FieldReadFunction<any>;
  deleteMat?: FieldPolicy<any> | FieldReadFunction<any>;
  addPhotoToCollection?: FieldPolicy<any> | FieldReadFunction<any>;
  removePhotoFromCollection?: FieldPolicy<any> | FieldReadFunction<any>;
  addPhotographer?: FieldPolicy<any> | FieldReadFunction<any>;
  updatePhotographer?: FieldPolicy<any> | FieldReadFunction<any>;
  deletePhotographer?: FieldPolicy<any> | FieldReadFunction<any>;
  addPhoto?: FieldPolicy<any> | FieldReadFunction<any>;
  updatePhoto?: FieldPolicy<any> | FieldReadFunction<any>;
  deletePhoto?: FieldPolicy<any> | FieldReadFunction<any>;
  addPrint?: FieldPolicy<any> | FieldReadFunction<any>;
  updatePrint?: FieldPolicy<any> | FieldReadFunction<any>;
  deletePrint?: FieldPolicy<any> | FieldReadFunction<any>;
  addSubject?: FieldPolicy<any> | FieldReadFunction<any>;
  updateSubject?: FieldPolicy<any> | FieldReadFunction<any>;
  deleteSubject?: FieldPolicy<any> | FieldReadFunction<any>;
  subscribeToNewsletter?: FieldPolicy<any> | FieldReadFunction<any>;
  unsubscribeFromNewsletter?: FieldPolicy<any> | FieldReadFunction<any>;
  addTag?: FieldPolicy<any> | FieldReadFunction<any>;
  updateTag?: FieldPolicy<any> | FieldReadFunction<any>;
  deleteTag?: FieldPolicy<any> | FieldReadFunction<any>;
  addPhotoToFavorites?: FieldPolicy<any> | FieldReadFunction<any>;
  removePhotoFromFavorites?: FieldPolicy<any> | FieldReadFunction<any>;
  addPhotoToShoppingBag?: FieldPolicy<any> | FieldReadFunction<any>;
  removePhotoFromShoppingBag?: FieldPolicy<any> | FieldReadFunction<any>;
  getApiToken?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type TypedTypePolicies = TypePolicies & {
  Image?: {
    keyFields?:
      | false
      | ImageKeySpecifier
      | (() => undefined | ImageKeySpecifier);
    queryType?: true;
    mutationType?: true;
    subscriptionType?: true;
    fields?: ImageFieldPolicy;
  };
  Location?: {
    keyFields?:
      | false
      | LocationKeySpecifier
      | (() => undefined | LocationKeySpecifier);
    queryType?: true;
    mutationType?: true;
    subscriptionType?: true;
    fields?: LocationFieldPolicy;
  };
  Collection?: {
    keyFields?:
      | false
      | CollectionKeySpecifier
      | (() => undefined | CollectionKeySpecifier);
    queryType?: true;
    mutationType?: true;
    subscriptionType?: true;
    fields?: CollectionFieldPolicy;
  };
  PhotoCollection?: {
    keyFields?:
      | false
      | PhotoCollectionKeySpecifier
      | (() => undefined | PhotoCollectionKeySpecifier);
    queryType?: true;
    mutationType?: true;
    subscriptionType?: true;
    fields?: PhotoCollectionFieldPolicy;
  };
  Photographer?: {
    keyFields?:
      | false
      | PhotographerKeySpecifier
      | (() => undefined | PhotographerKeySpecifier);
    queryType?: true;
    mutationType?: true;
    subscriptionType?: true;
    fields?: PhotographerFieldPolicy;
  };
  Subject?: {
    keyFields?:
      | false
      | SubjectKeySpecifier
      | (() => undefined | SubjectKeySpecifier);
    queryType?: true;
    mutationType?: true;
    subscriptionType?: true;
    fields?: SubjectFieldPolicy;
  };
  PhotoSubject?: {
    keyFields?:
      | false
      | PhotoSubjectKeySpecifier
      | (() => undefined | PhotoSubjectKeySpecifier);
    queryType?: true;
    mutationType?: true;
    subscriptionType?: true;
    fields?: PhotoSubjectFieldPolicy;
  };
  Tag?: {
    keyFields?: false | TagKeySpecifier | (() => undefined | TagKeySpecifier);
    queryType?: true;
    mutationType?: true;
    subscriptionType?: true;
    fields?: TagFieldPolicy;
  };
  PhotoTag?: {
    keyFields?:
      | false
      | PhotoTagKeySpecifier
      | (() => undefined | PhotoTagKeySpecifier);
    queryType?: true;
    mutationType?: true;
    subscriptionType?: true;
    fields?: PhotoTagFieldPolicy;
  };
  UserShoppingBagItem?: {
    keyFields?:
      | false
      | UserShoppingBagItemKeySpecifier
      | (() => undefined | UserShoppingBagItemKeySpecifier);
    queryType?: true;
    mutationType?: true;
    subscriptionType?: true;
    fields?: UserShoppingBagItemFieldPolicy;
  };
  Photo?: {
    keyFields?:
      | false
      | PhotoKeySpecifier
      | (() => undefined | PhotoKeySpecifier);
    queryType?: true;
    mutationType?: true;
    subscriptionType?: true;
    fields?: PhotoFieldPolicy;
  };
  UserFavorite?: {
    keyFields?:
      | false
      | UserFavoriteKeySpecifier
      | (() => undefined | UserFavoriteKeySpecifier);
    queryType?: true;
    mutationType?: true;
    subscriptionType?: true;
    fields?: UserFavoriteFieldPolicy;
  };
  User?: {
    keyFields?: false | UserKeySpecifier | (() => undefined | UserKeySpecifier);
    queryType?: true;
    mutationType?: true;
    subscriptionType?: true;
    fields?: UserFieldPolicy;
  };
  SuccessMessageResponse?: {
    keyFields?:
      | false
      | SuccessMessageResponseKeySpecifier
      | (() => undefined | SuccessMessageResponseKeySpecifier);
    queryType?: true;
    mutationType?: true;
    subscriptionType?: true;
    fields?: SuccessMessageResponseFieldPolicy;
  };
  SearchCollectionsResponse?: {
    keyFields?:
      | false
      | SearchCollectionsResponseKeySpecifier
      | (() => undefined | SearchCollectionsResponseKeySpecifier);
    queryType?: true;
    mutationType?: true;
    subscriptionType?: true;
    fields?: SearchCollectionsResponseFieldPolicy;
  };
  AddCollectionResponse?: {
    keyFields?:
      | false
      | AddCollectionResponseKeySpecifier
      | (() => undefined | AddCollectionResponseKeySpecifier);
    queryType?: true;
    mutationType?: true;
    subscriptionType?: true;
    fields?: AddCollectionResponseFieldPolicy;
  };
  UpdateCollectionResponse?: {
    keyFields?:
      | false
      | UpdateCollectionResponseKeySpecifier
      | (() => undefined | UpdateCollectionResponseKeySpecifier);
    queryType?: true;
    mutationType?: true;
    subscriptionType?: true;
    fields?: UpdateCollectionResponseFieldPolicy;
  };
  AllPhotosInCollectionResponse?: {
    keyFields?:
      | false
      | AllPhotosInCollectionResponseKeySpecifier
      | (() => undefined | AllPhotosInCollectionResponseKeySpecifier);
    queryType?: true;
    mutationType?: true;
    subscriptionType?: true;
    fields?: AllPhotosInCollectionResponseFieldPolicy;
  };
  Frame?: {
    keyFields?:
      | false
      | FrameKeySpecifier
      | (() => undefined | FrameKeySpecifier);
    queryType?: true;
    mutationType?: true;
    subscriptionType?: true;
    fields?: FrameFieldPolicy;
  };
  SearchFramesResponse?: {
    keyFields?:
      | false
      | SearchFramesResponseKeySpecifier
      | (() => undefined | SearchFramesResponseKeySpecifier);
    queryType?: true;
    mutationType?: true;
    subscriptionType?: true;
    fields?: SearchFramesResponseFieldPolicy;
  };
  AddFrameResponse?: {
    keyFields?:
      | false
      | AddFrameResponseKeySpecifier
      | (() => undefined | AddFrameResponseKeySpecifier);
    queryType?: true;
    mutationType?: true;
    subscriptionType?: true;
    fields?: AddFrameResponseFieldPolicy;
  };
  UpdateFrameResponse?: {
    keyFields?:
      | false
      | UpdateFrameResponseKeySpecifier
      | (() => undefined | UpdateFrameResponseKeySpecifier);
    queryType?: true;
    mutationType?: true;
    subscriptionType?: true;
    fields?: UpdateFrameResponseFieldPolicy;
  };
  AddImageResponse?: {
    keyFields?:
      | false
      | AddImageResponseKeySpecifier
      | (() => undefined | AddImageResponseKeySpecifier);
    queryType?: true;
    mutationType?: true;
    subscriptionType?: true;
    fields?: AddImageResponseFieldPolicy;
  };
  UpdateImageResponse?: {
    keyFields?:
      | false
      | UpdateImageResponseKeySpecifier
      | (() => undefined | UpdateImageResponseKeySpecifier);
    queryType?: true;
    mutationType?: true;
    subscriptionType?: true;
    fields?: UpdateImageResponseFieldPolicy;
  };
  PaginatedResponse?: {
    keyFields?:
      | false
      | PaginatedResponseKeySpecifier
      | (() => undefined | PaginatedResponseKeySpecifier);
    queryType?: true;
    mutationType?: true;
    subscriptionType?: true;
    fields?: PaginatedResponseFieldPolicy;
  };
  SearchLocationsResponse?: {
    keyFields?:
      | false
      | SearchLocationsResponseKeySpecifier
      | (() => undefined | SearchLocationsResponseKeySpecifier);
    queryType?: true;
    mutationType?: true;
    subscriptionType?: true;
    fields?: SearchLocationsResponseFieldPolicy;
  };
  LocationsResponse?: {
    keyFields?:
      | false
      | LocationsResponseKeySpecifier
      | (() => undefined | LocationsResponseKeySpecifier);
    queryType?: true;
    mutationType?: true;
    subscriptionType?: true;
    fields?: LocationsResponseFieldPolicy;
  };
  AllPhotosAtLocationResponse?: {
    keyFields?:
      | false
      | AllPhotosAtLocationResponseKeySpecifier
      | (() => undefined | AllPhotosAtLocationResponseKeySpecifier);
    queryType?: true;
    mutationType?: true;
    subscriptionType?: true;
    fields?: AllPhotosAtLocationResponseFieldPolicy;
  };
  GroupedPhotosAtLocationResponse?: {
    keyFields?:
      | false
      | GroupedPhotosAtLocationResponseKeySpecifier
      | (() => undefined | GroupedPhotosAtLocationResponseKeySpecifier);
    queryType?: true;
    mutationType?: true;
    subscriptionType?: true;
    fields?: GroupedPhotosAtLocationResponseFieldPolicy;
  };
  PaginatedPhotosAtLocationResponse?: {
    keyFields?:
      | false
      | PaginatedPhotosAtLocationResponseKeySpecifier
      | (() => undefined | PaginatedPhotosAtLocationResponseKeySpecifier);
    queryType?: true;
    mutationType?: true;
    subscriptionType?: true;
    fields?: PaginatedPhotosAtLocationResponseFieldPolicy;
  };
  AddLocationResponse?: {
    keyFields?:
      | false
      | AddLocationResponseKeySpecifier
      | (() => undefined | AddLocationResponseKeySpecifier);
    queryType?: true;
    mutationType?: true;
    subscriptionType?: true;
    fields?: AddLocationResponseFieldPolicy;
  };
  UpdateLocationResponse?: {
    keyFields?:
      | false
      | UpdateLocationResponseKeySpecifier
      | (() => undefined | UpdateLocationResponseKeySpecifier);
    queryType?: true;
    mutationType?: true;
    subscriptionType?: true;
    fields?: UpdateLocationResponseFieldPolicy;
  };
  Mat?: {
    keyFields?: false | MatKeySpecifier | (() => undefined | MatKeySpecifier);
    queryType?: true;
    mutationType?: true;
    subscriptionType?: true;
    fields?: MatFieldPolicy;
  };
  SearchMatsResponse?: {
    keyFields?:
      | false
      | SearchMatsResponseKeySpecifier
      | (() => undefined | SearchMatsResponseKeySpecifier);
    queryType?: true;
    mutationType?: true;
    subscriptionType?: true;
    fields?: SearchMatsResponseFieldPolicy;
  };
  AddMatResponse?: {
    keyFields?:
      | false
      | AddMatResponseKeySpecifier
      | (() => undefined | AddMatResponseKeySpecifier);
    queryType?: true;
    mutationType?: true;
    subscriptionType?: true;
    fields?: AddMatResponseFieldPolicy;
  };
  UpdateMatResponse?: {
    keyFields?:
      | false
      | UpdateMatResponseKeySpecifier
      | (() => undefined | UpdateMatResponseKeySpecifier);
    queryType?: true;
    mutationType?: true;
    subscriptionType?: true;
    fields?: UpdateMatResponseFieldPolicy;
  };
  ItemCountList?: {
    keyFields?:
      | false
      | ItemCountListKeySpecifier
      | (() => undefined | ItemCountListKeySpecifier);
    queryType?: true;
    mutationType?: true;
    subscriptionType?: true;
    fields?: ItemCountListFieldPolicy;
  };
  ItemCount?: {
    keyFields?:
      | false
      | ItemCountKeySpecifier
      | (() => undefined | ItemCountKeySpecifier);
    queryType?: true;
    mutationType?: true;
    subscriptionType?: true;
    fields?: ItemCountFieldPolicy;
  };
  Print?: {
    keyFields?:
      | false
      | PrintKeySpecifier
      | (() => undefined | PrintKeySpecifier);
    queryType?: true;
    mutationType?: true;
    subscriptionType?: true;
    fields?: PrintFieldPolicy;
  };
  PrintsResponse?: {
    keyFields?:
      | false
      | PrintsResponseKeySpecifier
      | (() => undefined | PrintsResponseKeySpecifier);
    queryType?: true;
    mutationType?: true;
    subscriptionType?: true;
    fields?: PrintsResponseFieldPolicy;
  };
  MatsResponse?: {
    keyFields?:
      | false
      | MatsResponseKeySpecifier
      | (() => undefined | MatsResponseKeySpecifier);
    queryType?: true;
    mutationType?: true;
    subscriptionType?: true;
    fields?: MatsResponseFieldPolicy;
  };
  FinishOptions?: {
    keyFields?:
      | false
      | FinishOptionsKeySpecifier
      | (() => undefined | FinishOptionsKeySpecifier);
    queryType?: true;
    mutationType?: true;
    subscriptionType?: true;
    fields?: FinishOptionsFieldPolicy;
  };
  PhotoWithFinishOptionsResponse?: {
    keyFields?:
      | false
      | PhotoWithFinishOptionsResponseKeySpecifier
      | (() => undefined | PhotoWithFinishOptionsResponseKeySpecifier);
    queryType?: true;
    mutationType?: true;
    subscriptionType?: true;
    fields?: PhotoWithFinishOptionsResponseFieldPolicy;
  };
  SearchPhotographersResponse?: {
    keyFields?:
      | false
      | SearchPhotographersResponseKeySpecifier
      | (() => undefined | SearchPhotographersResponseKeySpecifier);
    queryType?: true;
    mutationType?: true;
    subscriptionType?: true;
    fields?: SearchPhotographersResponseFieldPolicy;
  };
  PhotographersResponse?: {
    keyFields?:
      | false
      | PhotographersResponseKeySpecifier
      | (() => undefined | PhotographersResponseKeySpecifier);
    queryType?: true;
    mutationType?: true;
    subscriptionType?: true;
    fields?: PhotographersResponseFieldPolicy;
  };
  AllPhotosByPhotographerResponse?: {
    keyFields?:
      | false
      | AllPhotosByPhotographerResponseKeySpecifier
      | (() => undefined | AllPhotosByPhotographerResponseKeySpecifier);
    queryType?: true;
    mutationType?: true;
    subscriptionType?: true;
    fields?: AllPhotosByPhotographerResponseFieldPolicy;
  };
  GroupedPhotosByPhotographerResponse?: {
    keyFields?:
      | false
      | GroupedPhotosByPhotographerResponseKeySpecifier
      | (() => undefined | GroupedPhotosByPhotographerResponseKeySpecifier);
    queryType?: true;
    mutationType?: true;
    subscriptionType?: true;
    fields?: GroupedPhotosByPhotographerResponseFieldPolicy;
  };
  PaginatedPhotosByPhotographerResponse?: {
    keyFields?:
      | false
      | PaginatedPhotosByPhotographerResponseKeySpecifier
      | (() => undefined | PaginatedPhotosByPhotographerResponseKeySpecifier);
    queryType?: true;
    mutationType?: true;
    subscriptionType?: true;
    fields?: PaginatedPhotosByPhotographerResponseFieldPolicy;
  };
  AddPhotographerResponse?: {
    keyFields?:
      | false
      | AddPhotographerResponseKeySpecifier
      | (() => undefined | AddPhotographerResponseKeySpecifier);
    queryType?: true;
    mutationType?: true;
    subscriptionType?: true;
    fields?: AddPhotographerResponseFieldPolicy;
  };
  UpdatePhotographerResponse?: {
    keyFields?:
      | false
      | UpdatePhotographerResponseKeySpecifier
      | (() => undefined | UpdatePhotographerResponseKeySpecifier);
    queryType?: true;
    mutationType?: true;
    subscriptionType?: true;
    fields?: UpdatePhotographerResponseFieldPolicy;
  };
  SelectionOption?: {
    keyFields?:
      | false
      | SelectionOptionKeySpecifier
      | (() => undefined | SelectionOptionKeySpecifier);
    queryType?: true;
    mutationType?: true;
    subscriptionType?: true;
    fields?: SelectionOptionFieldPolicy;
  };
  PhotosResponse?: {
    keyFields?:
      | false
      | PhotosResponseKeySpecifier
      | (() => undefined | PhotosResponseKeySpecifier);
    queryType?: true;
    mutationType?: true;
    subscriptionType?: true;
    fields?: PhotosResponseFieldPolicy;
  };
  PhotographerSelectionOption?: {
    keyFields?:
      | false
      | PhotographerSelectionOptionKeySpecifier
      | (() => undefined | PhotographerSelectionOptionKeySpecifier);
    queryType?: true;
    mutationType?: true;
    subscriptionType?: true;
    fields?: PhotographerSelectionOptionFieldPolicy;
  };
  LocationSelectionOption?: {
    keyFields?:
      | false
      | LocationSelectionOptionKeySpecifier
      | (() => undefined | LocationSelectionOptionKeySpecifier);
    queryType?: true;
    mutationType?: true;
    subscriptionType?: true;
    fields?: LocationSelectionOptionFieldPolicy;
  };
  SubjectSelectionOption?: {
    keyFields?:
      | false
      | SubjectSelectionOptionKeySpecifier
      | (() => undefined | SubjectSelectionOptionKeySpecifier);
    queryType?: true;
    mutationType?: true;
    subscriptionType?: true;
    fields?: SubjectSelectionOptionFieldPolicy;
  };
  TagSelectionOption?: {
    keyFields?:
      | false
      | TagSelectionOptionKeySpecifier
      | (() => undefined | TagSelectionOptionKeySpecifier);
    queryType?: true;
    mutationType?: true;
    subscriptionType?: true;
    fields?: TagSelectionOptionFieldPolicy;
  };
  CollectionSelectionOption?: {
    keyFields?:
      | false
      | CollectionSelectionOptionKeySpecifier
      | (() => undefined | CollectionSelectionOptionKeySpecifier);
    queryType?: true;
    mutationType?: true;
    subscriptionType?: true;
    fields?: CollectionSelectionOptionFieldPolicy;
  };
  PhotoEditSelectionOptions?: {
    keyFields?:
      | false
      | PhotoEditSelectionOptionsKeySpecifier
      | (() => undefined | PhotoEditSelectionOptionsKeySpecifier);
    queryType?: true;
    mutationType?: true;
    subscriptionType?: true;
    fields?: PhotoEditSelectionOptionsFieldPolicy;
  };
  SearchPhotosResponse?: {
    keyFields?:
      | false
      | SearchPhotosResponseKeySpecifier
      | (() => undefined | SearchPhotosResponseKeySpecifier);
    queryType?: true;
    mutationType?: true;
    subscriptionType?: true;
    fields?: SearchPhotosResponseFieldPolicy;
  };
  PaginatedAllPhotosResponse?: {
    keyFields?:
      | false
      | PaginatedAllPhotosResponseKeySpecifier
      | (() => undefined | PaginatedAllPhotosResponseKeySpecifier);
    queryType?: true;
    mutationType?: true;
    subscriptionType?: true;
    fields?: PaginatedAllPhotosResponseFieldPolicy;
  };
  PaginatedFeaturedPhotosResponse?: {
    keyFields?:
      | false
      | PaginatedFeaturedPhotosResponseKeySpecifier
      | (() => undefined | PaginatedFeaturedPhotosResponseKeySpecifier);
    queryType?: true;
    mutationType?: true;
    subscriptionType?: true;
    fields?: PaginatedFeaturedPhotosResponseFieldPolicy;
  };
  AddPhotoResponse?: {
    keyFields?:
      | false
      | AddPhotoResponseKeySpecifier
      | (() => undefined | AddPhotoResponseKeySpecifier);
    queryType?: true;
    mutationType?: true;
    subscriptionType?: true;
    fields?: AddPhotoResponseFieldPolicy;
  };
  UpdatePhotoResponse?: {
    keyFields?:
      | false
      | UpdatePhotoResponseKeySpecifier
      | (() => undefined | UpdatePhotoResponseKeySpecifier);
    queryType?: true;
    mutationType?: true;
    subscriptionType?: true;
    fields?: UpdatePhotoResponseFieldPolicy;
  };
  AllFeaturedPhotosResponse?: {
    keyFields?:
      | false
      | AllFeaturedPhotosResponseKeySpecifier
      | (() => undefined | AllFeaturedPhotosResponseKeySpecifier);
    queryType?: true;
    mutationType?: true;
    subscriptionType?: true;
    fields?: AllFeaturedPhotosResponseFieldPolicy;
  };
  SearchPrintsResponse?: {
    keyFields?:
      | false
      | SearchPrintsResponseKeySpecifier
      | (() => undefined | SearchPrintsResponseKeySpecifier);
    queryType?: true;
    mutationType?: true;
    subscriptionType?: true;
    fields?: SearchPrintsResponseFieldPolicy;
  };
  AddPrintResponse?: {
    keyFields?:
      | false
      | AddPrintResponseKeySpecifier
      | (() => undefined | AddPrintResponseKeySpecifier);
    queryType?: true;
    mutationType?: true;
    subscriptionType?: true;
    fields?: AddPrintResponseFieldPolicy;
  };
  UpdatePrintResponse?: {
    keyFields?:
      | false
      | UpdatePrintResponseKeySpecifier
      | (() => undefined | UpdatePrintResponseKeySpecifier);
    queryType?: true;
    mutationType?: true;
    subscriptionType?: true;
    fields?: UpdatePrintResponseFieldPolicy;
  };
  SubjectsResponse?: {
    keyFields?:
      | false
      | SubjectsResponseKeySpecifier
      | (() => undefined | SubjectsResponseKeySpecifier);
    queryType?: true;
    mutationType?: true;
    subscriptionType?: true;
    fields?: SubjectsResponseFieldPolicy;
  };
  SearchSubjectsResponse?: {
    keyFields?:
      | false
      | SearchSubjectsResponseKeySpecifier
      | (() => undefined | SearchSubjectsResponseKeySpecifier);
    queryType?: true;
    mutationType?: true;
    subscriptionType?: true;
    fields?: SearchSubjectsResponseFieldPolicy;
  };
  AllPhotosOfSubjectResponse?: {
    keyFields?:
      | false
      | AllPhotosOfSubjectResponseKeySpecifier
      | (() => undefined | AllPhotosOfSubjectResponseKeySpecifier);
    queryType?: true;
    mutationType?: true;
    subscriptionType?: true;
    fields?: AllPhotosOfSubjectResponseFieldPolicy;
  };
  GroupedPhotosOfSubjectResponse?: {
    keyFields?:
      | false
      | GroupedPhotosOfSubjectResponseKeySpecifier
      | (() => undefined | GroupedPhotosOfSubjectResponseKeySpecifier);
    queryType?: true;
    mutationType?: true;
    subscriptionType?: true;
    fields?: GroupedPhotosOfSubjectResponseFieldPolicy;
  };
  PaginatedPhotosOfSubjectResponse?: {
    keyFields?:
      | false
      | PaginatedPhotosOfSubjectResponseKeySpecifier
      | (() => undefined | PaginatedPhotosOfSubjectResponseKeySpecifier);
    queryType?: true;
    mutationType?: true;
    subscriptionType?: true;
    fields?: PaginatedPhotosOfSubjectResponseFieldPolicy;
  };
  AddSubjectResponse?: {
    keyFields?:
      | false
      | AddSubjectResponseKeySpecifier
      | (() => undefined | AddSubjectResponseKeySpecifier);
    queryType?: true;
    mutationType?: true;
    subscriptionType?: true;
    fields?: AddSubjectResponseFieldPolicy;
  };
  UpdateSubjectResponse?: {
    keyFields?:
      | false
      | UpdateSubjectResponseKeySpecifier
      | (() => undefined | UpdateSubjectResponseKeySpecifier);
    queryType?: true;
    mutationType?: true;
    subscriptionType?: true;
    fields?: UpdateSubjectResponseFieldPolicy;
  };
  SearchTagsResponse?: {
    keyFields?:
      | false
      | SearchTagsResponseKeySpecifier
      | (() => undefined | SearchTagsResponseKeySpecifier);
    queryType?: true;
    mutationType?: true;
    subscriptionType?: true;
    fields?: SearchTagsResponseFieldPolicy;
  };
  AllPhotosWithTagResponse?: {
    keyFields?:
      | false
      | AllPhotosWithTagResponseKeySpecifier
      | (() => undefined | AllPhotosWithTagResponseKeySpecifier);
    queryType?: true;
    mutationType?: true;
    subscriptionType?: true;
    fields?: AllPhotosWithTagResponseFieldPolicy;
  };
  GroupedPhotosWithTagResponse?: {
    keyFields?:
      | false
      | GroupedPhotosWithTagResponseKeySpecifier
      | (() => undefined | GroupedPhotosWithTagResponseKeySpecifier);
    queryType?: true;
    mutationType?: true;
    subscriptionType?: true;
    fields?: GroupedPhotosWithTagResponseFieldPolicy;
  };
  PaginatedPhotosWithTagResponse?: {
    keyFields?:
      | false
      | PaginatedPhotosWithTagResponseKeySpecifier
      | (() => undefined | PaginatedPhotosWithTagResponseKeySpecifier);
    queryType?: true;
    mutationType?: true;
    subscriptionType?: true;
    fields?: PaginatedPhotosWithTagResponseFieldPolicy;
  };
  AddTagResponse?: {
    keyFields?:
      | false
      | AddTagResponseKeySpecifier
      | (() => undefined | AddTagResponseKeySpecifier);
    queryType?: true;
    mutationType?: true;
    subscriptionType?: true;
    fields?: AddTagResponseFieldPolicy;
  };
  UpdateTagResponse?: {
    keyFields?:
      | false
      | UpdateTagResponseKeySpecifier
      | (() => undefined | UpdateTagResponseKeySpecifier);
    queryType?: true;
    mutationType?: true;
    subscriptionType?: true;
    fields?: UpdateTagResponseFieldPolicy;
  };
  FavoritesResponse?: {
    keyFields?:
      | false
      | FavoritesResponseKeySpecifier
      | (() => undefined | FavoritesResponseKeySpecifier);
    queryType?: true;
    mutationType?: true;
    subscriptionType?: true;
    fields?: FavoritesResponseFieldPolicy;
  };
  AddPhotoToFavoritesResponse?: {
    keyFields?:
      | false
      | AddPhotoToFavoritesResponseKeySpecifier
      | (() => undefined | AddPhotoToFavoritesResponseKeySpecifier);
    queryType?: true;
    mutationType?: true;
    subscriptionType?: true;
    fields?: AddPhotoToFavoritesResponseFieldPolicy;
  };
  RemovePhotoFromFavoritesResponse?: {
    keyFields?:
      | false
      | RemovePhotoFromFavoritesResponseKeySpecifier
      | (() => undefined | RemovePhotoFromFavoritesResponseKeySpecifier);
    queryType?: true;
    mutationType?: true;
    subscriptionType?: true;
    fields?: RemovePhotoFromFavoritesResponseFieldPolicy;
  };
  ShoppingBagItemsResponse?: {
    keyFields?:
      | false
      | ShoppingBagItemsResponseKeySpecifier
      | (() => undefined | ShoppingBagItemsResponseKeySpecifier);
    queryType?: true;
    mutationType?: true;
    subscriptionType?: true;
    fields?: ShoppingBagItemsResponseFieldPolicy;
  };
  AddPhotoToShoppingBagResponse?: {
    keyFields?:
      | false
      | AddPhotoToShoppingBagResponseKeySpecifier
      | (() => undefined | AddPhotoToShoppingBagResponseKeySpecifier);
    queryType?: true;
    mutationType?: true;
    subscriptionType?: true;
    fields?: AddPhotoToShoppingBagResponseFieldPolicy;
  };
  RemovePhotoFromShoppingBagResponse?: {
    keyFields?:
      | false
      | RemovePhotoFromShoppingBagResponseKeySpecifier
      | (() => undefined | RemovePhotoFromShoppingBagResponseKeySpecifier);
    queryType?: true;
    mutationType?: true;
    subscriptionType?: true;
    fields?: RemovePhotoFromShoppingBagResponseFieldPolicy;
  };
  UserPreferencesResponse?: {
    keyFields?:
      | false
      | UserPreferencesResponseKeySpecifier
      | (() => undefined | UserPreferencesResponseKeySpecifier);
    queryType?: true;
    mutationType?: true;
    subscriptionType?: true;
    fields?: UserPreferencesResponseFieldPolicy;
  };
  Query?: {
    keyFields?:
      | false
      | QueryKeySpecifier
      | (() => undefined | QueryKeySpecifier);
    queryType?: true;
    mutationType?: true;
    subscriptionType?: true;
    fields?: QueryFieldPolicy;
  };
  Mutation?: {
    keyFields?:
      | false
      | MutationKeySpecifier
      | (() => undefined | MutationKeySpecifier);
    queryType?: true;
    mutationType?: true;
    subscriptionType?: true;
    fields?: MutationFieldPolicy;
  };
};
