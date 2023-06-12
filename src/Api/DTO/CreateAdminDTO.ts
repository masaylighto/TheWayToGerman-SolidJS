export default class CreateAdminDTO
{   Name: string;
    Username: string;
    Email:string;   
    Password:string;
    constructor(name:string, email:string,username:string, password:string) 
    {
        this.Name=name;
        this.Username=username;
        this.Email=email;
        this.Password=password;
    }    
}