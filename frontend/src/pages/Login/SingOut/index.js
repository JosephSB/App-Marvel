import ContainerLogin from "../../../Containers/ContainerLogin/ContainerLogin";
import { Form, InputBtn, InputText, Link } from "../styles";

const DEFAULT_FORM = {
  Username: "",
  Password: "",
  Password2: "",
};

const SingOut = () => {
  return (
    <ContainerLogin
      detailURL="Users/register"
      DEFAULT_FORM={DEFAULT_FORM}
      mood={false}
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
            <span>REPEAT PASSWORD: </span>
            <InputText
              onChange={handleChange}
              type="password"
              name="Password2"
              value={form.Password2}
            />
            <InputBtn onClick={sendForm} type="submit" value="REGISTRATE" />
            <Link exact="true" to="/SingIn">
              ¿Ya tienes cuenta?, Inicia Sesion.
            </Link>
          </Form>
        );
      }}
    </ContainerLogin>
  );
};

export default SingOut;
