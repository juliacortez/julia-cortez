import axios from 'axios'
import {useEffect, useState} from 'react'
import { BASE_URL } from '../constants/url'
import GlobalStateContext from './GlobalStateContext'

function GlobalState(props: any) {

    const [usersData, setUsersData] = useState([])
    const [filterData, setFilterData] = useState('')
    const [showUserBy, setShowUserBy] = useState('all')
    const [alert, setAlert] = useState(false)
    const [alertText, setAlertText] = useState('')
    const [currentPage, setCurrentPage] = useState(1)
    const [usersPerPage] = useState(5)

    const indexOfLastClient = currentPage * usersPerPage
    const indexOfFirstClient = indexOfLastClient - usersPerPage

    const currentClients = usersData.slice(indexOfFirstClient, indexOfLastClient)

    const totalPages = Math.ceil(usersData.length / usersPerPage)

    const totalClients = usersData.length

    const getUsers = () => {
        axios.get(`${BASE_URL}`)
        .then((res) => setUsersData(res.data))
        .catch((err) => alert("Ocorreu um erro."))
    }

    getUsers()

    const data = {
        filterData,
        setFilterData,
        showUserBy, 
        setShowUserBy,
        usersData,
        alertText,
        setAlertText,
        setAlert,
        alert,
        totalPages,
        currentClients,
        currentPage,
        setCurrentPage,
        totalClients
    }

    return(
        <GlobalStateContext.Provider value={data}>
            {props.children}
        </GlobalStateContext.Provider>
    )
}

export default GlobalState