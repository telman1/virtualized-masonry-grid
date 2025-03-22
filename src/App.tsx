import { Routes, Route } from "react-router-dom";
import GridLayout from "./pages/gridLayout/GridLayout.tsx";
import DetailedView from "./pages/detailedView/DetailedView.tsx";
import {ROUTES} from "./helpers/constants.ts";
import "./styles/main.scss";

function App() {
  return (
    <>
      <Routes>
        <Route path={ROUTES.GRID} element={<GridLayout/>} />
        <Route path={ROUTES.GRID_ITEM} element={<DetailedView />} />
      </Routes>
    </>
  )
}

export default App
