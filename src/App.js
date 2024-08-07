import React, { useEffect, useState } from "react";
import { WebAppProvider, MainButton } from "@vkruglikov/react-telegram-web-app";

function App() {
  const [webApp, setWebApp] = useState(null);

  useEffect(() => {
    const tg = window.Telegram?.WebApp;
    if (tg) {
      tg.ready();
      setWebApp(tg);
    }
  }, []);

  const handleMainButtonClick = () => {
    if (webApp) {
      webApp.showAlert("You clicked the main button!");
    }
  };

  return (
    <WebAppProvider>
      <div className="App">
        <h1>My Telegram Web App</h1>
        <p>Welcome to this simple Telegram Web App!</p>
        {webApp && (
          <>
            <p>
              User: {webApp.initDataUnsafe.user?.username || "Not available"}
            </p>
            <MainButton text="Click me!" onClick={handleMainButtonClick} />
          </>
        )}
      </div>
    </WebAppProvider>
  );
}

export default App;
