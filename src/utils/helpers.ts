import jwtDecode from "jwt-decode";

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
    if (token) {
      const decodedToken = jwtDecode<any>(token);
      if (decodedToken.exp < Date.now() / 1000) {
        localStorage.setItem("token", "");
        localStorage.setItem("userData", "");
        return false;
      }
      return true;
    }
    return false;
  },
};
