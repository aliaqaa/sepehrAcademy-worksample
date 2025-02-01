import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import fallbackimg from "../../../public/images/post/kakablack.jpg";
import PanelItems from "../../mock/PanelItems";
import useGetProfile from "../../hooks/useGetProfile";
import { ScaleLoader } from "react-spinners";
import Dashboard from "./Dashboard/Dashboard";
function Panel() {
  const [activePanel, setActivePanel] = useState(1);
  const profilePic = useSelector((state) => state.userImage?.puctureAddress);
  const profileName = useSelector((state) => state.lName);
console.log(profilePic)
  const { profile, loading, error } = useGetProfile();

  if (loading) {
    return (
      <div className="container flex content-center items-center align-top">
        <ScaleLoader color="#36D7B7" className="m-auto" loading={loading} />
      </div>
    ); // Display a loading message while fetching
  }

  if (error) {
    return <div>Error: {error}</div>; // Display an error message if something went wrong
  }

  const onClickHandler = (id) => {
    setActivePanel(id); // Update activePanel based on the clicked button
  };

  const renderComponent = () => {
    switch (activePanel) {
      case "1":
        return <Dashboard />;
      case "2":
        return <UserInfo />;
      case "3":
        return <MyCourses />;
      case "4":
        return <ReservedCourses />;
      case "5":
        return <MyComments />;
      case "6":
        return <Favorites />;
      case "7":
        return <SecuritySettings />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="border w-4/5 h-4/5 m-auto flex rounded-xl">
      <div
        id="rightside"
        className="w-1/4 flex flex-col bg-primaryCyan rounded-s-xl"
      >
        <img
          src={profilePic ? profilePic : fallbackimg}
          alt="user"
          className="rounded-full mt-5 m-auto w-1/3 border-4 border-orange-500"
        />
        <span className="flex justify-center">
          <h1>{profileName}</h1>
          <h1>خوش آمدید</h1>
        </span>
        <hr />
        <div className="p-2 pl-0 flex flex-col">
          {PanelItems.map((item) => {
            const IconComponent = item.icon; // Get the icon component dynamically
            return (
              <button
                key={item.id}
                className={`rounded-s-xl my-1 flex items-center justify-start gap-x-3 p-2 ${
                  activePanel === item.id
                    ? "bg-white text-black border-l-4 border-orange-500 font-extrabold text-2xl"
                    : "bg-transparent"
                }`}
                onClick={() => onClickHandler(item.id)}
              >
                <item.icon className="icon" />
                <span>{item.title}</span>
              </button>
            );
          })}
          <button cl></button>
        </div>
      </div>
      <div id="leftside" className="w-3/4 p-4">
        {renderComponent()}
      </div>
    </div>
  );
}

export default Panel;

// Placeholder components for each panel item
const UserInfo = () => <div>اطلاعات کاربری</div>;
const MyCourses = () => <div>دوره های من</div>;
const ReservedCourses = () => <div>دوره های رزرو شده</div>;
const MyComments = () => <div>دیدگاه های من</div>;
const Favorites = () => <div>علاقه مندی ها</div>;
const SecuritySettings = () => <div>تنظیمات امنیتی</div>;
