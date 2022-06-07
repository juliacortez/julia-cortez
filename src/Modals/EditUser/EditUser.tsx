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
import CloseIcon from "@mui/icons-material/Close";
import { useContext, useState } from "react";
import GlobalStateContext from "../../GlobalState/GlobalStateContext";

function EditUser(props) {

    const { usersData } = useContext(GlobalStateContext)


  const [form, handleInputChange, clear] = useForm({
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
    editUser();
  };

  const editUser = () => {
    // axios
    //   .put(`${BASE_URL}/${props.id}`, form)
    //   .then((res) => alert("Usuário atualizado com sucesso!"))
    //   .catch((err) => alert("Ocorreu um erro. Tente novamente."));
    console.log(form);
  };

  const clearInputs = () => {
    clear();
  };

  return (
    <>
      <CreateUserModal>
        <FormContainer>
          <FormHeader>
            <HeaderButton>
              <IconButton onClick={props.close}>
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
                required
                color="secondary"
                margin="normal"
              />
              <TextField
                name={"company"}
                value={form.company}
                onChange={handleInputChange}
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
                value={""}
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
                  defaultValue="true"
                  value={form.isActive}
                  onChange={handleInputChange}
                  color="secondary"
                >
                  <MenuItem 
                    value={true}
                    key={1}
                  >
                        Ativo
                    </MenuItem>
                  <MenuItem 
                    value={false}
                    key={2}
                  >
                        Inativo
                    </MenuItem>
                </Select>
                <FormButtons>
                  <Button color="secondary" type="submit" variant="contained">
                    Salvar
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
    </>
  );
}

export default EditUser;
