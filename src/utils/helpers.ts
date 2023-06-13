export const helpers = {
  isObjectEmpty: (objectName: object) => {
    return JSON.stringify(objectName) === "{}";
  },
  toDateTime: (date: string, time: string): string => {
    // 2023-05-15T00:57:46.762Z
    return `${date}T${time}:00.000Z`;
  },
  validToken: () => {
    const token = localStorage.getItem("token");
    return !!token;
    // if (token) {
    //   const jwtDecoded = jwt_decode<IUser>(token);
    //   const currentDate = new Date();
    //   return (jwtDecoded.exp as number) * 1000 < currentDate.getTime();
    // }
    // return true;
  },
};
