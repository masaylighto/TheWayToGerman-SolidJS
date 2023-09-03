export default class CreateArticleDTO
{   Title: string;
    Overview: string;
    Content:string;   
    CategoryID:string;
    constructor(Title:string, Overview:string,Content:string, CategoryID:string) 
    {
        this.Title=Title;
        this.Overview=Overview;
        this.Content=Content;
        this.CategoryID=CategoryID;
    }    
}