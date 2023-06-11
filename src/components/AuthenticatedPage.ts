import { ComponentProps, JSX } from "solid-js";
import { Keys } from "~/Api/helper";
import TokenPayload from "~/models/TokenPayload";

function AuthenticatedPage(props: ComponentProps<any>) : JSX.Element
{
    if(localStorage.getItem(Keys.AuthToken)){
        return (props.children)
    } 
    location.href="/";
    return;
}
function GetTokenPayload() : void | TokenPayload
{
    let jwt =  localStorage.getItem(Keys.AuthToken)
    if (!jwt) return;
    var base64Url = jwt.split('.')[1];
    var base64 = base64Url.replace('-', '+').replace('_', '/');
    var decodedPayload = JSON.parse(atob(base64));
    return new TokenPayload(decodedPayload.role,decodedPayload.UserID,decodedPayload.UserName)
}
export {
    AuthenticatedPage,
    GetTokenPayload
}