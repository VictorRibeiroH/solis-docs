import SidebarSolis from "@/components/sidebar-solis"
import Gallery from "@/components/gallery"

export default function Page() {
  return (
    <div className="min-h-screen bg-white">
      <div className="hidden lg:flex h-screen">
        {/* Sidebar */}
        <div className="w-[30%]">
          <SidebarSolis />
        </div>

        {/* Gallery main content */}
        <div className="flex-1 p-6 overflow-y-auto h-screen">
          <Gallery />
        </div>
      </div>

      <div className="lg:hidden">
        <SidebarSolis />
        <Gallery />
      </div>
    </div>
  )
}
