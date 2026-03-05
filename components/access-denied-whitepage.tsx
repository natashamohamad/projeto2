"use client";

import { motion } from "framer-motion";
import { Rocket, Cpu, TrendingUp, Zap, BrainCircuit } from "lucide-react";

const CHECKOUT_URL =
  "https://pay.hotmart.com/U104758447T?bid=1772740567785";

export default function AccessDenied() {
  const features = [
    {
      icon: Rocket,
      title: "Launch Faceless Channels",
      description:
        "Build automated YouTube channels without recording or showing your face.",
    },
    {
      icon: Cpu,
      title: "AI Content Systems",
      description:
        "Use artificial intelligence to generate scripts, ideas and viral content.",
    },
    {
      icon: TrendingUp,
      title: "Algorithm Domination",
      description:
        "Understand how the YouTube algorithm pushes videos to millions of viewers.",
    },
    {
      icon: BrainCircuit,
      title: "Automated Growth",
      description:
        "Create systems that keep your channel growing every day.",
    },
    {
      icon: Zap,
      title: "Viral Short Strategy",
      description:
        "Leverage Shorts to grow faster than traditional channels.",
    },
  ];

  return (
    <div className="min-h-screen w-full bg-[#050510] text-white relative overflow-hidden">

      {/* Cyberpunk grid background */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
            linear-gradient(rgba(0,255,255,0.08) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,0,255,0.08) 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* glow lights */}
      <div className="absolute top-[-200px] left-[-200px] w-[500px] h-[500px] bg-cyan-500 blur-[200px] opacity-20" />
      <div className="absolute bottom-[-200px] right-[-200px] w-[500px] h-[500px] bg-purple-600 blur-[200px] opacity-20" />

      <main className="relative z-10 max-w-7xl mx-auto px-6 py-24">

        {/* HERO */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center space-y-10"
        >

          <div className="inline-block px-6 py-2 rounded-full border border-cyan-400/40 bg-cyan-400/10 text-cyan-300 text-sm tracking-widest">
            AI YOUTUBE SYSTEM
          </div>

          <h1 className="text-5xl md:text-7xl font-black leading-tight">

            <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
              PROFITABLE
            </span>

            <br />

            FACELESS YOUTUBE

          </h1>

          <p className="text-xl text-gray-300 max-w-3xl mx-auto">

            Build automated YouTube channels powered by artificial intelligence
            and grow audiences without recording videos or showing your face.

          </p>

          <button
            onClick={() => window.open(CHECKOUT_URL, "_blank")}
            className="mt-6 px-10 py-5 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-bold text-lg rounded-xl hover:scale-105 transition shadow-lg shadow-cyan-500/30"
          >
            START THE SYSTEM
          </button>

        </motion.div>

        {/* FEATURES */}

        <section className="mt-28 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="p-8 rounded-2xl border border-purple-500/20 bg-[#0a0a1a] backdrop-blur hover:border-cyan-400/40 transition"
              >

                <Icon className="w-8 h-8 text-cyan-400 mb-4" />

                <h3 className="text-xl font-bold mb-2">
                  {feature.title}
                </h3>

                <p className="text-gray-400">
                  {feature.description}
                </p>

              </motion.div>
            );
          })}

        </section>

        {/* CTA */}

        <section className="mt-32 text-center">

          <h2 className="text-4xl md:text-6xl font-black">

            Build Your
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              {" "}AI YouTube Empire
            </span>

          </h2>

          <p className="text-gray-400 mt-6 text-lg">
            Start building faceless channels that generate views and revenue.
          </p>

          <button
            onClick={() => window.open(CHECKOUT_URL, "_blank")}
            className="mt-10 px-12 py-6 bg-gradient-to-r from-purple-600 to-cyan-500 text-white font-bold text-xl rounded-xl hover:scale-105 transition shadow-2xl shadow-purple-500/30"
          >
            ACCESS NOW
          </button>

        </section>

      </main>

    </div>
  );
}