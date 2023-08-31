import { AuthenticatedPage } from "~/components/AuthenticatedEnforcers";
import { AccessRoles } from "~/helper";
import DashboardNavbar from "../dashboards/DashboardNavbar";
import "~/css/tailwind.css"
import "~/css/core.css"
import { For, JSX  } from "solid-js";
import { NotificationBox, } from "~/components/Notification";
import Category from "./Categories";
import GetCategoriesResponse from "~/Api/ResponseObject/GetCategoriesResponse";



/// Ui
function CategoryRow(category:GetCategoriesResponse):JSX.Element{
  console.log(category);
return ( <div class="flex flex-row  bg-white shadow mt-14 mb-2 rounded p-2">
            <p title="Category Name" class="w-5/6 text-center outline-none mx-2 h-8 my-auto">{category.name}</p>
            <select disabled title="Category Language" id="language" class="w-5/6 text-center outline-none mx-2 h-8 my-auto appearance-none" value={category.language} >       
              <option value="0">العربية</option>
              <option value="1">الانكليزي</option>
            </select>
           
          </div>
          )
}
export default function CategoriesView() {

  return (
    <AuthenticatedPage Role={AccessRoles.OwnerRole}>
      <main style={"background-color:#f5f5f5"} class="min-h-full h-fit">
        <NotificationBox/>               
        <DashboardNavbar/>
        <div class="flex flex-col">
          <div class="flex flex-row w-2/6 mx-auto bg-white shadow mt-14 mb-2 rounded p-2">
            <input title="Category Name" id="name"     type="text" class="w-5/6 text-center outline-none mx-2 h-8 my-auto" placeholder="الاسم"/>
            <select title="Category Language" id="language" class="w-5/6 text-center outline-none mx-2 h-8 my-auto">
              <option selected disabled>اللغة</option>
              <option value="1">العربية</option>
              <option value="2">الانكليزي</option>
            </select>
            <button title="add category button" onclick={x=>Category.Add()} class="border-flag-red text-flag-red  border rounded p-2 select-none">اضافة</button>
          </div>
          <div id="CategoriesTable" class="flex flex-col my-2 bg-white shadow  rounded p-2 mx-auto w-2/6">
            <For each={Category.List()}>{(x:GetCategoriesResponse)=>CategoryRow(x)}</For>
          </div>
        </div>                  
      </main>  
    </AuthenticatedPage>
  );
}
