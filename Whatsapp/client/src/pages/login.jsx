
import { Check_User_Route } from "@/utils/ApiRoutes";
import {auth} from "@/utils/FirebaseConfig";
import axios from "axios";
import Router from "next/router";
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';

import Image from "next/image";
import React from "react"; 
import {FcGoogle } from "react-icons/fc";
function login() {
    const handleLogin =async () => {
      const provider = new GoogleAuthProvider();
      const {user : {displayName:name,email,photoUrl:profileImage}} = await signInWithPopup(auth, provider);
      try{
        if(email){
          const {data}=await axios.post(Check_User_Route,{email})
          if(!data.status){
            Router.push("/onboarding");
          }
        }
      }
      catch(err){
        console.log(err);
      }
    }

  return(
    <div className="flex justify-center bg-login-background h-screen w-screen flex-col gap-5">
      
      <div className="flex justify-center items-centre text-white gap-5">
        
        <Image src="/whatsapp.gif" alt="whatsapp gif" height={100} width={200}></Image>
        <span className="flex justify-centre items-center gap-5 text-4xl">Login to Access</span>
      </div>
      <div className="flex justify-center items-center p-5">
      <button className="flex justify-center items-center gap-5 bg-search-input-container-background rounded-lg p-5 " onClick={handleLogin}>
        <FcGoogle className="text-4xl"/>
        <span className="text-white text-2xl">Login With Google</span>
      </button>
      
      </div>
      
    </div>
  )
}

export default login;
