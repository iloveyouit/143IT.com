"use client";

import { useState } from "react";
import { Send } from "lucide-react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Integrate with n8n webhook
    setStatus("success");
    setEmail("");
    setTimeout(() => setStatus("idle"), 3000);
  };

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-transparent to-accent-1/5">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Stay <span className="gradient-text">Connected</span>
          </h2>
          <p className="text-lg text-text/80 mb-8">
            Get monthly insights on IT automation, cloud infrastructure, and AI integration delivered to your inbox.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="flex-1 px-6 py-3 bg-background/50 border border-accent-1/30 rounded-lg text-text placeholder-text/50 focus:outline-none focus:border-accent-1 transition-colors"
            />
            <button
              type="submit"
              className="btn-primary inline-flex items-center justify-center space-x-2 whitespace-nowrap"
            >
              <span>Subscribe</span>
              <Send className="h-4 w-4" />
            </button>
          </form>

          {status === "success" && (
            <p className="mt-4 text-accent-1 font-semibold">
              Thanks for subscribing! Check your email for confirmation.
            </p>
          )}

          <p className="mt-6 text-sm text-text/60">
            No spam, ever. Unsubscribe anytime.
          </p>
        </div>
      </div>
    </section>
  );
}
