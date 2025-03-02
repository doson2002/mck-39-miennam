"use client"

import { Card } from "@/components/ui/card"
import { FileText, FileCheck, Briefcase, UserCheck, Users, CheckCircle, XCircle } from "lucide-react"

export function EmployerDashboard() {
  const stats = [
    {
      title: "CV đang chờ",
      value: "12",
      icon: FileText,
      description: "CV cần xem xét",
    },
    {
      title: "Hợp đồng hoạt động",
      value: "45",
      icon: FileCheck,
      description: "Hợp đồng hiện tại",
    },
    {
      title: "Tin tuyển dụng",
      value: "8",
      icon: Briefcase,
      description: "Đang tuyển dụng",
    },
    {
      title: "Kiểm tra lý lịch",
      value: "28",
      icon: UserCheck,
      description: "Đã xác minh",
    },
  ]

  const recentVerifications = [
    {
      name: "Nguyễn Văn A",
      position: "Developer",
      status: "match",
      date: "22/02/2024",
    },
    {
      name: "Trần Thị B",
      position: "Designer",
      status: "mismatch",
      date: "21/02/2024",
    },
    {
      name: "Lê Văn C",
      position: "Manager",
      status: "match",
      date: "20/02/2024",
    },
  ]

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Tổng quan</h1>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => {
          const Icon = stat.icon
          return (
            <Card key={stat.title} className="p-4">
              <div className="flex items-center gap-2">
                <Icon className="h-5 w-5 text-muted-foreground" />
                <span className="text-sm font-medium">{stat.title}</span>
              </div>
              <div className="mt-3">
                <span className="text-2xl font-bold">{stat.value}</span>
                <p className="text-xs text-muted-foreground mt-1">{stat.description}</p>
              </div>
            </Card>
          )
        })}
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card className="p-6">
          <h2 className="text-lg font-semibold mb-4">Thống kê nhân sự</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Users className="h-4 w-4 text-muted-foreground" />
                <span>Tổng nhân viên</span>
              </div>
              <span className="font-medium">156</span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <FileCheck className="h-4 w-4 text-muted-foreground" />
                <span>Đã xác minh</span>
              </div>
              <span className="font-medium">142</span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <UserCheck className="h-4 w-4 text-muted-foreground" />
                <span>Chờ xác minh</span>
              </div>
              <span className="font-medium">14</span>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <h2 className="text-lg font-semibold mb-4">Xác minh gần đây</h2>
          <div className="space-y-4">
            {recentVerifications.map((verification, index) => (
              <div key={index} className="flex items-center justify-between">
                <div>
                  <p className="font-medium">{verification.name}</p>
                  <p className="text-sm text-muted-foreground">{verification.position}</p>
                </div>
                <div className="flex items-center gap-2">
                  {verification.status === "match" ? (
                    <CheckCircle className="h-4 w-4 text-green-500" />
                  ) : (
                    <XCircle className="h-4 w-4 text-red-500" />
                  )}
                  <span className="text-sm text-muted-foreground">{verification.date}</span>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  )
}

