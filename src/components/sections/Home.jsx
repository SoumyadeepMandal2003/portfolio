import { RevealOnScroll } from "../RevealOnScroll";

export const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative"
    >
      <RevealOnScroll>
        <div className="text-center z-10 px-4 flex flex-col items-center">
          {/* Profile Photo */}
          <img
            src="/soumya.jpg"
            alt="Soumyadeep Mandal"
            className="w-36 h-36 rounded-full mx-auto mb-6 shadow-lg border-4 border-blue-500 object-cover bg-gray-900"
            style={{ objectPosition: "center top" }}
            loading="lazy"
          />
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent leading-right">
            Hi, I'm Soumyadeep
          </h1>

          <p className="tex-gray-400 text-lg mb-8 max-w-lg mx-auto">
            I’m a passionate web developer who loves crafting clean, responsive,
            and user-friendly websites and applications. With a strong
            foundation in HTML, CSS, JavaScript, and modern frameworks like
            React, I enjoy turning complex problems into elegant solutions that
            users love.
          </p>
          <p>Let’s build something awesome together!</p>
          <br />
          <br />
          <div className="flex justify-center space-x-4">
            <a
              href="#projects"
              className="bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.4)]"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="border border-blue-500/50 text-blue-500 py-3 px-6 rounded font-medium transition-all duration-200 
             hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.2)] hover:bg-blue-500/10"
            >
              Contact Me
            </a>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
