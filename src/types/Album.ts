export interface Albums{
    titre:string;
    NombreAlbume:string;
    prix:{
        $numberDecimal:string
    };
    periode:string;
    etat:boolean;

}[]


export interface Album{
    titre:string;
    NombreAlbume:string;
    prix:{
        $numberDecimal:string
    };
    periode:string;
    etat:boolean;
}