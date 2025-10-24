import "./App.css";

function App() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-6 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Robert Garabetian
          </h1>
          <p className="text-xl text-gray-600">
            Computer Science Student at USC • Software Engineer at MGD Consulting
          </p>
        </div>

        {/* Current Position */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Current Role</h2>
          <div className="bg-gray-50 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Software Engineer at MGD Consulting
            </h3>
            <p className="text-gray-700 mb-4">
              Building REST APIs with Go to connect medical billing software with clearinghouses,
              and creating interactive data visualization dashboards using TypeScript, React, and Next.js
              to model medical coder efficiency and identify workflow bottlenecks.
            </p>
            <p className="text-gray-700">
              Also working on data validation pipelines with Go and PostgreSQL, AWS deployment infrastructure
              with Docker, and Python automation scripts that reduced manual file upload time by 70%.
            </p>
          </div>
        </section>

        {/* Technologies */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Technologies I Work With</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              "Go", "TypeScript", "JavaScript", "Python", "C++", "Java", "Rust",
              "React", "Next.js", "Node.js", "PostgreSQL", "GraphQL", "AWS",
              "Docker", "MongoDB", "Git", "Linux", "HTML", "CSS", "Tailwind CSS"
            ].map((tech) => (
              <div
                key={tech}
                className="bg-white border border-gray-200 rounded-lg px-4 py-3 text-center hover:shadow-md transition-shadow"
              >
                <span className="text-gray-800 font-medium">{tech}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Get In Touch</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://github.com/RobertGarabetian"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/robert-garabetian-968396294/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="mailto:robertg1@usc.edu"
              className="px-6 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
            >
              Email
            </a>
          </div>
          <p className="text-gray-500 text-sm mt-6">
            Los Angeles, CA • Expected Graduation: Dec 2027
          </p>
        </section>
      </div>
    </div>
  );
}

export default App;