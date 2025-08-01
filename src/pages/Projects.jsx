import { useState, useEffect } from 'react';

function Projects() {
  const project1Images = ["/images/meateat.png", "/images/settings.png"];
  const project2Images = ["/images/home.png", "/images/room.png", "/images/login.png"];
  const project3Images = ["/images/menu.png", "/images/classes.png"];

  const [currentIndex1, setCurrentIndex1] = useState(0);
  const [currentIndex2, setCurrentIndex2] = useState(0);
  const [currentIndex3, setCurrentIndex3] = useState(0);
  const [activeProject, setActiveProject] = useState(null);
  const [modalImageIndex, setModalImageIndex] = useState(0);

  useEffect(() => {
    document.body.classList.toggle("modal-open", activeProject !== null);
  }, [activeProject]);

  const renderArrows = (indexSetter, currentIndex, images) => (
    <>
      {currentIndex > 0 && (
        <button
          onClick={() => indexSetter(currentIndex - 1)}
          className="image-nav-button left"
        >
          ‹
        </button>
      )}
      {currentIndex < images.length - 1 && (
        <button
          onClick={() => indexSetter(currentIndex + 1)}
          className="image-nav-button right"
        >
          ›
        </button>
      )}
    </>
  );

  return (
    <section className="projects-section">
      <div className="projects-container w-full px-8 md:px-16">
        <div className="projects-grid grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {[
            {
              id: 'project1',
              images: project1Images,
              title: "MeatEat - Food Delivery App",
              description: "A social dining and food delivery app that lets users eat together anywhere, enhancing shared experiences.",
              link: "https://github.com/ArunP1997/udi-team-uiux-design-imp",
              role: "UI/UX Designer & Frontend Developer",
              detail: "Designed a social dining and food delivery platform with scheduling, map integration, and multi-user coordination.",
              index: currentIndex1,
              setIndex: setCurrentIndex1
            },
            {
              id: 'project2',
              images: project2Images,
              title: "Hotel Management System",
              description: "A full-stack hotel management system using Flask, REST API, and React for seamless booking and admin operations.",
              link: "https://github.com/ArunP1997/Hote_Management_SRH_SDP",
              role: "Full Stack Developer",
              detail: "Built hotel reservation, login, and admin portal using Flask and React. Integrated RESTful APIs and booking workflows.",
              index: currentIndex2,
              setIndex: setCurrentIndex2
            },
            {
              id: 'project3',
              images: project3Images,
              title: "Fitness App",
              description: "Contributed as QA in developing and testing a client-facing application 'Studio Sweat on-demand' fitness platform.",
              link: null,
              role: "QA Engineer",
              detail: "Contributed to testing video-on-demand features, workout plans, and subscription flows in a client-facing fitness platform.",
              index: currentIndex3,
              setIndex: setCurrentIndex3
            }
          ].map(project => (
            <div key={project.id} className="project-card p-4 shadow-md rounded-md bg-white">
              <div className="relative overflow-hidden">
                <img src={project.images[project.index]} alt={project.title} className="project-image w-full rounded" />
                {renderArrows(project.setIndex, project.index, project.images)}
              </div>
              <h3 className="project-title font-bold mt-2">{project.title}</h3>
              <p className="project-description text-sm text-gray-700">{project.description}</p>
              <button onClick={() => { setActiveProject(project); setModalImageIndex(0); }} className="text-indigo-600 underline mt-1 text-sm">View more</button>
            </div>
          ))}
        </div>
      </div>

      {/* Modal Overlay */}
      {activeProject && (
        <div className="modal-overlay fixed top-0 left-0 w-full h-full backdrop-blur-sm bg-black bg-opacity-60 flex items-center justify-center z-50" onClick={() => setActiveProject(null)}>
            <div
              className="modal-content bg-white p-6 rounded-md max-w-5xl w-full max-h-[95vh] overflow-y-auto relative"
              onClick={(e) => e.stopPropagation()}
            >

            <button onClick={() => setActiveProject(null)} className="absolute top-2 right-4 text-gray-600 text-2xl hover:text-black">✕</button>
            <h2 className="text-xl font-semibold mb-3">{activeProject.title}</h2>

            <div className="relative mb-3">
              <div className="w-full h-[300px] relative overflow-hidden rounded">
                <img
                  src={activeProject.images[modalImageIndex]}
                  alt="Modal Project"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>

            <p><strong>Role:</strong> {activeProject.role}</p>
            <p className="text-gray-700 my-2">{activeProject.detail}</p>
            {activeProject.link ? (
              <a href={activeProject.link} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">GitHub Repo</a>
            ) : (
              <p className="text-gray-500 italic">Private Project</p>
            )}
          </div>
        </div>
      )}
    </section>
  );
}

export default Projects;
