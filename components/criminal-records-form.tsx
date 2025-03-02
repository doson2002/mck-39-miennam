"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import PersonalInfoStep from "@/components/form-steps/personal-info-step"
import ResidenceStep from "@/components/form-steps/residence-step"
import FamilyInfoStep from "@/components/form-steps/family-info-step"
import HistoryStep from "@/components/form-steps/history-step"
import PurposeStep from "@/components/form-steps/purpose-step"
import ReviewStep from "@/components/form-steps/review-step"
import ResultStep from "@/components/form-steps/result-step"
import FormProgress from "@/components/form-progress"
import { useRouter } from "next/navigation"

export default function CriminalRecordsForm() {
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState({
    // Thông tin cá nhân
    fullName: "",
    dateOfBirth: "",
    gender: "",
    identityCard: "",
    issuedOn: "",
    issuedAt: "",
    placeOfBirth: "",
    nationality: "",
    ethnicity: "",

    // Thông tin cư trú
    permanentResidence: "",
    temporaryResidence: "",

    // Thông tin gia đình
    fatherFullName: "",
    motherFullName: "",
    wifeFullName: "",
    phoneNumber: "",

    // Lịch sử
    residenceHistory: "",
    criminalRecords: "",
    administrativeFines: "",

    // Mục đích
    purpose: "",
    otherPurpose: "",
  })

  const [verificationResult, setVerificationResult] = useState<"success" | "failure" | null>(null)
  const totalSteps = 7 // Thêm bước kết quả
  const router = useRouter()

  const updateFormData = (data: Partial<typeof formData>) => {
    setFormData({ ...formData, ...data })
  }

  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1)
      window.scrollTo(0, 0)
    }
  }

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
      window.scrollTo(0, 0)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // Mô phỏng xử lý gửi dữ liệu
    console.log("Đơn đã gửi:", formData)

    // Mô phỏng quá trình xác thực (thành công hoặc thất bại ngẫu nhiên)
    setTimeout(() => {
      // Giả lập kết quả xác thực (70% thành công, 30% thất bại)
      const isSuccess = Math.random() > 0.3
      setVerificationResult(isSuccess ? "success" : "failure")
      nextStep() // Chuyển đến trang kết quả
    }, 2000)
  }

  return (
    <div className="max-w-4xl mx-auto">
      <FormProgress currentStep={currentStep} totalSteps={totalSteps} />

      <Card className="p-6 mt-6">
        <form onSubmit={handleSubmit}>
          {currentStep === 1 && <PersonalInfoStep formData={formData} updateFormData={updateFormData} />}

          {currentStep === 2 && <ResidenceStep formData={formData} updateFormData={updateFormData} />}

          {currentStep === 3 && <FamilyInfoStep formData={formData} updateFormData={updateFormData} />}

          {currentStep === 4 && <HistoryStep formData={formData} updateFormData={updateFormData} />}

          {currentStep === 5 && <PurposeStep formData={formData} updateFormData={updateFormData} />}

          {currentStep === 6 && <ReviewStep formData={formData} />}

          {currentStep === 7 && <ResultStep result={verificationResult} />}

          <div className="flex justify-between mt-8">
            {currentStep > 1 && currentStep < 7 && (
              <Button type="button" variant="outline" onClick={prevStep}>
                Quay lại
              </Button>
            )}

            {currentStep < 6 ? (
              <Button type="button" className="ml-auto" onClick={nextStep}>
                Tiếp theo
              </Button>
            ) : currentStep === 6 ? (
              <Button type="submit" className="ml-auto bg-green-600 hover:bg-green-700">
                Gửi đơn đăng ký
              </Button>
            ) : (
              <Button type="button" className="mx-auto" onClick={() => router.push("/")}>
                Quay về trang chủ
              </Button>
            )}
          </div>
        </form>
      </Card>
    </div>
  )
}

