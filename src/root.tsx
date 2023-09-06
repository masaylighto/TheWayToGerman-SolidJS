// @refresh reload
import "./css/tailwind.css";
import AdminsView from "./routes/dashboard/admins/AdminsView";
import MainPage from "./routes/dashboard/MainPage";
import NotFound from "./routes/[...404]";
import CategoriesView from "./routes/dashboard/categories/CategoriesView";
import Login from "./routes/Login";
import Articles from "./routes/dashboard/articles/Article";
import ArticleView from "./routes/dashboard/articles/ArticleView";
import { Route, Routes, Router } from "@solidjs/router";
import HomeView from "./routes/front/home/HomeView";

export default function Root() {
  return (      
        <Router>
          <Routes>     
            <Route path="/" component={HomeView} />       
            <Route path="/login" component={Login} />
            <Route path="/dashboard/" component={MainPage} /> 
            <Route path="/dashboard/articles" component={ArticleView} /> 
            <Route path="/dashboard/admins" component={AdminsView} /> 
            <Route path="/dashboard/categories" component={CategoriesView} /> 
            <Route path="*" element={<NotFound />} />          
          </Routes>   
        </Router>      
  );
}
