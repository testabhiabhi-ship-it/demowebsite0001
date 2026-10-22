import { createFileRoute } from "@tanstack/react-router";
import { useRef, useState, type ReactNode } from "react";
import m1 from "@/assets/m1.jpg";
import m2 from "@/assets/m2.jpg";
import m3 from "@/assets/m3.jpg";
import m4 from "@/assets/m4.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Happy Birthday Keerthi ❤️ — From Girish" },
      { name: "description", content: "A tiny corner of the internet made by Girish for Keerthi's birthday." },
      { property: "og:title", content: "Happy Birthday Keerthi ❤️" },
      { property: "og:description", content: "A little something from Girish, made for one very special person." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const reasons = [
  ["Your Smile", "Somehow you can completely change my mood without even trying."],
  ["Your Laugh", "One of my favorite sounds in the world."],
  ["Your Kindness", "You care more than you realize, and that's one of the things I admire most."],
  ["Your Support", "You've been there during moments when I needed someone the most."],
  ["Your Little Habits", "Yes... even the annoying ones. Especially those."],
  ["Your Personality", "You're weird. I'm weird. Somehow it works perfectly."],
  ["The Way You Care", "You make ordinary days feel important."],
  ["Just You", "Because honestly, there's nobody else I'd rather have beside me."],
];

const annoyed = [
  "Your obsession with cute reels and sweet treats.",
  "Taking forever to choose something.",
  "Stealing my food.",
  'Saying "5 minutes."',
  "Winning arguments you shouldn't win.",
  "Being cute when you're angry.",
];

const memories = [
  { t: "Beautiful Moment", c: "That golden evening when you laughed so hard you forgot the whole world was watching.", img: m1 },
  { t: "That Day", c: "Two coffees, one table, and a conversation I never wanted to end.", img: m2 },
  { t: "Our Favorite", c: "Walking side by side, no plans, no rush. Just us and the sunset.", img: m3 },
  { t: "Absolutely Chaotic 🤪", c: "Proof that we are equally ridiculous. Perfect match, honestly.", img: m4 },
  { t: "A Memory Worth Keeping", c: "One of those moments I replay in my head on hard days.", img: m3 },
  { t: "Another One 📸", c: "Because one photo is never enough when it comes to you.", img: m1 },
  { t: "Just Us", c: "Quiet moments with you are my favorite kind of loud.", img: m2 },
  { t: "Forever Memory ✨", c: "The silliest picture, and somehow the one I love the most.", img: m4 },
];

function Tag({ children }: { children: ReactNode }) {
  return <p className="mb-4 text-xs font-bold tracking-[0.25em] text-accent">{children}</p>;
}
function H2({ children }: { children: ReactNode }) {
  return <h2 className="font-serif text-4xl leading-tight text-primary md:text-5xl">{children}</h2>;
}
const btn = "inline-flex items-center justify-center gap-2 rounded-full px-7 py-4 font-medium transition hover:scale-[1.03]";

function Confetti() {
  const pieces = Array.from({ length: 80 }, (_, i) => i);
  const colors = ["var(--accent)", "var(--primary)", "var(--secondary)", "oklch(0.85 0.12 80)"];
  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden">
      {pieces.map((i) => (
        <span
          key={i}
          className="confetti absolute -top-4 block h-3 w-2 rounded-sm"
          style={{
            left: `${(i * 37) % 100}%`,
            background: colors[i % 4],
            animationDuration: `${2.5 + (i % 7) * 0.4}s`,
            animationDelay: `${(i % 10) * 0.12}s`,
          }}
        />
      ))}
    </div>
  );
}

function Footer() {
  return (
    <footer className="py-10 text-center text-sm text-muted-foreground">
      <p className="font-serif text-lg text-primary">Couple Friendly</p>
      <p>Made with ❤️ by Girish for Keerthi</p>
    </footer>
  );
}

