import { Link, useLocation } from "react-router-dom"
import { Github, Icon, Moon, Sun } from 'lucide-react';
import { butterfly } from '@lucide/lab';
import "./style.css"
//import LanguageSwitcher from "../languageSwitcher/LanguageSwitcher";
import { useSettingsStore } from "../../store/store";
import VDivider from "../vDivider/VDivider";

export default function Header() {
    const darkTheme = useSettingsStore(state => state.darkTheme);
    const toggleDarkTheme = useSettingsStore(state => state.toggleDarkTheme);

    const location = useLocation();

    function handleScrollToTop() {
        if (location.pathname === "/") {
            window.scrollTo(0,0);
        }
    }

    return <>
        <header className="site-header__wrapper">
            <Link
                className="site-header__title"
                to="/"
                onClick={handleScrollToTop}
            >
                { !darkTheme && <img src="/logo.svg" class="site-header__image site-header__image__nofocus" /> }
                { darkTheme && <img src="/logo3.svg" class="site-header__image site-header__image__nofocus" /> }
                { !darkTheme && <img src="/logo4.svg" class="site-header__image site-header__image__focus" /> }
                { darkTheme && <img src="/logo2.svg" class="site-header__image site-header__image__focus" /> }
                <b>Ivan Zubkov</b>
            </Link>

            <div className="site-header__contact">
                <button className="site-header__button"
                    onClick={toggleDarkTheme}
                    title="Switch theme"
                >
                    { !darkTheme && <Sun size="20" /> }
                    { darkTheme && <Moon size="20" /> }
                </button>
                <VDivider />
                {/* <LanguageSwitcher /> */}
                <a
                    href="https://github.com/thundiverter"
                    title="GitHub"
                    target="_blank"
                >
                    <Github />
                </a>
                <a
                    href="https://bsky.app/profile/thundiverter.bsky.social"
                    title="Bluesky"
                    target="_blank"
                >
                    <Icon iconNode={butterfly} size="20" />
                </a>
                <a
                    href="https://community.fandom.com/wiki/User:StickManReally"
                    title="FANDOM"
                    target="_blank"
                    style={{ transform: "translateY(-.5px)", userSelect: "none" }}
                >
                    { !darkTheme && <img src="/fandom-logo.svg" height={22} className="site-header__contact__nofocus" /> }
                    { darkTheme && <img src="/fandom-logo-3.svg" height={22} className="site-header__contact__nofocus" /> }
                    { !darkTheme && <img src="/fandom-logo-4.svg" height={22} className="site-header__contact__focus" /> }
                    { darkTheme && <img src="/fandom-logo-2.svg" height={22} className="site-header__contact__focus" /> }
                </a>
            </div>
        </header>
    </>
}