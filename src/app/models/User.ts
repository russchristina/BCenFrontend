import { Responsibility } from './Responsibility';

export class User{
    public id:number;
    public name:String;
    public nickname:String;
    public password:String;
    public favoritecolor:String;
    public favoritecandy:String;
    public foodallergies:String;
    public paidinfull:boolean;
    public candonate:boolean;
    public panels:String;
    public cosplays:String;
    public topfiveanime:String;
    public toptwoanimecharacters:String;
    public topfivekpopgroups:String;
    public toptwoultimatebiases:String;
    public additionalinfo:String;

    constructor(id:number, name:String, nick_name:String, password:String, favorite_color:String, favorite_candy:String, food_allergies:String, paid_in_full:boolean, can_donate:boolean, panels:String, cosplays:String, top_five_anime:String, top_two_anime_characters:String, top_five_kpop_groups:String, top_two_ultimate_biases:String, additional_info:String){
        this.id = id;
        this.name = name;
        this.nickname = nick_name;
        this.password = password;
        this.favoritecolor = favorite_color;
        this.favoritecandy = favorite_candy;
        this.foodallergies = food_allergies;
        this.paidinfull = paid_in_full;
        this.candonate = can_donate;
        this.panels = panels;
        this.cosplays = cosplays;
        this.topfiveanime = top_five_anime;
        this.toptwoanimecharacters = top_two_anime_characters;
        this.topfivekpopgroups = top_five_kpop_groups;
        this.toptwoultimatebiases = top_two_ultimate_biases;
        this.additionalinfo = additional_info;
    }
}