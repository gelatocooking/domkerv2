import type { ProblemCard } from "./types";

export function ProblemSection({ problemCards }: { problemCards: ProblemCard[] }) {
  return (
    <section className="problem-section" aria-labelledby="problem-heading">
      <div className="problem-head">
        <p className="problem-eyebrow">CZY TO BRZMI ZNAJOMO?</p>
        <h2 id="problem-heading">Rozwiązujemy problemy, z którymi mierzy się Twoja firma</h2>
        <p className="problem-sublead">
          Widzieliśmy to setki razy - od codziennych frustracji po bariery, które hamują tempo i
          przewidywalność realizacji.
        </p>
      </div>

      <div className="problem-grid" aria-label="Najczęstsze ryzyka">
        {problemCards.map((card, index) => (
          <article key={card.pill} className={`problem-card tone-${index + 1}`}>
            <span className="problem-pill">{card.pill}</span>
            <h3>{card.title}</h3>
            <p>{card.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

