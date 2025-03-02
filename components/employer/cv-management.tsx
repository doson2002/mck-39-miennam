"use client"

import { useState } from "react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Eye, Download } from "lucide-react"

export function CVManagement() {
  const [selectedCV, setSelectedCV] = useState<any>(null)

  // Mock data
  const cvList = [
    {
      id: 1,
      name: "Nguyễn Văn A",
      position: "Frontend Developer",
      date: "22/02/2024",
      status: "pending",
      email: "nguyenvana@email.com",
      phone: "0123456789",
    },
    {
      id: 2,
      name: "Trần Thị B",
      position: "UI/UX Designer",
      date: "21/02/2024",
      status: "reviewed",
      email: "tranthib@email.com",
      phone: "0987654321",
    },
    {
      id: 3,
      name: "Lê Văn C",
      position: "Backend Developer",
      date: "20/02/2024",
      status: "contacted",
      email: "levanc@email.com",
      phone: "0369852147",
    },
  ]

  const statusColors: Record<string, string> = {
    pending: "bg-yellow-100 text-yellow-800",
    reviewed: "bg-blue-100 text-blue-800",
    contacted: "bg-green-100 text-green-800",
  }

  const statusLabels: Record<string, string> = {
    pending: "Chờ xem xét",
    reviewed: "Đã xem",
    contacted: "Đã liên hệ",
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Quản lý CV ứng tuyển</h1>
      </div>

      <Card>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Họ và tên</TableHead>
              <TableHead>Vị trí ứng tuyển</TableHead>
              <TableHead>Ngày nộp</TableHead>
              <TableHead>Trạng thái</TableHead>
              <TableHead>Thao tác</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {cvList.map((cv) => (
              <TableRow key={cv.id}>
                <TableCell>{cv.name}</TableCell>
                <TableCell>{cv.position}</TableCell>
                <TableCell>{cv.date}</TableCell>
                <TableCell>
                  <Badge className={statusColors[cv.status]}>{statusLabels[cv.status]}</Badge>
                </TableCell>
                <TableCell>
                  <div className="flex space-x-2">
                    <Button variant="outline" size="icon" onClick={() => setSelectedCV(cv)}>
                      <Eye className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="icon">
                      <Download className="h-4 w-4" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>

      <Dialog open={!!selectedCV} onOpenChange={() => setSelectedCV(null)}>
        <DialogContent className="max-w-3xl">
          <DialogHeader>
            <DialogTitle>Chi tiết CV ứng tuyển</DialogTitle>
          </DialogHeader>
          {selectedCV && (
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-muted-foreground">Họ và tên</p>
                  <p className="font-medium">{selectedCV.name}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Vị trí ứng tuyển</p>
                  <p className="font-medium">{selectedCV.position}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <p className="font-medium">{selectedCV.email}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Số điện thoại</p>
                  <p className="font-medium">{selectedCV.phone}</p>
                </div>
              </div>
              <div className="flex justify-end space-x-2">
                <Button variant="outline" onClick={() => setSelectedCV(null)}>
                  Đóng
                </Button>
                <Button>Liên hệ ứng viên</Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  )
}

