export default class CreateArticleDTO
{   Title: string;
    Overview: string;
    Content:string;   
    CategoryID:string;
    Picture?:string;
    constructor(Title:string, Overview:string,Content:string, CategoryID:string,Picture:string) 
    {
        this.Title=Title;
        this.Overview=Overview;
        this.Content=Content;
        this.CategoryID=CategoryID;
        this.Picture=Picture;
    }    
}