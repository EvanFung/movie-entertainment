// CONSTANTS
export const TMDB_API_KEY = process.env.TMDB_API_KEY
export const TMDB_ENDPOINT="https://api.themoviedb.org/3"
export const TMDB_IMAGE_ENDPOINT="https://image.tmdb.org/t/p/"

export const pathToSearchAll = '/search/'
export const pathToSearchMovie = '/search/movie/'
export const pathToSearchTV = '/search/tv/'

//Size of the image
export enum backdropSize {
    small = 'w300',
    medium = 'w500',
    large = 'w780',
    extraLarge = 'w1280',
    original = 'original'
}

export enum posterSize {
    small = 'w92',
    medium = 'w154',
    large = 'w185',
    extraLarge = 'w342',
    extraExtraLarge = 'w500',
    extraExtraExtraLarge = 'w780',
    original = 'original'
}