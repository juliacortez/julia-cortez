import { useState } from 'react'

function useForm(initialState: any) {

    const [form, setForm] = useState(initialState)

    const handleInputChange = (e: any) => {
        const {value, name} = e.target
        setForm({...form, [name]: value})
    }

    const clear = () => {
        setForm(initialState)
    }

    return [form, handleInputChange, clear]
}

export default useForm