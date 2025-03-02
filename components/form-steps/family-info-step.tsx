import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

interface FamilyInfoStepProps {
  formData: any
  updateFormData: (data: any) => void
}

export default function FamilyInfoStep({ formData, updateFormData }: FamilyInfoStepProps) {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Thông tin gia đình</h2>

      <div className="space-y-4">
        <div>
          <Label htmlFor="fatherFullName">Họ tên đầy đủ của cha</Label>
          <Input
            id="fatherFullName"
            value={formData.fatherFullName}
            onChange={(e) => updateFormData({ fatherFullName: e.target.value })}
            placeholder="Nhập họ tên đầy đủ của cha (viết in hoa có dấu)"
          />
          <p className="text-sm text-muted-foreground mt-1">Viết in hoa có dấu</p>
        </div>

        <div>
          <Label htmlFor="motherFullName">Họ tên đầy đủ của mẹ</Label>
          <Input
            id="motherFullName"
            value={formData.motherFullName}
            onChange={(e) => updateFormData({ motherFullName: e.target.value })}
            placeholder="Nhập họ tên đầy đủ của mẹ"
          />
        </div>

        <div>
          <Label htmlFor="wifeFullName">Họ tên đầy đủ của vợ/chồng</Label>
          <Input
            id="wifeFullName"
            value={formData.wifeFullName}
            onChange={(e) => updateFormData({ wifeFullName: e.target.value })}
            placeholder="Nhập họ tên đầy đủ của vợ/chồng (nếu có)"
          />
          <p className="text-sm text-muted-foreground mt-1">Để trống nếu không có</p>
        </div>

        <div>
          <Label htmlFor="phoneNumber">Số điện thoại đăng ký CCCD</Label>
          <Input
            id="phoneNumber"
            type="tel"
            value={formData.phoneNumber}
            onChange={(e) => updateFormData({ phoneNumber: e.target.value })}
            placeholder="Nhập số điện thoại đã đăng ký"
          />
        </div>
      </div>
    </div>
  )
}

