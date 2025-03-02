"use client"

import { useState } from "react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Plus, Edit, Trash } from "lucide-react"

export function JobPostManagement() {
  const [showNewPost, setShowNewPost] = useState(false)

  // Mock data
  const jobPosts = [
    {
      id: 1,
      title: "Frontend Developer",
      department: "Engineering",
      location: "Hà Nội",
      salary: "15-20 triệu",
      status: "active",
      applications: 12,
    },
    {
      id: 2,
      title: "UI/UX Designer",
      department: "Design",
      location: "Hồ Chí Minh",
      salary: "12-18 triệu",
      status: "draft",
      applications: 0,
    },
  ]

  const statusColors: Record<string, string> = {
    active: "bg-green-100 text-green-800",
    draft: "bg-gray-100 text-gray-800",
    closed: "bg-red-100 text-red-800",
  }

  const statusLabels: Record<string, string> = {
    active: "Đang đăng",
    draft: "Bản nháp",
    closed: "Đã đóng",
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Quản lý tin tuyển dụng</h1>
        <Button onClick={() => setShowNewPost(true)}>
          <Plus className="mr-2 h-4 w-4" />
          Đăng tin mới
        </Button>
      </div>

      <Card>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Vị trí</TableHead>
              <TableHead>Phòng ban</TableHead>
              <TableHead>Địa điểm</TableHead>
              <TableHead>Mức lương</TableHead>
              <TableHead>Trạng thái</TableHead>
              <TableHead>Số CV</TableHead>
              <TableHead>Thao tác</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {jobPosts.map((post) => (
              <TableRow key={post.id}>
                <TableCell>{post.title}</TableCell>
                <TableCell>{post.department}</TableCell>
                <TableCell>{post.location}</TableCell>
                <TableCell>{post.salary}</TableCell>
                <TableCell>
                  <Badge className={statusColors[post.status]}>{statusLabels[post.status]}</Badge>
                </TableCell>
                <TableCell>{post.applications}</TableCell>
                <TableCell>
                  <div className="flex space-x-2">
                    <Button variant="outline" size="icon">
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="icon">
                      <Trash className="h-4 w-4" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>

      <Dialog open={showNewPost} onOpenChange={setShowNewPost}>
        <DialogContent className="max-w-3xl">
          <DialogHeader>
            <DialogTitle>Đăng tin tuyển dụng mới</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="title">Vị trí tuyển dụng</Label>
                <Input id="title" placeholder="Nhập vị trí tuyển dụng" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="department">Phòng ban</Label>
                <Input id="department" placeholder="Nhập phòng ban" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="location">Địa điểm</Label>
                <Input id="location" placeholder="Nhập địa điểm làm việc" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="salary">Mức lương</Label>
                <Input id="salary" placeholder="Nhập mức lương" />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="description">Mô tả công việc</Label>
              <Textarea id="description" placeholder="Nhập mô tả công việc" rows={5} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="requirements">Yêu cầu ứng viên</Label>
              <Textarea id="requirements" placeholder="Nhập yêu cầu ứng viên" rows={5} />
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setShowNewPost(false)}>
              Hủy
            </Button>
            <Button>Đăng tin</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}

