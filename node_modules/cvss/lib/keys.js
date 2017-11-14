var base = exports.base = ['AV', 'AC', 'PR', 'UI', 'S', 'C', 'I', 'A'];
exports.exploitability = base.slice(0, 4);
exports.impact = base.slice(5);
exports.temporal = ['E', 'RL', 'RC'];
var environmental = exports.environmental = ['CR', 'IR', 'AR', 'MAV', 'MAC', 'MPR', 'MUI', 'MS', 'MC', 'MI', 'MA'];
exports.envRequirements = environmental.slice(0, 3);
exports.envExploitability = environmental.slice(3, 7);
exports.envImpact = environmental.slice(-3);