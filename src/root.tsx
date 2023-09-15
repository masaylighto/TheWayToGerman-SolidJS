// @refresh reload
import "./css/tailwind.css";
import AdminsView from "./routes/dashboard/admins/AdminsView";
import MainPage from "./routes/dashboard/MainPage";
import NotFound from "./routes/[...404]";
import CategoriesView from "./routes/dashboard/categories/CategoriesView";
import Login from "./routes/Login";
import Articles from "./routes/dashboard/articles/ArticlePublisher";
import ArticlePublisherView from "./routes/dashboard/articles/ArticlePublisherView";
import { Route, Routes, Router } from "@solidjs/router";
import HomeView from "./routes/front/home/HomeView";
import ArticleView from "./routes/front/article/ArticleView";

export default function Root() {
  return (      
        <Router>
          <Routes>     
            <Route path="/" component={HomeView} />       
            <Route path="/login" component={Login} />
            <Route path="/dashboard/" component={MainPage} /> 
            <Route path="/article/:id" component={ArticleView}></Route>
            <Route path="/dashboard/articles" component={ArticlePublisherView} /> 
            <Route path="/dashboard/admins" component={AdminsView} /> 
            <Route path="/dashboard/categories" component={CategoriesView} /> 
            <Route path="*" element={<NotFound />} />          
          </Routes>   
        </Router>      
  );
}
