"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"
import { Building2, UserCircle } from "lucide-react"

export default function UserTypeSelection() {
  const router = useRouter()

  const userTypes = [
    {
      title: "Nhà Tuyển Dụng",
      description: "Đăng tin tuyển dụng và quản lý ứng viên",
      icon: Building2,
      features: [
        "Quản lý CV ứng tuyển",
        "Cập nhật hợp đồng & bảo hiểm",
        "Đăng tin tuyển dụng",
        "Kiểm tra lý lịch ứng viên",
      ],
      href: "/nha-tuyen-dung",
    },
    {
      title: "Người Tìm Việc",
      description: "Tạo hồ sơ và tìm kiếm cơ hội việc làm",
      icon: UserCircle,
      features: ["Quản lý hồ sơ cá nhân", "Liên kết mạng xã hội", "Cập nhật lịch sử việc làm", "Xác minh lý lịch"],
      href: "/nguoi-tim-viec",
    },
  ]

  return (
    <div className="max-w-5xl mx-auto">
      <div className="grid md:grid-cols-2 gap-6">
        {userTypes.map((type) => {
          const Icon = type.icon

          return (
            <Card key={type.title} className="p-6 hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-start gap-4">
                <div className="rounded-full p-3 bg-primary/10">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h2 className="text-xl font-semibold mb-2">{type.title}</h2>
                  <p className="text-muted-foreground mb-4">{type.description}</p>

                  <ul className="space-y-2 mb-6">
                    {type.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-sm text-muted-foreground">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary/60 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Button onClick={() => router.push(type.href)} className="w-full">
                    Truy cập ngay
                  </Button>
                </div>
              </div>
            </Card>
          )
        })}
      </div>
    </div>
  )
}

