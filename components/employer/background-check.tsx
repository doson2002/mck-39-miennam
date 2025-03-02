"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Loader2, CheckCircle, XCircle } from "lucide-react"

export function BackgroundCheck() {
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState<"match" | "mismatch" | null>(null)

  const handleCheck = () => {
    setLoading(true)
    // Giả lập API call
    setTimeout(() => {
      setLoading(false)
      setResult(Math.random() > 0.5 ? "match" : "mismatch")
    }, 2000)
  }

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Kiểm tra lý lịch</h1>

      <Card className="p-6">
        <div className="space-y-4">
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
              <Label htmlFor="placeOfBirth">Nơi sinh</Label>
              <Input id="placeOfBirth" placeholder="Nhập nơi sinh" />
            </div>
          </div>

          <Button className="w-full" onClick={handleCheck} disabled={loading}>
            {loading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Đang kiểm tra...
              </>
            ) : (
              "Kiểm tra lý lịch"
            )}
          </Button>
        </div>

        {result && (
          <div className="mt-6 p-4 rounded-lg border">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-semibold">Kết quả kiểm tra</h3>
                <p className="text-sm text-muted-foreground">
                  {result === "match" ? "Thông tin khớp với cơ sở dữ liệu" : "Thông tin không khớp với cơ sở dữ liệu"}
                </p>
              </div>
              {result === "match" ? (
                <CheckCircle className="h-8 w-8 text-green-500" />
              ) : (
                <XCircle className="h-8 w-8 text-red-500" />
              )}
            </div>
          </div>
        )}
      </Card>
    </div>
  )
}

