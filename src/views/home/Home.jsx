import React from "react";
import CardsList from "../../components/cardsList/CardsList";
import ProjectCard from "../../components/projectCard/ProjectCard";

import ProjectsList from "../../data/projects.json"
import { Folder } from "lucide-react";

export default function HomePage() {
    function getCategories() {
        const projectsWithCategories = ProjectsList.filter(el => el?.category);
        const categories = [...new Set(projectsWithCategories.map(p => p.category))];
        return categories;
    }

    return <>
        <section>
            <h2><span>My projects</span></h2>
            <CardsList>
                { ProjectsList.filter(el => el.pinned).slice().reverse().map((project, index) => <ProjectCard
                    key={index}
                    title={project.title}
                    caption={project.description}
                    tags={project.tags}
                    url={project.url}
                    image={project.images[0]}
                    year={project.year ?? undefined}
                /> )}
            </CardsList>

            <div style={{ padding: "1.5rem" }}></div>

            <CardsList inline={true}>
                { ProjectsList.filter(el => !el?.pinned && !el?.category).slice().reverse().map((project, index) => <ProjectCard
                    key={index}
                    title={project.title}
                    caption={project.description}
                    tags={project.tags}
                    url={project.url}
                    image={project.images[0]}
                    year={project.year ?? undefined}
                    inline={true}
                /> )}
            </CardsList>

            { getCategories().map((category, cIndex) => <React.Fragment key={cIndex}>
                <h3 style={{ marginTop: "2rem" }}>
                    <span><Folder size="18" strokeWidth={3} style={{ transform: "translateY(2px)", paddingRight: ".5rem" }} />{ category }</span>
                </h3>
                <CardsList inline={true}>
                    { ProjectsList.filter(el => el.category === category).slice().reverse().map((project, index) => <ProjectCard
                        key={index}
                        title={project.title}
                        caption={project.description}
                        tags={project.tags}
                        url={project.url}
                        image={project.images[0]}
                        year={project.year ?? undefined}
                        inline={true}
                    /> )}
                </CardsList>
            </React.Fragment>) }
        </section>
    </>
}