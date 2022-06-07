import React, { useContext, useEffect, useState } from "react";
import { TableContainer } from "./styled";
import DeleteOutlineRoundedIcon from "@mui/icons-material/DeleteOutlineRounded";
import EditRoundedIcon from "@mui/icons-material/EditRounded";
import IconButton from "@mui/material/IconButton";
import GlobalStateContext from "../../GlobalState/GlobalStateContext";
import { Modal } from "@mui/material";
import EditUser from "../../Modals/EditUser/EditUser";
import axios from "axios";
import { BASE_URL } from "../../constants/url";
import useRequestData from "../../hooks/useRequestData";
import ClientsRows from '../ClientsRows/ClientsRows'

function DataTable() {

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
            <ClientsRows />
          </tbody>
        </table>
      </TableContainer>
    </div>
  );
}

export default DataTable;
