"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Zap, Shield, TrendingUp } from "lucide-react";
import { useState } from "react";
import { useLayer } from "@/context/layer-provider";
import Progress from "@/components/progress";
import Button from "@/components/button";
import { CheckCheck, Loader2 } from "lucide-react";

const CHECKOUT_LINK = "https://pay.hotmart.com/U104758447T?bid=1772740567785";

export default function White() {
  const { promoLink } = useLayer();
  const checkoutLink = CHECKOUT_LINK || promoLink;
  const [active, setActive] = useState<boolean>(false);

  const handleClick = () => {
    setActive(true);
    setTimeout(() => setActive(false), 750);
  };

  const benefits = [
    "Learn how to build profitable faceless YouTube channels from scratch.",
    "Discover viral video formats that generate massive views.",
    "Use simple tools to create content without recording yourself.",
    "Find profitable niches with high growth potential.",
    "Scale channels and turn views into real online income."
  ];

  return (
    <div className="min-h-svh w-full bg-black text-white relative overflow-x-hidden overflow-y-auto">

      {/* Animated background */}
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

      {/* Warning banner */}
      <div className="relative z-10 w-full bg-red-600 text-white">
        <div className="mx-auto px-4 sm:px-6 py-4 font-medium text-center text-sm">
          Wait! Your order is not complete yet. This exclusive offer is available only on this page.
        </div>
      </div>

      {/* CTA Top */}
      <div className="relative z-10 w-full max-w-xl px-5 pt-6 mx-auto">
        <a href={checkoutLink} className="w-full block">
          <Button
            onClick={handleClick}
            disabled={active}
            className="w-full pulse p-5 bg-gradient-to-b from-green-500 to-green-600 hover:from-green-400 hover:to-green-500"
          >
            {active ? (
              <Loader2 className="size-4 animate-spin" />
            ) : (
              <CheckCheck className="size-5" />
            )}
            <span>YES! UNLOCK PROFITABLE FACELESS YOUTUBE</span>
          </Button>
        </a>
      </div>

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center w-full max-w-4xl gap-8 px-5 py-8 mx-auto">

        {/* Progress */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col items-center gap-3 text-center w-full"
        >
          <span className="text-sm italic text-gray-400">
            Finalizing your order...
          </span>

          <Progress progress={67} />
        </motion.div>

        {/* Offer box */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="w-full"
        >
          <div className="relative rounded-2xl border border-gray-800 bg-gradient-to-br from-gray-900/80 to-black p-6 md:p-8 backdrop-blur-sm">

            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-red-600/10 to-transparent" />

            <div className="relative z-10 space-y-6">

              {/* Header */}
              <div className="text-center space-y-4">

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-red-600/50 bg-red-600/10"
                >
                  <Zap className="w-4 h-4 text-red-500" />
                  <span className="text-sm font-medium text-red-400">
                    LIMITED TIME OFFER
                  </span>
                </motion.div>

                <h2 className="text-3xl md:text-4xl font-black">
                  <span className="bg-gradient-to-r from-white via-red-500 to-white bg-clip-text text-transparent">
                    Profitable Faceless YouTube
                  </span>
                </h2>

                <p className="text-xl md:text-2xl text-gray-300 font-light">
                  Discover how creators are building profitable YouTube channels without showing their face.
                </p>
              </div>

              {/* Offer text */}
              <div className="space-y-4 text-gray-300 leading-relaxed">

                <p className="text-lg">
                  Before you continue, you have the opportunity to access the system behind profitable faceless YouTube channels.
                </p>

                <p className="text-lg">
                  Inside <span className="text-red-500 font-semibold">Profitable Faceless YouTube</span>, you will discover how creators build channels that generate views, subscribers and automated online income.
                </p>

                {/* Benefits */}
                <div className="space-y-3">

                  {benefits.map((benefit, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.4 + index * 0.1 }}
                      className="flex items-start gap-3 p-4 rounded-lg border border-gray-800 bg-gray-900/30 hover:border-red-600/50 transition-all"
                    >
                      <CheckCircle2 className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                      <p>{benefit}</p>
                    </motion.div>
                  ))}

                </div>

                <p className="text-lg font-medium text-white pt-2 text-center">
                  Start building your faceless YouTube system today.
                </p>

              </div>

              {/* Trust badges */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.9 }}
                className="flex flex-wrap items-center justify-center gap-4 pt-4 border-t border-gray-800"
              >
                <div className="flex items-center gap-2 text-sm text-gray-400">
                  <Shield className="w-4 h-4 text-red-500" />
                  Secure Payment
                </div>

                <div className="flex items-center gap-2 text-sm text-gray-400">
                  <TrendingUp className="w-4 h-4 text-red-500" />
                  Proven Strategy
                </div>
              </motion.div>

            </div>
          </div>
        </motion.div>

        {/* CTA Bottom */}
        <a href={checkoutLink} className="w-full max-w-xl block">
          <Button
            onClick={handleClick}
            disabled={active}
            className="w-full pulse p-6 text-lg bg-gradient-to-b from-green-500 to-green-600 hover:from-green-400 hover:to-green-500"
          >
            {active ? (
              <Loader2 className="size-5 animate-spin" />
            ) : (
              <CheckCheck className="size-5" />
            )}
            <span>YES! GET INSTANT ACCESS</span>
          </Button>
        </a>

      </div>
    </div>
  );
}