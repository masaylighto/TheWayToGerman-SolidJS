
function QualifyPath(endpoint:string,apiVersion:string="v1") : string
{
    return import.meta.env.VITE_Api+"/api/"+apiVersion+"/"+endpoint;
}
const Keys = {
    AuthToken:"JwtToken",
   
}
const AccessRoles = {

    OwnerRole:"Owner",
    AdminRole:"Admin",
}
function ToggleReadonly(target : Element):void{
    if(target.hasAttribute("readOnly")){
        target.removeAttribute("readOnly")
        return;
    }
    target.setAttribute("readOnly","")
}
export {
    QualifyPath,
    Keys,
    AccessRoles,
    ToggleReadonly
}