export default interface Movie extends Array<Movie>{
    id: number;
    adult:boolean;
    title: string;
    backdrop_path:string;
    original_language:string;
    overview:string;
    poster_path:string;
    media_type:string;
    genre_ids:number[];
    popularity:number;
    release_date:string;
    video:boolean;
    vote_average:number;
    vote_count:number;
}