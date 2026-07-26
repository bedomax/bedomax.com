import { Metadata } from "next"
import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "About Me",
  description: "Learn more about Bedo - Software Engineer, Entrepreneur, and Growth Hacker. 20 years building software, startups and ideas across Ecuador, Chile and beyond.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About Me | Bedo - Software Engineer",
    description: "20 years building software, startups and ideas across Ecuador, Chile and beyond.",
    url: "/about",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Me | Bedo - Software Engineer",
    description: "20 years building software, startups and ideas across Ecuador, Chile and beyond.",
  },
}

const milestones = [
  {
    year: "2005",
    title: "Started programming",
    description: "Discovered my passion for lines of code and logical problem solving.",
  },
  {
    year: "2015",
    title: "Built my first SaaS",
    description: "Stepped into product design, bootstrapping and finding real market fits.",
  },
  {
    year: "2025",
    title: "Founded Businesses",
    description: "Creating digital infrastructure for modern enterprises in South America.",
  },
  {
    year: "Today",
    title: "Building with AI",
    description: "Pioneering new automated products that augment human intelligence.",
  },
]

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col bg-brand-500">
      {/* Hero + timeline share the background image, per design */}
      <section className="relative overflow-hidden">
        <Image
          src="/images/about-hero-background.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="pointer-events-none object-cover"
          aria-hidden="true"
        />

        <Header />

        <div className="relative z-10 px-6 pt-16 md:px-14 md:pt-24">
          <h1 className="max-w-[667px] font-heading text-[32px] font-bold leading-[1.15] text-white md:text-[42px]">
            Building products that people actually use.
          </h1>
          <p className="mt-6 text-sm font-bold uppercase tracking-wide text-white/60">
            Software Engineer, Entrepreneur and Lifelong Builder
          </p>

          <div className="mt-14 flex flex-col items-start gap-8 md:flex-row md:items-center md:gap-14">
            <Image
              src="/images/about-avatar.png"
              alt="Bedo Maximiliano Cáceres"
              width={119}
              height={118}
              className="shrink-0 rounded-full"
            />
            <p className="max-w-[711px] font-heading text-xl font-normal leading-[1.4] text-white md:text-2xl">
              I&apos;ve spent the last <strong className="font-bold">20 years</strong> building software, startups and
              ideas across Ecuador, Chile and beyond.
            </p>
          </div>
        </div>

        {/* Timeline */}
        <div className="relative z-10 grid grid-cols-1 gap-10 px-6 pb-24 pt-16 sm:grid-cols-2 md:px-14 lg:grid-cols-4 lg:gap-6">
          {milestones.map((milestone, index) => (
            <div key={milestone.year} className="flex flex-col gap-4">
              <div className="flex w-full items-center" aria-hidden="true">
                <div className="size-3 shrink-0 rounded-full bg-white" />
                {index < milestones.length - 1 && <div className="hidden h-0.5 flex-1 bg-white/15 lg:block" />}
              </div>
              <div className="flex flex-col gap-1.5">
                <h3 className="font-heading text-xl font-bold text-white">{milestone.year}</h3>
                <p className="text-sm font-bold text-white">{milestone.title}</p>
                <p className="text-xs leading-[1.4] text-white/70">{milestone.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Philosophy */}
      <section className="border border-white/15">
        <div className="flex flex-col gap-10 px-6 py-16 md:flex-row md:gap-16 md:px-16 md:py-24">
          <div className="flex flex-1 flex-col items-start gap-6">
            <h2 className="font-heading text-[28px] font-bold leading-[1.3] text-white md:text-4xl">
              I don&apos;t believe in building software.
            </h2>
            <div className="h-1 w-20 bg-brand-accent" aria-hidden="true" />
            <p className="font-heading text-[28px] font-bold leading-[1.3] text-white md:text-4xl">
              I believe in solving real problems.
            </p>
          </div>
          <div className="flex flex-1 flex-col gap-6">
            <p className="text-base leading-[1.6] text-white/70">
              Technology is just a tool. The real magic happens when you identify an operational friction, understand
              the human element behind it, and address it completely.
            </p>
            <p className="text-base leading-[1.6] text-white/70">
              I care about simple solutions, clean and maintainable codebases, and building high-trust agile teams that
              love to execute fast.
            </p>
            <p className="flex items-center gap-2 text-base font-bold text-white">
              <span className="inline-block h-0.5 w-4 rotate-[15deg] bg-brand-accent" aria-hidden="true" />
              Always learning. Always shipping.
            </p>
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="relative bg-brand-navy">
        <div className="flex flex-col md:flex-row md:items-stretch">
          <div className="flex flex-col justify-center px-6 py-16 md:w-[40%] md:pl-24 md:pr-0">
            <h2 className="text-xs font-bold uppercase text-white/50">Where I&apos;m Based</h2>
            <p className="mt-4 text-4xl" aria-hidden="true">
              🇨🇱
            </p>
            <p className="mt-4 font-heading text-2xl font-bold text-white">Based in Chile</p>
            <p className="mt-1 text-sm text-white/70">I live in Santiago, Chile</p>
            <p className="mt-8 max-w-[366px] text-base leading-[1.6] text-white/70">
              I&apos;m Chilean, but I grew up in Ecuador. I went to university in Chile, where I took part in two
              entrepreneurship programs: Startup Chile and Chile Ventures. I travel a lot between both countries.
            </p>
          </div>
          <div className="relative min-h-[280px] md:min-h-[456px] md:flex-1">
            <Image
              src="/images/santiago-skyline.png"
              alt="Illustration of the Santiago de Chile skyline with the Andes"
              fill
              sizes="(max-width: 768px) 100vw, 60vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Work cards */}
      <section className="flex flex-col md:flex-row">
        <div className="relative flex-1 overflow-hidden bg-white">
          <Image
            src="/images/work-card-lexgo-bg.jpg"
            alt=""
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="pointer-events-none object-cover opacity-35"
            aria-hidden="true"
          />
          <div className="relative flex h-full min-h-[363px] flex-col items-center px-8 py-10">
            <h2 className="self-start pl-4 text-xs font-bold uppercase text-[#290088] md:pl-8">Current work</h2>
            <div className="flex flex-1 items-center">
              <Image src="/images/lexgo-logo.png" alt="Lexgo" width={250} height={100} />
            </div>
            <p className="max-w-[474px] pb-2 text-center text-base leading-[1.6] text-[#290088]">
              Since 2021 I&apos;ve worked at Lexgo, a Chilean startup that simplifies legal matters for other startups.
              I actively build the product and have witnessed its steady growth, helping more startups every day grow
              in a legal and organized way.
            </p>
          </div>
        </div>

        <div className="relative flex-1 overflow-hidden">
          <Image
            src="/images/work-card-agrapp-bg.jpg"
            alt=""
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="pointer-events-none object-cover"
            aria-hidden="true"
          />
          <div className="relative flex h-full min-h-[363px] flex-col items-center px-8 py-10">
            <h2 className="self-start pl-4 text-xs font-bold uppercase text-[#1a6418] md:pl-8">Side project</h2>
            <div className="flex flex-1 items-center">
              <Image src="/images/agrapp-logo.svg" alt="Agrapp" width={234} height={78} />
            </div>
            <p className="max-w-[474px] pb-2 text-center text-base leading-[1.6] text-[#1a6418]">
              Since 2018 I&apos;ve been building an app that helps farmers understand the costs of their agricultural
              work. It&apos;s currently used on farms in Chile, Colombia, Panama and the Dominican Republic. I ship
              updates every month — it&apos;s a project I&apos;m passionate about.
            </p>
          </div>
        </div>
      </section>

      {/* Photo band */}
      <section className="relative h-[320px] md:h-[480px]">
        <Image
          src="/images/pyrenees.jpg"
          alt="Snowy mountain landscape in the Pyrenees of Navarra"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <p className="absolute left-6 top-10 bg-brand-accent px-5 py-2 text-base leading-[1.6] text-brand-navy md:left-14">
          📸 Photo taken in the Pyrenees of Navarra
        </p>
      </section>

      <Footer />
    </div>
  )
}
