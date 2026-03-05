"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Zap,
  TrendingUp,
  Target,
  Rocket,
  Sparkles,
  Shield,
} from "lucide-react";
import Link from "next/link";
import ConfettiEffect from "@/components/confetti";

const CHECKOUT_URL = "https://pay.hotmart.com/U104758447T?bid=1772740567785";

export default function ProfitableFacelessYoutube() {
  const features = [
    {
      icon: Rocket,
      title: "Launch Faceless YouTube Channels",
      description:
        "Build powerful YouTube channels without showing your face.",
    },
    {
      icon: TrendingUp,
      title: "Scale Channels for Profit",
      description:
        "Turn views into revenue using automated monetization strategies.",
    },
    {
      icon: Zap,
      title: "Automate Your Workflow",
      description:
        "Use AI tools to produce high-quality content at scale.",
    },
    {
      icon: Target,
      title: "Find Viral Niches",
      description:
        "Discover profitable niches with massive growth potential.",
    },
    {
      icon: Sparkles,
      title: "AI Content Creation",
      description:
        "Generate scripts, visuals and videos using advanced AI tools.",
    },
    {
      icon: Shield,
      title: "Avoid Channel Risks",
      description:
        "Learn safe strategies that protect your channels from penalties.",
    },
  ];

  const benefits = [
    "Create automated YouTube channels without appearing on camera",
    "Build multiple monetized channels in scalable niches",
    "Use AI tools to generate scripts and video ideas instantly",
    "Automate video production and publishing workflows",
    "Find viral niches with massive view potential",
    "Create viral Shorts and long-form videos",
    "Grow channels consistently with algorithm-friendly strategies",
    "Monetize with ads, affiliates and digital products",
    "Build a scalable YouTube content business",
    "Avoid common mistakes that kill new channels",
  ];

  return (
    <div className="w-full min-h-screen bg-black text-white relative overflow-hidden">

      {/* Background grid */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(rgba(255,0,0,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,0,0,0.1) 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      {/* Top accent line */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-red-600 to-transparent" />

      <main className="relative z-10">

        {/* HERO */}
        <section className="max-w-6xl mx-auto px-6 py-24 text-center space-y-8">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >

            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-red-600/40 bg-red-600/10 mb-6">
              <span className="h-2 w-2 bg-red-500 rounded-full animate-pulse" />
              <span className="text-sm text-red-400 font-medium">
                AI YOUTUBE SYSTEM
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-black leading-tight">

              <span className="bg-gradient-to-r from-white via-red-500 to-white bg-clip-text text-transparent">
                PROFITABLE
              </span>

              <br />

              <span className="text-white">
                FACELESS YOUTUBE
              </span>

            </h1>

            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">

              Build profitable YouTube channels using
              <span className="text-red-500 font-semibold">
                {" "}AI automation
              </span>{" "}
              without showing your face.

            </p>

            <div className="pt-8">

              <button
                onClick={() => window.open(CHECKOUT_URL, "_blank")}
                className="group inline-flex items-center gap-3 px-8 py-4 bg-red-600 hover:bg-red-700 text-white font-bold text-lg rounded-lg transition-all hover:scale-105 shadow-lg shadow-red-600/40"
              >

                START BUILDING NOW

                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />

              </button>

            </div>

          </motion.div>

        </section>

        {/* FEATURES */}
        <section className="max-w-7xl mx-auto px-6 py-20 border-t border-red-600/20">

          <div className="text-center mb-16">

            <h2 className="text-4xl font-bold">

              What You'll <span className="text-red-500">Learn</span>

            </h2>

          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

            {features.map((feature, index) => {

              const Icon = feature.icon;

              return (

                <div
                  key={index}
                  className="p-6 rounded-xl border border-gray-800 bg-gray-900/40 hover:border-red-600/40 transition"
                >

                  <Icon className="w-6 h-6 text-red-500 mb-4" />

                  <h3 className="text-xl font-bold mb-2">
                    {feature.title}
                  </h3>

                  <p className="text-gray-400">
                    {feature.description}
                  </p>

                </div>

              );
            })}

          </div>

        </section>

        {/* BENEFITS */}
        <section className="max-w-6xl mx-auto px-6 py-20 border-t border-red-600/20">

          <div className="text-center mb-16">

            <h2 className="text-4xl font-bold">

              What You Get Inside

            </h2>

          </div>

          <div className="grid md:grid-cols-2 gap-4">

            {benefits.map((benefit, i) => (

              <div
                key={i}
                className="flex gap-4 items-start p-4 border border-gray-800 rounded-lg bg-gray-900/30"
              >

                <div className="w-5 h-5 rounded-full bg-red-600 mt-1" />

                <p className="text-gray-300">
                  {benefit}
                </p>

              </div>

            ))}

          </div>

        </section>

        {/* FINAL CTA */}
        <section className="text-center py-24 border-t border-red-600/20">

          <h2 className="text-5xl font-black mb-6">

            Build Your
            <span className="text-red-500"> YouTube Empire</span>

          </h2>

          <p className="text-gray-400 mb-10 text-lg">

            Start creating profitable faceless YouTube channels today.

          </p>

          <button
            onClick={() => window.open(CHECKOUT_URL, "_blank")}
            className="px-10 py-5 bg-gradient-to-r from-red-600 to-red-700 hover:scale-105 transition text-white font-bold text-xl rounded-lg shadow-2xl shadow-red-600/40"
          >

            ACCESS THE SYSTEM

          </button>

        </section>

        <ConfettiEffect />

      </main>

      <footer className="text-center py-10 border-t border-red-600/20 text-gray-500 text-sm">

        © 2025 Profitable Faceless YouTube

      </footer>

    </div>
  );
}