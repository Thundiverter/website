import "./style.css"

export default function Footer() {
    const date = new Date();
    const year = date.getFullYear();

    return <footer class="footer__wrapper">
        <section className="footer__content">
            <p>Ivan Zubkov, 2020−{year}</p>
        </section>
    </footer>
}