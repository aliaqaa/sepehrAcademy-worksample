import React from "react";
import TicketSpan from "../../../components/common/modules/TicketSpan/TicketSpan";
import { useSelector } from "react-redux";
import CircleProgressChart from "../../../components/common/modules/CircleProgressChart/CircleProgressChart ";

function TopDash() {
    const percentages = useSelector((state) => state.setProfileCompletionPercentage);
  return (
    <div className="flex gap-x-10 items-center">
      <TicketSpan
        number="1"
        textColor="text-cyanlogin text-3xl"
        bgColor="bg-cyanlogin p-2 rounded-full"
        desc="شرکت کرده اید"
        icon="/public/images/icons/certificate.png"
      />
      <TicketSpan
        number="3"
        textColor="text-orange-500 text-3xl"
        bgColor="bg-orange-500 p-2 rounded-full"
        desc="رزرو کرده اید"
        icon="/public/images/icons/certificate.png"
      />
      <span className="flex items-center">
        <p className="font-extralight">
          برای شرکت در دوره ها باید <br /> حداقل ٪ ۸۰ از پروفایل خود را <br /> تکمیل کنید.
        </p>
        <CircleProgressChart percentage={percentages}/>
      </span>
    </div>
  );
}

export default TopDash;
