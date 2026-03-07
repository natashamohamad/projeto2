"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Zap, Shield, TrendingUp } from "lucide-react";
import Progress from "@/components/progress";
import HotmartUpsell from "@/components/hotmart-upsell";

export default function White() {
  const benefits = [
    "Permanent Entry: All current modules and every future update at no extra cost.",
    "Priority Support: Ongoing access to our community and mentorship updates.",
    "Inflation Proof: Lock in today's price and protect yourself from future subscription hikes."
  ];

  return (
    <div className="min-h-[100vh] w-full bg-[#02030a] text-white relative overflow-x-hidden overflow-y-auto">
      {/* Cyberpunk background grid + scanlines */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div
          className="absolute inset-0 mix-blend-screen"
          style={{
            backgroundImage: `linear-gradient(rgba(0,255,255,0.08) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(255,0,255,0.08) 1px, transparent 1px)`,
            backgroundSize: "55px 55px",
          }}
        />
        {/* scanlines */}
        <div
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage:
              "repeating-linear-gradient(to bottom, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 2px, rgba(0,255,255,0.06) 3px)",
          }}
        />
      </div>

      {/* neon glows */}
      <div className="pointer-events-none absolute top-[-220px] left-[-200px] w-[520px] h-[520px] bg-cyan-500 blur-[220px] opacity-60" />
      <div className="pointer-events-none absolute bottom-[-220px] right-[-260px] w-[560px] h-[560px] bg-fuchsia-600 blur-[230px] opacity-60" />
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[380px] h-[380px] bg-violet-500 blur-[200px] opacity-30" />

      <main className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 py-10 md:py-14">
        {/* Warning Banner – cyberpunk style */}
        <div className="relative w-full mb-6 md:mb-8">
          <div className="absolute -inset-[1px] rounded-xl bg-gradient-to-r from-cyan-400 via-fuchsia-500 to-yellow-400 opacity-70 blur-sm" />
          <div className="relative w-full rounded-xl bg-black/80 border border-cyan-400/40 shadow-[0_0_25px_rgba(0,255,255,0.35)] overflow-hidden">
            <div className="absolute inset-0 opacity-25 mix-blend-screen">
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage:
                    "repeating-linear-gradient(90deg, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 4px, rgba(255,0,255,0.14) 5px)",
                }}
              />
            </div>
            <div className="relative flex items-center justify-center px-4 sm:px-6 py-4 gap-3">
              <div className="h-2 w-2 rounded-full bg-red-500 animate-pulse shadow-[0_0_12px_rgba(248,113,113,0.9)]" />
              <div className="text-[11px] sm:text-sm font-semibold text-center tracking-[0.18em] uppercase text-cyan-100">
                Please do not close or refresh this page, we have a limited time offer!
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="relative flex flex-col items-center w-full max-w-4xl gap-8 px-4 sm:px-5 py-8 mx-auto rounded-3xl border border-cyan-400/20 bg-black/70 backdrop-blur-xl shadow-[0_0_35px_rgba(34,211,238,0.35)]">
          {/* Progress Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col items-center gap-3 text-center w-full"
          >
            <span className="text-xs sm:text-sm font-mono tracking-[0.18em] uppercase text-cyan-300/80">
              // processing your access in the mainframe…
            </span>
            <Progress progress={68} />
          </motion.div>

          {/* Upsell Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="w-full"
          >
            <div className="relative rounded-3xl border border-cyan-400/30 bg-gradient-to-br from-black via-[#050515] to-[#0b0018] p-6 md:p-8 backdrop-blur-xl shadow-[0_0_45px_rgba(56,189,248,0.50)]">
              {/* inner neon border */}
              <div className="pointer-events-none absolute inset-[1px] rounded-[22px] border border-fuchsia-400/30 opacity-70" />
              <div className="absolute inset-0 rounded-3xl bg-[radial-gradient(circle_at_top,_rgba(34,211,238,0.25),_transparent_55%),radial-gradient(circle_at_bottom,_rgba(244,63,94,0.25),_transparent_55%)]" />

              <div className="relative z-10 space-y-6">
                {/* Header */}
                <div className="text-center space-y-4">
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-400/60 bg-cyan-500/15 backdrop-blur-md shadow-[0_0_18px_rgba(34,211,238,0.7)]"
                  >
                    <Zap className="w-4 h-4 text-cyan-300" />
                    <span className="text-[11px] sm:text-xs font-semibold tracking-[0.25em] uppercase text-cyan-200">
                      Exclusive one-time cyber upgrade
                    </span>
                  </motion.div>

                  <h2 className="text-3xl md:text-4xl font-black tracking-tight">
                    <span className="bg-gradient-to-r from-cyan-300 via-fuchsia-400 to-yellow-300 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(244,114,182,0.6)]">
                      Lifetime Access Protocol
                    </span>
                  </h2>

                  <p className="text-lg md:text-xl text-cyan-50/90 font-light">
                    Lock your faceless YouTube system into a permanent, neon-powered future.
                  </p>
                </div>

                {/* Main Offer Text */}
                <div className="space-y-4 text-cyan-50/90 leading-relaxed">
                  <p className="text-base md:text-lg">
                    Upgrade to{" "}
                    <span className="text-fuchsia-400 font-semibold">
                      Faceless Channels - Lifetime Access
                    </span>{" "}
                    right now and eliminate all recurring fees. For a single, one-time
                    investment, you unlock a permanently upgraded creator system:
                  </p>

                  {/* Benefits List */}
                  <div className="space-y-3">
                    {benefits.map((benefit, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 + index * 0.08 }}
                        className="flex items-start gap-3 p-4 rounded-2xl border border-cyan-400/30 bg-gradient-to-r from-black/60 via-[#020617] to-black/60 hover:border-fuchsia-400/80 hover:shadow-[0_0_30px_rgba(244,114,182,0.6)] transition-all duration-300"
                      >
                        <CheckCircle2 className="w-5 h-5 text-cyan-300 flex-shrink-0 mt-0.5 drop-shadow-[0_0_10px_rgba(34,211,238,0.9)]" />
                        <p className="text-sm sm:text-base text-slate-100">{benefit}</p>
                      </motion.div>
                    ))}
                  </div>

                  <p className="text-base md:text-lg font-medium text-cyan-100 pt-2">
                    Secure your spot for life and focus entirely on scaling your faceless empire.
                  </p>
                </div>

                {/* Hotmart Upsell Component */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                  className="pt-4"
                >
                  <HotmartUpsell black={false} />
                </motion.div>

                {/* Trust Indicators */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.9 }}
                  className="flex flex-wrap items-center justify-center gap-4 pt-4 border-t border-cyan-400/20"
                >
                  <div className="flex items-center gap-2 text-xs sm:text-sm text-cyan-200/80">
                    <Shield className="w-4 h-4 text-cyan-300 drop-shadow-[0_0_10px_rgba(34,211,238,0.9)]" />
                    <span>Quantum-encrypted payment gateway</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs sm:text-sm text-cyan-200/80">
                    <TrendingUp className="w-4 h-4 text-fuchsia-300 drop-shadow-[0_0_10px_rgba(244,114,182,0.9)]" />
                    <span>One-time lifetime protocol upgrade</span>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  );
}
