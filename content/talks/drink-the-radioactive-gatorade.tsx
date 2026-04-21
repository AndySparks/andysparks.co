import type { Talk } from "@/lib/talks";

/**
 * Drinking the Radioactive Gatorade — v2.2
 * Ported from DECK.md v2.2 (2026-04-21).
 * Source of truth for full speaker notes + editorial commentary: ~/teaching/lectures/2026-04-22-ohio-state-claude-workshop/DECK.md
 */

const talk: Talk = {
  slug: "drink-the-radioactive-gatorade",
  title: "Drinking the Radioactive Gatorade",
  subtitle: "An introduction to working with Augmented Intelligence.",
  date: "2026-04-22",
  venue: "Ohio State",
  audience: "Ohio State students + faculty",
  duration: "90 min",
  description:
    "A 90-minute workshop at Ohio State. Out of the box, Claude is already smart. Give it memory about you, your work, the things you care about — and it becomes dramatically more powerful.",
  segments: [
    { number: 1, name: "Opener + whiteboard", timeBudget: "10 min" },
    { number: 2, name: "The shift", timeBudget: "7 min" },
    { number: 3, name: "Ways to use an LLM", timeBudget: "8 min" },
    { number: 4, name: "Upgrading Claude with memory", timeBudget: "15 min" },
    { number: 5, name: "Permission to collaborate", timeBudget: "5 min" },
    { number: 6, name: "Find your own people", timeBudget: "7 min" },
    { number: 7, name: "Demo clinic + Q&A", timeBudget: "30 min" },
    { number: 8, name: "Close", timeBudget: "6 min" },
  ],
  slides: [
    // ================================================================
    // Segment 1 — Opener + whiteboard
    // ================================================================
    {
      id: "title",
      segment: 1,
      variant: "title",
      title: "Drinking the Radioactive Gatorade",
      subtitle: "An introduction to working with Augmented Intelligence.",
      body: (
        <p className="talk-slide__footer">
          Andy Sparks · Ohio State · April 22, 2026
        </p>
      ),
      notes: (
        <p>
          Open slide as people file in. Don&rsquo;t speak yet. Greet individuals by name. Keep this up until the room is settled.
        </p>
      ),
    },
    {
      id: "about",
      segment: 1,
      variant: "bullets",
      title: "A bit about me",
      body: (
        <ul>
          <li>Three companies over 16 years. Failed the first. Sold the second. Third is profitable.</li>
          <li>Raised about $20 million in venture capital along the way.</li>
          <li>Lived in San Francisco for 13 years. Wrote a book on raising VC.</li>
          <li>Now I coach founders and build <strong>Management Craft</strong>, a research wiki for founders.</li>
        </ul>
      ),
      notes: (
        <p>
          60 sec. Credibility without performing it. SF line is regional texture, not flex. Pivot: <em>&ldquo;That&rsquo;s why I&rsquo;m up here talking about how I actually use AI to move faster.&rdquo;</em>
        </p>
      ),
    },
    {
      id: "future-already-here",
      segment: 1,
      variant: "statement",
      className: "talk-slide--quote",
      body: (
        <p>
          <em>&ldquo;The future is already here. It&rsquo;s just not evenly distributed.&rdquo;</em>
        </p>
      ),
      subtitle: "William Gibson",
      notes: (
        <p>
          20 sec. Read it, let it sit. Then: <em>&ldquo;I think about this all the time right now. And I think you should too.&rdquo;</em> Do NOT attribute to Douglas Adams &mdash; common misattribution.
        </p>
      ),
    },
    {
      id: "why-care",
      segment: 1,
      variant: "statement",
      title: "Why I care",
      body: (
        <>
          <p>About eight weeks ago, I decided I wanted to experiment with Claude Code.</p>
          <p>In two weeks I shipped a completely functional website. Since then, I rebuilt my personal site, published several blog posts, and more.</p>
          <p><em>Something changed. Most people haven&rsquo;t realized it yet.</em></p>
        </>
      ),
      notes: (
        <p>
          90 sec. Personal, not hyped. &ldquo;Most people&rdquo; sets up the show-of-hands later. Paired with the next slide &mdash; this one is <em>I&rsquo;ve been on the frontier,</em> the next is <em>I want you on it too.</em>
        </p>
      ),
    },
    {
      id: "why-here",
      segment: 1,
      variant: "statement",
      title: "Why I'm here",
      body: (
        <>
          <p>This is a scary moment. Lots of new tech, lots of rhetoric, not much clarity.</p>
          <p>Most people think AI means ChatGPT. The frontier past that is already here.</p>
          <p><em>I came to show you what I wish I&rsquo;d known when I was you.</em> Skills for internships, jobs, whatever you build.</p>
          <p><strong>Spoiler: the core skill is the same one great managers use.</strong></p>
        </>
      ),
      notes: (
        <p>
          75 sec. The &ldquo;what I wish I&rsquo;d known&rdquo; line is the undivided-self beat (Palmer). The final bolded spoiler plants the management thread that pays off in S4.7 — so when you land &ldquo;Context is management,&rdquo; the room has been tracking it all along (Anderson). Lean into eye contact on <em>&ldquo;what I wish I&rsquo;d known.&rdquo;</em>
        </p>
      ),
    },
    {
      id: "the-deal",
      segment: 1,
      variant: "bullets",
      title: "The deal",
      body: (
        <>
          <p><strong>I commit to:</strong> end on time · break at 45 · ask what you want at the end.</p>
          <p><strong>You commit to:</strong> phones away · lean into discomfort.</p>
          <p><strong>Interrupt me anytime.</strong> Questions land harder when they&rsquo;re warm.</p>
          <p><em>Deal?</em></p>
        </>
      ),
      notes: (
        <p>
          90 sec. Get verbal assent. The <em>&ldquo;interrupt me&rdquo;</em> line is load-bearing &mdash; it makes the whole talk interactive, not just the last 30 min.
        </p>
      ),
    },
    {
      id: "by-7pm",
      segment: 1,
      variant: "bullets",
      title: "By 7 PM, you'll know:",
      body: (
        <ul>
          <li>Which Claude to open for which task.</li>
          <li>Why your ChatGPT conversations feel flat.</li>
          <li>How to make Claude know <em>you</em>.</li>
          <li>One thing to try this weekend.</li>
        </ul>
      ),
      notes: (
        <p>
          30 sec. The explicit contract (Winston: every talk needs an empowerment promise in the first 5 min). Four concrete outcomes the room can check off. Read each one flat, pause briefly, advance. Then into the whiteboard poll.
        </p>
      ),
    },
    {
      id: "what-do-you-want",
      segment: 1,
      variant: "poll",
      title: "What do you want to learn today?",
      subtitle: "Shout it out. I'll write it on the board.",
      notes: (
        <>
          <p>Walk to the whiteboard. Capture every answer without editing. Target 6&ndash;10 items, then cluster live. 5 min here.</p>
          <p><strong>Exit:</strong> <em>&ldquo;Good. Let me show you where I&rsquo;m starting from.&rdquo;</em></p>
        </>
      ),
    },

    // ================================================================
    // Segment 2 — The shift
    // ================================================================
    {
      id: "radioactive-gatorade",
      segment: 2,
      variant: "statement",
      className: "talk-slide--shout",
      body: (
        <p><strong>Radioactive Gatorade.</strong></p>
      ),
      notes: (
        <p>
          Hold 3 seconds on the shout. No setup. No explanation. Let the two words do the work.
        </p>
      ),
    },
    {
      id: "superheroes",
      segment: 2,
      variant: "statement",
      title: "Here's the thing",
      body: (
        <>
          <p>Superheroes always drink the radioactive thing. A spider. A serum. A gamma ray.</p>
          <p>Then they have powers.</p>
          <p><em>A small subset of the population just realized there&rsquo;s a version of that available to them now.</em></p>
          <p><strong>Everybody else is pretending it&rsquo;s 2019.</strong></p>
        </>
      ),
      notes: (
        <p>
          45 sec. Walk through the imagery. Land on &ldquo;2019.&rdquo; Pause. Don&rsquo;t add a coda. Advance when the silence is doing the work.
        </p>
      ),
    },
    {
      id: "what-the-superpower-is",
      segment: 2,
      variant: "statement",
      title: "What the superpower is",
      body: (
        <>
          <p>I&rsquo;ve been a decent designer my whole career. Okay, not great.</p>
          <p>For every idea I ever had, I needed an engineer. <em>Ideas died in my inbox.</em> Companies got built around worse ideas than mine because someone else could execute.</p>
          <p><strong>Now I can just build whatever I want.</strong></p>
          <p><em>And this is getting exponentially better. Not linearly. A year from now, what I can do today will look cute.</em></p>
        </>
      ),
      notes: (
        <p>
          90 sec. Stay in the &ldquo;before&rdquo; longer (Brown). The <em>&ldquo;ideas died in my inbox&rdquo;</em> italic and the &ldquo;worse ideas won&rdquo; line are the cost of 16 years as a non-engineer. Don&rsquo;t rush past them. Then <em>&ldquo;now I can build whatever I want&rdquo;</em> lands as weight lifted, not just good news.
        </p>
      ),
    },
    {
      id: "major-shift",
      segment: 2,
      variant: "statement",
      title: "The Major Shift",
      body: (
        <>
          <p>A skilled editor: <strong>$2,000 to $5,000 per piece.</strong></p>
          <p>A talented software engineer: <strong>$10,000 a month, minimum.</strong></p>
          <p>A Claude subscription: <strong>$20 to $200 a month.</strong></p>
          <p><em>And Claude doesn&rsquo;t clock out. As much time as you have, that&rsquo;s how much you can use it.</em></p>
        </>
      ),
      notes: (
        <>
          <p>75 sec. The numbers are the table. The insight is the italic close &mdash; Claude is <em>availability,</em> not a transaction.</p>
          <p><strong>Faculty authority anchor (optional):</strong> <em>&ldquo;Kim, Kim, and Koning at INSEAD and Harvard ran a field experiment on 515 startups. Treatment group landed 18% more paying customers, needed ~40% less capital, pulled almost 2&times; the revenue.&rdquo;</em> (INSEAD WP 2026/20/STR, SSRN 6513481.)</p>
        </>
      ),
    },
    {
      id: "engelbart",
      segment: 2,
      variant: "statement",
      title: "This is not new",
      body: (
        <>
          <p>Sixty years ago, Doug Engelbart invented the mouse, the GUI, hypertext.</p>
          <p>His life&rsquo;s work: making humans <strong>smarter through computers. Not replacing them.</strong></p>
          <p><em>That&rsquo;s what I think we&rsquo;re doing here. Leveling up. Not being replaced.</em></p>
        </>
      ),
      notes: (
        <p>
          90 sec. Brings Andy in personally. Avoid the &ldquo;artificial intelligence lab at Stanford&rdquo; line on stage &mdash; too insider. Q&amp;A reserve if faculty push: <em>&ldquo;Markoff later contrasted Engelbart&rsquo;s vision with McCarthy&rsquo;s AI lab &mdash; called it IA versus AI. Engelbart himself mostly just said augmentation.&rdquo;</em>
        </p>
      ),
    },
    {
      id: "fluency-ladder",
      segment: 2,
      variant: "terminal",
      className: "talk-slide--ladder",
      body: (
        <div className="fluency-ladder">
          <div className="fluency-ladder__heading">
            <p className="fluency-ladder__label">Where are you on the ladder?</p>
            <p className="fluency-ladder__title">AI Fluency</p>
          </div>
          <span className="fluency-ladder__axis-top" aria-hidden="true">
            Full capability <span className="fluency-ladder__chevron">›</span>
          </span>
          <span className="fluency-ladder__axis-rail" aria-hidden="true" />
          <span className="fluency-ladder__axis-bottom" aria-hidden="true">No memory</span>
          <div className="fluency-ladder__rung"><span className="fluency-ladder__level">L7</span><span className="fluency-ladder__desc">Building your own tools</span></div>
          <div className="fluency-ladder__rung"><span className="fluency-ladder__level">L6</span><span className="fluency-ladder__desc">A full workspace</span></div>
          <div className="fluency-ladder__rung"><span className="fluency-ladder__level">L5</span><span className="fluency-ladder__desc">Skills</span></div>
          <div className="fluency-ladder__rung"><span className="fluency-ladder__level">L4</span><span className="fluency-ladder__desc">Markdown + CLAUDE.md</span></div>
          <div className="fluency-ladder__rung"><span className="fluency-ladder__level">L3</span><span className="fluency-ladder__desc">Projects + files</span></div>
          <div className="fluency-ladder__rung"><span className="fluency-ladder__level">L2</span><span className="fluency-ladder__desc">Personal preferences</span></div>
          <div className="fluency-ladder__rung"><span className="fluency-ladder__level">L1</span><span className="fluency-ladder__desc">Chat</span></div>
          <div className="fluency-ladder__rung"><span className="fluency-ladder__level">L0</span><span className="fluency-ladder__desc">Never touched it</span></div>
        </div>
      ),
      notes: (
        <p>
          120 sec. Give the room a map. <em>&ldquo;Take a second. Where are you?&rdquo;</em> Most rooms: middle of the ladder. <em>&ldquo;You don&rsquo;t have to get to L7 tonight. You just have to know there is one.&rdquo;</em>
        </p>
      ),
    },

    // ================================================================
    // Segment 3 — Ways to use an LLM
    // ================================================================
    {
      id: "ways-to-use",
      segment: 3,
      variant: "statement",
      title: "The ways to use an LLM",
      body: (
        <>
          <p>You&rsquo;ve probably used Claude or ChatGPT in a browser.</p>
          <p>There are a lot of other ways. Different shapes, different purposes.</p>
          <p><em>I&rsquo;ll focus on Claude. Everything here has a ChatGPT or Gemini version. Claude is the one I work with.</em></p>
        </>
      ),
      notes: (
        <p>
          30 sec. Orientation. Sets the &ldquo;focused on Claude&rdquo; frame to head off the &ldquo;why not ChatGPT?&rdquo; tangent.
        </p>
      ),
    },
    {
      id: "browser",
      segment: 3,
      variant: "terminal",
      label: "Most people start here.",
      title: "Browser (claude.ai)",
      body: (
        <>
          <p>A chat window in your browser. Same shape as ChatGPT.</p>
          <p><em>Why:</em> nothing to install. Fastest way to try it.</p>
        </>
      ),
      notes: (
        <p>
          30 sec. Don&rsquo;t condescend &mdash; nobody admits they&rsquo;ve never used ChatGPT.
        </p>
      ),
    },
    {
      id: "desktop-app",
      segment: 3,
      variant: "terminal",
      title: "Desktop app (Mac / Windows / mobile)",
      body: (
        <>
          <p>Native chat app on your computer or phone.</p>
          <p>Same conversation, tighter OS integration.</p>
          <p><em>Why:</em> Claude can reach your other apps and files. Faster than uploading one at a time.</p>
        </>
      ),
      notes: (
        <p>
          30 sec. This is the last &ldquo;just chat&rdquo; slide. Next slide opens the door to agents.
        </p>
      ),
    },
    {
      id: "whats-an-agent",
      segment: 3,
      variant: "statement",
      title: "What's an agent?",
      body: (
        <>
          <p>A chat app is Q&amp;A. You ask. It answers. You copy what you need.</p>
          <p><strong>An agent reaches out to your other software and does the work.</strong></p>
          <p>Excel, Word, Notion, your calendar, whatever you use. You dictate what you want. It goes and does it.</p>
        </>
      ),
      notes: (
        <p>
          75 sec. The hinge slide. Without it, the room hears MCP/terminal/Cowork/harness as a pile of jargon. With it, those tools all answer the same question: <em>how does the agent reach the thing?</em>
        </p>
      ),
    },
    {
      id: "mcp",
      segment: 3,
      variant: "terminal",
      title: "MCP (Model Context Protocol)",
      body: (
        <>
          <p>Anthropic&rsquo;s open standard for connecting Claude to your other tools.</p>
          <p>The cable between Claude and your calendar, email, notes, databases, your files.</p>
          <p><em>Why:</em> stop copy-pasting. Let Claude read the source.</p>
        </>
      ),
      notes: (
        <p>
          45 sec. For this room: <em>&ldquo;If you&rsquo;ve ever wished Claude could just read your calendar instead of making you paste it in, MCP is the thing.&rdquo;</em> Don&rsquo;t go deep on the protocol &mdash; the cable metaphor does the work.
        </p>
      ),
    },
    {
      id: "terminal-claude-code",
      segment: 3,
      variant: "terminal",
      title: "Terminal (Claude Code)",
      body: (
        <>
          <p>A <strong>terminal</strong> is a text-only window on your computer. No icons. You type commands, it responds.</p>
          <p>Claude Code lives in there. <strong>You don&rsquo;t have to be a coder. You just have to open it.</strong></p>
          <p><em>Why:</em> this one doesn&rsquo;t talk. It <strong>acts.</strong> Reads your files, edits them, runs commands, ships work.</p>
        </>
      ),
      notes: (
        <p>
          120 sec. Most important slide in Segment 3. Two jobs: (1) explain terminal to people who&rsquo;ve never opened one, (2) land the &ldquo;acts, doesn&rsquo;t just talk&rdquo; pivot. Every Mac has Terminal; every Windows has PowerShell.
        </p>
      ),
    },
    {
      id: "cowork",
      segment: 3,
      variant: "terminal",
      title: "Cowork",
      body: (
        <>
          <p>Same agent as Claude Code, in a safety cage. Aimed at your documents, not your code.</p>
          <p><strong>It drives the apps you already use.</strong> Excel, PowerPoint, browser, Drive, Gmail.</p>
          <p><em>Why:</em> start here if you&rsquo;re not a coder. Claude Code is more powerful but assumes terminal fluency.</p>
        </>
      ),
      notes: (
        <p>
          60 sec. Cowork literally runs the Claude Code agent harness inside a Linux VM. Not &ldquo;dumbed down&rdquo; &mdash; different safety model. Mac, Windows, Linux. Paid plans only.
        </p>
      ),
    },
    {
      id: "third-party-harnesses",
      segment: 3,
      variant: "terminal",
      title: "Third-party harnesses",
      body: (
        <>
          <p>Tools built on top of Claude Code to stretch it further.</p>
          <p><strong>Conductor</strong> (Mac): runs several Claudes in parallel on one project.</p>
          <p><em>Why:</em> when one Claude isn&rsquo;t enough. Multiple features at once. Approaches side by side.</p>
        </>
      ),
      notes: (
        <p>
          60 sec. &ldquo;Harness&rdquo; = the stuff wrapped around the model. Conductor is the example most people hear about first.
        </p>
      ),
    },
    {
      id: "confession-beat",
      segment: 3,
      variant: "statement",
      title: "A quick confession",
      body: (
        <>
          <p><em>I didn&rsquo;t know what a harness was six months ago either.</em></p>
          <p><em>Nobody starts fluent. That&rsquo;s the whole point.</em></p>
          <p><strong>Remember: when you don&rsquo;t know, just ask Claude to teach you.</strong></p>
        </>
      ),
      notes: (
        <p>
          30&ndash;45 sec. Vulnerability beat. Earns trust before the privacy slide lands.
        </p>
      ),
    },
    {
      id: "dictate",
      segment: 3,
      variant: "statement",
      title: "One tool: install it tonight",
      body: (
        <>
          <p><strong>Wispr Flow.</strong> Dictation, anywhere on your computer.</p>
          <p>You think faster than you type. And <em>dictating stops you editing yourself.</em></p>
          <p>Free tier. Cloud-processed, so flip on Privacy Mode if it matters.</p>
          <p>Alternatives: <strong>macOS built-in</strong> (Fn-Fn), <strong>Superwhisper</strong> (local-only).</p>
        </>
      ),
      notes: (
        <p>
          90 sec. Name the cloud-processing caveat honestly.
        </p>
      ),
    },
    {
      id: "privacy-live",
      segment: 3,
      variant: "terminal",
      className: "talk-slide--demo",
      label: "> LIVE — claude.ai settings",
      title: "Is it safe to upload my stuff?",
      body: (
        <>
          <p>Anthropic&rsquo;s consumer terms changed August 2025.</p>
          <p>If you signed up before October 8 and clicked through, you may be opted IN to 5-year training retention.</p>
          <p><strong>Paying Pro or Max doesn&rsquo;t exempt you.</strong></p>
          <p>Toggle at <code>claude.ai/settings/data-privacy-controls</code>. Look for &ldquo;Help improve Claude.&rdquo; Flip it off.</p>
          <p>My calibration: I upload blood work, business docs, notes. Yours is yours. Just make it deliberate.</p>
        </>
      ),
      notes: (
        <>
          <p>90 sec. Live-pull the settings page. Show the toggle. Opt-out is NOT retroactive &mdash; say that.</p>
          <p><strong>Exit:</strong> <em>&ldquo;OK. Now you know what the pieces are. Let me show you what happens when you actually start using them.&rdquo;</em></p>
        </>
      ),
    },

    // ================================================================
    // Segment 4 — Upgrading Claude with memory
    // ================================================================
    {
      id: "out-of-the-box-upgraded",
      segment: 4,
      variant: "statement",
      title: "Out of the box, then upgraded",
      body: (
        <>
          <p>Out of the box, Claude is already smart. You can ask it anything.</p>
          <p><strong>It gets dramatically more powerful when you give it memory about you, your work, the things you care about.</strong></p>
          <p><em>Memory comes in many forms. Let me show you.</em></p>
        </>
      ),
      notes: (
        <p>
          60 sec. Thesis slide for Segment 4. Two-part frame: out of the box + memory upgrade. The italic is the handoff to the prompt A/B demo.
        </p>
      ),
    },
    {
      id: "prompt-a",
      segment: 4,
      variant: "terminal",
      className: "talk-slide--demo",
      label: "> LIVE — fresh Claude.ai",
      title: "Prompt A",
      body: <p>Help me make this website look better.</p>,
      notes: (
        <p>
          90 sec. Type live. Expected output: generic. Read the bland back aloud.
        </p>
      ),
    },
    {
      id: "prompt-b",
      segment: 4,
      variant: "terminal",
      className: "talk-slide--demo",
      label: "> LIVE — same Claude.ai",
      title: "Prompt B",
      body: <p>If there were a Jedi Council for website design, who would be on it, and what would they recommend for this page?</p>,
      notes: (
        <p>
          2 min. Expected output: specific. Named experts, concrete recommendations.
        </p>
      ),
    },
    {
      id: "prompting-lesson",
      segment: 4,
      variant: "statement",
      title: "Same Claude. Different prompt.",
      body: (
        <>
          <p>Prompting is a skill you can build <em>before</em> you touch context.</p>
          <p>The Jedi Council trick. Works for writing, design, product, naming. Anywhere multiple experts would help.</p>
          <p><strong>Steal it tonight.</strong></p>
        </>
      ),
      notes: (
        <p>
          60 sec. Hand them a usable move on a silver platter.
        </p>
      ),
    },
    {
      id: "three-windows",
      segment: 4,
      variant: "statement",
      title: "The same thing, three ways",
      body: (
        <>
          <p><strong>Gatorade.</strong> What it feels like.</p>
          <p><strong>Trinity and Tank.</strong> What&rsquo;s actually happening.</p>
          <p><strong>Onboarding a colleague.</strong> How you actually do it.</p>
        </>
      ),
      notes: (
        <p>
          45 sec. <em>&ldquo;Different framings land for different people. I&rsquo;ll cover all three.&rdquo;</em>
        </p>
      ),
    },
    {
      id: "trinity-video",
      segment: 4,
      variant: "terminal",
      className: "talk-slide--youtube",
      label: "The Matrix (1999) — helicopter scene",
      body: (
        <div className="talk-slide__youtube">
          <iframe
            src="https://www.youtube.com/embed/SoAk7zBTrvo"
            title="The Matrix helicopter scene"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      ),
      notes: (
        <p>
          30 sec total including the clip. Click through and play the ~20-second helicopter scene live. Come back. Then deliver: <em>&ldquo;That&rsquo;s what we&rsquo;re going to do with Claude.&rdquo;</em> Advance to the turn slide.
        </p>
      ),
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
      notes: (
        <p>
          15 sec. <em>&ldquo;That&rsquo;s what a skill does in Claude. A capability transfer, not a better prompt.&rdquo;</em>
        </p>
      ),
    },
    {
      id: "context-is-management",
      segment: 4,
      variant: "statement",
      title: "Context is management",
      body: (
        <>
          <p>I&rsquo;ve watched founders be bad at the same thing for 16 years. <em>Myself included.</em> Figuring out what you want, writing it down, making it clear.</p>
          <p>Turns out that&rsquo;s the exact same skill that works with Claude.</p>
          <p>Management used to cost $10,000 a month. Now it&rsquo;s $200 and everyone gets to practice.</p>
          <p><em>When you eventually hire humans, you&rsquo;ll be ready.</em></p>
        </>
      ),
      notes: (
        <>
          <p>90 sec. Andy&rsquo;s own insight from the last few days of prep &mdash; not a borrowed metaphor. Self-deprecation on <em>&ldquo;myself included&rdquo;</em> preserved. Democratization punch on the $10K → $200 shift. Prediction close.</p>
          <p>Delivery: <em>&ldquo;The most expensive failure mode in a young company is new managers being bad at setting expectations. I&rsquo;ve been doing that same work writing process docs for Claude. This isn&rsquo;t an analogy &mdash; it&rsquo;s the same skill. Now, for $200, anyone can start getting reps.&rdquo;</em></p>
        </>
      ),
    },
    {
      id: "the-rungs-intro",
      segment: 4,
      variant: "statement",
      title: "Memory comes in rungs",
      body: (
        <>
          <p>You don&rsquo;t have to climb all of them.</p>
          <p><strong>Every rung gives Claude more of <em>you.</em></strong></p>
          <p>Here they are.</p>
        </>
      ),
      notes: (
        <p>
          20 sec. Transition into the climb. Memory is a stack, not a switch.
        </p>
      ),
    },
    {
      id: "rungs-defined",
      segment: 4,
      variant: "terminal",
      className: "talk-slide--ladder",
      body: (
        <div className="fluency-ladder fluency-ladder--six">
          <div className="fluency-ladder__heading">
            <p className="fluency-ladder__label">The rungs</p>
            <p className="fluency-ladder__title">Memory</p>
          </div>
          <span className="fluency-ladder__axis-top" aria-hidden="true">
            Deep memory <span className="fluency-ladder__chevron">›</span>
          </span>
          <span className="fluency-ladder__axis-rail" aria-hidden="true" />
          <span className="fluency-ladder__axis-bottom" aria-hidden="true">No memory</span>
          <div className="fluency-ladder__rung"><span className="fluency-ladder__level">Rung 5</span><span className="fluency-ladder__desc">A full workspace</span></div>
          <div className="fluency-ladder__rung"><span className="fluency-ladder__level">Rung 4</span><span className="fluency-ladder__desc">Skills</span></div>
          <div className="fluency-ladder__rung"><span className="fluency-ladder__level">Rung 3</span><span className="fluency-ladder__desc">Markdown and <code>CLAUDE.md</code></span></div>
          <div className="fluency-ladder__rung"><span className="fluency-ladder__level">Rung 2</span><span className="fluency-ladder__desc">Projects and uploaded files</span></div>
          <div className="fluency-ladder__rung"><span className="fluency-ladder__level">Rung 1</span><span className="fluency-ladder__desc">Personal preferences</span></div>
          <div className="fluency-ladder__rung"><span className="fluency-ladder__level">Rung 0</span><span className="fluency-ladder__desc">Out of the box</span></div>
        </div>
      ),
      notes: (
        <p>
          45 sec. The map. Read each one flat, no elaboration yet. <em>&ldquo;These are the rungs. Every one of them lets Claude know more about you. I&rsquo;ll walk each in a minute. First I want to know where you are.&rdquo;</em> Detail comes in S4.9&ndash;S4.13.
        </p>
      ),
    },
    {
      id: "show-of-hands",
      segment: 4,
      variant: "poll",
      title: "Where are you?",
      subtitle: "Hands up for your highest rung.",
      notes: (
        <p>
          60 sec. Go rung by rung: <em>&ldquo;Rung 0 &mdash; never touched it? Hands.&rdquo;</em> Count. <em>&ldquo;Rung 1 &mdash; preferences set?&rdquo;</em> Keep going. Call out what you see: <em>&ldquo;Mostly Rung 1. A few at 3. OK &mdash; let me show you what the next step looks like for each of you.&rdquo;</em>
        </p>
      ),
    },
    {
      id: "rung-1-preferences",
      segment: 4,
      variant: "bullets",
      title: "Rung 1 — Preferences + memory",
      body: (
        <ul>
          <li>Tell Claude how <em>you</em> want it to communicate.</li>
          <li><em>&ldquo;Short, punchy sentences.&rdquo; &ldquo;Explain like Feynman.&rdquo; &ldquo;Skip the em-dashes.&rdquo;</em></li>
          <li>That memory pop-up Claude gave you in October? That&rsquo;s this setting.</li>
        </ul>
      ),
      notes: (
        <p>
          90 sec. The pop-up memory you saw and didn&rsquo;t know how to edit &mdash; name it here.
        </p>
      ),
    },
    {
      id: "rung-2-projects",
      segment: 4,
      variant: "terminal",
      className: "talk-slide--split",
      label: "Rung 2 — Projects + uploaded files",
      image: "/assets/screenshots/cholesterol-2022-2025.jpeg",
      imageAlt: "Andy's cholesterol chart from Function Health, 2022–2025, showing levels climbing out of range then returning to sufficient range by Nov 2025",
      body: (
        <p>
          <em>Summer 2025: my cholesterol was climbing. I started uploading bloodwork, exercise logs, diet, and supplement data to a project. Five months of analysis later &mdash; back in range for the first time since 2022.</em>
        </p>
      ),
      notes: (
        <>
          <p>90 sec. The receipts for Rung 2. Story flat, not performed: <em>&ldquo;This is my cholesterol from Function Health. Line had been climbing for three years. Summer 2025 I started a health project and uploaded bloodwork, doctor notes, diet, supplements, exercise data. Every conversation after that had the whole picture. I ran analyses. Tried protocols. November bloodwork came back in range for the first time since 2022.&rdquo;</em></p>
          <p>Then the turn: <em>&ldquo;That&rsquo;s what Rung 2 actually is. It&rsquo;s not technical. It&rsquo;s just a folder of stuff about you that Claude reads every time you talk to it.&rdquo;</em></p>
          <p><strong>Asset TODO:</strong> export the Function Health chart to <code>public/assets/screenshots/cholesterol-2022-2025.png</code>.</p>
        </>
      ),
    },
    {
      id: "rung-3-markdown",
      segment: 4,
      variant: "statement",
      title: "Rung 3 — Markdown and CLAUDE.md",
      body: (
        <>
          <p>Markdown is the simplest kind of text file. Plain words, headings, bullet points. Claude loves it the way we love a well-laid table.</p>
          <p><strong>CLAUDE.md</strong> is a special markdown file Claude Code reads automatically. A letter to Claude explaining who you are and how you want to work.</p>
          <p>Markdown is the format that makes every rung above this one work.</p>
        </>
      ),
      notes: (
        <p>
          60 sec. Feynman test applied: &ldquo;LLMs&rdquo; and &ldquo;agent&rdquo; were jargon leaks &mdash; swept. Every word in the body now exists in a Fisher freshman&rsquo;s vocabulary. Michelins line is the memetic anchor; keep delivering it even though the slide reads plain.
        </p>
      ),
    },
    {
      id: "rung-4-skills",
      segment: 4,
      variant: "statement",
      title: "Rung 4 — Skills",
      body: (
        <>
          <p>A folder of instructions Claude reads when it&rsquo;s time to use them.</p>
          <p>A playbook the expert carries into the job.</p>
          <p>Someone else figures out a workflow. You install it in two minutes.</p>
        </>
      ),
      notes: (
        <p>
          60 sec. Parallel structure (noun phrase + short follow).
        </p>
      ),
    },
    {
      id: "rung-5-workspace",
      segment: 4,
      variant: "terminal",
      className: "talk-slide--split",
      label: "Rung 5 — Full workspace",
      image: "/assets/screenshots/obsidian-file-tree.png",
      imageAlt: "Screenshot of Andy's Obsidian workspace file tree showing research, implementation, progress folders with strategy/roadmap/decisions docs at the top level",
      body: (
        <p>
          Every project has its own folder. <em>Claude reads all of it before answering anything.</em>
        </p>
      ),
      notes: (
        <p>
          90 sec. <em>&ldquo;This is where I actually live. Research, implementation, progress per feature. Strategy, roadmap, decisions log at the top. It takes work to build, and that work is the real moat.&rdquo;</em>
        </p>
      ),
    },
    {
      id: "what-it-looks-like",
      segment: 4,
      variant: "statement",
      title: "What it actually looks like",
      body: (
        <>
          <p>Not a text output you have to read.</p>
          <p>A <strong>different posture at the keyboard.</strong></p>
        </>
      ),
      notes: <p>20 sec. Transition into the <code>/start</code> reveal.</p>,
    },
    {
      id: "start-cockpit",
      segment: 4,
      variant: "terminal",
      className: "talk-slide--demo",
      label: "> LIVE — Claude Code terminal",
      title: "Watch what one keystroke does",
      body: (
        <>
          <p>Open Claude Code. Blinking cursor.</p>
          <p>Type <code>/start</code>. Menu: morning routine, project work, new project, admin.</p>
          <p>Pick <strong>new project</strong>. Scaffold lights up: CLAUDE.md, STATE, strategy, roadmap, decisions.</p>
          <p><strong>One keystroke. Full cockpit.</strong></p>
        </>
      ),
      notes: (
        <p>
          3 min. Practice this before stage. When the menu fills, pause and let the room see the delta. Use the <code>new-project</code> skill so the reveal is a real scaffold. <em>&ldquo;That&rsquo;s what it means to work with Claude when you&rsquo;ve given it a memory. Not a better output. A different workspace.&rdquo;</em>
        </p>
      ),
    },
    {
      id: "power-user-glimpse",
      segment: 4,
      variant: "bullets",
      title: "Further up the ladder",
      body: (
        <>
          <ul>
            <li>Jedi Council prompting</li>
            <li><code>/start</code> and <code>/wrap</code> as daily rhythm</li>
            <li>Building your own tools</li>
            <li>Asking Claude for the vocabulary of a field</li>
          </ul>
          <p><em>You don&rsquo;t need this today. Just know the ladder keeps going.</em></p>
        </>
      ),
      notes: (
        <>
          <p>60 sec. Parallel structure. The italic &ldquo;you can come back&rdquo; line gets its own breath.</p>
          <p><strong>Exit:</strong> <em>&ldquo;Before we actually build something, I want to address the elephant in the room. Is this cheating?&rdquo;</em></p>
        </>
      ),
    },

    // ================================================================
    // Segment 5 — Permission to collaborate
    // ================================================================
    {
      id: "sanderson",
      segment: 5,
      variant: "statement",
      title: "Brandon Sanderson's illustrators",
      body: (
        <>
          <p>Sanderson has worked with illustrators his whole career. Guides them, prompts them, iterates on drafts.</p>
          <p>And he never passes off their work as his own.</p>
          <p><strong>Acknowledgment is enough. When you work with AI, say so.</strong></p>
        </>
      ),
      notes: <p>90 sec. The permission move. Makes collaboration moral, not sneaky.</p>,
    },
    {
      id: "ogilvy",
      segment: 5,
      variant: "statement",
      title: "Copy to learn",
      body: (
        <>
          <p>David Ogilvy told young copywriters: <strong>copy other people&rsquo;s ads. Not to publish. To practice.</strong></p>
          <p>I still do this when I&rsquo;m learning something new.</p>
          <p><em>AI is the recipe you get to ask questions of.</em></p>
        </>
      ),
      notes: <p>90 sec.</p>,
    },
    {
      id: "bruner-scaffolding",
      segment: 5,
      variant: "statement",
      title: "Scaffolding, since 1976",
      body: (
        <>
          <p>Jerome Bruner called this <strong>scaffolding.</strong></p>
          <p>The right help lets you work in the zone between what you can do alone and what you can&rsquo;t do even with help.</p>
          <p>Out of the box, Claude can&rsquo;t scaffold you. With memory, it can.</p>
        </>
      ),
      notes: <p>60 sec. <em>&ldquo;You&rsquo;re not outsourcing. You&rsquo;re watching the expert do it, then doing it yourself.&rdquo;</em></p>,
    },
    {
      id: "vocabulary",
      segment: 5,
      variant: "statement",
      title: "The compound move",
      body: (
        <>
          <p>The most useful version: ask Claude for the words.</p>
          <p><em>&ldquo;I want to build a website. What&rsquo;s a spec? What&rsquo;s plan mode? What are UI elements called? Who should I follow?&rdquo;</em></p>
          <p><strong>Claude will walk you through the vocabulary. That&rsquo;s scaffolding applied to learning itself.</strong></p>
        </>
      ),
      notes: (
        <>
          <p>60 sec. The single most memorable move for students and entrepreneurs.</p>
          <p><strong>Exit:</strong> <em>&ldquo;Enough preamble. Let&rsquo;s build something.&rdquo;</em></p>
        </>
      ),
    },
    {
      id: "break",
      segment: 5,
      variant: "poll",
      title: "2 minute break",
      subtitle: "Stretch. Phones ok. Back at the top of the minute.",
      notes: <p>Stand to the side. Visible. Don&rsquo;t get pulled into long conversations. Segment 6 starts at :47.</p>,
    },

    // ================================================================
    // Segment 6 — Find your own people
    // ================================================================
    {
      id: "new-ceiling",
      segment: 6,
      variant: "statement",
      title: "How you keep raising yours",
      body: (
        <>
          <p>Out of the box, Claude hits a ceiling.</p>
          <p>Upgrade it with memory, and the ceiling moves.</p>
          <p><strong>Short answer: you steal from people who&rsquo;ve already figured it out.</strong></p>
        </>
      ),
      notes: <p>30 sec.</p>,
    },
    {
      id: "build-your-own-list",
      segment: 6,
      variant: "statement",
      title: "Don't memorize my list. Build your own.",
      body: (
        <>
          <p><em>I don&rsquo;t know how to do most of what I do. I follow people who do.</em></p>
          <p>Open Claude. Paste in three problems you actually care about.</p>
          <p><strong>Ask who&rsquo;s shipping real work on each. Follow five.</strong></p>
          <p><em>In a week, your feed teaches you more than I can.</em></p>
        </>
      ),
      notes: (
        <>
          <p>3 min. Teach the discovery method, not a follow list.</p>
          <p><strong>Optional live demo prompt:</strong> <em>&ldquo;I&rsquo;m a Fisher undergrad interested in [their actual problem]. Give me 8 practitioners on X who are actively posting in 2026, are not full-time influencers, and whose last 10 posts show them doing the work, not commenting on other people&rsquo;s work. For each: handle, one-line why, a sample post type.&rdquo;</em></p>
          <p><strong>Anchor names for Q&amp;A:</strong> @simonw (Willison &mdash; craft), @emollick (Mollick &mdash; what this means for work), @levelsio (Levels &mdash; proof a non-employee can ship).</p>
          <p><strong>Watering holes:</strong> claude.com/customers, Show HN, r/ClaudeCode, Anthropic Discord, Substack Recommendations.</p>
        </>
      ),
    },
    {
      id: "skills-crystallized",
      segment: 6,
      variant: "statement",
      title: "A skill is what happens when...",
      body: (
        <>
          <p>...someone distills a workflow into a reusable file.</p>
          <p>I use Pigford&rsquo;s <code>/build</code> skill every time I start a project. I didn&rsquo;t write it.</p>
          <p><strong>Steal the workflow, not just the tweet.</strong></p>
        </>
      ),
      notes: <p>2 min.</p>,
    },
    {
      id: "community-context",
      segment: 6,
      variant: "statement",
      title: "Your network is a context source",
      body: (
        <>
          <p>Your peers, your Discord, your group chat, your founder Slack.</p>
          <p>That&rsquo;s where you hear about skills that work.</p>
          <p><strong>Your network isn&rsquo;t just relationships. It&rsquo;s a context source.</strong></p>
          <p><em>And if you&rsquo;re leaving here feeling behind, you&rsquo;re not behind. You&rsquo;re earlier than the people around you realize. That&rsquo;s different.</em></p>
        </>
      ),
      notes: (
        <>
          <p>90 sec. The italic close is the Mr. Rogers beat &mdash; name the emotional weather in the room. A lot of students will be feeling they&rsquo;re already late. Say this line <em>slowly.</em> Let it sit.</p>
          <p><strong>Exit:</strong> <em>&ldquo;You&rsquo;ve watched me steal from smart people for an hour. Let&rsquo;s make this about you. What do you want to see?&rdquo;</em></p>
        </>
      ),
    },

    // ================================================================
    // Segment 7 — Demo clinic + Q&A
    // ================================================================
    {
      id: "demo-clinic-qa",
      segment: 7,
      variant: "poll",
      title: "What do you want to see?",
      subtitle: "Point at the whiteboard. Ask anything. I'll demo on the spot.",
      notes: (
        <>
          <p><strong>Rock on the desk (Boyden):</strong> The whiteboard from segment 1 stays visible all 90 minutes. Walk back to it here. Point at the five themes. <em>&ldquo;You told me these things mattered to you an hour and a half ago. I still owe you answers on three of them. Which one first?&rdquo;</em> That line turns a cold Q&amp;A start into a warm one &mdash; the audience is already bought in because they named the topics.</p>
          <p>30 min total. Take questions and run demos on demand. If the room is quiet for more than 10 seconds, pick a whiteboard item and demo it yourself as a seed. Alternate between verbal Q&amp;A and on-demand demos.</p>
          <p><strong>Primary demo pool</strong> (seed if the room is quiet):</p>
          <ol>
            <li>Syllabus &rarr; Study Guide (student bait)</li>
            <li>Market Sizing on Demand (crowd shouts a niche)</li>
            <li>Meeting Notes &rarr; Action System</li>
            <li>Research Memo from 10 Tabs</li>
            <li>Voice-Matched Cold Email</li>
            <li>Memory Diff (if throughline needs reinforcement)</li>
          </ol>
          <p>Deploy ONE power-user move inline during a demo &mdash; most likely a Jedi Council prompt inside whichever demo the room picks.</p>
          <p><strong>Failure watch:</strong> if a demo stalls, cut fast. <em>&ldquo;This one&rsquo;s misbehaving &mdash; let me show you [backup].&rdquo;</em></p>
          <p><strong>Exit:</strong> <em>&ldquo;One last thing before we close.&rdquo;</em></p>
        </>
      ),
    },

    // ================================================================
    // Segment 8 — Close
    // ================================================================
    {
      id: "meta-reveal",
      segment: 8,
      variant: "terminal",
      className: "talk-slide--machine",
      label: "// meta reveal",
      title: "One last thing",
      body: (
        <>
          <p>You&rsquo;ve watched me work with Claude for an hour.</p>
          <p><strong>This talk was built with Claude, too.</strong> Over the last couple of days. Here&rsquo;s the brainstorm.</p>
        </>
      ),
      notes: <p>60 sec. Then the next two brainstorm slides.</p>,
    },
    {
      id: "brainstorm-1",
      segment: 8,
      variant: "terminal",
      className: "talk-slide--split",
      label: "// brainstorm 1: shape revision",
      image: "/assets/screenshots/brainstorm-1.png",
      imageAlt: "Screenshot of a Claude brainstorming conversation showing the shape of the talk being revised",
      notes: (
        <p>
          45 sec. <em>&ldquo;This is where the shape of the talk revised. I said one thing, Claude pushed back, and the whole structure shifted. That&rsquo;s what it looks like when you&rsquo;ve done the work to give Claude memory.&rdquo;</em>
        </p>
      ),
    },
    {
      id: "brainstorm-2",
      segment: 8,
      variant: "terminal",
      className: "talk-slide--split",
      label: "// brainstorm 2: workspace tree",
      image: "/assets/screenshots/brainstorm-2.png",
      imageAlt: "Screenshot of Andy's teaching workspace file tree",
      notes: (
        <p>
          45 sec. <em>&ldquo;This is the directory I&rsquo;m working from. Four books on teaching, research docs, a metaphors library. The talk exists inside a system that can produce more talks.&rdquo;</em>
        </p>
      ),
    },
    {
      id: "seen-the-gap",
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
      notes: <p>45 sec. Callback to Segment 2. &ldquo;Not allowed&rdquo; is earned by now.</p>,
    },
    {
      id: "pick-one",
      segment: 8,
      variant: "statement",
      title: "Choose deliberately",
      body: (
        <>
          <p>Building without AI is legitimate. Like handmade furniture or bespoke suits.</p>
          <p>But if you&rsquo;re not choosing deliberately, if you&rsquo;re just hesitating, you owe yourself the exploration.</p>
        </>
      ),
      notes: <p>60 sec. Read slowly. Let the pause between the sentences do the work. Closing quote comes on the next slide.</p>,
    },
    {
      id: "leaving-beautiful-things",
      segment: 8,
      variant: "statement",
      className: "talk-slide--quote",
      body: (
        <p>
          <em>Anyone who thinks of themselves as creative and isn&rsquo;t leaning in right now is leaving beautiful things uncreated.</em>
        </p>
      ),
      notes: <p>30 sec. Read slowly. Pause on <em>&ldquo;uncreated.&rdquo;</em> Don&rsquo;t rescue the silence.</p>,
    },
    {
      id: "someone-in-this-room",
      segment: 8,
      variant: "statement",
      title: "Someone in this room",
      body: (
        <>
          <p>By April next year, someone in this room will ship something that surprised them.</p>
          <p>A tool. A book. A company. A lab they got into. Their worst task, automated.</p>
          <p><em>I want it to be all of you. It only has to be one.</em></p>
        </>
      ),
      notes: (
        <p>
          45 sec. The Duarte peak the v2 close was missing. Names specific, concrete outcomes so the room can picture themselves in at least one. The italic close is the call-to-arms &mdash; not a benediction, a challenge. Read slowly. Make eye contact with two or three specific students on <em>&ldquo;it only has to be one of you.&rdquo;</em>
        </p>
      ),
    },
    {
      id: "tonight",
      segment: 8,
      variant: "bullets",
      title: "Tonight",
      body: (
        <ul>
          <li>Pick a task you owed yourself this week.</li>
          <li>Paste everything you know about it into Claude. Notes, syllabus, voice sample.</li>
          <li>Run it. <em>See what happens when the AI knows your world.</em></li>
          <li>Bonus: do it by voice. Install Wispr Flow.</li>
        </ul>
      ),
      notes: <p>45 sec. Deployable beats memorable. Concrete prescription. Was 6 bullets, compressed to 4 — "Open Claude" is implicit in "paste into Claude", and the italic wow-moment lives next to "run it" as one beat.</p>,
    },
    {
      id: "thanks-qr",
      segment: 8,
      variant: "poll",
      className: "talk-slide--thanks",
      title: "Thank you, Ohio State.",
      body: (
        <>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/assets/screenshots/feedback-qr.png"
            alt="QR code to feedback form"
            className="talk-slide__thanks-qr"
          />
          <p className="talk-slide__thanks-caption">60 seconds of feedback, if you can spare it.</p>
        </>
      ),
      notes: (
        <>
          <p>30 sec. <em>&ldquo;60 seconds of feedback if you have it. I&rsquo;ll stick around for questions. Come find me.&rdquo;</em> Exit cleanly. Don&rsquo;t apologize.</p>
          <p><strong>Add on stage:</strong> <em>&ldquo;Oh &mdash; and the reason I came. Ohio State brought me on this year to help the entrepreneurship and software programs here find their voice. That&rsquo;s why this talk is happening. And why the next one will too.&rdquo;</em></p>
        </>
      ),
    },

    // ================================================================
    // Appendix (Q&A reserve)
    // ================================================================
    {
      id: "appendix-scaffolding",
      segment: 8,
      variant: "statement",
      className: "talk-slide--appendix",
      title: "Bruner's scaffolding (extended)",
      body: (
        <p>
          Reserved if faculty ask &ldquo;doesn&rsquo;t this make students dumber?&rdquo; Extended version of the scaffolding slide.
        </p>
      ),
      notes: <p>Q&amp;A reserve. ~90 sec if deployed.</p>,
    },
    {
      id: "appendix-markdown",
      segment: 8,
      variant: "statement",
      className: "talk-slide--appendix",
      title: "Structure matters",
      body: (
        <>
          <p>A PDF is pixels. Structure disappears.</p>
          <p>Markdown is parseable. Claude can jump to a heading, quote a section, cross-reference.</p>
          <p><em>Less token-intensive too.</em></p>
        </>
      ),
      notes: <p>Q&amp;A reserve for &ldquo;why markdown?&rdquo; 30&ndash;45 sec if deployed.</p>,
    },
    {
      id: "appendix-create-judge",
      segment: 8,
      variant: "statement",
      className: "talk-slide--appendix",
      title: "Create and judge",
      body: (
        <>
          <p>Writing forces you to <strong>create and judge at the same time.</strong></p>
          <p>Delete, retype, the internal editor is always on.</p>
          <p>This workflow <strong>separates them.</strong> Creation happens without brakes. Judgment happens fresh.</p>
          <p><em>That&rsquo;s not outsourcing. That&rsquo;s taking both halves more seriously.</em></p>
        </>
      ),
      notes: <p>Q&amp;A reserve for &ldquo;isn&rsquo;t this outsourcing thinking?&rdquo; 60 sec if deployed.</p>,
    },
  ],
};

export default talk;
