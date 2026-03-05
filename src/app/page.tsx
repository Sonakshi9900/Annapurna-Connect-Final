"use client";

import React from "react";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Button } from "@/components/ui/Button";
import { Card, CardContent, CardTitle, CardDescription } from "@/components/ui/Card";
import { ArrowRight, Leaf, MapPin, Clock, HeartHandshake } from "lucide-react";
import { motion } from "framer-motion";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50 dark:bg-background">
      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative pt-24 pb-32 lg:pt-36 lg:pb-40 overflow-hidden">
          <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
            <motion.div initial="hidden" animate="visible" variants={fadeIn} className="max-w-3xl mx-auto space-y-8">
              <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-sm font-medium text-primary mb-4">
                <span className="flex h-2 w-2 rounded-full bg-primary mr-2"></span>
                Connecting Donors & NGOs in Real Time
              </div>
              <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white pb-2">
                Turn Surplus Food Into <span className="text-primary">Impact.</span>
              </h1>
              <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 leading-relaxed">
                Join a dynamic network of food donors and NGOs. Easily donate excess food, track its journey, and reduce hunger in your local community.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                <Button size="lg" className="w-full sm:w-auto text-base" asChild>
                  <Link href="/role-selection">
                    Get Started Now
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="w-full sm:w-auto text-base" asChild>
                  <Link href="#how-it-works">Learn More</Link>
                </Button>
              </div>
            </motion.div>
          </div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/20 rounded-full blur-3xl opacity-50 -z-10"></div>
        </section>

        {/* Problem Statement */}
        <section id="problem" className="py-24 bg-white dark:bg-slate-900">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
                  The Problem is Real.
                </h2>
                <p className="text-lg text-slate-600 dark:text-slate-300">
                  Every day, tons of perfectly good food go to waste while millions face hunger. The gap between surplus and need is often just a matter of logistics and awareness.
                </p>
                <ul className="space-y-4 pt-4">
                  {[
                    "1/3 of all food globally goes to waste.",
                    "Logistical challenges prevent timely distribution.",
                    "Lack of real-time communication between donors and NGOs."
                  ].map((item, i) => (
                    <li key={i} className="flex items-start">
                      <div className="mr-3 mt-1 bg-red-100 dark:bg-red-900/40 p-1 rounded-full text-red-600">
                        <ArrowRight className="h-4 w-4" />
                      </div>
                      <span className="text-slate-700 dark:text-slate-200">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
              <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-soft-lg border border-border bg-slate-100 dark:bg-slate-800 flex items-center justify-center">
                {/* Placeholder for an Image -> To be replaced with actual image or illustration */}
                <div className="text-center text-slate-400">
                  <HeartHandshake className="h-24 w-24 mx-auto mb-4 opacity-50" />
                  <p>Illustration: Wastage vs Hunger</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section id="how-it-works" className="py-24 bg-slate-50 dark:bg-slate-950">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 dark:text-white mb-4">
                How Annapurna Connect Works
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-300">
                A seamless process to bridge the gap between surplus food and the communities that need it.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                { icon: Leaf, title: "1. List Surplus", desc: "Donors easily add details about available food, quantity, and expiry time.", color: "text-green-500", bg: "bg-green-100 dark:bg-green-900/30" },
                { icon: MapPin, title: "2. Real-time Ping", desc: "Nearby NGOs are immediately notified via our real-time tracking system.", color: "text-orange-500", bg: "bg-orange-100 dark:bg-orange-900/30" },
                { icon: Clock, title: "3. Timely Pickup", desc: "NGOs accept the donation and arrange for swift collection before expiry.", color: "text-blue-500", bg: "bg-blue-100 dark:bg-blue-900/30" }
              ].map((step, i) => (
                <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ delay: i * 0.2 }} variants={fadeIn}>
                  <Card className="h-full border-none shadow-soft relative overflow-hidden group hover:-translate-y-2 transition-transform duration-300">
                    <CardContent className="pt-8">
                      <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${step.bg} ${step.color}`}>
                        <step.icon className="h-7 w-7" />
                      </div>
                      <CardTitle className="mb-3">{step.title}</CardTitle>
                      <CardDescription className="text-base">{step.desc}</CardDescription>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Impact Stats */}
        <section id="impact" className="py-20 bg-primary text-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-white/20">
              {[
                { label: "Meals Rescued", value: "50,000+" },
                { label: "Active NGOs", value: "120+" },
                { label: "Donors", value: "350+" },
                { label: "Cities Active", value: "12" },
              ].map((stat, i) => (
                <div key={i} className="flex flex-col space-y-2">
                  <span className="text-4xl md:text-5xl font-extrabold">{stat.value}</span>
                  <span className="text-primary-light font-medium">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 bg-white dark:bg-slate-900">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="max-w-2xl mx-auto space-y-8 bg-slate-50 dark:bg-slate-800 rounded-[2rem] p-10 md:p-16 shadow-soft-lg border border-border">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
                Ready to make a difference?
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-300">
                Whether you have food to give or mouths to feed, join Annapurna Connect today.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
                <Button size="lg" className="w-full sm:w-auto" asChild>
                  <Link href="/signup?role=donor">I want to Donate</Link>
                </Button>
                <Button size="lg" variant="secondary" className="w-full sm:w-auto" asChild>
                  <Link href="/signup?role=ngo">I am an NGO</Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-border bg-slate-50 dark:bg-background py-8">
        <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-primary font-bold">
            <Leaf className="h-5 w-5" />
            <span>Annapurna Connect</span>
          </div>
          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} Annapurna Connect. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
