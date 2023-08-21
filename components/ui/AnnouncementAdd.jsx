"use client"
import { useEffect, useState } from "react"
import { Button } from "./button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./dialog"
import { Input } from "./input"
import { Label } from "./label"
import { Textarea } from "./textarea"
import axios from "axios"
import { BiSolidMessageSquareAdd } from "react-icons/bi"

function AnnouncementAdd() {
  const [announcement, setAnnouncement] = useState({ title: "", content: "" })
  const [role, setRole] = useState("");

  const saveAnnouncement = async () => {
    try {

      const res = await axios.post("http://localhost:3001/announcements", {
        title: announcement.title,
        content: announcement.content,
        posterPerson: { name: "guest", role: role }
      }

      )


      console.log(res);
    } catch (error) {
      console.log(error);
    }
  }

  const onChangeData = (e) => {
    const name = e.target.name
    const value = e.target.value
    setAnnouncement((annc) => ({ ...annc, [name]: value }))
  }

  useEffect(() => {
    const fetchRole = () => {
      const userRole = JSON.parse(localStorage.getItem("currentUserRole"))
      setRole(userRole)

      }
      fetchRole()
  }, []);
  console.log(announcement);
  return (
    <Dialog>
      <DialogTrigger asChild>
        {/* <Button variant="outline"> */}
        <BiSolidMessageSquareAdd className="w-8 h-8 cursor-pointer" />
        {/* </Button> */}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Post Announcement</DialogTitle>
          <DialogDescription>
            Post latest announcement made by your department
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Department
            </Label>
            <Input id="name" onChange={onChangeData} name="title" className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Message
            </Label>
            <Textarea onChange={onChangeData} name="content" className="w-full gap-2 col-span-3" placeholder="Type your message here." />
          </div>
        </div>
        <DialogFooter>
          <Button onClick={saveAnnouncement} type="submit">Publish</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
export default AnnouncementAdd