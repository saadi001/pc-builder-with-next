import RootLayoutPage from "@/components/layout/RootLayout";
import example from "../assets/image/cpu.png";
import Image from "next/image";
import Link from "next/link";

const pcBuilderPage = ({ products }) => {
  // console.log(products);
  return (
    <div className="my-5 md:mt-12">
      <div className="bg-gray-300/20 border mx-3 sm:mx-5 md:mx-8 lg:max-w-[988px] lg:mx-auto">
        <div className="p-8 flex justify-between items-center border-b">
          <p className="font-bold text-2xl text-yellow-600">Banan</p>
          <p>Apnar PC banan sohoje.</p>
        </div>
        <div className="divide-y-2">
          {products?.map((product) => {
            return (
              <div
                key={product.id}
                className="grid grid-cols-12 px-5 md:px-16 py-3"
              >
                <div className="col-span-2 ">
                  <Image src={product?.featuredProduct?.icon} alt="image" responsive="true" width={50} height={50}></Image>
                </div>
                <div className="col-span-8 ">
                  <p className="text-sm">{product?.Category}</p>
                  <p className="font-bold">click choose to pick specific component</p>
                </div>
                <div className="col-span-2  flex justify-end items-center">
                  <Link href={`/pcBuilder/${product.id}`} className="px-5 py-2 bg-yellow-400 rounded-md">
                    choose
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default pcBuilderPage;

pcBuilderPage.getLayout = function getLayout(page) {
  return <RootLayoutPage>{page}</RootLayoutPage>;
};

export const getServerSideProps = async () => {
  const res = await fetch("https://assingment-6-server.vercel.app/products");
  const data = await res.json();

  return {
    props: {
      products: data,
    },
  };
};
