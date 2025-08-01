import { useState } from "react";

function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const skillsData = [
    {
      title: "Technical Skills",
      image: "/images/skills.jpg",
      items: ["Python", "C++", "Java", "JavaScript", "PyTorch", "CUDA", "QLoRA", "Machine Learning", "Deep Learning", "Computer Vision"]
    },
    {
      title: "Frameworks & Tools",
      image: "/images/framework.png",
      items: ["React.js", "Vue.js", "Flask", "REST APIs", "Figma", "SQL Databases", "MongoDB","Docker", "Git"]
    },
    {
      title: "Languages & More",
      image: "/images/language.jpg",
      items: ["English (Fluent)", "German (Basics)", "Agile Methodologies", "Team Leadership", "Problem Solving"]
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % skillsData.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + skillsData.length) % skillsData.length);
  };


  return (
    <section className="flex-1 bg-gray-200 flex flex-col justify-center px-16 py-12">
      <div className="max-w-7xl mx-auto">
        {/* Main Text Content */}
        <div className="text-content-container text-left w-full pl-20 pr-5">
          <p className="summary">
            I'm <strong>Arun Prasad Muralidharan</strong>, an AI Engineer and Python Web Developer with 3.5+ years of experience building deep learning systems and full-stack applications. I specialize in training large-scale vision-language models (VLMs) using PyTorch, Hugging Face, and QLoRA.  Previously a QA Engineer, I've gained strong experience in Agile workflows, testing. I'm passionate about building intelligent, user-focused AI interfaces.
          </p>
        </div>

        {/* Skills Slider */}
        <div className="skills-slider-container">
          {/* Previous Button */}
          <button className="slider-nav prev" onClick={prevSlide}>
            <svg viewBox="0 0 24 24">
              <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/>
            </svg>
          </button>

          {/* Slider */}
          <div className="skills-slider">
            {skillsData.map((skill, index) => (
              <div
                key={index}
                className={`skill-slide ${index === currentSlide ? 'active' : ''}`}
              >
                <img src={skill.image} alt={skill.title} className="skill-slide-image" />

                <div className="skill-slide-overlay">
                  <h3 className="skill-slide-title">{skill.title}</h3>
                </div>

                <div className="skill-slide-list">
                  {skill.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="skill-slide-item">
                      <span className="skill-slide-bullet"></span>
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Next Button */}
          <button className="slider-nav next" onClick={nextSlide}>
            <svg viewBox="0 0 24 24">
              <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}

export default Home;