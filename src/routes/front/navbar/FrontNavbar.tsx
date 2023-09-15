
import "../../../css/tailwind.css";
import "../../../css/core.css";
import NavBar from "../../../components/NavBar";
import NavButton from "../../../components/NavButton";

export default function FrontNavbar(props:{class?:string}){


    return (
         <NavBar FlexDirection="flex-row" Class={"h-fit w-fit mx-auto border-none rounded-full shadow-none  justify-center "+props.class}>    
       
            <NavButton class="text-gray-300" onClick={()=> { location.href= "/" }}>
             الصفحة الرئيسية
            </NavButton>  
            <NavButton class="text-gray-300" onClick={()=> { location.href= "/" }}>
             مقالات
            </NavButton> 
            <NavButton class="text-gray-300" onClick={()=> { location.href= "/" }}>
             فديوهات
            </NavButton> 
            <NavButton class="text-gray-300" onClick={()=> { location.href= "/" }}>
             حولنا
            </NavButton> 
             <NavButton class="text-gray-300" onClick={()=> { location.href= "/Login" }}>
             تسجيل دخول
            </NavButton>  
         </NavBar>
    )
}