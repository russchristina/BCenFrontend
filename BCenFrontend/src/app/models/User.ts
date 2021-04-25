import { Responsibility } from './Responsibility';

export class User{
    public id:number;
    public name:String;
    public nick_name:String;
    public favorite_color:String;
    public favorite_candy:String;
    public food_allergies:String;
    public paid_in_full:boolean;
    public can_donate:boolean;
    public panels:String;
    public cosplays:String;
    public top_five_anime:String;
    public top_two_anime_characters:String;
    public top_five_kpop_groups:String;
    public top_two_ultimate_biases:String;
    public additional_info:String;

    constructor(id:number, name:String, nick_name:String, favorite_color:String, favorite_candy:String, food_allergies:String, paid_in_full:boolean, can_donate:boolean, panels:String, cosplays:String, top_five_anime:String, top_two_anime_characters:String, top_five_kpop_groups:String, top_two_ultimate_biases:String, additional_info:String){
        this.id = id;
        this.name = name;
        this.nick_name = nick_name;
        this.favorite_color = favorite_color;
        this.favorite_candy = favorite_candy;
        this.food_allergies = food_allergies;
        this.paid_in_full = paid_in_full;
        this.can_donate = can_donate;
        this.panels = panels;
        this.cosplays = cosplays;
        this.top_five_anime = top_five_anime;
        this.top_two_anime_characters = top_two_anime_characters;
        this.top_five_kpop_groups = top_five_kpop_groups;
        this.top_two_ultimate_biases = top_two_ultimate_biases;
        this.additional_info = additional_info;
    }
}