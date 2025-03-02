import { format } from "date-fns"
import { vi } from "date-fns/locale"

interface ReviewStepProps {
  formData: any
}

export default function ReviewStep({ formData }: ReviewStepProps) {
  const formatDate = (dateString: string) => {
    if (!dateString) return "Chưa cung cấp"
    try {
      return format(new Date(dateString), "dd/MM/yyyy", { locale: vi })
    } catch (e) {
      return dateString
    }
  }

  const sections = [
    {
      title: "Thông tin cá nhân",
      fields: [
        { label: "Họ và tên đầy đủ", value: formData.fullName },
        { label: "Ngày sinh", value: formatDate(formData.dateOfBirth) },
        {
          label: "Giới tính",
          value: formData.gender === "male" ? "Nam" : formData.gender === "female" ? "Nữ" : formData.gender,
        },
        { label: "CMND/CCCD/Hộ chiếu", value: formData.identityCard },
        { label: "Cấp ngày", value: formatDate(formData.issuedOn) },
        { label: "Nơi cấp", value: formData.issuedAt },
        { label: "Nơi sinh", value: formData.placeOfBirth },
        { label: "Quốc tịch", value: formData.nationality },
        { label: "Dân tộc", value: formData.ethnicity },
      ],
    },
    {
      title: "Thông tin cư trú",
      fields: [
        { label: "Nơi thường trú", value: formData.permanentResidence },
        { label: "Nơi tạm trú", value: formData.temporaryResidence || "Giống nơi thường trú" },
      ],
    },
    {
      title: "Thông tin gia đình",
      fields: [
        { label: "Họ tên đầy đủ của cha", value: formData.fatherFullName },
        { label: "Họ tên đầy đủ của mẹ", value: formData.motherFullName },
        { label: "Họ tên đầy đủ của vợ/chồng", value: formData.wifeFullName || "Không có" },
        { label: "Số điện thoại đăng ký CCCD", value: formData.phoneNumber },
      ],
    },
    {
      title: "Thông tin lịch sử",
      fields: [
        { label: "Quá trình cư trú & làm việc", value: formData.residenceHistory },
        { label: "Tiền án, tiền sự", value: formData.criminalRecords || "Không có" },
        { label: "Phạt hành chính", value: formData.administrativeFines || "Không có" },
      ],
    },
    {
      title: "Mục đích yêu cầu",
      fields: [
        { label: "Mục đích", value: formData.purpose },
        ...(formData.purpose === "Khác" ? [{ label: "Mục đích khác", value: formData.otherPurpose }] : []),
      ],
    },
  ]

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Xem lại thông tin của bạn</h2>
      <p className="text-muted-foreground">Vui lòng kiểm tra lại tất cả thông tin trước khi gửi đơn đăng ký.</p>

      <div className="space-y-6">
        {sections.map((section, index) => (
          <div key={index} className="border rounded-md p-4">
            <h3 className="font-semibold text-lg mb-3">{section.title}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-2 gap-x-4">
              {section.fields.map((field, fieldIndex) => (
                <div
                  key={fieldIndex}
                  className={
                    field.label === "Quá trình cư trú & làm việc" || field.label === "Tiền án, tiền sự"
                      ? "col-span-1 md:col-span-2"
                      : ""
                  }
                >
                  <p className="text-sm text-muted-foreground">{field.label}</p>
                  <p className="font-medium break-words">{field.value || "Chưa cung cấp"}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="p-4 bg-blue-50 border border-blue-200 rounded-md">
        <p className="text-blue-800 text-sm">
          <strong>Cam kết:</strong> Tôi xin cam đoan những thông tin cung cấp trên đây là đúng sự thật. Tôi hiểu rằng
          việc khai báo gian dối có thể dẫn đến việc đơn đăng ký bị từ chối và có thể bị xử lý theo quy định của pháp
          luật.
        </p>
      </div>
    </div>
  )
}

