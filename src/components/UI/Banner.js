import Image from "next/image";
import bannerImage from "@/assets/image/banner.webp";
import bannerImage2 from "@/assets/image/banner2.webp";
import bannerImage3 from "@/assets/image/banner3.webp";

const Banner = () => {
  return (
    <div className="grid grid-cols-12 gap-2 mt-3">
      <Image className="w-full col-span-8" src={bannerImage} alt="banner-image"></Image>
      <div className="col-span-4 grid grid-cols-1">
        <Image className="w-full h-full" src={bannerImage2} alt="banner-image"></Image>
        <Image className="w-full h-full" src={bannerImage3} alt="banner-image"></Image>
      </div>
    </div>
  );
};

export default Banner;
