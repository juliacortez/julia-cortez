import axios from 'axios'
import React, {useEffect, useState} from 'react'
import { BASE_URL } from '../constants/url'
import useRequestData from '../hooks/useRequestData'
import GlobalStateContext from './GlobalStateContext'

function GlobalState(props) {

    const [usersData, setUsersData] = useState([])
    const [filterData, setFilterData] = useState('')
    const [showUserBy, setShowUserBy] = useState('all')
    const [getId, setGetId] = useState('')


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
        usersData,
        getId,
        setGetId
    }

    return(
        <GlobalStateContext.Provider value={data}>
            {props.children}
        </GlobalStateContext.Provider>
    )
}

export default GlobalState