import { Link } from "react-router-dom"
import Badge from "../badge/Badge"
import BadgesList from "../badgesList/BadgesList"
import "./style.css"

export default function ProjectCard({
    title, caption, url, tags, image, year, inline
}) {
    return <Link className={`project-card__wrapper ${inline ? "is-inline" : ""}`} to={url ?? "#"} target={ `${url}`.startsWith("http") ? "_blank" : "_self" }>
        {image && <img src={ image } className="project-card__image" /> }
        <div className="project-card__body">
            <p className="project-card__title">
                <span>{ title ?? "" }</span>
            </p>
            <p className="project-card__caption">{ caption || <span style={{ color: "var(--theme-color-text-secondary)" }}>No description provided</span> }</p>
            { tags && <div className="project-card__tags">
                <BadgesList>
                    { year && <Badge size="small">{ year }</Badge> }
                    { tags.map((tag, index) => <Badge size="small" key={index}>{ tag }</Badge>) }
                </BadgesList>
            </div> }
        </div>
    </Link>
}