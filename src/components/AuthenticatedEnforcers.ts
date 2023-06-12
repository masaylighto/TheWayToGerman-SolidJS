import { ComponentProps, JSX } from "solid-js";
import { Keys } from "~/helper";
import TokenPayload from "~/models/TokenPayload";
function AuthenticatedPage(props: ComponentProps<any> & { Role?:string }) : JSX.Element
{  
    let tokenPayload = GetTokenPayload();   
    if(!IsUserAuthenticated(tokenPayload,props.Role) ){
        location.href="/Login";
        return;   
    } 
    return (props.children)
}
function AuthenticatedComponent(props: ComponentProps<any> & { Role?:string , TokenPayload:TokenPayload}) : JSX.Element
{  
    if(!IsUserAuthenticated(props.TokenPayload,props.Role)){     
        return;   
    }   
    return (props.children)
}

function IsUserAuthenticated(tokenPayload:TokenPayload | undefined,role?:string) : boolean{
   
    if (tokenPayload == undefined) return false;
    return  IsTokenValid(tokenPayload) && IsTheCorrectUserRole(tokenPayload,role)
}

function IsTheCorrectUserRole(tokenPayload: TokenPayload, role?:string){   
 
    
    if(role == undefined){ // if not role specified then no role required and as that return true
        return true;
    }
    return  role === tokenPayload.Role
}
function IsTokenValid(tokenPayload: TokenPayload){
  
    return !tokenPayload.IsExpired()
}

function GetTokenPayload() : undefined | TokenPayload
{
    let jwt =  localStorage.getItem(Keys.AuthToken)
    if (!jwt) return undefined;
    var base64Url = jwt.split('.')[1];
    var base64 = base64Url.replace('-', '+').replace('_', '/');
    var decodedPayload = JSON.parse(atob(base64));
    return new TokenPayload(decodedPayload.role,decodedPayload.UserID,decodedPayload.UserName,decodedPayload.exp)
}





export {
    AuthenticatedPage,
    GetTokenPayload,
    AuthenticatedComponent
}