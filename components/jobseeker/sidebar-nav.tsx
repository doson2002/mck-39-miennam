"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { UserCircle, LinkIcon, Briefcase, LayoutDashboard } from "lucide-react"

const items = [
  {
    title: "Tổng quan",
    href: "/nguoi-tim-viec",
    icon: LayoutDashboard,
  },
  {
    title: "Hồ sơ cá nhân",
    href: "/nguoi-tim-viec/ho-so",
    icon: UserCircle,
  },
  {
    title: "Liên kết mạng xã hội",
    href: "/nguoi-tim-viec/lien-ket",
    icon: LinkIcon,
  },
  {
    title: "Lịch sử việc làm",
    href: "/nguoi-tim-viec/lich-su",
    icon: Briefcase,
  },
]

export function SidebarNav() {
  const pathname = usePathname()

  return (
    <nav className="flex flex-col space-y-2">
      {items.map((item) => {
        const Icon = item.icon
        return (
          <Button
            key={item.href}
            variant={pathname === item.href ? "default" : "ghost"}
            className={cn("justify-start", pathname === item.href && "bg-primary")}
            asChild
          >
            <Link href={item.href}>
              <Icon className="mr-2 h-4 w-4" />
              {item.title}
            </Link>
          </Button>
        )
      })}
    </nav>
  )
}

