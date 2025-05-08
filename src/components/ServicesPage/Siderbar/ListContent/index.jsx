import React from "react";
import ContentTitle from "./ContentTitle";
import ContentVidImg from "./ContentVidImg";
import img from "../../../../assets/images/software_image.webp"

const ListContent = () => {
  return (
    <section className="pl-10 flex flex-col gap-5 min-h-[860px] h-max">
      <ContentTitle
        title={"Proqram Təminatı"}
        description1={` BIRainy şirkətlərin istəklərinə uyğun olaraq proqram təminatı
          hazırlayır. Proqramın son trendlərə və interfeysinin rahat istifadəyə
          uyğun olması əsas üstünlüyümüzdür.`}
        description2={`Müxtəlif sistemlər və mobil tətbiqlər, OCR əsaslı Sürətli Axtarış
          Sistemi, Telegram Bot-lar sayəsində şirkətlər müştəri əlaqələrinin
          gücləndirilməsinə, şirkət daxilindəki əməkdaşlar arasındakı işlərin
          idarə edilməsinə, prosesin sürətləndirilə və manuallığın azalıb
          avtomatlaşdırılmış formada həyata keçirilməsinə nail olurlar.`}
      />

      <ContentVidImg content={img}/>
    </section>
  );
};

export default ListContent;
