import { ConfigProvider } from "antd";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import theme from "../theme/config";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ConfigProvider theme={theme}>
      <Component {...pageProps} />
    </ConfigProvider>
    // <>
    //   <Component {...pageProps} />
    // </>
  );
}
