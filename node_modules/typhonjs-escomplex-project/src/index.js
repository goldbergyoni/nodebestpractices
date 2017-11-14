import path             from 'path';

import ESComplexProject from './ESComplexProject';

/**
 * Exports the default instance of ESComplexProject which is associated with the main entry in `package.json`.
 * It should be noted that this default instance doesn't accept user options for ESComplexProject initialization.
 */
export default new ESComplexProject(path);
