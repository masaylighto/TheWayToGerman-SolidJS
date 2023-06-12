import { AuthenticatedPage } from "~/components/AuthenticatedEnforcers";
import { AccessRoles, Colors, ToggleReadonly } from "~/helper";
import DashboardNavbar from "./DashboardNavbar";
import "../../css/tailwind.css"
import "../../css/core.css"
import User from "~/models/user";
import { For, Match, Switch, createResource, createSignal } from "solid-js";
import CreateAdminDTO from "~/Api/DTO/CreateAdminDTO";
import ErrorResponse from "~/Api/ResponseObject/ErrorResponse";
import Ok from "~/Api/ResponseObject/Ok";
import { HideNotification, NotificationBox, ShowNotification } from "~/components/Notification";
import GetAdminsDTO from "~/Api/DTO/GetAdminsDTO";
import { CreateAdmin, GetAdmins } from "~/Api/Owner";
import GetAdminsResponse from "~/Api/ResponseObject/GetAdminsResponse";
function AddAdmin(){
 let name = document.getElementById("name") as HTMLInputElement
 let username = document.getElementById("username") as HTMLInputElement
 let email = document.getElementById("email") as HTMLInputElement
 let password = document.getElementById("password") as HTMLInputElement
 if(password.value.length<8){
  ShowNotification("password should be more than 8 characters","#ff4b55");
  HideNotification(1000)
  return;
 }
 let dto =new CreateAdminDTO(name.value,email.value,username.value,password.value);
 CreateAdmin(dto).then((response: Ok | ErrorResponse) =>
 {
 
  console.log(response)
    if ("detail" in response) 
    {
      ShowNotification(response.detail,Colors.Red)
    }
    else
    {
      ShowNotification("Done",Colors.Green)  
    }
    HideNotification(1000)
   
 })
}
let [admins, loadAdmins] = createSignal<Array<GetAdminsResponse>>();
function FetchAdmins(){

    GetAdmins(new GetAdminsDTO()).then(response =>
    {
      if ("detail" in response)
      {         
           ShowNotification(response.detail,Colors.Red)     
           HideNotification(1000)     
      }
      loadAdmins(response as Array<GetAdminsResponse>)
    })
   
}

export default function AdminsManagementPage() {
    FetchAdmins();
    return (
      <AuthenticatedPage Role={AccessRoles.OwnerRole}>
      <main style={"background-color:#f5f5f5"} class="min-h-full h-fit">
      <NotificationBox/>
               
          <DashboardNavbar ></DashboardNavbar>
           <div class="flex flex-col">
              <div class="flex flex-row w-4/6 mx-auto bg-white shadow mt-14 mb-2 rounded p-2">
                <input id="name"     type="text" class="w-5/6 text-center outline-none mx-2 h-8 my-auto" placeholder="الاسم"/>
                <input id="username" type="text" class="w-5/6 text-center outline-none mx-2 h-8 my-auto" placeholder="اسم المستخدم"/>
                <input id="email"    type="text" class="w-5/6 text-center outline-none mx-2 h-8 my-auto" placeholder="البريد الالكتروني"/>
                <input id="password" type="text" class="w-5/6 text-center outline-none mx-2 h-8 my-auto" placeholder="الرمز"/>
                <button onclick={x=>AddAdmin()} class="border-flag-red text-flag-red  border rounded p-2 select-none">اضافة</button>
              </div>
              <div class="flex flex-col my-2 bg-white shadow  rounded p-2 mx-auto w-4/6">
                
                <For each={admins()}>{(admin)=>{ 
                  return(             
                      <div class="flex flex-row my-1 w-full">
                        <input hidden>{admin.id}</input>
                        <input readOnly onDblClick={x=>ToggleReadonly(x.target)} value={admin.name} class="w-5/6 text-center outline-none mx-2 h-8 my-auto"/>
                        <input readOnly onDblClick={x=>ToggleReadonly(x.target)} value={admin.username} class="w-5/6 text-center outline-none mx-2 h-8 my-auto"/>
                        <input readOnly onDblClick={x=>ToggleReadonly(x.target)} value={admin.email} class="w-5/6 text-center outline-none mx-2 h-8 my-auto"/>
                        <button class="border-flag-red mx-1 text-flag-red border rounded p-3 select-none">تعديل</button>
                        <button class="border-flag-red text-flag-red border rounded px-3 py-2 select-none">حذف</button>
                      </div>
                    )
                  }}</For>
                 
              </div>
           </div>
                  
      </main>  
    </AuthenticatedPage>
    );
  }
  