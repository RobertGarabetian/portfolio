import "./App.css";
import { useState } from "react";

function App() {
  const [activeTab, setActiveTab] = useState("experience");

  return (
    <div className="min-h-screen bg-white grid grid-cols-2">
      <div className="col-span-1 flex flex-col items-center justify-center p-10">
        <div className="w-full h-auto bg-gray-200 rounded-3xl p-3">
          <h3 className="text-2xl font-medium py-2">Robert Garabetian</h3>
          <p className="text-lg">Hi, I'm a Computer Science student at USC in my third year. I currently work as a software engineer intern for MGD Consulting, a medical consulting company.
            My tasks include building backend systems with <u>Go</u> and expanding data visualization dashboards in <u>Next.js</u> using <u>TypeScript</u>.</p>
        </div>
      </div>

      <div className="col-span-1 flex flex-col items-center justify-center p-10">
        <div className="w-full max-w-md">
          {/* Tab Headers */}
          <div className="flex mb-6">
            <button
              onClick={() => setActiveTab("experience")}
              className={`px-4 py-2 text-sm font-medium rounded-t-lg transition-colors ${activeTab === "experience"
                ? "bg-gray-200 text-gray-900"
                : "text-gray-500 hover:text-gray-700"
                }`}
            >
              Experience
            </button>
            <button
              onClick={() => setActiveTab("technologies")}
              className={`px-4 py-2 text-sm font-medium rounded-t-lg transition-colors ${activeTab === "technologies"
                ? "bg-gray-200 text-gray-900"
                : "text-gray-500 hover:text-gray-700"
                }`}
            >
              Technologies
            </button>
            <button
              onClick={() => setActiveTab("projects")}
              className={`px-4 py-2 text-sm font-medium rounded-t-lg transition-colors ${activeTab === "projects"
                ? "bg-gray-200 text-gray-900"
                : "text-gray-500 hover:text-gray-700"
                }`}
            >
              Projects
            </button>
          </div>

          {/* Tab Content */}
          <div className="bg-gray-100 rounded-lg p-6 min-h-[400px]">
            {activeTab === "experience" && (
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Software Engineer Intern
                  </h3>
                  <p className="text-sm text-gray-600 mb-2">MGD Consulting • Apr 2025 - Present</p>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Build REST APIs with Go for medical billing software</li>
                    <li>• Create data visualization dashboards with Next.js & TypeScript</li>
                    <li>• Develop data validation pipelines with Go & PostgreSQL</li>
                    <li>• Deploy backend services to AWS using Docker</li>
                    <li>• Automate file uploads with Python (70% time reduction)</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Coding Instructor
                  </h3>
                  <p className="text-sm text-gray-600 mb-2">Technix Academy • Oct 2023 - Sep 2024</p>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Taught 80+ children (ages 6-18) computer science concepts</li>
                    <li>• Instructed Python, Java, and C++ programming</li>
                    <li>• Developed 200+ pages of curriculum for Data Structures & Algorithms</li>
                    <li>• Taught graphic design with Adobe Illustrator and Tinkercad</li>
                  </ul>
                </div>
              </div>
            )}

            {activeTab === "technologies" && (
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Programming Languages</h3>
                  <p className="text-sm text-gray-700">
                    Go, TypeScript, JavaScript, Python, C/C++, Java, Rust, HTML, CSS, JSX/TSX, SQl
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Software / Frameworks</h3>
                  <p className="text-sm text-gray-700">
                    React, Next.js, Node.js, MySQL, PostgreSQL, GraphQL, AWS, Caddy, Docker, MongoDB
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Dev Tools / Methodologies</h3>
                  <p className="text-sm text-gray-700">
                    Git, GitHub, Vercel, DigitalOcean, Linux, Object-Oriented Programming (OOP)
                  </p>
                </div>
              </div>
            )}

            {activeTab === "projects" && (
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Video Transcoder</h3>
                  <p className="text-sm text-gray-600 mb-2">Personal Project</p>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Engineered scalable video transcoding pipeline in Go using FFmpeg and AWS SDK</li>
                    <li>• Designed REST endpoints for upload handling and transcoding orchestration</li>
                    <li>• Implemented concurrent cleanup routines using goroutines</li>
                    <li>• Integrated secure file storage with pre-signed S3 URLs</li>
                    <li>• Deployed on Ubuntu DigitalOcean Droplet with Caddy reverse proxy</li>
                    <li>• Built responsive frontend with Next.js, React, TypeScript, and Tailwind CSS</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">MentorMap</h3>
                  <p className="text-sm text-gray-600 mb-2">Community Platform</p>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Created Reddit-inspired community platform connecting students with advisors</li>
                    <li>• Built high-performance frontend using Next.js and TypeScript</li>
                    <li>• Implemented secure backend with PostgreSQL and Supabase</li>
                    <li>• Designed mobile-responsive UI with Tailwind CSS</li>
                    <li>• Deployed application on Vercel</li>
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;