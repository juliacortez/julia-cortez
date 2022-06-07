import { IconButton, Modal } from "@mui/material";
import DeleteOutlineRoundedIcon from "@mui/icons-material/DeleteOutlineRounded";
import EditRoundedIcon from "@mui/icons-material/EditRounded";
import React, { useContext, useEffect, useState } from "react";
import GlobalStateContext from "../../GlobalState/GlobalStateContext";
import { BASE_URL } from "../../constants/url";
import axios from "axios";
import EditUser from "../../Modals/EditUser/EditUser";

function ClientsRows() {
  const { filterData, showUserBy, usersData, getId, setGetId } =
    useContext(GlobalStateContext);

  const [open, setOpen] = useState(false);
  const [id, setId] = useState("");

  const handleOpenModal = () => {
    setOpen(true);
  };

  const handleCloseModal = () => {
    setOpen(false);
  };

  const deleteClient = (id) => {
    axios
      .delete(`${BASE_URL}/${id}`, {
        data: id,
      })
      .then((res) => console.log(res))
      .catch((err) => alert(err));
  };

  return (
    <>
      {usersData
        .filter((user: any) => {
          return (
            user.name.toLowerCase().includes(filterData.toLowerCase()) ||
            user.company.toLowerCase().includes(filterData.toLowerCase()) ||
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
              <IconButton onClick={() => console.log(user.id)}>
                <EditRoundedIcon />
              </IconButton>

              <IconButton onClick={() => deleteClient(user.id)}>
                <DeleteOutlineRoundedIcon />
              </IconButton>
            </td>
          </tr>
        ))}
      <Modal
        open={open}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <EditUser close={handleCloseModal} />
      </Modal>
    </>
  );
}

export default ClientsRows;
