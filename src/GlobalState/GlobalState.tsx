import axios from 'axios'
import React, {useState} from 'react'
import { BASE_URL } from '../constants/url'
import useRequestData from '../hooks/useRequestData'
import GlobalStateContext from './GlobalStateContext'

function GlobalState(props) {

    const users = useRequestData([], BASE_URL)
    const [filterData, setFilterData] = useState('')
    const [showUserBy, setShowUserBy] = useState('all')
    const [openModal, setOpenModal] = useState(false);

    const data = {
        users,
        filterData,
        setFilterData,
        showUserBy, 
        setShowUserBy,
        openModal,
        setOpenModal
    }

    return(
        <GlobalStateContext.Provider value={data}>
            {props.children}
        </GlobalStateContext.Provider>
    )
}

export default GlobalState