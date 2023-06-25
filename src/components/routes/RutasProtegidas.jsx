import { Navigate } from "react-router-dom";

const RutasProtegidas = ({children}) => {
   const usuarioLogueado =JSON.parse(sessionStorage.getItem('usuarioLogueado'))||null;
   //preguntar si el usuario no esta logueado
   if(!usuarioLogueado){
    return <Navigate to={'/login'}></Navigate>
   } else { 
    return children;
   }
};

export default RutasProtegidas;