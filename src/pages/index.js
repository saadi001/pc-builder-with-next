import Banner from "@/components/UI/Banner";
import FeaturedProductPage from "@/components/UI/FeaturedProduct";
import RootLayoutPage from "@/components/layout/RootLayout";



const HomePage = ({products}) => {
  return (
    <div className="mx-3 md:mx-8 lg:mx-12 xl:mx-16 2xl:max-w-[1300px] 2xl:mx-auto">
      <Banner></Banner>
      <FeaturedProductPage products={products}></FeaturedProductPage>
      
    </div>
  );
};

export default HomePage;

HomePage.getLayout = function getLayout(page){
  return <RootLayoutPage>{page}</RootLayoutPage>
}

export const getStaticProps = async() => {
  const res = await fetch('https://assingment-6-server.vercel.app/products');
  const data = await res.json();

  return {
    props: {
      products: data
    }
  }
}