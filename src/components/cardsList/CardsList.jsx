import "./style.css"

export default function CardsList({ children, inline }) {
    return <div className={`cards-list__wrapper ${inline ? "is-inline" : ""}`}>
        { children }
    </div>
}