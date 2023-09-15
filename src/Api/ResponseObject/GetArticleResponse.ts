export default class GetArticlesResponse{
    id!:string;
    title!:string;
    overview!:string;
    content!:string;
    picture!:string;
    createDate!:Date;
    category!:string;
    author!:string;
    getDate():string {
        console.log(this.createDate)
        return  new Date(this.createDate).toLocaleDateString('ar', { year:"numeric", month:"short", day:"numeric"});
    }
}