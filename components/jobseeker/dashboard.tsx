"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { UserCircle, LinkIcon, Briefcase, AlertCircle, CheckCircle } from "lucide-react"
import { Progress } from "@/components/ui/progress"

export function JobSeekerDashboard() {
  const profileCompletion = 75

  const stats = [
    {
      title: "Trạng thái hồ sơ",
      value: "Đã xác minh",
      icon: CheckCircle,
      color: "text-green-500",
    },
    {
      title: "Mạng xã hội đã liên kết",
      value: "3",
      icon: LinkIcon,
      color: "text-blue-500",
    },
    {
      title: "Kinh nghiệm làm việc",
      value: "5 năm",
      icon: Briefcase,
      color: "text-orange-500",
    },
  ]

  const missingInfo = ["Chứng chỉ ngoại ngữ", "Thông tin người tham chiếu", "Ảnh chân dung"]

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Tổng quan hồ sơ</h1>

      <Card className="p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold">Mức độ hoàn thiện hồ sơ</h2>
          <span className="text-2xl font-bold">{profileCompletion}%</span>
        </div>
        <Progress value={profileCompletion} className="h-2" />
        {missingInfo.length > 0 && (
          <div className="mt-4">
            <p className="text-sm text-muted-foreground mb-2">Thông tin cần bổ sung:</p>
            <ul className="space-y-1">
              {missingInfo.map((info, index) => (
                <li key={index} className="flex items-center text-sm text-muted-foreground">
                  <AlertCircle className="h-4 w-4 mr-2 text-amber-500" />
                  {info}
                </li>
              ))}
            </ul>
          </div>
        )}
      </Card>

      <div className="grid gap-4 md:grid-cols-3">
        {stats.map((stat) => {
          const Icon = stat.icon
          return (
            <Card key={stat.title} className="p-4">
              <div className="flex items-center gap-2">
                <Icon className={`h-5 w-5 ${stat.color}`} />
                <span className="text-sm font-medium">{stat.title}</span>
              </div>
              <div className="mt-3">
                <span className="text-2xl font-bold">{stat.value}</span>
              </div>
            </Card>
          )
        })}
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card className="p-6">
          <h2 className="text-lg font-semibold mb-4">Thông tin cá nhân</h2>
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <UserCircle className="h-6 w-6 text-primary" />
              </div>
              <div>
                <p className="font-medium">Nguyễn Văn A</p>
                <p className="text-sm text-muted-foreground">Frontend Developer</p>
              </div>
            </div>
            <Button variant="outline" className="w-full">
              Cập nhật hồ sơ
            </Button>
          </div>
        </Card>

        <Card className="p-6">
          <h2 className="text-lg font-semibold mb-4">Kinh nghiệm gần đây</h2>
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Briefcase className="h-6 w-6 text-primary" />
              </div>
              <div>
                <p className="font-medium">Senior Developer</p>
                <p className="text-sm text-muted-foreground">Công ty ABC</p>
                <p className="text-xs text-muted-foreground">2020 - Hiện tại</p>
              </div>
            </div>
            <Button variant="outline" className="w-full">
              Xem toàn bộ lịch sử
            </Button>
          </div>
        </Card>
      </div>
    </div>
  )
}

