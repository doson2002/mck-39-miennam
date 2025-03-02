import UserTypeSelection from "@/components/user-type-selection"

export default function Home() {
  return (
    <main className="container mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold text-center mb-8">Nền Tảng Tuyển Dụng & Xác Minh Lý Lịch</h1>
      <UserTypeSelection />
    </main>
  )
}

