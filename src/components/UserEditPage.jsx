import axios from "axios";
import React, { useEffect, useState } from "react";
import { Navigate} from "react-router-dom";
import Input from "./Input";
import Loading from "./Loading";
import Button from "./Button";

const UserEditPage = (props) => {
  const [updateUserName, setUpdateUserName] = useState();
  const [updateUserEmail, setUpdateUserEmail] = useState();
  const [updateUserNumber, setUpdateUserNumber] = useState();
  const [updatePassword, setUpdatePassword] = useState();
  const [updatedata, setUpdateData] = useState();
    const [userStatus, setUserStates] = useState(false);
    const [loading, setLoading] = useState(true);
  

  useEffect(() => {
    const id = localStorage.getItem("id");
    axios
      .get(`https://openuserapi.onrender.com/admin/user/${id}`)
      .then((res) => {
    
        let data = res.data.list;
        setUpdateUserName(data.name);
        setUpdateUserEmail(data.email);
        setUpdateUserNumber(data.phone);
        setUpdatePassword(data.password);
          setUpdateData(data);
          setLoading(false)
        
      });
  }, []);

  const userUpdate = (event) => {
      event.preventDefault();
      setLoading(true)
    if (updatedata) {
      const updateObject = {
        id: updatedata._id,
        name: updateUserName,
        email: updateUserEmail,
        phone: updateUserNumber,
        password: updatePassword,
        status: updatedata.status,
      };
      
      const options = {
        headers: { "Content-Type": "application/json" },
      };
      axios
        .put(
          "https://openuserapi.onrender.com/admin/update-user",
          updateObject,
          options
        )
          .then((res) => {
              setUserStates(res.status)
              setLoading(false)
              alert("Profile update")
          });
      
    }
    };
    
    if (loading) {
        return <Loading/>
    }
  return (
      <>
          <div className="flex flex-col w-min-full h-min-full mt-12 ">
      <form onSubmit={userUpdate} autoComplete="on" className="flex flex-col gap-3 items-center justify-center">
        <Input
          placeholder={"input user name"}
          type={"text"}
          required={true}
          onChange={(e) => setUpdateUserName(e.target.value)}
          value={updateUserName}
        />
        <Input
          placeholder={"input email"}
          type={"email"}
          required={true}
          onChange={(e) => setUpdateUserEmail(e.target.value)}
          value={updateUserEmail}
        />
        <Input
          placeholder={"input number"}
          required={true}
          type={"number"}
          onChange={(e) => setUpdateUserNumber(e.target.value)}
          value={updateUserNumber}
        />
        <Input
          placeholder={"password"}
          required={true}
          type={"password"}
          onChange={(e) => setUpdatePassword(e.target.value)}
        />

              <Button>{userStatus && <Navigate replace to={"/user"}></Navigate> }update</Button>
              </form>
              </div>
    </>
  );
};

export default UserEditPage;
