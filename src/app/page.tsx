"use client";

import React from "react";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Button } from "@/components/ui/Button";
import { ArrowRight, Leaf, MapPin, Clock, HeartHandshake, CheckCircle2, Users, Package, Star } from "lucide-react";
import { motion } from "framer-motion";

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">

        {/* Hero */}
        <section className="relative pt-28 pb-36 overflow-hidden bg-slate-900">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-green-950 -z-10" />
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-green-500/10 rounded-full blur-3xl -z-10" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-green-400/5 rounded-full blur-3xl -z-10" />

          <div className="container mx-auto px-4 md:px-6 text-center">
            <motion.div initial="hidden" animate="visible" variants={fadeIn} className="max-w-4xl mx-auto space-y-8">
              <div className="inline-flex items-center rounded-full border border-green-500/30 bg-green-500/10 px-4 py-1.5 text-sm font-medium text-green-400">
                <span className="flex h-2 w-2 rounded-full bg-green-400 mr-2 animate-pulse"></span>
                Connecting Donors & NGOs in Real Time
              </div>

              <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-tight text-white">
                Turn Surplus Food Into{" "}
                <span className="text-green-400">Impact.</span>
              </h1>

              <p className="text-xl text-slate-400 leading-relaxed max-w-2xl mx-auto">
                Join a dynamic network of food donors and NGOs. Donate excess food, track its journey, and reduce hunger in your community.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                <Button size="lg" asChild>
                  <Link href="/role-selection" className="flex items-center">
                    Get Started Now
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="#how-it-works">Learn More</Link>
                </Button>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-6 pt-4 text-sm text-slate-400">
                {["50,000+ Meals Rescued", "120+ NGOs", "350+ Donors", "12 Cities"].map((badge, i) => (
                  <div key={i} className="flex items-center gap-1.5">
                    <CheckCircle2 className="h-4 w-4 text-green-400" />
                    <span>{badge}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Problem */}
        <section id="problem" className="py-24 bg-white dark:bg-slate-900">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="space-y-6">
                <span className="text-sm font-semibold text-green-600 uppercase tracking-widest">The Problem</span>
                <h2 className="text-4xl font-bold tracking-tight text-slate-900 dark:text-white">The Problem is Real.</h2>
                <p className="text-lg text-slate-500 dark:text-slate-400 leading-relaxed">
                  Every day, tons of perfectly good food go to waste while millions face hunger. The gap is just a matter of logistics and awareness.
                </p>
                <ul className="space-y-4">
                  {[
                    "1/3 of all food globally goes to waste every year.",
                    "Logistical challenges prevent timely food distribution.",
                    "No real-time communication between donors and NGOs."
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="mt-1 bg-red-100 dark:bg-red-900/30 p-1 rounded-full">
                        <ArrowRight className="h-4 w-4 text-red-500" />
                      </div>
                      <span className="text-slate-600 dark:text-slate-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}
                className="relative h-[380px] rounded-3xl overflow-hidden bg-gradient-to-br from-green-50 to-orange-50 dark:from-slate-800 dark:to-slate-700 border border-slate-200 dark:border-slate-600 flex items-center justify-center shadow-lg">
                <div className="text-center space-y-4 p-8">
                  <div className="flex justify-center gap-6">
                    <div className="bg-white dark:bg-slate-700 rounded-2xl p-6 shadow-md text-center">
                      <p className="text-4xl font-extrabold text-red-500">931M</p>
                      <p className="text-sm text-slate-500 mt-1">Tons food wasted yearly</p>
                    </div>
                    <div className="bg-white dark:bg-slate-700 rounded-2xl p-6 shadow-md text-center">
                      <p className="text-4xl font-extrabold text-green-600">828M</p>
                      <p className="text-sm text-slate-500 mt-1">People facing hunger</p>
                    </div>
                  </div>
                  <div className="bg-white dark:bg-slate-700 rounded-2xl p-4 shadow-md">
                    <HeartHandshake className="h-10 w-10 text-green-600 mx-auto mb-2" />
                    <p className="text-sm font-medium text-slate-600 dark:text-slate-300">Annapurna Connect bridges this gap</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section id="how-it-works" className="py-24 bg-slate-50 dark:bg-slate-950">
          <div className="container mx-auto px-4 md:px-6">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-sm font-semibold text-green-600 uppercase tracking-widest">How It Works</span>
              <h2 className="text-4xl font-bold tracking-tight mt-3 mb-4 text-slate-900 dark:text-white">Simple. Fast. Impactful.</h2>
              <p className="text-lg text-slate-500 dark:text-slate-400">A seamless process to bridge the gap between surplus food and communities in need.</p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                { icon: Leaf, title: "1. List Surplus Food", desc: "Donors easily add details about available food — quantity, type, and pickup time.", color: "text-green-600", bg: "bg-green-100 dark:bg-green-900/30", border: "border-green-200 dark:border-green-800" },
                { icon: MapPin, title: "2. Real-time Alert", desc: "Nearby NGOs are immediately notified via our real-time notification system.", color: "text-orange-500", bg: "bg-orange-100 dark:bg-orange-900/30", border: "border-orange-200 dark:border-orange-800" },
                { icon: Clock, title: "3. Timely Pickup", desc: "NGOs accept and arrange swift collection — zero food wasted, zero hunger ignored.", color: "text-blue-500", bg: "bg-blue-100 dark:bg-blue-900/30", border: "border-blue-200 dark:border-blue-800" }
              ].map((step, i) => (
                <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }}
                  variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: i * 0.15 } } }}>
                  <div className={`h-full rounded-3xl border ${step.border} bg-white dark:bg-slate-900 p-8 hover:-translate-y-2 transition-transform duration-300 shadow-md`}>
                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${step.bg}`}>
                      <step.icon className={`h-7 w-7 ${step.color}`} />
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-white">{step.title}</h3>
                    <p className="text-slate-500 dark:text-slate-400 leading-relaxed">{step.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats */}
        <section id="impact" className="py-20 bg-green-600">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {[
                { icon: Package, label: "Meals Rescued", value: "50,000+" },
                { icon: HeartHandshake, label: "Active NGOs", value: "120+" },
                { icon: Users, label: "Donors", value: "350+" },
                { icon: MapPin, label: "Cities Active", value: "12" },
              ].map((stat, i) => (
                <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }}
                  variants={{ hidden: { opacity: 0, scale: 0.8 }, visible: { opacity: 1, scale: 1, transition: { duration: 0.5, delay: i * 0.1 } } }}
                  className="flex flex-col items-center space-y-2 text-white">
                  <stat.icon className="h-8 w-8 opacity-80 mb-1" />
                  <span className="text-4xl md:text-5xl font-extrabold">{stat.value}</span>
                  <span className="text-green-100 font-medium text-sm">{stat.label}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-24 bg-white dark:bg-slate-900">
          <div className="container mx-auto px-4 md:px-6">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="text-center mb-16">
              <span className="text-sm font-semibold text-green-600 uppercase tracking-widest">Testimonials</span>
              <h2 className="text-4xl font-bold tracking-tight mt-3 text-slate-900 dark:text-white">What People Say</h2>
            </motion.div>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { name: "Priya Sharma", role: "Restaurant Owner, Delhi", text: "Annapurna Connect made it so easy to donate our leftover food every evening. It feels great to know nothing goes to waste!" },
                { name: "Rahul Verma", role: "Director, City Hope Foundation", text: "We get real-time alerts whenever food is available nearby. This platform has transformed how we serve our community." },
                { name: "Meena Patel", role: "Event Organizer, Mumbai", text: "After every event, instead of throwing food, we list it here. The NGOs come quickly and everything is managed smoothly." },
              ].map((t, i) => (
                <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }}
                  variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { delay: i * 0.15 } } }}
                  className="bg-slate-50 dark:bg-slate-800 rounded-3xl p-8 border border-slate-200 dark:border-slate-700 shadow-md">
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, j) => <Star key={j} className="h-4 w-4 fill-yellow-400 text-yellow-400" />)}
                  </div>
                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-6">"{t.text}"</p>
                  <div>
                    <p className="font-semibold text-slate-800 dark:text-slate-100">{t.name}</p>
                    <p className="text-sm text-slate-400">{t.role}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 bg-slate-50 dark:bg-slate-950">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}
              className="max-w-2xl mx-auto bg-gradient-to-br from-green-600 to-green-800 rounded-3xl p-12 shadow-xl text-white space-y-6">
              <h2 className="text-4xl font-bold">Ready to make a difference?</h2>
              <p className="text-green-100 text-lg">Whether you have food to give or mouths to feed — join Annapurna Connect today.</p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link href="/signup?role=donor" className="bg-white text-green-700 font-semibold px-8 py-3 rounded-xl hover:bg-green-50 transition-colors">
                  I want to Donate
                </Link>
                <Link href="/signup?role=ngo" className="border-2 border-white text-white font-semibold px-8 py-3 rounded-xl hover:bg-white/10 transition-colors">
                  I am an NGO
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 py-10">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-2 text-green-600 font-bold text-xl">
              <Leaf className="h-6 w-6" />
              <span>Annapurna Connect</span>
            </div>
            <div className="flex gap-6 text-sm text-slate-500 dark:text-slate-400">
              <Link href="#problem" className="hover:text-green-600 transition-colors">The Problem</Link>
              <Link href="#how-it-works" className="hover:text-green-600 transition-colors">How it Works</Link>
              <Link href="#impact" className="hover:text-green-600 transition-colors">Our Impact</Link>
            </div>
            <p className="text-sm text-slate-400">© {new Date().getFullYear()} Annapurna Connect. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}