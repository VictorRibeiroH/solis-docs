import Link from "next/link"

export default function SidebarSolis() {
  return (
    <>
      {/* Desktop layout - sidebar */}
      <div className="hidden lg:flex fixed left-0 top-0 h-screen w-[30%] bg-white flex-col justify-between p-8 overflow-hidden">
        {/* Top section with title */}
        <div className="flex flex-col">
          <Link href="/" className="cursor-pointer hover:opacity-80 transition-opacity">
            <div className="text-sm font-semibold tracking-wider text-primary mb-8">GUIA DE SISTEMA</div>
          </Link>
          <div className="font-sans font-bold text-[48px] leading-tight text-foreground">
            Solis
            <br />
            Educacional
          </div>
        </div>

        {/* Bottom section with bio and links */}
        <div className="flex flex-col space-y-6">
          <p className="font-sans font-light text-[18px] leading-relaxed text-muted-foreground">
            Sou o Robô Solis e hoje vou te ensinar a usar a plataforma. Vamos iluminar o caminho do aprendizado juntos!
          </p>

          <div className="flex items-start">
            <a
              href="https://painel.soliseducacional.com.br/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-sans font-medium text-[18px] text-primary hover:text-secondary transition-colors inline-flex items-center gap-2"
            >
              Acessar a plataforma
              <span className="text-xl">→</span>
            </a>
          </div>
        </div>
      </div>

      <div className="lg:hidden bg-white p-6 space-y-6">
        {/* Top section with title */}
        <div className="space-y-4">
          <Link href="/" className="cursor-pointer hover:opacity-80 transition-opacity">
            <div className="text-sm font-semibold tracking-wider text-primary">GUIA DE SISTEMA</div>
          </Link>
          <div className="font-sans font-bold text-[32px] md:text-[40px] leading-tight text-foreground">
            Solis Educacional
          </div>
        </div>

        {/* Bio text */}
        <p className="font-sans font-light text-[16px] md:text-[18px] leading-relaxed text-muted-foreground">
          Sou o Robô Solis e hoje vou te ensinar a usar a plataforma. Vamos iluminar o caminho do aprendizado juntos!
        </p>

        <div className="flex">
          <a
            href="https://painel.soliseducacional.com.br/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-sans font-medium text-[16px] md:text-[18px] text-primary hover:text-secondary transition-colors inline-flex items-center gap-2"
          >
            Acessar a plataforma
            <span className="text-xl">→</span>
          </a>
        </div>
      </div>
    </>
  )
}
