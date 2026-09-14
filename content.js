/* ============================================================
   content.js

   Everything you'd want to change lives in this file. Edit the
   text between the quote marks, save, reload the page. No build
   step and nothing to install.

   Rules of thumb:
   - Keep the commas and the curly braces where they are.
   - Text can hold inline HTML, so <em>italics</em> and
     <a href="...">links</a> both work inside any string.
   - If a quote mark appears inside your text, use a curly one
     (’ and “ ”) to avoid ending the string early.
   - Photos go in an "images" folder next to index.html, and the
     src path is written relative to index.html, like
     "images/ujima-2025.jpg".
   - To drop something, delete the whole { ... }, block including
     its trailing comma. To add one, copy a neighbour and edit it.
   ============================================================ */

window.SITE = {

  /* ---------- masthead and contact ---------- */

  name: "Lydia Jin",
  tagline: "Computer science and philosophy",
  location: "Seattle, WA",
  email: "lydiajin01@gmail.com",

  links: [
    { label: "GitHub", url: "https://github.com/ohhiitslyd" },
    { label: "LinkedIn", url: "https://www.linkedin.com/in/lydia-a-jin" },
    { label: "SoundCloud", url: "https://soundcloud.com/lida-338433305" },
    // Point this at the PDF once it sits next to index.html.
    { label: "Résumé", url: "resume.pdf" },
  ],

  /* ---------- ABOUT ---------- */

  about: {
    paragraphs: [
      "I studied computer science and philosophy at Dartmouth, graduating in 2026, and I do both. I write software, and I write papers, and the two feed each other more than people expect.",
      "I live in Seattle. Before that, Hanover and New York. At Dartmouth I directed Palaeopitus, the senior society that works with the administration on campus policy, and directed Ujima, the hip-hop dance troupe. I played bass in student bands. I read Russian and Mandarin at an intermediate level and keep working on both.",
      "This page collects what I have been doing. The tabs above go into more detail.",
    ],

    // A portrait, if you want one. Delete the whole photo block to
    // leave it off. Width is capped at 15rem.
    photo: { src: "images/portrait.jpg", alt: "Lydia Jin", caption: "" },

    // Extra photos, shown two across. Add as many as you like.
    photos: [
      // { src: "images/hanover-winter.jpg", alt: "Snow on the Green", caption: "Hanover, February." },
    ],
  },

  /* ---------- ENGINEERING ---------- */

  engineering: {
    intro: [
      "My interests sit in backend systems, developer tooling, and lately the question of what language models can and cannot be trusted to decide. I like the parts of a system where things break in production, and I like building the tool that makes a slow manual process go away.",
    ],

    experience: [
      {
        title: "Software Engineer, Oracle",
        where: "CrowdTwist Loyalty &amp; Engagement, Input/Output team",
        when: "2026",
        text: "Built and tested product features in Java, PHP, MySQL, and Kubernetes. Ran weekly releases to client production environments and monitored logs across eight of them. Wrote Codex workflows to take repetitive manual work off the team.",
      },
      {
        title: "Software Engineering Intern, Oracle",
        where: "CrowdTwist Platform team, New York",
        when: "Summer 2025",
        text: "Automated third-party license tracking and vulnerability checking for the engineering org. Built JIRA-based dashboards measuring how AI-assisted development changed throughput, and used an MCP server with Playwright to generate QA test cases.",
      },
      {
        title: "AI &amp; Philosophy Research Assistant, PhilLab",
        where: "Dartmouth, with Dr. Jonathan Phillips",
        when: "2025 to present",
        text: "Looking at where language model decision-making resembles human cognitive recall, and at what follows morally from models that decide in human-like ways.",
      },
      {
        title: "Fullstack Developer, DALI Lab",
        where: "Dartmouth",
        when: "2024 to 2025",
        text: "Built and maintained Debugging Visualization, a tool that shows developers the live values of variables and data structures. Also shipped educational games for Anivision, working with external partners on a team of four developers, two designers, and a project manager.",
      },
    ],

    projects: [
      {
        title: "Third-party license retrieval tool",
        when: "Oracle, internal",
        text: "License retrieval and vulnerability checking for third- and fourth-party Java and Python dependencies, run automatically instead of by hand. Logs license, copyright, and notice information into Oracle’s approval systems, and is deployed across CrowdTwist engineering.",
      },
      {
        title: "Debugging Visualization",
        url: "https://github.com/ohhiitslyd/Debugging-Visualization",
        when: "C#",
        text: "Multi-dimensional information visualization layered onto a control-flow graph, giving security researchers a navigable interface for binary analysis.",
      },
      {
        title: "Tiny Search Engine",
        url: "https://github.com/ohhiitslyd/TinySearchEngine",
        when: "C",
        text: "A crawler, an inverted-index builder, and a querier that ranks and returns matching pages.",
      },
      {
        title: "Collaborative Graphical Editor",
        url: "https://github.com/ohhiitslyd/Collab-Graphical-Editor",
        when: "Java",
        text: "Several people draw and manipulate shapes on one shared sketch in real time.",
      },
      {
        title: "Music Mania",
        url: "https://github.com/ohhiitslyd/Music-Mania",
        when: "Unity",
        text: "A 3D platformer built around music, with object manipulation, scorekeeping, and particle systems.",
      },
    ],

    tools: [
      { label: "Languages", value: "Java, Python, JavaScript, C, C++, C#, PHP, SQL" },
      { label: "Infrastructure and tooling", value: "Kubernetes, Docker, Git, MySQL, RESTful APIs, MCP servers, Playwright, Codex" },
    ],

    photos: [],
  },

  /* ---------- PHILOSOPHY ---------- */

  philosophy: {
    intro: [
      "I work on love and meaning, feminist philosophy, speech act theory, and the ethics of sexual harm, across the continental and analytic traditions. My method is first-person phenomenology held to analytic standards of argument. Merleau-Ponty, Beauvoir, hooks, Murdoch, Langton, and Haslanger show up the most.",
      "At Dartmouth I served as a student representative on hazing prevention, sexual violence prevention, and campus governance, and several of the papers below came out of that work. I have presented at an international philosophy conference.",
    ],

    // Add "url" to any paper to link the title to a PDF or a page.
    papers: [
      {
        title: "Hazing the Other",
        when: "Published",
        text: "In <em>A Priori</em>, Brown University’s undergraduate philosophy journal.",
      },
      {
        title: "Why Bloody Minds Mean Bloody Hands",
        when: "Draft",
        text: "A pragmatic genealogy of hazing, arguing the practice became self-effacing once it became voluntary. Reads Queloz alongside Haslanger’s manifest and operative concepts, with a history running from pennalism through fagging to Humboldtian reform.",
      },
      {
        title: "Love as a meaning-generating engine",
        when: "In revision",
        text: "A first-person phenomenology of love, drawing on Merleau-Ponty, Beauvoir, hooks, and Velleman, taking the individuation problem as the central objection.",
      },
      {
        title: "The wrong of non-consensual deepfakes",
        when: "Under review",
        text: "Locates the wrong in creation rather than publication, and develops two ideas to explain why, a zone of sexual intimacy and privacy understood as authorship.",
      },
      {
        title: "Ecstatic time and the shape of a life",
        when: "Draft",
        text: "Connects Heidegger’s ecstatic temporality to Velleman’s holism about well-being, using Kundera as the phenomenological lens.",
      },
    ],

    photos: [],
  },

  /* ---------- WRITING ---------- */

  writing: {
    intro: [
      "Philosophy for people without a philosophy degree, with the arguments left in.",
    ],

    // Paste the real Substack and podcast URLs over the "#" marks.
    items: [
      {
        title: "<em>I Write, You Read</em>",
        url: "#",
        when: "Substack",
        text: "Essays on love, harm, language, and whatever I am reading.",
      },
      {
        title: "<em>I Read, You Read</em>",
        url: "#",
        when: "Podcast",
        text: "One text at a time, read closely and out loud.",
      },
      {
        title: "<em>Viva la Lida</em>",
        url: "#",
        when: "Substack",
        text: "Everything else I want to write down.",
      },
    ],

    photos: [],
  },

  /* ---------- MUSIC ---------- */

  music: {
    intro: [
      "Bass in student bands, and four years of hip-hop with Ujima, which I directed. Recordings and video below.",
    ],

    // SoundCloud. A profile URL shows your whole track list; a
    // single track or playlist URL shows just that. Set to null
    // to hide the player.
    soundcloud: {
      url: "https://soundcloud.com/lida-338433305",
      caption: "",
    },

    // YouTube. "id" is the part after v= in a watch URL. So
    // youtube.com/watch?v=dQw4w9WgXcQ gives id: "dQw4w9WgXcQ".
    videos: [
      // { id: "dQw4w9WgXcQ", title: "Ujima spring showcase", caption: "Ujima spring showcase, 2025." },
    ],

    photos: [
      // { src: "images/bass.jpg", alt: "Playing bass at Sarner", caption: "Sarner basement, 2024." },
    ],
  },
};
