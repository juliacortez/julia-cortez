import DataTable from "../../components/Table/DataTable"
import Filter from "../../components/Filter/Filter"
import { HomeContainer, HomeHeader } from "./styled"
import AddCircleOutlineRoundedIcon from '@mui/icons-material/AddCircleOutlineRounded';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';


function HomePage(){

    return(
        <HomeContainer>
            <HomeHeader>
                <Filter />
                <Button variant="contained" startIcon={<AddCircleOutlineRoundedIcon/>}>
                    Cadastrar Novo Usuário
                </Button>
            </HomeHeader>
            <DataTable />
        </HomeContainer>
    )
}

export default HomePage