import React from "react";
import star from "../../../assets/icons/star.svg";
import arrow from "../../../assets/images/right-arrow.png";

const ServiesTitle = () => {
  return (
    <section className="flex justify-center items-end p-10">
      <div
        data-aos="fade-down"
        className="flex flex-col gap-4 w-[65%] py-5 cursor-default"
      >
        <img width={50} src={star} alt="star icon" />
        <h1 className="text-[72px]">Xidmətlərimiz</h1>
        <p className="text-[#646464] w-[100%]">
          Şirkət daxilindəki prosesləri və müştərilərlə əlaqəni
          avtomatlaşdırılmış şəkildə həyata keçirtmək və bazarda innovativ
          şəkildə inkişaf etmək üçün bizim xidmətlərdən yararlanın.
        </p>
      </div>

      <div data-aos="fade-down" className="w-[30%] flex justify-end">
        <div className="bg-black shadow-lg relative rounded-full w-[140px] h-[140px] flex justify-center items-center">
          <img
            className="rotate-[-30deg] cursor-pointer animate-pulse"
            width={90}
            src={arrow}
            alt="arrow"
          />
        </div>
      </div>
    </section>
  );
};

export default ServiesTitle;
