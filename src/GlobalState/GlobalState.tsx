import React, {useState} from 'react'
import { BASE_URL } from '../constants/url'
import useRequestData from '../hooks/useRequestData'
import GlobalStateContext from './GlobalStateContext'

function GlobalState(props) {

    const users = useRequestData([], `${BASE_URL}/clients`)

    const data = {
        users
    }

    return(
        <GlobalStateContext.Provider value={data}>
            {props.children}
        </GlobalStateContext.Provider>
    )
}

export default GlobalState