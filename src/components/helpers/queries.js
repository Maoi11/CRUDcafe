//Llamar a mis variables de entorno
const URLUsuario = import.meta.env.VITE_API_USUARIO;
export const login = async (usuarioLogueado) => {
  try {
    const respuesta = await fetch(URLUsuario);
    const listaUsuarios = await respuesta.json();
    const usuarioBuscado = listaUsuarios.find(
      (itemUsuario) => itemUsuario.email === usuarioLogueado.email
    );
    if (usuarioBuscado) {
      console.log("mail encontrado");
      if (usuarioBuscado.password === usuarioLogueado.password) {
        return usuarioBuscado;
      } else {
        console.log("el password es incorrecto");
        return null;
      }
    } else {
      console.log("el mail no existe");
      return null;
    }
  } catch (error) {
    console.log(error);
  }
};
