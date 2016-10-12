export function read(obj, path) {
  return path.split('.').reduce((acc, val) => {
    if (!acc) return undefined;
    else return acc[val];
  }, obj);
}

Array.prototype.remove = function(from, to) {
  var rest = this.slice((to || from) + 1 || this.length);
  this.length = from < 0 ? this.length + from : from;
  return this.push.apply(this, rest);
};