import { ComponentProps, JSXElement } from "solid-js";
import "../css/tailwind.css"
import "../css/core.css"
 function NotificationBox():JSXElement{

    return( <p hidden class="text-flag-red text-center fixed top-20 border left-5 bg-white w-40 h-fit p-2 rounded shadow" id="NotificationMessage"></p> )
}
function ShowNotification(message:string,color:string):void{

    let notificationBox = document.getElementById("NotificationMessage")! as HTMLParagraphElement;   
    notificationBox.innerHTML=message;
    notificationBox.style.color = color;
    notificationBox.style.borderColor = color;
    notificationBox.removeAttribute("hidden")

}
function HideNotification(delay:number=0):void{

    setTimeout(() => {
        let notificationBox = document.getElementById("NotificationMessage")! as HTMLParagraphElement;   
        notificationBox.innerHTML="";
        notificationBox.style.color = "black";
        notificationBox.style.borderColor = "white";
        notificationBox.setAttribute("hidden","true");
    }, delay);
  
}
export {
    NotificationBox,
    ShowNotification,
    HideNotification
}