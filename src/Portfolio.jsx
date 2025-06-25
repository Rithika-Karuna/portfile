import { useEffect, useState } from "react";
import { motion } from "framer-motion";
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
      <section className="max-w-4xl mx-auto text-center space-y-6">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold"
        >
          Hi, I'm Rithika 👋
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-lg md:text-xl text-zinc-300"
        >
          I build elegant web apps, smart AI projects, and impactful freelance solutions.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <Button className="mt-4 px-6 py-2 text-lg rounded-2xl shadow-md hover:bg-zinc-800">
            View My Work ↓
          </Button>
        </motion.div>
      </section>

      <section className="max-w-5xl mx-auto mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
        {[1, 2, 3].map((project, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.2 }}
          >
            <Card>
                <div className="p-6">
                <h2 className="text-2xl font-semibold mb-2">Project Title {project}</h2>
                <p className="text-zinc-300 text-sm mb-4">
                Short description of the project goes here. Tech stack, features, and purpose.
                </p>
                <Button>View Project</Button>
                </div>
            </Card>

          </motion.div>
        ))}
      </section>

      <footer className="mt-24 text-center text-sm text-zinc-500">
        © 2025 Rithika K. Built with ❤️ and React.
      </footer>
    </main>
  );
}
