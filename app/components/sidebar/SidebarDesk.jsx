import Image from "next/image"
import React, { useEffect, useState } from "react"
import { toast } from "react-toastify"
import Admin from "../../../public/admin_meds.png"
import Dashboard from "../../../public/dashboard.png"
import Note from "../../../public/note_alt.png"
import Quiz from "../../../public/quiz.png"

const SidebarDesk = ({ setOpen }) => {
  // state to check which Section or part is selected from sidebar menu
  const [selectedItem, setSelectedItem] = useState("assessment")
  // func to select section from sidemenu
  const handleItemClick = (item) => {
    console.log("click")
    setSelectedItem(item)
  }
  // func to return the className of selected section to apply additional condition based styling
  const getItemClassName = (item) => {
    if (selectedItem === item) {
      return "selectedSection"
    }
    return ""
  }
  // using react toastify to display notification
  const notify = (msg) => toast.error(msg)
  // based on selected section, we are rendering 'assessment component'
  useEffect(() => {
    if (selectedItem === "assessment") {
      setOpen(true)
    } else {
      setOpen(false)
    }
  }, [selectedItem])

  return (
    <>
      <div className="flex flex-col justify-center items-center space-y-4 mb-8">
        <div
          className={`flex flex-col justify-center items-center space-y-2 cursor-pointer ${getItemClassName(
            "dashboard"
          )}`}
          style={{ width: "90px", height: "70px", padding: "10px 20px" }}
          onClick={() => notify("Dashboard is under development!")}
        >
          <Image src={Dashboard} alt="Dashboard" width={20} height={20} />
          <span>Dashboard</span>
        </div>
        <div
          className={`flex flex-col justify-center items-center space-y-2 cursor-pointer ${getItemClassName(
            "assessment"
          )}`}
          style={{ width: "90px", height: "70px", padding: "10px 20px" }}
          onClick={() => handleItemClick("assessment")}
        >
          <Image src={Note} alt="Assessment" width={20} height={20} />
          <span>Assessment</span>
        </div>
        <div
          className={`flex flex-col justify-center items-center space-y-2 cursor-pointer ${getItemClassName(
            "library"
          )}`}
          style={{ width: "90px", height: "70px", padding: "10px 20px" }}
          onClick={() => notify("Library Component is yet to be built!")}
        >
          <Image src={Quiz} alt="My Library" width={20} height={20} />
          <span>My Library</span>
        </div>
      </div>
      <div
        onClick={() => notify("Only Admins have Access!")}
        className="flex flex-col justify-center items-center px-2 py-4  border-t-2 border-dotted border-black space-y-3 cursor-pointer"
      >
        <span
          style={{
            color: "#D63500",
            backgroundColor: "Accent/red light",
            border: "1px solid #D63500",
            borderRadius: "22px",
            padding: "6px, 8px, 6px, 8px",
            width: "47px",
            height: "18px",
          }}
        >
          Admin
        </span>
        <Image src={Admin} alt="Round" width={20} height={20} />
        <span>Round Status</span>
      </div>
    </>
  )
}

export default SidebarDesk
