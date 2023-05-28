export const helpers = {
  isObjectEmpty: (objectName: object) => {
    return JSON.stringify(objectName) === "{}";
  },
};
