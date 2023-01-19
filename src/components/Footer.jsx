import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from '@mui/icons-material/GitHub';

const Footer = () => {
  return (
    <>
      <div className="flex flex-col bg-red-200 mt-10">
        <div className=" flex gap-16 justify-center pt-5 pb-5 max-[500px]:gap-5 ">
          <a
            href="https://www.facebook.com/pankaj.k.singh.77398"
            target={"_blank"}
         className=' shadow-black shadow-sm transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300'  >
            <FacebookIcon style={{ fontSize: "30px" }} />
          </a>
          <a
            href="https://www.instagram.com/blacklisted_munda_24/"
            target={"_blank"}  className=' shadow-black shadow-sm transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300'
          >
            <InstagramIcon style={{ fontSize: "30px" }} />
          </a>
          <a
            href="https://www.linkedin.com/in/pankaj-kumar-09864624a/"
            target={"_blank"}  className=' shadow-black shadow-sm transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300'
          >
            <LinkedInIcon style={{ fontSize: "30px" }} />
          </a>
          <a href="https://twitter.com/pankajs55247126" target={"_blank"}  className=' shadow-black shadow-sm transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300'>
            <TwitterIcon style={{ fontSize: "30px" }} />
          </a>
          <a href="https://github.com/pankajklucky" target={"_blank"}  className=' shadow-black shadow-sm transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300'>
            <GitHubIcon style={{ fontSize: "30px" }} />
          </a>
        </div>
        <div className="flex justify-center p-5 mb-5">
          <h2 className="font-bold text-gray-500 text-xl">copyright &copy;2022 all rights&reg;</h2>
        </div>
      </div>
    </>
  );
};

export default Footer;