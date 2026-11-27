import { StudentContext } from "@/StudentContext"
import { useContext } from "react"

const Greeting = () => {
    let StudentName = useContext(StudentContext)
    return (
        <div>Greeting {StudentName}</div>
    )
}

export default Greeting