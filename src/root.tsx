// @refresh reload
import {
  Body,
  Head,
  Html,
  Meta,
  Route,
  Routes,
  Title,
} from "solid-start";
import "./css/tailwind.css";

import AdminsView from "./routes/dashboard/admins/AdminsView";
import MainPage from "./routes/dashboard/MainPage";
import NotFound from "./routes/[...404]";
import CategoriesView from "./routes/dashboard/categories/CategoriesView";
import Login from "./routes/Login";
export default function Root() {
  return (
    <Html lang="ar" dir="rtl" class="h-full w-full">
      <Head>
        <Title>The Way To Germany</Title>
        <Meta charset="utf-8" />
        <Meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Body class="h-full w-full">
          <Routes>            
            <Route path="/login" component={Login} />
            <Route path="/dashboard/" component={MainPage} /> 
            <Route path="/dashboard/admins" component={AdminsView} /> 
            <Route path="/dashboard/categories" component={CategoriesView} /> 
            <Route path="*" element={<NotFound />} />          
          </Routes>      
      </Body>
    </Html>
  );
}
