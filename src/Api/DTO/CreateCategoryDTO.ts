export default class CreateCategoryDTO
{   Name: string;
    LanguageID: string;
    constructor(name:string, LanguageID:string) 
    {
        this.Name=name;
        this.LanguageID=LanguageID;

    }    
}