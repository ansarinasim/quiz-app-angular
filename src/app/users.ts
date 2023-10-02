export class Users{

    public id: number;
    public first_name: string;
    public last_name: string;
    public email: string;
    public password: string;
    public confirm_password: string;
    public mobile: string;

    constructor(id:number,
        first_name:string,
        last_name:string,
        email:string,
        password:string,
        confirm_password:string,
        mobile:string
        ){

        this.id = id;
        this.first_name = first_name;
        this.last_name = last_name;
        this.email = email;
        this.password = password;
        this.confirm_password = confirm_password;
        this.mobile = mobile;
    }
}