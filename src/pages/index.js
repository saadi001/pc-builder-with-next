import Banner from "@/components/UI/Banner";
import FeaturedProductPage from "@/components/UI/FeaturedProduct";
import RootLayoutPage from "@/components/layout/RootLayout";


const HomePage = () => {
  return (
    <div className="mx-3 md:mx-8 lg:mx-12 xl:mx-16 2xl:max-w-[1300px] 2xl:mx-auto">
      <Banner></Banner>
      <FeaturedProductPage></FeaturedProductPage>
      
    </div>
  );
};

export default HomePage;

HomePage.getLayout = function getLayout(page){
  return <RootLayoutPage>{page}</RootLayoutPage>
}
