import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import { createUser } from "./api/api";
import Button from "./Button";
import Input from "./Input";
import Loading from "./Loading";
import { withAlert } from "./providers/withProvider";

const AddUser = ({ setAlert}) => {
  const [userName, setUserName] = useState();
  const [userEmail, setUserEmail] = useState();
  const [userNumber, setUserNumber] = useState();
  const [password, setPassword] = useState();
  const [status, setStatus] = useState();
  const [loading, setLoading] = useState(false);

    // console.log("props add user")
  const userDataObject = {
    name: userName,
    email: userEmail,
    phone: userNumber,
    password: password,
  };

  const callUserAddApi = (event) => {
    setLoading(true);
    event.preventDefault();
    createUser(userDataObject).then((res) => {
      setStatus(res);
      setLoading(false);
        // alert("User created");
        setAlert({type:'success',message:'welcome user data add'})
    });
  };
  if (loading) {
    return <Loading info={"Adding User Data..."} />;
  }

  if (status) {
    return <Navigate replace to={"/user"} />;
  }
  return (
    <>
      <div className="flex flex-col w-min-full h-min-full mt-12 ">
        <form
          onSubmit={callUserAddApi}
          autoComplete="on"
          className="flex flex-col gap-3 items-center justify-center"
        >
          <Input
            placeholder={"input user name"}
            type={"text"}
            required={true}
            onChange={(e) => setUserName(e.target.value)}
          />
          <Input
            placeholder={"input email"}
            type={"email"}
            required={true}
            onChange={(e) => setUserEmail(e.target.value)}
          />
          <Input
            placeholder={"input number"}
            required={true}
            type={"number"}
            onChange={(e) => setUserNumber(e.target.value)}
          />
          <Input
            placeholder={"input password"}
            required={true}
            type={"password"}
            onChange={(e) => setPassword(e.target.value)}
          />

          <Button>add</Button>
        </form>
      </div>
    </>
  );
};

export default withAlert(AddUser) ;
