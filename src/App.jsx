function App() {
  return (
    <div>

      {/* Navbar */}
      <nav>
        <h2>Akhila</h2>

        <div>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#education">Education</a>
          <a href="#projects">Projects</a>
          <a href="#internship">Internship</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>


      {/* Hero Section */}
      <section id="home">
        <div className="hero-content">

          <p className="hero-small">
            HELLO, I'M
          </p>

          <h1>
            Akhilandeswaridevi Pakkurthi
          </h1>

          <h2>
            Full-Stack Developer
          </h2>

          <p className="hero-description">
            I build modern, responsive and user-friendly web
            applications using modern web technologies.
          </p>

          <a
            href="#projects"
            className="hero-button"
          >
            View My Projects
          </a>

        </div>
      </section>


      {/* About Section */}
      <section id="about">
        <div className="section-container">

          <p className="section-title">
            ABOUT ME
          </p>

          <h2>
            Who I Am
          </h2>

          <p>
            I am a passionate Full-Stack Developer interested
            in building modern and user-friendly web applications.
            I enjoy learning new technologies and solving
            real-world problems through code.
          </p>

          <p>
            I am currently improving my skills in frontend
            development, backend development, databases and
            REST APIs.
          </p>

        </div>
      </section>


      {/* Skills Section */}
      <section id="skills">
        <div className="section-container">

          <p className="section-title">
            MY SKILLS
          </p>

          <h2>
            Technologies I Use
          </h2>

          <div className="skills-container">

            <div className="skill-card">
              <h3>HTML</h3>
              <p>
                Building structured and semantic web pages.
              </p>
            </div>

            <div className="skill-card">
              <h3>CSS</h3>
              <p>
                Creating responsive and attractive designs.
              </p>
            </div>

            <div className="skill-card">
              <h3>JavaScript</h3>
              <p>
                Adding functionality and interactivity
                to websites.
              </p>
            </div>

            <div className="skill-card">
              <h3>React</h3>
              <p>
                Building modern and reusable user interfaces.
              </p>
            </div>

            <div className="skill-card">
              <h3>Node.js</h3>
              <p>
                Developing backend applications and APIs.
              </p>
            </div>

            <div className="skill-card">
              <h3>MongoDB</h3>
              <p>
                Managing application data using a NoSQL database.
              </p>
            </div>

          </div>

        </div>
      </section>


      {/* Education Section */}
      <section id="education">
        <div className="section-container">

          <p className="section-title">
            MY EDUCATION
          </p>

          <h2>
            Education
          </h2>

          <div className="education-container">

            <div className="education-card">

              <h3>
                Bachelor of Technology
              </h3>

              <p>
                Computer Science and Engineering
              </p>

              <p>
                Pydah College of Engineering and Technology
              </p>

              <span>
                Currently Pursuing
              </span>

            </div>


            <div className="education-card">

              <h3>
                Higher Education
              </h3>

              <p>
                Computer Science and Engineering
              </p>

              <p>
                Diploma / Higher Education
              </p>

              <span>
                Completed
              </span>

            </div>

          </div>

        </div>
      </section>


      {/* Projects Section */}
      <section id="projects">
        <div className="section-container">

          <p className="section-title">
            MY WORK
          </p>

          <h2>
            Projects
          </h2>

          <div className="projects-container">

            {/* Project 1 */}
            <div className="project-card">

              <h3>
                Campus SOS Smart
              </h3>

              <p>
                A smart campus emergency reporting web
                application that helps students report
                emergencies and allows administrators to
                manage and monitor reports efficiently.
              </p>

              <p>
                <strong>
                  Technologies:
                </strong>{" "}
                HTML, CSS, JavaScript, Firebase
              </p>

              <a
                href="#"
                className="project-button"
              >
                View Project
              </a>

            </div>


            {/* Project 2 */}
            <div className="project-card">

              <h3>
                Task Management Application
              </h3>

              <p>
                A full-stack task management application
                for creating, updating, tracking and
                managing daily tasks through an
                easy-to-use interface.
              </p>

              <p>
                <strong>
                  Technologies:
                </strong>{" "}
                React, Node.js, Express.js, MongoDB
              </p>

              <a
                href="#"
                className="project-button"
              >
                View Project
              </a>

            </div>


            {/* Project 3 */}
            <div className="project-card">

              <h3>
                E-Commerce Web Application
              </h3>

              <p>
                An online shopping application with
                product management, shopping cart,
                user authentication and checkout
                functionality.
              </p>

              <p>
                <strong>
                  Technologies:
                </strong>{" "}
                React, Node.js, Express.js, MongoDB
              </p>

              <a
                href="#"
                className="project-button"
              >
                View Project
              </a>

            </div>

          </div>

        </div>
      </section>


      {/* Internship Section */}
      <section id="internship">
        <div className="section-container">

          <p className="section-title">
            EXPERIENCE
          </p>

          <h2>
            Internship
          </h2>

          <div className="internship-card">

            <h3>
              Full-Stack Development Intern
            </h3>

            <h4>
              Thiranex
            </h4>

            <p>
              Currently working as a Full-Stack Development
              Intern, developing responsive web applications
              and gaining practical experience in frontend
              and backend development.
            </p>

            <p>
              During this internship, I am working with
              modern web technologies and building real-world
              projects involving user interfaces, REST APIs
              and databases.
            </p>

            <p>
              <strong>
                Technologies:
              </strong>{" "}
              HTML, CSS, JavaScript, React, Node.js,
              Express.js and MongoDB.
            </p>

            <span>
              2026 - Present
            </span>

          </div>

        </div>
      </section>


      {/* Contact Section */}
      <section id="contact">
        <div className="section-container">

          <p className="section-title">
            GET IN TOUCH
          </p>

          <h2>
            Contact Me
          </h2>

          <p>
            I am open to internship opportunities, projects
            and collaborations. Feel free to connect with me.
          </p>


          {/* Social Links */}
          <div className="social-links">

            {/* GitHub */}
            <a
              href="https://github.com/akhilandeswaridevipakkurthi-sys"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>


            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/akhilandeswaridevi-pakkurthi-434a2438a"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>


            {/* Email */}
            <button
              type="button"
              onClick={() => {
                navigator.clipboard.writeText(
                  "akhilandeswaridevipakkurthi@gmail.com"
                );

                alert("Email address copied!");
              }}
            >
              Email
            </button>

          </div>


          {/* Contact Form */}
          <form
            className="contact-form"
            onSubmit={(e) => e.preventDefault()}
          >

            <input
              type="text"
              placeholder="Your Name"
              required
            />

            <input
              type="email"
              placeholder="Your Email"
              required
            />

            <textarea
              placeholder="Your Message"
              rows="5"
              required
            ></textarea>

            <button type="submit">
              Send Message
            </button>

          </form>

        </div>
      </section>


      {/* Footer */}
      <footer>
        <p>
          © 2026 Akhilandeswaridevi Pakkurthi.
          All rights reserved.
        </p>
      </footer>

    </div>
  );
}

export default App;