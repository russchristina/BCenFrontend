export class Responsibility{
    public id:number;
    public name:String;
    public description:String;
    public upper_limit:number;

    constructor(id:number, name:String, description:String, upper_limit:number){
        this.id = id;
        this.name = name;
        this.description = description;
        this.upper_limit;
    }
}