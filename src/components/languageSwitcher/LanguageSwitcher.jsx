import { Languages } from "lucide-react";
import "./style.css"
import React, { useState } from "react";
import { useDetectClickOutside } from 'react-detect-click-outside';


function Dropdown ({ closeDropdown }) {
    const ref = useDetectClickOutside({ onTriggered: closeDropdown });
    return (
        <div className="language-switcher__dropdown" ref={ref}>
            <button>English</button>
            <button>Русский</button>
            <button>Español</button>
        </div>
    );
};

export default function LanguageSwitcher() {
    const [displayDropdown, setDisplayDropdown] = useState(false);

    const handleToggle = (e) => {
        e.preventDefault();
        setDisplayDropdown((prevState) => !prevState);
      };

    const closeDropdown = () => {
        setDisplayDropdown(false);
    }

    return <>
        <button
            className="language-switcher__button"
            onClick={handleToggle}
        >
            <Languages size="20" />
        </button>
        { displayDropdown && <Dropdown closeDropdown={closeDropdown} /> }
    </>
}