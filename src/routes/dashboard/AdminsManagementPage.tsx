import { AuthenticatedPage } from "~/components/AuthenticatedEnforcers";
import { AccessRoles, Colors, Keys, ToggleReadonly } from "~/helper";
import DashboardNavbar from "./DashboardNavbar";
import "../../css/tailwind.css"
import "../../css/core.css"
import { For, JSX, createSignal } from "solid-js";
import CreateAdminDTO from "~/Api/DTO/CreateAdminDTO";
import ErrorResponse from "~/Api/ResponseObject/ErrorResponse";
import { NotificationBox, ShowNotification } from "~/components/Notification";
import GetAdminsDTO from "~/Api/DTO/GetAdminsDTO";
import { CreateAdmin, DeleteAdmin, GetAdmins } from "~/Api/Services/Owner";
import GetAdminsResponse from "~/Api/ResponseObject/GetAdminsResponse";
import DeleteAdminDTO from "~/Api/DTO/DeleteAdminDTO";
import CreateAdminResponse from "~/Api/ResponseObject/CreateAdminResponse";
import Ok from "~/Api/ResponseObject/Ok";
/// Ui
function _AdminRow(admin:GetAdminsResponse):JSX.Element{
  return (
      <div class="flex flex-row my-1 w-full">
        <input hidden>{admin.id}</input>
        <input readOnly onDblClick={x=>ToggleReadonly(x.target)} value={admin.name} class="w-5/6 text-center outline-none mx-2 h-8 my-auto"/>
        <input readOnly onDblClick={x=>ToggleReadonly(x.target)} value={admin.username} class="w-5/6 text-center outline-none mx-2 h-8 my-auto"/>
        <input readOnly onDblClick={x=>ToggleReadonly(x.target)} value={admin.email} class="w-5/6 text-center outline-none mx-2 h-8 my-auto"/>
        <button onclick={(event)=>_DeleteAdmin(event.target,admin.id)} class="border-flag-red text-flag-red border rounded px-3 py-2 select-none">حذف</button>
      </div>
  )
}
export default function AdminsManagementPage() {
  _GetAdmins();
  return (
    <AuthenticatedPage Role={AccessRoles.OwnerRole}>
      <main style={"background-color:#f5f5f5"} class="min-h-full h-fit">
        <NotificationBox/>               
        <DashboardNavbar/>
        <div class="flex flex-col">
          <div class="flex flex-row w-4/6 mx-auto bg-white shadow mt-14 mb-2 rounded p-2">
            <input id="name"     type="text" class="w-5/6 text-center outline-none mx-2 h-8 my-auto" placeholder="الاسم"/>
            <input id="username" type="text" class="w-5/6 text-center outline-none mx-2 h-8 my-auto" placeholder="اسم المستخدم"/>
            <input id="email"    type="text" class="w-5/6 text-center outline-none mx-2 h-8 my-auto" placeholder="البريد الالكتروني"/>
            <input id="password" type="text" class="w-5/6 text-center outline-none mx-2 h-8 my-auto" placeholder="الرمز"/>
            <button onclick={x=>_AddAdmin()} class="border-flag-red text-flag-red  border rounded p-2 select-none">اضافة</button>
          </div>
          <div id="AdminTable" class="flex flex-col my-2 bg-white shadow  rounded p-2 mx-auto w-4/6">
            <For each={admins()}>{(admin)=>_AdminRow(admin)}</For>
          </div>
        </div>                  
      </main>  
    </AuthenticatedPage>
  );
}
// Signals
const [admins, loadAdmins] = createSignal<Array<GetAdminsResponse>>();
// Api Callers 
function _AddAdmin(){
  let name      = document.getElementById("name")     as HTMLInputElement
  let username  = document.getElementById("username") as HTMLInputElement
  let email     = document.getElementById("email")    as HTMLInputElement
  let password  = document.getElementById("password") as HTMLInputElement
  if(password.value.length<8){
    ShowNotification("password should be more than 8 characters",Colors.Red);
    return;
  }
  let dto = new CreateAdminDTO(name.value,email.value,username.value,password.value);
  CreateAdmin(dto).then(response => _HandleAddAdminResponse(response,dto))
}
function _GetAdmins(){
    GetAdmins(new GetAdminsDTO()).then(_HandleGetAdminsResponse)   
}
function _DeleteAdmin(element:Element,id:string){
  DeleteAdmin(new DeleteAdminDTO(id)).then(response=> _HandleDeleteAdminResponse(response,element));
}


// Api Response Handler
function _HandleAddAdminResponse(response: CreateAdminResponse | ErrorResponse ,dto : CreateAdminDTO){
  let admin = new GetAdminsResponse();
  if ("detail" in response) 
  {
    ShowNotification(response.detail,Colors.Red)
    return;
  }
  ShowNotification("Done",Colors.Green) 
  admin.id = (response as CreateAdminResponse).id;    
  admin.email = dto.Email;
  admin.name  = dto.Name;
  admin.password = dto.Password;
  admin.username = dto.Username    
  let Admins= admins() as Array<GetAdminsResponse>;
  Admins.push(admin)
  let SortedAdmins= Admins.toSorted();
  loadAdmins(SortedAdmins);
}
function _HandleGetAdminsResponse(response: ErrorResponse | GetAdminsResponse[]){
  if ("detail" in response)
  {         
       ShowNotification(response.detail,Colors.Red)
  }
  loadAdmins(response as Array<GetAdminsResponse>)
}
function _HandleDeleteAdminResponse(response:ErrorResponse | Ok , element:Element){
  if ("detail" in response)
  {         
       ShowNotification(response.detail,Colors.Red)   
       return;
  }
  ShowNotification("Admin Removed",Colors.Green)    
  element.parentElement?.remove();
}
