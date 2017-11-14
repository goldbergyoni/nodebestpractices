import Enum from '../utils/Enum';

export default class ReportType extends Enum {}

ReportType.initEnum(
{
   CLASS: { description: 'Class' },
   CLASS_METHOD: { description: 'Class Method' },
   MODULE_METHOD: { description: 'Module Method' },
   MODULE: { description: 'Module' },
   PROJECT: { description: 'Project' }
});
