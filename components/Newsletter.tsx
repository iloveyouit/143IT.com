"use client";

import { useState } from "react";
import { Send, CheckCircle, AlertCircle } from "lucide-react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setStatus("success");
        setEmail("");
        // Reset to idle after 8 seconds
        setTimeout(() => setStatus("idle"), 8000);
      } else {
        setStatus("error");
        setErrorMessage(data.error || "Failed to subscribe. Please try again.");
        // Reset to idle after 5 seconds
        setTimeout(() => setStatus("idle"), 5000);
      }
    } catch (error) {
      console.error("Newsletter submission error:", error);
      setStatus("error");
      setErrorMessage("Failed to subscribe. Please try again later.");
      // Reset to idle after 5 seconds
      setTimeout(() => setStatus("idle"), 5000);
    }
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

          {status === "success" ? (
            <div className="bg-accent-1/10 border border-accent-1/30 rounded-xl p-8 max-w-xl mx-auto">
              <div className="flex items-center justify-center mb-4">
                <CheckCircle className="h-12 w-12 text-accent-1" />
              </div>
              <h3 className="text-xl font-heading font-bold mb-2 text-accent-1">
                Successfully Subscribed!
              </h3>
              <p className="text-text/80">
                Thanks for subscribing! Check your email for confirmation.
              </p>
            </div>
          ) : (
            <>
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  disabled={status === "submitting"}
                  className="flex-1 px-6 py-3 bg-background/50 border border-accent-1/30 rounded-lg text-text placeholder-text/50 focus:outline-none focus:border-accent-1 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                />
                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="btn-primary inline-flex items-center justify-center space-x-2 whitespace-nowrap disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <span>{status === "submitting" ? "Subscribing..." : "Subscribe"}</span>
                  {status !== "submitting" && <Send className="h-4 w-4" />}
                </button>
              </form>

              {status === "error" && (
                <div className="mt-4 bg-red-500/10 border border-red-500/30 rounded-lg p-4 max-w-xl mx-auto">
                  <div className="flex items-center justify-center space-x-2 text-red-500">
                    <AlertCircle className="h-5 w-5" />
                    <p className="font-semibold">{errorMessage}</p>
                  </div>
                </div>
              )}
            </>
          )}

          <p className="mt-6 text-sm text-text/60">
            No spam, ever. Unsubscribe anytime.
          </p>
        </div>
      </div>
    </section>
  );
}

