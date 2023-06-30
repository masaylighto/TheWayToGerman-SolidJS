import { AuthenticatedPage } from "~/components/AuthenticatedEnforcers";
import { AccessRoles, Colors, Keys, ToggleReadonly } from "~/helper";
import DashboardNavbar from "./DashboardNavbar";
import "../../css/tailwind.css"
import "../../css/core.css"
import { For, JSX,  } from "solid-js";
import { NotificationBox, ShowNotification } from "~/components/Notification";
import CreateCategoryDTO from "~/Api/DTO/CreateCategoryDTO";
import CreateCategory from "~/Api/Services/Category";
import CreateCategoryResponse from "~/Api/ResponseObject/CreateCategoryResponse";
import ErrorResponse from "~/Api/ResponseObject/ErrorResponse";

/// Ui
function _CategoryRow():JSX.Element{
return <></>
}
export default function CategoriesManagementPage() {

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
              <option value={"f908fa84-93c9-405d-a160-64a2ec69ac04"}>العربية</option>
            </select>
            <button title="add category button" onclick={x=>_AddCategory()} class="border-flag-red text-flag-red  border rounded p-2 select-none">اضافة</button>
          </div>
          <div id="AdminTable" class="flex flex-col my-2 bg-white shadow  rounded p-2 mx-auto w-2/6">
            <For each={null}>{()=>_CategoryRow()}</For>
          </div>
        </div>                  
      </main>  
    </AuthenticatedPage>
  );
}
//Api
function _AddCategory(){

  let name      = document.getElementById("name")     as HTMLInputElement
  let language  = document.getElementById("language") as HTMLSelectElement

  if(name.value.length==0){
    ShowNotification("Please write a name",Colors.Red);
    return;
  }
  if(language.selectedIndex==0){
    ShowNotification("Please Select a Language",Colors.Red);
    return;
  }
  let dto = new CreateCategoryDTO(name.value,language.value);
  CreateCategory(dto).then(response => _HandleAddAdminResponse(response,dto))
}



// Api Response Handler
function _HandleAddAdminResponse(response: CreateCategoryResponse | ErrorResponse ,dto : CreateCategoryDTO){
  if ("detail" in response) 
  {
    ShowNotification(response.detail,Colors.Red)
    return;
  }
  ShowNotification("Done",Colors.Green) 
}