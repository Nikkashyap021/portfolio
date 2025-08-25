import React from "react";

function Projects() {
    const projectList = [
        { title: "Project One", img: "https://wallpaperaccess.com/full/486434.jpg" },
        { title: "Project Two", img: "https://wallpaperaccess.com/full/486435.jpg" },
        { title: "Project Three", img: "https://wallpaperaccess.com/full/486436.jpg" },
    ];

    return (
        <div className="projects">
            <h2>Projects</h2>
            <div className="project-grid">
                {projectList.map((p, i) => (
                    <div className="card" key={i}>
                        <img src={p.img} alt={p.title} />
                        <h3>{p.title}</h3>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Projects;
