import RootLayoutPage from "@/components/layout/RootLayout";
import Image from "next/image";

const ProductDetailsPage = ({ product }) => {
  return (
    <div className="mx-3 md:mx-8 lg:mx-12 xl:mx-16 2xl:max-w-[1300px] 2xl:mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 mt-8 gap-3">
        <div className="w-full">
          <Image
            src={product?.image}
            responsive="true"
            width={700}
            height={100}
            alt="Product image"
          ></Image>
        </div>
        <div className="p-3">
          <p className=" text-yellow-600">{product?.status}</p>
          <p className="text-3xl mb-8">{product?.name}</p>
          <div className="grid grid-cols-2 mb-12">
            <p>
              <span className="block">price:</span>
              <span className="text-2xl text-red-500">
                {product?.price} BDT
              </span>
            </p>
            <p>
              <span className="block">price:</span>
              <span className="text-lg">{product?.rating}</span>
            </p>
          </div>

          {/* <p>{product?.category}</p> */}
          <div className="mb-8">
            <span className="text-sm mb-4 inline-block border-b">
              Description:
            </span>
            {product?.details?.map((detail, i) => (
              <li className="list-none" key={i}>
                {detail}
              </li>
            ))}
          </div>
          <button className="uppercase px-3 py-2 border-2 border-red-400 rounded-2xl font-bold hover:bg-red-400 hover:text-slate-100">
            add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsPage;

ProductDetailsPage.getLayout = function getLayout(page) {
  return <RootLayoutPage>{page}</RootLayoutPage>;
};

export const getServerSideProps = async (context) => {
  const { query } = context;
  const params1 = query.category;
  const params2 = query.productId;

  const res = await fetch(
    `https://assingment-6-server.vercel.app/products/${params1}/${params2}`
  );
  const data = await res.json();
  return {
    props: {
      product: data,
    },
  };
};
