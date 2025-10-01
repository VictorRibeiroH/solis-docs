"use client"

import { useCallback, useState } from "react"
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogTitle,
  AlertDialogAction,
} from "@/components/ui/alert-dialog"

interface Project {
  id: string
  title: string
  category: string
  image: string
  file?: string
}

interface GalleryProps {
  projects?: Project[]
}

const defaultProjects: Project[] = [
  {
    id: "1",
    title: "Como usar o sistema de Questões",
    category: "Tutorial",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Wallpaper%20Quest%C3%B5es%20-%20DOC-d1SvhmuyZwHkw7PIMjhGyPUvFK7JSH.png",
    file: "questions-solis.pdf",
  },
  {
    id: "2",
    title: "Como usar o sistema de Trilhas",
    category: "Tutorial",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Trilhas%20de%20Aprendizagem%20-%20DOC-EqchkPYt7D9H3acfa3baHPMwVDuiW5.png",
    file: "trails-solis.pdf",
  },
  {
    id: "3",
    title: "Como usar o sistema de Midias",
    category: "Tutorial",
    image: "/media-solis.png",
    file: "media-solis.pdf",
  }
]

function getDownloadFilename(title: string): string {
  const withoutDiacritics = title
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
  const slug = withoutDiacritics
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
  return `${slug || "arquivo"}.pdf`
}

export default function Gallery({ projects = defaultProjects }: GalleryProps) {
  const [dialogOpen, setDialogOpen] = useState(false)
  const [dialogMessage, setDialogMessage] = useState<string>("")

  const handleDownload = useCallback(async (event: React.MouseEvent<HTMLAnchorElement>, project: Project) => {
    event.preventDefault()
    const filePath = `/pdfs/${project.file ?? "questions-solis.pdf"}`

    try {
      const res = await fetch(filePath, { method: "HEAD" })
      if (!res.ok) {
        throw new Error(`Arquivo não encontrado: ${filePath}`)
      }

      const a = document.createElement("a")
      a.href = filePath
      a.download = getDownloadFilename(project.title)
      document.body.appendChild(a)
      a.click()
      a.remove()
    } catch (err) {
      setDialogMessage(
        "Estamos passando por problemas ao acessar este PDF. Se o erro persistir, entre em contato com um administrador."
      )
      setDialogOpen(true)
    }
  }, [])

  return (
    <div className="flex flex-col h-full">
      {/* Projects grid */}
      <div className="flex-1">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6 p-4 auto-rows-max">
          {projects.map((project) => (
            <a
              key={project.id}
              href={`/pdfs/${project.file ?? "questions-solis.pdf"}`}
              onClick={(e) => handleDownload(e, project)}
              className="group relative bg-white rounded-[22px] overflow-hidden cursor-pointer w-full aspect-[4/3] block"
            >
              <img
                src={project.image || "/placeholder.svg?height=300&width=400&query=project image"}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </a>
          ))}
        </div>
      </div>

      <AlertDialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <AlertDialogContent>
          <AlertDialogTitle>Não foi possível baixar o arquivo</AlertDialogTitle>
          <AlertDialogDescription>
            {dialogMessage}
          </AlertDialogDescription>
          <AlertDialogFooter>
            <AlertDialogAction onClick={() => setDialogOpen(false)}>Fechar</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  )
}
