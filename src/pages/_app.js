import "@/styles/globals.css";
import Layout from "../../component/layout/layout";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next"

export default function App({ Component, pageProps }) {
  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <Analytics />
      <SpeedInsights />
    </>
  );
}
