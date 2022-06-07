import { TableContainer } from "./styled";
import ClientsRows from "../ClientsRows/ClientsRows";
import { Alert, Button, Stack } from "@mui/material";
import { useContext, useState } from "react";
import GlobalStateContext from "../../GlobalState/GlobalStateContext";
import Pagination from "../Pagination/Pagination";

function DataTable() {
  const { alert, alertText, setAlert } = useContext(GlobalStateContext);

  return (
    <div>
      {alert && alertText.includes("sucesso") ? (
        <div>
          <Alert severity="success" onClose={() => setAlert(false)}>
            {alertText}
          </Alert>
        </div>
      ) : (
        <></>
      )}
      {alert && alertText === "" ? (
        <Alert severity="error" onClose={() => setAlert(false)}>
          <p>Ocorreu um erro</p>
        </Alert>
      ) : (
        <></>
      )}
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
      <Pagination />
    </div>
  );
}

export default DataTable;
