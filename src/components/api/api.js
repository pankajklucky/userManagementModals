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

// export const getId = (id) => {
//     axios.get(`https://openuserapi.onrender.com/admin/user/${id}`).then((res)=>console.log("user id data", res.data.list))
//     console.log("get id ", id,);
    
// };
export const userUpadateData = () => {
   
    
}
