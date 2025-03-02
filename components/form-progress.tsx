interface FormProgressProps {
  currentStep: number
  totalSteps: number
}

export default function FormProgress({ currentStep, totalSteps }: FormProgressProps) {
  const steps = [
    "Thông tin cá nhân",
    "Thông tin cư trú",
    "Thông tin gia đình",
    "Lịch sử",
    "Mục đích",
    "Xem lại",
    "Kết quả",
  ]

  return (
    <div className="mb-8">
      <div className="flex justify-between">
        {steps.map((step, index) => (
          <div key={index} className="flex flex-col items-center">
            <div
              className={`w-10 h-10 rounded-full flex items-center justify-center border-2 
                ${
                  index + 1 === currentStep
                    ? "border-primary bg-primary text-white"
                    : index + 1 < currentStep
                      ? "border-green-500 bg-green-500 text-white"
                      : "border-gray-300 text-gray-500"
                }`}
            >
              {index + 1 < currentStep ? "✓" : index + 1}
            </div>
            <span
              className={`text-xs mt-1 text-center hidden sm:block ${index + 1 === currentStep ? "text-primary font-medium" : "text-gray-500"}`}
            >
              {step}
            </span>
          </div>
        ))}
      </div>
      <div className="w-full bg-gray-200 h-2 mt-4 rounded-full">
        <div
          className="bg-primary h-2 rounded-full transition-all duration-300"
          style={{ width: `${((currentStep - 1) / (totalSteps - 1)) * 100}%` }}
        ></div>
      </div>
    </div>
  )
}

