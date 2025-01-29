import "./style.css"

export default function Badge({ children, label, size }) {
    return <div className={`badge__wrapper ${size === "small" ? "small" : ""}`}>
        { children ?? label }
    </div>
}