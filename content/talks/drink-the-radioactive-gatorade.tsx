import type { Talk } from "@/lib/talks";

const talk: Talk = {
  slug: "drink-the-radioactive-gatorade",
  title: "Drink the Radioactive Gatorade",
  subtitle: "What it looks like when you actually use AI as a founder.",
  date: "2026-04-22",
  venue: "Fisher College of Business, Ohio State",
  audience: "Fisher undergrads + faculty, hosted by the Keenan Center",
  duration: "90 min",
  description:
    "A 90-minute hands-on Claude workshop. Cold Claude has a ceiling. Loaded Claude — skills, markdown, context, community — is how you get past it.",
  segments: [
    { number: 1, name: "Opener + whiteboard", timeBudget: "10 min" },
    { number: 2, name: "Drink the Radioactive Gatorade", timeBudget: "5 min" },
    { number: 3, name: "Rock on the desk", timeBudget: "5 min" },
    { number: 4, name: "Vanilla vs. Loaded Claude", timeBudget: "15 min" },
    { number: 5, name: "Where best practices come from", timeBudget: "10 min" },
    { number: 6, name: "Live build", timeBudget: "15 min" },
    { number: 7, name: "Demo clinic", timeBudget: "15 min" },
    { number: 8, name: "Close", timeBudget: "10 min" },
  ],
  slides: [
    // ===== Segment 1 — Opener + whiteboard =====
    {
      id: "title",
      segment: 1,
      variant: "title",
      title: "Drink the Radioactive Gatorade",
      subtitle: "What it looks like when you actually use AI as a founder.",
      body: (
        <p className="talk-slide__footer">
          Andy Sparks · Ohio State · April 22, 2026
        </p>
      ),
      notes: (
        <>
          <p>Open slide visible as people file in. Don&rsquo;t say anything yet. Greet individuals. Say hi to Ashley, Cheryl, AV. Use their names. Keep this slide up until room is settled.</p>
        </>
      ),
    },
    {
      id: "about",
      segment: 1,
      variant: "bullets",
      title: "A bit about me",
      body: (
        <ul>
          <li>Three companies over 16 years.</li>
          <li>Failed the first. Sold the second — HBR teaches a case on it.</li>
          <li>The third runs profitably. I coach ~20 venture-backed CEOs.</li>
          <li>Now I&rsquo;m building <strong>Management Craft</strong> — a research wiki for founders.</li>
        </ul>
      ),
      notes: (
        <p>60 sec max. Credibility without performing it. Then pivot: <em>&ldquo;That&rsquo;s why I&rsquo;m up here talking about how I actually use AI to move faster.&rdquo;</em> Don&rsquo;t hang on this slide.</p>
      ),
    },
    {
      id: "why-care",
      segment: 1,
      variant: "statement",
      title: "Why I care",
      body: (
        <>
          <p>A year ago I thought AI was a helpful search engine.</p>
          <p>Last month I shipped a website redesign, a blog post, and three business memos in a weekend.</p>
          <p><em>Something changed. I don&rsquo;t think most people have realized it yet.</em></p>
        </>
      ),
      notes: <p>90 sec. Keep it personal, not hyped. &ldquo;Most people&rdquo; is not a flex — it&rsquo;s the setup for the show of hands later.</p>,
    },
    {
      id: "the-deal",
      segment: 1,
      variant: "bullets",
      title: "The deal",
      body: (
        <>
          <p><strong>I commit to:</strong> end on time · break at ~45 · ask what you actually want at the end.</p>
          <p><strong>You commit to:</strong> phones away · lean into discomfort when it shows up · stick to the schedule.</p>
          <p><em>Deal?</em></p>
        </>
      ),
      notes: <p>90 sec. Get verbal assent + nods. Don&rsquo;t move on until the room has actually responded. The explicit contract sets up the hard questions later.</p>,
    },
    {
      id: "what-do-you-want",
      segment: 1,
      variant: "poll",
      title: "What do you want to learn today?",
      subtitle: "Shout it out. I'll write it on the board.",
      notes: (
        <>
          <p>Walk to the whiteboard. Write every answer. Don&rsquo;t edit or rank — capture. Target 6–10 items.</p>
          <p>Once board is full, cluster into themes out loud (&ldquo;these four are all about getting started&rdquo;). Name which will get direct airtime and which will shape the demo clinic. 5 min here.</p>
          <p><strong>Exit:</strong> &ldquo;Good — I&rsquo;ve got your list. Let me show you where I&rsquo;m starting from.&rdquo;</p>
        </>
      ),
    },

    // ===== Segment 2 — Drink the Radioactive Gatorade =====
    {
      id: "origin-story",
      segment: 2,
      variant: "statement",
      className: "talk-slide--quote",
      title: "How I found out",
      body: (
        <blockquote>
          <p>A few months ago I was trying to get Claude to help me edit an essay. I fed it a PDF and the result was mediocre. Then I figured out — LLMs don&rsquo;t like PDFs. They have refined palates and prefer <strong>Markdown like humans like Michelins</strong>.</p>
        </blockquote>
      ),
      subtitle: "— Smithing Words, andysparks.co",
      notes: <p>Read this verbatim. Pause on &ldquo;Markdown like humans like Michelins&rdquo; — let the room hear it. This is the moment the metaphor lands.</p>,
    },
    {
      id: "radioactive",
      segment: 2,
      variant: "statement",
      className: "talk-slide--climax",
      body: (
        <p className="talk-slide__climax-word">RADIOACTIVE</p>
      ),
      notes: (
        <p>Beat slide, held for 3–5 seconds. Say nothing. The single word on a bleed carries the transition from &ldquo;I was trying to edit an essay&rdquo; to what happened next. Paula Scher&rsquo;s shout.</p>
      ),
    },
    {
      id: "superpowers",
      segment: 2,
      variant: "statement",
      className: "talk-slide--quote",
      body: (
        <blockquote>
          <p>I converted the PDF to markdown and tried again. The next time I consulted Claude on writing, it felt like I had drunk a can of <strong>radioactive gatorade</strong>.</p>
          <p>I had acquired superpowers. <em>Perhaps I had forsaken my soul.</em></p>
          <p>There was no going back.</p>
        </blockquote>
      ),
      subtitle: "— Smithing Words, andysparks.co",
      notes: <p>Read slowly. The &ldquo;forsaken my soul&rdquo; line is the self-aware license — you&rsquo;re not evangelizing, you&rsquo;re confessing. Pause before the turn.</p>,
    },
    {
      id: "discontinuity",
      segment: 2,
      variant: "statement",
      title: "Here's the thing",
      body: (
        <>
          <p>A small subset of the population just realized they can drink radioactive Gatorade and get superpowers.</p>
          <p><strong>Everybody else is pretending it&rsquo;s 2019.</strong></p>
        </>
      ),
      notes: <p>30 sec. This is the title in its full form. Pause. Then: <em>&ldquo;That&rsquo;s the reason I&rsquo;m here. Not because AI is cool. Because the gap between people who have drunk and people who haven&rsquo;t is about to matter a lot.&rdquo;</em></p>,
    },
    {
      id: "the-gates",
      segment: 2,
      variant: "statement",
      title: "The gates just opened",
      body: (
        <>
          <p>A skilled developmental editor: <strong>$2,000 to $5,000 per piece.</strong></p>
          <p>A Claude subscription: <strong>$20 to $200 a month.</strong></p>
          <p><em>That&rsquo;s a gate. Behind every gate like that — editors, lawyers, consultants you can&rsquo;t afford — most work dies.</em></p>
        </>
      ),
      notes: (
        <>
          <p>90 sec. The gate framing is the memetic version of democratization. Key move: generalize from editors to any expert the Fisher audience can&rsquo;t afford.</p>
          <p><strong>Optional authority anchor (if Fisher faculty are in the room):</strong> <em>&ldquo;Wharton&rsquo;s Ethan Mollick just published a field experiment on 515 startups — half were shown case studies of how other startups are using AI successfully, half weren&rsquo;t. The gap in outcomes was already measurable.&rdquo;</em></p>
          <p><strong>Then:</strong> &ldquo;Some of those gates are open now. That&rsquo;s what drinking the Gatorade means.&rdquo;</p>
        </>
      ),
    },
    {
      id: "show-of-hands",
      segment: 2,
      variant: "poll",
      title: "Show of hands",
      body: (
        <p>How many of you <strong>feel you&rsquo;re underusing this</strong> — that other people are getting more from it than you are?</p>
      ),
      notes: (
        <>
          <p>Pluralize the question (Postman). Count hands visibly. Don&rsquo;t fill the silence. Then: <em>&ldquo;That feeling is the subject of this talk.&rdquo;</em></p>
          <p><strong>Exit:</strong> &ldquo;OK — let me show you what that gap looks like concretely.&rdquo;</p>
        </>
      ),
    },

    // ===== Segment 3 — Rock on the desk =====
    {
      id: "cold-demo",
      segment: 3,
      variant: "terminal",
      className: "talk-slide--demo",
      label: "> LIVE DEMO",
      title: "Cold Claude",
      subtitle: "A fresh chat. No project. No skill. No context.",
      body: (
        <p><em>&ldquo;I&rsquo;m starting a SaaS — help me think through pricing my product.&rdquo;</em></p>
      ),
      notes: (
        <>
          <p>5 min total. Type the prompt live. Let the room watch the model chew. Read the output aloud with them. Expected output: generic value-based pricing advice, &ldquo;research competitors,&rdquo; &ldquo;offer tiers.&rdquo;</p>
          <p>Narrate the weakness out loud: <em>&ldquo;Notice what it can&rsquo;t do. It doesn&rsquo;t know my product, my market, my customers, my costs, my brand. It&rsquo;s giving me a Wikipedia article. This is cold Claude. This is everyone in this room&rsquo;s current ceiling.&rdquo;</em></p>
          <p><strong>Failure watch:</strong> if output is surprisingly good, push with a follow-up that exposes the context gap (&ldquo;which pricing tier should I start with for a B2B product with a 90-day sales cycle and a $40K ACV?&rdquo;).</p>
          <p><strong>Exit:</strong> &ldquo;Now watch what happens when Claude stops being cold.&rdquo;</p>
        </>
      ),
    },

    // ===== Segment 4 — Vanilla vs. Loaded Claude =====
    {
      id: "new-hire",
      segment: 4,
      variant: "statement",
      title: "Here's what just happened",
      body: (
        <>
          <p>You saw <strong>cold Claude</strong> — an intelligent new hire on day one.</p>
          <p>Smart. Capable. No idea who you are, what you sell, or what &ldquo;good&rdquo; looks like at your shop.</p>
          <p>There&rsquo;s a ceiling on what a new hire can do today. <em>The ceiling moves when you onboard them.</em></p>
        </>
      ),
      notes: <p>60 sec. The new-hire metaphor runs on existing mental infrastructure. Everyone has onboarded or been onboarded.</p>,
    },
    {
      id: "fluent",
      segment: 4,
      variant: "statement",
      title: "Loaded, not holding a document",
      body: (
        <>
          <p>When I load Claude up with my voice, my company, my frameworks, the books I&rsquo;ve read...</p>
          <p>The same prompt becomes a different conversation.</p>
          <p><strong>The AI isn&rsquo;t <em>holding a document</em> anymore. It&rsquo;s <em>fluent</em> in my world.</strong></p>
        </>
      ),
      notes: <p>Emphasize &ldquo;fluent, not holding a document.&rdquo; This is the whole argument in six words (from MC&rsquo;s product-metaphor doc). 60 sec.</p>,
    },
    {
      id: "matrix-scene",
      segment: 4,
      variant: "statement",
      className: "talk-slide--quote",
      title: "Trinity and the pilot program",
      body: (
        <>
          <p><strong>Neo:</strong> Can you fly that thing?</p>
          <p><strong>Trinity:</strong> Not yet.</p>
          <p><strong>Trinity (into radio):</strong> Tank, I need a pilot program for a B-212 helicopter. Hurry.</p>
          <p><em>[She gets uploaded the skill. Seconds later, she&rsquo;s flying.]</em></p>
        </>
      ),
      subtitle: "— The Matrix (1999)",
      notes: <p>Deliver the scene beats with timing. 45 sec. Pause after &ldquo;seconds later, she&rsquo;s flying.&rdquo; Then the turn → next slide.</p>,
    },
    {
      id: "sadly-thankfully",
      segment: 4,
      variant: "statement",
      title: "Sadly / thankfully",
      body: (
        <>
          <p>Sadly, our brains don&rsquo;t work like Trinity&rsquo;s.</p>
          <p><em>Thankfully, LLMs do.</em></p>
        </>
      ),
      notes: <p>15 sec. The &ldquo;sadly/thankfully&rdquo; turn does the self-aware licensing so the Matrix reference lands as a smile, not a flex. Then pivot: <em>&ldquo;That&rsquo;s what a skill does in Claude Code. Not a better prompt — a capability transfer.&rdquo;</em></p>,
    },
    {
      id: "loaded-demo",
      segment: 4,
      variant: "terminal",
      className: "talk-slide--demo",
      label: "> LIVE DEMO",
      title: "Loaded Claude",
      subtitle: "Same pricing question. Skill + CLAUDE.md loaded.",
      body: <p>Claude Code · pricing skill installed · CLAUDE.md for a real (or audience-chosen) SaaS.</p>,
      notes: (
        <>
          <p>4–5 min. Pull a business idea from the whiteboard from segment 1 if one fits. Otherwise use the pre-written fake SaaS. Run the same pricing prompt. Narrate the diff live: <em>&ldquo;See how it&rsquo;s asking about customer acquisition cost? See how it&rsquo;s referencing actual competitors? This isn&rsquo;t a better prompt. It&rsquo;s a different Claude.&rdquo;</em></p>
          <p><strong>Failure watch:</strong> if the output looks similar to cold Claude, push with a context-specific follow-up that only loaded Claude can answer (&ldquo;should we raise prices given the churn numbers in my Stripe export?&rdquo;).</p>
        </>
      ),
    },
    {
      id: "three-layers",
      segment: 4,
      variant: "bullets",
      title: "Three layers",
      body: (
        <ul>
          <li>
            <strong>Markdown + Obsidian.</strong> The AI reads files. Your notes, your voice doc, your syllabus — all of it is context now. <em>LLMs have refined palates. They prefer markdown like humans like Michelins.</em>
          </li>
          <li>
            <strong>Skills.</strong> A folder of instructions the AI loads when relevant. Like a playbook the expert carries into the job. <em>You&rsquo;re not subscribing to a new product. You&rsquo;re upgrading the Claude you already have.</em>
          </li>
          <li>
            <strong>Projects + CLAUDE.md.</strong> How you tell the AI <em>who you are and what you&rsquo;re working on</em> so it stops guessing.
          </li>
        </ul>
      ),
      notes: <p>3 min. Read each layer with a pause. Repeat the Michelins line — it&rsquo;s the memetic anchor for non-coders.</p>,
    },
    {
      id: "cant-out-prompt",
      segment: 4,
      variant: "statement",
      title: "You cannot out-prompt a context gap",
      body: (
        <>
          <p>If the AI doesn&rsquo;t know your business, <strong>the prompt can&rsquo;t fix that.</strong></p>
          <p>Stop writing longer prompts.</p>
          <p><em>Start teaching the AI your world.</em></p>
        </>
      ),
      notes: <p>90 sec. This is the thesis slide of the whole middle. Let the last line sit. <strong>Exit:</strong> &ldquo;So where do people get good at this? How did I find out this even existed?&rdquo;</p>,
    },

    // ===== Segment 5 — Where best practices come from =====
    {
      id: "new-ceiling",
      segment: 5,
      variant: "statement",
      title: "The ceiling doesn't lift itself",
      body: (
        <>
          <p>Cold Claude had a ceiling.</p>
          <p>Loaded Claude has a new ceiling.</p>
          <p><strong>The question is how you keep raising yours.</strong></p>
        </>
      ),
      notes: <p>30 sec. Transitions the &ldquo;ceiling&rdquo; metaphor into the meta-skill discussion.</p>,
    },
    {
      id: "steal-from-smart-people",
      segment: 5,
      variant: "bullets",
      title: "I steal from smart people on the internet",
      body: (
        <>
          <p>I don&rsquo;t know how to do most of what I do.</p>
          <ul>
            <li><strong>Josh Pigford</strong> does.</li>
            <li><strong>Garry Tan</strong> does.</li>
            <li><strong>Ethan Mollick</strong> does.</li>
          </ul>
          <p>They post what they figure out. I follow them. <em>I steal it.</em></p>
        </>
      ),
      notes: <p>2 min. Be honest about the mechanism — you&rsquo;re an operator, not an inventor. Name the people by name.</p>,
    },
    {
      id: "tweet-screenshots",
      segment: 5,
      variant: "terminal",
      className: "talk-slide--machine",
      label: "// three tweets, three lessons",
      title: "Here's what stealing looks like",
      body: (
        <>
          <p><strong>@garrytan</strong> — &ldquo;I&rsquo;ve been having such an amazing time with Claude Code I wanted you to be able to have my <em>exact</em> skill setup&rdquo; <em>(gstack launch)</em></p>
          <p><strong>@shl</strong> — &ldquo;I turned The Minimalist Entrepreneur into 9 Claude Code skills. /validate-idea — test before you build...&rdquo;</p>
          <p><strong>@zodchiii</strong> — &ldquo;why is Claude getting dumber? context at 98%, claude is drowning in old conversations&rdquo;</p>
        </>
      ),
      notes: (
        <>
          <p>3 min. Machine Mode slide — terminal/monospace aesthetic.</p>
          <p>Walk through each tweet:</p>
          <ol>
            <li><strong>Tan:</strong> <em>&ldquo;Garry Tan runs Y Combinator. He shipped his exact skill setup as gstack. I can install it in 2 minutes and get everything he figured out.&rdquo;</em></li>
            <li><strong>shl:</strong> <em>&ldquo;Sahil wrote a book — The Minimalist Entrepreneur. He turned the whole book into 9 Claude Code skills. /validate-idea runs his validation framework on whatever idea you paste in. A book, turned into a playbook the AI carries.&rdquo;</em></li>
            <li><strong>zodchiii:</strong> <em>&ldquo;Here&rsquo;s the failure mode. When you don&rsquo;t manage context, Claude starts drowning. At 98% of the context window, it gets dumber. This is what I mean when I say &lsquo;you can&rsquo;t out-prompt a context gap.&rsquo; The work is learning to manage it.&rdquo;</em></li>
          </ol>
          <p>TODO: replace this text slide with three screenshot images (see assets/bookmarks-mine.md for tweet IDs).</p>
        </>
      ),
    },
    {
      id: "skills-as-crystallized",
      segment: 5,
      variant: "statement",
      title: "A skill is what happens when...",
      body: (
        <>
          <p>...someone distills a workflow into a reusable file.</p>
          <p>Pigford has a <code>/build</code> skill that runs an entire project structure. <strong>I use it. I didn&rsquo;t write it.</strong></p>
          <p><em>That&rsquo;s the game: steal the workflow, not just the tweet.</em></p>
        </>
      ),
      notes: <p>2 min. Mention you can install a skill you see on Twitter in ~2 minutes. If time and a good recent example, do the live install demo. Otherwise reserve for the demo clinic.</p>,
    },
    {
      id: "community-as-context",
      segment: 5,
      variant: "statement",
      title: "Community as context",
      body: (
        <>
          <p>Your peers, your Discord, your group chat, your founder Slack...</p>
          <p>That&rsquo;s where you hear about skills that work. <strong>Your network isn&rsquo;t just relationships.</strong></p>
          <p><em>Your network is a context source.</em></p>
        </>
      ),
      notes: <p>2 min. The unowned angle from research. End with <em>&ldquo;Enough showing. Let&rsquo;s build something.&rdquo;</em></p>,
    },

    // ===== Break =====
    {
      id: "break",
      segment: 5,
      variant: "poll",
      title: "2 minute break",
      subtitle: "Stretch. Glance at your phone. Back at the top of the minute.",
      notes: <p>Walk to the side of the room. Stay visible. If anyone approaches with a question, handle it but don&rsquo;t get pulled into a deep conversation — segment 6 starts at 0:47 exactly.</p>,
    },

    // ===== Segment 6 — Live build =====
    {
      id: "live-build-intro",
      segment: 6,
      variant: "statement",
      title: "Next 15 minutes",
      body: (
        <>
          <p><strong>Live build from the whiteboard:</strong> [audience pick]</p>
          <p>Loaded Claude. Brand skill. Voice guide template. Markdown project scaffold.</p>
        </>
      ),
      notes: <p>Pick from the whiteboard. Announce. Then: <em>&ldquo;I&rsquo;ll narrate what I see Claude doing well and poorly as we go.&rdquo;</em></p>,
    },
    {
      id: "live-build-demo",
      segment: 6,
      variant: "terminal",
      className: "talk-slide--demo",
      label: "> LIVE DEMO — LIVING BRAND DOC",
      title: "Ship it",
      subtitle: "Audience picks the company. Claude builds.",
      body: (
        <ul>
          <li>Voice guide</li>
          <li>Tagline options</li>
          <li>About page draft</li>
          <li>Launch tweet</li>
        </ul>
      ),
      notes: (
        <>
          <p>15 min. Narrate the loop: prompt → critique → iterate. When Claude produces a generic tagline, say &ldquo;that&rsquo;s weak, watch me tell it why&rdquo; and refine live. By minute 14, have an artifact that visibly exists and is visibly better than anything cold Claude would have made.</p>
          <p><strong>Failure watch:</strong> if the build drags past 13 min, cut to <em>&ldquo;I&rsquo;ll keep going after&rdquo;</em> and move on. Segment 7 matters more than finishing.</p>
          <p><strong>Exit:</strong> &ldquo;You&rsquo;ve seen me drive. Now you drive — what do you want me to show?&rdquo;</p>
        </>
      ),
    },

    // ===== Segment 7 — Demo clinic =====
    {
      id: "demo-clinic",
      segment: 7,
      variant: "poll",
      title: "What do you want to see?",
      subtitle: "Point at the whiteboard. Take one by show of hands.",
      notes: (
        <>
          <p>15 min total for 2–3 demos.</p>
          <p><strong>Primary demo pool (in order of likely draw):</strong></p>
          <ol>
            <li>Syllabus → Study Guide — student bait, high energy</li>
            <li>Market Sizing on Demand — crowd shouts a weird niche</li>
            <li>Meeting Notes → Action System</li>
            <li>Research Memo from 10 Tabs</li>
            <li>Voice-Matched Cold Email</li>
            <li>Loaded Claude Diff — if throughline needs reinforcement</li>
          </ol>
          <p><strong>Backup:</strong> Competitor Teardown, Pitch Deck Doctor, Literature Review (faculty-targeted).</p>
          <p><strong>Failure watch:</strong> if a demo stalls, cut fast. <em>&ldquo;This one&rsquo;s misbehaving — let me show you [backup].&rdquo;</em> Don&rsquo;t grind.</p>
          <p><strong>Exit:</strong> &ldquo;OK — one last thing before we close.&rdquo;</p>
        </>
      ),
    },

    // ===== Segment 8 — Close =====
    {
      id: "meta-reveal",
      segment: 8,
      variant: "terminal",
      className: "talk-slide--machine",
      label: "// meta reveal",
      title: "One last thing",
      body: (
        <>
          <p>You&rsquo;ve watched me demo loaded Claude for 80 minutes.</p>
          <p><strong>This talk was built with loaded Claude too.</strong></p>
          <p>Over the last couple of days. Here&rsquo;s the brainstorm.</p>
        </>
      ),
      notes: <p>60 sec setup. Pause. Then next slide.</p>,
    },
    {
      id: "brainstorm-1",
      segment: 8,
      variant: "terminal",
      className: "talk-slide--image",
      label: "// brainstorm 1: shape revision",
      // TODO: replace with screenshot from assets/screenshots/ after capture
      notes: <p>45 sec. <em>&ldquo;This is where the shape of the talk revised. I said one thing, Claude pushed back, and the whole structure shifted. That&rsquo;s loaded Claude working.&rdquo;</em></p>,
    },
    {
      id: "brainstorm-2",
      segment: 8,
      variant: "terminal",
      className: "talk-slide--image",
      label: "// brainstorm 2: workspace tree",
      notes: <p>45 sec. <em>&ldquo;This is the directory I&rsquo;m working from now. Four books on teaching, a research doc, a metaphors library, a deck styles file. The talk exists inside a system that can produce more talks.&rdquo;</em></p>,
    },
    {
      id: "brainstorm-3",
      segment: 8,
      variant: "terminal",
      className: "talk-slide--image",
      label: "// brainstorm 3: 7 research agents",
      notes: <p>45 sec. <em>&ldquo;These are seven research agents I dispatched in parallel. One looked at how other people teach this. One read four books on teaching craft. One profiled your school. They ran in four minutes. That&rsquo;s what I mean when I say the bottleneck moved.&rdquo;</em></p>,
    },
    {
      id: "youve-seen-the-gap",
      segment: 8,
      variant: "statement",
      title: "You've seen the gap",
      body: (
        <>
          <p>Superpowers are on the table.</p>
          <p>Most people are pretending it&rsquo;s 2019.</p>
          <p><em>You&rsquo;re not allowed to claim that anymore.</em></p>
        </>
      ),
      notes: <p>60 sec. Callback to segment 2. The &ldquo;you&rsquo;re not allowed&rdquo; line is intentionally strong — you&rsquo;ve earned the right to say it by segment 8.</p>,
    },
    {
      id: "two-ideas-underneath",
      segment: 8,
      variant: "statement",
      title: "Two ideas underneath",
      body: (
        <>
          <p>For years, working with a computer meant staring at a blinking cursor. You&rsquo;d type something, delete it, retype it — someone would misinterpret it anyway.</p>
          <p><strong>Now we can just talk to them like we talk to people.</strong> I think that changes everything.</p>
          <p>Two ideas run underneath: <strong>Doug Engelbart&rsquo;s</strong> vision of augmenting human intellect, and <strong>John Dewey&rsquo;s</strong> idea of <em>praxis</em> — real learning happens when you apply knowledge to action.</p>
          <p>Talking to a library the way Tony Stark talks to his AI in the lab, <em>that just makes sense to me.</em></p>
        </>
      ),
      notes: <p>2 min. Read it like the About page reads. Engelbart + Dewey give gravitas; Tony Stark lands for undergrads.</p>,
    },
    {
      id: "the-reason-i-came",
      segment: 8,
      variant: "statement",
      title: "The reason I came",
      body: (
        <>
          <p>I want <strong>more people who aren&rsquo;t engineers or designers</strong> to start working with computers this way.</p>
          <p><em>That&rsquo;s you.</em></p>
          <p><em>That&rsquo;s why I came.</em></p>
        </>
      ),
      notes: <p>30 sec. This is the workshop&rsquo;s thesis in one sentence. Let it sit.</p>,
    },
    {
      id: "pick-one",
      segment: 8,
      variant: "statement",
      title: "Pick one",
      body: (
        <>
          <p>Choosing to build <strong>without</strong> AI is a legitimate, respectable choice.</p>
          <p>Like handmade furniture or bespoke suits. <em>It&rsquo;s worth something.</em></p>
          <p>But if you&rsquo;re not making that choice deliberately — if you&rsquo;re just hesitating — <strong>you owe yourself the exploration.</strong></p>
          <blockquote>
            <p>Anyone who thinks of themselves as creative and isn&rsquo;t leaning in right now is leaving beautiful things uncreated.</p>
          </blockquote>
        </>
      ),
      notes: <p>90 sec. The deliberate-choice-vs-default-hesitation move. Read the closing quote slowly. Pause at &ldquo;uncreated.&rdquo; Don&rsquo;t rescue the silence.</p>,
    },
    {
      id: "tonight",
      segment: 8,
      variant: "bullets",
      title: "Tonight",
      body: (
        <ul>
          <li>Pick one task you were going to do this week.</li>
          <li>Open Claude.</li>
          <li><strong>Paste in everything you know about it</strong> — your notes, a voice sample, a syllabus, whatever you&rsquo;ve got.</li>
          <li>Run the task.</li>
          <li><em>See what happens when the AI knows your world.</em></li>
        </ul>
      ),
      notes: <p>45 sec. Deployable &gt; memorable. The concrete prescription matters more than the inspirational close.</p>,
    },
    {
      id: "thanks-qr",
      segment: 8,
      variant: "poll",
      title: "60 seconds",
      subtitle: "Feedback form — QR below",
      body: (
        <>
          <p>[QR code — generated from feedback form URL]</p>
          <p>Thank you, Ohio State.</p>
        </>
      ),
      notes: <p>30 sec. <em>&ldquo;If you have 60 seconds, I&rsquo;d love feedback. QR goes to a 5-question form. I&rsquo;ll stick around for questions — come find me.&rdquo;</em> Exit cleanly. Don&rsquo;t apologize for anything.</p>,
    },

    // ===== Appendix (Q&A reserve, not counted in runtime) =====
    {
      id: "appendix-scaffolding",
      segment: 8,
      variant: "statement",
      title: "Bruner's scaffolding",
      body: (
        <>
          <p>Jerome Bruner, 1976: there&rsquo;s a zone between what you can do alone and what you can&rsquo;t do even with help. <strong>The right assistance lets you operate in that zone.</strong></p>
          <p>Cold Claude can&rsquo;t scaffold you.</p>
          <p>Loaded Claude — with a skill that shows Zinsser dissecting your paragraph, or McPhee rearranging your sections — <strong>lets you see the mechanism, not just the rule.</strong></p>
          <p><em>You&rsquo;re not just producing better work. You&rsquo;re learning to do the work.</em></p>
        </>
      ),
      className: "talk-slide--appendix",
      notes: <p>Reserve for faculty pushback on &ldquo;isn&rsquo;t AI making us dumber?&rdquo; ~90 sec if deployed.</p>,
    },
    {
      id: "appendix-markdown",
      segment: 8,
      variant: "statement",
      title: "Structure matters",
      body: (
        <>
          <p>A PDF is pixels. Structure disappears.</p>
          <p>Markdown is parseable — Claude can jump to a heading, quote a specific section, cross-reference across files.</p>
          <p><em>LLMs have refined palates. They prefer Markdown like humans like Michelins.</em></p>
        </>
      ),
      className: "talk-slide--appendix",
      notes: <p>Q&amp;A reserve for &ldquo;why markdown?&rdquo; 30–45 sec if deployed.</p>,
    },
    {
      id: "appendix-fluency-contested",
      segment: 8,
      variant: "statement",
      className: "talk-slide--quote talk-slide--appendix",
      title: "Honest answer: it's contested",
      body: (
        <blockquote>
          <p>I am not convinced that this is the right way to think about AI fluency, either now or in the long-term.</p>
        </blockquote>
      ),
      subtitle: "— Ethan Mollick (Wharton)",
      notes: <p>Q&amp;A reserve if someone challenges the fluency ladder. The ladder is <em>useful, not correct</em>. Use to find your next rung and drop it.</p>,
    },
    {
      id: "appendix-create-judge",
      segment: 8,
      variant: "statement",
      title: "Create and judge",
      body: (
        <>
          <p>Writing forces you to <strong>create and judge at the same time.</strong> You put a sentence down and immediately start evaluating it. Delete. Retype. The internal editor is always on.</p>
          <p>This workflow <strong>separates them.</strong></p>
          <p>Creation happens without brakes. Then judgment happens fresh.</p>
          <p><em>That&rsquo;s not outsourcing. That&rsquo;s taking both halves more seriously.</em></p>
        </>
      ),
      className: "talk-slide--appendix",
      notes: <p>Q&amp;A reserve for &ldquo;isn&rsquo;t this outsourcing thinking?&rdquo; 60 sec if deployed. Betty Flowers&rsquo; create/judge frame via Andy&rsquo;s Smithing Words piece.</p>,
    },
  ],
};

export default talk;
