import RootLayoutPage from "@/components/layout/RootLayout";
import Image from "next/image";
import Link from "next/link";

const ProductsPage = ({ product }) => {
  const productDetails = product[0];
  return (
    <div className="mx-3 md:mx-8 lg:mx-12 xl:mx-16 2xl:max-w-[1300px] 2xl:mx-auto grid grid-cols-2 sm:grid-cols-3 gap-4 mt-8 ">
      {productDetails?.products?.map((product, i) => (
        <Link
          key={i}
          href={`/products/${product.category}/${product.id}`}
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
        </Link>
      ))}
    </div>
  );
};

export default ProductsPage;

ProductsPage.getLayout = function getLayout(page) {
  return <RootLayoutPage>{page}</RootLayoutPage>;
};

export const getStaticPaths = async () => {
  const res = await fetch("https://assingment-6-server.vercel.app/products");
  const products = await res.json();

  const paths = products.map((product) => ({
    params: { productId: product.id },
  }));

  return { paths, fallback: false };
};

export const getStaticProps = async (context) => {
  const { params } = context;
  const res = await fetch(
    `https://assingment-6-server.vercel.app/products/${params.productId}`
  );
  const data = await res.json();
  return {
    props: {
      product: data,
    },
  };
};

