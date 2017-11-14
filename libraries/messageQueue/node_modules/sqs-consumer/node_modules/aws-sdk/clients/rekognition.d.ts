import {Request} from '../lib/request';
import {Response} from '../lib/response';
import {AWSError} from '../lib/error';
import {Service} from '../lib/service';
import {ServiceConfigurationOptions} from '../lib/service';
import {ConfigBase as Config} from '../lib/config';
interface Blob {}
declare class Rekognition extends Service {
  /**
   * Constructs a service object. This object has one method for each API operation.
   */
  constructor(options?: Rekognition.Types.ClientConfiguration)
  config: Config & Rekognition.Types.ClientConfiguration;
  /**
   * Compares a face in the source input image with each face detected in the target input image.    If the source image contains multiple faces, the service detects the largest face and compares it with each face detected in the target image.   In response, the operation returns an array of face matches ordered by similarity score in descending order. For each face match, the response provides a bounding box of the face, facial landmarks, pose details (pitch, role, and yaw), quality (brightness and sharpness), and confidence value (indicating the level of confidence that the bounding box contains a face). The response also provides a similarity score, which indicates how closely the faces match.   By default, only faces with a similarity score of greater than or equal to 80% are returned in the response. You can change this value by specifying the SimilarityThreshold parameter.   CompareFaces also returns an array of faces that don't match the source image. For each face, it returns a bounding box, confidence value, landmarks, pose details, and quality. The response also returns information about the face in the source image, including the bounding box of the face and confidence value. If the image doesn't contain Exif metadata, CompareFaces returns orientation information for the source and target images. Use these values to display the images with the correct image orientation.   This is a stateless API operation. That is, data returned by this operation doesn't persist.  For an example, see get-started-exercise-compare-faces. This operation requires permissions to perform the rekognition:CompareFaces action.
   */
  compareFaces(params: Rekognition.Types.CompareFacesRequest, callback?: (err: AWSError, data: Rekognition.Types.CompareFacesResponse) => void): Request<Rekognition.Types.CompareFacesResponse, AWSError>;
  /**
   * Compares a face in the source input image with each face detected in the target input image.    If the source image contains multiple faces, the service detects the largest face and compares it with each face detected in the target image.   In response, the operation returns an array of face matches ordered by similarity score in descending order. For each face match, the response provides a bounding box of the face, facial landmarks, pose details (pitch, role, and yaw), quality (brightness and sharpness), and confidence value (indicating the level of confidence that the bounding box contains a face). The response also provides a similarity score, which indicates how closely the faces match.   By default, only faces with a similarity score of greater than or equal to 80% are returned in the response. You can change this value by specifying the SimilarityThreshold parameter.   CompareFaces also returns an array of faces that don't match the source image. For each face, it returns a bounding box, confidence value, landmarks, pose details, and quality. The response also returns information about the face in the source image, including the bounding box of the face and confidence value. If the image doesn't contain Exif metadata, CompareFaces returns orientation information for the source and target images. Use these values to display the images with the correct image orientation.   This is a stateless API operation. That is, data returned by this operation doesn't persist.  For an example, see get-started-exercise-compare-faces. This operation requires permissions to perform the rekognition:CompareFaces action.
   */
  compareFaces(callback?: (err: AWSError, data: Rekognition.Types.CompareFacesResponse) => void): Request<Rekognition.Types.CompareFacesResponse, AWSError>;
  /**
   * Creates a collection in an AWS Region. You can add faces to the collection using the operation.  For example, you might create collections, one for each of your application users. A user can then index faces using the IndexFaces operation and persist results in a specific collection. Then, a user can search the collection for faces in the user-specific container.   Collection names are case-sensitive.  For an example, see example1.  This operation requires permissions to perform the rekognition:CreateCollection action.
   */
  createCollection(params: Rekognition.Types.CreateCollectionRequest, callback?: (err: AWSError, data: Rekognition.Types.CreateCollectionResponse) => void): Request<Rekognition.Types.CreateCollectionResponse, AWSError>;
  /**
   * Creates a collection in an AWS Region. You can add faces to the collection using the operation.  For example, you might create collections, one for each of your application users. A user can then index faces using the IndexFaces operation and persist results in a specific collection. Then, a user can search the collection for faces in the user-specific container.   Collection names are case-sensitive.  For an example, see example1.  This operation requires permissions to perform the rekognition:CreateCollection action.
   */
  createCollection(callback?: (err: AWSError, data: Rekognition.Types.CreateCollectionResponse) => void): Request<Rekognition.Types.CreateCollectionResponse, AWSError>;
  /**
   * Deletes the specified collection. Note that this operation removes all faces in the collection. For an example, see example1. This operation requires permissions to perform the rekognition:DeleteCollection action.
   */
  deleteCollection(params: Rekognition.Types.DeleteCollectionRequest, callback?: (err: AWSError, data: Rekognition.Types.DeleteCollectionResponse) => void): Request<Rekognition.Types.DeleteCollectionResponse, AWSError>;
  /**
   * Deletes the specified collection. Note that this operation removes all faces in the collection. For an example, see example1. This operation requires permissions to perform the rekognition:DeleteCollection action.
   */
  deleteCollection(callback?: (err: AWSError, data: Rekognition.Types.DeleteCollectionResponse) => void): Request<Rekognition.Types.DeleteCollectionResponse, AWSError>;
  /**
   * Deletes faces from a collection. You specify a collection ID and an array of face IDs to remove from the collection. This operation requires permissions to perform the rekognition:DeleteFaces action.
   */
  deleteFaces(params: Rekognition.Types.DeleteFacesRequest, callback?: (err: AWSError, data: Rekognition.Types.DeleteFacesResponse) => void): Request<Rekognition.Types.DeleteFacesResponse, AWSError>;
  /**
   * Deletes faces from a collection. You specify a collection ID and an array of face IDs to remove from the collection. This operation requires permissions to perform the rekognition:DeleteFaces action.
   */
  deleteFaces(callback?: (err: AWSError, data: Rekognition.Types.DeleteFacesResponse) => void): Request<Rekognition.Types.DeleteFacesResponse, AWSError>;
  /**
   * Detects faces within an image (JPEG or PNG) that is provided as input.  For each face detected, the operation returns face details including a bounding box of the face, a confidence value (that the bounding box contains a face), and a fixed set of attributes such as facial landmarks (for example, coordinates of eye and mouth), gender, presence of beard, sunglasses, etc.  The face-detection algorithm is most effective on frontal faces. For non-frontal or obscured faces, the algorithm may not detect the faces or might detect faces with lower confidence.   This is a stateless API operation. That is, the operation does not persist any data.  For an example, see get-started-exercise-detect-faces. This operation requires permissions to perform the rekognition:DetectFaces action. 
   */
  detectFaces(params: Rekognition.Types.DetectFacesRequest, callback?: (err: AWSError, data: Rekognition.Types.DetectFacesResponse) => void): Request<Rekognition.Types.DetectFacesResponse, AWSError>;
  /**
   * Detects faces within an image (JPEG or PNG) that is provided as input.  For each face detected, the operation returns face details including a bounding box of the face, a confidence value (that the bounding box contains a face), and a fixed set of attributes such as facial landmarks (for example, coordinates of eye and mouth), gender, presence of beard, sunglasses, etc.  The face-detection algorithm is most effective on frontal faces. For non-frontal or obscured faces, the algorithm may not detect the faces or might detect faces with lower confidence.   This is a stateless API operation. That is, the operation does not persist any data.  For an example, see get-started-exercise-detect-faces. This operation requires permissions to perform the rekognition:DetectFaces action. 
   */
  detectFaces(callback?: (err: AWSError, data: Rekognition.Types.DetectFacesResponse) => void): Request<Rekognition.Types.DetectFacesResponse, AWSError>;
  /**
   * Detects instances of real-world labels within an image (JPEG or PNG) provided as input. This includes objects like flower, tree, and table; events like wedding, graduation, and birthday party; and concepts like landscape, evening, and nature. For an example, see get-started-exercise-detect-labels.  For each object, scene, and concept the API returns one or more labels. Each label provides the object name, and the level of confidence that the image contains the object. For example, suppose the input image has a lighthouse, the sea, and a rock. The response will include all three labels, one for each object.   {Name: lighthouse, Confidence: 98.4629}   {Name: rock,Confidence: 79.2097}    {Name: sea,Confidence: 75.061}   In the preceding example, the operation returns one label for each of the three objects. The operation can also return multiple labels for the same object in the image. For example, if the input image shows a flower (for example, a tulip), the operation might return the following three labels.   {Name: flower,Confidence: 99.0562}   {Name: plant,Confidence: 99.0562}   {Name: tulip,Confidence: 99.0562}  In this example, the detection algorithm more precisely identifies the flower as a tulip. You can provide the input image as an S3 object or as base64-encoded bytes. In response, the API returns an array of labels. In addition, the response also includes the orientation correction. Optionally, you can specify MinConfidence to control the confidence threshold for the labels returned. The default is 50%. You can also add the MaxLabels parameter to limit the number of labels returned.   If the object detected is a person, the operation doesn't provide the same facial details that the DetectFaces operation provides.  This is a stateless API operation. That is, the operation does not persist any data. This operation requires permissions to perform the rekognition:DetectLabels action. 
   */
  detectLabels(params: Rekognition.Types.DetectLabelsRequest, callback?: (err: AWSError, data: Rekognition.Types.DetectLabelsResponse) => void): Request<Rekognition.Types.DetectLabelsResponse, AWSError>;
  /**
   * Detects instances of real-world labels within an image (JPEG or PNG) provided as input. This includes objects like flower, tree, and table; events like wedding, graduation, and birthday party; and concepts like landscape, evening, and nature. For an example, see get-started-exercise-detect-labels.  For each object, scene, and concept the API returns one or more labels. Each label provides the object name, and the level of confidence that the image contains the object. For example, suppose the input image has a lighthouse, the sea, and a rock. The response will include all three labels, one for each object.   {Name: lighthouse, Confidence: 98.4629}   {Name: rock,Confidence: 79.2097}    {Name: sea,Confidence: 75.061}   In the preceding example, the operation returns one label for each of the three objects. The operation can also return multiple labels for the same object in the image. For example, if the input image shows a flower (for example, a tulip), the operation might return the following three labels.   {Name: flower,Confidence: 99.0562}   {Name: plant,Confidence: 99.0562}   {Name: tulip,Confidence: 99.0562}  In this example, the detection algorithm more precisely identifies the flower as a tulip. You can provide the input image as an S3 object or as base64-encoded bytes. In response, the API returns an array of labels. In addition, the response also includes the orientation correction. Optionally, you can specify MinConfidence to control the confidence threshold for the labels returned. The default is 50%. You can also add the MaxLabels parameter to limit the number of labels returned.   If the object detected is a person, the operation doesn't provide the same facial details that the DetectFaces operation provides.  This is a stateless API operation. That is, the operation does not persist any data. This operation requires permissions to perform the rekognition:DetectLabels action. 
   */
  detectLabels(callback?: (err: AWSError, data: Rekognition.Types.DetectLabelsResponse) => void): Request<Rekognition.Types.DetectLabelsResponse, AWSError>;
  /**
   * Detects explicit or suggestive adult content in a specified JPEG or PNG format image. Use DetectModerationLabels to moderate images depending on your requirements. For example, you might want to filter images that contain nudity, but not images containing suggestive content. To filter images, use the labels returned by DetectModerationLabels to determine which types of content are appropriate. For information about moderation labels, see image-moderation.
   */
  detectModerationLabels(params: Rekognition.Types.DetectModerationLabelsRequest, callback?: (err: AWSError, data: Rekognition.Types.DetectModerationLabelsResponse) => void): Request<Rekognition.Types.DetectModerationLabelsResponse, AWSError>;
  /**
   * Detects explicit or suggestive adult content in a specified JPEG or PNG format image. Use DetectModerationLabels to moderate images depending on your requirements. For example, you might want to filter images that contain nudity, but not images containing suggestive content. To filter images, use the labels returned by DetectModerationLabels to determine which types of content are appropriate. For information about moderation labels, see image-moderation.
   */
  detectModerationLabels(callback?: (err: AWSError, data: Rekognition.Types.DetectModerationLabelsResponse) => void): Request<Rekognition.Types.DetectModerationLabelsResponse, AWSError>;
  /**
   * Gets the name and additional information about a celebrity based on his or her Rekognition ID. The additional information is returned as an array of URLs. If there is no additional information about the celebrity, this list is empty. For more information, see celebrity-recognition. This operation requires permissions to perform the rekognition:GetCelebrityInfo action. 
   */
  getCelebrityInfo(params: Rekognition.Types.GetCelebrityInfoRequest, callback?: (err: AWSError, data: Rekognition.Types.GetCelebrityInfoResponse) => void): Request<Rekognition.Types.GetCelebrityInfoResponse, AWSError>;
  /**
   * Gets the name and additional information about a celebrity based on his or her Rekognition ID. The additional information is returned as an array of URLs. If there is no additional information about the celebrity, this list is empty. For more information, see celebrity-recognition. This operation requires permissions to perform the rekognition:GetCelebrityInfo action. 
   */
  getCelebrityInfo(callback?: (err: AWSError, data: Rekognition.Types.GetCelebrityInfoResponse) => void): Request<Rekognition.Types.GetCelebrityInfoResponse, AWSError>;
  /**
   * Detects faces in the input image and adds them to the specified collection.   Amazon Rekognition does not save the actual faces detected. Instead, the underlying detection algorithm first detects the faces in the input image, and for each face extracts facial features into a feature vector, and stores it in the back-end database. Amazon Rekognition uses feature vectors when performing face match and search operations using the and operations.  If you provide the optional externalImageID for the input image you provided, Amazon Rekognition associates this ID with all faces that it detects. When you call the operation, the response returns the external ID. You can use this external image ID to create a client-side index to associate the faces with each image. You can then use the index to find all faces in an image.  In response, the operation returns an array of metadata for all detected faces. This includes, the bounding box of the detected face, confidence value (indicating the bounding box contains a face), a face ID assigned by the service for each face that is detected and stored, and an image ID assigned by the service for the input image. If you request all facial attributes (using the detectionAttributes parameter, Amazon Rekognition returns detailed facial attributes such as facial landmarks (for example, location of eye and mount) and other facial attributes such gender. If you provide the same image, specify the same collection, and use the same external ID in the IndexFaces operation, Amazon Rekognition doesn't save duplicate face metadata.  For an example, see example2. This operation requires permissions to perform the rekognition:IndexFaces action.
   */
  indexFaces(params: Rekognition.Types.IndexFacesRequest, callback?: (err: AWSError, data: Rekognition.Types.IndexFacesResponse) => void): Request<Rekognition.Types.IndexFacesResponse, AWSError>;
  /**
   * Detects faces in the input image and adds them to the specified collection.   Amazon Rekognition does not save the actual faces detected. Instead, the underlying detection algorithm first detects the faces in the input image, and for each face extracts facial features into a feature vector, and stores it in the back-end database. Amazon Rekognition uses feature vectors when performing face match and search operations using the and operations.  If you provide the optional externalImageID for the input image you provided, Amazon Rekognition associates this ID with all faces that it detects. When you call the operation, the response returns the external ID. You can use this external image ID to create a client-side index to associate the faces with each image. You can then use the index to find all faces in an image.  In response, the operation returns an array of metadata for all detected faces. This includes, the bounding box of the detected face, confidence value (indicating the bounding box contains a face), a face ID assigned by the service for each face that is detected and stored, and an image ID assigned by the service for the input image. If you request all facial attributes (using the detectionAttributes parameter, Amazon Rekognition returns detailed facial attributes such as facial landmarks (for example, location of eye and mount) and other facial attributes such gender. If you provide the same image, specify the same collection, and use the same external ID in the IndexFaces operation, Amazon Rekognition doesn't save duplicate face metadata.  For an example, see example2. This operation requires permissions to perform the rekognition:IndexFaces action.
   */
  indexFaces(callback?: (err: AWSError, data: Rekognition.Types.IndexFacesResponse) => void): Request<Rekognition.Types.IndexFacesResponse, AWSError>;
  /**
   * Returns list of collection IDs in your account. If the result is truncated, the response also provides a NextToken that you can use in the subsequent request to fetch the next set of collection IDs. For an example, see example1. This operation requires permissions to perform the rekognition:ListCollections action.
   */
  listCollections(params: Rekognition.Types.ListCollectionsRequest, callback?: (err: AWSError, data: Rekognition.Types.ListCollectionsResponse) => void): Request<Rekognition.Types.ListCollectionsResponse, AWSError>;
  /**
   * Returns list of collection IDs in your account. If the result is truncated, the response also provides a NextToken that you can use in the subsequent request to fetch the next set of collection IDs. For an example, see example1. This operation requires permissions to perform the rekognition:ListCollections action.
   */
  listCollections(callback?: (err: AWSError, data: Rekognition.Types.ListCollectionsResponse) => void): Request<Rekognition.Types.ListCollectionsResponse, AWSError>;
  /**
   * Returns metadata for faces in the specified collection. This metadata includes information such as the bounding box coordinates, the confidence (that the bounding box contains a face), and face ID. For an example, see example3.  This operation requires permissions to perform the rekognition:ListFaces action.
   */
  listFaces(params: Rekognition.Types.ListFacesRequest, callback?: (err: AWSError, data: Rekognition.Types.ListFacesResponse) => void): Request<Rekognition.Types.ListFacesResponse, AWSError>;
  /**
   * Returns metadata for faces in the specified collection. This metadata includes information such as the bounding box coordinates, the confidence (that the bounding box contains a face), and face ID. For an example, see example3.  This operation requires permissions to perform the rekognition:ListFaces action.
   */
  listFaces(callback?: (err: AWSError, data: Rekognition.Types.ListFacesResponse) => void): Request<Rekognition.Types.ListFacesResponse, AWSError>;
  /**
   * Returns an array of celebrities recognized in the input image. The image is passed either as base64-encoded image bytes or as a reference to an image in an Amazon S3 bucket. The image must be either a PNG or JPEG formatted file. For more information, see celebrity-recognition.   RecognizeCelebrities returns the 15 largest faces in the image. It lists recognized celebrities in the CelebrityFaces list and unrecognized faces in the UnrecognizedFaces list. The operation doesn't return celebrities whose face sizes are smaller than the largest 15 faces in the image. For each celebrity recognized, the API returns a Celebrity object. The Celebrity object contains the celebrity name, ID, URL links to additional information, match confidence, and a ComparedFace object that you can use to locate the celebrity's face on the image. Rekognition does not retain information about which images a celebrity has been recognized in. Your application must store this information and use the Celebrity ID property as a unique identifier for the celebrity. If you don't store the celebrity name or additional information URLs returned by RecognizeCelebrities, you will need the ID to identify the celebrity in a call to the operation. For an example, see recognize-celebrities-tutorial. This operation requires permissions to perform the rekognition:RecognizeCelebrities operation.
   */
  recognizeCelebrities(params: Rekognition.Types.RecognizeCelebritiesRequest, callback?: (err: AWSError, data: Rekognition.Types.RecognizeCelebritiesResponse) => void): Request<Rekognition.Types.RecognizeCelebritiesResponse, AWSError>;
  /**
   * Returns an array of celebrities recognized in the input image. The image is passed either as base64-encoded image bytes or as a reference to an image in an Amazon S3 bucket. The image must be either a PNG or JPEG formatted file. For more information, see celebrity-recognition.   RecognizeCelebrities returns the 15 largest faces in the image. It lists recognized celebrities in the CelebrityFaces list and unrecognized faces in the UnrecognizedFaces list. The operation doesn't return celebrities whose face sizes are smaller than the largest 15 faces in the image. For each celebrity recognized, the API returns a Celebrity object. The Celebrity object contains the celebrity name, ID, URL links to additional information, match confidence, and a ComparedFace object that you can use to locate the celebrity's face on the image. Rekognition does not retain information about which images a celebrity has been recognized in. Your application must store this information and use the Celebrity ID property as a unique identifier for the celebrity. If you don't store the celebrity name or additional information URLs returned by RecognizeCelebrities, you will need the ID to identify the celebrity in a call to the operation. For an example, see recognize-celebrities-tutorial. This operation requires permissions to perform the rekognition:RecognizeCelebrities operation.
   */
  recognizeCelebrities(callback?: (err: AWSError, data: Rekognition.Types.RecognizeCelebritiesResponse) => void): Request<Rekognition.Types.RecognizeCelebritiesResponse, AWSError>;
  /**
   * For a given input face ID, searches for matching faces in the collection the face belongs to. You get a face ID when you add a face to the collection using the IndexFaces operation. The operation compares the features of the input face with faces in the specified collection.   You can also search faces without indexing faces by using the SearchFacesByImage operation.   The operation response returns an array of faces that match, ordered by similarity score with the highest similarity first. More specifically, it is an array of metadata for each face match that is found. Along with the metadata, the response also includes a confidence value for each face match, indicating the confidence that the specific face matches the input face.  For an example, see example3. This operation requires permissions to perform the rekognition:SearchFaces action.
   */
  searchFaces(params: Rekognition.Types.SearchFacesRequest, callback?: (err: AWSError, data: Rekognition.Types.SearchFacesResponse) => void): Request<Rekognition.Types.SearchFacesResponse, AWSError>;
  /**
   * For a given input face ID, searches for matching faces in the collection the face belongs to. You get a face ID when you add a face to the collection using the IndexFaces operation. The operation compares the features of the input face with faces in the specified collection.   You can also search faces without indexing faces by using the SearchFacesByImage operation.   The operation response returns an array of faces that match, ordered by similarity score with the highest similarity first. More specifically, it is an array of metadata for each face match that is found. Along with the metadata, the response also includes a confidence value for each face match, indicating the confidence that the specific face matches the input face.  For an example, see example3. This operation requires permissions to perform the rekognition:SearchFaces action.
   */
  searchFaces(callback?: (err: AWSError, data: Rekognition.Types.SearchFacesResponse) => void): Request<Rekognition.Types.SearchFacesResponse, AWSError>;
  /**
   * For a given input image, first detects the largest face in the image, and then searches the specified collection for matching faces. The operation compares the features of the input face with faces in the specified collection.    To search for all faces in an input image, you might first call the operation, and then use the face IDs returned in subsequent calls to the operation.   You can also call the DetectFaces operation and use the bounding boxes in the response to make face crops, which then you can pass in to the SearchFacesByImage operation.    The response returns an array of faces that match, ordered by similarity score with the highest similarity first. More specifically, it is an array of metadata for each face match found. Along with the metadata, the response also includes a similarity indicating how similar the face is to the input face. In the response, the operation also returns the bounding box (and a confidence level that the bounding box contains a face) of the face that Amazon Rekognition used for the input image.  For an example, see example3. This operation requires permissions to perform the rekognition:SearchFacesByImage action.
   */
  searchFacesByImage(params: Rekognition.Types.SearchFacesByImageRequest, callback?: (err: AWSError, data: Rekognition.Types.SearchFacesByImageResponse) => void): Request<Rekognition.Types.SearchFacesByImageResponse, AWSError>;
  /**
   * For a given input image, first detects the largest face in the image, and then searches the specified collection for matching faces. The operation compares the features of the input face with faces in the specified collection.    To search for all faces in an input image, you might first call the operation, and then use the face IDs returned in subsequent calls to the operation.   You can also call the DetectFaces operation and use the bounding boxes in the response to make face crops, which then you can pass in to the SearchFacesByImage operation.    The response returns an array of faces that match, ordered by similarity score with the highest similarity first. More specifically, it is an array of metadata for each face match found. Along with the metadata, the response also includes a similarity indicating how similar the face is to the input face. In the response, the operation also returns the bounding box (and a confidence level that the bounding box contains a face) of the face that Amazon Rekognition used for the input image.  For an example, see example3. This operation requires permissions to perform the rekognition:SearchFacesByImage action.
   */
  searchFacesByImage(callback?: (err: AWSError, data: Rekognition.Types.SearchFacesByImageResponse) => void): Request<Rekognition.Types.SearchFacesByImageResponse, AWSError>;
}
declare namespace Rekognition {
  export interface AgeRange {
    /**
     * The lowest estimated age.
     */
    Low?: UInteger;
    /**
     * The highest estimated age.
     */
    High?: UInteger;
  }
  export type Attribute = "DEFAULT"|"ALL"|string;
  export type Attributes = Attribute[];
  export interface Beard {
    /**
     * Boolean value that indicates whether the face has beard or not.
     */
    Value?: Boolean;
    /**
     * Level of confidence in the determination.
     */
    Confidence?: Percent;
  }
  export type Boolean = boolean;
  export interface BoundingBox {
    /**
     * Width of the bounding box as a ratio of the overall image width.
     */
    Width?: Float;
    /**
     * Height of the bounding box as a ratio of the overall image height.
     */
    Height?: Float;
    /**
     * Left coordinate of the bounding box as a ratio of overall image width.
     */
    Left?: Float;
    /**
     * Top coordinate of the bounding box as a ratio of overall image height.
     */
    Top?: Float;
  }
  export interface Celebrity {
    /**
     * An array of URLs pointing to additional information about the celebrity. If there is no additional information about the celebrity, this list is empty.
     */
    Urls?: Urls;
    /**
     * The name of the celebrity.
     */
    Name?: String;
    /**
     * A unique identifier for the celebrity. 
     */
    Id?: RekognitionUniqueId;
    /**
     * Provides information about the celebrity's face, such as its location on the image.
     */
    Face?: ComparedFace;
    /**
     * The confidence, in percentage, that Rekognition has that the recognized face is the celebrity.
     */
    MatchConfidence?: Percent;
  }
  export type CelebrityList = Celebrity[];
  export type CollectionId = string;
  export type CollectionIdList = CollectionId[];
  export interface CompareFacesMatch {
    /**
     * Level of confidence that the faces match.
     */
    Similarity?: Percent;
    /**
     * Provides face metadata (bounding box and confidence that the bounding box actually contains a face).
     */
    Face?: ComparedFace;
  }
  export type CompareFacesMatchList = CompareFacesMatch[];
  export interface CompareFacesRequest {
    /**
     * The source image, either as bytes or as an S3 object.
     */
    SourceImage: Image;
    /**
     * The target image, either as bytes or as an S3 object.
     */
    TargetImage: Image;
    /**
     * The minimum level of confidence in the face matches that a match must meet to be included in the FaceMatches array.
     */
    SimilarityThreshold?: Percent;
  }
  export interface CompareFacesResponse {
    /**
     * The face in the source image that was used for comparison.
     */
    SourceImageFace?: ComparedSourceImageFace;
    /**
     * An array of faces in the target image that match the source image face. Each CompareFacesMatch object provides the bounding box, the confidence level that the bounding box contains a face, and the similarity score for the face in the bounding box and the face in the source image.
     */
    FaceMatches?: CompareFacesMatchList;
    /**
     * An array of faces in the target image that did not match the source image face.
     */
    UnmatchedFaces?: CompareFacesUnmatchList;
    /**
     *  The orientation of the source image (counterclockwise direction). If your application displays the source image, you can use this value to correct image orientation. The bounding box coordinates returned in SourceImageFace represent the location of the face before the image orientation is corrected.   If the source image is in .jpeg format, it might contain exchangeable image (Exif) metadata that includes the image's orientation. If the Exif metadata for the source image populates the orientation field, the value of OrientationCorrection is null and the SourceImageFace bounding box coordinates represent the location of the face after Exif metadata is used to correct the orientation. Images in .png format don't contain Exif metadata. 
     */
    SourceImageOrientationCorrection?: OrientationCorrection;
    /**
     *  The orientation of the target image (in counterclockwise direction). If your application displays the target image, you can use this value to correct the orientation of the image. The bounding box coordinates returned in FaceMatches and UnmatchedFaces represent face locations before the image orientation is corrected.   If the target image is in .jpg format, it might contain Exif metadata that includes the orientation of the image. If the Exif metadata for the target image populates the orientation field, the value of OrientationCorrection is null and the bounding box coordinates in FaceMatches and UnmatchedFaces represent the location of the face after Exif metadata is used to correct the orientation. Images in .png format don't contain Exif metadata. 
     */
    TargetImageOrientationCorrection?: OrientationCorrection;
  }
  export type CompareFacesUnmatchList = ComparedFace[];
  export interface ComparedFace {
    /**
     * Bounding box of the face.
     */
    BoundingBox?: BoundingBox;
    /**
     * Level of confidence that what the bounding box contains is a face.
     */
    Confidence?: Percent;
    /**
     * An array of facial landmarks.
     */
    Landmarks?: Landmarks;
    /**
     * Indicates the pose of the face as determined by its pitch, roll, and yaw.
     */
    Pose?: Pose;
    /**
     * Identifies face image brightness and sharpness. 
     */
    Quality?: ImageQuality;
  }
  export type ComparedFaceList = ComparedFace[];
  export interface ComparedSourceImageFace {
    /**
     * Bounding box of the face.
     */
    BoundingBox?: BoundingBox;
    /**
     * Confidence level that the selected bounding box contains a face.
     */
    Confidence?: Percent;
  }
  export interface CreateCollectionRequest {
    /**
     * ID for the collection that you are creating.
     */
    CollectionId: CollectionId;
  }
  export interface CreateCollectionResponse {
    /**
     * HTTP status code indicating the result of the operation.
     */
    StatusCode?: UInteger;
    /**
     * Amazon Resource Name (ARN) of the collection. You can use this to manage permissions on your resources. 
     */
    CollectionArn?: String;
  }
  export type Degree = number;
  export interface DeleteCollectionRequest {
    /**
     * ID of the collection to delete.
     */
    CollectionId: CollectionId;
  }
  export interface DeleteCollectionResponse {
    /**
     * HTTP status code that indicates the result of the operation.
     */
    StatusCode?: UInteger;
  }
  export interface DeleteFacesRequest {
    /**
     * Collection from which to remove the specific faces.
     */
    CollectionId: CollectionId;
    /**
     * An array of face IDs to delete.
     */
    FaceIds: FaceIdList;
  }
  export interface DeleteFacesResponse {
    /**
     * An array of strings (face IDs) of the faces that were deleted.
     */
    DeletedFaces?: FaceIdList;
  }
  export interface DetectFacesRequest {
    /**
     * The image in which you want to detect faces. You can specify a blob or an S3 object. 
     */
    Image: Image;
    /**
     * An array of facial attributes you want to be returned. This can be the default list of attributes or all attributes. If you don't specify a value for Attributes or if you specify ["DEFAULT"], the API returns the following subset of facial attributes: BoundingBox, Confidence, Pose, Quality and Landmarks. If you provide ["ALL"], all facial attributes are returned but the operation will take longer to complete. If you provide both, ["ALL", "DEFAULT"], the service uses a logical AND operator to determine which attributes to return (in this case, all attributes). 
     */
    Attributes?: Attributes;
  }
  export interface DetectFacesResponse {
    /**
     * Details of each face found in the image. 
     */
    FaceDetails?: FaceDetailList;
    /**
     *  The orientation of the input image (counter-clockwise direction). If your application displays the image, you can use this value to correct image orientation. The bounding box coordinates returned in FaceDetails represent face locations before the image orientation is corrected.   If the input image is in .jpeg format, it might contain exchangeable image (Exif) metadata that includes the image's orientation. If so, and the Exif metadata for the input image populates the orientation field, the value of OrientationCorrection is null and the FaceDetails bounding box coordinates represent face locations after Exif metadata is used to correct the image orientation. Images in .png format don't contain Exif metadata. 
     */
    OrientationCorrection?: OrientationCorrection;
  }
  export interface DetectLabelsRequest {
    /**
     * The input image. You can provide a blob of image bytes or an S3 object.
     */
    Image: Image;
    /**
     * Maximum number of labels you want the service to return in the response. The service returns the specified number of highest confidence labels. 
     */
    MaxLabels?: UInteger;
    /**
     * Specifies the minimum confidence level for the labels to return. Amazon Rekognition doesn't return any labels with confidence lower than this specified value. If MinConfidence is not specified, the operation returns labels with a confidence values greater than or equal to 50 percent.
     */
    MinConfidence?: Percent;
  }
  export interface DetectLabelsResponse {
    /**
     * An array of labels for the real-world objects detected. 
     */
    Labels?: Labels;
    /**
     *  The orientation of the input image (counter-clockwise direction). If your application displays the image, you can use this value to correct the orientation. If Amazon Rekognition detects that the input image was rotated (for example, by 90 degrees), it first corrects the orientation before detecting the labels.   If the input image Exif metadata populates the orientation field, Amazon Rekognition does not perform orientation correction and the value of OrientationCorrection will be null. 
     */
    OrientationCorrection?: OrientationCorrection;
  }
  export interface DetectModerationLabelsRequest {
    /**
     * The input image as bytes or an S3 object.
     */
    Image: Image;
    /**
     * Specifies the minimum confidence level for the labels to return. Amazon Rekognition doesn't return any labels with a confidence level lower than this specified value. If you don't specify MinConfidence, the operation returns labels with confidence values greater than or equal to 50 percent.
     */
    MinConfidence?: Percent;
  }
  export interface DetectModerationLabelsResponse {
    /**
     * An array of labels for explicit or suggestive adult content found in the image. The list includes the top-level label and each child label detected in the image. This is useful for filtering specific categories of content. 
     */
    ModerationLabels?: ModerationLabels;
  }
  export interface Emotion {
    /**
     * Type of emotion detected.
     */
    Type?: EmotionName;
    /**
     * Level of confidence in the determination.
     */
    Confidence?: Percent;
  }
  export type EmotionName = "HAPPY"|"SAD"|"ANGRY"|"CONFUSED"|"DISGUSTED"|"SURPRISED"|"CALM"|"UNKNOWN"|string;
  export type Emotions = Emotion[];
  export type ExternalImageId = string;
  export interface EyeOpen {
    /**
     * Boolean value that indicates whether the eyes on the face are open.
     */
    Value?: Boolean;
    /**
     * Level of confidence in the determination.
     */
    Confidence?: Percent;
  }
  export interface Eyeglasses {
    /**
     * Boolean value that indicates whether the face is wearing eye glasses or not.
     */
    Value?: Boolean;
    /**
     * Level of confidence in the determination.
     */
    Confidence?: Percent;
  }
  export interface Face {
    /**
     * Unique identifier that Amazon Rekognition assigns to the face.
     */
    FaceId?: FaceId;
    /**
     * Bounding box of the face.
     */
    BoundingBox?: BoundingBox;
    /**
     * Unique identifier that Amazon Rekognition assigns to the input image.
     */
    ImageId?: ImageId;
    /**
     * Identifier that you assign to all the faces in the input image.
     */
    ExternalImageId?: ExternalImageId;
    /**
     * Confidence level that the bounding box contains a face (and not a different object such as a tree).
     */
    Confidence?: Percent;
  }
  export interface FaceDetail {
    /**
     * Bounding box of the face.
     */
    BoundingBox?: BoundingBox;
    /**
     * The estimated age range, in years, for the face. Low represents the lowest estimated age and High represents the highest estimated age.
     */
    AgeRange?: AgeRange;
    /**
     * Indicates whether or not the face is smiling, and the confidence level in the determination.
     */
    Smile?: Smile;
    /**
     * Indicates whether or not the face is wearing eye glasses, and the confidence level in the determination.
     */
    Eyeglasses?: Eyeglasses;
    /**
     * Indicates whether or not the face is wearing sunglasses, and the confidence level in the determination.
     */
    Sunglasses?: Sunglasses;
    /**
     * Gender of the face and the confidence level in the determination.
     */
    Gender?: Gender;
    /**
     * Indicates whether or not the face has a beard, and the confidence level in the determination.
     */
    Beard?: Beard;
    /**
     * Indicates whether or not the face has a mustache, and the confidence level in the determination.
     */
    Mustache?: Mustache;
    /**
     * Indicates whether or not the eyes on the face are open, and the confidence level in the determination.
     */
    EyesOpen?: EyeOpen;
    /**
     * Indicates whether or not the mouth on the face is open, and the confidence level in the determination.
     */
    MouthOpen?: MouthOpen;
    /**
     * The emotions detected on the face, and the confidence level in the determination. For example, HAPPY, SAD, and ANGRY. 
     */
    Emotions?: Emotions;
    /**
     * Indicates the location of landmarks on the face.
     */
    Landmarks?: Landmarks;
    /**
     * Indicates the pose of the face as determined by its pitch, roll, and yaw.
     */
    Pose?: Pose;
    /**
     * Identifies image brightness and sharpness.
     */
    Quality?: ImageQuality;
    /**
     * Confidence level that the bounding box contains a face (and not a different object such as a tree).
     */
    Confidence?: Percent;
  }
  export type FaceDetailList = FaceDetail[];
  export type FaceId = string;
  export type FaceIdList = FaceId[];
  export type FaceList = Face[];
  export interface FaceMatch {
    /**
     * Confidence in the match of this face with the input face.
     */
    Similarity?: Percent;
    /**
     * Describes the face properties such as the bounding box, face ID, image ID of the source image, and external image ID that you assigned.
     */
    Face?: Face;
  }
  export type FaceMatchList = FaceMatch[];
  export interface FaceRecord {
    /**
     * Describes the face properties such as the bounding box, face ID, image ID of the input image, and external image ID that you assigned. 
     */
    Face?: Face;
    /**
     * Structure containing attributes of the face that the algorithm detected.
     */
    FaceDetail?: FaceDetail;
  }
  export type FaceRecordList = FaceRecord[];
  export type Float = number;
  export interface Gender {
    /**
     * Gender of the face.
     */
    Value?: GenderType;
    /**
     * Level of confidence in the determination.
     */
    Confidence?: Percent;
  }
  export type GenderType = "Male"|"Female"|string;
  export interface GetCelebrityInfoRequest {
    /**
     * The ID for the celebrity. You get the celebrity ID from a call to the operation, which recognizes celebrities in an image. 
     */
    Id: RekognitionUniqueId;
  }
  export interface GetCelebrityInfoResponse {
    /**
     * An array of URLs pointing to additional celebrity information. 
     */
    Urls?: Urls;
    /**
     * The name of the celebrity.
     */
    Name?: String;
  }
  export interface Image {
    /**
     * Blob of image bytes up to 5 MBs.
     */
    Bytes?: ImageBlob;
    /**
     * Identifies an S3 object as the image source.
     */
    S3Object?: S3Object;
  }
  export type ImageBlob = Buffer|Uint8Array|Blob|string;
  export type ImageId = string;
  export interface ImageQuality {
    /**
     * Value representing brightness of the face. The service returns a value between 0 and 100 (inclusive). A higher value indicates a brighter face image.
     */
    Brightness?: Float;
    /**
     * Value representing sharpness of the face. The service returns a value between 0 and 100 (inclusive). A higher value indicates a sharper face image.
     */
    Sharpness?: Float;
  }
  export interface IndexFacesRequest {
    /**
     * The ID of an existing collection to which you want to add the faces that are detected in the input images.
     */
    CollectionId: CollectionId;
    /**
     * The input image as bytes or an S3 object.
     */
    Image: Image;
    /**
     * ID you want to assign to all the faces detected in the image.
     */
    ExternalImageId?: ExternalImageId;
    /**
     * An array of facial attributes that you want to be returned. This can be the default list of attributes or all attributes. If you don't specify a value for Attributes or if you specify ["DEFAULT"], the API returns the following subset of facial attributes: BoundingBox, Confidence, Pose, Quality and Landmarks. If you provide ["ALL"], all facial attributes are returned but the operation will take longer to complete. If you provide both, ["ALL", "DEFAULT"], the service uses a logical AND operator to determine which attributes to return (in this case, all attributes). 
     */
    DetectionAttributes?: Attributes;
  }
  export interface IndexFacesResponse {
    /**
     * An array of faces detected and added to the collection. For more information, see howitworks-index-faces. 
     */
    FaceRecords?: FaceRecordList;
    /**
     * The orientation of the input image (counterclockwise direction). If your application displays the image, you can use this value to correct image orientation. The bounding box coordinates returned in FaceRecords represent face locations before the image orientation is corrected.   If the input image is in jpeg format, it might contain exchangeable image (Exif) metadata. If so, and the Exif metadata populates the orientation field, the value of OrientationCorrection is null and the bounding box coordinates in FaceRecords represent face locations after Exif metadata is used to correct the image orientation. Images in .png format don't contain Exif metadata. 
     */
    OrientationCorrection?: OrientationCorrection;
  }
  export interface Label {
    /**
     * The name (label) of the object.
     */
    Name?: String;
    /**
     * Level of confidence.
     */
    Confidence?: Percent;
  }
  export type Labels = Label[];
  export interface Landmark {
    /**
     * Type of the landmark.
     */
    Type?: LandmarkType;
    /**
     * x-coordinate from the top left of the landmark expressed as the ratio of the width of the image. For example, if the images is 700x200 and the x-coordinate of the landmark is at 350 pixels, this value is 0.5. 
     */
    X?: Float;
    /**
     * y-coordinate from the top left of the landmark expressed as the ratio of the height of the image. For example, if the images is 700x200 and the y-coordinate of the landmark is at 100 pixels, this value is 0.5.
     */
    Y?: Float;
  }
  export type LandmarkType = "eyeLeft"|"eyeRight"|"nose"|"mouthLeft"|"mouthRight"|"leftEyeBrowLeft"|"leftEyeBrowRight"|"leftEyeBrowUp"|"rightEyeBrowLeft"|"rightEyeBrowRight"|"rightEyeBrowUp"|"leftEyeLeft"|"leftEyeRight"|"leftEyeUp"|"leftEyeDown"|"rightEyeLeft"|"rightEyeRight"|"rightEyeUp"|"rightEyeDown"|"noseLeft"|"noseRight"|"mouthUp"|"mouthDown"|"leftPupil"|"rightPupil"|string;
  export type Landmarks = Landmark[];
  export interface ListCollectionsRequest {
    /**
     * Pagination token from the previous response.
     */
    NextToken?: PaginationToken;
    /**
     * Maximum number of collection IDs to return.
     */
    MaxResults?: PageSize;
  }
  export interface ListCollectionsResponse {
    /**
     * An array of collection IDs.
     */
    CollectionIds?: CollectionIdList;
    /**
     * If the result is truncated, the response provides a NextToken that you can use in the subsequent request to fetch the next set of collection IDs.
     */
    NextToken?: PaginationToken;
  }
  export interface ListFacesRequest {
    /**
     * ID of the collection from which to list the faces.
     */
    CollectionId: CollectionId;
    /**
     * If the previous response was incomplete (because there is more data to retrieve), Amazon Rekognition returns a pagination token in the response. You can use this pagination token to retrieve the next set of faces.
     */
    NextToken?: PaginationToken;
    /**
     * Maximum number of faces to return.
     */
    MaxResults?: PageSize;
  }
  export interface ListFacesResponse {
    /**
     * An array of Face objects. 
     */
    Faces?: FaceList;
    /**
     * If the response is truncated, Amazon Rekognition returns this token that you can use in the subsequent request to retrieve the next set of faces.
     */
    NextToken?: String;
  }
  export type MaxFaces = number;
  export interface ModerationLabel {
    /**
     * Specifies the confidence that Amazon Rekognition has that the label has been correctly identified. If you don't specify the MinConfidence parameter in the call to DetectModerationLabels, the operation returns labels with a confidence value greater than or equal to 50 percent.
     */
    Confidence?: Percent;
    /**
     * The label name for the type of content detected in the image.
     */
    Name?: String;
    /**
     * The name for the parent label. Labels at the top-level of the hierarchy have the parent label "".
     */
    ParentName?: String;
  }
  export type ModerationLabels = ModerationLabel[];
  export interface MouthOpen {
    /**
     * Boolean value that indicates whether the mouth on the face is open or not.
     */
    Value?: Boolean;
    /**
     * Level of confidence in the determination.
     */
    Confidence?: Percent;
  }
  export interface Mustache {
    /**
     * Boolean value that indicates whether the face has mustache or not.
     */
    Value?: Boolean;
    /**
     * Level of confidence in the determination.
     */
    Confidence?: Percent;
  }
  export type OrientationCorrection = "ROTATE_0"|"ROTATE_90"|"ROTATE_180"|"ROTATE_270"|string;
  export type PageSize = number;
  export type PaginationToken = string;
  export type Percent = number;
  export interface Pose {
    /**
     * Value representing the face rotation on the roll axis.
     */
    Roll?: Degree;
    /**
     * Value representing the face rotation on the yaw axis.
     */
    Yaw?: Degree;
    /**
     * Value representing the face rotation on the pitch axis.
     */
    Pitch?: Degree;
  }
  export interface RecognizeCelebritiesRequest {
    /**
     * The input image to use for celebrity recognition.
     */
    Image: Image;
  }
  export interface RecognizeCelebritiesResponse {
    /**
     * Details about each celebrity found in the image. Amazon Rekognition can detect a maximum of 15 celebrities in an image.
     */
    CelebrityFaces?: CelebrityList;
    /**
     * Details about each unrecognized face in the image.
     */
    UnrecognizedFaces?: ComparedFaceList;
    /**
     * The orientation of the input image (counterclockwise direction). If your application displays the image, you can use this value to correct the orientation. The bounding box coordinates returned in CelebrityFaces and UnrecognizedFaces represent face locations before the image orientation is corrected.   If the input image is in .jpeg format, it might contain exchangeable image (Exif) metadata that includes the image's orientation. If so, and the Exif metadata for the input image populates the orientation field, the value of OrientationCorrection is null and the CelebrityFaces and UnrecognizedFaces bounding box coordinates represent face locations after Exif metadata is used to correct the image orientation. Images in .png format don't contain Exif metadata.  
     */
    OrientationCorrection?: OrientationCorrection;
  }
  export type RekognitionUniqueId = string;
  export type S3Bucket = string;
  export interface S3Object {
    /**
     * Name of the S3 bucket.
     */
    Bucket?: S3Bucket;
    /**
     * S3 object key name.
     */
    Name?: S3ObjectName;
    /**
     * If the bucket is versioning enabled, you can specify the object version. 
     */
    Version?: S3ObjectVersion;
  }
  export type S3ObjectName = string;
  export type S3ObjectVersion = string;
  export interface SearchFacesByImageRequest {
    /**
     * ID of the collection to search.
     */
    CollectionId: CollectionId;
    /**
     * The input image as bytes or an S3 object.
     */
    Image: Image;
    /**
     * Maximum number of faces to return. The operation returns the maximum number of faces with the highest confidence in the match.
     */
    MaxFaces?: MaxFaces;
    /**
     * (Optional) Specifies the minimum confidence in the face match to return. For example, don't return any matches where confidence in matches is less than 70%.
     */
    FaceMatchThreshold?: Percent;
  }
  export interface SearchFacesByImageResponse {
    /**
     * The bounding box around the face in the input image that Amazon Rekognition used for the search.
     */
    SearchedFaceBoundingBox?: BoundingBox;
    /**
     * The level of confidence that the searchedFaceBoundingBox, contains a face.
     */
    SearchedFaceConfidence?: Percent;
    /**
     * An array of faces that match the input face, along with the confidence in the match.
     */
    FaceMatches?: FaceMatchList;
  }
  export interface SearchFacesRequest {
    /**
     * ID of the collection the face belongs to.
     */
    CollectionId: CollectionId;
    /**
     * ID of a face to find matches for in the collection.
     */
    FaceId: FaceId;
    /**
     * Maximum number of faces to return. The operation returns the maximum number of faces with the highest confidence in the match.
     */
    MaxFaces?: MaxFaces;
    /**
     * Optional value specifying the minimum confidence in the face match to return. For example, don't return any matches where confidence in matches is less than 70%.
     */
    FaceMatchThreshold?: Percent;
  }
  export interface SearchFacesResponse {
    /**
     * ID of the face that was searched for matches in a collection.
     */
    SearchedFaceId?: FaceId;
    /**
     * An array of faces that matched the input face, along with the confidence in the match.
     */
    FaceMatches?: FaceMatchList;
  }
  export interface Smile {
    /**
     * Boolean value that indicates whether the face is smiling or not.
     */
    Value?: Boolean;
    /**
     * Level of confidence in the determination.
     */
    Confidence?: Percent;
  }
  export type String = string;
  export interface Sunglasses {
    /**
     * Boolean value that indicates whether the face is wearing sunglasses or not.
     */
    Value?: Boolean;
    /**
     * Level of confidence in the determination.
     */
    Confidence?: Percent;
  }
  export type UInteger = number;
  export type Url = string;
  export type Urls = Url[];
  /**
   * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
   */
  export type apiVersion = "2016-06-27"|"latest"|string;
  export interface ClientApiVersions {
    /**
     * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
     */
    apiVersion?: apiVersion;
  }
  export type ClientConfiguration = ServiceConfigurationOptions & ClientApiVersions;
  /**
   * Contains interfaces for use with the Rekognition client.
   */
  export import Types = Rekognition;
}
export = Rekognition;
