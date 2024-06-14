import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  ThirdwebProvider,
  metamaskWallet,
  
} from "@thirdweb-dev/react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThirdwebProvider
      supportedWallets={[
        metamaskWallet({
          recommended: true,
        }),
       
      ]}
      clientId="263ce4ddd19e94c4f99551c0effead31"
      activeChain= "sepolia"
    >
      <App />
    </ThirdwebProvider>
  </React.StrictMode>
);
