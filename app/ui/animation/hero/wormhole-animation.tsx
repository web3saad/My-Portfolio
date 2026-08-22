import Image from 'next/image';

export default function WormholeAnimation() {
  return (
    <div className="group subtle-border relative size-72 shrink-0 rounded-xl bg-(--overlay-color)">
      <div className="-inset-[1px] group-hover:-translate-x-3.5 group-hover:-translate-y-3.5 subtle-border pointer-events-none absolute rounded-xl bg-(--background-color) duration-400 ease-in-out">
        <svg
          className="absolute inset-0 rounded-xl"
          fill="none"
          height="280"
          viewBox="0 0 280 280"
          width="280"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Wormhole</title>
          <defs>
            <linearGradient
              gradientUnits="userSpaceOnUse"
              id="main-hole-path-gradient"
              x1="225.041"
              x2="-13.693"
              y1="210.579"
              y2="139.133"
            >
              <stop className="[stop-color:var(--border-color)]" />
              <stop offset="1" className="[stop-color:var(--background-color)]" />
              <stop offset="1" className="[stop-color:var(--background-color)]" />
            </linearGradient>
            {/* ...other gradients omitted for brevity... */}
          </defs>
          <g>
            <rect className="fill-(--background-color)" height="280" width="280" />
            {/* ...SVG paths omitted for brevity... */}
          </g>
        </svg>
        <div className="absolute inset-0 transition-transform duration-700 [transition-timing-function:ease-in-out] group-hover:translate-x-[12%] group-hover:translate-y-[12%] group-hover:rotate-180 group-hover:scale-[60%] group-hover:delay-200">
          <div className="-rotate-16 glass-effect top-[50%] left-[70%] flex size-14 items-center justify-center rounded-[1.25rem] backdrop-blur-xs">
            <div className="relative size-1/2 opacity-70 invert-0 dark:opacity-90 dark:invert">
              <Image src="/nextjs.svg" fill alt="Nextjs logo" />
            </div>
          </div>
          <div className="glass-effect -rotate-16 top-[65%] left-[45%] flex size-14 items-center justify-center rounded-[1.25rem] backdrop-blur-xs">
            <div className="relative size-5/12 opacity-70 invert-0 dark:opacity-90 dark:invert">
              <Image src="/typescript.svg" fill alt="Typescript logo" />
            </div>
          </div>
          <div className="glass-effect top-[36%] left-[46%] flex size-14 rotate-16 items-center justify-center rounded-[1.25rem] backdrop-blur-xs">
            <div className="relative size-7/12 opacity-70 invert-0 dark:opacity-90 dark:invert">
              <Image src="/react.svg" fill alt="React logo" />
            </div>
          </div>
          <div className="glass-effect -rotate-33 top-[48%] left-[29%] flex size-7 items-center justify-center rounded-xl backdrop-blur-xs">
            <div className="relative size-7/12 opacity-70 invert-0 dark:opacity-90 dark:invert">
              <Image src="/tailwindcss.svg" fill alt="Tailwindcss logo" />
            </div>
          </div>
          <div className="glass-effect top-[68%] left-[64%] flex size-7 rotate-20 items-center justify-center rounded-xl backdrop-blur-xs">
            <div className="relative size-1/2 opacity-70 invert-0 dark:opacity-90 dark:invert">
              <Image src="/kotlin.svg" fill alt="Kotlin logo" />
            </div>
          </div>
          <div className="glass-effect -rotate-21 top-[28%] left-[68%] flex size-7 items-center justify-center rounded-xl backdrop-blur-xs">
            <div className="relative size-7/12 opacity-70 invert-0 dark:opacity-90 dark:invert">
              <Image src="/spring.svg" fill alt="Spring logo" />
            </div>
          </div>
          <div className="glass-effect top-[50%] left-[40%] size-2 rounded-[3.5px] opacity-60" />
          <div className="glass-effect top-[23%] left-[58%] size-2 rounded-[3.5px] opacity-60" />
          <div className="glass-effect top-[63%] left-[78%] size-2 rounded-[3.5px] opacity-60" />
          <div className="glass-effect top-[77%] left-[55%] size-2 rounded-[3.5px] opacity-60" />
        </div>
      </div>
    </div>
  );
}
