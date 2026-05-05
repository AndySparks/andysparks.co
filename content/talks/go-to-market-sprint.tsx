import type { Talk } from "@/lib/talks";

/**
 * Go to Market Sprint — v0 draft
 * Ported from DECK.md (2026-05-05).
 * Source of truth for full speaker notes + facilitator script:
 *   ~/conductor/repos/teaching/lectures/2026-05-06-summer-catalyst-go-to-market-sprint/DECK.md
 */

const talk: Talk = {
  slug: "go-to-market-sprint",
  title: "Go to Market Sprint",
  subtitle: "Five people. Five emails. One Friday deadline.",
  date: "2026-05-06",
  venue: "OSU Summer Catalyst",
  audience: "~100 OSU Summer Catalyst founders",
  duration: "60 min",
  description:
    "A 60-minute working session for OSU Summer Catalyst founders. By 11:00 you will have found 5 specific people, drafted an email to each, and committed to send all 5 by Friday at 5pm.",
  segments: [
    { number: 1, name: "Frame + 5 stakeholder types", timeBudget: "6 min" },
    { number: 2, name: "The contract", timeBudget: "1 min" },
    { number: 3, name: "Discovery", timeBudget: "15 min" },
    { number: 4, name: "Email anatomy + drafts", timeBudget: "10 min" },
    { number: 5, name: "Live rewrite", timeBudget: "2 min" },
    { number: 6, name: "Role-play", timeBudget: "12 min" },
    { number: 7, name: "Finish + commit", timeBudget: "10 min" },
    { number: 8, name: "Close", timeBudget: "5 min" },
  ],
  slides: [
    // ================================================================
    // Pre-title — up from 9:50, holds through opening voice beats
    // ================================================================
    {
      id: "title",
      segment: 1,
      variant: "title",
      title: "Go to Market Sprint",
      subtitle: "Five people. Five emails. One Friday deadline.",
      body: (
        <p className="talk-slide__footer">
          Andy Sparks · OSU Summer Catalyst · May 6, 2026
        </p>
      ),
      notes: (
        <p>
          Up from 9:50. Plain, big. Don&rsquo;t speak yet. Walk to front at 10:00. Let the room settle 30 sec. No &ldquo;good morning.&rdquo; Holds through SEGMENT 1a/1b/1c (Ford Focus callback, ground game in SF, Mom Test in 4 sentences).
        </p>
      ),
    },

    // ================================================================
    // SLIDE 1 — Five stakeholder types — show at 10:04
    // ================================================================
    {
      id: "five-people",
      segment: 1,
      variant: "terminal",
      title: "Five people to hear from in month one",
      body: (
        <>
          <ol>
            <li>
              <strong>Sharp-edge target user.</strong> The most acute version of the person whose problem you&rsquo;re solving.
            </li>
            <li>
              <strong>Domain veteran.</strong> 10+ years near the problem. Often not the buyer.
            </li>
            <li>
              <strong>Operator 1&ndash;2 years ahead.</strong> A founder who shipped recently. Not a billionaire &mdash; a senior who shipped last year.
            </li>
            <li>
              <strong>Person paying for a worse version.</strong> Already has the pain &mdash; and the budget.
            </li>
            <li>
              <strong>Smart skeptic.</strong> Someone who&rsquo;ll tell you why it&rsquo;s a bad idea.
            </li>
          </ol>
          <p>
            <em>NOT on this list:</em> investors, &ldquo;advisors,&rdquo; journalists, your friends.
          </p>
        </>
      ),
      notes: (
        <p>
          90 sec. Land all 5 by name. Hit &ldquo;NOT on this list&rdquo; hard &mdash; month one, none of those help. See DECK.md SEGMENT 1d.
        </p>
      ),
    },

    // ================================================================
    // SLIDE 2 — The contract — show at 10:05
    // ================================================================
    {
      id: "contract",
      segment: 2,
      variant: "statement",
      title: "The next hour",
      body: (
        <>
          <p>By 11:00 you will have:</p>
          <ul>
            <li>Found <strong>5 specific people</strong></li>
            <li>Drafted an <strong>email to each</strong></li>
            <li>Committed &mdash; to the person sitting next to you &mdash; to <strong>send all 5 by Friday 5pm</strong></li>
          </ul>
          <p>
            <em>Nobody is going to pitch anything. We&rsquo;re going to ask better questions than you&rsquo;ve ever asked.</em>
          </p>
        </>
      ),
      notes: (
        <p>
          60 sec. <em>&ldquo;Yes? Nod if you can commit.&rdquo;</em> Wait for nods. Don&rsquo;t skip.
        </p>
      ),
    },

    // ================================================================
    // SLIDE 3a — Use AI to find them — show at 10:06
    // (drives the 15-min Discovery block; rotate through 3a → 3b → 3c)
    // ================================================================
    {
      id: "find-prompts",
      segment: 3,
      variant: "terminal",
      title: "Use AI to find them",
      body: (
        <>
          <p>
            <em>The meta move.</em> Open Claude or ChatGPT.
          </p>
          <ul>
            <li>&ldquo;Most active startup CTOs on Twitter worth following for [domain]? 10 names + handles + one sentence each.&rdquo;</li>
            <li>&ldquo;Founders of YC startups, last 3 years, in SF, posting about [space]. 10 names with handles.&rdquo;</li>
            <li>&ldquo;Best Substack writers in [domain] for the operator side, not the analyst side.&rdquo;</li>
          </ul>
          <p>
            <em>Cross-paste into a 2nd model. Always verify on the actual platform.</em>
          </p>
        </>
      ),
      notes: (
        <p>
          Up at 10:06. Live-demo one prompt if there&rsquo;s time. <em>&ldquo;Best move: open Claude. Cross-paste into ChatGPT. Then verify on the actual platform.&rdquo;</em>
        </p>
      ),
    },

    // ================================================================
    // SLIDE 3b — Where to verify — show at ~10:09
    // ================================================================
    {
      id: "find-platforms",
      segment: 3,
      variant: "terminal",
      title: "Where to verify",
      body: (
        <ul>
          <li>Target user / domain veteran &rarr; <strong>LinkedIn</strong></li>
          <li>Operator 1&ndash;2 yrs ahead &rarr; <strong>Twitter / X</strong></li>
          <li>Domain writers &rarr; <strong>Substack</strong></li>
          <li>Pain-screaming target users &rarr; <strong>Reddit</strong></li>
          <li>Alumni anywhere &rarr; <strong>OSU alumni directory (Buckeye Link)</strong> &mdash; 5&ndash;10x cold rate</li>
        </ul>
      ),
      notes: (
        <p>
          Hard rule: at least 3 of 5 must be plausibly reachable in 7 days. Alumni beat strangers. Near-peer beats celebrity. <em>&ldquo;If you write &lsquo;Sam Altman&rsquo; on your list I&rsquo;ll come find you.&rdquo;</em> Time cues: <strong>10:14</strong> &mdash; 3 names by now. <strong>10:19</strong> &mdash; two minutes, land your fifth. <strong>10:21</strong> &mdash; pencils down.
        </p>
      ),
    },

    // ================================================================
    // SLIDE 3c — Warm intro before cold
    // ================================================================
    {
      id: "find-warm-intro",
      segment: 3,
      variant: "statement",
      title: "Warm intro before cold",
      body: (
        <>
          <p>Open profile &rarr; mutual connections &rarr; ask for a forward.</p>
          <p>
            <em>&ldquo;Would you be open to forwarding the note below?&rdquo;</em>
          </p>
        </>
      ),
      notes: (
        <p>
          Drop in if a student has a candidate they can&rsquo;t reach cold. Mutual connection + forward = 5&ndash;10x reply rate.
        </p>
      ),
    },

    // ================================================================
    // SLIDE 4a — Email anatomy — show at 10:21
    // ================================================================
    {
      id: "email-anatomy",
      segment: 4,
      variant: "bullets",
      title: "Email anatomy — under 120 words",
      body: (
        <ul>
          <li>
            <strong>Subject.</strong> Specific. Lowercase fine. Never clever. <em>&ldquo;Quick question from an Ohio State founder.&rdquo;</em>
          </li>
          <li>
            <strong>Opener.</strong> One sentence &mdash; who you are + Catalyst/OSU hook. No &ldquo;I hope this finds you well.&rdquo;
          </li>
          <li>
            <strong>Why-them.</strong> One sentence &mdash; what THEY did/wrote/built. Not flattery.
          </li>
          <li>
            <strong>The ask.</strong> ONE thing. 15 minutes. One question. One intro. Concrete. Time-bounded. Never &ldquo;grab coffee sometime.&rdquo;
          </li>
        </ul>
      ),
      notes: (
        <p>
          Up at 10:21. Drives 10 min of solo drafting. During drafting, eyeball a confident volunteer for the live rewrite. Avoid visibly nervous students.
        </p>
      ),
    },

    // ================================================================
    // SLIDE 4b — Template A: Operator 1–2 yrs ahead
    // ================================================================
    {
      id: "template-a",
      segment: 4,
      variant: "statement",
      title: "Template A — Operator 1–2 yrs ahead",
      body: (
        <p>
          <em>
            &ldquo;I&rsquo;m 20, building [X]. You shipped [their thing] last year and the [tactical thing] you wrote about is the wall I&rsquo;m hitting. Could I ask one question, or 15 min if easier?&rdquo;
          </em>
        </p>
      ),
      notes: (
        <p>
          Highest hit rate template. Specificity in &ldquo;[their thing]&rdquo; and &ldquo;[tactical thing]&rdquo; is what makes it work.
        </p>
      ),
    },

    // ================================================================
    // SLIDE 4c — Template B: Customer interview
    // ================================================================
    {
      id: "template-b",
      segment: 4,
      variant: "statement",
      title: "Template B — Customer interview",
      body: (
        <p>
          <em>
            &ldquo;I&rsquo;m at Ohio State trying to understand how [role] handles [pain]. Not selling &mdash; I don&rsquo;t have a product. Could I ask 5 questions about how you do this today? 15 min, your call.&rdquo;
          </em>
        </p>
      ),
      notes: (
        <p>
          For sharp-edge target user. The &ldquo;not selling&rdquo; line is load-bearing &mdash; it lets people say yes without bracing.
        </p>
      ),
    },

    // ================================================================
    // SLIDE 4d — Template C: Domain expert
    // ================================================================
    {
      id: "template-c",
      segment: 4,
      variant: "statement",
      title: "Template C — Domain expert",
      body: (
        <p>
          <em>
            &ldquo;I&rsquo;ve been obsessed with [domain] for [time]. I read [thing they wrote]. I&rsquo;m at OSU&rsquo;s Catalyst program. What&rsquo;s the one thing people in [domain] always miss?&rdquo;
          </em>
        </p>
      ),
      notes: (
        <p>
          For the &ldquo;I&rsquo;m 20 and obsessed with X&rdquo; cold email. The closing question gives them an opinion they&rsquo;ve already had a hundred times &mdash; easy to write back.
        </p>
      ),
    },

    // ================================================================
    // SLIDE 4e — Template D: Warm-intro request
    // ================================================================
    {
      id: "template-d",
      segment: 4,
      variant: "statement",
      title: "Template D — Warm-intro request",
      body: (
        <p>
          <em>
            &ldquo;I saw you know [target]. I&rsquo;m [one sentence]. Would you be open to forwarding the note below? Totally fine if not.&rdquo;
          </em>
        </p>
      ),
      notes: (
        <p>
          The &ldquo;totally fine if not&rdquo; is the unlock &mdash; it removes the social cost of saying no, which paradoxically raises yes rate.
        </p>
      ),
    },

    // ================================================================
    // SLIDE 4f — What NOT to do
    // ================================================================
    {
      id: "what-not-to-do",
      segment: 4,
      variant: "bullets",
      title: "What NOT to do",
      body: (
        <ul>
          <li>Pitch your idea.</li>
          <li>Ask for opinions on your idea.</li>
          <li>&ldquo;Pick your brain&rdquo; or &ldquo;grab coffee sometime.&rdquo;</li>
          <li>Apologize for your age.</li>
          <li>Send a Calendly cold.</li>
        </ul>
      ),
      notes: (
        <p>
          Read each one out loud. Especially &ldquo;apologize for your age&rdquo; &mdash; that&rsquo;s the failure mode in this room.
        </p>
      ),
    },

    // ================================================================
    // SLIDE 5a — Role-play structure — show at 10:33
    // ================================================================
    {
      id: "role-play-structure",
      segment: 6,
      variant: "terminal",
      title: "Role-play — pairs, two rounds",
      body: (
        <>
          <p>
            <strong>6 minutes each round.</strong> Person A is the sender.
          </p>
          <ul>
            <li><strong>30 sec:</strong> read your email aloud.</li>
            <li><strong>30 sec:</strong> brief Person B on who they&rsquo;re playing. <em>&ldquo;You&rsquo;re a 45-yo construction office manager &mdash; skeptical, busy.&rdquo;</em></li>
            <li><strong>3 min:</strong> role-play.</li>
            <li><strong>2 min:</strong> feedback.</li>
          </ul>
          <p>
            <em>Then switch. Andy will call it.</em>
          </p>
        </>
      ),
      notes: (
        <p>
          Up at 10:33. Loose pairs by proximity. Do NOT circulate during role-play &mdash; trust the protocol.
        </p>
      ),
    },

    // ================================================================
    // SLIDE 5b — The 3 feedback questions
    // ================================================================
    {
      id: "role-play-questions",
      segment: 6,
      variant: "statement",
      title: "Person B answers exactly these",
      body: (
        <>
          <ol>
            <li>What did you actually believe?</li>
            <li>Where did I lose you / sound like a salesperson?</li>
            <li>One specific change you&rsquo;d make to the email?</li>
          </ol>
          <p>
            <em>Role-play is awkward. The awkwardness is the rep.</em>
          </p>
        </>
      ),
      notes: (
        <p>
          Call <strong>&ldquo;SWITCH&rdquo;</strong> loudly at 10:39: <em>&ldquo;Person B reads their email now. Person A plays the recipient.&rdquo;</em>
        </p>
      ),
    },

    // ================================================================
    // SLIDE 6 — Send by Friday — show at 10:45
    // ================================================================
    {
      id: "send-by-friday",
      segment: 7,
      variant: "statement",
      title: "Send by Friday",
      body: (
        <>
          <p>Two things in the next 10 minutes:</p>
          <ol>
            <li>
              <strong>All 5 emails into Gmail drafts.</strong> Real recipient field. Subject. Body. Apply what role-play taught you.
            </li>
            <li>
              <strong>Pair commitment.</strong> Look at your partner. Say out loud:
              <br />
              <em>&ldquo;By Friday at 5pm, I will send these 5 emails.&rdquo;</em>
              <br />
              Trade phone numbers. Friday 5pm &mdash; text each other &ldquo;sent&rdquo; / &ldquo;not sent.&rdquo;
            </li>
          </ol>
        </>
      ),
      notes: (
        <p>
          Up at 10:45. Walk the room, help with stuck drafts. The 10:55 close is voice-only &mdash; slide goes blank or back to title. See DECK.md SEGMENT 7 (reciprocity, the &ldquo;I did the thing&rdquo; follow-up, dinner-hosting, safety, handout).
        </p>
      ),
    },
  ],
};

export default talk;
