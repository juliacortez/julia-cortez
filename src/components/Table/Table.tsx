import React from 'react'
import { TableContainer } from './styled'
import DeleteOutlineRoundedIcon from '@mui/icons-material/DeleteOutlineRounded';
import EditRoundedIcon from '@mui/icons-material/EditRounded';
import IconButton from '@mui/material/IconButton';


function DataTable(props: any){

    return(
        <div>
            <TableContainer>
                <table>
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Empresa</th>
                        <th>Telefone</th>
                        <th>E-mail</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                {props.data.map((dt: any) => (
                    <tr key={dt.name}>
                    <td>{dt.name}</td>
                    <td>{dt.company}</td>
                    <td>{dt.phone}</td>
                    <td>{dt.email}</td>
                    <td>{dt.isActive === true ? "Ativo" : "Inativo"}</td>
                    <td>
                        <IconButton> 
                            <EditRoundedIcon /> 
                        </IconButton>

                        <IconButton> 
                            <DeleteOutlineRoundedIcon /> 
                        </IconButton>
                    </td>
                    </tr>
                    ))}
                </tbody>
                </table>
            </TableContainer>
    </div>

    )
}

export default DataTable