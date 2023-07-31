import RootLayoutPage from "@/components/layout/RootLayout";

const ProductDetailsPage = () => {
    return (
        <div>
            This is product details page
        </div>
    );
};

export default ProductDetailsPage;

ProductDetailsPage.getLayout = function getLayout(page){
    return <RootLayoutPage>{page}</RootLayoutPage>
  }