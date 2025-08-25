import React from "react";

function Projects() {
  const projectList = [
    { title: "Project One", img: "https://wallpaperaccess.com/full/486434.jpg" },
    { title: "Project Two", img: "https://wallpaperaccess.com/full/486435.jpg" },
    { title: "Project Three", img: "https://wallpaperaccess.com/full/486436.jpg" },
  ];

  return (
    <div className="mt-8">
      <h2 className="text-2xl font-semibold mb-4">Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {projectList.map((p, i) => (
          <div key={i} className="bg-black/60 rounded-xl overflow-hidden shadow-lg hover:scale-105 transition">
            <img src={p.img} alt={p.title} className="w-full h-40 object-cover" />
            <h3 className="p-4 text-lg font-bold">{p.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
