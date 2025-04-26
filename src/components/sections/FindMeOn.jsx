import { RevealOnScroll } from "../RevealOnScroll";

export const FindMeOn = () => (
  <section
    id="find-me-on"
    className="min-h-[40vh] flex items-center justify-center py-20 bg-black text-gray-100"
  >
    <RevealOnScroll>
      <div className="text-center z-10 px-4">
        <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
          FIND ME ON
        </h2>
        <p className="mb-8 text-lg text-gray-300">
          Feel free to connect with me
        </p>
        <div className="flex justify-center gap-6 mt-2">
          <a
            href="https://github.com/SoumyadeepMandal2003"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex gap-2 items-center bg-gray-800 hover:bg-gray-700 text-white px-8 py-4 text-lg rounded transition shadow"
            title="GitHub"
          >
            <svg
              aria-hidden="true"
              width={28}
              height={28}
              fill="currentColor"
              viewBox="0 0 24 24"
              className="inline-block"
            >
              <path
                d="M12 .297c-6.63 0-12 5.373-12 12 0 5.304 
                3.438 9.8 8.205 11.387.6.113.82-.258.82-.577
                0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.416
                -4.042-1.416-.546-1.387-1.333-1.756-1.333-1.756
                -1.09-.745.083-.729.083-.729 1.205.084 1.84 1.237
                1.84 1.237 1.07 1.834 2.809 1.304 3.495.997.107-.776
                .418-1.304.762-1.604-2.665-.305-5.467-1.334-5.467-5.93
                0-1.312.469-2.382 1.236-3.222-.124-.303-.535-1.527.117
                -3.176 0 0 1.008-.322 3.301 1.23.96-.267 1.98-.399 
                3-.404 1.02.005 2.04.137 3 .404 2.291-1.552 3.297-1.23
                3.297-1.23.653 1.649.242 2.873.12 3.176.77.84 
                1.235 1.91 1.235 3.222 0 4.61-2.807 5.624-5.479
                5.921.43.371.823 1.104.823 2.224 0 1.606-.015 2.898
                -.015 3.293 0 .322.216.694.824.576C20.565 22.092 24
                17.592 24 12.297c0-6.627-5.373-12-12-12"
              />
            </svg>
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/soumyadeep2003/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex gap-2 items-center bg-blue-700 hover:bg-blue-600 text-white px-8 py-4 text-lg rounded transition shadow"
            title="LinkedIn"
          >
            <svg
              aria-hidden="true"
              width={28}
              height={28}
              fill="currentColor"
              viewBox="0 0 24 24"
              className="inline-block"
            >
              <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.25c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm15.5 11.25h-3v-5.5c0-1.381-.027-3.156-1.922-3.156-1.922 0-2.219 1.5-2.219 3.051v5.605h-3v-10h2.884v1.367h.041c.402-.762 1.382-1.563 2.845-1.563 3.041 0 3.604 2.002 3.604 4.605v5.591z" />
            </svg>
            LinkedIn
          </a>
        </div>
      </div>
    </RevealOnScroll>
  </section>
);
