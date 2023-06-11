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
import LoginPage from "./routes/Login";
import AdminsManagementPage from "./routes/dashboard/AdminsManagementPage";
import MainPage from "./routes/dashboard/MainPage";
import NotFound from "./routes/[...404]";
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
            <Route path="/login" component={LoginPage} />
            <Route path="/dashboard/" component={MainPage} /> 
            <Route path="/dashboard/admin" component={AdminsManagementPage} /> 
            <Route path="*" element={<NotFound />} />          
          </Routes>      
      </Body>
    </Html>
  );
}
