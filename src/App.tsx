import "./App.css";

function App() {
  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center bg-white text-neutral-800">
      <main className="max-w-lg w-[90%] text-left space-y-6">
        {/* Name */}

        <h1 className="text-2xl font-semibold tracking-tight">
          Robert Garabetian
        </h1>

        {/* Short Bio */}

        <p className="text-xl leading-relaxed text-neutral-600">
          I'm a Computer Science student at the{" "}
          <b>University of Southern California</b>, currently working as a
          Software Engineer at{" "}
          <span className="font-medium text-neutral-800">MGD Consulting</span>{" "}
          (a local medical consulting company). I enjoy building backend systems
          with <span className="font-medium text-neutral-800">Go</span> and
          <span className="font-medium text-neutral-800"> TypeScript</span>, and
          utilizing frameworks like
          <span className="font-medium text-neutral-800"> React </span>and
          <span className="font-medium text-neutral-800"> Next.js</span>.
        </p>

        {/* Links */}
        <div className="flex justify-center gap-6 text-sm text-neutral-700">
          <a
            href="https://github.com/RobertGarabetian"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-black transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/robert-garabetian-968396294/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-black transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="mailto:robertg1@usc.edu"
            className="hover:text-black transition-colors"
          >
            Email
          </a>
        </div>

        {/* Footer */}
        <footer className="text-xs text-neutral-400 pt-4">
          Los Angeles, CA • U.S. Citizen
        </footer>
      </main>
    </div>
  );
}

export default App;
