"use client";

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  GraduationCap,
  Trophy,
  BookOpen,
} from "lucide-react";
import { motion } from "framer-motion";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setFormData({ name: "", email: "", subject: "", message: "" });
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background text-foreground">
        {/* Modern Hero Section */}
        <section className="relative py-24 bg-primary overflow-hidden">
          <div className="absolute inset-0 bg-[url('/img/pattern.png')] opacity-10 mix-blend-overlay"></div>
          <div className="absolute inset-0 bg-linear-to-r from-primary via-primary/90 to-blue-900/90" />
          <div className="container mx-auto px-4 relative z-10 text-center text-primary-foreground">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-6xl font-bold mb-6 tracking-tight"
            >
              Contact Us
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-xl opacity-90 max-w-2xl mx-auto font-light"
            >
              We are here to assist you. Reach out to St. Benedict's College for
              any inquiries or support.
            </motion.p>
          </div>
        </section>

        {/* Contact Information Cards */}
        <section className="py-12 -mt-16 relative z-20">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  icon: Phone,
                  title: "Call Us",
                  line1: "+94 (11) 243 4567",
                  line2: "+94 (11) 243 4568",
                  action: "tel:+94112434567",
                },
                {
                  icon: Mail,
                  title: "Email Us",
                  line1: "info@stbenedictscollege.lk",
                  line2: "admissions@stbenedictscollege.lk",
                  action: "mailto:info@stbenedictscollege.lk",
                },
                {
                  icon: MapPin,
                  title: "Visit Us",
                  line1: "St. Benedict's College",
                  line2: "Kotahena, Colombo 13",
                  action: "#map",
                },
              ].map((item, idx) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + idx * 0.1 }}
                >
                  <Card className="p-8 text-center h-full hover:shadow-lg transition-all duration-300 border-none shadow-md bg-white">
                    <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center mb-6 text-primary">
                      <item.icon className="w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                    <div className="space-y-1 text-muted-foreground">
                      <p>
                        <a
                          href={item.action}
                          className="hover:text-primary transition"
                        >
                          {item.line1}
                        </a>
                      </p>
                      <p>{item.line2}</p>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Main Form & Map Section */}
        <section className="py-20 lg:py-28">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="mb-8">
                  <h2 className="text-3xl font-bold mb-4 flex items-center gap-3">
                    <Send className="w-6 h-6 text-primary" />
                    Send us a Message
                  </h2>
                  <p className="text-muted-foreground">
                    Have a question? Fill out the form below and our team will
                    get back to you shortly.
                  </p>
                </div>

                <form
                  onSubmit={handleSubmit}
                  className="space-y-6 bg-secondary/20 p-8 rounded-2xl border border-border"
                >
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Your Name</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="John Doe"
                        className="bg-background"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="john@example.com"
                        className="bg-background"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      placeholder="Admissions Inquiry"
                      className="bg-background"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      placeholder="How can we help you?"
                      className="bg-background resize-none"
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full text-lg">
                    Send Message
                  </Button>

                  {submitted && (
                    <div className="p-4 bg-green-50 text-green-700 rounded-lg text-center animate-pulse">
                      Message sent successfully!
                    </div>
                  )}
                </form>
              </motion.div>

              {/* Map & Office Hours */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                <div
                  id="map"
                  className="rounded-2xl overflow-hidden shadow-xl border-4 border-white h-[400px] w-full bg-secondary"
                >
                  {/* Updated Map Embed for St. Benedict's College, Colombo 13 */}
                  <iframe
                    src="https://maps.google.com/maps?q=St.%20Benedict's%20College,%20Colombo%2013&t=&z=15&ie=UTF8&iwloc=&output=embed"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>

                <div className="bg-secondary/30 rounded-2xl p-8 border border-border">
                  <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                    <Clock className="w-5 h-5 text-primary" />
                    Office Hours
                  </h3>
                  <div className="space-y-4">
                    <div className="flex justify-between border-b border-border/50 pb-2">
                      <span className="text-muted-foreground">
                        Monday - Friday
                      </span>
                      <span className="font-medium">7:30 AM - 1:30 PM</span>
                    </div>
                    <div className="flex justify-between border-b border-border/50 pb-2">
                      <span className="text-muted-foreground">
                        Saturday (Office)
                      </span>
                      <span className="font-medium">8:30 AM - 12:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">
                        Sunday & Holidays
                      </span>
                      <span className="font-medium text-red-500">Closed</span>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 bg-primary/5 rounded-xl border border-primary/10 text-center">
                    <GraduationCap className="w-8 h-8 text-primary mx-auto mb-2" />
                    <h4 className="font-bold">Admissions</h4>
                    <p className="text-sm text-muted-foreground">ext. 101</p>
                  </div>
                  <div className="p-4 bg-primary/5 rounded-xl border border-primary/10 text-center">
                    <Trophy className="w-8 h-8 text-primary mx-auto mb-2" />
                    <h4 className="font-bold">Sports</h4>
                    <p className="text-sm text-muted-foreground">ext. 105</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
