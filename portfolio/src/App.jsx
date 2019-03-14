const App = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-gray-900 text-white p-4">
        <nav className="flex justify-between items-center max-w-7xl mx-auto">
          <h1 className="text-3xl font-bold">Razal Kabeer</h1>
          <div className="space-x-6">
            <a href="#home" className="hover:text-gray-400">
              Home
            </a>
            <a href="#about" className="hover:text-gray-400">
              About
            </a>
            <a href="#projects" className="hover:text-gray-400">
              Projects
            </a>
            <a href="#contact" className="hover:text-gray-400">
              Contact
            </a>
          </div>
        </nav>
      </header>

      <main className="flex-grow">
        <section
          id="home"
          className="flex items-center justify-center h-screen bg-gray-800 text-center text-white p-4 sm:p-6 md:p-0"
        >
          <div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold">
              Hi, I am Razal
            </h1>
            <p className="text-base sm:text-lg md:text-2xl mt-2">
              Frontend Developer & Designer
            </p>
            <a
              href="#projects"
              className="mt-4 inline-block bg-indigo-600 px-6 py-2 text-base font-semibold rounded hover:bg-indigo-500 transition"
            >
              View My Work
            </a>
          </div>
        </section>

        <section
          id="about"
          className="py-20 bg-gray-100 text-gray-800 text-center px-4 md:px-0"
        >
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">About Me</h2>
            <p className="text-sm sm:text-base leading-relaxed">
              I’m a passionate frontend developer with a love for creating
              beautiful, user-friendly web applications...
            </p>
          </div>
        </section>

        <section
          id="projects"
          className="py-20 bg-gray-200 text-gray-800 px-4 md:px-0"
        >
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-10">
              My Projects
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6">
                <img
                  src="project-image.jpg"
                  alt="Project Title"
                  className="w-full h-48 object-cover rounded-t-lg mb-4"
                />
                <h3 className="text-lg sm:text-xl font-semibold">
                  Project Title
                </h3>
                <p className="mt-2 text-sm sm:text-base">
                  A short description of the project. Built with React, Tailwind
                  CSS, and other technologies.
                </p>
                <a
                  href="https://github.com"
                  className="inline-block mt-4 text-indigo-600 hover:text-indigo-800 text-sm sm:text-base"
                >
                  View Project
                </a>
              </div>
              {/* Add more project cards as needed */}
            </div>
          </div>
        </section>

        <section
          id="contact"
          className="py-20 bg-white text-gray-800 px-4 md:px-0"
        >
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-10">Contact Me</h2>
            <p className="mb-6 text-sm sm:text-base">
              I’d love to hear from you! Feel free to reach out via the form
              below.
            </p>
            <form className="max-w-lg mx-auto space-y-4">
              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full p-2 sm:p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  required
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full p-2 sm:p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  required
                />
              </div>
              <div>
                <textarea
                  placeholder="Your Message"
                  className="w-full p-2 sm:p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  rows="5"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-indigo-600 text-white py-2 sm:py-3 rounded hover:bg-indigo-500 transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </section>
      </main>

      <footer className="bg-gray-900 text-white p-4 text-center">
        © 2024 Mohamed Razal Kabeer |{" "}
        <a href="https://github.com/RazalBinKabeer" className="hover:underline">
          GitHub
        </a>{" "}
        |{" "}
        <a
          href="https://www.linkedin.com/in/razal-bin-kabeer/"
          className="hover:underline"
        >
          LinkedIn
        </a>
      </footer>
    </div>
  );
};

export default App;
