import GlowCard from "@/components/GlowCard";

export default function AboutPage() {
  return (
    <GlowCard title="About Procrastination Tracker">
      <p>
        Procrastination Tracker is a glow-themed productivity app concept designed to
        show how modern web tech can turn messy to-do lists into focused, trackable sprints.
      </p>
      <p>
        It&apos;s built with <strong>Next.js</strong>, <strong>React</strong>, and client-side
        storage, wrapped in a neon UI that feels like a calm command center instead of a boring
        checklist.
      </p>
      <p className="muted">
        Use this in your portfolio to demonstrate frontend engineering, state management,
        UX design, and basic analytics logic.
      </p>
    </GlowCard>
  );
}
