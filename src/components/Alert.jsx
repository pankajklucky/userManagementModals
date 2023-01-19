import React, { useEffect } from "react";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { CgDanger } from "react-icons/cg";
import { withAlert } from "./providers/withProvider";
const Alert = ({ alert, removeAlert }) => {
  useEffect(() => {
    if (alert) {
      const timeOut = setTimeout(removeAlert,3* 1000);
      return () => clearTimeout(timeOut);
    }
  }, [alert]);
  if (!alert) {
    return;
  }

  const { message, type } = alert;
  let color;
  let Icon;

  if (type === "success") {
    color = " bg-green-400";
    Icon = AiOutlineCheckCircle;
  } else if (type === "error") {
    color = " bg-red-400";
    Icon = CgDanger;
  }
  return (
    <>
      <div className="flex items-center justify-center px-4">
        <div
          role="alert"
          id="alert"
          className="transition duration-150 ease-in-out w-full  bg-white  shadow rounded flex  py-4  items-center  justify-between"
        >
          <div className="flex  items-center ">
            <div
              className={
                "mr-3 p-4  rounded md:rounded-tr-none md:rounded-br-none text-white " +
                color
              }
            >
              <Icon />
            </div>
            <p className="mr-2 text-base font-bold text-gray-800   mt-2 md:my-0">
              {type}
            </p>
            <div className="h-1 w-1 bg-gray-300  rounded-full mr-2 hidden xl:block"></div>
            <p className="text-sm   text-gray-600    text-center">
              {message}
            </p>
          </div>
          <div className="flex xl:items-center lg:items-center sm:justify-end justify-center pr-4">
            <button
              class="focus:outline-none focus:text-gray-400 hover:text-gray-400 text-sm cursor-pointer text-gray-600 "
              onClick={removeAlert}
            >
              Dismiss
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default withAlert(Alert);
