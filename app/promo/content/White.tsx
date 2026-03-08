"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Zap, Shield, TrendingUp } from "lucide-react";
import { useState } from "react";
import { useLayer } from "@/context/layer-provider";
import Progress from "@/components/progress";
import Button from "@/components/button";
import { CheckCheck, Loader2 } from "lucide-react";

const CHECKOUT_LINK = "https://pay.hotmart.com/U104758447T?off=6ijz3f3g";

export default function White() {

  const { promoLink } = useLayer();
  const checkoutLink = CHECKOUT_LINK || promoLink;
  const [active, setActive] = useState<boolean>(false);

  const handleClick = () => {
    setActive(true);
    setTimeout(() => setActive(false), 750);
  };

  const benefits = [
    "Discover how faceless YouTube channels generate thousands of views.",
    "Learn simple systems to create videos without showing your face.",
    "Find profitable niches that grow fast on YouTube.",
    "Create content using simple tools and AI.",
    "Turn views into real online income."
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

{/* Warning banner */}

<div className="relative z-10 w-full bg-red-600 text-white">
<div className="mx-auto px-4 sm:px-6 py-4 font-medium text-center text-sm">
WAIT! Before you leave — we unlocked a special discount for you.
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
<Loader2 className="size-4 animate-spin"/>
) : (
<CheckCheck className="size-5"/>
)}

<span>YES! GET IT FOR $17</span>

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

<Progress progress={90} />

</motion.div>

{/* Offer box */}

<motion.div
initial={{ opacity: 0, scale: 0.95 }}
animate={{ opacity: 1, scale: 1 }}
transition={{ delay: 0.2 }}
className="w-full"
>

<div className="relative rounded-2xl border border-gray-800 bg-gradient-to-br from-gray-900/80 to-black p-6 md:p-8 backdrop-blur-sm">

<div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-red-600/10 to-transparent"/>

<div className="relative z-10 space-y-6">

{/* Header */}

              <div className="text-center space-y-4">
               
              <motion.div
initial={{ opacity: 0, y: 10 }}
animate={{ opacity: 1, y: 0 }}
transition={{ delay: 0.3 }}
className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-red-600/50 bg-red-600/10"
>

<Zap className="w-4 h-4 text-red-500"/>

<span className="text-sm font-medium text-red-400">
SPECIAL DISCOUNT UNLOCKED
</span>

</motion.div>

                <h2 className="text-3xl md:text-4xl font-black">
               
                <span className="bg-gradient-to-r from-white via-red-500 to-white bg-clip-text text-transparent">
               
                Faceless YouTube
               
                </span>
               
                </h2>

<p className="text-xl md:text-2xl text-gray-300 font-light">

Get instant access to the system behind faceless YouTube channels.

</p>

</div>

{/* Price */}

<div className="text-center space-y-2">

<p className="text-gray-400 line-through text-xl">

Regular Price $27

</p>

<p className="text-4xl font-black text-green-500">

Today Only $17

</p>

<p className="text-sm text-gray-400">

Exclusive discount unlocked on this page

</p>

</div>

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

<CheckCircle2 className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5"/>

<p>{benefit}</p>

</motion.div>

))}

</div>

{/* Trust badges */}

<motion.div
initial={{ opacity: 0 }}
animate={{ opacity: 1 }}
transition={{ delay: 0.9 }}
className="flex flex-wrap items-center justify-center gap-4 pt-4 border-t border-gray-800"
>

<div className="flex items-center gap-2 text-sm text-gray-400">
<Shield className="w-4 h-4 text-red-500"/>
Secure Payment
</div>

<div className="flex items-center gap-2 text-sm text-gray-400">
<TrendingUp className="w-4 h-4 text-red-500"/>
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
<Loader2 className="size-5 animate-spin"/>
) : (
<CheckCheck className="size-5"/>
)}

<span>YES! UNLOCK FOR $17</span>

</Button>

</a>

</div>

</div>

);
}