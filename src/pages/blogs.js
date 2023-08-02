import RootLayoutPage from "@/components/layout/RootLayout";

const blogsPage = () => {
    return (
        <div className="">
           this is blog page
        </div>
    );
};

export default blogsPage;

blogsPage.getLayout = function getLayout(page){
    return <RootLayoutPage>{page}</RootLayoutPage>
  }