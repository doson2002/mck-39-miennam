"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog"
import { Plus, Briefcase } from "lucide-react"

export function WorkHistory() {
  const [showNewExperience, setShowNewExperience] = useState(false)

  // Mock data
  const experiences = [
    {
      id: 1,
      position: "Senior Frontend Developer",
      company: "Tech Company A",
      startDate: "01/2022",
      endDate: "Hiện tại",
      description: "Phát triển và duy trì các ứng dụng web sử dụng React và TypeScript.",
    },
    {
      id: 2,
      position: "Frontend Developer",
      company: "Tech Company B",
      startDate: "06/2020",
      endDate: "12/2021",
      description: "Xây dựng giao diện người dùng cho các dự án web.",
    },
  ]

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Lịch sử việc làm</h1>
        <Button onClick={() => setShowNewExperience(true)}>
          <Plus className="mr-2 h-4 w-4" />
          Thêm kinh nghiệm
        </Button>
      </div>

      <div className="space-y-4">
        {experiences.map((exp) => (
          <Card key={exp.id} className="p-6">
            <div className="flex items-start gap-4">
              <div className="rounded-full p-2 bg-primary/10">
                <Briefcase className="h-5 w-5 text-primary" />
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-semibold">{exp.position}</h3>
                    <p className="text-muted-foreground">{exp.company}</p>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {exp.startDate} - {exp.endDate}
                  </p>
                </div>
                <p className="mt-2 text-sm">{exp.description}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>

      <Dialog open={showNewExperience} onOpenChange={setShowNewExperience}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Thêm kinh nghiệm làm việc</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="position">Vị trí</Label>
                <Input id="position" placeholder="Nhập vị trí công việc" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="company">Công ty</Label>
                <Input id="company" placeholder="Nhập tên công ty" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="startDate">Ngày bắt đầu</Label>
                <Input id="startDate" type="month" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="endDate">Ngày kết thúc</Label>
                <Input id="endDate" type="month" />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="description">Mô tả công việc</Label>
              <Textarea id="description" placeholder="Nhập mô tả công việc và thành tựu" rows={4} />
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setShowNewExperience(false)}>
              Hủy
            </Button>
            <Button>Thêm kinh nghiệm</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}