function Index() {
  const [loved, setLoved] = useState(false);
  const [memoriesOpen, setMemoriesOpen] = useState(false);
  const [finalOpen, setFinalOpen] = useState(false);
  const storyRef = useRef<HTMLDivElement>(null);
  const letterRef = useRef<HTMLDivElement>(null);
  const go = (r: React.RefObject<HTMLDivElement | null>) => r.current?.scrollIntoView({ behavior: "smooth" });

  if (finalOpen) {
    return (
      <main className="min-h-screen">
        <Confetti />
        <Header />
        <section className="mx-auto max-w-2xl px-6 py-20 text-center">
          <Tag>FOR KEERTHI</Tag>
          <h1 className="font-serif text-5xl leading-tight text-primary md:text-7xl">
            Happy Birthday,<br /><em className="text-accent">My Favorite Person.</em>
          </h1>
          <div className="mt-12 rounded-[var(--radius)] border border-border bg-card p-8 text-left text-lg leading-relaxed shadow-sm">
            <p className="mb-4 font-serif text-2xl text-primary">Keerthi,</p>
            <p className="mb-4">Happy birthday to the girl who makes every ordinary day feel like a celebration. Today is all about you — your smile, your heart, and every little thing that makes you, you.</p>
            <p>I hope this year gives you as much happiness as you give me just by being in my life. Keep laughing loudly, dreaming big, and stealing my food. I'll always be right here, cheering for you.</p>
          </div>
          <div className="mt-10 rounded-[var(--radius)] bg-primary p-10 text-primary-foreground">
            <p className="text-xs font-bold tracking-[0.25em] opacity-80">IF I HAD TO CHOOSE AGAIN...</p>
            <p className="mt-3 font-serif text-4xl">I'd Still Choose <em>You.</em></p>
          </div>
          <div className="mt-12 space-y-2 font-serif text-xl text-primary">
            <p>Forever annoying each other.</p>
            <p>Forever making memories.</p>
            <p>Forever choosing each other.</p>
          </div>
          <p className="mt-12 font-serif text-3xl text-accent">HAPPY BIRTHDAY, KEERTHI ❤️</p>
          <p className="mt-4 text-muted-foreground">With all my love,</p>
          <p className="font-serif text-2xl text-primary">Girish</p>
        </section>
        <Footer />
      </main>
    );
  }

  return (
    <main className="min-h-screen">
      <Header />
      {!memoriesOpen ? (
        <>
          <section className="mx-auto flex min-h-[85vh] max-w-2xl flex-col items-center justify-center px-6 text-center">
            <Tag>A LITTLE SOMETHING FROM GIRISH</Tag>
            <h1 className="font-serif text-5xl leading-tight text-primary md:text-7xl">
              Today isn't just another day...
            </h1>
            <p className="mt-4 font-serif text-3xl italic text-accent">It's Keerthi's Day.</p>
            <p className="mt-6 max-w-md text-muted-foreground">A tiny corner of the internet made for one very special person. And yes... you are allowed to smile.</p>
            <div className="mt-10 flex w-full max-w-sm flex-col gap-3">
              <button onClick={() => go(storyRef)} className={`${btn} bg-primary text-primary-foreground`}>Start Our Story →</button>
              <button onClick={() => go(letterRef)} className={`${btn} border border-border bg-card text-primary`}>I Have Something To Say ♡</button>
            </div>
          </section>

          <section ref={storyRef} className="mx-auto max-w-2xl px-6 py-20">
            <Tag>IF YOU EVER WONDERED</Tag>
            <H2>Things I Love About You</H2>
            <p className="mt-4 text-muted-foreground">Honestly... this list could go on forever. Here are a few reasons. And yes, I'm being completely serious. Mostly.</p>
            <div className="mt-10 grid gap-4">
              {reasons.map(([t, d], i) => (
                <div key={t} className="rounded-[var(--radius)] border border-border bg-card p-6 shadow-sm">
                  <span className="text-sm font-bold text-accent">{String(i + 1).padStart(2, "0")}</span>
                  <h3 className="mt-2 font-serif text-2xl text-primary">{t}</h3>
                  <p className="mt-2 text-muted-foreground">{d}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mx-auto max-w-2xl px-6 py-20">
            <H2>Things I Pretend To Be Annoyed About 😤</H2>
            <p className="mt-4 text-muted-foreground">Because apparently loving someone means having a very detailed list of their nonsense.</p>
            <ul className="mt-8 divide-y divide-border rounded-[var(--radius)] border border-border bg-card">
              {annoyed.map((a, i) => (
                <li key={a} className="flex gap-4 p-5">
                  <span className="font-bold text-accent">{String(i + 1).padStart(2, "0")}</span>
                  <span>{a}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 text-center">
              {!loved ? (
                <button onClick={() => setLoved(true)} className={`${btn} bg-primary text-primary-foreground`}>Okay, Fine... I Love You ❤️</button>
              ) : (
                <div className="rounded-[var(--radius)] bg-secondary p-6">
                  <p className="font-bold tracking-widest text-primary">I KNEW YOU'D CLICK IT ❤️❤️</p>
                  <p className="mt-1 text-muted-foreground">Obviously. You already knew that.</p>
                </div>
              )}
            </div>
          </section>

          <section ref={letterRef} className="mx-auto max-w-2xl px-6 py-20">
            <Tag>BUT JOKES ASIDE</Tag>
            <H2>A Letter From Girish</H2>
            <div className="mt-8 space-y-4 rounded-[var(--radius)] border border-border bg-card p-8 text-lg leading-relaxed shadow-sm">
              <p>Keerthi, I don't say it enough, but you are the best thing that has ever happened to me. You walked into my life and made everything softer, brighter and so much more fun.</p>
              <p>Thank you for your patience on my bad days, your laughter on the good ones, and for loving me exactly as I am. Every memory with you is one I'd happily live again.</p>
              <p>On your birthday, I just want you to know — I'm proud of you, I'm grateful for you, and I'm always, always on your side.</p>
              <p className="pt-4 text-muted-foreground">With all my love,</p>
              <p className="font-serif text-2xl text-primary">Girish ❤️</p>
            </div>
          </section>

          <section className="mx-auto max-w-2xl px-6 py-20 text-center">
            <Tag>CHAPTER THREE</Tag>
            <H2>Now let's look at the evidence.</H2>
            <p className="mt-4 text-muted-foreground">Because apparently we have photographic proof of all our chaos.</p>
            <button onClick={() => { setMemoriesOpen(true); window.scrollTo(0, 0); }} className={`${btn} mt-8 bg-primary text-primary-foreground`}>Open Our Memories →</button>
          </section>
        </>
      ) : (
        <>
          <section className="mx-auto max-w-2xl px-6 py-16 text-center">
            <h1 className="font-serif text-5xl leading-tight text-primary">Proof That We Were Actually This Crazy Together.</h1>
            <p className="mt-4 text-muted-foreground">Beautiful moments, questionable decisions and memories worth keeping forever.</p>
          </section>
          <section className="mx-auto max-w-2xl px-6 pb-16">
            <Tag>OUR LITTLE ARCHIVE</Tag>
            <H2>Moments I'll Never Forget.</H2>
            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              {memories.map((m, i) => (
                <figure key={m.t} className="overflow-hidden rounded-[var(--radius)] border border-border bg-card shadow-sm">
                  <img src={m.img} alt={m.t} loading="lazy" width={816} height={816} className="aspect-square w-full object-cover" />
                  <figcaption className="p-5">
                    <span className="text-sm font-bold text-accent">{String(i + 1).padStart(2, "0")}</span>
                    <h3 className="font-serif text-xl text-primary">{m.t}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{m.c}</p>
                  </figcaption>
                </figure>
              ))}
            </div>
            <blockquote className="mt-16 text-center font-serif text-2xl italic text-primary">
              Years from now, I hope we look back at these photos and laugh at how much we didn't know about the memories we were making.
              <footer className="mt-4 text-sm not-italic tracking-[0.25em] text-accent">— GIRISH</footer>
            </blockquote>
          </section>
          <section className="mx-auto max-w-2xl px-6 py-20 text-center">
            <Tag>THE FINAL CHAPTER</Tag>
            <H2>Okay Keerthi... ready? One Last Thing.</H2>
            <p className="mt-4 text-muted-foreground">I saved the most important part for last.</p>
            <button onClick={() => { setFinalOpen(true); window.scrollTo(0, 0); }} className={`${btn} mt-8 bg-primary text-primary-foreground`}>Open Your Final Surprise 🎁</button>
          </section>
        </>
      )}
      <Footer />
    </main>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-40 flex items-center justify-between border-b border-border bg-background/80 px-6 py-4 backdrop-blur">
      <span className="font-serif text-xl text-primary">Couple Friendly</span>
      <span className="text-primary">❤️</span>
    </header>
  );
}
