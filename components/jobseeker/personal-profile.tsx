"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { format } from "date-fns"

export function PersonalProfile() {
  const lastUpdated = format(new Date(), "dd/MM/yyyy HH:mm")

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Hồ sơ cá nhân</h1>
        <p className="text-sm text-muted-foreground">Cập nhật lần cuối: {lastUpdated}</p>
      </div>

      <Card className="p-6">
        <form className="space-y-6">
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Thông tin CCCD</h2>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="fullName">Họ và tên</Label>
                <Input id="fullName" placeholder="Nhập họ và tên" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="idNumber">Số CCCD</Label>
                <Input id="idNumber" placeholder="Nhập số CCCD" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="dob">Ngày sinh</Label>
                <Input id="dob" type="date" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="gender">Giới tính</Label>
                <Input id="gender" placeholder="Nhập giới tính" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="placeOfBirth">Nơi sinh</Label>
                <Input id="placeOfBirth" placeholder="Nhập nơi sinh" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="nationality">Quốc tịch</Label>
                <Input id="nationality" placeholder="Nhập quốc tịch" />
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Thông tin liên hệ</h2>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="Nhập email" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Số điện thoại</Label>
                <Input id="phone" placeholder="Nhập số điện thoại" />
              </div>
              <div className="col-span-2 space-y-2">
                <Label htmlFor="address">Địa chỉ</Label>
                <Textarea id="address" placeholder="Nhập địa chỉ" />
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Thông tin nghề nghiệp</h2>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="position">Vị trí mong muốn</Label>
                <Input id="position" placeholder="Nhập vị trí mong muốn" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="experience">Số năm kinh nghiệm</Label>
                <Input id="experience" placeholder="Nhập số năm kinh nghiệm" />
              </div>
              <div className="col-span-2 space-y-2">
                <Label htmlFor="skills">Kỹ năng</Label>
                <Textarea id="skills" placeholder="Nhập các kỹ năng của bạn" />
              </div>
            </div>
          </div>

          <div className="flex justify-end space-x-2">
            <Button variant="outline">Hủy</Button>
            <Button>Lưu thay đổi</Button>
          </div>
        </form>
      </Card>
    </div>
  )
}

