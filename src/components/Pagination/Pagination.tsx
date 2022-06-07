import { useContext, useEffect, useState } from "react"
import GlobalStateContext from "../../GlobalState/GlobalStateContext"

function Pagination(){

    const {totalClients, clientsPerPage} = useContext(GlobalStateContext)

    let pageNumbers = []

    for(let i = 1; i <= (totalClients / clientsPerPage); i++){
        pageNumbers.push(i)
    }

    const showPages = pageNumbers.map((number) => {
        return <li key={number}>
            <a href="!#"><p>{number}</p></a>
        </li>
    })

    return(
        <div>
            <ul>
                {showPages}
            </ul>
        </div>
    )
}

export default Pagination
