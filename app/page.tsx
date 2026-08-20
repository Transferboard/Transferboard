import { EvidenceBoard } from "@/components/EvidenceBoard";
import { boardPreview, demoDataNotice, latestClaims, platformStats } from "@/data/homepage";

const navItems = ["The Board", "Latest Claims", "Methodology", "About"];

function Header() {
  return (
    <header className="site-header">
      <a className="brand" href="#top" aria-label="TransferBoard home"><span className="brand-mark">TB</span><span>TransferBoard</span></a>
      <nav className="desktop-nav" aria-label="Primary navigation">{navItems.map((item) => <a key={item} href={`#${item.toLowerCase().replaceAll(" ", "-")}`}>{item}</a>)}</nav>
      <details className="mobile-nav"><summary>Menu</summary><nav aria-label="Mobile navigation">{navItems.map((item) => <a key={item} href={`#${item.toLowerCase().replaceAll(" ", "-")}`}>{item}</a>)}</nav></details>
    </header>
  );
}

function Strength({ value }: { value: number }) {
  return <span className="strength" aria-label={`Claim strength ${value} out of 5`}>{Array.from({ length: 5 }, (_, i) => <i key={i} className={i < value ? "on" : undefined} />)}</span>;
}

export default function Home() {
  return (
    <main id="top">
      <Header />
      <section className="hero section-grid" aria-labelledby="hero-title">
        <div className="hero-copy">
          <p className="kicker">Public transfer reporting intelligence</p>
          <h1 id="hero-title">WHO ACTUALLY KNOWS?</h1>
          <p className="lede">TransferBoard tracks transfer reporting and scores claims against what was true when they were published — not with hindsight stripped of context.</p>
          <div className="cta-row"><a className="button primary" href="#the-board">See the board</a><a className="button secondary" href="#methodology">How it works</a></div>
          <p className="demo-note">{demoDataNotice}</p>
        </div>
        <EvidenceBoard />
      </section>

      <section id="the-board" className="board-section" aria-labelledby="board-title">
        <div className="section-heading"><p className="kicker">The Board</p><h2 id="board-title">An editorial league table for transfer accuracy.</h2><p>Rankings preview how TransferBoard will compare reporting reliability without portraits, hype badges or game-style cards.</p></div>
        <div className="board-table" role="table" aria-label="Demo journalist rankings">
          <div className="board-row board-head" role="row"><span>Rank</span><span>Source</span><span>Score</span><span>Claims</span><span>Resolved</span><span>Move</span></div>
          {boardPreview.map((journalist) => <div className="board-row" role="row" key={journalist.rank}><span className="rank">#{journalist.rank}</span><span className="identity"><b>{journalist.initials}</b><span><strong>{journalist.name}</strong><em>{journalist.publication}</em></span></span><span className="score">{journalist.score}</span><span>{journalist.claims}</span><span>{journalist.resolved}%</span><span>{journalist.change}</span></div>)}
        </div>
      </section>

      <section id="latest-claims" className="claims-section" aria-labelledby="claims-title">
        <div className="section-heading compact"><p className="kicker">Latest Claims</p><h2 id="claims-title">Claims are records, not rumours.</h2></div>
        <div className="claims-list">{latestClaims.map((claim) => <article className="claim" key={claim.id}><div><time>{claim.timestamp}</time><h3>{claim.player}</h3><p>{claim.journalist} · {claim.source}</p></div><p className="relationship">{claim.relationship}</p><Strength value={claim.strength} /><span className={`status ${claim.status.toLowerCase().replaceAll(" ", "-")}`}>{claim.status}</span><span className="impact">{claim.scoreImpact ?? "pending"}</span></article>)}</div>
      </section>

      <section className="stats" aria-label="Demo platform statistics">{platformStats.map((stat) => <div key={stat.label}><strong>{stat.value}</strong><span>{stat.label}</span></div>)}</section>

      <section id="methodology" className="methodology section-grid" aria-labelledby="method-title"><div><p className="kicker">Methodology</p><h2 id="method-title">Every score has receipts.</h2><p>TransferBoard scoring is designed around evidence, claim strength, publication context and the world-state at the exact time a report appeared. Future public records should let readers trace a score back to individual claims and supporting evidence.</p><a className="button secondary dark" href="#methodology">Read the methodology</a></div><div className="receipt"><span>Evidence file</span><b>Claim → timestamp → context → outcome</b><p>Archived source notes, corroboration windows and resolution logic sit behind each score.</p></div></section>

      <footer id="about" className="site-footer"><a className="brand" href="#top"><span className="brand-mark">TB</span><span>TransferBoard</span></a><p>Football intelligence bureau meets illustrated matchday magazine. Homepage v1 uses demo data only.</p></footer>
    </main>
  );
}
