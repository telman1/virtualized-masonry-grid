import { Routes, Route } from "react-router-dom";
import GridLayout from "./components/gridLayout/GridLayout.tsx";
import DetailedView from "./components/detailedView/DetailedView.tsx";
import {ROUTES} from "./helpers/constants.ts";
import './App.css'

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
