import { IconButton, MenuItem, Select, TextField } from "@mui/material";
import useForm from "../../hooks/useForm";
import { CreateUserModal, FormButtons, FormContainer, FormHeader, FormSelect, FormTitle, HeaderButton, InputContainer } from "./styled";
import Button from "@mui/material/Button";
import { v4 as uuid } from "uuid";
import { BASE_URL } from "../../constants/url";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";

function CreateUserPage(props) {

  const generateId: string = uuid();

  const [form, handleInputChange, clear] = useForm({
    id: generateId,
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
      .then((res) => alert("Usuário cadastrado com sucesso!"))
      .catch((err) => alert("Ocorreu um erro. Tente novamente."));
  };

  const clearInputs = () => {
    clear();
  };

  return (
    <CreateUserModal>
      <FormContainer>
          <FormHeader>
              <HeaderButton>
          <IconButton>
                <CloseIcon onClick={props.onClose} />
              </IconButton>
              </HeaderButton>
              <FormTitle><h3>Dados do Cliente</h3><hr /></FormTitle>
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
              value={form.company}
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
            <FormSelect>
            <Select
              sx={{ minWidth: 120 }}
              name={"isActive"}
              value={form.isActive}
              onChange={handleInputChange}
              color="secondary"
            >
              <MenuItem value={true}>Ativo</MenuItem>
              <MenuItem value={false}>Inativo</MenuItem>
            </Select>
            </FormSelect>
            <FormButtons>
              <Button color="secondary" type="submit" variant="contained">
                Criar
              </Button>

              <Button variant="contained" color="primary" onClick={clearInputs}>
                Cancelar
              </Button>
            </FormButtons>
          </InputContainer>
        </form>
      </FormContainer>
    </CreateUserModal>
  );
}

export default CreateUserPage;
