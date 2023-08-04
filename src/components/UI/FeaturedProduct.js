import Image from "next/image";
import Link from "next/link";

const FeaturedProductPage = ({ products }) => {
  return (
    <div className="pt-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 mb-3">
      {products?.map((product, i) => (
        <Link
          key={i}
          href={`/product/${product?.id}`}
          className="shadow-md hover:shadow-xl p-5 relative"
        >
          <Image
            src={product?.featuredProduct?.image}
            responsive="true"
            alt="product"
            width={500}
            height={200}
          ></Image>
          <p className="absolute top-0 left-0 bg-slate-900 text-slate-200 px-3 text-xs rounded-tr-md">
            {product.Category}
          </p>
          <p className="text-base">{product.featuredProduct?.name}</p>
          <p className="mt-2 mb-8 text-sm text-yellow-600">
            {product.featuredProduct?.status}
          </p>
          <div className="absolute left-0 right-0 bottom-0 p-5 flex justify-between items-center">
            <p className="text-xl text-red-600">{product.featuredProduct?.price}৳</p>
            <p className="">{product.featuredProduct?.rating}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default FeaturedProductPage;
