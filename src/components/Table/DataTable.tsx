import React, { useContext } from "react";
import { TableContainer } from "./styled";
import DeleteOutlineRoundedIcon from "@mui/icons-material/DeleteOutlineRounded";
import EditRoundedIcon from "@mui/icons-material/EditRounded";
import IconButton from "@mui/material/IconButton";
import GlobalStateContext from "../../GlobalState/GlobalStateContext";

function DataTable() {
  const { users, filterData, showUserBy } = useContext(GlobalStateContext);

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
  );
}

export default DataTable;
