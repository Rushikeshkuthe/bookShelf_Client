// import { createContext, useReducer, useEffect } from "react";

// export const AuthContext = createContext();

// const initialState = {
//   user: JSON.parse(localStorage.getItem("user")),
//   loading: true, 
//   error: null, 
// };

// export const authReducer = (state, action) => {
//   switch (action.type) {
//     case "LOGIN":
//       return { ...state, user: action.payload, loading: false };
//     case "LOGOUT":
//       return { ...state, user: null, loading: false };
//     case "ERROR":
//       return { ...state, error: action.payload, loading: false };
//     default:
//       return state;
//   }
// };

// export const AuthContextProvider = ({ children }) => {
//   const [state, dispatch] = useReducer(authReducer, initialState);

//   useEffect(() => {
//     try {
//       if (initialState.user) {
//         dispatch({ type: "LOGIN", payload: initialState.user }); 
//       } else {
//         dispatch({ type: "LOGOUT" }); 
//       }
//     } catch (error) {
//       dispatch({ type: "ERROR", payload: error.message });
//     }
//   }, []);


//   return (
//     <AuthContext.Provider value={{ ...state, dispatch }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };
