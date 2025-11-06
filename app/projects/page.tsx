import { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ExternalLink, Github } from "lucide-react"

export const metadata: Metadata = {
  title: "Projects",
  description: "Explore my portfolio of projects - web applications, mobile apps, and innovative solutions built with modern technologies.",
  openGraph: {
    title: "Projects | Bedo - Software Developer",
    description: "Explore my portfolio of projects - web applications, mobile apps, and innovative solutions.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Projects | Bedo - Software Developer",
    description: "Explore my portfolio of projects - web applications, mobile apps, and innovative solutions.",
  },
}

// This would typically come from a CMS or database
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
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-[#3B5BDB] via-[#2B4BC0] to-[#1E3A8A] relative overflow-hidden">
      {/* Decorative background shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#2B4BC0] rounded-full opacity-30 blur-3xl" />
        <div className="absolute top-1/2 right-1/4 w-[500px] h-[500px] bg-[#1E3A8A] rounded-full opacity-40 blur-3xl" />
        <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-[#2B4BC0] rounded-full opacity-25 blur-3xl" />
      </div>

      <Header />
      
      <main className="relative z-10 flex-1 px-8 py-32">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-white text-6xl font-extrabold mb-4 tracking-tight">Projects</h1>
          <p className="text-white/70 text-lg font-light mb-12 max-w-2xl">
            A collection of projects I've built, each representing a different challenge and learning experience.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div
                key={project.id}
                className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 hover:bg-white/15 transition-all duration-300"
              >
                <h2 className="text-white text-2xl font-bold mb-3">{project.title}</h2>
                <p className="text-white/80 text-sm font-light mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-[#F5C542]/20 text-[#F5C542] text-xs font-medium rounded-full"
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
                      className="flex items-center gap-2 text-white/70 hover:text-white transition-colors text-sm font-light"
                    >
                      <Github className="w-4 h-4" />
                      <span>Code</span>
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-white/70 hover:text-white transition-colors text-sm font-light"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>Live</span>
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-white/60 text-sm font-light">
              More projects coming soon...
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
