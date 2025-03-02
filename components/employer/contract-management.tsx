"use client"

import { useState } from "react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Plus, FileText } from "lucide-react"

export function ContractManagement() {
  const [showNewContract, setShowNewContract] = useState(false)

  // Mock data
  const contracts = [
    {
      id: 1,
      employee: "Nguyễn Văn A",
      position: "Frontend Developer",
      startDate: "01/01/2024",
      endDate: "31/12/2024",
      status: "active",
      insurance: "Đã đóng",
    },
    {
      id: 2,
      employee: "Trần Thị B",
      position: "UI/UX Designer",
      startDate: "01/02/2024",
      endDate: "31/01/2025",
      status: "pending",
      insurance: "Chưa đóng",
    },
  ]

  const statusColors: Record<string, string> = {
    active: "bg-green-100 text-green-800",
    pending: "bg-yellow-100 text-yellow-800",
    expired: "bg-red-100 text-red-800",
  }

  const statusLabels: Record<string, string> = {
    active: "Đang hiệu lực",
    pending: "Chờ ký kết",
    expired: "Hết hạn",
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Quản lý hợp đồng & bảo hiểm</h1>
        <Button onClick={() => setShowNewContract(true)}>
          <Plus className="mr-2 h-4 w-4" />
          Thêm hợp đồng mới
        </Button>
      </div>

      <Card>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Nhân viên</TableHead>
              <TableHead>Vị trí</TableHead>
              <TableHead>Ngày bắt đầu</TableHead>
              <TableHead>Ngày kết thúc</TableHead>
              <TableHead>Trạng thái</TableHead>
              <TableHead>Bảo hiểm</TableHead>
              <TableHead>Thao tác</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {contracts.map((contract) => (
              <TableRow key={contract.id}>
                <TableCell>{contract.employee}</TableCell>
                <TableCell>{contract.position}</TableCell>
                <TableCell>{contract.startDate}</TableCell>
                <TableCell>{contract.endDate}</TableCell>
                <TableCell>
                  <Badge className={statusColors[contract.status]}>{statusLabels[contract.status]}</Badge>
                </TableCell>
                <TableCell>{contract.insurance}</TableCell>
                <TableCell>
                  <Button variant="outline" size="icon">
                    <FileText className="h-4 w-4" />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>

      <Dialog open={showNewContract} onOpenChange={setShowNewContract}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Thêm hợp đồng mới</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="employee">Nhân viên</Label>
                <Input id="employee" placeholder="Nhập tên nhân viên" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="position">Vị trí</Label>
                <Input id="position" placeholder="Nhập vị trí" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="startDate">Ngày bắt đầu</Label>
                <Input id="startDate" type="date" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="endDate">Ngày kết thúc</Label>
                <Input id="endDate" type="date" />
              </div>
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setShowNewContract(false)}>
              Hủy
            </Button>
            <Button>Tạo hợp đồng</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}

