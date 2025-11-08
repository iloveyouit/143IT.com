"use client";

import React from "react";
import { AlertTriangle, Home, RefreshCw } from "lucide-react";
import Link from "next/link";

interface ErrorBoundaryProps {
  children: React.ReactNode;
  fallback?: React.ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
}

export default class ErrorBoundary extends React.Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    // Log error to monitoring service (e.g., Sentry)
    console.error("Error caught by boundary:", error, errorInfo);
    
    // TODO: Send to error monitoring service
    // Example: Sentry.captureException(error, { contexts: { react: errorInfo } });
  }

  handleReset = () => {
    this.setState({ hasError: false, error: null });
  };

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <div className="min-h-screen flex items-center justify-center px-6 bg-background">
          <div className="max-w-2xl w-full text-center">
            <div className="bg-background/50 backdrop-blur-sm border border-accent-1/20 rounded-xl p-8 md:p-12">
              <div className="bg-red-500/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <AlertTriangle className="h-10 w-10 text-red-500" />
              </div>

              <h1 className="text-3xl md:text-4xl font-heading font-bold mb-4 text-accent-1">
                Something went wrong
              </h1>

              <p className="text-text/80 mb-6">
                We're sorry, but something unexpected happened. Our team has been notified.
              </p>

              {this.state.error && process.env.NODE_ENV === "development" && (
                <div className="bg-background border border-accent-1/20 rounded-lg p-4 mb-6 text-left">
                  <p className="text-sm text-red-400 font-mono">
                    {this.state.error.toString()}
                  </p>
                </div>
              )}

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={this.handleReset}
                  className="btn-primary inline-flex items-center justify-center space-x-2"
                >
                  <RefreshCw className="h-5 w-5" />
                  <span>Try Again</span>
                </button>

                <Link
                  href="/"
                  className="btn-secondary inline-flex items-center justify-center space-x-2"
                >
                  <Home className="h-5 w-5" />
                  <span>Go Home</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

