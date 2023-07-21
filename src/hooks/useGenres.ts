// import useData from "./useData";
import genres from "../data/genres";

export interface Genre {
    id: number;
    name: string;
    image_background: string;
}

// replacing this line with the following line in order to preload, and avoid a loading spinner on the Genres sidebar.
// const useGenres = () => useData<Genre>('/genres');
const useGenres = () => ({ data: genres, isLoading: false, error: null });

export default useGenres;