import {useEffect, useState} from 'react'
import axios from 'axios'

function useRequestData(initialData: any, url: string){
    
    const [data, setData] = useState(initialData)

    useEffect(() => {
        axios.get(url)
            .then((res) => {
                setData(res.data)
            })
            .catch((err) => {
                console.log(err)
                alert('Ocorreu um erro, tente novamente')
            })
    }, [url])

    return (data)
}

export default useRequestData