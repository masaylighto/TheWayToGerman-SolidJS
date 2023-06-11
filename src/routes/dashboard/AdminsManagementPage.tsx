import { AuthenticatedPage } from "~/components/AuthenticatedEnforcers";
import { AccessRoles } from "~/models/helper";
import DashboardNavbar from "./DashboardNavbar";

export default function AdminsManagementPage() {
    return (
      <AuthenticatedPage Role={AccessRoles.OwnerRole}>
      <main>
          <DashboardNavbar></DashboardNavbar>        
      </main>  
    </AuthenticatedPage>
    );
  }
  