import React, { useState } from "react";
import UserInfoShowP from "../../../components/common/modules/UserInfoShowP/UserInfoShowP";
import { useSelector } from "react-redux";
import { CiEdit } from "react-icons/ci";
import UserInfoEdit from "./UserInfoEdit";

function UserInfoShow() {
  const [mode,setMode]=useState(true)

  const fullName = useSelector((state) => state.lName);
  const nationalCode = useSelector((state) => state.nationalCode);
  const email = useSelector((state) => state.email);
  const birthDay = useSelector((state) => state.birthDay);
  const gender = useSelector((state) => state.gender);
  const userAbout = useSelector((state) => state.userAbout);
  const phoneNumber = useSelector((state) => state.phoneNumber);
  const telegramLink = useSelector((state) => state.telegramLink);
  const linkdinProfile = useSelector((state) => state.linkdinProfile);
  const homeAddress = useSelector((state) => state.homeAddress);
  const latitude = useSelector((state) => state.latitude);
  const longitude = useSelector((state) => state.longitude);
  return (
     mode ? (<div className="flex flex-col justify-center bg-[#F6FFFF] p-10 shadow-2xl">
      <div className="flex  text-2xl ">
        <div id="rightside" className=" w-1/2 ">
          <UserInfoShowP title="نام و نام خانوادگی " input={fullName} />
          <UserInfoShowP title="کد ملی  " input={nationalCode} />
          <UserInfoShowP title="ایمیل " input={email} />
          <UserInfoShowP title="تاریخ تولد " input={birthDay} />
          <UserInfoShowP title="جنسیت " input={gender} />
          <UserInfoShowP title="درباره من  " input={userAbout} />
        </div>
        <div class="border-l-2 border-black  mx-8"></div>

        <div id="leftside" className="w-1/2 ">
          <UserInfoShowP title="شماره همراه   " input={phoneNumber} />
          <UserInfoShowP title=" تلگرام " input={telegramLink} />
          <UserInfoShowP title="لینکداین  " input={linkdinProfile} />
          <UserInfoShowP title="آدرس  " input={homeAddress} />
          <UserInfoShowP title="طول جغرافیایی   " input={latitude} />
          <UserInfoShowP title="عرض جغرافیایی   " input={longitude} />
        </div>
      </div>
      <button onClick={()=>setMode(!mode)} className="border my-10 py-2 px-3 flex justify-center rounded-full border-green-500 text-green-900 cursor-pointer">
        ویرایش
        <CiEdit className="text-2xl"/>

      </button>
    </div> ):
    <UserInfoEdit/>

    
    
  );
}

export default UserInfoShow;
