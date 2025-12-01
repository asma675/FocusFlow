import { useState } from "react";
import GlowCard from "@/components/GlowCard";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 2000);
  };

  return (
    <GlowCard title="Contact / Feedback">
      <form className="form-grid" onSubmit={handleSubmit}>
        <label>
          <span>Your email (optional)</span>
          <input className="input" type="email" placeholder="you@example.com" />
        </label>
        <label>
          <span>Message</span>
          <textarea
            className="input textarea"
            placeholder="Share feedback, ideas, or feature requests."
          />
        </label>
        <button type="submit" className="btn primary wide">
          Send message
        </button>
        {submitted && <p className="success-text">Message sent (demo)! ✨</p>}
      </form>
      <p className="muted">
        In a production app, this form would post to an API route backed by
        a database or email service. For demo purposes, it just simulates success.
      </p>
    </GlowCard>
  );
}
