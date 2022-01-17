import ContainerLogin from "../../../Containers/ContainerLogin/ContainerLogin";
import { Form, InputBtn, InputText, Link } from "../styles";

const DEFAULT_FORM = {
  Username: "",
  Password: "",
};
const SingIn = () => {
  return (
    <ContainerLogin
      detailURL="Users/signin"
      DEFAULT_FORM={DEFAULT_FORM}
      mood={true}
    >
      {({ handleChange, sendForm, form }) => {
        return (
          <Form>
            <span>USERNAME: </span>
            <InputText
              onChange={handleChange}
              type="text"
              name="Username"
              value={form.Username}
            />
            <span>PASSWORD: </span>
            <InputText
              onChange={handleChange}
              type="password"
              name="Password"
              value={form.Password}
            />
            <InputBtn onClick={sendForm} type="submit" value="INICIAR SESION" />
            <Link exact="true" to="/SingOut">
              ¿No tienes cuenta?, Crea una.
            </Link>
          </Form>
        );
      }}
    </ContainerLogin>
  );
};

export default SingIn;
