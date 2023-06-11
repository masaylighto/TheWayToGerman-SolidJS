export default class TokenPayload
{
    /**
     *
     */
    constructor(role:string,userID:string,userName:string,expiration:number) {
        const SecondToMillisecond=1000
        this.Role=role;
        this.UserID=userID;
        this.UserName=userName;
        this.ExpirationDate =  new Date(expiration * SecondToMillisecond)
    }
    Role:string;
    UserID:string;
    UserName:string;
    ExpirationDate!:Date;
    IsExpired():boolean     {
        return this.ExpirationDate < new Date()
    } 

}