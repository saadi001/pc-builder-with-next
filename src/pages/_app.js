import { MyContext } from "@/contexts/contextProvider";
import "@/styles/globals.css";
import { SessionProvider } from "next-auth/react";

export default function MyApp({ Component, pageProps }) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout || ((page) => page);

  return (
    <SessionProvider session={pageProps.session}>
     <MyContext>{getLayout(<Component {...pageProps} />)}</MyContext>
    </SessionProvider>
  );
}
