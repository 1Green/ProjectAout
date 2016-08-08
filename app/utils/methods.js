export function read(obj, path) {
  return path.split('.').reduce((acc, val) => {
    if (!acc) return undefined;
    else return acc[val];
  }, obj);
}