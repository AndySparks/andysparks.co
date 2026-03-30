import "../styles/testimonials.css";

const testimonials = [
  {
    quote:
      "Andy has changed my life as a founder, husband, and general human being. He's helped me navigate the toughest career challenges.",
    attribution: "CEO, client since 2020",
  },
  {
    quote:
      "Before meeting Andy I was a solo Founder with one speed; doing my best to clear the road in front of me.",
    attribution: "CEO, client since 2021",
  },
  {
    quote:
      "Andy has been invaluable because he combines his real-world executive experience with expert coaching skills, offering advice that is both practical and insightful.",
    attribution: "CEO, client since 2021",
  },
  {
    quote:
      "Andy has helped me navigate restructuring a company, my cofounder split, and many subjects you simply won't find textbooks for.",
    attribution: "CEO, client since 2023",
  },
];

export function Testimonials() {
  return (
    <section className="testimonials">
      <h2>What clients say</h2>
      <div className="testimonials-grid">
        {testimonials.map((t, i) => (
          <blockquote key={i} className="testimonial-card">
            <p>{t.quote}</p>
            <footer>{t.attribution}</footer>
          </blockquote>
        ))}
      </div>
    </section>
  );
}
