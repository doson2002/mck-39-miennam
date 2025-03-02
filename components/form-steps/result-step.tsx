import { CheckCircle, XCircle, Loader2 } from "lucide-react"

interface ResultStepProps {
  result: "success" | "failure" | null
}

export default function ResultStep({ result }: ResultStepProps) {
  if (result === null) {
    return (
      <div className="flex flex-col items-center justify-center py-12">
        <Loader2 className="h-16 w-16 text-primary animate-spin mb-4" />
        <h2 className="text-2xl font-bold text-center">Đang xử lý đơn đăng ký...</h2>
        <p className="text-muted-foreground text-center mt-2">
          Vui lòng đợi trong khi chúng tôi xác thực thông tin của bạn.
        </p>
      </div>
    )
  }

  return (
    <div className="flex flex-col items-center justify-center py-12">
      {result === "success" ? (
        <>
          <div className="rounded-full bg-green-100 p-3 mb-4">
            <CheckCircle className="h-16 w-16 text-green-600" />
          </div>
          <h2 className="text-2xl font-bold text-center text-green-600">Xác thực thành công!</h2>
          <div className="max-w-md text-center mt-4 space-y-4">
            <p>
              Đơn đăng ký lý lịch tư pháp của bạn đã được xác thực thành công và đã được gửi đến cơ quan có thẩm quyền
              để xử lý.
            </p>
            <div className="bg-green-50 border border-green-200 rounded-md p-4 mt-4">
              <p className="text-green-800 font-medium">
                Mã hồ sơ: #LP
                {Math.floor(Math.random() * 1000000)
                  .toString()
                  .padStart(6, "0")}
              </p>
              <p className="text-green-700 mt-2">
                Vui lòng lưu lại mã hồ sơ này để tra cứu trạng thái xử lý đơn của bạn.
              </p>
            </div>
            <p className="text-muted-foreground">
              Bạn sẽ nhận được thông báo qua email hoặc tin nhắn khi lý lịch tư pháp của bạn được cấp.
            </p>
          </div>
        </>
      ) : (
        <>
          <div className="rounded-full bg-red-100 p-3 mb-4">
            <XCircle className="h-16 w-16 text-red-600" />
          </div>
          <h2 className="text-2xl font-bold text-center text-red-600">Xác thực thất bại!</h2>
          <div className="max-w-md text-center mt-4 space-y-4">
            <p>
              Rất tiếc, đơn đăng ký lý lịch tư pháp của bạn không thể được xác thực. Điều này có thể do một trong các lý
              do sau:
            </p>
            <ul className="text-left list-disc pl-5 space-y-1">
              <li>Thông tin cá nhân không khớp với cơ sở dữ liệu</li>
              <li>Thiếu thông tin bắt buộc hoặc thông tin không hợp lệ</li>
              <li>Lỗi hệ thống trong quá trình xác thực</li>
            </ul>
            <div className="bg-red-50 border border-red-200 rounded-md p-4 mt-4">
              <p className="text-red-800">
                Vui lòng kiểm tra lại thông tin và thử lại. Nếu vấn đề vẫn tiếp diễn, hãy liên hệ với bộ phận hỗ trợ của
                chúng tôi.
              </p>
            </div>
          </div>
        </>
      )}
    </div>
  )
}

