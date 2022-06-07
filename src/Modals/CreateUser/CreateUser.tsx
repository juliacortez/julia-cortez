import { IconButton, MenuItem, Select, TextField } from "@mui/material";
import useForm from "../../hooks/useForm";
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
import { v4 as uuid } from "uuid";
import { BASE_URL } from "../../constants/url";
import axios from "axios";
import CloseIcon from "@mui/icons-material/Close";
import { useContext } from "react";
import GlobalStateContext from "../../GlobalState/GlobalStateContext";

function CreateUser(props: any) {
  const createNewId: string = uuid();

  const { setAlert, setAlertText } = useContext(GlobalStateContext);

  const [form, handleInputChange, clear] = useForm({
    id: createNewId,
    name: "",
    company: "",
    email: "",
    phone: "",
    adress: "",
    note: "",
    isActive: true,
  });

  const onSubmitForm = (e: any) => {
    e.preventDefault();
    createUser();
    clear();
  };

  const createUser = () => {
    axios
      .post(BASE_URL, form)
      .then(
        (res) => setAlert(true),
        setAlertText("Cliente cadastrado com sucesso")
      )
      .catch((err) => setAlert(true));
  };

  const clearInputs = () => {
    clear();
  };

  return (
    <CreateUserModal>
      <FormContainer>
        <FormHeader>
          <HeaderButton>
            <IconButton onClick={props.onClose}>
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
              value={form.name}
              onChange={handleInputChange}
              label={"Nome"}
              required
              color="secondary"
              margin="normal"
            />
            <TextField
              name={"company"}
              value={form.company.toUpperCase()}
              onChange={handleInputChange}
              label={"Empresa"}
              color="secondary"
              margin="normal"
            />
            <TextField
              name={"email"}
              value={form.email}
              onChange={handleInputChange}
              label={"E-mail"}
              required
              type="email"
              color="secondary"
              margin="normal"
            />
            <TextField
              name={"phone"}
              value={form.phone}
              onChange={handleInputChange}
              label={"Telefone"}
              color="secondary"
              margin="normal"
            />
            <TextField
              name={"adress"}
              value={form.adress}
              onChange={handleInputChange}
              label={"Endereço"}
              color="secondary"
              margin="normal"
              fullWidth
            />
            <TextField
              name={"note"}
              value={form.note}
              onChange={handleInputChange}
              label={"Nota"}
              multiline
              rows={4}
              color="secondary"
              margin="normal"
              fullWidth
            />
            <FormFotter>
              <Select
                sx={{ minWidth: 120 }}
                name={"isActive"}
                value={form.isActive}
                onChange={handleInputChange}
                color="secondary"
                defaultValue={true}
              >
                <MenuItem value={true}>Ativo</MenuItem>
                <MenuItem value={false}>Inativo</MenuItem>
              </Select>
              <FormButtons>
                <Button color="secondary" type="submit" variant="contained">
                  Criar
                </Button>

                <Button
                  variant="contained"
                  color="primary"
                  onClick={clearInputs}
                >
                  Cancelar
                </Button>
              </FormButtons>
            </FormFotter>
          </InputContainer>
        </form>
      </FormContainer>
    </CreateUserModal>
  );
}

export default CreateUser;
