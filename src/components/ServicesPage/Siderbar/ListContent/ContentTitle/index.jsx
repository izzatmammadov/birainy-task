import React from "react";
import tel from "../../../../../assets/icons/phone.svg";
import check from "../../../../../assets/icons/check.svg";
import Button from "../../../../Button";

const ContentTitle = ({ title, description1, description2, other = "" }) => {
  return (
    <div data-aos="fade-up" className="flex flex-col gap-5">
      <h4 className="text-[64px]">{title}</h4>
      <span className=" text-[#646464]">{description1}</span>
      <span className="text-[#646464]">{description2}</span>

      <div className="flex gap-7 items-center">
        <Button
          icon={tel}
          className="flex items-center gap-2 bg-[#F7D000] rounded-md font-bold cursor-pointer shadow py-3 px-9 hover:shadow-md transition-all duration-200"
          children={"Bizimlə əlaqə saxlayın"}
        />

        <Button
          icon={check}
          className="flex items-center gap-2 bg-[#e6e6e6] rounded-md font-bold cursor-pointer shadow py-3 px-[27px] hover:shadow-md transition-all duration-200"
          children={"İşlərimizə nəzər yetirin"}
        />
      </div>
    </div>
  );
};

export default ContentTitle;
