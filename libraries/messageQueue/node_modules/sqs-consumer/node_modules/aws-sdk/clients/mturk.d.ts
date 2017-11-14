import {Request} from '../lib/request';
import {Response} from '../lib/response';
import {AWSError} from '../lib/error';
import {Service} from '../lib/service';
import {ServiceConfigurationOptions} from '../lib/service';
import {ConfigBase as Config} from '../lib/config';
interface Blob {}
declare class MTurk extends Service {
  /**
   * Constructs a service object. This object has one method for each API operation.
   */
  constructor(options?: MTurk.Types.ClientConfiguration)
  config: Config & MTurk.Types.ClientConfiguration;
  /**
   *  The AcceptQualificationRequest operation approves a Worker's request for a Qualification.   Only the owner of the Qualification type can grant a Qualification request for that type.   A successful request for the AcceptQualificationRequest operation returns with no errors and an empty body. 
   */
  acceptQualificationRequest(params: MTurk.Types.AcceptQualificationRequestRequest, callback?: (err: AWSError, data: MTurk.Types.AcceptQualificationRequestResponse) => void): Request<MTurk.Types.AcceptQualificationRequestResponse, AWSError>;
  /**
   *  The AcceptQualificationRequest operation approves a Worker's request for a Qualification.   Only the owner of the Qualification type can grant a Qualification request for that type.   A successful request for the AcceptQualificationRequest operation returns with no errors and an empty body. 
   */
  acceptQualificationRequest(callback?: (err: AWSError, data: MTurk.Types.AcceptQualificationRequestResponse) => void): Request<MTurk.Types.AcceptQualificationRequestResponse, AWSError>;
  /**
   *  The ApproveAssignment operation approves the results of a completed assignment.   Approving an assignment initiates two payments from the Requester's Amazon.com account     The Worker who submitted the results is paid the reward specified in the HIT.     Amazon Mechanical Turk fees are debited.     If the Requester's account does not have adequate funds for these payments, the call to ApproveAssignment returns an exception, and the approval is not processed. You can include an optional feedback message with the approval, which the Worker can see in the Status section of the web site.   You can also call this operation for assignments that were previous rejected and approve them by explicitly overriding the previous rejection. This only works on rejected assignments that were submitted within the previous 30 days and only if the assignment's related HIT has not been deleted. 
   */
  approveAssignment(params: MTurk.Types.ApproveAssignmentRequest, callback?: (err: AWSError, data: MTurk.Types.ApproveAssignmentResponse) => void): Request<MTurk.Types.ApproveAssignmentResponse, AWSError>;
  /**
   *  The ApproveAssignment operation approves the results of a completed assignment.   Approving an assignment initiates two payments from the Requester's Amazon.com account     The Worker who submitted the results is paid the reward specified in the HIT.     Amazon Mechanical Turk fees are debited.     If the Requester's account does not have adequate funds for these payments, the call to ApproveAssignment returns an exception, and the approval is not processed. You can include an optional feedback message with the approval, which the Worker can see in the Status section of the web site.   You can also call this operation for assignments that were previous rejected and approve them by explicitly overriding the previous rejection. This only works on rejected assignments that were submitted within the previous 30 days and only if the assignment's related HIT has not been deleted. 
   */
  approveAssignment(callback?: (err: AWSError, data: MTurk.Types.ApproveAssignmentResponse) => void): Request<MTurk.Types.ApproveAssignmentResponse, AWSError>;
  /**
   *  The AssociateQualificationWithWorker operation gives a Worker a Qualification. AssociateQualificationWithWorker does not require that the Worker submit a Qualification request. It gives the Qualification directly to the Worker.   You can only assign a Qualification of a Qualification type that you created (using the CreateQualificationType operation).    Note: AssociateQualificationWithWorker does not affect any pending Qualification requests for the Qualification by the Worker. If you assign a Qualification to a Worker, then later grant a Qualification request made by the Worker, the granting of the request may modify the Qualification score. To resolve a pending Qualification request without affecting the Qualification the Worker already has, reject the request with the RejectQualificationRequest operation.  
   */
  associateQualificationWithWorker(params: MTurk.Types.AssociateQualificationWithWorkerRequest, callback?: (err: AWSError, data: MTurk.Types.AssociateQualificationWithWorkerResponse) => void): Request<MTurk.Types.AssociateQualificationWithWorkerResponse, AWSError>;
  /**
   *  The AssociateQualificationWithWorker operation gives a Worker a Qualification. AssociateQualificationWithWorker does not require that the Worker submit a Qualification request. It gives the Qualification directly to the Worker.   You can only assign a Qualification of a Qualification type that you created (using the CreateQualificationType operation).    Note: AssociateQualificationWithWorker does not affect any pending Qualification requests for the Qualification by the Worker. If you assign a Qualification to a Worker, then later grant a Qualification request made by the Worker, the granting of the request may modify the Qualification score. To resolve a pending Qualification request without affecting the Qualification the Worker already has, reject the request with the RejectQualificationRequest operation.  
   */
  associateQualificationWithWorker(callback?: (err: AWSError, data: MTurk.Types.AssociateQualificationWithWorkerResponse) => void): Request<MTurk.Types.AssociateQualificationWithWorkerResponse, AWSError>;
  /**
   *  The CreateAdditionalAssignmentsForHIT operation increases the maximum number of assignments of an existing HIT.   To extend the maximum number of assignments, specify the number of additional assignments.    HITs created with fewer than 10 assignments cannot be extended to have 10 or more assignments. Attempting to add assignments in a way that brings the total number of assignments for a HIT from fewer than 10 assignments to 10 or more assignments will result in an AWS.MechanicalTurk.InvalidMaximumAssignmentsIncrease exception.   HITs that were created before July 22, 2015 cannot be extended. Attempting to extend HITs that were created before July 22, 2015 will result in an AWS.MechanicalTurk.HITTooOldForExtension exception.    
   */
  createAdditionalAssignmentsForHIT(params: MTurk.Types.CreateAdditionalAssignmentsForHITRequest, callback?: (err: AWSError, data: MTurk.Types.CreateAdditionalAssignmentsForHITResponse) => void): Request<MTurk.Types.CreateAdditionalAssignmentsForHITResponse, AWSError>;
  /**
   *  The CreateAdditionalAssignmentsForHIT operation increases the maximum number of assignments of an existing HIT.   To extend the maximum number of assignments, specify the number of additional assignments.    HITs created with fewer than 10 assignments cannot be extended to have 10 or more assignments. Attempting to add assignments in a way that brings the total number of assignments for a HIT from fewer than 10 assignments to 10 or more assignments will result in an AWS.MechanicalTurk.InvalidMaximumAssignmentsIncrease exception.   HITs that were created before July 22, 2015 cannot be extended. Attempting to extend HITs that were created before July 22, 2015 will result in an AWS.MechanicalTurk.HITTooOldForExtension exception.    
   */
  createAdditionalAssignmentsForHIT(callback?: (err: AWSError, data: MTurk.Types.CreateAdditionalAssignmentsForHITResponse) => void): Request<MTurk.Types.CreateAdditionalAssignmentsForHITResponse, AWSError>;
  /**
   * The CreateHIT operation creates a new Human Intelligence Task (HIT). The new HIT is made available for Workers to find and accept on the Amazon Mechanical Turk website.   This operation allows you to specify a new HIT by passing in values for the properties of the HIT, such as its title, reward amount and number of assignments. When you pass these values to CreateHIT, a new HIT is created for you, with a new HITTypeID. The HITTypeID can be used to create additional HITs in the future without needing to specify common parameters such as the title, description and reward amount each time.  An alternative way to create HITs is to first generate a HITTypeID using the CreateHITType operation and then call the CreateHITWithHITType operation. This is the recommended best practice for Requesters who are creating large numbers of HITs.  CreateHIT also supports several ways to provide question data: by providing a value for the Question parameter that fully specifies the contents of the HIT, or by providing a HitLayoutId and associated HitLayoutParameters.    If a HIT is created with 10 or more maximum assignments, there is an additional fee. For more information, see Amazon Mechanical Turk Pricing. 
   */
  createHIT(params: MTurk.Types.CreateHITRequest, callback?: (err: AWSError, data: MTurk.Types.CreateHITResponse) => void): Request<MTurk.Types.CreateHITResponse, AWSError>;
  /**
   * The CreateHIT operation creates a new Human Intelligence Task (HIT). The new HIT is made available for Workers to find and accept on the Amazon Mechanical Turk website.   This operation allows you to specify a new HIT by passing in values for the properties of the HIT, such as its title, reward amount and number of assignments. When you pass these values to CreateHIT, a new HIT is created for you, with a new HITTypeID. The HITTypeID can be used to create additional HITs in the future without needing to specify common parameters such as the title, description and reward amount each time.  An alternative way to create HITs is to first generate a HITTypeID using the CreateHITType operation and then call the CreateHITWithHITType operation. This is the recommended best practice for Requesters who are creating large numbers of HITs.  CreateHIT also supports several ways to provide question data: by providing a value for the Question parameter that fully specifies the contents of the HIT, or by providing a HitLayoutId and associated HitLayoutParameters.    If a HIT is created with 10 or more maximum assignments, there is an additional fee. For more information, see Amazon Mechanical Turk Pricing. 
   */
  createHIT(callback?: (err: AWSError, data: MTurk.Types.CreateHITResponse) => void): Request<MTurk.Types.CreateHITResponse, AWSError>;
  /**
   *  The CreateHITType operation creates a new HIT type. This operation allows you to define a standard set of HIT properties to use when creating HITs. If you register a HIT type with values that match an existing HIT type, the HIT type ID of the existing type will be returned. 
   */
  createHITType(params: MTurk.Types.CreateHITTypeRequest, callback?: (err: AWSError, data: MTurk.Types.CreateHITTypeResponse) => void): Request<MTurk.Types.CreateHITTypeResponse, AWSError>;
  /**
   *  The CreateHITType operation creates a new HIT type. This operation allows you to define a standard set of HIT properties to use when creating HITs. If you register a HIT type with values that match an existing HIT type, the HIT type ID of the existing type will be returned. 
   */
  createHITType(callback?: (err: AWSError, data: MTurk.Types.CreateHITTypeResponse) => void): Request<MTurk.Types.CreateHITTypeResponse, AWSError>;
  /**
   *  The CreateHITWithHITType operation creates a new Human Intelligence Task (HIT) using an existing HITTypeID generated by the CreateHITType operation.   This is an alternative way to create HITs from the CreateHIT operation. This is the recommended best practice for Requesters who are creating large numbers of HITs.  CreateHITWithHITType also supports several ways to provide question data: by providing a value for the Question parameter that fully specifies the contents of the HIT, or by providing a HitLayoutId and associated HitLayoutParameters.    If a HIT is created with 10 or more maximum assignments, there is an additional fee. For more information, see Amazon Mechanical Turk Pricing.  
   */
  createHITWithHITType(params: MTurk.Types.CreateHITWithHITTypeRequest, callback?: (err: AWSError, data: MTurk.Types.CreateHITWithHITTypeResponse) => void): Request<MTurk.Types.CreateHITWithHITTypeResponse, AWSError>;
  /**
   *  The CreateHITWithHITType operation creates a new Human Intelligence Task (HIT) using an existing HITTypeID generated by the CreateHITType operation.   This is an alternative way to create HITs from the CreateHIT operation. This is the recommended best practice for Requesters who are creating large numbers of HITs.  CreateHITWithHITType also supports several ways to provide question data: by providing a value for the Question parameter that fully specifies the contents of the HIT, or by providing a HitLayoutId and associated HitLayoutParameters.    If a HIT is created with 10 or more maximum assignments, there is an additional fee. For more information, see Amazon Mechanical Turk Pricing.  
   */
  createHITWithHITType(callback?: (err: AWSError, data: MTurk.Types.CreateHITWithHITTypeResponse) => void): Request<MTurk.Types.CreateHITWithHITTypeResponse, AWSError>;
  /**
   *  The CreateQualificationType operation creates a new Qualification type, which is represented by a QualificationType data structure. 
   */
  createQualificationType(params: MTurk.Types.CreateQualificationTypeRequest, callback?: (err: AWSError, data: MTurk.Types.CreateQualificationTypeResponse) => void): Request<MTurk.Types.CreateQualificationTypeResponse, AWSError>;
  /**
   *  The CreateQualificationType operation creates a new Qualification type, which is represented by a QualificationType data structure. 
   */
  createQualificationType(callback?: (err: AWSError, data: MTurk.Types.CreateQualificationTypeResponse) => void): Request<MTurk.Types.CreateQualificationTypeResponse, AWSError>;
  /**
   * The CreateWorkerBlock operation allows you to prevent a Worker from working on your HITs. For example, you can block a Worker who is producing poor quality work. You can block up to 100,000 Workers.
   */
  createWorkerBlock(params: MTurk.Types.CreateWorkerBlockRequest, callback?: (err: AWSError, data: MTurk.Types.CreateWorkerBlockResponse) => void): Request<MTurk.Types.CreateWorkerBlockResponse, AWSError>;
  /**
   * The CreateWorkerBlock operation allows you to prevent a Worker from working on your HITs. For example, you can block a Worker who is producing poor quality work. You can block up to 100,000 Workers.
   */
  createWorkerBlock(callback?: (err: AWSError, data: MTurk.Types.CreateWorkerBlockResponse) => void): Request<MTurk.Types.CreateWorkerBlockResponse, AWSError>;
  /**
   *  The DeleteHIT operation is used to delete HIT that is no longer needed. Only the Requester who created the HIT can delete it.   You can only dispose of HITs that are in the Reviewable state, with all of their submitted assignments already either approved or rejected. If you call the DeleteHIT operation on a HIT that is not in the Reviewable state (for example, that has not expired, or still has active assignments), or on a HIT that is Reviewable but without all of its submitted assignments already approved or rejected, the service will return an error.      HITs are automatically disposed of after 120 days.     After you dispose of a HIT, you can no longer approve the HIT's rejected assignments.     Disposed HITs are not returned in results for the ListHITs operation.     Disposing HITs can improve the performance of operations such as ListReviewableHITs and ListHITs.    
   */
  deleteHIT(params: MTurk.Types.DeleteHITRequest, callback?: (err: AWSError, data: MTurk.Types.DeleteHITResponse) => void): Request<MTurk.Types.DeleteHITResponse, AWSError>;
  /**
   *  The DeleteHIT operation is used to delete HIT that is no longer needed. Only the Requester who created the HIT can delete it.   You can only dispose of HITs that are in the Reviewable state, with all of their submitted assignments already either approved or rejected. If you call the DeleteHIT operation on a HIT that is not in the Reviewable state (for example, that has not expired, or still has active assignments), or on a HIT that is Reviewable but without all of its submitted assignments already approved or rejected, the service will return an error.      HITs are automatically disposed of after 120 days.     After you dispose of a HIT, you can no longer approve the HIT's rejected assignments.     Disposed HITs are not returned in results for the ListHITs operation.     Disposing HITs can improve the performance of operations such as ListReviewableHITs and ListHITs.    
   */
  deleteHIT(callback?: (err: AWSError, data: MTurk.Types.DeleteHITResponse) => void): Request<MTurk.Types.DeleteHITResponse, AWSError>;
  /**
   *  The DeleteQualificationType deletes a Qualification type and deletes any HIT types that are associated with the Qualification type.  This operation does not revoke Qualifications already assigned to Workers because the Qualifications might be needed for active HITs. If there are any pending requests for the Qualification type, Amazon Mechanical Turk rejects those requests. After you delete a Qualification type, you can no longer use it to create HITs or HIT types.  DeleteQualificationType must wait for all the HITs that use the deleted Qualification type to be deleted before completing. It may take up to 48 hours before DeleteQualificationType completes and the unique name of the Qualification type is available for reuse with CreateQualificationType. 
   */
  deleteQualificationType(params: MTurk.Types.DeleteQualificationTypeRequest, callback?: (err: AWSError, data: MTurk.Types.DeleteQualificationTypeResponse) => void): Request<MTurk.Types.DeleteQualificationTypeResponse, AWSError>;
  /**
   *  The DeleteQualificationType deletes a Qualification type and deletes any HIT types that are associated with the Qualification type.  This operation does not revoke Qualifications already assigned to Workers because the Qualifications might be needed for active HITs. If there are any pending requests for the Qualification type, Amazon Mechanical Turk rejects those requests. After you delete a Qualification type, you can no longer use it to create HITs or HIT types.  DeleteQualificationType must wait for all the HITs that use the deleted Qualification type to be deleted before completing. It may take up to 48 hours before DeleteQualificationType completes and the unique name of the Qualification type is available for reuse with CreateQualificationType. 
   */
  deleteQualificationType(callback?: (err: AWSError, data: MTurk.Types.DeleteQualificationTypeResponse) => void): Request<MTurk.Types.DeleteQualificationTypeResponse, AWSError>;
  /**
   * The DeleteWorkerBlock operation allows you to reinstate a blocked Worker to work on your HITs. This operation reverses the effects of the CreateWorkerBlock operation. You need the Worker ID to use this operation. If the Worker ID is missing or invalid, this operation fails and returns the message “WorkerId is invalid.” If the specified Worker is not blocked, this operation returns successfully.
   */
  deleteWorkerBlock(params: MTurk.Types.DeleteWorkerBlockRequest, callback?: (err: AWSError, data: MTurk.Types.DeleteWorkerBlockResponse) => void): Request<MTurk.Types.DeleteWorkerBlockResponse, AWSError>;
  /**
   * The DeleteWorkerBlock operation allows you to reinstate a blocked Worker to work on your HITs. This operation reverses the effects of the CreateWorkerBlock operation. You need the Worker ID to use this operation. If the Worker ID is missing or invalid, this operation fails and returns the message “WorkerId is invalid.” If the specified Worker is not blocked, this operation returns successfully.
   */
  deleteWorkerBlock(callback?: (err: AWSError, data: MTurk.Types.DeleteWorkerBlockResponse) => void): Request<MTurk.Types.DeleteWorkerBlockResponse, AWSError>;
  /**
   *  The DisassociateQualificationFromWorker revokes a previously granted Qualification from a user.   You can provide a text message explaining why the Qualification was revoked. The user who had the Qualification can see this message. 
   */
  disassociateQualificationFromWorker(params: MTurk.Types.DisassociateQualificationFromWorkerRequest, callback?: (err: AWSError, data: MTurk.Types.DisassociateQualificationFromWorkerResponse) => void): Request<MTurk.Types.DisassociateQualificationFromWorkerResponse, AWSError>;
  /**
   *  The DisassociateQualificationFromWorker revokes a previously granted Qualification from a user.   You can provide a text message explaining why the Qualification was revoked. The user who had the Qualification can see this message. 
   */
  disassociateQualificationFromWorker(callback?: (err: AWSError, data: MTurk.Types.DisassociateQualificationFromWorkerResponse) => void): Request<MTurk.Types.DisassociateQualificationFromWorkerResponse, AWSError>;
  /**
   * The GetAccountBalance operation retrieves the amount of money in your Amazon Mechanical Turk account.
   */
  getAccountBalance(params: MTurk.Types.GetAccountBalanceRequest, callback?: (err: AWSError, data: MTurk.Types.GetAccountBalanceResponse) => void): Request<MTurk.Types.GetAccountBalanceResponse, AWSError>;
  /**
   * The GetAccountBalance operation retrieves the amount of money in your Amazon Mechanical Turk account.
   */
  getAccountBalance(callback?: (err: AWSError, data: MTurk.Types.GetAccountBalanceResponse) => void): Request<MTurk.Types.GetAccountBalanceResponse, AWSError>;
  /**
   *  The GetAssignment operation retrieves the details of the specified Assignment. 
   */
  getAssignment(params: MTurk.Types.GetAssignmentRequest, callback?: (err: AWSError, data: MTurk.Types.GetAssignmentResponse) => void): Request<MTurk.Types.GetAssignmentResponse, AWSError>;
  /**
   *  The GetAssignment operation retrieves the details of the specified Assignment. 
   */
  getAssignment(callback?: (err: AWSError, data: MTurk.Types.GetAssignmentResponse) => void): Request<MTurk.Types.GetAssignmentResponse, AWSError>;
  /**
   *  The GetFileUploadURL operation generates and returns a temporary URL. You use the temporary URL to retrieve a file uploaded by a Worker as an answer to a FileUploadAnswer question for a HIT. The temporary URL is generated the instant the GetFileUploadURL operation is called, and is valid for 60 seconds. You can get a temporary file upload URL any time until the HIT is disposed. After the HIT is disposed, any uploaded files are deleted, and cannot be retrieved. 
   */
  getFileUploadURL(params: MTurk.Types.GetFileUploadURLRequest, callback?: (err: AWSError, data: MTurk.Types.GetFileUploadURLResponse) => void): Request<MTurk.Types.GetFileUploadURLResponse, AWSError>;
  /**
   *  The GetFileUploadURL operation generates and returns a temporary URL. You use the temporary URL to retrieve a file uploaded by a Worker as an answer to a FileUploadAnswer question for a HIT. The temporary URL is generated the instant the GetFileUploadURL operation is called, and is valid for 60 seconds. You can get a temporary file upload URL any time until the HIT is disposed. After the HIT is disposed, any uploaded files are deleted, and cannot be retrieved. 
   */
  getFileUploadURL(callback?: (err: AWSError, data: MTurk.Types.GetFileUploadURLResponse) => void): Request<MTurk.Types.GetFileUploadURLResponse, AWSError>;
  /**
   *  The GetHIT operation retrieves the details of the specified HIT. 
   */
  getHIT(params: MTurk.Types.GetHITRequest, callback?: (err: AWSError, data: MTurk.Types.GetHITResponse) => void): Request<MTurk.Types.GetHITResponse, AWSError>;
  /**
   *  The GetHIT operation retrieves the details of the specified HIT. 
   */
  getHIT(callback?: (err: AWSError, data: MTurk.Types.GetHITResponse) => void): Request<MTurk.Types.GetHITResponse, AWSError>;
  /**
   *  The GetQualificationScore operation returns the value of a Worker's Qualification for a given Qualification type.   To get a Worker's Qualification, you must know the Worker's ID. The Worker's ID is included in the assignment data returned by the ListAssignmentsForHIT operation.  Only the owner of a Qualification type can query the value of a Worker's Qualification of that type.
   */
  getQualificationScore(params: MTurk.Types.GetQualificationScoreRequest, callback?: (err: AWSError, data: MTurk.Types.GetQualificationScoreResponse) => void): Request<MTurk.Types.GetQualificationScoreResponse, AWSError>;
  /**
   *  The GetQualificationScore operation returns the value of a Worker's Qualification for a given Qualification type.   To get a Worker's Qualification, you must know the Worker's ID. The Worker's ID is included in the assignment data returned by the ListAssignmentsForHIT operation.  Only the owner of a Qualification type can query the value of a Worker's Qualification of that type.
   */
  getQualificationScore(callback?: (err: AWSError, data: MTurk.Types.GetQualificationScoreResponse) => void): Request<MTurk.Types.GetQualificationScoreResponse, AWSError>;
  /**
   *  The GetQualificationTypeoperation retrieves information about a Qualification type using its ID. 
   */
  getQualificationType(params: MTurk.Types.GetQualificationTypeRequest, callback?: (err: AWSError, data: MTurk.Types.GetQualificationTypeResponse) => void): Request<MTurk.Types.GetQualificationTypeResponse, AWSError>;
  /**
   *  The GetQualificationTypeoperation retrieves information about a Qualification type using its ID. 
   */
  getQualificationType(callback?: (err: AWSError, data: MTurk.Types.GetQualificationTypeResponse) => void): Request<MTurk.Types.GetQualificationTypeResponse, AWSError>;
  /**
   *  The ListAssignmentsForHIT operation retrieves completed assignments for a HIT. You can use this operation to retrieve the results for a HIT.   You can get assignments for a HIT at any time, even if the HIT is not yet Reviewable. If a HIT requested multiple assignments, and has received some results but has not yet become Reviewable, you can still retrieve the partial results with this operation.   Use the AssignmentStatus parameter to control which set of assignments for a HIT are returned. The ListAssignmentsForHIT operation can return submitted assignments awaiting approval, or it can return assignments that have already been approved or rejected. You can set AssignmentStatus=Approved,Rejected to get assignments that have already been approved and rejected together in one result set.   Only the Requester who created the HIT can retrieve the assignments for that HIT.   Results are sorted and divided into numbered pages and the operation returns a single page of results. You can use the parameters of the operation to control sorting and pagination. 
   */
  listAssignmentsForHIT(params: MTurk.Types.ListAssignmentsForHITRequest, callback?: (err: AWSError, data: MTurk.Types.ListAssignmentsForHITResponse) => void): Request<MTurk.Types.ListAssignmentsForHITResponse, AWSError>;
  /**
   *  The ListAssignmentsForHIT operation retrieves completed assignments for a HIT. You can use this operation to retrieve the results for a HIT.   You can get assignments for a HIT at any time, even if the HIT is not yet Reviewable. If a HIT requested multiple assignments, and has received some results but has not yet become Reviewable, you can still retrieve the partial results with this operation.   Use the AssignmentStatus parameter to control which set of assignments for a HIT are returned. The ListAssignmentsForHIT operation can return submitted assignments awaiting approval, or it can return assignments that have already been approved or rejected. You can set AssignmentStatus=Approved,Rejected to get assignments that have already been approved and rejected together in one result set.   Only the Requester who created the HIT can retrieve the assignments for that HIT.   Results are sorted and divided into numbered pages and the operation returns a single page of results. You can use the parameters of the operation to control sorting and pagination. 
   */
  listAssignmentsForHIT(callback?: (err: AWSError, data: MTurk.Types.ListAssignmentsForHITResponse) => void): Request<MTurk.Types.ListAssignmentsForHITResponse, AWSError>;
  /**
   *  The ListBonusPayments operation retrieves the amounts of bonuses you have paid to Workers for a given HIT or assignment. 
   */
  listBonusPayments(params: MTurk.Types.ListBonusPaymentsRequest, callback?: (err: AWSError, data: MTurk.Types.ListBonusPaymentsResponse) => void): Request<MTurk.Types.ListBonusPaymentsResponse, AWSError>;
  /**
   *  The ListBonusPayments operation retrieves the amounts of bonuses you have paid to Workers for a given HIT or assignment. 
   */
  listBonusPayments(callback?: (err: AWSError, data: MTurk.Types.ListBonusPaymentsResponse) => void): Request<MTurk.Types.ListBonusPaymentsResponse, AWSError>;
  /**
   *  The ListHITs operation returns all of a Requester's HITs. The operation returns HITs of any status, except for HITs that have been deleted of with the DeleteHIT operation or that have been auto-deleted. 
   */
  listHITs(params: MTurk.Types.ListHITsRequest, callback?: (err: AWSError, data: MTurk.Types.ListHITsResponse) => void): Request<MTurk.Types.ListHITsResponse, AWSError>;
  /**
   *  The ListHITs operation returns all of a Requester's HITs. The operation returns HITs of any status, except for HITs that have been deleted of with the DeleteHIT operation or that have been auto-deleted. 
   */
  listHITs(callback?: (err: AWSError, data: MTurk.Types.ListHITsResponse) => void): Request<MTurk.Types.ListHITsResponse, AWSError>;
  /**
   *  The ListHITsForQualificationType operation returns the HITs that use the given Qualification type for a Qualification requirement. The operation returns HITs of any status, except for HITs that have been deleted with the DeleteHIT operation or that have been auto-deleted. 
   */
  listHITsForQualificationType(params: MTurk.Types.ListHITsForQualificationTypeRequest, callback?: (err: AWSError, data: MTurk.Types.ListHITsForQualificationTypeResponse) => void): Request<MTurk.Types.ListHITsForQualificationTypeResponse, AWSError>;
  /**
   *  The ListHITsForQualificationType operation returns the HITs that use the given Qualification type for a Qualification requirement. The operation returns HITs of any status, except for HITs that have been deleted with the DeleteHIT operation or that have been auto-deleted. 
   */
  listHITsForQualificationType(callback?: (err: AWSError, data: MTurk.Types.ListHITsForQualificationTypeResponse) => void): Request<MTurk.Types.ListHITsForQualificationTypeResponse, AWSError>;
  /**
   *  The ListQualificationRequests operation retrieves requests for Qualifications of a particular Qualification type. The owner of the Qualification type calls this operation to poll for pending requests, and accepts them using the AcceptQualification operation. 
   */
  listQualificationRequests(params: MTurk.Types.ListQualificationRequestsRequest, callback?: (err: AWSError, data: MTurk.Types.ListQualificationRequestsResponse) => void): Request<MTurk.Types.ListQualificationRequestsResponse, AWSError>;
  /**
   *  The ListQualificationRequests operation retrieves requests for Qualifications of a particular Qualification type. The owner of the Qualification type calls this operation to poll for pending requests, and accepts them using the AcceptQualification operation. 
   */
  listQualificationRequests(callback?: (err: AWSError, data: MTurk.Types.ListQualificationRequestsResponse) => void): Request<MTurk.Types.ListQualificationRequestsResponse, AWSError>;
  /**
   *  The ListQualificationRequests operation retrieves requests for Qualifications of a particular Qualification type. The owner of the Qualification type calls this operation to poll for pending requests, and accepts them using the AcceptQualification operation. 
   */
  listQualificationTypes(params: MTurk.Types.ListQualificationTypesRequest, callback?: (err: AWSError, data: MTurk.Types.ListQualificationTypesResponse) => void): Request<MTurk.Types.ListQualificationTypesResponse, AWSError>;
  /**
   *  The ListQualificationRequests operation retrieves requests for Qualifications of a particular Qualification type. The owner of the Qualification type calls this operation to poll for pending requests, and accepts them using the AcceptQualification operation. 
   */
  listQualificationTypes(callback?: (err: AWSError, data: MTurk.Types.ListQualificationTypesResponse) => void): Request<MTurk.Types.ListQualificationTypesResponse, AWSError>;
  /**
   *  The ListReviewPolicyResultsForHIT operation retrieves the computed results and the actions taken in the course of executing your Review Policies for a given HIT. For information about how to specify Review Policies when you call CreateHIT, see Review Policies. The ListReviewPolicyResultsForHIT operation can return results for both Assignment-level and HIT-level review results. 
   */
  listReviewPolicyResultsForHIT(params: MTurk.Types.ListReviewPolicyResultsForHITRequest, callback?: (err: AWSError, data: MTurk.Types.ListReviewPolicyResultsForHITResponse) => void): Request<MTurk.Types.ListReviewPolicyResultsForHITResponse, AWSError>;
  /**
   *  The ListReviewPolicyResultsForHIT operation retrieves the computed results and the actions taken in the course of executing your Review Policies for a given HIT. For information about how to specify Review Policies when you call CreateHIT, see Review Policies. The ListReviewPolicyResultsForHIT operation can return results for both Assignment-level and HIT-level review results. 
   */
  listReviewPolicyResultsForHIT(callback?: (err: AWSError, data: MTurk.Types.ListReviewPolicyResultsForHITResponse) => void): Request<MTurk.Types.ListReviewPolicyResultsForHITResponse, AWSError>;
  /**
   *  The ListReviewableHITs operation retrieves the HITs with Status equal to Reviewable or Status equal to Reviewing that belong to the Requester calling the operation. 
   */
  listReviewableHITs(params: MTurk.Types.ListReviewableHITsRequest, callback?: (err: AWSError, data: MTurk.Types.ListReviewableHITsResponse) => void): Request<MTurk.Types.ListReviewableHITsResponse, AWSError>;
  /**
   *  The ListReviewableHITs operation retrieves the HITs with Status equal to Reviewable or Status equal to Reviewing that belong to the Requester calling the operation. 
   */
  listReviewableHITs(callback?: (err: AWSError, data: MTurk.Types.ListReviewableHITsResponse) => void): Request<MTurk.Types.ListReviewableHITsResponse, AWSError>;
  /**
   * The ListWorkersBlocks operation retrieves a list of Workers who are blocked from working on your HITs.
   */
  listWorkerBlocks(params: MTurk.Types.ListWorkerBlocksRequest, callback?: (err: AWSError, data: MTurk.Types.ListWorkerBlocksResponse) => void): Request<MTurk.Types.ListWorkerBlocksResponse, AWSError>;
  /**
   * The ListWorkersBlocks operation retrieves a list of Workers who are blocked from working on your HITs.
   */
  listWorkerBlocks(callback?: (err: AWSError, data: MTurk.Types.ListWorkerBlocksResponse) => void): Request<MTurk.Types.ListWorkerBlocksResponse, AWSError>;
  /**
   *  The ListWorkersWithQualificationType operation returns all of the Workers that have been associated with a given Qualification type. 
   */
  listWorkersWithQualificationType(params: MTurk.Types.ListWorkersWithQualificationTypeRequest, callback?: (err: AWSError, data: MTurk.Types.ListWorkersWithQualificationTypeResponse) => void): Request<MTurk.Types.ListWorkersWithQualificationTypeResponse, AWSError>;
  /**
   *  The ListWorkersWithQualificationType operation returns all of the Workers that have been associated with a given Qualification type. 
   */
  listWorkersWithQualificationType(callback?: (err: AWSError, data: MTurk.Types.ListWorkersWithQualificationTypeResponse) => void): Request<MTurk.Types.ListWorkersWithQualificationTypeResponse, AWSError>;
  /**
   *  The NotifyWorkers operation sends an email to one or more Workers that you specify with the Worker ID. You can specify up to 100 Worker IDs to send the same message with a single call to the NotifyWorkers operation. The NotifyWorkers operation will send a notification email to a Worker only if you have previously approved or rejected work from the Worker. 
   */
  notifyWorkers(params: MTurk.Types.NotifyWorkersRequest, callback?: (err: AWSError, data: MTurk.Types.NotifyWorkersResponse) => void): Request<MTurk.Types.NotifyWorkersResponse, AWSError>;
  /**
   *  The NotifyWorkers operation sends an email to one or more Workers that you specify with the Worker ID. You can specify up to 100 Worker IDs to send the same message with a single call to the NotifyWorkers operation. The NotifyWorkers operation will send a notification email to a Worker only if you have previously approved or rejected work from the Worker. 
   */
  notifyWorkers(callback?: (err: AWSError, data: MTurk.Types.NotifyWorkersResponse) => void): Request<MTurk.Types.NotifyWorkersResponse, AWSError>;
  /**
   *  The RejectAssignment operation rejects the results of a completed assignment.   You can include an optional feedback message with the rejection, which the Worker can see in the Status section of the web site. When you include a feedback message with the rejection, it helps the Worker understand why the assignment was rejected, and can improve the quality of the results the Worker submits in the future.   Only the Requester who created the HIT can reject an assignment for the HIT. 
   */
  rejectAssignment(params: MTurk.Types.RejectAssignmentRequest, callback?: (err: AWSError, data: MTurk.Types.RejectAssignmentResponse) => void): Request<MTurk.Types.RejectAssignmentResponse, AWSError>;
  /**
   *  The RejectAssignment operation rejects the results of a completed assignment.   You can include an optional feedback message with the rejection, which the Worker can see in the Status section of the web site. When you include a feedback message with the rejection, it helps the Worker understand why the assignment was rejected, and can improve the quality of the results the Worker submits in the future.   Only the Requester who created the HIT can reject an assignment for the HIT. 
   */
  rejectAssignment(callback?: (err: AWSError, data: MTurk.Types.RejectAssignmentResponse) => void): Request<MTurk.Types.RejectAssignmentResponse, AWSError>;
  /**
   *  The RejectQualificationRequest operation rejects a user's request for a Qualification.   You can provide a text message explaining why the request was rejected. The Worker who made the request can see this message.
   */
  rejectQualificationRequest(params: MTurk.Types.RejectQualificationRequestRequest, callback?: (err: AWSError, data: MTurk.Types.RejectQualificationRequestResponse) => void): Request<MTurk.Types.RejectQualificationRequestResponse, AWSError>;
  /**
   *  The RejectQualificationRequest operation rejects a user's request for a Qualification.   You can provide a text message explaining why the request was rejected. The Worker who made the request can see this message.
   */
  rejectQualificationRequest(callback?: (err: AWSError, data: MTurk.Types.RejectQualificationRequestResponse) => void): Request<MTurk.Types.RejectQualificationRequestResponse, AWSError>;
  /**
   *  The SendBonus operation issues a payment of money from your account to a Worker. This payment happens separately from the reward you pay to the Worker when you approve the Worker's assignment. The SendBonus operation requires the Worker's ID and the assignment ID as parameters to initiate payment of the bonus. You must include a message that explains the reason for the bonus payment, as the Worker may not be expecting the payment. Amazon Mechanical Turk collects a fee for bonus payments, similar to the HIT listing fee. This operation fails if your account does not have enough funds to pay for both the bonus and the fees. 
   */
  sendBonus(params: MTurk.Types.SendBonusRequest, callback?: (err: AWSError, data: MTurk.Types.SendBonusResponse) => void): Request<MTurk.Types.SendBonusResponse, AWSError>;
  /**
   *  The SendBonus operation issues a payment of money from your account to a Worker. This payment happens separately from the reward you pay to the Worker when you approve the Worker's assignment. The SendBonus operation requires the Worker's ID and the assignment ID as parameters to initiate payment of the bonus. You must include a message that explains the reason for the bonus payment, as the Worker may not be expecting the payment. Amazon Mechanical Turk collects a fee for bonus payments, similar to the HIT listing fee. This operation fails if your account does not have enough funds to pay for both the bonus and the fees. 
   */
  sendBonus(callback?: (err: AWSError, data: MTurk.Types.SendBonusResponse) => void): Request<MTurk.Types.SendBonusResponse, AWSError>;
  /**
   *  The SendTestEventNotification operation causes Amazon Mechanical Turk to send a notification message as if a HIT event occurred, according to the provided notification specification. This allows you to test notifications without setting up notifications for a real HIT type and trying to trigger them using the website. When you call this operation, the service attempts to send the test notification immediately. 
   */
  sendTestEventNotification(params: MTurk.Types.SendTestEventNotificationRequest, callback?: (err: AWSError, data: MTurk.Types.SendTestEventNotificationResponse) => void): Request<MTurk.Types.SendTestEventNotificationResponse, AWSError>;
  /**
   *  The SendTestEventNotification operation causes Amazon Mechanical Turk to send a notification message as if a HIT event occurred, according to the provided notification specification. This allows you to test notifications without setting up notifications for a real HIT type and trying to trigger them using the website. When you call this operation, the service attempts to send the test notification immediately. 
   */
  sendTestEventNotification(callback?: (err: AWSError, data: MTurk.Types.SendTestEventNotificationResponse) => void): Request<MTurk.Types.SendTestEventNotificationResponse, AWSError>;
  /**
   *  The UpdateExpirationForHIT operation allows you update the expiration time of a HIT. If you update it to a time in the past, the HIT will be immediately expired. 
   */
  updateExpirationForHIT(params: MTurk.Types.UpdateExpirationForHITRequest, callback?: (err: AWSError, data: MTurk.Types.UpdateExpirationForHITResponse) => void): Request<MTurk.Types.UpdateExpirationForHITResponse, AWSError>;
  /**
   *  The UpdateExpirationForHIT operation allows you update the expiration time of a HIT. If you update it to a time in the past, the HIT will be immediately expired. 
   */
  updateExpirationForHIT(callback?: (err: AWSError, data: MTurk.Types.UpdateExpirationForHITResponse) => void): Request<MTurk.Types.UpdateExpirationForHITResponse, AWSError>;
  /**
   *  The UpdateHITReviewStatus operation updates the status of a HIT. If the status is Reviewable, this operation can update the status to Reviewing, or it can revert a Reviewing HIT back to the Reviewable status. 
   */
  updateHITReviewStatus(params: MTurk.Types.UpdateHITReviewStatusRequest, callback?: (err: AWSError, data: MTurk.Types.UpdateHITReviewStatusResponse) => void): Request<MTurk.Types.UpdateHITReviewStatusResponse, AWSError>;
  /**
   *  The UpdateHITReviewStatus operation updates the status of a HIT. If the status is Reviewable, this operation can update the status to Reviewing, or it can revert a Reviewing HIT back to the Reviewable status. 
   */
  updateHITReviewStatus(callback?: (err: AWSError, data: MTurk.Types.UpdateHITReviewStatusResponse) => void): Request<MTurk.Types.UpdateHITReviewStatusResponse, AWSError>;
  /**
   *  The UpdateHITTypeOfHIT operation allows you to change the HITType properties of a HIT. This operation disassociates the HIT from its old HITType properties and associates it with the new HITType properties. The HIT takes on the properties of the new HITType in place of the old ones. 
   */
  updateHITTypeOfHIT(params: MTurk.Types.UpdateHITTypeOfHITRequest, callback?: (err: AWSError, data: MTurk.Types.UpdateHITTypeOfHITResponse) => void): Request<MTurk.Types.UpdateHITTypeOfHITResponse, AWSError>;
  /**
   *  The UpdateHITTypeOfHIT operation allows you to change the HITType properties of a HIT. This operation disassociates the HIT from its old HITType properties and associates it with the new HITType properties. The HIT takes on the properties of the new HITType in place of the old ones. 
   */
  updateHITTypeOfHIT(callback?: (err: AWSError, data: MTurk.Types.UpdateHITTypeOfHITResponse) => void): Request<MTurk.Types.UpdateHITTypeOfHITResponse, AWSError>;
  /**
   *  The UpdateNotificationSettings operation creates, updates, disables or re-enables notifications for a HIT type. If you call the UpdateNotificationSettings operation for a HIT type that already has a notification specification, the operation replaces the old specification with a new one. You can call the UpdateNotificationSettings operation to enable or disable notifications for the HIT type, without having to modify the notification specification itself by providing updates to the Active status without specifying a new notification specification. To change the Active status of a HIT type's notifications, the HIT type must already have a notification specification, or one must be provided in the same call to UpdateNotificationSettings. 
   */
  updateNotificationSettings(params: MTurk.Types.UpdateNotificationSettingsRequest, callback?: (err: AWSError, data: MTurk.Types.UpdateNotificationSettingsResponse) => void): Request<MTurk.Types.UpdateNotificationSettingsResponse, AWSError>;
  /**
   *  The UpdateNotificationSettings operation creates, updates, disables or re-enables notifications for a HIT type. If you call the UpdateNotificationSettings operation for a HIT type that already has a notification specification, the operation replaces the old specification with a new one. You can call the UpdateNotificationSettings operation to enable or disable notifications for the HIT type, without having to modify the notification specification itself by providing updates to the Active status without specifying a new notification specification. To change the Active status of a HIT type's notifications, the HIT type must already have a notification specification, or one must be provided in the same call to UpdateNotificationSettings. 
   */
  updateNotificationSettings(callback?: (err: AWSError, data: MTurk.Types.UpdateNotificationSettingsResponse) => void): Request<MTurk.Types.UpdateNotificationSettingsResponse, AWSError>;
  /**
   *  The UpdateQualificationType operation modifies the attributes of an existing Qualification type, which is represented by a QualificationType data structure. Only the owner of a Qualification type can modify its attributes.   Most attributes of a Qualification type can be changed after the type has been created. However, the Name and Keywords fields cannot be modified. The RetryDelayInSeconds parameter can be modified or added to change the delay or to enable retries, but RetryDelayInSeconds cannot be used to disable retries.   You can use this operation to update the test for a Qualification type. The test is updated based on the values specified for the Test, TestDurationInSeconds and AnswerKey parameters. All three parameters specify the updated test. If you are updating the test for a type, you must specify the Test and TestDurationInSeconds parameters. The AnswerKey parameter is optional; omitting it specifies that the updated test does not have an answer key.   If you omit the Test parameter, the test for the Qualification type is unchanged. There is no way to remove a test from a Qualification type that has one. If the type already has a test, you cannot update it to be AutoGranted. If the Qualification type does not have a test and one is provided by an update, the type will henceforth have a test.   If you want to update the test duration or answer key for an existing test without changing the questions, you must specify a Test parameter with the original questions, along with the updated values.   If you provide an updated Test but no AnswerKey, the new test will not have an answer key. Requests for such Qualifications must be granted manually.   You can also update the AutoGranted and AutoGrantedValue attributes of the Qualification type.
   */
  updateQualificationType(params: MTurk.Types.UpdateQualificationTypeRequest, callback?: (err: AWSError, data: MTurk.Types.UpdateQualificationTypeResponse) => void): Request<MTurk.Types.UpdateQualificationTypeResponse, AWSError>;
  /**
   *  The UpdateQualificationType operation modifies the attributes of an existing Qualification type, which is represented by a QualificationType data structure. Only the owner of a Qualification type can modify its attributes.   Most attributes of a Qualification type can be changed after the type has been created. However, the Name and Keywords fields cannot be modified. The RetryDelayInSeconds parameter can be modified or added to change the delay or to enable retries, but RetryDelayInSeconds cannot be used to disable retries.   You can use this operation to update the test for a Qualification type. The test is updated based on the values specified for the Test, TestDurationInSeconds and AnswerKey parameters. All three parameters specify the updated test. If you are updating the test for a type, you must specify the Test and TestDurationInSeconds parameters. The AnswerKey parameter is optional; omitting it specifies that the updated test does not have an answer key.   If you omit the Test parameter, the test for the Qualification type is unchanged. There is no way to remove a test from a Qualification type that has one. If the type already has a test, you cannot update it to be AutoGranted. If the Qualification type does not have a test and one is provided by an update, the type will henceforth have a test.   If you want to update the test duration or answer key for an existing test without changing the questions, you must specify a Test parameter with the original questions, along with the updated values.   If you provide an updated Test but no AnswerKey, the new test will not have an answer key. Requests for such Qualifications must be granted manually.   You can also update the AutoGranted and AutoGrantedValue attributes of the Qualification type.
   */
  updateQualificationType(callback?: (err: AWSError, data: MTurk.Types.UpdateQualificationTypeResponse) => void): Request<MTurk.Types.UpdateQualificationTypeResponse, AWSError>;
}
declare namespace MTurk {
  export interface AcceptQualificationRequestRequest {
    /**
     * The ID of the Qualification request, as returned by the GetQualificationRequests operation.
     */
    QualificationRequestId: String;
    /**
     *  The value of the Qualification. You can omit this value if you are using the presence or absence of the Qualification as the basis for a HIT requirement. 
     */
    IntegerValue?: Integer;
  }
  export interface AcceptQualificationRequestResponse {
  }
  export interface ApproveAssignmentRequest {
    /**
     *  The ID of the assignment. The assignment must correspond to a HIT created by the Requester. 
     */
    AssignmentId: EntityId;
    /**
     *  A message for the Worker, which the Worker can see in the Status section of the web site. 
     */
    RequesterFeedback?: String;
    /**
     *  A flag indicating that an assignment should be approved even if it was previously rejected. Defaults to False. 
     */
    OverrideRejection?: Boolean;
  }
  export interface ApproveAssignmentResponse {
  }
  export interface Assignment {
    /**
     *  A unique identifier for the assignment.
     */
    AssignmentId?: EntityId;
    /**
     *  The ID of the Worker who accepted the HIT.
     */
    WorkerId?: CustomerId;
    /**
     *  The ID of the HIT.
     */
    HITId?: EntityId;
    /**
     *  The status of the assignment.
     */
    AssignmentStatus?: AssignmentStatus;
    /**
     *  If results have been submitted, AutoApprovalTime is the date and time the results of the assignment results are considered Approved automatically if they have not already been explicitly approved or rejected by the Requester. This value is derived from the auto-approval delay specified by the Requester in the HIT. This value is omitted from the assignment if the Worker has not yet submitted results.
     */
    AutoApprovalTime?: Timestamp;
    /**
     *  The date and time the Worker accepted the assignment.
     */
    AcceptTime?: Timestamp;
    /**
     *  If the Worker has submitted results, SubmitTime is the date and time the assignment was submitted. This value is omitted from the assignment if the Worker has not yet submitted results.
     */
    SubmitTime?: Timestamp;
    /**
     *  If the Worker has submitted results and the Requester has approved the results, ApprovalTime is the date and time the Requester approved the results. This value is omitted from the assignment if the Requester has not yet approved the results.
     */
    ApprovalTime?: Timestamp;
    /**
     *  If the Worker has submitted results and the Requester has rejected the results, RejectionTime is the date and time the Requester rejected the results.
     */
    RejectionTime?: Timestamp;
    /**
     *  The date and time of the deadline for the assignment. This value is derived from the deadline specification for the HIT and the date and time the Worker accepted the HIT.
     */
    Deadline?: Timestamp;
    /**
     *  The Worker's answers submitted for the HIT contained in a QuestionFormAnswers document, if the Worker provides an answer. If the Worker does not provide any answers, Answer may contain a QuestionFormAnswers document, or Answer may be empty.
     */
    Answer?: String;
    /**
     *  The feedback string included with the call to the ApproveAssignment operation or the RejectAssignment operation, if the Requester approved or rejected the assignment and specified feedback.
     */
    RequesterFeedback?: String;
  }
  export type AssignmentList = Assignment[];
  export type AssignmentStatus = "Submitted"|"Approved"|"Rejected"|string;
  export type AssignmentStatusList = AssignmentStatus[];
  export interface AssociateQualificationWithWorkerRequest {
    /**
     * The ID of the Qualification type to use for the assigned Qualification.
     */
    QualificationTypeId: EntityId;
    /**
     *  The ID of the Worker to whom the Qualification is being assigned. Worker IDs are included with submitted HIT assignments and Qualification requests. 
     */
    WorkerId: CustomerId;
    /**
     * The value of the Qualification to assign.
     */
    IntegerValue?: Integer;
    /**
     *  Specifies whether to send a notification email message to the Worker saying that the qualification was assigned to the Worker. Note: this is true by default. 
     */
    SendNotification?: Boolean;
  }
  export interface AssociateQualificationWithWorkerResponse {
  }
  export interface BonusPayment {
    /**
     * The ID of the Worker to whom the bonus was paid.
     */
    WorkerId?: CustomerId;
    BonusAmount?: CurrencyAmount;
    /**
     * The ID of the assignment associated with this bonus payment.
     */
    AssignmentId?: EntityId;
    /**
     * The Reason text given when the bonus was granted, if any.
     */
    Reason?: String;
    /**
     * The date and time of when the bonus was granted.
     */
    GrantTime?: Timestamp;
  }
  export type BonusPaymentList = BonusPayment[];
  export type Boolean = boolean;
  export type Comparator = "LessThan"|"LessThanOrEqualTo"|"GreaterThan"|"GreaterThanOrEqualTo"|"EqualTo"|"NotEqualTo"|"Exists"|"DoesNotExist"|"In"|"NotIn"|string;
  export type CountryParameters = string;
  export interface CreateAdditionalAssignmentsForHITRequest {
    /**
     * The ID of the HIT to extend.
     */
    HITId: EntityId;
    /**
     * The number of additional assignments to request for this HIT.
     */
    NumberOfAdditionalAssignments: Integer;
    /**
     *  A unique identifier for this request, which allows you to retry the call on error without extending the HIT multiple times. This is useful in cases such as network timeouts where it is unclear whether or not the call succeeded on the server. If the extend HIT already exists in the system from a previous call using the same UniqueRequestToken, subsequent calls will return an error with a message containing the request ID. 
     */
    UniqueRequestToken?: IdempotencyToken;
  }
  export interface CreateAdditionalAssignmentsForHITResponse {
  }
  export interface CreateHITRequest {
    /**
     *  The number of times the HIT can be accepted and completed before the HIT becomes unavailable. 
     */
    MaxAssignments?: Integer;
    /**
     *  The number of seconds after an assignment for the HIT has been submitted, after which the assignment is considered Approved automatically unless the Requester explicitly rejects it. 
     */
    AutoApprovalDelayInSeconds?: Long;
    /**
     *  An amount of time, in seconds, after which the HIT is no longer available for users to accept. After the lifetime of the HIT elapses, the HIT no longer appears in HIT searches, even if not all of the assignments for the HIT have been accepted. 
     */
    LifetimeInSeconds: Long;
    /**
     *  The amount of time, in seconds, that a Worker has to complete the HIT after accepting it. If a Worker does not complete the assignment within the specified duration, the assignment is considered abandoned. If the HIT is still active (that is, its lifetime has not elapsed), the assignment becomes available for other users to find and accept. 
     */
    AssignmentDurationInSeconds: Long;
    /**
     *  The amount of money the Requester will pay a Worker for successfully completing the HIT. 
     */
    Reward: CurrencyAmount;
    /**
     *  The title of the HIT. A title should be short and descriptive about the kind of task the HIT contains. On the Amazon Mechanical Turk web site, the HIT title appears in search results, and everywhere the HIT is mentioned. 
     */
    Title: String;
    /**
     *  One or more words or phrases that describe the HIT, separated by commas. These words are used in searches to find HITs. 
     */
    Keywords?: String;
    /**
     *  A general description of the HIT. A description includes detailed information about the kind of task the HIT contains. On the Amazon Mechanical Turk web site, the HIT description appears in the expanded view of search results, and in the HIT and assignment screens. A good description gives the user enough information to evaluate the HIT before accepting it. 
     */
    Description: String;
    /**
     *  The data the person completing the HIT uses to produce the results.   Constraints: Must be a QuestionForm data structure, an ExternalQuestion data structure, or an HTMLQuestion data structure. The XML question data must not be larger than 64 kilobytes (65,535 bytes) in size, including whitespace.  Either a Question parameter or a HITLayoutId parameter must be provided.
     */
    Question?: String;
    /**
     *  An arbitrary data field. The RequesterAnnotation parameter lets your application attach arbitrary data to the HIT for tracking purposes. For example, this parameter could be an identifier internal to the Requester's application that corresponds with the HIT.   The RequesterAnnotation parameter for a HIT is only visible to the Requester who created the HIT. It is not shown to the Worker, or any other Requester.   The RequesterAnnotation parameter may be different for each HIT you submit. It does not affect how your HITs are grouped. 
     */
    RequesterAnnotation?: String;
    /**
     *  A condition that a Worker's Qualifications must meet before the Worker is allowed to accept and complete the HIT. 
     */
    QualificationRequirements?: QualificationRequirementList;
    /**
     *  A unique identifier for this request which allows you to retry the call on error without creating duplicate HITs. This is useful in cases such as network timeouts where it is unclear whether or not the call succeeded on the server. If the HIT already exists in the system from a previous call using the same UniqueRequestToken, subsequent calls will return a AWS.MechanicalTurk.HitAlreadyExists error with a message containing the HITId.    Note: It is your responsibility to ensure uniqueness of the token. The unique token expires after 24 hours. Subsequent calls using the same UniqueRequestToken made after the 24 hour limit could create duplicate HITs.  
     */
    UniqueRequestToken?: IdempotencyToken;
    /**
     *  The Assignment-level Review Policy applies to the assignments under the HIT. You can specify for Mechanical Turk to take various actions based on the policy. 
     */
    AssignmentReviewPolicy?: ReviewPolicy;
    /**
     *  The HIT-level Review Policy applies to the HIT. You can specify for Mechanical Turk to take various actions based on the policy. 
     */
    HITReviewPolicy?: ReviewPolicy;
    /**
     *  The HITLayoutId allows you to use a pre-existing HIT design with placeholder values and create an additional HIT by providing those values as HITLayoutParameters.   Constraints: Either a Question parameter or a HITLayoutId parameter must be provided. 
     */
    HITLayoutId?: EntityId;
    /**
     *  If the HITLayoutId is provided, any placeholder values must be filled in with values using the HITLayoutParameter structure. For more information, see HITLayout. 
     */
    HITLayoutParameters?: HITLayoutParameterList;
  }
  export interface CreateHITResponse {
    /**
     *  Contains the newly created HIT data. For a description of the HIT data structure as it appears in responses, see the HIT Data Structure documentation. 
     */
    HIT?: HIT;
  }
  export interface CreateHITTypeRequest {
    /**
     *  The number of seconds after an assignment for the HIT has been submitted, after which the assignment is considered Approved automatically unless the Requester explicitly rejects it. 
     */
    AutoApprovalDelayInSeconds?: Long;
    /**
     *  The amount of time, in seconds, that a Worker has to complete the HIT after accepting it. If a Worker does not complete the assignment within the specified duration, the assignment is considered abandoned. If the HIT is still active (that is, its lifetime has not elapsed), the assignment becomes available for other users to find and accept. 
     */
    AssignmentDurationInSeconds: Long;
    /**
     *  The amount of money the Requester will pay a Worker for successfully completing the HIT. 
     */
    Reward: CurrencyAmount;
    /**
     *  The title of the HIT. A title should be short and descriptive about the kind of task the HIT contains. On the Amazon Mechanical Turk web site, the HIT title appears in search results, and everywhere the HIT is mentioned. 
     */
    Title: String;
    /**
     *  One or more words or phrases that describe the HIT, separated by commas. These words are used in searches to find HITs. 
     */
    Keywords?: String;
    /**
     *  A general description of the HIT. A description includes detailed information about the kind of task the HIT contains. On the Amazon Mechanical Turk web site, the HIT description appears in the expanded view of search results, and in the HIT and assignment screens. A good description gives the user enough information to evaluate the HIT before accepting it. 
     */
    Description: String;
    /**
     *  A condition that a Worker's Qualifications must meet before the Worker is allowed to accept and complete the HIT. 
     */
    QualificationRequirements?: QualificationRequirementList;
  }
  export interface CreateHITTypeResponse {
    /**
     *  The ID of the newly registered HIT type.
     */
    HITTypeId?: EntityId;
  }
  export interface CreateHITWithHITTypeRequest {
    /**
     * The HIT type ID you want to create this HIT with.
     */
    HITTypeId: EntityId;
    /**
     *  The number of times the HIT can be accepted and completed before the HIT becomes unavailable. 
     */
    MaxAssignments?: Integer;
    /**
     *  An amount of time, in seconds, after which the HIT is no longer available for users to accept. After the lifetime of the HIT elapses, the HIT no longer appears in HIT searches, even if not all of the assignments for the HIT have been accepted. 
     */
    LifetimeInSeconds: Long;
    /**
     *  The data the person completing the HIT uses to produce the results.   Constraints: Must be a QuestionForm data structure, an ExternalQuestion data structure, or an HTMLQuestion data structure. The XML question data must not be larger than 64 kilobytes (65,535 bytes) in size, including whitespace.  Either a Question parameter or a HITLayoutId parameter must be provided.
     */
    Question?: String;
    /**
     *  An arbitrary data field. The RequesterAnnotation parameter lets your application attach arbitrary data to the HIT for tracking purposes. For example, this parameter could be an identifier internal to the Requester's application that corresponds with the HIT.   The RequesterAnnotation parameter for a HIT is only visible to the Requester who created the HIT. It is not shown to the Worker, or any other Requester.   The RequesterAnnotation parameter may be different for each HIT you submit. It does not affect how your HITs are grouped. 
     */
    RequesterAnnotation?: String;
    /**
     *  A unique identifier for this request which allows you to retry the call on error without creating duplicate HITs. This is useful in cases such as network timeouts where it is unclear whether or not the call succeeded on the server. If the HIT already exists in the system from a previous call using the same UniqueRequestToken, subsequent calls will return a AWS.MechanicalTurk.HitAlreadyExists error with a message containing the HITId.    Note: It is your responsibility to ensure uniqueness of the token. The unique token expires after 24 hours. Subsequent calls using the same UniqueRequestToken made after the 24 hour limit could create duplicate HITs.  
     */
    UniqueRequestToken?: IdempotencyToken;
    /**
     *  The Assignment-level Review Policy applies to the assignments under the HIT. You can specify for Mechanical Turk to take various actions based on the policy. 
     */
    AssignmentReviewPolicy?: ReviewPolicy;
    /**
     *  The HIT-level Review Policy applies to the HIT. You can specify for Mechanical Turk to take various actions based on the policy. 
     */
    HITReviewPolicy?: ReviewPolicy;
    /**
     *  The HITLayoutId allows you to use a pre-existing HIT design with placeholder values and create an additional HIT by providing those values as HITLayoutParameters.   Constraints: Either a Question parameter or a HITLayoutId parameter must be provided. 
     */
    HITLayoutId?: EntityId;
    /**
     *  If the HITLayoutId is provided, any placeholder values must be filled in with values using the HITLayoutParameter structure. For more information, see HITLayout. 
     */
    HITLayoutParameters?: HITLayoutParameterList;
  }
  export interface CreateHITWithHITTypeResponse {
    /**
     *  Contains the newly created HIT data. For a description of the HIT data structure as it appears in responses, see the HIT Data Structure documentation. 
     */
    HIT?: HIT;
  }
  export interface CreateQualificationTypeRequest {
    /**
     *  The name you give to the Qualification type. The type name is used to represent the Qualification to Workers, and to find the type using a Qualification type search. It must be unique across all of your Qualification types.
     */
    Name: String;
    /**
     * One or more words or phrases that describe the Qualification type, separated by commas. The keywords of a type make the type easier to find during a search.
     */
    Keywords?: String;
    /**
     * A long description for the Qualification type. On the Amazon Mechanical Turk website, the long description is displayed when a Worker examines a Qualification type.
     */
    Description: String;
    /**
     * The initial status of the Qualification type. Constraints: Valid values are: Active | Inactive
     */
    QualificationTypeStatus: QualificationTypeStatus;
    /**
     * The number of seconds that a Worker must wait after requesting a Qualification of the Qualification type before the worker can retry the Qualification request. Constraints: None. If not specified, retries are disabled and Workers can request a Qualification of this type only once, even if the Worker has not been granted the Qualification. It is not possible to disable retries for a Qualification type after it has been created with retries enabled. If you want to disable retries, you must delete existing retry-enabled Qualification type and then create a new Qualification type with retries disabled.
     */
    RetryDelayInSeconds?: Long;
    /**
     *  The questions for the Qualification test a Worker must answer correctly to obtain a Qualification of this type. If this parameter is specified, TestDurationInSeconds must also be specified.  Constraints: Must not be longer than 65535 bytes. Must be a QuestionForm data structure. This parameter cannot be specified if AutoGranted is true. Constraints: None. If not specified, the Worker may request the Qualification without answering any questions.
     */
    Test?: String;
    /**
     * The answers to the Qualification test specified in the Test parameter, in the form of an AnswerKey data structure. Constraints: Must not be longer than 65535 bytes. Constraints: None. If not specified, you must process Qualification requests manually.
     */
    AnswerKey?: String;
    /**
     * The number of seconds the Worker has to complete the Qualification test, starting from the time the Worker requests the Qualification.
     */
    TestDurationInSeconds?: Long;
    /**
     * Specifies whether requests for the Qualification type are granted immediately, without prompting the Worker with a Qualification test. Constraints: If the Test parameter is specified, this parameter cannot be true.
     */
    AutoGranted?: Boolean;
    /**
     * The Qualification value to use for automatically granted Qualifications. This parameter is used only if the AutoGranted parameter is true.
     */
    AutoGrantedValue?: Integer;
  }
  export interface CreateQualificationTypeResponse {
    /**
     * The created Qualification type, returned as a QualificationType data structure.
     */
    QualificationType?: QualificationType;
  }
  export interface CreateWorkerBlockRequest {
    /**
     * The ID of the Worker to block.
     */
    WorkerId: CustomerId;
    /**
     * A message explaining the reason for blocking the Worker. This parameter enables you to keep track of your Workers. The Worker does not see this message.
     */
    Reason: String;
  }
  export interface CreateWorkerBlockResponse {
  }
  export type CurrencyAmount = string;
  export type CustomerId = string;
  export type CustomerIdList = CustomerId[];
  export interface DeleteHITRequest {
    /**
     * The ID of the HIT to be deleted.
     */
    HITId: EntityId;
  }
  export interface DeleteHITResponse {
  }
  export interface DeleteQualificationTypeRequest {
    /**
     * The ID of the QualificationType to dispose.
     */
    QualificationTypeId: EntityId;
  }
  export interface DeleteQualificationTypeResponse {
  }
  export interface DeleteWorkerBlockRequest {
    /**
     * The ID of the Worker to unblock.
     */
    WorkerId: CustomerId;
    /**
     * A message that explains the reason for unblocking the Worker. The Worker does not see this message.
     */
    Reason?: String;
  }
  export interface DeleteWorkerBlockResponse {
  }
  export interface DisassociateQualificationFromWorkerRequest {
    /**
     * The ID of the Worker who possesses the Qualification to be revoked.
     */
    WorkerId: CustomerId;
    /**
     * The ID of the Qualification type of the Qualification to be revoked.
     */
    QualificationTypeId: EntityId;
    /**
     * A text message that explains why the Qualification was revoked. The user who had the Qualification sees this message.
     */
    Reason?: String;
  }
  export interface DisassociateQualificationFromWorkerResponse {
  }
  export type EntityId = string;
  export type EventType = "AssignmentAccepted"|"AssignmentAbandoned"|"AssignmentReturned"|"AssignmentSubmitted"|"AssignmentRejected"|"AssignmentApproved"|"HITCreated"|"HITExpired"|"HITReviewable"|"HITExtended"|"HITDisposed"|"Ping"|string;
  export type EventTypeList = EventType[];
  export type ExceptionMessage = string;
  export interface GetAccountBalanceRequest {
  }
  export interface GetAccountBalanceResponse {
    AvailableBalance?: CurrencyAmount;
    OnHoldBalance?: CurrencyAmount;
  }
  export interface GetAssignmentRequest {
    /**
     * The ID of the Assignment to be retrieved.
     */
    AssignmentId: EntityId;
  }
  export interface GetAssignmentResponse {
    /**
     *  The assignment. The response includes one Assignment element. 
     */
    Assignment?: Assignment;
    /**
     *  The HIT associated with this assignment. The response includes one HIT element.
     */
    HIT?: HIT;
  }
  export interface GetFileUploadURLRequest {
    /**
     * The ID of the assignment that contains the question with a FileUploadAnswer.
     */
    AssignmentId: EntityId;
    /**
     * The identifier of the question with a FileUploadAnswer, as specified in the QuestionForm of the HIT.
     */
    QuestionIdentifier: String;
  }
  export interface GetFileUploadURLResponse {
    /**
     *  A temporary URL for the file that the Worker uploaded for the answer. 
     */
    FileUploadURL?: String;
  }
  export interface GetHITRequest {
    /**
     * The ID of the HIT to be retrieved.
     */
    HITId: EntityId;
  }
  export interface GetHITResponse {
    /**
     *  Contains the requested HIT data.
     */
    HIT?: HIT;
  }
  export interface GetQualificationScoreRequest {
    /**
     * The ID of the QualificationType.
     */
    QualificationTypeId: EntityId;
    /**
     * The ID of the Worker whose Qualification is being updated.
     */
    WorkerId: CustomerId;
  }
  export interface GetQualificationScoreResponse {
    /**
     *  The Qualification data structure of the Qualification assigned to a user, including the Qualification type and the value (score). 
     */
    Qualification?: Qualification;
  }
  export interface GetQualificationTypeRequest {
    /**
     * The ID of the QualificationType.
     */
    QualificationTypeId: EntityId;
  }
  export interface GetQualificationTypeResponse {
    /**
     *  The returned Qualification Type
     */
    QualificationType?: QualificationType;
  }
  export interface HIT {
    /**
     *  A unique identifier for the HIT.
     */
    HITId?: EntityId;
    /**
     * The ID of the HIT type of this HIT
     */
    HITTypeId?: EntityId;
    /**
     *  The ID of the HIT Group of this HIT.
     */
    HITGroupId?: EntityId;
    /**
     *  The ID of the HIT Layout of this HIT.
     */
    HITLayoutId?: EntityId;
    /**
     *  The date and time the HIT was created.
     */
    CreationTime?: Timestamp;
    /**
     *  The title of the HIT.
     */
    Title?: String;
    /**
     *  A general description of the HIT.
     */
    Description?: String;
    /**
     *  The data the Worker completing the HIT uses produce the results. This is either either a QuestionForm, HTMLQuestion or an ExternalQuestion data structure.
     */
    Question?: String;
    /**
     *  One or more words or phrases that describe the HIT, separated by commas. Search terms similar to the keywords of a HIT are more likely to have the HIT in the search results.
     */
    Keywords?: String;
    /**
     * The status of the HIT and its assignments. Valid Values are Assignable | Unassignable | Reviewable | Reviewing | Disposed. 
     */
    HITStatus?: HITStatus;
    /**
     * The number of times the HIT can be accepted and completed before the HIT becomes unavailable. 
     */
    MaxAssignments?: Integer;
    Reward?: CurrencyAmount;
    /**
     * The amount of time, in seconds, after the Worker submits an assignment for the HIT that the results are automatically approved by Amazon Mechanical Turk. This is the amount of time the Requester has to reject an assignment submitted by a Worker before the assignment is auto-approved and the Worker is paid. 
     */
    AutoApprovalDelayInSeconds?: Long;
    /**
     * The date and time the HIT expires.
     */
    Expiration?: Timestamp;
    /**
     *  The length of time, in seconds, that a Worker has to complete the HIT after accepting it.
     */
    AssignmentDurationInSeconds?: Long;
    /**
     *  An arbitrary data field the Requester who created the HIT can use. This field is visible only to the creator of the HIT.
     */
    RequesterAnnotation?: String;
    /**
     *  A condition that a Worker's Qualifications must meet in order to accept the HIT. A HIT can have between zero and ten Qualification requirements. All requirements must be met by a Worker's Qualifications for the Worker to accept the HIT.
     */
    QualificationRequirements?: QualificationRequirementList;
    /**
     *  Indicates the review status of the HIT. Valid Values are NotReviewed | MarkedForReview | ReviewedAppropriate | ReviewedInappropriate.
     */
    HITReviewStatus?: HITReviewStatus;
    /**
     *  The number of assignments for this HIT that are being previewed or have been accepted by Workers, but have not yet been submitted, returned, or abandoned.
     */
    NumberOfAssignmentsPending?: Integer;
    /**
     *  The number of assignments for this HIT that are available for Workers to accept.
     */
    NumberOfAssignmentsAvailable?: Integer;
    /**
     *  The number of assignments for this HIT that have been approved or rejected.
     */
    NumberOfAssignmentsCompleted?: Integer;
  }
  export interface HITLayoutParameter {
    /**
     *  The name of the parameter in the HITLayout. 
     */
    Name: String;
    /**
     * The value substituted for the parameter referenced in the HITLayout. 
     */
    Value: String;
  }
  export type HITLayoutParameterList = HITLayoutParameter[];
  export type HITList = HIT[];
  export type HITReviewStatus = "NotReviewed"|"MarkedForReview"|"ReviewedAppropriate"|"ReviewedInappropriate"|string;
  export type HITStatus = "Assignable"|"Unassignable"|"Reviewable"|"Reviewing"|"Disposed"|string;
  export type IdempotencyToken = string;
  export type Integer = number;
  export type IntegerList = Integer[];
  export interface ListAssignmentsForHITRequest {
    /**
     * The ID of the HIT.
     */
    HITId: EntityId;
    /**
     * Pagination token
     */
    NextToken?: PaginationToken;
    MaxResults?: ResultSize;
    /**
     * The status of the assignments to return: Submitted | Approved | Rejected
     */
    AssignmentStatuses?: AssignmentStatusList;
  }
  export interface ListAssignmentsForHITResponse {
    NextToken?: PaginationToken;
    /**
     *  The number of assignments on the page in the filtered results list, equivalent to the number of assignments returned by this call.
     */
    NumResults?: Integer;
    /**
     *  The collection of Assignment data structures returned by this call.
     */
    Assignments?: AssignmentList;
  }
  export interface ListBonusPaymentsRequest {
    /**
     * The ID of the HIT associated with the bonus payments to retrieve. If not specified, all bonus payments for all assignments for the given HIT are returned. Either the HITId parameter or the AssignmentId parameter must be specified
     */
    HITId?: EntityId;
    /**
     * The ID of the assignment associated with the bonus payments to retrieve. If specified, only bonus payments for the given assignment are returned. Either the HITId parameter or the AssignmentId parameter must be specified
     */
    AssignmentId?: EntityId;
    /**
     * Pagination token
     */
    NextToken?: PaginationToken;
    MaxResults?: ResultSize;
  }
  export interface ListBonusPaymentsResponse {
    /**
     * The number of bonus payments on this page in the filtered results list, equivalent to the number of bonus payments being returned by this call. 
     */
    NumResults?: Integer;
    NextToken?: PaginationToken;
    /**
     * A successful request to the ListBonusPayments operation returns a list of BonusPayment objects. 
     */
    BonusPayments?: BonusPaymentList;
  }
  export interface ListHITsForQualificationTypeRequest {
    /**
     *  The ID of the Qualification type to use when querying HITs. 
     */
    QualificationTypeId: EntityId;
    /**
     * Pagination Token
     */
    NextToken?: PaginationToken;
    /**
     *  Limit the number of results returned. 
     */
    MaxResults?: ResultSize;
  }
  export interface ListHITsForQualificationTypeResponse {
    NextToken?: PaginationToken;
    /**
     *  The number of HITs on this page in the filtered results list, equivalent to the number of HITs being returned by this call. 
     */
    NumResults?: Integer;
    /**
     *  The list of HIT elements returned by the query.
     */
    HITs?: HITList;
  }
  export interface ListHITsRequest {
    /**
     * Pagination token
     */
    NextToken?: PaginationToken;
    MaxResults?: ResultSize;
  }
  export interface ListHITsResponse {
    NextToken?: PaginationToken;
    /**
     * The number of HITs on this page in the filtered results list, equivalent to the number of HITs being returned by this call.
     */
    NumResults?: Integer;
    /**
     *  The list of HIT elements returned by the query.
     */
    HITs?: HITList;
  }
  export interface ListQualificationRequestsRequest {
    /**
     * The ID of the QualificationType.
     */
    QualificationTypeId?: EntityId;
    NextToken?: PaginationToken;
    /**
     *  The maximum number of results to return in a single call. 
     */
    MaxResults?: ResultSize;
  }
  export interface ListQualificationRequestsResponse {
    /**
     * The number of Qualification requests on this page in the filtered results list, equivalent to the number of Qualification requests being returned by this call.
     */
    NumResults?: Integer;
    NextToken?: PaginationToken;
    /**
     * The Qualification request. The response includes one QualificationRequest element for each Qualification request returned by the query.
     */
    QualificationRequests?: QualificationRequestList;
  }
  export interface ListQualificationTypesRequest {
    /**
     *  A text query against all of the searchable attributes of Qualification types. 
     */
    Query?: String;
    /**
     * Specifies that only Qualification types that a user can request through the Amazon Mechanical Turk web site, such as by taking a Qualification test, are returned as results of the search. Some Qualification types, such as those assigned automatically by the system, cannot be requested directly by users. If false, all Qualification types, including those managed by the system, are considered. Valid values are True | False. 
     */
    MustBeRequestable: Boolean;
    /**
     *  Specifies that only Qualification types that the Requester created are returned. If false, the operation returns all Qualification types. 
     */
    MustBeOwnedByCaller?: Boolean;
    NextToken?: PaginationToken;
    /**
     *  The maximum number of results to return in a single call. 
     */
    MaxResults?: ResultSize;
  }
  export interface ListQualificationTypesResponse {
    /**
     *  The number of Qualification types on this page in the filtered results list, equivalent to the number of types this operation returns. 
     */
    NumResults?: Integer;
    NextToken?: PaginationToken;
    /**
     *  The list of QualificationType elements returned by the query. 
     */
    QualificationTypes?: QualificationTypeList;
  }
  export interface ListReviewPolicyResultsForHITRequest {
    /**
     * The unique identifier of the HIT to retrieve review results for.
     */
    HITId: EntityId;
    /**
     *  The Policy Level(s) to retrieve review results for - HIT or Assignment. If omitted, the default behavior is to retrieve all data for both policy levels. For a list of all the described policies, see Review Policies. 
     */
    PolicyLevels?: ReviewPolicyLevelList;
    /**
     *  Specify if the operation should retrieve a list of the actions taken executing the Review Policies and their outcomes. 
     */
    RetrieveActions?: Boolean;
    /**
     *  Specify if the operation should retrieve a list of the results computed by the Review Policies. 
     */
    RetrieveResults?: Boolean;
    /**
     * Pagination token
     */
    NextToken?: PaginationToken;
    /**
     * Limit the number of results returned.
     */
    MaxResults?: ResultSize;
  }
  export interface ListReviewPolicyResultsForHITResponse {
    /**
     * The HITId of the HIT for which results have been returned.
     */
    HITId?: EntityId;
    /**
     *  The name of the Assignment-level Review Policy. This contains only the PolicyName element. 
     */
    AssignmentReviewPolicy?: ReviewPolicy;
    /**
     * The name of the HIT-level Review Policy. This contains only the PolicyName element.
     */
    HITReviewPolicy?: ReviewPolicy;
    /**
     *  Contains both ReviewResult and ReviewAction elements for an Assignment. 
     */
    AssignmentReviewReport?: ReviewReport;
    /**
     * Contains both ReviewResult and ReviewAction elements for a particular HIT. 
     */
    HITReviewReport?: ReviewReport;
    NextToken?: PaginationToken;
  }
  export interface ListReviewableHITsRequest {
    /**
     *  The ID of the HIT type of the HITs to consider for the query. If not specified, all HITs for the Reviewer are considered 
     */
    HITTypeId?: EntityId;
    /**
     *  Can be either Reviewable or Reviewing. Reviewable is the default value. 
     */
    Status?: ReviewableHITStatus;
    /**
     * Pagination Token
     */
    NextToken?: PaginationToken;
    /**
     *  Limit the number of results returned. 
     */
    MaxResults?: ResultSize;
  }
  export interface ListReviewableHITsResponse {
    NextToken?: PaginationToken;
    /**
     *  The number of HITs on this page in the filtered results list, equivalent to the number of HITs being returned by this call. 
     */
    NumResults?: Integer;
    /**
     *  The list of HIT elements returned by the query.
     */
    HITs?: HITList;
  }
  export interface ListWorkerBlocksRequest {
    /**
     * Pagination token
     */
    NextToken?: PaginationToken;
    MaxResults?: ResultSize;
  }
  export interface ListWorkerBlocksResponse {
    NextToken?: PaginationToken;
    /**
     *  The number of assignments on the page in the filtered results list, equivalent to the number of assignments returned by this call.
     */
    NumResults?: Integer;
    /**
     *  The list of WorkerBlocks, containing the collection of Worker IDs and reasons for blocking.
     */
    WorkerBlocks?: WorkerBlockList;
  }
  export interface ListWorkersWithQualificationTypeRequest {
    /**
     * The ID of the Qualification type of the Qualifications to return.
     */
    QualificationTypeId: EntityId;
    /**
     *  The status of the Qualifications to return. Can be Granted | Revoked. 
     */
    Status?: QualificationStatus;
    /**
     * Pagination Token
     */
    NextToken?: PaginationToken;
    /**
     *  Limit the number of results returned. 
     */
    MaxResults?: ResultSize;
  }
  export interface ListWorkersWithQualificationTypeResponse {
    NextToken?: PaginationToken;
    /**
     *  The number of Qualifications on this page in the filtered results list, equivalent to the number of Qualifications being returned by this call.
     */
    NumResults?: Integer;
    /**
     *  The list of Qualification elements returned by this call. 
     */
    Qualifications?: QualificationList;
  }
  export interface Locale {
    /**
     *  The country of the locale. Must be a valid ISO 3166 country code. For example, the code US refers to the United States of America. 
     */
    Country: CountryParameters;
    /**
     * The state or subdivision of the locale. A valid ISO 3166-2 subdivision code. For example, the code WA refers to the state of Washington.
     */
    Subdivision?: CountryParameters;
  }
  export type LocaleList = Locale[];
  export type Long = number;
  export interface NotificationSpecification {
    /**
     *  The target for notification messages. The Destination’s format is determined by the specified Transport:    When Transport is Email, the Destination is your email address.   When Transport is SQS, the Destination is your queue URL.   When Transport is SNS, the Destination is the ARN of your topic.  
     */
    Destination: String;
    /**
     *  The method Amazon Mechanical Turk uses to send the notification. Valid Values: Email | SQS | SNS. 
     */
    Transport: NotificationTransport;
    /**
     * The version of the Notification API to use. Valid value is 2006-05-05.
     */
    Version: String;
    /**
     *  The list of events that should cause notifications to be sent. Valid Values: AssignmentAccepted | AssignmentAbandoned | AssignmentReturned | AssignmentSubmitted | AssignmentRejected | AssignmentApproved | HITCreated | HITExtended | HITDisposed | HITReviewable | HITExpired | Ping. The Ping event is only valid for the SendTestEventNotification operation. 
     */
    EventTypes: EventTypeList;
  }
  export type NotificationTransport = "Email"|"SQS"|"SNS"|string;
  export type NotifyWorkersFailureCode = "SoftFailure"|"HardFailure"|string;
  export interface NotifyWorkersFailureStatus {
    /**
     *  Encoded value for the failure type. 
     */
    NotifyWorkersFailureCode?: NotifyWorkersFailureCode;
    /**
     *  A message detailing the reason the Worker could not be notified. 
     */
    NotifyWorkersFailureMessage?: String;
    /**
     *  The ID of the Worker.
     */
    WorkerId?: CustomerId;
  }
  export type NotifyWorkersFailureStatusList = NotifyWorkersFailureStatus[];
  export interface NotifyWorkersRequest {
    /**
     * The subject line of the email message to send. Can include up to 200 characters.
     */
    Subject: String;
    /**
     * The text of the email message to send. Can include up to 4,096 characters
     */
    MessageText: String;
    /**
     * A list of Worker IDs you wish to notify. You can notify upto 100 Workers at a time.
     */
    WorkerIds: CustomerIdList;
  }
  export interface NotifyWorkersResponse {
    /**
     *  When MTurk sends notifications to the list of Workers, it returns back any failures it encounters in this list of NotifyWorkersFailureStatus objects. 
     */
    NotifyWorkersFailureStatuses?: NotifyWorkersFailureStatusList;
  }
  export type PaginationToken = string;
  export interface ParameterMapEntry {
    /**
     *  The QuestionID from the HIT that is used to identify which question requires Mechanical Turk to score as part of the ScoreMyKnownAnswers/2011-09-01 Review Policy. 
     */
    Key?: String;
    /**
     *  The list of answers to the question specified in the MapEntry Key element. The Worker must match all values in order for the answer to be scored correctly. 
     */
    Values?: StringList;
  }
  export type ParameterMapEntryList = ParameterMapEntry[];
  export interface PolicyParameter {
    /**
     *  Name of the parameter from the list of Review Polices. 
     */
    Key?: String;
    /**
     *  The list of values of the Parameter
     */
    Values?: StringList;
    /**
     *  List of ParameterMapEntry objects. 
     */
    MapEntries?: ParameterMapEntryList;
  }
  export type PolicyParameterList = PolicyParameter[];
  export interface Qualification {
    /**
     *  The ID of the Qualification type for the Qualification.
     */
    QualificationTypeId?: EntityId;
    /**
     *  The ID of the Worker who possesses the Qualification. 
     */
    WorkerId?: CustomerId;
    /**
     *  The date and time the Qualification was granted to the Worker. If the Worker's Qualification was revoked, and then re-granted based on a new Qualification request, GrantTime is the date and time of the last call to the AcceptQualificationRequest operation.
     */
    GrantTime?: Timestamp;
    /**
     *  The value (score) of the Qualification, if the Qualification has an integer value.
     */
    IntegerValue?: Integer;
    LocaleValue?: Locale;
    /**
     *  The status of the Qualification. Valid values are Granted | Revoked.
     */
    Status?: QualificationStatus;
  }
  export type QualificationList = Qualification[];
  export interface QualificationRequest {
    /**
     * The ID of the Qualification request, a unique identifier generated when the request was submitted. 
     */
    QualificationRequestId?: String;
    /**
     *  The ID of the Qualification type the Worker is requesting, as returned by the CreateQualificationType operation. 
     */
    QualificationTypeId?: EntityId;
    /**
     *  The ID of the Worker requesting the Qualification.
     */
    WorkerId?: CustomerId;
    /**
     *  The contents of the Qualification test that was presented to the Worker, if the type has a test and the Worker has submitted answers. This value is identical to the QuestionForm associated with the Qualification type at the time the Worker requests the Qualification.
     */
    Test?: String;
    /**
     *  The Worker's answers for the Qualification type's test contained in a QuestionFormAnswers document, if the type has a test and the Worker has submitted answers. If the Worker does not provide any answers, Answer may be empty. 
     */
    Answer?: String;
    /**
     * The date and time the Qualification request had a status of Submitted. This is either the time the Worker submitted answers for a Qualification test, or the time the Worker requested the Qualification if the Qualification type does not have a test. 
     */
    SubmitTime?: Timestamp;
  }
  export type QualificationRequestList = QualificationRequest[];
  export interface QualificationRequirement {
    /**
     *  The ID of the Qualification type for the requirement.
     */
    QualificationTypeId: String;
    /**
     * The kind of comparison to make against a Qualification's value. You can compare a Qualification's value to an IntegerValue to see if it is LessThan, LessThanOrEqualTo, GreaterThan, GreaterThanOrEqualTo, EqualTo, or NotEqualTo the IntegerValue. You can compare it to a LocaleValue to see if it is EqualTo, or NotEqualTo the LocaleValue. You can check to see if the value is In or NotIn a set of IntegerValue or LocaleValue values. Lastly, a Qualification requirement can also test if a Qualification Exists or DoesNotExist in the user's profile, regardless of its value. 
     */
    Comparator: Comparator;
    /**
     *  The integer value to compare against the Qualification's value. IntegerValue must not be present if Comparator is Exists or DoesNotExist. IntegerValue can only be used if the Qualification type has an integer value; it cannot be used with the Worker_Locale QualificationType ID. When performing a set comparison by using the In or the NotIn comparator, you can use up to 15 IntegerValue elements in a QualificationRequirement data structure. 
     */
    IntegerValues?: IntegerList;
    /**
     *  The locale value to compare against the Qualification's value. The local value must be a valid ISO 3166 country code or supports ISO 3166-2 subdivisions. LocaleValue can only be used with a Worker_Locale QualificationType ID. LocaleValue can only be used with the EqualTo, NotEqualTo, In, and NotIn comparators. You must only use a single LocaleValue element when using the EqualTo or NotEqualTo comparators. When performing a set comparison by using the In or the NotIn comparator, you can use up to 30 LocaleValue elements in a QualificationRequirement data structure. 
     */
    LocaleValues?: LocaleList;
    /**
     *  If true, the question data for the HIT will not be shown when a Worker whose Qualifications do not meet this requirement tries to preview the HIT. That is, a Worker's Qualifications must meet all of the requirements for which RequiredToPreview is true in order to preview the HIT. If a Worker meets all of the requirements where RequiredToPreview is true (or if there are no such requirements), but does not meet all of the requirements for the HIT, the Worker will be allowed to preview the HIT's question data, but will not be allowed to accept and complete the HIT. The default is false. 
     */
    RequiredToPreview?: Boolean;
  }
  export type QualificationRequirementList = QualificationRequirement[];
  export type QualificationStatus = "Granted"|"Revoked"|string;
  export interface QualificationType {
    /**
     *  A unique identifier for the Qualification type. A Qualification type is given a Qualification type ID when you call the CreateQualificationType operation. 
     */
    QualificationTypeId?: EntityId;
    /**
     *  The date and time the Qualification type was created. 
     */
    CreationTime?: Timestamp;
    /**
     *  The name of the Qualification type. The type name is used to identify the type, and to find the type using a Qualification type search. 
     */
    Name?: String;
    /**
     *  A long description for the Qualification type. 
     */
    Description?: String;
    /**
     *  One or more words or phrases that describe theQualification type, separated by commas. The Keywords make the type easier to find using a search. 
     */
    Keywords?: String;
    /**
     *  The status of the Qualification type. A Qualification type's status determines if users can apply to receive a Qualification of this type, and if HITs can be created with requirements based on this type. Valid values are Active | Inactive. 
     */
    QualificationTypeStatus?: QualificationTypeStatus;
    /**
     *  The questions for a Qualification test associated with this Qualification type that a user can take to obtain a Qualification of this type. This parameter must be specified if AnswerKey is present. A Qualification type cannot have both a specified Test parameter and an AutoGranted value of true. 
     */
    Test?: String;
    /**
     *  The amount of time, in seconds, given to a Worker to complete the Qualification test, beginning from the time the Worker requests the Qualification. 
     */
    TestDurationInSeconds?: Long;
    /**
     * The answers to the Qualification test specified in the Test parameter.
     */
    AnswerKey?: String;
    /**
     *  The amount of time, in seconds, Workers must wait after taking the Qualification test before they can take it again. Workers can take a Qualification test multiple times if they were not granted the Qualification from a previous attempt, or if the test offers a gradient score and they want a better score. If not specified, retries are disabled and Workers can request a Qualification only once. 
     */
    RetryDelayInSeconds?: Long;
    /**
     *  Specifies whether the Qualification type is one that a user can request through the Amazon Mechanical Turk web site, such as by taking a Qualification test. This value is False for Qualifications assigned automatically by the system. Valid values are True | False. 
     */
    IsRequestable?: Boolean;
    /**
     * Specifies that requests for the Qualification type are granted immediately, without prompting the Worker with a Qualification test. Valid values are True | False.
     */
    AutoGranted?: Boolean;
    /**
     *  The Qualification integer value to use for automatically granted Qualifications, if AutoGranted is true. This is 1 by default. 
     */
    AutoGrantedValue?: Integer;
  }
  export type QualificationTypeList = QualificationType[];
  export type QualificationTypeStatus = "Active"|"Inactive"|string;
  export interface RejectAssignmentRequest {
    /**
     *  The ID of the assignment. The assignment must correspond to a HIT created by the Requester. 
     */
    AssignmentId: EntityId;
    /**
     *  A message for the Worker, which the Worker can see in the Status section of the web site. 
     */
    RequesterFeedback: String;
  }
  export interface RejectAssignmentResponse {
  }
  export interface RejectQualificationRequestRequest {
    /**
     *  The ID of the Qualification request, as returned by the ListQualificationRequests operation. 
     */
    QualificationRequestId: String;
    /**
     * A text message explaining why the request was rejected, to be shown to the Worker who made the request.
     */
    Reason?: String;
  }
  export interface RejectQualificationRequestResponse {
  }
  export type ResultSize = number;
  export interface ReviewActionDetail {
    /**
     * The unique identifier for the action.
     */
    ActionId?: EntityId;
    /**
     *  The nature of the action itself. The Review Policy is responsible for examining the HIT and Assignments, emitting results, and deciding which other actions will be necessary. 
     */
    ActionName?: String;
    /**
     *  The specific HITId or AssignmentID targeted by the action.
     */
    TargetId?: EntityId;
    /**
     *  The type of object in TargetId.
     */
    TargetType?: String;
    /**
     *  The current disposition of the action: INTENDED, SUCCEEDED, FAILED, or CANCELLED. 
     */
    Status?: ReviewActionStatus;
    /**
     *  The date when the action was completed.
     */
    CompleteTime?: Timestamp;
    /**
     *  A description of the outcome of the review.
     */
    Result?: String;
    /**
     *  Present only when the Results have a FAILED Status.
     */
    ErrorCode?: String;
  }
  export type ReviewActionDetailList = ReviewActionDetail[];
  export type ReviewActionStatus = "Intended"|"Succeeded"|"Failed"|"Cancelled"|string;
  export interface ReviewPolicy {
    /**
     *  Name of a Review Policy: SimplePlurality/2011-09-01 or ScoreMyKnownAnswers/2011-09-01 
     */
    PolicyName: String;
    /**
     * Name of the parameter from the Review policy.
     */
    Parameters?: PolicyParameterList;
  }
  export type ReviewPolicyLevel = "Assignment"|"HIT"|string;
  export type ReviewPolicyLevelList = ReviewPolicyLevel[];
  export interface ReviewReport {
    /**
     *  A list of ReviewResults objects for each action specified in the Review Policy. 
     */
    ReviewResults?: ReviewResultDetailList;
    /**
     *  A list of ReviewAction objects for each action specified in the Review Policy. 
     */
    ReviewActions?: ReviewActionDetailList;
  }
  export interface ReviewResultDetail {
    /**
     *  A unique identifier of the Review action result. 
     */
    ActionId?: EntityId;
    /**
     * The HITID or AssignmentId about which this result was taken. Note that HIT-level Review Policies will often emit results about both the HIT itself and its Assignments, while Assignment-level review policies generally only emit results about the Assignment itself. 
     */
    SubjectId?: EntityId;
    /**
     *  The type of the object from the SubjectId field.
     */
    SubjectType?: String;
    /**
     *  Specifies the QuestionId the result is describing. Depending on whether the TargetType is a HIT or Assignment this results could specify multiple values. If TargetType is HIT and QuestionId is absent, then the result describes results of the HIT, including the HIT agreement score. If ObjectType is Assignment and QuestionId is absent, then the result describes the Worker's performance on the HIT. 
     */
    QuestionId?: EntityId;
    /**
     *  Key identifies the particular piece of reviewed information. 
     */
    Key?: String;
    /**
     *  The values of Key provided by the review policies you have selected. 
     */
    Value?: String;
  }
  export type ReviewResultDetailList = ReviewResultDetail[];
  export type ReviewableHITStatus = "Reviewable"|"Reviewing"|string;
  export interface SendBonusRequest {
    /**
     * The ID of the Worker being paid the bonus.
     */
    WorkerId: CustomerId;
    /**
     *  The Bonus amount is a US Dollar amount specified using a string (for example, "5" represents $5.00 USD and "101.42" represents $101.42 USD). Do not include currency symbols or currency codes. 
     */
    BonusAmount: CurrencyAmount;
    /**
     * The ID of the assignment for which this bonus is paid.
     */
    AssignmentId: EntityId;
    /**
     * A message that explains the reason for the bonus payment. The Worker receiving the bonus can see this message.
     */
    Reason: String;
    /**
     * A unique identifier for this request, which allows you to retry the call on error without granting multiple bonuses. This is useful in cases such as network timeouts where it is unclear whether or not the call succeeded on the server. If the bonus already exists in the system from a previous call using the same UniqueRequestToken, subsequent calls will return an error with a message containing the request ID.
     */
    UniqueRequestToken?: IdempotencyToken;
  }
  export interface SendBonusResponse {
  }
  export interface SendTestEventNotificationRequest {
    /**
     *  The notification specification to test. This value is identical to the value you would provide to the UpdateNotificationSettings operation when you establish the notification specification for a HIT type. 
     */
    Notification: NotificationSpecification;
    /**
     *  The event to simulate to test the notification specification. This event is included in the test message even if the notification specification does not include the event type. The notification specification does not filter out the test event. 
     */
    TestEventType: EventType;
  }
  export interface SendTestEventNotificationResponse {
  }
  export type String = string;
  export type StringList = String[];
  export type Timestamp = Date;
  export type TurkErrorCode = string;
  export interface UpdateExpirationForHITRequest {
    /**
     *  The HIT to update. 
     */
    HITId: EntityId;
    /**
     *  The date and time at which you want the HIT to expire 
     */
    ExpireAt: Timestamp;
  }
  export interface UpdateExpirationForHITResponse {
  }
  export interface UpdateHITReviewStatusRequest {
    /**
     *  The ID of the HIT to update. 
     */
    HITId: EntityId;
    /**
     *  Specifies how to update the HIT status. Default is False.     Setting this to false will only transition a HIT from Reviewable to Reviewing     Setting this to true will only transition a HIT from Reviewing to Reviewable   
     */
    Revert?: Boolean;
  }
  export interface UpdateHITReviewStatusResponse {
  }
  export interface UpdateHITTypeOfHITRequest {
    /**
     * The HIT to update.
     */
    HITId: EntityId;
    /**
     * The ID of the new HIT type.
     */
    HITTypeId: EntityId;
  }
  export interface UpdateHITTypeOfHITResponse {
  }
  export interface UpdateNotificationSettingsRequest {
    /**
     *  The ID of the HIT type whose notification specification is being updated. 
     */
    HITTypeId: EntityId;
    /**
     *  The notification specification for the HIT type. 
     */
    Notification?: NotificationSpecification;
    /**
     *  Specifies whether notifications are sent for HITs of this HIT type, according to the notification specification. You must specify either the Notification parameter or the Active parameter for the call to UpdateNotificationSettings to succeed. 
     */
    Active?: Boolean;
  }
  export interface UpdateNotificationSettingsResponse {
  }
  export interface UpdateQualificationTypeRequest {
    /**
     * The ID of the Qualification type to update.
     */
    QualificationTypeId: EntityId;
    /**
     * The new description of the Qualification type.
     */
    Description?: String;
    /**
     * The new status of the Qualification type - Active | Inactive
     */
    QualificationTypeStatus?: QualificationTypeStatus;
    /**
     * The questions for the Qualification test a Worker must answer correctly to obtain a Qualification of this type. If this parameter is specified, TestDurationInSeconds must also be specified. Constraints: Must not be longer than 65535 bytes. Must be a QuestionForm data structure. This parameter cannot be specified if AutoGranted is true. Constraints: None. If not specified, the Worker may request the Qualification without answering any questions.
     */
    Test?: String;
    /**
     * The answers to the Qualification test specified in the Test parameter, in the form of an AnswerKey data structure.
     */
    AnswerKey?: String;
    /**
     * The number of seconds the Worker has to complete the Qualification test, starting from the time the Worker requests the Qualification.
     */
    TestDurationInSeconds?: Long;
    /**
     * The amount of time, in seconds, that Workers must wait after requesting a Qualification of the specified Qualification type before they can retry the Qualification request. It is not possible to disable retries for a Qualification type after it has been created with retries enabled. If you want to disable retries, you must dispose of the existing retry-enabled Qualification type using DisposeQualificationType and then create a new Qualification type with retries disabled using CreateQualificationType.
     */
    RetryDelayInSeconds?: Long;
    /**
     * Specifies whether requests for the Qualification type are granted immediately, without prompting the Worker with a Qualification test. Constraints: If the Test parameter is specified, this parameter cannot be true.
     */
    AutoGranted?: Boolean;
    /**
     * The Qualification value to use for automatically granted Qualifications. This parameter is used only if the AutoGranted parameter is true.
     */
    AutoGrantedValue?: Integer;
  }
  export interface UpdateQualificationTypeResponse {
    /**
     *  Contains a QualificationType data structure.
     */
    QualificationType?: QualificationType;
  }
  export interface WorkerBlock {
    /**
     *  The ID of the Worker who accepted the HIT.
     */
    WorkerId?: CustomerId;
    /**
     *  A message explaining the reason the Worker was blocked. 
     */
    Reason?: String;
  }
  export type WorkerBlockList = WorkerBlock[];
  /**
   * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
   */
  export type apiVersion = "2017-01-17"|"latest"|string;
  export interface ClientApiVersions {
    /**
     * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
     */
    apiVersion?: apiVersion;
  }
  export type ClientConfiguration = ServiceConfigurationOptions & ClientApiVersions;
  /**
   * Contains interfaces for use with the MTurk client.
   */
  export import Types = MTurk;
}
export = MTurk;
