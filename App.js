import Routes from "./src/Routes";
import { useState } from "react";
import { AppContext } from "./src/contexts/AppContext";

export default function App() {
  // declarar um estado para este componente "App"
  const [isLoggedIn, setLoggedIn] = useState(false);

  // declarar um objeto que será passado a todos os filhos de "App"
  // este objeto contem referências ao valor e ao setter do nosso estado "local"
  const app = {
    setLoggedIn,
    isLoggedIn,
  };

  // "envolver" toda a aplicação no nosso AppContext (que carrega o objeto "app")
  return (
    <AppContext.Provider value={app}>
      <Routes />
    </AppContext.Provider>
  );
}
