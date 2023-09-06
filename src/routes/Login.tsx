import "./../css/tailwind.css";
import "./../css/core.css";
import "./../css/login.css";
import {type Component } from 'solid-js';
import Auth from "./../Api/Services/Login";
import LoginDTO from "./../Api/DTO/LoginDTO"
import { Colors, Keys } from "./../helper";
import ErrorResponse from "./../Api/ResponseObject/ErrorResponse";
import LoginResponse from "./../Api/ResponseObject/LoginResponse";
import { NotificationBox, ShowNotification } from "./../components/Notification";
const Field :Component<{id:string,placeholder:string,type:string,imageCssClass:string}>=(props)=>{

    return (
        <div class=" relative h-8 w-4/5   mx-auto my-5 flex flex-row-reverse">
            <div  class={"border border-flag-red rounded-full absolute h-8 -right-8 w-8 "+props.imageCssClass}></div>
            <input title={props.placeholder}  id={props.id} required class="w-full border-flag-red rounded  border-b input-no-bg outline-none  h-full text-center" type={props.type} placeholder={props.placeholder}></input>
        </div> 
    )
}

function Login(){
  var username= document.getElementById("Username") as HTMLInputElement
  var Password= document.getElementById("Password") as HTMLInputElement
  let dto = new LoginDTO(username.value,Password.value)
  Auth(dto).then((response)=>  { 
      if ("jwtToken" in response)  {
        ShowNotification("Login Succeed",Colors.Green)   
        localStorage.setItem(Keys.AuthToken,(response as LoginResponse).jwtToken);
        location.href ="/dashboard";     
        return;
      }
      ShowNotification((response as ErrorResponse).detail,Colors.Green) ;
  });
}
export default function LoginPage() {
    return (
      <div style={"background-color:#7988977d"} class="w-full h-full bg-germanwave  flex justify-center items-center">
        <main   class=" w-80 rounded  shadow-md bg-white/80 justify-between py-6 flex flex-col" >
           <NotificationBox/> 
           <p class="text-center select-none text-xl mb-5 text-flag-red" >مرحبا بك</p>
           <p class="text-center select-none mx-auto text-sm mb-5 w-40 text-flag-black">  في موقع الطريق الى المانيا</p>
           <Field  imageCssClass="Person-img" type="text" id="Username" placeholder="اسم المستخدم"></Field>
           <Field  imageCssClass="Key-img" type="password" id="Password" placeholder="الرمز"></Field>
           <button type="button" onclick={()=>Login()} class="rounded select-none border border-flag-red w-1/4 h-8 text-flag-red my-5 mx-auto  text-lg font-thin">دخول</button>
        </main>
      </div>
    );
  }
  