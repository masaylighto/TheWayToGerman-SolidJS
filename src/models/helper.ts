
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
export {
    QualifyPath,
    Keys,
    AccessRoles
}