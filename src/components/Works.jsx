const projects = [
  {
    title: "LoRa-based Hydroponic System",
    description:
      "Smart farming system using LoRa, ESP32, and Firebase for real-time monitoring and control.",
    tech: ["LoRa", "ESP32", "Firebase", "React", "JavaScript", "C"],
    link: "https://drive.google.com/drive/folders/12RW43yvlWZOQn8_EOjlXZy6ddlFH8vcS?usp=sharing",
    image: "",
  },
  {
    title: "Arcane Wars Game",
    description:
      "2D wizard battle game with magic spells and touch controls, built for mobile using Unity.",
    tech: ["Unity", "C#", "Android"],
    link: "https://drive.google.com/drive/folders/1NoxL8q66F8xp3kepk_cKNHenqQk9wOVl?usp=sharing",
    image: "",
  },
  {
    title: "Pet Store Management",
    description:
      "A Pet Store Management is a Point of Sale system that manages inventory and prints receipts.",
    tech: ["C#", "mySQL"],
    link: "https://drive.google.com/drive/folders/17NcEdkus6hb1naDsOrdaK-ZFaAY6XPmL?usp=sharing",
    image: "",
  },
  
];

const Works = () => {
  return (
    <section id="works" className="px-6 lg:px-20 py-16  text-white">
      <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">
        My Works
      </h2>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-[#1a1a1a] rounded-xl p-6 shadow-md hover:shadow-xl hover:scale-105 transition-transform duration-300"
          >
            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
            <p className="text-gray-400 mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map((tech, i) => (
                <span
                  key={i}
                  className="bg-gray-800 text-gray-300 px-3 py-1 rounded-full text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
            <a
              href={project.link}
              className="text-blue-400 hover:text-blue-300 text-sm"
            >
              View Project →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Works;
