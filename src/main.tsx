import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import {BrowserRouter} from "react-router-dom";
import './index.css'
import App from './App.tsx'
import {ImageProvider} from "./context/ImageContext.tsx";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <ImageProvider>
        <App/>
      </ImageProvider>
    </BrowserRouter>
  </StrictMode>,
)
