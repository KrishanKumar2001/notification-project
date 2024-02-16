import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import UserContextProvider from "./context/AuthContext.tsx";
import UsersContextProvider from "./context/UsersContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  
  <UserContextProvider>
    <UsersContextProvider>
       <App />
    </UsersContextProvider>
  </UserContextProvider>
);
