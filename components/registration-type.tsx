"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"
import { Users, Building2, ArrowRight } from "lucide-react"

export default function RegistrationType() {
  const router = useRouter()

  const registrationTypes = [
    {
      title: "Cá Nhân",
      description: "Đăng ký lý lịch tư pháp cho cá nhân",
      icon: Users,
      details: [
        "Phù hợp cho cá nhân xin việc, du học, định cư",
        "Xác nhận về tình trạng tiền án, tiền sự",
        "Yêu cầu thông tin cá nhân và gia đình",
        "Thời gian xử lý: 5-7 ngày làm việc",
      ],
      href: "/ca-nhan",
      available: true,
    },
    {
      title: "Doanh Nghiệp",
      description: "Đăng ký lý lịch tư pháp cho doanh nghiệp",
      icon: Building2,
      details: [
        "Dành cho doanh nghiệp và tổ chức",
        "Xác minh thông tin pháp lý doanh nghiệp",
        "Yêu cầu giấy phép kinh doanh",
        "Thời gian xử lý: 7-10 ngày làm việc",
      ],
      href: "/doanh-nghiep",
      available: false,
    },
  ]

  return (
    <div className="max-w-5xl mx-auto">
      <p className="text-center text-lg text-muted-foreground mb-8">
        Vui lòng chọn loại hình đăng ký lý lịch tư pháp phù hợp với nhu cầu của bạn
      </p>

      <div className="grid md:grid-cols-2 gap-6">
        {registrationTypes.map((type) => {
          const Icon = type.icon

          return (
            <Card
              key={type.title}
              className={`relative p-6 hover:shadow-lg transition-shadow duration-300 ${
                !type.available ? "opacity-75" : ""
              }`}
            >
              <div className="flex items-start gap-4">
                <div className="rounded-full p-3 bg-primary/10">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h2 className="text-xl font-semibold mb-2">{type.title}</h2>
                  <p className="text-muted-foreground mb-4">{type.description}</p>

                  <ul className="space-y-2 mb-6">
                    {type.details.map((detail, index) => (
                      <li key={index} className="flex items-center text-sm text-muted-foreground">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary/60 mr-2" />
                        {detail}
                      </li>
                    ))}
                  </ul>

                  <Button onClick={() => router.push(type.href)} className="w-full" disabled={!type.available}>
                    {type.available ? (
                      <>
                        Bắt đầu đăng ký
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </>
                    ) : (
                      "Sắp ra mắt"
                    )}
                  </Button>
                </div>
              </div>

              {!type.available && (
                <div className="absolute top-2 right-2">
                  <span className="px-2 py-1 text-xs bg-amber-100 text-amber-800 rounded-full">Đang phát triển</span>
                </div>
              )}
            </Card>
          )
        })}
      </div>

      <div className="mt-8 p-4 bg-blue-50 border border-blue-200 rounded-md">
        <p className="text-blue-800 text-sm text-center">
          <strong>Lưu ý:</strong> Vui lòng chuẩn bị đầy đủ giấy tờ tùy thân và các thông tin cần thiết trước khi bắt đầu
          quá trình đăng ký. Điều này sẽ giúp quá trình đăng ký của bạn diễn ra nhanh chóng và thuận lợi hơn.
        </p>
      </div>
    </div>
  )
}

