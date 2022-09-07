import { Breadcrumb, Input } from "antd";
import "./Header.css";
import { HashRouter, Link, Route, Routes, useLocation } from "react-router-dom";
import Homepage from "../pages/Homepage";
import Aboutpage from "../pages/Aboutpage";
import Singlepage from "../pages/Singlepage";
import Searchbar from './Searchbar';


// Breadcrumb and navbar
const breadcrumbNameMap: { [key: string]: string } = {
  "/about": "About Page",
  "/movies": "Movies Page",
};
const Navbar: React.FC = () => {
  // type belirleyemedim
  const location = useLocation();
  const pathSnippets = location.pathname.split("/").filter((i) => i);
  const extraBreadcrumbItems = pathSnippets.map((_, index) => {
    const url = `/${pathSnippets.slice(0, index + 1).join("/")}`;
    return (
      <Breadcrumb.Item key={url}>
        <Link to={url}>{breadcrumbNameMap[url]}</Link>
      </Breadcrumb.Item>
    );
  });
  const breadcrumbItems = [
    // type belirleyemedim
    <Breadcrumb.Item key="home">
      <Link to="/">Home</Link>
    </Breadcrumb.Item>,
  ].concat(extraBreadcrumbItems);
  return (
    <div className="demo">
      <div className="demo-nav">
        <Link to="/">Home</Link>
        <Link to="/movies">Movies List</Link>
        <Link to="/about">About</Link>
      </div>
      <Breadcrumb>{breadcrumbItems}</Breadcrumb>
      <Searchbar></Searchbar>

      <Routes>
        <Route path="/home" element={<Homepage />}></Route>
        <Route path="/about" element={<Aboutpage />}></Route>
        <Route path="/movies/:name" element={<Singlepage />}></Route>
      </Routes>
    </div>
  );
};

const Header: React.FC = () => {
  return (
    <HashRouter>
      <Navbar />
    </HashRouter>
  );
};

export default Header;
