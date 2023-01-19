import axios from "axios";

export const createUser = (userobject) => {
  //   const data = JSON.stringify(userobject);
  const options = {
    headers: { "Content-Type": "application/json" },
  };
  return axios
    .post(
      "https://openuserapi.onrender.com/admin/create-user",
      userobject,
      options
    )
    .then((res) => res);
};
export const getUserData = () =>
  axios
    .get("https://openuserapi.onrender.com/admin/users")
    .then((res) => res.data.list);

