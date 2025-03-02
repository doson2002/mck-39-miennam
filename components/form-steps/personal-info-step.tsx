import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Button } from "@/components/ui/button"
import { CalendarIcon } from "lucide-react"
import { format } from "date-fns"
import { vi } from "date-fns/locale"
import { useState } from "react"

interface PersonalInfoStepProps {
  formData: any
  updateFormData: (data: any) => void
}

export default function PersonalInfoStep({ formData, updateFormData }: PersonalInfoStepProps) {
  const [dateOfBirth, setDateOfBirth] = useState<Date | undefined>(
    formData.dateOfBirth ? new Date(formData.dateOfBirth) : undefined,
  )

  const [issuedDate, setIssuedDate] = useState<Date | undefined>(
    formData.issuedOn ? new Date(formData.issuedOn) : undefined,
  )

  const handleDateOfBirthChange = (date: Date | undefined) => {
    setDateOfBirth(date)
    if (date) {
      updateFormData({ dateOfBirth: date.toISOString() })
    }
  }

  const handleIssuedDateChange = (date: Date | undefined) => {
    setIssuedDate(date)
    if (date) {
      updateFormData({ issuedOn: date.toISOString() })
    }
  }

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Thông tin cá nhân</h2>

      <div className="space-y-4">
        <div>
          <Label htmlFor="fullName">Họ và tên đầy đủ</Label>
          <Input
            id="fullName"
            value={formData.fullName}
            onChange={(e) => updateFormData({ fullName: e.target.value })}
            placeholder="Nhập họ và tên đầy đủ"
            required
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="dateOfBirth">Ngày sinh</Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="outline" className="w-full justify-start text-left font-normal">
                  {dateOfBirth ? format(dateOfBirth, "dd/MM/yyyy", { locale: vi }) : "Chọn ngày"}
                  <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                  mode="single"
                  selected={dateOfBirth}
                  onSelect={handleDateOfBirthChange}
                  initialFocus
                  locale={vi}
                />
              </PopoverContent>
            </Popover>
          </div>

          <div>
            <Label htmlFor="gender">Giới tính</Label>
            <Select value={formData.gender} onValueChange={(value) => updateFormData({ gender: value })}>
              <SelectTrigger>
                <SelectValue placeholder="Chọn giới tính" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="male">Nam</SelectItem>
                <SelectItem value="female">Nữ</SelectItem>
                <SelectItem value="other">Khác</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div>
          <Label htmlFor="identityCard">CMND/CCCD/Hộ chiếu</Label>
          <Input
            id="identityCard"
            value={formData.identityCard}
            onChange={(e) => updateFormData({ identityCard: e.target.value })}
            placeholder="Nhập số CMND/CCCD/Hộ chiếu"
            required
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="issuedOn">Cấp ngày</Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="outline" className="w-full justify-start text-left font-normal">
                  {issuedDate ? format(issuedDate, "dd/MM/yyyy", { locale: vi }) : "Chọn ngày"}
                  <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                  mode="single"
                  selected={issuedDate}
                  onSelect={handleIssuedDateChange}
                  initialFocus
                  locale={vi}
                />
              </PopoverContent>
            </Popover>
          </div>

          <div>
            <Label htmlFor="issuedAt">Nơi cấp</Label>
            <Input
              id="issuedAt"
              value={formData.issuedAt}
              onChange={(e) => updateFormData({ issuedAt: e.target.value })}
              placeholder="Nơi cấp giấy tờ"
            />
          </div>
        </div>

        <div>
          <Label htmlFor="placeOfBirth">Nơi sinh (Tỉnh/Thành phố trực thuộc Trung ương)</Label>
          <Input
            id="placeOfBirth"
            value={formData.placeOfBirth}
            onChange={(e) => updateFormData({ placeOfBirth: e.target.value })}
            placeholder="Nhập nơi sinh"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="nationality">Quốc tịch</Label>
            <Input
              id="nationality"
              value={formData.nationality}
              onChange={(e) => updateFormData({ nationality: e.target.value })}
              placeholder="Nhập quốc tịch"
              defaultValue="Việt Nam"
            />
          </div>

          <div>
            <Label htmlFor="ethnicity">Dân tộc</Label>
            <Input
              id="ethnicity"
              value={formData.ethnicity}
              onChange={(e) => updateFormData({ ethnicity: e.target.value })}
              placeholder="Nhập dân tộc"
              defaultValue="Kinh"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

