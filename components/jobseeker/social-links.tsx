"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog"
import { Plus, Linkedin, Github, Globe, Trash } from "lucide-react"

export function SocialLinks() {
  const [showNewLink, setShowNewLink] = useState(false)

  // Mock data
  const socialLinks = [
    {
      id: 1,
      platform: "LinkedIn",
      url: "https://linkedin.com/in/username",
      icon: Linkedin,
    },
    {
      id: 2,
      platform: "GitHub",
      url: "https://github.com/username",
      icon: Github,
    },
    {
      id: 3,
      platform: "Portfolio",
      url: "https://portfolio.com",
      icon: Globe,
    },
  ]

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Liên kết mạng xã hội</h1>
        <Button onClick={() => setShowNewLink(true)}>
          <Plus className="mr-2 h-4 w-4" />
          Thêm liên kết
        </Button>
      </div>

      <div className="grid gap-4">
        {socialLinks.map((link) => {
          const Icon = link.icon
          return (
            <Card key={link.id} className="p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="rounded-full p-2 bg-primary/10">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium">{link.platform}</h3>
                    <a
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-muted-foreground hover:underline"
                    >
                      {link.url}
                    </a>
                  </div>
                </div>
                <Button variant="outline" size="icon">
                  <Trash className="h-4 w-4" />
                </Button>
              </div>
            </Card>
          )
        })}
      </div>

      <Dialog open={showNewLink} onOpenChange={setShowNewLink}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Thêm liên kết mạng xã hội</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="platform">Nền tảng</Label>
              <Input id="platform" placeholder="Nhập tên nền tảng" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="url">URL</Label>
              <Input id="url" placeholder="Nhập đường dẫn liên kết" />
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setShowNewLink(false)}>
              Hủy
            </Button>
            <Button>Thêm liên kết</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}

