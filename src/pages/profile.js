import RootLayoutPage from "@/components/layout/RootLayout";
import { useSession } from "next-auth/react";

const profilePage = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { data: session } = useSession();
    return (
        <div className="text-center mt-5">
            Welcome to your profile {session?.user?.name}
        </div>
    );
};

export default profilePage;

profilePage.getLayout = function getLayout(page){
    return <RootLayoutPage>{page}</RootLayoutPage>
  }