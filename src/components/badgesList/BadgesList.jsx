import "./style.css"

export default function BadgesList({ children }) {
    return <div className="badges-list__wrapper">
        { children ?? "" }
    </div>
}