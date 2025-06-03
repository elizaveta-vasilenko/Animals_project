import { Routes, Route } from "react-router-dom";
import { MainLayout } from "../../layouts/MainLayout";
import { Home } from "../../pages/Home";
import { Cards } from "../../pages/Cards";

/** Массив роутов приложения */
const routes = [
  { path: "/", element: <Home /> },
  { path: "cards", element: <Cards /> },
  
];

/**
 * Рекурсивно отображает роуты и дочерние роуты.
 * @param {RouteItem} route - Объект роута.
 */
const renderRoute = ({ path, element, children }) => (
  <Route key={path} path={path} element={element}>
    {children && children.map(renderRoute)}
  </Route>
);

/** Корневой компонент приложения с роутами */
export const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<MainLayout />}>
      {routes?.map(renderRoute)}
    </Route>
  </Routes>
);


