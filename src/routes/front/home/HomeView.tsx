import ArticlesApi from "../../../Api/Services/Article";
import ArticleViewer from "../../../components/ArticlesViewer";
import NavBar from "../../../components/NavBar";
import FrontNavbar from "../navbar/FrontNavbar";
import Home from "./Home";

export default  function HomeView(){
    Home.GetArticles()
    return (  <main class="min-h-full  bg-white flex flex-col h-fit">
        <div class="bg-flag-black">         <FrontNavbar></FrontNavbar></div>

        <div class="h-72 w-full bg-flag-black flex flex-col gap-6 justify-center items-center">
            <img src="src/imgs/Hussam.png"  class="w-44 rounded-full"/>
            <p class="text-white " > النجاح قرار وليس صدفة</p>
        </div>
        <ArticleViewer Articles={Home.ArticleList()}></ArticleViewer>
    </main>        
    )
}