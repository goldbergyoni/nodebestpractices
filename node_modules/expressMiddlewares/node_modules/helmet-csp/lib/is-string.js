module.exports = function isString (value) {
  return Object.prototype.toString.call(value) === '[object String]'
}
