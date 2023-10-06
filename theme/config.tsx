import type { ThemeConfig } from "antd";
import { Lexend } from "next/font/google";
const font = Lexend({ subsets: ["latin"] });
const theme: ThemeConfig = {
  token: {
    fontSize: 12,
    colorPrimary: "#52c41a",
    fontFamily: font.style.fontFamily,
  },
};

export default theme;
