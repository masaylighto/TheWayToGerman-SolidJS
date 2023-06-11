import {AuthenticatedComponent, AuthenticatedPage, GetTokenPayload} from "~/components/AuthenticatedEnforcers";
import "../../css/tailwind.css";
import "../../css/core.css";
import NavBar from "~/components/NavBar";
import NavButton from "~/components/NavButton";
import { AccessRoles } from "~/models/helper";
export default function DashboardNavbar(){
 let tokenPayload = GetTokenPayload();

    return (
    <AuthenticatedComponent TokenPayload={tokenPayload}>
         <NavBar>    
            <AuthenticatedComponent TokenPayload={tokenPayload} Role={AccessRoles.OwnerRole}>    
            <NavButton onClick={()=> { location.href= "/dashboard/admin" }}>
             المسؤولين
            </NavButton>
            </AuthenticatedComponent>
            <AuthenticatedComponent TokenPayload={tokenPayload}>  
            <NavButton  onClick={()=> { location.href= "/dashboard/categories" }}>
               التصنيفات 
            </NavButton>  
            </AuthenticatedComponent> 
            <AuthenticatedComponent TokenPayload={tokenPayload} >  
            <NavButton onClick={()=> { location.href= "/dashboard/articles" }}>
               المقالات 
            </NavButton> 
            </AuthenticatedComponent>
            <AuthenticatedComponent TokenPayload={tokenPayload} Role={AccessRoles.OwnerRole}>  
            <NavButton onClick={()=> { location.href= "/dashboard/youtube" }}>
               اليوتيوب 
            </NavButton>   
            </AuthenticatedComponent>
            <AuthenticatedComponent TokenPayload={tokenPayload} Role={AccessRoles.OwnerRole}>  
            <NavButton  onClick={()=> { location.href= "/dashboard/aboutus" }}>
               معلومات الموقع 
            </NavButton> 
            </AuthenticatedComponent>
            <AuthenticatedComponent TokenPayload={tokenPayload} Role={AccessRoles.OwnerRole}>  
            <NavButton  onClick={()=> { location.href= "/dashboard/meetings" }}>
               المواعيد 
            </NavButton> 
            </AuthenticatedComponent>
            <AuthenticatedComponent TokenPayload={tokenPayload}>  
            <NavButton  onClick={()=> { location.href= "/dashboard/mails" }}>
               المراسلات البريدية 
            </NavButton>  
            </AuthenticatedComponent>      
         </NavBar>
    </AuthenticatedComponent>
    )
}