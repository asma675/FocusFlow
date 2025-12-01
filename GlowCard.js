export default function GlowCard({ title, children, actions }) {
  return (
    <section className="card">
      {title && <h1 className="card-title glow-text">{title}</h1>}
      <div className="card-body">{children}</div>
      {actions && <div className="card-actions">{actions}</div>}
    </section>
  );
}
