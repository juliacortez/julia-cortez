import React, { useContext, useEffect } from "react";
import { TableContainer } from "./styled";
import DeleteOutlineRoundedIcon from "@mui/icons-material/DeleteOutlineRounded";
import EditRoundedIcon from "@mui/icons-material/EditRounded";
import IconButton from "@mui/material/IconButton";
import GlobalStateContext from "../../GlobalState/GlobalStateContext";
import { Modal } from "@mui/material";
import EditUser from "../../Modals/EditUser/EditUser";
import axios from "axios";
import { BASE_URL } from "../../constants/url";

function DataTable() {
  const { users, filterData, showUserBy, openModal, setOpenModal, } = useContext(GlobalStateContext);

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };


  const deleteClient = (id) => {
    axios.delete(`${BASE_URL}/${id}`, {data: id} )
    .then(res => console.log(res))
    .catch(err => console.log(err))
}


  return (
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
            {users
              .filter((user: any) => {
                return (
                  user.name.toLowerCase().includes(filterData.toLowerCase()) ||
                  user.company
                    .toLowerCase()
                    .includes(filterData.toLowerCase()) ||
                  user.phone.toLowerCase().includes(filterData.toLowerCase()) ||
                  user.email.toLowerCase().includes(filterData.toLowerCase())
                );
              })
              .filter((user: any) => {
                if (showUserBy === "active") {
                  return user.isActive === true;
                } else if (showUserBy === "inactive") {
                  return user.isActive === false;
                } else {
                  return user;
                }
              })
              .map((user: any) => (
                <tr key={user.id}>
                  <td>{user.name}</td>
                  <td>{user.company}</td>
                  <td>{user.phone}</td>
                  <td>{user.email}</td>
                  <td>{user.isActive === true ? "Ativo" : "Inativo"}</td>
                  <td>
                    <IconButton>
                      <EditRoundedIcon/>
                    </IconButton>

                    <IconButton>
                      <DeleteOutlineRoundedIcon
                        onClick={() => deleteClient(user.id)}
                      />
                    </IconButton>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </TableContainer>
      <Modal
        open={openModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <EditUser
            
        />
      </Modal>
    </div>
  );
}

export default DataTable;
