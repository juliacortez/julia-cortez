import { IconButton, MenuItem, Select, TextField } from "@mui/material";
import {
  CreateUserModal,
  FormButtons,
  FormContainer,
  FormFotter,
  FormHeader,
  FormTitle,
  HeaderButton,
  InputContainer,
} from "./styled";
import Button from "@mui/material/Button";
import CloseIcon from "@mui/icons-material/Close";
import { useEffect, useState, useContext } from "react";
import { BASE_URL } from "../../constants/url";
import axios from "axios";
import GlobalStateContext from "../../GlobalState/GlobalStateContext";

function EditUser({ id, close }) {
  const { setAlert, setAlertText } = useContext(GlobalStateContext)
  const [userData, setUserData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    adress: "",
    note: "",
    isActive: {},
  });

  const getUserData = () => {
    axios
      .get(`${BASE_URL}?id=${id}`)
      .then((res) => 
        setUserData(res.data[0]))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getUserData();
  }, [id]);

  const form = {
    name: userData.name,
    company: userData.company,
    email: userData.email,
    phone: userData.phone,
    adress: userData.adress,
    note: userData.note,
    isActive: userData.isActive,
  };

  const handleInputChange = (e: any) => {
    const { value, name } = e.target;
    setUserData({ ...form, [name]: value });
  };

  const onSubmitForm = (e: any) => {
    e.preventDefault();
    editUser();
  };

  const editUser = () => {
    axios
      .put(`${BASE_URL}/${id}`, form)
      .then((res) => 
        setAlert(true),
        setAlertText("Cliente atualizado com sucesso"))
      .catch((err) => 
        setAlert(true));
  };

  return (
    <>
      <CreateUserModal>
        <FormContainer>
          <FormHeader>
            <HeaderButton>
              <IconButton onClick={close}>
                <CloseIcon />
              </IconButton>
            </HeaderButton>
            <FormTitle>
              <h3>Dados do Cliente</h3>
              <hr />
            </FormTitle>
          </FormHeader>
          <form onSubmit={onSubmitForm}>
            <InputContainer>
              <TextField
                name={"name"}
                label={"name"}
                required
                color="secondary"
                margin="normal"
                value={form.name}
                onChange={handleInputChange}
              />
              <TextField
                name={"company"}
                label={"Empresa"}
                color="secondary"
                margin="normal"
                value={form.company}
                onChange={handleInputChange}
              />
              <TextField
                name={"email"}
                label={"E-mail"}
                required
                type="email"
                color="secondary"
                margin="normal"
                value={form.email}
                onChange={handleInputChange}
              />
              <TextField
                name={"phone"}
                label={"Telefone"}
                color="secondary"
                margin="normal"
                value={form.phone}
                onChange={handleInputChange}
              />
              <TextField
                name={"adress"}
                label={"Endereço"}
                color="secondary"
                margin="normal"
                value={form.adress}
                onChange={handleInputChange}
                fullWidth
              />
              <TextField
                name={"note"}
                label={"Nota"}
                multiline
                rows={4}
                color="secondary"
                margin="normal"
                value={form.note}
                onChange={handleInputChange}
                fullWidth
              />
              <FormFotter>
                <Select
                  sx={{ minWidth: 120 }}
                  name={"isActive"}
                  defaultValue="true"
                  color="secondary"
                  value={form.isActive}
                  onChange={handleInputChange}
                >
                  <MenuItem value={true} key={1}>
                    Ativo
                  </MenuItem>
                  <MenuItem value={false} key={2}>
                    Inativo
                  </MenuItem>
                </Select>
                <FormButtons>
                  <Button color="secondary" type="submit" variant="contained">
                    Salvar
                  </Button>

                  <Button variant="contained" color="primary">
                    Cancelar
                  </Button>
                </FormButtons>
              </FormFotter>
            </InputContainer>
          </form>
        </FormContainer>
      </CreateUserModal>
    </>
  );
}

export default EditUser;
