import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

interface PurposeStepProps {
  formData: any
  updateFormData: (data: any) => void
}

export default function PurposeStep({ formData, updateFormData }: PurposeStepProps) {
  const commonPurposes = ["Xin việc làm", "Xin thị thực", "Định cư", "Đăng ký kinh doanh", "Mục đích học tập", "Khác"]

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Mục đích yêu cầu</h2>

      <div className="space-y-4">
        <div>
          <Label>Chọn mục đích yêu cầu cấp Phiếu lý lịch tư pháp</Label>
          <RadioGroup
            value={formData.purpose}
            onValueChange={(value) => updateFormData({ purpose: value })}
            className="mt-2 space-y-2"
          >
            {commonPurposes.map((purpose) => (
              <div key={purpose} className="flex items-center space-x-2">
                <RadioGroupItem value={purpose} id={purpose.replace(/\s+/g, "-").toLowerCase()} />
                <Label htmlFor={purpose.replace(/\s+/g, "-").toLowerCase()}>{purpose}</Label>
              </div>
            ))}
          </RadioGroup>
        </div>

        {formData.purpose === "Khác" && (
          <div>
            <Label htmlFor="otherPurpose">Vui lòng nêu rõ mục đích khác</Label>
            <Textarea
              id="otherPurpose"
              value={formData.otherPurpose || ""}
              onChange={(e) => updateFormData({ otherPurpose: e.target.value })}
              placeholder="Vui lòng nêu rõ mục đích yêu cầu cấp Phiếu lý lịch tư pháp"
              rows={3}
              required
            />
          </div>
        )}

        <div className="mt-4 p-4 bg-amber-50 border border-amber-200 rounded-md">
          <p className="text-amber-800 text-sm">
            <strong>Lưu ý quan trọng:</strong> Cung cấp thông tin sai sự thật trong đơn này là hành vi vi phạm pháp
            luật. Tất cả thông tin được cung cấp sẽ được xác minh với hồ sơ chính thức.
          </p>
        </div>
      </div>
    </div>
  )
}

