import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

interface ResidenceStepProps {
  formData: any
  updateFormData: (data: any) => void
}

export default function ResidenceStep({ formData, updateFormData }: ResidenceStepProps) {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Thông tin cư trú</h2>

      <div className="space-y-4">
        <div>
          <Label htmlFor="permanentResidence">Nơi thường trú</Label>
          <Textarea
            id="permanentResidence"
            value={formData.permanentResidence}
            onChange={(e) => updateFormData({ permanentResidence: e.target.value })}
            placeholder="Nhập địa chỉ thường trú"
            rows={3}
            required
          />
        </div>

        <div>
          <Label htmlFor="temporaryResidence">Nơi tạm trú</Label>
          <Textarea
            id="temporaryResidence"
            value={formData.temporaryResidence}
            onChange={(e) => updateFormData({ temporaryResidence: e.target.value })}
            placeholder="Nhập địa chỉ tạm trú (nếu có)"
            rows={3}
          />
          <p className="text-sm text-muted-foreground mt-1">Để trống nếu giống với nơi thường trú</p>
        </div>
      </div>
    </div>
  )
}

