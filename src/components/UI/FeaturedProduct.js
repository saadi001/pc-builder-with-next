import Image from "next/image";
import Link from "next/link";

const FeaturedProductPage = ({products}) => {    
  return (
    <div className="pt-3 grid grid-cols-6 gap-3">
      {products?.map((product, i) => (
        <Link key={i} href={`/product/${product?.id}`} className="shadow-xl p-5">
        <Image src={product?.featuredProduct?.image} responsive alt="product" width={500} height={200} ></Image>
        <p>category</p>
        <p>product name</p>
        <p>price</p>
        <p>status</p>
        <p>rating</p>
      </Link>
      ))}
    </div>
  );
};

export default FeaturedProductPage;
