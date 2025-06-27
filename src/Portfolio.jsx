import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

const Card = ({ children }) => (
  <div className="bg-zinc-800 p-6 rounded-2xl shadow-lg hover:shadow-xl transition duration-300">
    {children}
  </div>
);

const Button = ({ children }) => (
  <button className="bg-white text-black px-4 py-2 rounded-xl hover:bg-zinc-200 transition">
    {children}
  </button>
);

export default function Portfolio() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-b from-zinc-900 to-black text-white px-6 py-12">
      {/* Hero Section */}
      <section className="max-w-6xl mx-auto text-center space-y-6">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold">
            Hi, I'm <span className="text-blue-400">Rithika</span> 👋
          </h1>
          <h2 className="text-xl md:text-2xl text-pink-300 mt-4 font-medium">
            <Typewriter
              words={['Developer', 'Designer', 'Problem Solver', 'ML Enthusiast']}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </h2>
          <p className="text-zinc-300 text-lg md:text-xl max-w-2xl mx-auto mt-4">
            I build elegant web apps, smart AI projects, and impactful freelance solutions.
          </p>
          <p className="text-sm text-zinc-400 mt-2">
            🎓 B.Tech AI & ML @ <strong>Kongu Engineering College</strong> (2023–2027)
          </p>
          <div className="mt-6">
            <Button>View My Work ↓</Button>
          </div>
        </motion.div>
      </section>

      {/* About Section */}
      <section className="max-w-4xl mx-auto mt-24 text-center">
        <h2 className="text-3xl font-bold mb-4">About Me</h2>
        <p className="text-zinc-400 text-md">
          I am a passionate B.Tech student in Artificial Intelligence and Machine Learning,
          eager to contribute to cutting-edge tech solutions. I specialize in web development,
          AI projects, and building tools that make life easier.
        </p>
      </section>

      {/* Skills Section */}
      <section className="max-w-4xl mx-auto mt-24 text-center">
        <h2 className="text-3xl font-bold mb-4">Skills</h2>
        <div className="flex flex-wrap justify-center gap-4 text-sm text-white">
          {["React", "Node.js", "MongoDB", "TensorFlow", "Python", "Tailwind CSS", "Framer Motion", "Git", "Figma"].map((skill, i) => (
            <span key={i} className="bg-zinc-700 px-4 py-2 rounded-full">
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section className="max-w-6xl mx-auto mt-24">
        <h2 className="text-3xl font-bold text-center mb-8">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Vacation Rental Booking",
              desc: "A web application to book vacation rentals with search, filter, and booking management features.",
              github: "#",
              live: "#"
            },
            {
              title: "AI-powered Research Paper Analyser",
              desc: "NLP and ML-based tool to analyze and score research papers for conferences using metrics like novelty and similarity.",
              github: "#",
              live: "#"
            },
            {
              title: "Restaurant Management System",
              desc: "System for managing orders, inventory, staff, and customer reservations in restaurants.",
              github: "#",
              live: "#"
            },
            {
              title: "Epileptic Seizure Detection",
              desc: "Deep learning model using EEG signals to detect and classify epileptic seizures.",
              github: "#",
              live: "#"
            },
            {
              title: "COVID-19 Analysis using ML",
              desc: "Machine learning dashboard to analyze COVID-19 trends and predict cases based on historical data.",
              github: "#",
              live: "#"
            }
          ].map((proj, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
            >
              <Card>
                <h3 className="text-2xl font-semibold mb-2">{proj.title}</h3>
                <p className="text-zinc-400 mb-4 text-sm">{proj.desc}</p>
                <div className="flex gap-4">
                  <a href={proj.github} target="_blank" rel="noreferrer">
                    <Button>GitHub</Button>
                  </a>
                  <a href={proj.live} target="_blank" rel="noreferrer">
                    <Button>Live Demo</Button>
                  </a>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact Info */}
      <section className="max-w-2xl mx-auto mt-24 text-center">
        <h2 className="text-3xl font-bold mb-4">Contact Info</h2>
        <p className="text-zinc-400 mb-2">📧 Email: rithikakaruna@example.com</p>
        <p className="text-zinc-400">🔗 GitHub: github.com/Rithika-Karuna</p>
      </section>

      {/* Footer */}
      <footer className="mt-24 text-center text-sm text-zinc-500">
        © 2025 Rithika K. Built with ❤️ and React.
      </footer>
    </main>
  );
}
