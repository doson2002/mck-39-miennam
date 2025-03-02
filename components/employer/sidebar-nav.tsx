"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { FileText, FileCheck, Briefcase, UserCheck, LayoutDashboard, Brain } from "lucide-react"

const items = [
  {
    title: "Tổng quan",
    href: "/nha-tuyen-dung",
    icon: LayoutDashboard,
  },
  {
    title: "Quản lý CV",
    href: "/nha-tuyen-dung/cv",
    icon: FileText,
  },
  {
    title: "Hợp đồng & Bảo hiểm",
    href: "/nha-tuyen-dung/hop-dong",
    icon: FileCheck,
  },
  {
    title: "Tin tuyển dụng",
    href: "/nha-tuyen-dung/tuyen-dung",
    icon: Briefcase,
  },
  {
    title: "Kiểm tra lý lịch",
    href: "/nha-tuyen-dung/kiem-tra",
    icon: UserCheck,
  },
  {
    title: "Phân tích AI",
    href: "/nha-tuyen-dung/phan-tich",
    icon: Brain,
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

