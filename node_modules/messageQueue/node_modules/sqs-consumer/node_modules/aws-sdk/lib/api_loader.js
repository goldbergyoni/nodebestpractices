function apiLoader(svc, version) {
  if (!apiLoader.services.hasOwnProperty(svc)) {
    throw new Error('InvalidService: Failed to load api for ' + svc);
  }
  return apiLoader.services[svc][version];
}

/**
 * This member of AWS.apiLoader is private, but changing it will necessitate a
 * change to ../scripts/services-table-generator.ts
 */
apiLoader.services = {};
module.exports = apiLoader;
