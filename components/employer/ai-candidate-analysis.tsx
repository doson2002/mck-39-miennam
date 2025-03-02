"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Progress } from "@/components/ui/progress"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Loader2, Award, TrendingUp, AlertTriangle, CheckCircle, User } from "lucide-react"

// Mock data cho các ứng viên đã phân tích
const analyzedCandidates = [
  {
    id: 1,
    name: "Nguyễn Văn A",
    position: "Frontend Developer",
    matchScore: 92,
    skills: ["React", "TypeScript", "Next.js"],
    experience: "5 năm",
    strengths: ["Kỹ năng technical mạnh", "Kinh nghiệm dự án lớn", "Khả năng làm việc nhóm tốt"],
    weaknesses: ["Cần cải thiện kỹ năng quản lý thời gian"],
    verificationStatus: "verified",
  },
  {
    id: 2,
    name: "Trần Thị B",
    position: "UI/UX Designer",
    matchScore: 88,
    skills: ["Figma", "Adobe XD", "User Research"],
    experience: "3 năm",
    strengths: ["Sáng tạo", "Portfolio ấn tượng", "Kỹ năng nghiên cứu người dùng tốt"],
    weaknesses: ["Cần thêm kinh nghiệm về design system"],
    verificationStatus: "pending",
  },
  {
    id: 3,
    name: "Lê Văn C",
    position: "Backend Developer",
    matchScore: 85,
    skills: ["Node.js", "Python", "MongoDB"],
    experience: "4 năm",
    strengths: ["Kiến thức backend vững", "Problem-solving tốt"],
    weaknesses: ["Cần cải thiện kỹ năng giao tiếp"],
    verificationStatus: "verified",
  },
]

