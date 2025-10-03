export function Hero() {
  return (
    <main className="relative z-10 flex-1 flex items-center px-8 pb-32">
      <div className="max-w-2xl">
        <h1 className="text-white text-7xl font-extrabold mb-4 tracking-tight">Soy Bedo</h1>

        <div className="relative inline-block mb-8">
          <p className="text-white/70 text-sm font-light tracking-widest uppercase">
            SOFTWARE DEVELOPER / ENTREPRENEUR / GROWTH HACKER
          </p>
          <div className="absolute -bottom-2 left-0 w-full h-px bg-[#F5C542]" />
        </div>

        <p className="text-white/90 text-lg font-light leading-relaxed max-w-xl">
          Hey! Welcome to my personal space. This is where I share my projects, ideas, and everything that keeps me
          creating.
        </p>
      </div>
    </main>
  )
}
