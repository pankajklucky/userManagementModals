import React, { useEffect, useState } from "react";
import { getUserData } from "./api/api";
import Loading from "./Loading";
import Dropdown from "./Dropdown";

const User = () => {
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getUserData().then((res) => {
      setUser(res);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return <Loading info={"Loading Data...."} />;
  }
  return (
    <>
      <div className="flex justify-center px-4 py-4">
        <table className="table-auto">
          <thead className=" mr-20">
            <tr>
              <th className=" text-2xl ">Table-No</th>
              <th className=" text-2xl">Name</th>
              <th className=" text-2xl">Email</th>
              <th className=" text-2xl">Phone</th>
              <th className=" text-2xl">Added-on</th>
              <th className=" text-2xl">Status</th>
              <th className="text-2xl">Action</th>
            </tr>
          </thead>
          <tbody className="mx-10">
            {user &&
              user.map((item,i) => (
                <>
                      <tr className="" key={i}>
                          <td className="text-center font-bold text-indigo-600">{ i+1 }</td>
                    <td className=" font-bold text-red-500 text-center">
                      {item.name}
                    </td>
                    <td className="text-center">{item.email}</td>
                    <td className=" font-bold text-red-500 text-center">
                      {item.phone}
                    </td>
                    <td className="text-center">{item.updatedAt}</td>
                   { (item.status+""=="true")? <td className=" text-green-500 font-semibold text-center">
                   {item.status + ""}
                 </td>: <td className=" text-red-500 font-semibold text-center">
                 {item.status + ""}
               </td>}
                    <td>
                      <button
                        className="text-center" onClick={() => localStorage.setItem("id", item._id)}
                      >
                        <Dropdown />
                      </button>
                    </td>
                  </tr>
                </>
              ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default User;
