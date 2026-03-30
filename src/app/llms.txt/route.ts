export function GET() {
  const content = `# Andy Sparks

> Executive coach for startup founders and CEOs

## About

Andy Sparks is an executive coach who works with startup founders and CEOs navigating growth, leadership, and the challenges of building companies. He works with 15-20 clients at a time and has coached over 50 people for more than 1,500 hours since 2020.

Previously, Andy co-founded Mattermark (B2B analytics, grew to $5M ARR and 150,000 newsletter subscribers) and Holloway (digital book publishing). He raised over $20M in venture capital across three companies and is a Harvard Business School case study subject. He is also building Management Craft, a library of mental models and frameworks for management.

## Coaching

Andy works with venture-backed startup founders, CEOs, and their executive teams — usually B2B software companies between ten and a few hundred employees. He specializes in the inflection point where founders transition from building the product to building the organization that builds the product.

His coaching combines real operator experience with expert coaching skills. He spent a decade as a startup CEO and COO, so when clients describe what they're going through, he's not guessing what it feels like.

Sessions happen over Zoom or phone, usually every two weeks, and cover whatever is most alive — hiring decisions, co-founder conflicts, leadership challenges, or personal growth.

## Links

- Homepage: https://andysparks.co
- Coaching: https://andysparks.co/coaching
- About: https://andysparks.co/about
- Essays: https://andysparks.co/essays
- Contact: https://andysparks.co/contact
- Media: https://andysparks.co/media
- Management Craft: https://managementcraft.co
- LinkedIn: https://www.linkedin.com/in/andyjsparks/
- X/Twitter: https://x.com/SparksZilla
- Full content: https://andysparks.co/llms-full.txt
`;

  return new Response(content, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=86400",
    },
  });
}
