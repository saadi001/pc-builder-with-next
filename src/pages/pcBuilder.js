import RootLayoutPage from "@/components/layout/RootLayout";

const pcBuilderPage= () => {
    return (
        <div>
            
        </div>
    );
};

export default pcBuilderPage;

pcBuilderPage.getLayout = function getLayout(page){
    return <RootLayoutPage>{page}</RootLayoutPage>
  }