# @!title Upgrading Notes (1.x to 2.0)

# Upgrading Notes (1.x to 2.0)

This document captures breaking changes from 1.x versions to the first
stable 2.x (non-RC) release of the AWS SDK for JavaScript.

## 1. Automatic Conversion of Base64 and Timestamp Types on Input/Output

The SDK will now automatically encode and decode base64-encoded values, as well
as timestamp values, on the user's behalf. This change affects any operation
where Base64 or Timestamp values were sent by a request or returned in a
response, i.e., `AWS.DynamoDB` and `AWS.SQS`, which allow for Base64
encoded values.

User code that previously did base64 conversion no longer requires this.
Furthermore, values encoded as base64 are now returned as Buffer objects
from server responses (and can also be passed as Buffer input). For
example, the following 1.x `SQS.sendMessage()` parameters:

```javascript
var params = {
  MessageBody: 'Some Message',
  MessageAttributes: {
    attrName: {
      DataType: 'Binary',
      BinaryValue: new Buffer('example text').toString('base64')
    }
  }
};
```

Can be rewritten as:

```javascript
var params = {
  MessageBody: 'Some Message',
  MessageAttributes: {
    attrName: {
      DataType: 'Binary',
      BinaryValue: 'example text'
    }
  }
};
```

And the message will be read as:

```javascript
sqs.receiveMessage(params, function(err, data) {
  // buf is <Buffer 65 78 61 6d 70 6c 65 20 74 65 78 74>
  var buf = data.Messages[0].MessageAttributes.attrName.BinaryValue;
  console.log(buf.toString()); // "example text"
});
```

## 2. Moved response.data.RequestId to response.requestId

The SDK now stores request IDs for all services in a consistent place on the
response object, rather than inside the response.data property. This is to
improve consistency across services that expose request IDs in different ways.
Note that this is also a breaking change that renames the
`response.data.RequestId` property to `response.requestId`
(or `this.requestId` inside of a callback).

To migrate your code, change:

```javascript
svc.operation(params, function (err, data) {
  console.log('Request ID:', data.RequestId);
});
```

To the following:

```javascript
svc.operation(params, function () {
  console.log('Request ID:', this.requestId);
});
```

## 3. Exposed Wrapper Elements 

If you use {AWS.ElastiCache}, {AWS.RDS}, or {AWS.Redshift}, you must now access
the response through the top-level output property in the response for certain
operations. This change corrects the SDK to behave according to documentation
output, which was previously listing this wrapper element.

Example:

`RDS.describeEngineDefaultParameters()` used to return:

```javascript
{ Parameters: [ ... ] }
```

This operation now returns:

```javascript
{ EngineDefaults: { Parameters: [ ... ] } }
```

The full list of affected operations for each service are:

**AWS.ElastiCache**: authorizeCacheSecurityGroupIngress, createCacheCluster,
createCacheParameterGroup, createCacheSecurityGroup, createCacheSubnetGroup,
createReplicationGroup, deleteCacheCluster, deleteReplicationGroup,
describeEngineDefaultParameters, modifyCacheCluster, modifyCacheSubnetGroup,
modifyReplicationGroup, purchaseReservedCacheNodesOffering, rebootCacheCluster,
revokeCacheSecurityGroupIngress

**AWS.RDS**: addSourceIdentifierToSubscription, authorizeDBSecurityGroupIngress,
copyDBSnapshot, createDBInstance, createDBInstanceReadReplica,
createDBParameterGroup, createDBSecurityGroup, createDBSnapshot,
createDBSubnetGroup, createEventSubscription, createOptionGroup,
deleteDBInstance, deleteDBSnapshot, deleteEventSubscription,
describeEngineDefaultParameters, modifyDBInstance, modifyDBSubnetGroup,
modifyEventSubscription, modifyOptionGroup, promoteReadReplica,
purchaseReservedDBInstancesOffering, rebootDBInstance,
removeSourceIdentifierFromSubscription, restoreDBInstanceFromDBSnapshot,
restoreDBInstanceToPointInTime, revokeDBSecurityGroupIngress

**AWS.Redshift**: authorizeClusterSecurityGroupIngress, authorizeSnapshotAccess,
copyClusterSnapshot, createCluster, createClusterParameterGroup,
createClusterSecurityGroup, createClusterSnapshot, createClusterSubnetGroup,
createEventSubscription, createHsmClientCertificate, createHsmConfiguration,
deleteCluster, deleteClusterSnapshot, describeDefaultClusterParameters,
disableSnapshotCopy, enableSnapshotCopy, modifyCluster,
modifyClusterSubnetGroup, modifyEventSubscription,
modifySnapshotCopyRetentionPeriod, purchaseReservedNodeOffering, rebootCluster,
restoreFromClusterSnapshot, revokeClusterSecurityGroupIngress,
revokeSnapshotAccess, rotateEncryptionKey

## 4. Dropped `.Client` and `.client` Properties

The `.Client` and `.client` properties have been removed from Service objects.
If you are using the `.Client` property on a Service class or a `.client`
property on an instance of the service, remove these properties from your code.

Upgrading example:

The following 1.x code:

```
var sts = new AWS.STS.Client();
// or
var sts = new AWS.STS();

sts.client.operation(...);
```

Should be changed to the following:

```
var sts = new AWS.STS();
sts.operation(...)
```
