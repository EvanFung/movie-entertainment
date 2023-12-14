export default interface Review {
        id: number;
        title: string;
        body: string;
        createdAt: string;
        userId: string;
        movieId: number;
        updatedAt: string;
        rating:number;
        user: {
            email:string;
            name:string;
            image:string;
        }
}