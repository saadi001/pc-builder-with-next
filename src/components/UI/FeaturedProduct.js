import Image from "next/image";
import bannerImage3 from "@/assets/image/banner3.webp";
import Link from "next/link";

const FeaturedProductPage = () => {
  return (
    <div className="pt-3">
      <Link href={'/product/1'} className="w-96 shadow-xl p-5">
        <Image src={bannerImage3} alt="product"></Image>
        <p>category</p>
        <p>product name</p>
        <p>price</p>
        <p>status</p>
        <p>rating</p>
      </Link>
    </div>
  );
};

export default FeaturedProductPage;
