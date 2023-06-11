import "../../css/tailwind.css";
import "../../css/core.css";
import DashboardNavbar from "./DashboardNavbar";
import { AuthenticatedPage } from "~/components/AuthenticatedEnforcers";
import { AccessRoles } from "~/models/helper";
export default function MainPage(){

    return (
        <AuthenticatedPage Role={AccessRoles.OwnerRole}>
        <main class="h-full w-full">
            <DashboardNavbar></DashboardNavbar>
            <div class="h-full w-full flex justify-center items-center">
                <p class="text-4xl text-center  p-4 flex-wrap w-56 border rounded border-flag-red text-flag-red">اهلا بك الى صفحة الادارة</p>
            </div>
        </main>
        </AuthenticatedPage>
    )

}