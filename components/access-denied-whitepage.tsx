"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Zap,
  TrendingUp,
  Target,
  Rocket,
  Shield,
  Sparkles,
} from "lucide-react";
import ConfettiEffect from "@/components/confetti";

const CHECKOUT_URL =
  "https://pay.hotmart.com/U104758447T?bid=1772740567785";

export default function AccessDenied() {
  const features = [
    {
      icon: Zap,
      title: "Master the Faceless YouTube Automation",
      description:
        "Maximize your account visibility and reach millions of viewers.",
    },
    {
      icon: Target,
      title: "Optimize Your YouTube Profile",
      description:
        "Convert viewers into loyal followers with proven strategies.",
    },
    {
      icon: Rocket,
      title: "Unlimited Content Creation",
      description:
        "Use Canva to create unlimited Shorts and videos for YouTube.",
    },
    {
      icon: TrendingUp,
      title: "Stay Ahead of Trends",
      description:
        "Discover trending sounds and concepts that go viral on YouTube.",
    },
    {
      icon: Sparkles,
      title: "Viral Content Strategy",
      description:
        "Create compelling videos that earn thousands of views per video.",
    },
    {
      icon: Shield,
      title: "Avoid Common Pitfalls",
      description:
        "Learn how to avoid penalties and ensure steady growth.",
    },
  ];

  const benefits = [
    "Master the Faceless YouTube Automation and maximize your account visibility",
    "Optimize your YouTube profile to convert viewers into loyal followers",
    "How to use Canva to create unlimited Shorts and videos",
    "Stay up to date with the latest Faceless YouTube trends",
    "Discover how to find and leverage trending sounds and concepts",
    "Create compelling videos that earn thousands of views",
    "Develop a winning content strategy",
    "Create branding elements including profile photos and banners",
    "Use ChatGPT to enhance your YouTube video content",
    "Avoid common mistakes that stop channel growth",
    "Learn growth hacks to land on the YouTube Home feed",
    "Discover insider YouTube marketing strategies",
    "Stay ahead of competitors using advanced features",
    "Optimize your videos with YouTube SEO",
    "Stand out in crowded niches with modern strategies",
    "Master YouTube Shorts growth tactics",
    "Learn how to use ChatGPT for content creation",
  ];

  return (
    <div className="w-full h-svh bg-black text-white relative overflow-x-hidden overflow-y-auto">

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

      {/* Top red line */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-red-600 to-transparent" />

      <main className="relative z-10 w-full">

        {/* HERO */}
        <section className="max-w-7xl mx-auto px-6 py-24 text-center space-y-8">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >

            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-red-600/50 bg-red-600/10">
              <span className="h-2 w-2 rounded-full bg-red-600 animate-pulse" />
              <span className="text-sm font-medium text-red-400">
                PROFITABLE FACELESS YOUTUBE
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-black tracking-tight">

              <span className="bg-gradient-to-r from-white via-red-500 to-white bg-clip-text text-transparent">
                PROFITABLE
              </span>

              <br />

              <span className="text-white">
                FACELESS YOUTUBE
              </span>

            </h1>

            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">

              Build powerful YouTube channels using
              <span className="text-red-500 font-semibold">
                {" "}AI automation
              </span>
              {" "}without showing your face.

            </p>

            <button
              onClick={() => window.open(CHECKOUT_URL, "_blank")}
              className="mt-6 inline-flex items-center gap-3 px-8 py-4 bg-red-600 hover:bg-red-700 text-white font-bold text-lg rounded-lg transition-all hover:scale-105 shadow-lg shadow-red-600/50"
            >
              START YOUR JOURNEY
              <ArrowRight className="w-5 h-5" />
            </button>

          </motion.div>

        </section>

        {/* FEATURES */}
        <section className="py-20 border-t border-red-600/20">

          <div className="max-w-7xl mx-auto px-6">

            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
              What You Will <span className="text-red-600">Master</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

              {features.map((feature, index) => {

                const Icon = feature.icon;

                return (

                  <div
                    key={index}
                    className="p-6 rounded-xl border border-gray-800 bg-gray-900/50 hover:border-red-600/50 transition-all"
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

          </div>

        </section>

        {/* BENEFITS */}
        <section className="py-20 border-t border-red-600/20">

          <div className="max-w-6xl mx-auto px-6">

            <h2 className="text-4xl font-bold text-center mb-16">
              Everything Included
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

              {benefits.map((benefit, index) => (

                <div
                  key={index}
                  className="flex items-start gap-4 p-4 rounded-lg border border-gray-800 bg-gray-900/30"
                >

                  <div className="w-5 h-5 rounded-full bg-red-600 mt-1" />

                  <p className="text-gray-300">
                    {benefit}
                  </p>

                </div>

              ))}

            </div>

          </div>

        </section>

        {/* FINAL CTA */}
        <section className="py-20 text-center border-t border-red-600/20">

          <h2 className="text-4xl md:text-6xl font-black mb-6">

            Ready to Build Your
            <span className="text-red-600"> YouTube Empire</span>?

          </h2>

          <p className="text-xl text-gray-400 mb-8">
            Start creating profitable faceless channels today.
          </p>

          <button
            onClick={() => window.open(CHECKOUT_URL, "_blank")}
            className="px-10 py-5 bg-gradient-to-r from-red-600 to-red-700 text-white font-bold text-xl rounded-lg hover:scale-105 transition shadow-2xl shadow-red-600/50"
          >
            GET STARTED NOW
          </button>

        </section>

        <ConfettiEffect />

      </main>

    </div>
  );
}