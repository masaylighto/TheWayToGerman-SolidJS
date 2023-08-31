import { AuthenticatedPage } from "~/components/AuthenticatedEnforcers";
import { NotificationBox } from "~/components/Notification";
import { AccessRoles } from "~/helper";
import DashboardNavbar from "../dashboards/DashboardNavbar";
import { Quill } from "quill";

import DocWriter from "~/components/DocWritter";

function ArticleCell(Article:any){
    return <></>
}
 

export default function ArticleView() {   

    return (
      <AuthenticatedPage Role={AccessRoles.OwnerRole}>
        <main style={"background-color:#f5f5f5"} class="min-h-full h-fit">
          <NotificationBox/>               
          <DashboardNavbar/>
          <div class="flex flex-col">    
          <h1 class=" text-2xl mx-auto mt-10">اكتب مقالة جديدة</h1>     
          <div id="editor-container" dir="ltr"  class="bg-white shadow   w-5/6 h-96 mx-auto mt-10 ">
            <DocWriter  ></DocWriter>
            </div>     
          </div>                  
        </main>  
      </AuthenticatedPage>
    );
  }