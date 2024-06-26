import localFont from "next/font/local"
import { Inter } from "next/font/google"

export const fontInter = Inter({ 
    subsets: ["latin"],
    variable: '--font-inter',
    weights: [400, 500, 600, 700]
})

export const fontVariableSatoshi = localFont({
    src: "../../public/font/Satoshi-Variable.woff2",
    variable: '--font-satoshivariable',
    // display: "swap"
})

export const fontGeneralSans = localFont({
    src: "../../public/font/GeneralSans-Regular.woff2",
    variable: '--font-generalsans',
    // display: "swap"
})