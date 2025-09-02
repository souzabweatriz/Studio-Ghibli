import localFont from "next/font/local";
import "./globals.css";
import Header from "../components/Header/Header"
import Footer from "../components/Footer/Footer"

export const metadata = {
    title: "Projeto Studio Ghibli",
    description: "Projeto com personagens do Studio Ghibli",
    icons: {
        icon: "/favicon.ico",
    },
};

const poppins = localFont({
    src: [
        {
            path: "../../public/fonts/Poppins-Regular.ttf",
            weight: "400",
            style: "normal",
        },
        {
            path: "../../public/fonts/Poppins-Bold.ttf",
            weight: "700",
            style: "normal",
        },
    ],
    variable: "--font-poppins",
    display: "swap",
});

export default function RootLayout({ children }) {
    return (
        <html lang="pt-BR" className={poppins.variable}>
            <body className={poppins.className}>
                <Header />
                {children}
                <Footer />
            </body>
        </html>
    );
}