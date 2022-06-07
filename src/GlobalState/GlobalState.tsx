import axios from 'axios'
import React, {useEffect, useState} from 'react'
import { BASE_URL } from '../constants/url'
import GlobalStateContext from './GlobalStateContext'

function GlobalState(props: any) {

    const [usersData, setUsersData] = useState([])
    const [filterData, setFilterData] = useState('')
    const [showUserBy, setShowUserBy] = useState('all')
    const [alert, setAlert] = useState(false)
    const [alertText, setAlertText] = useState('')
    const [alertErrorText, setAlertErrorText] = useState('')

    const getUsers = () => {
        axios.get(`${BASE_URL}`)
        .then((res) => setUsersData(res.data))
        .catch((err) => console.log(err))
    }

    useEffect(() => {
        getUsers()
    }, [usersData])

    const data = {
        filterData,
        setFilterData,
        showUserBy, 
        setShowUserBy,
        usersData,
        alertText,
        setAlertText,
        setAlert,
        alert
    }

    return(
        <GlobalStateContext.Provider value={data}>
            {props.children}
        </GlobalStateContext.Provider>
    )
}

export default GlobalState