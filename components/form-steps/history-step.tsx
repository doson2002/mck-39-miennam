import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

interface HistoryStepProps {
  formData: any
  updateFormData: (data: any) => void
}

export default function HistoryStep({ formData, updateFormData }: HistoryStepProps) {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Thông tin lịch sử</h2>

      <div className="space-y-4">
        <div>
          <Label htmlFor="residenceHistory">Quá trình cư trú, nghề nghiệp, nơi làm việc từ 14 tuổi đến nay</Label>
          <Textarea
            id="residenceHistory"
            value={formData.residenceHistory}
            onChange={(e) => updateFormData({ residenceHistory: e.target.value })}
            placeholder="Cung cấp chi tiết về quá trình cư trú, nghề nghiệp và nơi làm việc từ 14 tuổi đến nay"
            rows={5}
            required
          />
          <p className="text-sm text-muted-foreground mt-1">
            Bao gồm thời gian, địa điểm, chức danh và đơn vị làm việc theo thứ tự thời gian
          </p>
        </div>

        <div>
          <Label htmlFor="criminalRecords">
            Thông tin về tiền án, nội dung cấm đảm nhiệm chức vụ, thành lập, quản lý doanh nghiệp, hợp tác xã
          </Label>
          <Textarea
            id="criminalRecords"
            value={formData.criminalRecords}
            onChange={(e) => updateFormData({ criminalRecords: e.target.value })}
            placeholder="Cung cấp thông tin về tiền án, nội dung cấm đảm nhiệm chức vụ, thành lập, quản lý doanh nghiệp, hợp tác xã (nếu có)"
            rows={4}
          />
          <p className="text-sm text-muted-foreground mt-1">Nếu không có, vui lòng ghi "Không" hoặc "Không có"</p>
        </div>

        <div>
          <Label htmlFor="administrativeFines">Tổng các khoản phạt hành chính trong năm</Label>
          <Input
            id="administrativeFines"
            value={formData.administrativeFines}
            onChange={(e) => updateFormData({ administrativeFines: e.target.value })}
            placeholder="Nhập tổng các khoản phạt hành chính trong năm hiện tại"
          />
          <p className="text-sm text-muted-foreground mt-1">Nếu không có, vui lòng ghi "0" hoặc "Không có"</p>
        </div>
      </div>
    </div>
  )
}

