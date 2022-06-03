import { useContext } from "react"
import DataTable from "../../components/Table/Table"
import { BASE_URL } from "../../constants/url"
import GlobalStateContext from "../../GlobalState/GlobalStateContext"
import useRequestData from "../../hooks/useRequestData"


function HomePage(){

    const { users } = useContext(GlobalStateContext)

    console.log(users)

    return(
        <div>
            <DataTable
                data = {users} 
            />
        </div>
    )
}

export default HomePage