import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [activeSection, setActiveSection] = useState("about");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["about", "experience", "projects"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (section: string) => {
    const element = document.getElementById(section);
    if (element) {
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - 100;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <div className="app">
      {/* Fixed Sidebar */}
      <aside className="sidebar">

        <nav className="sidebar-nav">
          <a
            href="#about"
            className={activeSection === "about" ? "active" : ""}
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("about");
            }}
          >
            About
          </a>
          <a
            href="#experience"
            className={activeSection === "experience" ? "active" : ""}
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("experience");
            }}
          >
            Experience
          </a>
          <a
            href="#projects"
            className={activeSection === "projects" ? "active" : ""}
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("projects");
            }}
          >
            Projects
          </a>
        </nav>

        <div className="sidebar-social">
          <a href="https://github.com/robertgarabetian" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://linkedin.com/robert-garabetian" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>
      </aside>

      {/* Main Content */}
      <main className="main-content">
        <main id="about" className="hero">
          <h1>Robert Garabetian</h1>
          <h2>Software Engineer</h2>
          <p>I'm a third year Computer Science student at the University of Southern California. I primarily work with C++ in school and Go and TypeScript in my free time and at work.</p>
        </main>

        {/* <section id="about" className="section">
          <h2 className="section-title">About</h2>
          <div className="section-content">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </p>
            <p>
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.
            </p>
            <p>
              Totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.
            </p>
            <p>Here are a few technologies I've been working with recently:</p>
            <ul className="tech-list">
              <li>JavaScript</li>
              <li>TypeScript</li>
              <li>React</li>
              <li>Next.js</li>
              <li>Node.js</li>
              <li>HTML & CSS</li>
            </ul>
          </div>
        </section> */}

        <section id="experience" className="section">
          <h2 className="section-title">Where I've Worked</h2>
          <div className="section-content">
            <div className="experience-item">
              <div className="experience-header">
                <h3>Software Engineer</h3>
                <span className="company">@ MGD Consulting</span>
                <span className="date">April 2025 — Present</span>
              </div>
              <ul>
                <li>Designed REST APIs using <strong>Go</strong> to connect medical billing software with clearinghouses for claim submission and status tracking.</li>
                <li>Utilized <strong>TypeScript</strong>, <strong>React</strong>, and <strong>Next.js</strong> to build interactive data visualization dashboards to model medical coder efficiency and identify workflow bottlenecks.</li>
                <li>Built data validation pipelines using <strong>Go</strong> and <strong>PostgreSQL</strong> to normalize complex medical insurance claim data, improving organization and long-term storage.</li>
                <li>Collaborated with senior developers to introduce backend service deployment infrastructure to <strong>AWS</strong> using <strong>Docker</strong>, reducing deployment errors by <strong>30%</strong>.</li>
                <li>Automated file uploading for patient data using <strong>Python</strong> scripts, reducing manual upload time by <strong>70%</strong>.</li>
              </ul>
              <div className="tech-tags">
                <span>Go</span>
                <span>TypeScript</span>
                <span>React</span>
                <span>Next.js</span>
                <span>PostgreSQL</span>
                <span>AWS</span>
                <span>Docker</span>
                <span>Python</span>
              </div>
            </div>

            <div className="experience-item">
              <div className="experience-header">
                <h3>Coding Instructor</h3>
                <span className="company">@ Technix Academy</span>
                <span className="date">October 2023 — September 2024</span>
              </div>
              <ul>
                <li>Taught over <strong>80 children</strong> (ages 6-18) beginner through college-level computer science concepts and <strong>OOP</strong> in languages like <strong>Python</strong>, <strong>Java</strong>, and <strong>C++</strong>, fostering problem-solving and logical thinking.</li>
                <li>Instructed students on graphic design software such as <strong>Adobe Illustrator</strong>, <strong>Tinkercad</strong>, and <strong>Paint 3D</strong> to build a foundation in digital tools for creativity.</li>
                <li>Collaborated with supervisors to develop and revise over <strong>200 pages</strong> of <strong>C++</strong> and <strong>Python</strong> curriculum for teaching <strong>Data Structures and Algorithms</strong>.</li>
              </ul>
              <div className="tech-tags">
                <span>Python</span>
                <span>Java</span>
                <span>C++</span>
                <span>Data Structures</span>
                <span>Algorithms</span>
                <span>Adobe Illustrator</span>
                <span>Tinkercad</span>
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="section">
          <h2 className="section-title">Some Things I've Built</h2>
          <div className="projects-grid">
            <div className="project-card">
              <div className="project-header">
                <h3>One Klick Website</h3>
              </div>
              <p>Preview site for One Klick, a thriller short-film from Rage Productions.</p>
              <div className="project-tech">
                <span>Next.js</span>
                <span>TypeScript</span>
                <span>Tailwind CSS</span>
              </div>
              <div className="project-links">
                <a href="https://github.com/robertgarabetian/oneklickmovie" target="_blank" rel="noopener noreferrer">GitHub</a>
                <a href="https://oneklickmovie.vercel.app" target="_blank" rel="noopener noreferrer">Live Demo</a>
              </div>
            </div>

            <div className="project-card">
              <div className="project-header">
                <h3>Video Transcoder</h3>
              </div>
              <p>Video transcoder built with Go uitlizing FFmpeg. Videos are transcoded into HLS format for adaptive bitrate streaming. The videos are stored in an AWS S3 bucket. Frontend built with Next.js and HLS.js.</p>
              <div className="project-tech">
                <span>Go</span>
                <span>FFmpeg</span>
                <span>AWS S3</span>
                <span>Next.js</span>
                <span>TypeScript</span>
                <span>HLS.js</span>
              </div>
              <div className="project-links">
                <a href="https://github.com/robertgarabetian/transcoder" target="_blank" rel="noopener noreferrer">GitHub</a>
                <a href="https://transcoder.client.robertgarabetian.com" target="_blank" rel="noopener noreferrer">Live Demo</a>
              </div>
            </div>

            <div className="project-card">
              <div className="project-header">
                <h3>Mentor Map</h3>
              </div>
              <p>A Reddit-inspired social platform to connect community college students to succesful transfers.</p>
              <div className="project-tech">
                <span>Next.js</span>
                <span>Supabase</span>
                <span>PostgreSQL</span>
              </div>
              <div className="project-links">
                <a href="https://github.com/robertgarabetian/MentorMap" target="_blank" rel="noopener noreferrer">GitHub</a>
                <a href="https://mentor-map-blond.vercel.app/" target="_blank" rel="noopener noreferrer">Live Demo</a>
              </div>
            </div>
          </div>
        </section>

        <footer className="footer">
          <p>Designed & built with React & Vercel</p>
        </footer>
      </main>
    </div>
  );
}

export default App;