export function AICandidateAnalysis() {
  const [loading, setLoading] = useState(false)
  const [showDetails, setShowDetails] = useState(false)
  const [selectedCandidate, setSelectedCandidate] = useState<any>(null)
  const [isAnalyzed, setIsAnalyzed] = useState(false) // State để kiểm soát hiển thị các phần khác

  const handleAnalyze = async () => {
    setLoading(true)
    // Giả lập phân tích AI
    setTimeout(() => {
      setLoading(false)
      setIsAnalyzed(true) // Sau khi phân tích xong, hiển thị các phần khác
    }, 2000)
  }

  const viewCandidateDetails = (candidate: any) => {
    setSelectedCandidate(candidate)
    setShowDetails(true)
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Phân tích ứng viên bằng AI</h1>
      </div>

      {/* Form phân tích ứng viên mới - Luôn hiển thị */}
      <Card className="p-6">
        <h2 className="text-xl font-semibold mb-4">Phân tích ứng viên mới</h2>
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="resume">Nội dung CV</Label>
            <Textarea id="resume" placeholder="Dán nội dung CV của ứng viên vào đây..." rows={8} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="jobDescription">Mô tả công việc</Label>
            <Textarea id="jobDescription" placeholder="Dán mô tả công việc cần tuyển vào đây..." rows={4} />
          </div>
          <Button className="w-full" onClick={handleAnalyze} disabled={loading}>
            {loading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Đang phân tích...
              </>
            ) : (
              "Phân tích ứng viên"
            )}
          </Button>
        </div>
      </Card>

      {/* Chỉ hiển thị các phần khác sau khi phân tích */}
      {isAnalyzed && (
        <div className="grid md:grid-cols-2 gap-6">
          {/* Thống kê tổng quan */}
          <Card className="p-6">
            <h2 className="text-xl font-semibold mb-4">Thống kê ứng viên</h2>
            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-primary/10 rounded-lg">
                  <div className="flex items-center gap-2">
                    <User className="h-5 w-5 text-primary" />
                    <span className="font-medium">Tổng ứng viên</span>
                  </div>
                  <p className="text-2xl font-bold mt-2">24</p>
                </div>
                <div className="p-4 bg-green-100 rounded-lg">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span className="font-medium">Đã xác minh</span>
                  </div>
                  <p className="text-2xl font-bold mt-2">18</p>
                </div>
              </div>
              <div>
                <h3 className="font-medium mb-2">Phân bố điểm đánh giá</h3>
                <div className="space-y-2">
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>90-100</span>
                      <span>2 ứng viên</span>
                    </div>
                    <Progress value={20} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>80-89</span>
                      <span>8 ứng viên</span>
                    </div>
                    <Progress value={40} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>70-79</span>
                      <span>10 ứng viên</span>
                    </div>
                    <Progress value={50} className="h-2" />
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      )}

      {/* Bảng xếp hạng ứng viên */}
      {isAnalyzed && (
        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-4">Xếp hạng ứng viên</h2>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Xếp hạng</TableHead>
                <TableHead>Họ và tên</TableHead>
                <TableHead>Vị trí</TableHead>
                <TableHead>Điểm đánh giá</TableHead>
                <TableHead>Trạng thái</TableHead>
                <TableHead>Thao tác</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {analyzedCandidates.map((candidate, index) => (
                <TableRow key={candidate.id}>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      {index === 0 && <Award className="h-5 w-5 text-yellow-500" />}
                      {index + 1}
                    </div>
                  </TableCell>
                  <TableCell>{candidate.name}</TableCell>
                  <TableCell>{candidate.position}</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <Progress value={candidate.matchScore} className="w-20 h-2" />
                      <span className="font-medium">{candidate.matchScore}%</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    {candidate.verificationStatus === "verified" ? (
                      <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                        <CheckCircle className="h-3 w-3 mr-1" />
                        Đã xác minh
                      </span>
                    ) : (
                      <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                        <AlertTriangle className="h-3 w-3 mr-1" />
                        Chờ xác minh
                      </span>
                    )}
                  </TableCell>
                  <TableCell>
                    <Button variant="outline" size="sm" onClick={() => viewCandidateDetails(candidate)}>
                      Xem chi tiết
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Card>
      )}

      {/* Dialog chi tiết ứng viên */}
      <Dialog open={showDetails} onOpenChange={setShowDetails}>
        <DialogContent className="max-w-3xl">
          <DialogHeader>
            <DialogTitle>Chi tiết đánh giá ứng viên</DialogTitle>
          </DialogHeader>
          {selectedCandidate && (
            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h3 className="font-medium mb-2">Thông tin cơ bản</h3>
                  <div className="space-y-2">
                    <p>
                      <span className="text-muted-foreground">Họ và tên:</span> {selectedCandidate.name}
                    </p>
                    <p>
                      <span className="text-muted-foreground">Vị trí:</span> {selectedCandidate.position}
                    </p>
                    <p>
                      <span className="text-muted-foreground">Kinh nghiệm:</span> {selectedCandidate.experience}
                    </p>
                  </div>
                </div>
                <div>
                  <h3 className="font-medium mb-2">Kỹ năng</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedCandidate.skills.map((skill: string) => (
                      <span key={skill} className="px-2 py-1 bg-primary/10 rounded-full text-sm">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <h3 className="font-medium mb-2">Điểm mạnh</h3>
                  <ul className="list-disc pl-5 space-y-1">
                    {selectedCandidate.strengths.map((strength: string) => (
                      <li key={strength} className="text-sm">
                        {strength}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="font-medium mb-2">Điểm cần cải thiện</h3>
                  <ul className="list-disc pl-5 space-y-1">
                    {selectedCandidate.weaknesses.map((weakness: string) => (
                      <li key={weakness} className="text-sm">
                        {weakness}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="p-4 bg-blue-50 rounded-lg">
                <h3 className="font-medium mb-2 flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-blue-600" />
                  Đề xuất của AI
                </h3>
                <p className="text-sm text-blue-800">
                  Ứng viên {selectedCandidate.name} có điểm đánh giá {selectedCandidate.matchScore}% phù hợp với vị trí{" "}
                  {selectedCandidate.position}. Với kinh nghiệm và kỹ năng hiện có, ứng viên có tiềm năng phát triển tốt
                  trong vị trí này.{" "}
                  {selectedCandidate.matchScore > 90 ? "Đề xuất ưu tiên phỏng vấn." : "Đề xuất xem xét phỏng vấn."}
                </p>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  )
}