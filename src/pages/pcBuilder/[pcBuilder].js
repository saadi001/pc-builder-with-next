import RootLayoutPage from "@/components/layout/RootLayout";
import Image from "next/image";
import Link from "next/link";

const PcBuilderDetailsPage = ({ product }) => {
  console.log(product[0]?.products);
  return (
    <div className="mx-3 md:mx-8 lg:mx-12 xl:mx-16 2xl:max-w-[1300px] 2xl:mx-auto grid grid-cols-2 sm:grid-cols-3 gap-4 mt-8 ">
      {product[0]?.products?.map((product, i) => (
        <div
          key={i}
          className="shadow-md hover:shadow-xl p-5 border rounded-md relative"
        >
          <Image
            src={product?.image}
            responsive="true"
            alt="product"
            width={500}
            height={200}
          ></Image>
          {/* <p className="absolute top-0 left-0 bg-slate-900 text-slate-200 px-3 text-xs rounded-tr-md">
            {product.category}
          </p> */}
          <p className="text-base">{product?.name}</p>
          <p className="mt-2 mb-8 text-sm text-yellow-600">{product?.status}</p>
          <div className="absolute left-0 right-0 bottom-0 p-5 flex justify-between items-center">
            <p className="text-xl text-red-600">{product?.price}৳</p>
            <p className="">{product?.rating}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PcBuilderDetailsPage;

PcBuilderDetailsPage.getLayout = function getLayout(page) {
  return <RootLayoutPage>{page}</RootLayoutPage>;
};

export const getServerSideProps = async (context) => {
  const { query } = context;
  console.log(query);
  const params = query.pcBuilder;

  const res = await fetch(
    `https://assingment-6-server.vercel.app/products/${params}`
  );
  const data = await res.json();
  return {
    props: {
      product: data,
    },
  };
};
