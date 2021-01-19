export function findAndDelete(arr, toDelete) {
  return arr.filter((element) => element.id !== toDelete.id);
}
export function findAndUpdate(arr, toUpdate) {
  return arr.map((element) => {
    if (element.id === toUpdate.id) {
      return toUpdate;
    } else {
      return element;
    }
  });
}
export function sortArr(arr) {
  return [...arr].sort(function (a, b) {
    if (a.name < b.name) {
      return -1;
    }
    if (a.name > b.name) {
      return 1;
    }
    return 0;
  });
}
