import "./App.css";
import { useState } from "react";

function App() {
  const [activeTab, setActiveTab] = useState("experience");

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 flex items-center justify-center px-4 py-10">
      <div className="relative w-full max-w-6xl flex flex-col md:flex-row bg-white border border-gray-200 shadow-lg rounded-2xl overflow-hidden">

        {/* Left: About */}
        <div className="flex-1 flex flex-col items-center justify-center bg-gradient-to-br from-gray-50 to-white p-8 md:p-12 border-r border-gray-100">
          <div className="max-w-md w-full text-center md:text-left">
            <h3 className="text-3xl font-bold mb-4 text-gray-900">Robert Garabetian</h3>
            <p className="text-base text-gray-600 leading-relaxed">
              Hi, I'm a third year Computer Science student at{" "}
              <span className="font-semibold text-red-700">USC</span>. Recently, I've been exploring the Go programming language and learning more about concurrency and distributed systems.
            </p>
          </div>

          {/* Contact Buttons */}
          <div className="flex flex-wrap justify-center md:justify-start gap-3 mt-8">
            {[
              { label: "GitHub", href: "https://github.com/RobertGarabetian" },
              { label: "LinkedIn", href: "https://www.linkedin.com/in/robert-garabetian-968396294/" },
              { label: "Email", href: "mailto:robertg1@usc.edu" },
            ].map((btn) => (
              <a
                key={btn.label}
                href={btn.href}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-lg bg-indigo-600 text-white text-sm font-medium shadow-sm"
              >
                {btn.label}
              </a>
            ))}
          </div>
        </div>

        {/* Right: Tabs */}
        <div className="flex-1 bg-white p-8 md:p-12 flex flex-col">
          {/* Tabs */}
          <div className="flex flex-wrap justify-center md:justify-start gap-2 mb-6 border-b border-gray-200 pb-4">
            {["experience", "technologies", "projects"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${activeTab === tab
                  ? "bg-indigo-600 text-white"
                  : "bg-gray-100 text-gray-700"
                  }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>

          {/* Content with fixed height */}
          <div className="flex-1 overflow-y-auto text-left">
            <div className="bg-gray-50 rounded-xl p-6 min-h-[400px]">
              {activeTab === "experience" && (
                <div className="space-y-6 text-gray-700 text-sm">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">
                      Software Engineer Intern
                    </h3>
                    <p className="text-gray-500 mb-2">MGD Consulting • Apr 2025 - Present</p>
                    <ul className="space-y-1">
                      <li>• Build REST APIs in Go for medical billing software</li>
                      <li>• Create dashboards with Next.js & TypeScript</li>
                      <li>• Develop data pipelines with Go & PostgreSQL</li>
                      <li>• Deploy backend services to AWS via Docker</li>
                      <li>• Automate file uploads with Python (70% faster)</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">
                      Coding Instructor
                    </h3>
                    <p className="text-gray-500 mb-2">Technix Academy • Oct 2023 - Sep 2024</p>
                    <ul className="space-y-1">
                      <li>• Taught 80+ students programming fundamentals</li>
                      <li>• Instructed in Python, Java, and C++</li>
                      <li>• Authored 200+ pages of DSA curriculum</li>
                      <li>• Introduced design tools like Illustrator & Tinkercad</li>
                    </ul>
                  </div>
                </div>
              )}

              {activeTab === "technologies" && (
                <div className="space-y-4 text-sm text-gray-700">
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Programming Languages</h3>
                    <p>Go, TypeScript, Python, C++, Java, SQL, Rust, HTML, CSS</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Frameworks & Tools</h3>
                    <p>React, Next.js, Node.js, PostgreSQL, GraphQL, AWS, Docker, Caddy</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Dev Tools</h3>
                    <p>Git, GitHub, Vercel, DigitalOcean</p>
                  </div>
                </div>
              )}

              {activeTab === "projects" && (
                <div className="space-y-6 text-sm text-gray-700">
                  <div>
                    <h3 className="font-semibold text-gray-900">Video Transcoder</h3>
                    <p className="text-gray-500 mb-2">Personal Project</p>
                    <ul className="space-y-1">
                      <li>• Scalable Go-based transcoding pipeline with FFmpeg + AWS SDK</li>
                      <li>• REST API for upload orchestration</li>
                      <li>• Deployed via DigitalOcean + Caddy</li>
                      <li>• Built frontend with Next.js + Tailwind</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold text-gray-900">MentorMap</h3>
                    <p className="text-gray-500 mb-2">Community Platform</p>
                    <ul className="space-y-1">
                      <li>• Reddit-style mentorship platform</li>
                      <li>• Next.js + TypeScript frontend</li>
                      <li>• Supabase + PostgreSQL backend</li>
                      <li>• Deployed on Vercel</li>
                    </ul>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
