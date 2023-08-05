import RootLayoutPage from "@/components/layout/RootLayout";

const blogsPage = () => {
    return (
        <>
           this is blog page
        </>
    );
};

export default blogsPage;

blogsPage.getLayout = function getLayout(page){
    return <RootLayoutPage>{page}</RootLayoutPage>
  }