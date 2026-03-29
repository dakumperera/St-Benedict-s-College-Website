"use client";

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Card } from "@/components/ui/card";
import { Users, Award, Shield, BookOpen, Star, Heart } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function BoardOfPrefectsPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background text-foreground">
        {/* Header Strip - Dark Green like Old Website */}
        <section className="bg-primary py-4">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl md:text-4xl font-bold text-white text-center uppercase tracking-wider">
              Board of Prefects
            </h1>
          </div>
        </section>

        {/* Full Width Hero Image - NO CROPPING */}
        <div className="w-full relative mt-10">
          {/* 
              Using intrinsic aspect ratio of the image. 
              We want it full width, height auto.
           */}
          <Image
            src="/img/prefects.jpg"
            alt="Board of Prefects 2024/2025"
            width={1920}
            height={1080}
            className="w-full h-auto block"
            priority
            unoptimized // Ensure full quality without Next.js aggressive resizing if needed
          />
          {/* Optional Caption below image if needed, or overlay at very bottom */}
          <div className="bg-black/80 text-white text-center py-2 text-sm italic">
            The Board of Prefects of St. Benedict's College - Academic Year
            2024/2025
          </div>
        </div>

        {/* Introduction Text */}
        <section className="py-12">
          <div className="container mx-auto px-4 max-w-5xl text-center">
            <p className="text-lg text-muted-foreground leading-relaxed">
              The Board of Prefects at St. Benedict's College is the highest
              student body of authority. Comprised of senior students who have
              distinguished themselves through character, academics, and
              extra-curricular activities, they are the standard-bearers of
              discipline and loyalty within the college.
            </p>
          </div>
        </section>

        {/* Prefect's Logo Section - Explicitly Separate */}
        <section className="py-8 bg-white text-center">
          <div className="container mx-auto px-4 flex flex-col items-center">
            <h2 className="text-3xl font-bold text-primary mb-6 uppercase">
              Prefect's Logo
            </h2>
            <div className="relative w-48 h-48 md:w-64 md:h-64">
              <Image
                src="/img/prefects-logo.png"
                alt="Prefect's Logo"
                fill
                className="object-contain"
              />
            </div>
            <div className="mt-8 max-w-3xl text-sm md:text-base text-muted-foreground space-y-4">
              <p>
                At the heart of the student leadership lies the Prefects' Logo,
                a symbol of honor and service. The displayed shield represents
                protection of the college values.
              </p>
              <p className="font-semibold text-primary">"Noble & Brave"</p>
            </div>
          </div>
        </section>

        {/* Leadership Structure - Modern Wave Animation */}
        <section className="py-20 relative overflow-hidden">
          {/* Animated Wave Background */}
          <div className="absolute inset-0 bg-linear-to-b from-secondary/5 to-background z-0" />
          <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-primary/20 to-transparent" />

          {/* Wave Blobs */}
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-[pulse_8s_ease-in-out_infinite]" />
          <div className="absolute top-1/2 -right-24 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl animate-[pulse_10s_ease-in-out_infinite]" />

          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-linear-to-r from-primary to-blue-600">
                Leadership Structure
              </h2>
              <p className="text-muted-foreground text-lg">
                The hierarchy of student governance
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.2,
                  },
                },
              }}
              className="max-w-6xl mx-auto space-y-12"
            >
              {/* Head Prefect */}
              <motion.div
                variants={{
                  hidden: { y: 30, opacity: 0 },
                  visible: { y: 0, opacity: 1 },
                }}
                className="flex justify-center"
              >
                <motion.div
                  whileHover={{
                    y: -5,
                    boxShadow:
                      "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
                  }}
                  className="bg-white/80 backdrop-blur-sm border border-primary/10 rounded-2xl shadow-lg p-8 max-w-md w-full text-center group cursor-default relative overflow-hidden"
                >
                  <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-primary via-blue-500 to-primary" />
                  <div className="mb-6 inline-flex items-center justify-center w-20 h-20 bg-primary/5 rounded-full group-hover:bg-primary/10 transition-colors">
                    <Shield className="w-10 h-10 text-primary group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2 text-foreground">
                    Head Prefect
                  </h3>
                  <p className="text-muted-foreground font-medium">
                    Leader of the Student Body
                  </p>
                </motion.div>
              </motion.div>

              {/* Deputies */}
              <div className="grid md:grid-cols-2 gap-8">
                {[
                  {
                    title: "Deputy Head Prefects",
                    role: "Administration & Operations",
                    icon: Award,
                    color: "text-amber-600",
                    bg: "bg-amber-50",
                  },
                  {
                    title: "Academic Prefect",
                    role: "Academic Excellence",
                    icon: BookOpen,
                    color: "text-blue-600",
                    bg: "bg-blue-50",
                  },
                ].map((item, idx) => (
                  <motion.div
                    key={item.title}
                    variants={{
                      hidden: { y: 30, opacity: 0 },
                      visible: { y: 0, opacity: 1 },
                    }}
                    whileHover={{
                      y: -5,
                      boxShadow:
                        "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
                    }}
                    className="bg-white/80 backdrop-blur-sm border border-border/50 rounded-2xl shadow-md p-8 text-center hover:border-primary/20 transition-all relative overflow-hidden"
                  >
                    <div
                      className={`mb-4 inline-flex items-center justify-center w-16 h-16 ${item.bg} rounded-full mb-6`}
                    >
                      <item.icon className={`w-8 h-8 ${item.color}`} />
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-foreground">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground">{item.role}</p>
                  </motion.div>
                ))}
              </div>

              {/* General Body */}
              <motion.div
                variants={{
                  hidden: { y: 30, opacity: 0 },
                  visible: { y: 0, opacity: 1 },
                }}
                className="bg-white border rounded-xl shadow-sm p-8 text-center"
              >
                <h3 className="text-xl font-bold mb-6 text-foreground">
                  Senior Prefects & Stewards
                </h3>
                <div className="flex flex-wrap justify-center gap-4">
                  {[
                    "Discipline",
                    "Events",
                    "Welfare",
                    "Religious Affairs",
                    "Sports",
                    "Media",
                  ].map((tag) => (
                    <span
                      key={tag}
                      className="px-6 py-3 bg-secondary rounded-full text-sm font-medium text-secondary-foreground hover:bg-primary hover:text-white transition-colors cursor-default"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Duties Section - Simple List */}
        <section className="py-16">
          <div className="container mx-auto px-4 max-w-5xl">
            <h2 className="text-3xl font-bold text-center mb-12">
              Duties & Responsibilities
            </h2>
            <div className="grid md:grid-cols-2 gap-x-12 gap-y-8">
              {[
                {
                  title: "Discipline",
                  desc: "Ensuring strict adherence to college rules and regulations.",
                },
                {
                  title: "Leadership",
                  desc: "Guiding junior students and setting a positive example.",
                },
                {
                  title: "Events",
                  desc: "Organizing and managing college functions and ceremonies.",
                },
                {
                  title: "Welfare",
                  desc: "Looking after the well-being of the student community.",
                },
              ].map((item) => (
                <div key={item.title} className="flex gap-4 items-start">
                  <div className="mt-1 min-w-4 h-4 rounded-full bg-primary" />
                  <div>
                    <h3 className="font-bold text-lg">{item.title}</h3>
                    <p className="text-muted-foreground">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
