import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import "./style.css"

export default function Page({ children }) {
    return <>
        <Header />
        <main className="page-section__wrapper">
            { children }
        </main>
        <Footer />
    </>
}