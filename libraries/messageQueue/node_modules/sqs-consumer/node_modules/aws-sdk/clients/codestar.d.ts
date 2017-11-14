import {Request} from '../lib/request';
import {Response} from '../lib/response';
import {AWSError} from '../lib/error';
import {Service} from '../lib/service';
import {ServiceConfigurationOptions} from '../lib/service';
import {ConfigBase as Config} from '../lib/config';
interface Blob {}
declare class CodeStar extends Service {
  /**
   * Constructs a service object. This object has one method for each API operation.
   */
  constructor(options?: CodeStar.Types.ClientConfiguration)
  config: Config & CodeStar.Types.ClientConfiguration;
  /**
   * Adds an IAM user to the team for an AWS CodeStar project.
   */
  associateTeamMember(params: CodeStar.Types.AssociateTeamMemberRequest, callback?: (err: AWSError, data: CodeStar.Types.AssociateTeamMemberResult) => void): Request<CodeStar.Types.AssociateTeamMemberResult, AWSError>;
  /**
   * Adds an IAM user to the team for an AWS CodeStar project.
   */
  associateTeamMember(callback?: (err: AWSError, data: CodeStar.Types.AssociateTeamMemberResult) => void): Request<CodeStar.Types.AssociateTeamMemberResult, AWSError>;
  /**
   * Reserved for future use. To create a project, use the AWS CodeStar console.
   */
  createProject(params: CodeStar.Types.CreateProjectRequest, callback?: (err: AWSError, data: CodeStar.Types.CreateProjectResult) => void): Request<CodeStar.Types.CreateProjectResult, AWSError>;
  /**
   * Reserved for future use. To create a project, use the AWS CodeStar console.
   */
  createProject(callback?: (err: AWSError, data: CodeStar.Types.CreateProjectResult) => void): Request<CodeStar.Types.CreateProjectResult, AWSError>;
  /**
   * Creates a profile for a user that includes user preferences, such as the display name and email address assocciated with the user, in AWS CodeStar. The user profile is not project-specific. Information in the user profile is displayed wherever the user's information appears to other users in AWS CodeStar.
   */
  createUserProfile(params: CodeStar.Types.CreateUserProfileRequest, callback?: (err: AWSError, data: CodeStar.Types.CreateUserProfileResult) => void): Request<CodeStar.Types.CreateUserProfileResult, AWSError>;
  /**
   * Creates a profile for a user that includes user preferences, such as the display name and email address assocciated with the user, in AWS CodeStar. The user profile is not project-specific. Information in the user profile is displayed wherever the user's information appears to other users in AWS CodeStar.
   */
  createUserProfile(callback?: (err: AWSError, data: CodeStar.Types.CreateUserProfileResult) => void): Request<CodeStar.Types.CreateUserProfileResult, AWSError>;
  /**
   * Deletes a project, including project resources. Does not delete users associated with the project, but does delete the IAM roles that allowed access to the project.
   */
  deleteProject(params: CodeStar.Types.DeleteProjectRequest, callback?: (err: AWSError, data: CodeStar.Types.DeleteProjectResult) => void): Request<CodeStar.Types.DeleteProjectResult, AWSError>;
  /**
   * Deletes a project, including project resources. Does not delete users associated with the project, but does delete the IAM roles that allowed access to the project.
   */
  deleteProject(callback?: (err: AWSError, data: CodeStar.Types.DeleteProjectResult) => void): Request<CodeStar.Types.DeleteProjectResult, AWSError>;
  /**
   * Deletes a user profile in AWS CodeStar, including all personal preference data associated with that profile, such as display name and email address. It does not delete the history of that user, for example the history of commits made by that user.
   */
  deleteUserProfile(params: CodeStar.Types.DeleteUserProfileRequest, callback?: (err: AWSError, data: CodeStar.Types.DeleteUserProfileResult) => void): Request<CodeStar.Types.DeleteUserProfileResult, AWSError>;
  /**
   * Deletes a user profile in AWS CodeStar, including all personal preference data associated with that profile, such as display name and email address. It does not delete the history of that user, for example the history of commits made by that user.
   */
  deleteUserProfile(callback?: (err: AWSError, data: CodeStar.Types.DeleteUserProfileResult) => void): Request<CodeStar.Types.DeleteUserProfileResult, AWSError>;
  /**
   * Describes a project and its resources.
   */
  describeProject(params: CodeStar.Types.DescribeProjectRequest, callback?: (err: AWSError, data: CodeStar.Types.DescribeProjectResult) => void): Request<CodeStar.Types.DescribeProjectResult, AWSError>;
  /**
   * Describes a project and its resources.
   */
  describeProject(callback?: (err: AWSError, data: CodeStar.Types.DescribeProjectResult) => void): Request<CodeStar.Types.DescribeProjectResult, AWSError>;
  /**
   * Describes a user in AWS CodeStar and the user attributes across all projects.
   */
  describeUserProfile(params: CodeStar.Types.DescribeUserProfileRequest, callback?: (err: AWSError, data: CodeStar.Types.DescribeUserProfileResult) => void): Request<CodeStar.Types.DescribeUserProfileResult, AWSError>;
  /**
   * Describes a user in AWS CodeStar and the user attributes across all projects.
   */
  describeUserProfile(callback?: (err: AWSError, data: CodeStar.Types.DescribeUserProfileResult) => void): Request<CodeStar.Types.DescribeUserProfileResult, AWSError>;
  /**
   * Removes a user from a project. Removing a user from a project also removes the IAM policies from that user that allowed access to the project and its resources. Disassociating a team member does not remove that user's profile from AWS CodeStar. It does not remove the user from IAM.
   */
  disassociateTeamMember(params: CodeStar.Types.DisassociateTeamMemberRequest, callback?: (err: AWSError, data: CodeStar.Types.DisassociateTeamMemberResult) => void): Request<CodeStar.Types.DisassociateTeamMemberResult, AWSError>;
  /**
   * Removes a user from a project. Removing a user from a project also removes the IAM policies from that user that allowed access to the project and its resources. Disassociating a team member does not remove that user's profile from AWS CodeStar. It does not remove the user from IAM.
   */
  disassociateTeamMember(callback?: (err: AWSError, data: CodeStar.Types.DisassociateTeamMemberResult) => void): Request<CodeStar.Types.DisassociateTeamMemberResult, AWSError>;
  /**
   * Lists all projects in AWS CodeStar associated with your AWS account.
   */
  listProjects(params: CodeStar.Types.ListProjectsRequest, callback?: (err: AWSError, data: CodeStar.Types.ListProjectsResult) => void): Request<CodeStar.Types.ListProjectsResult, AWSError>;
  /**
   * Lists all projects in AWS CodeStar associated with your AWS account.
   */
  listProjects(callback?: (err: AWSError, data: CodeStar.Types.ListProjectsResult) => void): Request<CodeStar.Types.ListProjectsResult, AWSError>;
  /**
   * Lists resources associated with a project in AWS CodeStar.
   */
  listResources(params: CodeStar.Types.ListResourcesRequest, callback?: (err: AWSError, data: CodeStar.Types.ListResourcesResult) => void): Request<CodeStar.Types.ListResourcesResult, AWSError>;
  /**
   * Lists resources associated with a project in AWS CodeStar.
   */
  listResources(callback?: (err: AWSError, data: CodeStar.Types.ListResourcesResult) => void): Request<CodeStar.Types.ListResourcesResult, AWSError>;
  /**
   * Gets the tags for a project.
   */
  listTagsForProject(params: CodeStar.Types.ListTagsForProjectRequest, callback?: (err: AWSError, data: CodeStar.Types.ListTagsForProjectResult) => void): Request<CodeStar.Types.ListTagsForProjectResult, AWSError>;
  /**
   * Gets the tags for a project.
   */
  listTagsForProject(callback?: (err: AWSError, data: CodeStar.Types.ListTagsForProjectResult) => void): Request<CodeStar.Types.ListTagsForProjectResult, AWSError>;
  /**
   * Lists all team members associated with a project.
   */
  listTeamMembers(params: CodeStar.Types.ListTeamMembersRequest, callback?: (err: AWSError, data: CodeStar.Types.ListTeamMembersResult) => void): Request<CodeStar.Types.ListTeamMembersResult, AWSError>;
  /**
   * Lists all team members associated with a project.
   */
  listTeamMembers(callback?: (err: AWSError, data: CodeStar.Types.ListTeamMembersResult) => void): Request<CodeStar.Types.ListTeamMembersResult, AWSError>;
  /**
   * Lists all the user profiles configured for your AWS account in AWS CodeStar.
   */
  listUserProfiles(params: CodeStar.Types.ListUserProfilesRequest, callback?: (err: AWSError, data: CodeStar.Types.ListUserProfilesResult) => void): Request<CodeStar.Types.ListUserProfilesResult, AWSError>;
  /**
   * Lists all the user profiles configured for your AWS account in AWS CodeStar.
   */
  listUserProfiles(callback?: (err: AWSError, data: CodeStar.Types.ListUserProfilesResult) => void): Request<CodeStar.Types.ListUserProfilesResult, AWSError>;
  /**
   * Adds tags to a project.
   */
  tagProject(params: CodeStar.Types.TagProjectRequest, callback?: (err: AWSError, data: CodeStar.Types.TagProjectResult) => void): Request<CodeStar.Types.TagProjectResult, AWSError>;
  /**
   * Adds tags to a project.
   */
  tagProject(callback?: (err: AWSError, data: CodeStar.Types.TagProjectResult) => void): Request<CodeStar.Types.TagProjectResult, AWSError>;
  /**
   * Removes tags from a project.
   */
  untagProject(params: CodeStar.Types.UntagProjectRequest, callback?: (err: AWSError, data: CodeStar.Types.UntagProjectResult) => void): Request<CodeStar.Types.UntagProjectResult, AWSError>;
  /**
   * Removes tags from a project.
   */
  untagProject(callback?: (err: AWSError, data: CodeStar.Types.UntagProjectResult) => void): Request<CodeStar.Types.UntagProjectResult, AWSError>;
  /**
   * Updates a project in AWS CodeStar.
   */
  updateProject(params: CodeStar.Types.UpdateProjectRequest, callback?: (err: AWSError, data: CodeStar.Types.UpdateProjectResult) => void): Request<CodeStar.Types.UpdateProjectResult, AWSError>;
  /**
   * Updates a project in AWS CodeStar.
   */
  updateProject(callback?: (err: AWSError, data: CodeStar.Types.UpdateProjectResult) => void): Request<CodeStar.Types.UpdateProjectResult, AWSError>;
  /**
   * Updates a team member's attributes in an AWS CodeStar project. For example, you can change a team member's role in the project, or change whether they have remote access to project resources.
   */
  updateTeamMember(params: CodeStar.Types.UpdateTeamMemberRequest, callback?: (err: AWSError, data: CodeStar.Types.UpdateTeamMemberResult) => void): Request<CodeStar.Types.UpdateTeamMemberResult, AWSError>;
  /**
   * Updates a team member's attributes in an AWS CodeStar project. For example, you can change a team member's role in the project, or change whether they have remote access to project resources.
   */
  updateTeamMember(callback?: (err: AWSError, data: CodeStar.Types.UpdateTeamMemberResult) => void): Request<CodeStar.Types.UpdateTeamMemberResult, AWSError>;
  /**
   * Updates a user's profile in AWS CodeStar. The user profile is not project-specific. Information in the user profile is displayed wherever the user's information appears to other users in AWS CodeStar. 
   */
  updateUserProfile(params: CodeStar.Types.UpdateUserProfileRequest, callback?: (err: AWSError, data: CodeStar.Types.UpdateUserProfileResult) => void): Request<CodeStar.Types.UpdateUserProfileResult, AWSError>;
  /**
   * Updates a user's profile in AWS CodeStar. The user profile is not project-specific. Information in the user profile is displayed wherever the user's information appears to other users in AWS CodeStar. 
   */
  updateUserProfile(callback?: (err: AWSError, data: CodeStar.Types.UpdateUserProfileResult) => void): Request<CodeStar.Types.UpdateUserProfileResult, AWSError>;
}
declare namespace CodeStar {
  export interface AssociateTeamMemberRequest {
    /**
     * The ID of the project to which you will add the IAM user.
     */
    projectId: ProjectId;
    /**
     * A user- or system-generated token that identifies the entity that requested the team member association to the project. This token can be used to repeat the request.
     */
    clientRequestToken?: ClientRequestToken;
    /**
     * The Amazon Resource Name (ARN) for the IAM user you want to add to the AWS CodeStar project.
     */
    userArn: UserArn;
    /**
     * The AWS CodeStar project role that will apply to this user. This role determines what actions a user can take in an AWS CodeStar project.
     */
    projectRole: Role;
    /**
     * Whether the team member is allowed to use an SSH public/private key pair to remotely access project resources, for example Amazon EC2 instances.
     */
    remoteAccessAllowed?: RemoteAccessAllowed;
  }
  export interface AssociateTeamMemberResult {
    /**
     * The user- or system-generated token from the initial request that can be used to repeat the request.
     */
    clientRequestToken?: ClientRequestToken;
  }
  export type ClientRequestToken = string;
  export interface CreateProjectRequest {
    /**
     * Reserved for future use.
     */
    name: ProjectName;
    /**
     * Reserved for future use.
     */
    id: ProjectId;
    /**
     * Reserved for future use.
     */
    description?: ProjectDescription;
    /**
     * Reserved for future use.
     */
    clientRequestToken?: ClientRequestToken;
  }
  export interface CreateProjectResult {
    /**
     * Reserved for future use.
     */
    id: ProjectId;
    /**
     * Reserved for future use.
     */
    arn: ProjectArn;
    /**
     * Reserved for future use.
     */
    clientRequestToken?: ClientRequestToken;
    /**
     * Reserved for future use.
     */
    projectTemplateId?: ProjectTemplateId;
  }
  export interface CreateUserProfileRequest {
    /**
     * The Amazon Resource Name (ARN) of the user in IAM.
     */
    userArn: UserArn;
    /**
     * The name that will be displayed as the friendly name for the user in AWS CodeStar. 
     */
    displayName: UserProfileDisplayName;
    /**
     * The email address that will be displayed as part of the user's profile in AWS CodeStar.
     */
    emailAddress: Email;
    /**
     * The SSH public key associated with the user in AWS CodeStar. If a project owner allows the user remote access to project resources, this public key will be used along with the user's private key for SSH access.
     */
    sshPublicKey?: SshPublicKey;
  }
  export interface CreateUserProfileResult {
    /**
     * The Amazon Resource Name (ARN) of the user in IAM.
     */
    userArn: UserArn;
    /**
     * The name that is displayed as the friendly name for the user in AWS CodeStar.
     */
    displayName?: UserProfileDisplayName;
    /**
     * The email address that is displayed as part of the user's profile in AWS CodeStar.
     */
    emailAddress?: Email;
    /**
     * The SSH public key associated with the user in AWS CodeStar. This is the public portion of the public/private keypair the user can use to access project resources if a project owner allows the user remote access to those resources.
     */
    sshPublicKey?: SshPublicKey;
    /**
     * The date the user profile was created, in timestamp format.
     */
    createdTimestamp?: CreatedTimestamp;
    /**
     * The date the user profile was last modified, in timestamp format.
     */
    lastModifiedTimestamp?: LastModifiedTimestamp;
  }
  export type CreatedTimestamp = Date;
  export interface DeleteProjectRequest {
    /**
     * The ID of the project to be deleted in AWS CodeStar.
     */
    id: ProjectId;
    /**
     * A user- or system-generated token that identifies the entity that requested project deletion. This token can be used to repeat the request. 
     */
    clientRequestToken?: ClientRequestToken;
    /**
     * Whether to send a delete request for the primary stack in AWS CloudFormation originally used to generate the project and its resources. This option will delete all AWS resources for the project (except for any buckets in Amazon S3) as well as deleting the project itself. Recommended for most use cases.
     */
    deleteStack?: DeleteStack;
  }
  export interface DeleteProjectResult {
    /**
     * The ID of the primary stack in AWS CloudFormation that will be deleted as part of deleting the project and its resources.
     */
    stackId?: StackId;
    /**
     * The Amazon Resource Name (ARN) of the deleted project.
     */
    projectArn?: ProjectArn;
  }
  export type DeleteStack = boolean;
  export interface DeleteUserProfileRequest {
    /**
     * The Amazon Resource Name (ARN) of the user to delete from AWS CodeStar.
     */
    userArn: UserArn;
  }
  export interface DeleteUserProfileResult {
    /**
     * The Amazon Resource Name (ARN) of the user deleted from AWS CodeStar.
     */
    userArn: UserArn;
  }
  export interface DescribeProjectRequest {
    /**
     * The ID of the project.
     */
    id: ProjectId;
  }
  export interface DescribeProjectResult {
    /**
     * The display name for the project.
     */
    name?: ProjectName;
    /**
     * The ID of the project.
     */
    id?: ProjectId;
    /**
     * The Amazon Resource Name (ARN) for the project.
     */
    arn?: ProjectArn;
    /**
     * The description of the project, if any.
     */
    description?: ProjectDescription;
    /**
     * A user- or system-generated token that identifies the entity that requested project creation. 
     */
    clientRequestToken?: ClientRequestToken;
    /**
     * The date and time the project was created, in timestamp format.
     */
    createdTimeStamp?: CreatedTimestamp;
    /**
     * The ID of the primary stack in AWS CloudFormation used to generate resources for the project.
     */
    stackId?: StackId;
    /**
     * The ID for the AWS CodeStar project template used to create the project.
     */
    projectTemplateId?: ProjectTemplateId;
  }
  export interface DescribeUserProfileRequest {
    /**
     * The Amazon Resource Name (ARN) of the user.
     */
    userArn: UserArn;
  }
  export interface DescribeUserProfileResult {
    /**
     * The Amazon Resource Name (ARN) of the user.
     */
    userArn: UserArn;
    /**
     * The display name shown for the user in AWS CodeStar projects. For example, this could be set to both first and last name ("Mary Major") or a single name ("Mary"). The display name is also used to generate the initial icon associated with the user in AWS CodeStar projects. If spaces are included in the display name, the first character that appears after the space will be used as the second character in the user initial icon. The initial icon displays a maximum of two characters, so a display name with more than one space (for example "Mary Jane Major") would generate an initial icon using the first character and the first character after the space ("MJ", not "MM").
     */
    displayName?: UserProfileDisplayName;
    /**
     * The email address for the user. Optional.
     */
    emailAddress?: Email;
    /**
     * The SSH public key associated with the user. This SSH public key is associated with the user profile, and can be used in conjunction with the associated private key for access to project resources, such as Amazon EC2 instances, if a project owner grants remote access to those resources.
     */
    sshPublicKey?: SshPublicKey;
    /**
     * The date and time when the user profile was created in AWS CodeStar, in timestamp format.
     */
    createdTimestamp: CreatedTimestamp;
    /**
     * The date and time when the user profile was last modified, in timestamp format.
     */
    lastModifiedTimestamp: LastModifiedTimestamp;
  }
  export interface DisassociateTeamMemberRequest {
    /**
     * The ID of the AWS CodeStar project from which you want to remove a team member.
     */
    projectId: ProjectId;
    /**
     * The Amazon Resource Name (ARN) of the IAM user or group whom you want to remove from the project.
     */
    userArn: UserArn;
  }
  export interface DisassociateTeamMemberResult {
  }
  export type Email = string;
  export type LastModifiedTimestamp = Date;
  export interface ListProjectsRequest {
    /**
     * The continuation token to be used to return the next set of results, if the results cannot be returned in one response.
     */
    nextToken?: PaginationToken;
    /**
     * The maximum amount of data that can be contained in a single set of results.
     */
    maxResults?: MaxResults;
  }
  export interface ListProjectsResult {
    /**
     * A list of projects.
     */
    projects: ProjectsList;
    /**
     * The continuation token to use when requesting the next set of results, if there are more results to be returned.
     */
    nextToken?: PaginationToken;
  }
  export interface ListResourcesRequest {
    /**
     * The ID of the project.
     */
    projectId: ProjectId;
    /**
     * The continuation token for the next set of results, if the results cannot be returned in one response.
     */
    nextToken?: PaginationToken;
    /**
     * The maximum amount of data that can be contained in a single set of results.
     */
    maxResults?: MaxResults;
  }
  export interface ListResourcesResult {
    /**
     * An array of resources associated with the project. 
     */
    resources?: ResourcesResult;
    /**
     * The continuation token to use when requesting the next set of results, if there are more results to be returned.
     */
    nextToken?: PaginationToken;
  }
  export interface ListTagsForProjectRequest {
    /**
     * The ID of the project to get tags for.
     */
    id: ProjectId;
    /**
     * Reserved for future use.
     */
    nextToken?: PaginationToken;
    /**
     * Reserved for future use.
     */
    maxResults?: MaxResults;
  }
  export interface ListTagsForProjectResult {
    /**
     * The tags for the project.
     */
    tags?: Tags;
    /**
     * Reserved for future use.
     */
    nextToken?: PaginationToken;
  }
  export interface ListTeamMembersRequest {
    /**
     * The ID of the project for which you want to list team members.
     */
    projectId: ProjectId;
    /**
     * The continuation token for the next set of results, if the results cannot be returned in one response.
     */
    nextToken?: PaginationToken;
    /**
     * The maximum number of team members you want returned in a response.
     */
    maxResults?: MaxResults;
  }
  export interface ListTeamMembersResult {
    /**
     * A list of team member objects for the project.
     */
    teamMembers: TeamMemberResult;
    /**
     * The continuation token to use when requesting the next set of results, if there are more results to be returned.
     */
    nextToken?: PaginationToken;
  }
  export interface ListUserProfilesRequest {
    /**
     * The continuation token for the next set of results, if the results cannot be returned in one response.
     */
    nextToken?: PaginationToken;
    /**
     * The maximum number of results to return in a response.
     */
    maxResults?: MaxResults;
  }
  export interface ListUserProfilesResult {
    /**
     * All the user profiles configured in AWS CodeStar for an AWS account.
     */
    userProfiles: UserProfilesList;
    /**
     * The continuation token to use when requesting the next set of results, if there are more results to be returned.
     */
    nextToken?: PaginationToken;
  }
  export type MaxResults = number;
  export type PaginationToken = string;
  export type ProjectArn = string;
  export type ProjectDescription = string;
  export type ProjectId = string;
  export type ProjectName = string;
  export interface ProjectSummary {
    /**
     * The ID of the project.
     */
    projectId?: ProjectId;
    /**
     * The Amazon Resource Name (ARN) of the project.
     */
    projectArn?: ProjectArn;
  }
  export type ProjectTemplateId = string;
  export type ProjectsList = ProjectSummary[];
  export type RemoteAccessAllowed = boolean;
  export interface Resource {
    /**
     * The Amazon Resource Name (ARN) of the resource.
     */
    id: ResourceId;
  }
  export type ResourceId = string;
  export type ResourcesResult = Resource[];
  export type Role = string;
  export type SshPublicKey = string;
  export type StackId = string;
  export type TagKey = string;
  export type TagKeys = TagKey[];
  export interface TagProjectRequest {
    /**
     * The ID of the project you want to add a tag to.
     */
    id: ProjectId;
    /**
     * The tags you want to add to the project.
     */
    tags: Tags;
  }
  export interface TagProjectResult {
    /**
     * The tags for the project.
     */
    tags?: Tags;
  }
  export type TagValue = string;
  export type Tags = {[key: string]: TagValue};
  export interface TeamMember {
    /**
     * The Amazon Resource Name (ARN) of the user in IAM.
     */
    userArn: UserArn;
    /**
     * The role assigned to the user in the project. Project roles have different levels of access. For more information, see Working with Teams in the AWS CodeStar User Guide. 
     */
    projectRole: Role;
    /**
     * Whether the user is allowed to remotely access project resources using an SSH public/private key pair.
     */
    remoteAccessAllowed?: RemoteAccessAllowed;
  }
  export type TeamMemberResult = TeamMember[];
  export interface UntagProjectRequest {
    /**
     * The ID of the project to remove tags from.
     */
    id: ProjectId;
    /**
     * The tags to remove from the project.
     */
    tags: TagKeys;
  }
  export interface UntagProjectResult {
  }
  export interface UpdateProjectRequest {
    /**
     * The ID of the project you want to update.
     */
    id: ProjectId;
    /**
     * The name of the project you want to update.
     */
    name?: ProjectName;
    /**
     * The description of the project, if any.
     */
    description?: ProjectDescription;
  }
  export interface UpdateProjectResult {
  }
  export interface UpdateTeamMemberRequest {
    /**
     * The ID of the project.
     */
    projectId: ProjectId;
    /**
     * The Amazon Resource Name (ARN) of the user for whom you want to change team membership attributes.
     */
    userArn: UserArn;
    /**
     * The role assigned to the user in the project. Project roles have different levels of access. For more information, see Working with Teams in the AWS CodeStar User Guide.
     */
    projectRole?: Role;
    /**
     * Whether a team member is allowed to remotely access project resources using the SSH public key associated with the user's profile. Even if this is set to True, the user must associate a public key with their profile before the user can access resources.
     */
    remoteAccessAllowed?: RemoteAccessAllowed;
  }
  export interface UpdateTeamMemberResult {
    /**
     * The Amazon Resource Name (ARN) of the user whose team membership attributes were updated.
     */
    userArn?: UserArn;
    /**
     * The project role granted to the user.
     */
    projectRole?: Role;
    /**
     * Whether a team member is allowed to remotely access project resources using the SSH public key associated with the user's profile.
     */
    remoteAccessAllowed?: RemoteAccessAllowed;
  }
  export interface UpdateUserProfileRequest {
    /**
     * The name that will be displayed as the friendly name for the user in AWS CodeStar.
     */
    userArn: UserArn;
    /**
     * The name that is displayed as the friendly name for the user in AWS CodeStar.
     */
    displayName?: UserProfileDisplayName;
    /**
     * The email address that is displayed as part of the user's profile in AWS CodeStar.
     */
    emailAddress?: Email;
    /**
     * The SSH public key associated with the user in AWS CodeStar. If a project owner allows the user remote access to project resources, this public key will be used along with the user's private key for SSH access.
     */
    sshPublicKey?: SshPublicKey;
  }
  export interface UpdateUserProfileResult {
    /**
     * The Amazon Resource Name (ARN) of the user in IAM.
     */
    userArn: UserArn;
    /**
     * The name that is displayed as the friendly name for the user in AWS CodeStar.
     */
    displayName?: UserProfileDisplayName;
    /**
     * The email address that is displayed as part of the user's profile in AWS CodeStar.
     */
    emailAddress?: Email;
    /**
     * The SSH public key associated with the user in AWS CodeStar. This is the public portion of the public/private keypair the user can use to access project resources if a project owner allows the user remote access to those resources.
     */
    sshPublicKey?: SshPublicKey;
    /**
     * The date the user profile was created, in timestamp format.
     */
    createdTimestamp?: CreatedTimestamp;
    /**
     * The date the user profile was last modified, in timestamp format.
     */
    lastModifiedTimestamp?: LastModifiedTimestamp;
  }
  export type UserArn = string;
  export type UserProfileDisplayName = string;
  export interface UserProfileSummary {
    /**
     * The Amazon Resource Name (ARN) of the user in IAM.
     */
    userArn?: UserArn;
    /**
     * The display name of a user in AWS CodeStar. For example, this could be set to both first and last name ("Mary Major") or a single name ("Mary"). The display name is also used to generate the initial icon associated with the user in AWS CodeStar projects. If spaces are included in the display name, the first character that appears after the space will be used as the second character in the user initial icon. The initial icon displays a maximum of two characters, so a display name with more than one space (for example "Mary Jane Major") would generate an initial icon using the first character and the first character after the space ("MJ", not "MM").
     */
    displayName?: UserProfileDisplayName;
    /**
     * The email address associated with the user.
     */
    emailAddress?: Email;
    /**
     * The SSH public key associated with the user in AWS CodeStar. If a project owner allows the user remote access to project resources, this public key will be used along with the user's private key for SSH access.
     */
    sshPublicKey?: SshPublicKey;
  }
  export type UserProfilesList = UserProfileSummary[];
  /**
   * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
   */
  export type apiVersion = "2017-04-19"|"latest"|string;
  export interface ClientApiVersions {
    /**
     * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
     */
    apiVersion?: apiVersion;
  }
  export type ClientConfiguration = ServiceConfigurationOptions & ClientApiVersions;
  /**
   * Contains interfaces for use with the CodeStar client.
   */
  export import Types = CodeStar;
}
export = CodeStar;
