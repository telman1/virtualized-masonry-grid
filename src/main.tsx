import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import {BrowserRouter} from "react-router-dom";
import App from './App.tsx'
import {ImageProvider} from "./context/ImageContext.tsx";
// import { scan } from "react-scan";

// scan({
//   enabled: true,
// });

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <ImageProvider>
        <App/>
      </ImageProvider>
    </BrowserRouter>
  </StrictMode>,
)
