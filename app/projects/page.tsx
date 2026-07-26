import { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ExternalLink, Github } from "lucide-react"

export const metadata: Metadata = {
  title: "Projects",
  description: "Explore my portfolio of projects - web applications, mobile apps, and innovative solutions built with modern technologies.",
  alternates: {
    canonical: "/projects",
  },
  openGraph: {
    title: "Projects | Bedo - Software Engineer",
    description: "Explore my portfolio of projects - web applications, mobile apps, and innovative solutions.",
    url: "/projects",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Projects | Bedo - Software Engineer",
    description: "Explore my portfolio of projects - web applications, mobile apps, and innovative solutions.",
  },
}

const projects = [
  {
    id: 1,
    title: "Project Name 1",
    description: "A brief description of what this project does and the technologies used.",
    technologies: ["React", "Next.js", "TypeScript"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
  },
  {
    id: 2,
    title: "Project Name 2",
    description: "A brief description of what this project does and the technologies used.",
    technologies: ["Node.js", "Express", "MongoDB"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
  },
  {
    id: 3,
    title: "Project Name 3",
    description: "A brief description of what this project does and the technologies used.",
    technologies: ["React Native", "Firebase"],
    githubUrl: "https://github.com",
    liveUrl: null,
  },
]

export default function ProjectsPage() {
  return (
    <div className="relative flex min-h-screen flex-col overflow-hidden bg-brand-500">
      <Header />

      <main className="relative z-10 flex-1 px-4 py-10 sm:px-6 sm:py-16 md:px-8 md:py-20">
        <div className="mx-auto max-w-6xl">
          <h1 className="mb-3 font-heading text-4xl font-bold tracking-tight text-white sm:mb-4 sm:text-5xl md:text-6xl">
            Projects
          </h1>
          <p className="mb-8 max-w-2xl text-base text-white/70 sm:mb-12 sm:text-lg">
            A collection of projects I&apos;ve built, each representing a different challenge and learning experience.
          </p>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8 lg:grid-cols-3">
            {projects.map((project) => (
              <div
                key={project.id}
                className="rounded-lg border border-white/20 bg-white/10 p-5 backdrop-blur-sm transition-all duration-300 hover:bg-white/15 sm:p-6"
              >
                <h2 className="mb-3 font-heading text-xl font-bold text-white sm:text-2xl">{project.title}</h2>
                <p className="mb-4 text-sm leading-relaxed text-white/80">{project.description}</p>

                <div className="mb-6 flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full bg-brand-accent/20 px-3 py-1 text-xs font-medium text-brand-accent"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-4">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-white/70 transition-colors hover:text-white"
                    >
                      <Github className="h-4 w-4" />
                      <span>Code</span>
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-white/70 transition-colors hover:text-white"
                    >
                      <ExternalLink className="h-4 w-4" />
                      <span>Live</span>
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center sm:mt-12">
            <p className="text-sm text-white/60">More projects coming soon...</p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
