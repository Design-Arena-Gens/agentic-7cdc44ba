import type { ReactElement } from "react";

type TransitionShowcase = {
  id: string;
  name: string;
  description: string;
  code: string;
  Demo: () => ReactElement;
};

const transitions = [
  {
    id: "gooey-swipe",
    name: "Gooey Gradient Swipe",
    description:
      "A cinematic hero pattern where a blurred gradient river slides across the surface, leaving behind shimmering highlights.",
    Demo: GooeySwipeDemo,
    code: String.raw`<section class="liquid-demo gooey-swipe">
  <div class="badge">Hero Section</div>
  <h3>Slipstream brightness with gooey gradients</h3>
  <p>Saturate the fold with flowing light that responds like molten glass.</p>
  <button class="liquid-cta">Launch Experience</button>
</section>

.gooey-swipe::before {
  content: "";
  position: absolute;
  inset: -40% -60%;
  background: conic-gradient(from 90deg, #38bdf8, #a855f7, #f97316, #38bdf8);
  filter: blur(70px) saturate(130%);
  animation: gooeySwipe 9s linear infinite;
}

@keyframes gooeySwipe {
  0% { transform: translateX(-30%) rotate(-8deg); }
  50% { transform: translateX(25%) rotate(6deg); }
  100% { transform: translateX(-30%) rotate(-8deg); }
}`,
  },
  {
    id: "pulse-mask",
    name: "Nebula Mask Reveal",
    description:
      "A morphing clip-path veil that exposes imagery the way liquid crystals warp across a display.",
    Demo: PulseMaskDemo,
    code: String.raw`<section class="liquid-demo pulse-mask">
  <div class="mask-frame">
    <img src="/neon-city.jpg" alt="Neon city" />
    <div class="mask"></div>
  </div>
  <div class="copy">
    <h3>Liquid Aperture Reveal</h3>
    <p>Progressive disclosure with fluid refraction and depth.</p>
  </div>
</section>

.pulse-mask .mask {
  position: absolute;
  inset: 0;
  background: radial-gradient(circle at 20% 20%, transparent 40%, rgba(15,23,42,.78));
  animation: pulseMask 8s ease-in-out infinite;
  mix-blend-mode: lighten;
}

@keyframes pulseMask {
  0%, 100% { clip-path: circle(20% at 20% 40%); }
  40% { clip-path: ellipse(45% 55% at 70% 50%); }
  70% { clip-path: circle(30% at 50% 80%); }
}`,
  },
  {
    id: "liquid-button",
    name: "Tidal Button Hover",
    description:
      "Reactive call-to-action where a refracted wave rushes across the surface on hover, leaving subtle caustics.",
    Demo: LiquidButtonDemo,
    code: String.raw`<button class="liquid-button">
  <span>Request Access</span>
  <div class="wave"></div>
</button>

.liquid-button {
  position: relative;
  border-radius: 9999px;
  background: linear-gradient(120deg, #0ea5e9, #6366f1);
  overflow: hidden;
}

.liquid-button .wave {
  position: absolute;
  inset: -120%;
  background: radial-gradient(circle, rgba(255,255,255,0.45), transparent 55%);
  transform: translateY(65%);
  transition: transform .6s ease, opacity .4s ease;
}

.liquid-button:hover .wave {
  transform: translateY(0%);
  opacity: 0.85;
}`,
  },
  {
    id: "wave-panels",
    name: "Chromatic Wave Panels",
    description:
      "Stacked content cards wrapped in a liquid shimmer header, perfect for showcasing product suites.",
    Demo: WavePanelsDemo,
    code: String.raw`<section class="wave-panels">
  <header>
    <span>Experience Stack</span>
    <h3>Modulate momentum across surfaces</h3>
  </header>
  <div class="panel-grid">
    <article class="panel">
      <h4>Adaptive Surfaces</h4>
      <p>Liquid shaders for immersive hero moments.</p>
    </article>
    <article class="panel">
      <h4>Velocity Overlays</h4>
      <p>Chromatic ripples mapped to user journey.</p>
    </article>
    <article class="panel">
      <h4>Signal Trails</h4>
      <p>Reactive particles with additive light.</p>
    </article>
  </div>
</section>

.wave-panels header::after {
  content: "";
  position: absolute;
  inset: 0;
  background: linear-gradient(90deg, rgba(14,165,233,.6), rgba(236,72,153,.6));
  animation: shimmer 5s ease-in-out infinite;
  mask: radial-gradient(120% 65% at 50% 0%, #000 40%, transparent 72%);
}

@keyframes shimmer {
  0%, 100% { transform: translateX(-10%); }
  50% { transform: translateX(12%); }
}`,
  },
  {
    id: "ink-ripple",
    name: "Ink Ripple Overlay",
    description:
      "A page transition tile that soaks the canvas with expanding liquid ink driven by pointer position.",
    Demo: InkRippleDemo,
    code: String.raw`<div class="ink-ripple">
  <div class="ripple-layer"></div>
  <div class="content">
    <h3>Immersive Switcher</h3>
    <p>Trigger the transition to flood the interface.</p>
    <button>Trigger Ripple</button>
  </div>
</div>

.ink-ripple {
  position: relative;
  overflow: hidden;
  background: #020617;
}

.ink-ripple .ripple-layer {
  position: absolute;
  width: 40vmax;
  aspect-ratio: 1 / 1;
  background: radial-gradient(circle, rgba(59,130,246,0.75), transparent 70%);
  border-radius: 50%;
  transform: translate(-50%, -50%) scale(0.2);
  animation: idleRipple 6s cubic-bezier(.62,.01,.41,1) infinite;
}

@keyframes idleRipple {
  0% { transform: translate(-50%, -50%) scale(0.2); opacity: 0.4; }
  40% { opacity: 0.85; }
  100% { transform: translate(-50%, -50%) scale(1.3); opacity: 0; }
}`,
  },
] as const satisfies readonly TransitionShowcase[];

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="pointer-events-none absolute inset-x-0 top-[-30%] h-[600px] translate-y-[-40%] bg-[radial-gradient(ellipse_at_top,_rgba(56,189,248,0.15),rgba(15,23,42,0))]" />
        <div className="pointer-events-none absolute inset-x-0 bottom-[-30%] h-[600px] translate-y-[30%] bg-[radial-gradient(ellipse_at_bottom,_rgba(147,51,234,0.18),rgba(15,23,42,0))]" />
      </div>

      <main className="mx-auto flex max-w-5xl flex-col gap-20 px-6 py-24 md:gap-28 md:px-10">
        <section className="space-y-6">
          <span className="inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs uppercase tracking-[0.3em] text-sky-200 backdrop-blur">
            Liquid Transitions Index
          </span>
          <h1 className="text-4xl font-semibold leading-tight text-slate-50 md:text-6xl">
            Elevate hero moments with premium-grade liquid motion recipes
          </h1>
          <p className="max-w-3xl text-base text-slate-300 md:text-lg">
            Each section below pairs an interactive preview with a production-ready code fragment and a
            tactical note on when to deploy it. Layer these transitions to sculpt immersive,
            next-gen product surfaces.
          </p>
        </section>

        {transitions.map((transition) => (
          <section
            key={transition.id}
            className="group rounded-3xl border border-white/10 bg-slate-900/30 p-6 shadow-[0_20px_70px_rgba(15,23,42,0.55)] backdrop-blur-xl md:p-10"
          >
            <div className="flex flex-col gap-10 lg:grid lg:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)]">
              <div className="min-h-[260px]">
                <transition.Demo />
              </div>
              <div className="space-y-6">
                <header className="space-y-2">
                  <h2 className="text-2xl font-semibold text-white md:text-3xl">
                    {transition.name}
                  </h2>
                  <p className="text-sm text-slate-300 md:text-base">
                    {transition.description}
                  </p>
                </header>
                <details className="w-full overflow-hidden rounded-2xl border border-white/10 bg-slate-900/60 text-left transition-all duration-300 open:shadow-[0_12px_45px_rgba(14,165,233,0.18)]">
                  <summary className="cursor-pointer list-none px-5 py-4 text-sm font-medium tracking-wide text-sky-200/90 hover:text-sky-100 md:text-base">
                    View implementation code
                  </summary>
                  <div className="border-t border-white/10 bg-black/40 px-4 py-4 text-[13px] leading-6 text-slate-200 md:px-6">
                    <pre className="overflow-x-auto whitespace-pre-wrap break-words font-mono text-[12px] leading-relaxed text-slate-200/90 md:text-[13px]">
                      <code>{transition.code}</code>
                    </pre>
                  </div>
                </details>
                <div className="rounded-2xl border border-white/10 bg-slate-900/50 p-5 text-xs text-slate-300 md:text-sm">
                  <p className="font-semibold uppercase tracking-[0.28em] text-sky-200">
                    Deployment note
                  </p>
                  <p className="mt-2">
                    Pair with scroll-jacked narratives, onboarding flows, or high-impact landing nodes.
                    Keep motion durations under 9s and offer reduced-motion fallbacks by gating animations
                    with the user&apos;s preference.
                  </p>
                </div>
              </div>
            </div>
          </section>
        ))}

        <footer className="rounded-3xl border border-white/10 bg-slate-900/40 p-10 text-center text-slate-300 shadow-[0_20px_60px_rgba(2,6,23,0.6)] backdrop-blur-xl">
          <h2 className="text-2xl font-semibold text-white md:text-3xl">
            Blend these liquid transitions into your velocity stack
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm md:text-base">
            Ship the future of immersive interfaces. Combine the demos above with scroll-driven motion,
            subtle parallax, and audio-reactive shaders to produce full-sensory brand moments ready to
            deploy on Vercel.
          </p>
        </footer>
      </main>
    </div>
  );
}

