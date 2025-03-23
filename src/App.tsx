import { Routes, Route } from "react-router-dom";
import GridLayout from "./pages/gridLayout/GridLayout.tsx";
import { ROUTES } from "./helpers/constants.ts";
import { lazy, Suspense } from "react";
import Loading from "./components/loading/Loading.tsx";
import "./styles/main.scss";

const DetailedView = lazy(() => import("./pages/detailedView/DetailedView.tsx"));

function App() {
  return (
    <>
      <Routes>
        <Route path={ROUTES.GRID} element={<GridLayout />} />
        <Route
          path={ROUTES.GRID_ITEM}
          element={
            <Suspense fallback={<Loading />}>
              <DetailedView />
            </Suspense>
          }
        />
      </Routes>
    </>
  );
}

export default App;
