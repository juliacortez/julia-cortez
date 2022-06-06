import DataTable from "../../components/Table/DataTable";
import Filter from "../../components/Filter/Filter";
import { HomeContainer, HomeHeader } from "./styled";
import AddCircleOutlineRoundedIcon from "@mui/icons-material/AddCircleOutlineRounded";
import Button from "@mui/material/Button";
import { Modal } from "@mui/material";
import CreateUserPage from "../../Modals/CreateUser/CreateUser";
import { useContext, useEffect, useState } from "react";
import GlobalStateContext from "../../GlobalState/GlobalStateContext";

function HomePage() {
  const [openModal, setOpenModal] = useState(false);
  const {users} = useContext(GlobalStateContext)

  useEffect(() => {
      handleCloseModal()
  }, [users])

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  return (
    <HomeContainer>
      <HomeHeader>
        <Filter />
        <Button
          color="secondary"
          variant="contained"
          startIcon={<AddCircleOutlineRoundedIcon />}
          onClick={handleOpenModal}
        >
          Cadastrar Novo Usuário
        </Button>
      </HomeHeader>
      <DataTable />
      <Modal
        open={openModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <CreateUserPage
            onClose={handleCloseModal}
        />
      </Modal>
    </HomeContainer>
  );
}

export default HomePage;
