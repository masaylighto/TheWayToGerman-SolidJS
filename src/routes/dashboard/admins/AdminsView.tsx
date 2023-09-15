import DashboardNavbar from "../navbar/DashboardNavbar";
import "../../../css/tailwind.css"
import "../../../css/core.css"
import { For, JSX, createEffect} from "solid-js";
import Admin from "./Admins";
import GetAdminsResponse from "../../../Api/ResponseObject/GetAdminsResponse";
import { AccessRoles, ToggleReadonly } from "../../../helper";
import { AuthenticatedPage } from "../../../components/AuthenticatedEnforcers";
import { NotificationBox } from "../../../components/Notification";


/// Ui
function AdminRow(admin:GetAdminsResponse):JSX.Element{
  return (
      <div class="flex flex-row my-1 w-full">
        <input hidden>{admin.id}</input>
        <input readOnly onDblClick={x=>ToggleReadonly(x.target)} value={admin.name} class="w-5/6 text-center outline-none mx-2 h-8 my-auto"/>
        <input readOnly onDblClick={x=>ToggleReadonly(x.target)} value={admin.username} class="w-5/6 text-center outline-none mx-2 h-8 my-auto"/>
        <input readOnly onDblClick={x=>ToggleReadonly(x.target)} value={admin.email} class="w-5/6 text-center outline-none mx-2 h-8 my-auto"/>
        <button onclick={(event)=>Admin.Delete(event.target,admin.id)} class="border-flag-red text-flag-red border rounded px-3 py-2 select-none">حذف</button>
      </div>
  )
}
export default function AdminsView() {  
  Admin.Get();
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
            <button onclick={x=>Admin.Add()} class="border-flag-red text-flag-red  border rounded p-2 select-none">اضافة</button>
          </div>
          <div id="AdminTable" class="flex flex-col my-2 bg-white shadow  rounded p-2 mx-auto w-4/6">
            <For each={Admin.List()}>{(admin)=>AdminRow(admin)}</For>
          </div>
        </div>                  
      </main>  
    </AuthenticatedPage>
  );
}
