import React, { Component, ErrorInfo, ReactNode } from "react";
import { Link } from "react-router-dom";

interface Props {
  children?: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null,
  };

  public static getDerivedStateFromError(error: Error): State {
    // Update state so the next render will show the fallback UI.
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // You can also log the error to an error reporting service like Sentry
    console.error("Uncaught error:", error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-slate-navy p-6">
          <div className="max-w-md w-full bg-white/5 border border-white/10 rounded-xl p-8 text-center backdrop-blur-sm shadow-2xl">
            <h1 className="text-3xl font-display font-bold text-white mb-4">Something went wrong</h1>
            <p className="text-white/70 mb-8 leading-relaxed">
              We're sorry, an unexpected error occurred. Please try refreshing the page or returning to the homepage.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => window.location.reload()}
                className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white rounded-lg font-medium transition-colors border border-white/10"
              >
                Refresh Page
              </button>
              <Link 
                to="/"
                onClick={() => this.setState({ hasError: false, error: null })}
                className="px-6 py-3 bg-vivid-amber text-slate-navy hover:bg-vivid-amber/90 rounded-lg font-bold transition-colors"
              >
                Go Home
              </Link>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
