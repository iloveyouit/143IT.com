"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    service: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setStatus("success");
        setFormData({
          name: "",
          email: "",
          company: "",
          phone: "",
          service: "",
          message: "",
        });

        // Reset to idle after 5 seconds
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        setStatus("error");
        setErrorMessage(data.error || "Failed to send message. Please try again.");

        // Reset to idle after 5 seconds
        setTimeout(() => setStatus("idle"), 5000);
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setStatus("error");
      setErrorMessage("Failed to send message. Please try again or email us directly at support@143it.com");

      // Reset to idle after 5 seconds
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "support@143it.com",
      href: "mailto:support@143it.com",
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+1 (720) 292-6098",
      href: "tel:+17202926098",
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Remote-First, Serving USA and CA",
      href: null,
    },
  ];

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-accent-1/5 to-transparent">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6">
            <span className="gradient-text">Get in Touch</span>
          </h1>
          <p className="text-xl text-text/80">
            Let's discuss how we can help transform your IT infrastructure
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-1">
              <h2 className="text-2xl font-heading font-bold mb-6">
                Contact Information
              </h2>

              <div className="space-y-6 mb-8">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="bg-accent-1/10 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                      <info.icon className="h-6 w-6 text-accent-1" />
                    </div>
                    <div>
                      <div className="text-text/60 text-sm mb-1">{info.title}</div>
                      {info.href ? (
                        <a
                          href={info.href}
                          className="text-text hover:text-accent-1 transition-colors font-medium"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <div className="text-text font-medium">{info.value}</div>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-accent-1/5 border border-accent-1/20 rounded-xl p-6">
                <h3 className="font-heading font-bold mb-3">Response Time</h3>
                <p className="text-text/80 text-sm">
                  We typically respond within 24 hours during business days. For urgent matters,
                  please call us directly.
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-background/50 backdrop-blur-sm border border-accent-1/20 rounded-xl p-8 card-glow">
                <h2 className="text-2xl font-heading font-bold mb-6">
                  Send Us a Message
                </h2>

                {status === "success" ? (
                  <div className="text-center py-12">
                    <div className="bg-accent-1/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle className="h-10 w-10 text-accent-1" />
                    </div>
                    <h3 className="text-2xl font-heading font-bold mb-3 text-accent-1">
                      Message Sent!
                    </h3>
                    <p className="text-text/80">
                      Thank you for contacting us. We'll get back to you soon.
                    </p>
                  </div>
                ) : status === "error" ? (
                  <div className="text-center py-12">
                    <div className="bg-red-500/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Mail className="h-10 w-10 text-red-500" />
                    </div>
                    <h3 className="text-2xl font-heading font-bold mb-3 text-red-500">
                      Something Went Wrong
                    </h3>
                    <p className="text-text/80 mb-4">
                      {errorMessage}
                    </p>
                    <button
                      onClick={() => setStatus("idle")}
                      className="btn-secondary"
                    >
                      Try Again
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-text/80 mb-2 text-sm font-medium">
                          Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 bg-background border border-accent-1/30 rounded-lg text-text placeholder-text/50 focus:outline-none focus:border-accent-1 transition-colors"
                          placeholder="John Doe"
                        />
                      </div>

                      <div>
                        <label htmlFor="email" className="block text-text/80 mb-2 text-sm font-medium">
                          Email *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 bg-background border border-accent-1/30 rounded-lg text-text placeholder-text/50 focus:outline-none focus:border-accent-1 transition-colors"
                          placeholder="john@company.com"
                        />
                      </div>

                      <div>
                        <label htmlFor="company" className="block text-text/80 mb-2 text-sm font-medium">
                          Company
                        </label>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-background border border-accent-1/30 rounded-lg text-text placeholder-text/50 focus:outline-none focus:border-accent-1 transition-colors"
                          placeholder="Your Company"
                        />
                      </div>

                      <div>
                        <label htmlFor="phone" className="block text-text/80 mb-2 text-sm font-medium">
                          Phone
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-background border border-accent-1/30 rounded-lg text-text placeholder-text/50 focus:outline-none focus:border-accent-1 transition-colors"
                          placeholder="+1 (555) 000-0000"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="service" className="block text-text/80 mb-2 text-sm font-medium">
                        Service Interested In
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-background border border-accent-1/30 rounded-lg text-text focus:outline-none focus:border-accent-1 transition-colors"
                      >
                        <option value="">Select a service</option>
                        <option value="managed-it">Managed Infrastructure</option>
                        <option value="cloud">Cloud Migration & Modernization</option>
                        <option value="automation">Automation & DevOps</option>
                        <option value="security">Security & Compliance</option>
                        <option value="ai">AI Integration</option>
                        <option value="consultation">General Consultation</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-text/80 mb-2 text-sm font-medium">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        className="w-full px-4 py-3 bg-background border border-accent-1/30 rounded-lg text-text placeholder-text/50 focus:outline-none focus:border-accent-1 transition-colors resize-none"
                        placeholder="Tell us about your project or requirements..."
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={status === "submitting"}
                      className="w-full btn-primary inline-flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <span>{status === "submitting" ? "Sending..." : "Send Message"}</span>
                      {status !== "submitting" && <Send className="h-5 w-5" />}
                    </button>

                    <p className="text-sm text-text/60 text-center">
                      By submitting this form, you agree to our Privacy Policy.
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
