import type React from "react"
import { SidebarNav } from "@/components/employer/sidebar-nav"

export default function EmployerLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="container mx-auto px-4 py-6">
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12 lg:col-span-3">
          <SidebarNav />
        </div>
        <div className="col-span-12 lg:col-span-9">{children}</div>
      </div>
    </div>
  )
}