function GooeySwipeDemo() {
  return (
    <section className="liquid-demo gooey-swipe">
      <div className="liquid-badge">Hero Section</div>
      <h3 className="liquid-title">Slipstream brightness with gooey gradients.</h3>
      <p className="liquid-copy">
        Saturate the fold with flowing light. Blend additive hues to simulate molten glass sliding across
        the hero canvas.
      </p>
      <button className="liquid-cta" type="button">
        Launch Experience
      </button>
    </section>
  );
}

function PulseMaskDemo() {
  return (
    <section className="liquid-demo pulse-mask">
      <div className="mask-frame">
        <div className="mask-image" />
        <div className="mask" />
      </div>
      <div className="copy">
        <h3 className="liquid-title">Liquid aperture reveal.</h3>
        <p className="liquid-copy">
          Introduce depth with a morphing veil that exposes content using refracted, nebula-grade blur.
        </p>
      </div>
    </section>
  );
}

function LiquidButtonDemo() {
  return (
    <section className="liquid-demo flex flex-col items-start gap-6 bg-slate-900/40">
      <h3 className="liquid-title">Hover-controlled tidal surge.</h3>
      <p className="liquid-copy max-w-md">
        Use on primary CTAs to signal progression depth. The passing wave paints light and returns to calm
        equilibrium.
      </p>
      <button className="liquid-button" type="button">
        <span>Request Access</span>
        <div className="wave" />
      </button>
    </section>
  );
}

function WavePanelsDemo() {
  return (
    <section className="wave-panels">
      <header>
        <span>Experience Stack</span>
        <h3>Modulate momentum across surfaces.</h3>
      </header>
      <div className="panel-grid">
        <article className="panel">
          <h4>Adaptive Surfaces</h4>
          <p>Liquid shaders for immersive hero moments.</p>
        </article>
        <article className="panel">
          <h4>Velocity Overlays</h4>
          <p>Chromatic ripples mapped to user journey.</p>
        </article>
        <article className="panel">
          <h4>Signal Trails</h4>
          <p>Reactive particles with additive light.</p>
        </article>
      </div>
    </section>
  );
}

function InkRippleDemo() {
  return (
    <section className="ink-ripple">
      <div className="ripple-layer" />
      <div className="content">
        <h3>Immersive switcher.</h3>
        <p>Flood the next view with an expanding ink spill routed from the cursor origin.</p>
        <button type="button">Trigger Ripple</button>
      </div>
    </section>
  );
}
