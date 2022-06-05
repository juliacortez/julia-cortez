import { FormControl, MenuItem, Select, TextField } from '@mui/material'
import React, { useContext } from 'react'
import GlobalStateContext from '../../GlobalState/GlobalStateContext'
import { FilterContainer } from './styled'

function Filter(){

    const { filterData, setFilterData, showUserBy, setShowUserBy } = useContext(GlobalStateContext)

    const updateInput = (e) => {
        setFilterData(e.target.value)
    }

    const changeShowUser = (e) => {
        setShowUserBy(e.target.value)
    }

    return(
        <FilterContainer>
            <div>
            <TextField
                placeholder='Pesquisar por nome, empresa, telefone ou e-mail'
                value={filterData}
                onChange={updateInput}
            />
            </div>
            <div>
                <Select sx={{ m: 1, minWidth: 120 }}
                    name="showUser"
                    value={showUserBy}
                    onChange={changeShowUser}
                >
                    <MenuItem value="all">Todos</MenuItem>
                    <MenuItem value="active">Ativos</MenuItem>
                    <MenuItem value="inactive">Inativos</MenuItem>
                </Select>
            </div>
        </FilterContainer>
    )
}

export default Filter