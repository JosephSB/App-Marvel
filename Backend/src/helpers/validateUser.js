const UserValidate = () => {};

UserValidate.validatePassword = (Password, Password2, infoErrors) => {
  let mayuscula = false;
  let numero = false;
  if (!Password.length >= 8)
    infoErrors.push("La contraseña tiene que tener mas de 8 caracteres");
  for (let i = 0; i < Password.length; i++) {
    if (Password.charCodeAt(i) >= 65 && Password.charCodeAt(i) <= 90)
      mayuscula = true;
    else if (Password.charCodeAt(i) >= 48 && Password.charCodeAt(i) <= 57)
      numero = true;
  }
  if (mayuscula === false)
    infoErrors.push("La contraseña tiene que tener mayuscula");
  if (numero === false)
    infoErrors.push("La contraseña tiene que tener numeros");
  if (Password != Password2) infoErrors.push("Las contraseñas no coinciden");

  if (infoErrors.length != 0) return false;
  else return true;
};

UserValidate.validateUser = (user, infoErrors) => {
  if (user.length > 5) return true;
  else {
    infoErrors.push("El username tiene que tener mas de 5 digitos");
    return false;
  }
};

UserValidate.validateAll = async ({ Username, Password, Password2 }) => {
  let infoErrors = [];
  const pass = UserValidate.validatePassword(Password, Password2, infoErrors);
  const user = UserValidate.validateUser(Username, infoErrors);

  return new Promise((resolve, reject) => {
    if (pass && user) resolve({ operation: true, errors: [] });
    else resolve({ operation: false, errors: infoErrors });
  });
};

module.exports = UserValidate;
