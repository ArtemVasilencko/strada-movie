import { FormEvent, ChangeEvent, MouseEvent } from "react";
interface FilmCardType {
  id: number;
  poster_path: string;
  title: string;
  vote_average: number;
}
export interface FilmCardProps {
  image: string;
  movieName: string;
  rating: boolean;
  isFavorite: boolean;
  token: string | null;
  id: number;
  onCardClick: (id: number) => void;
  favorite: boolean;
  onStarClick: (e: MouseEvent<HTMLElement>) => void;
}
export interface FilmCardsListProps {
  loading: boolean | null;
  moviesData: FilmCardType[];
  favoriteMovies: number[];
  onCardClick: (id: number) => void;
}
interface Genre {
  id: number;
  name: string;
}
export interface GenresProps {
  genres: Genre[];
  activeGenres: Genre[];
  handleGenresChange: (
    event: ChangeEvent<{}>,
    value: Genre[],
    reason: string
  ) => void;
}
export interface RangeSliderProps {
  value: number | number[];
  onChange: (event: Event, value: number | number[]) => void;
}

export interface SearchMovieProps {
  handleSubmit: (e: FormEvent<HTMLFormElement>) => void;
  movieName: string;
  setMovieName: (value: string) => void;
}

export interface SelectProps {
  data: { id: number; text: string; value: string }[];
  header: string;
  onChange: (event: ChangeEvent<{ value: unknown }>) => void;
  activeSelect: string;
}

export interface FilterProps {
  resetFilters: (event: MouseEvent<HTMLButtonElement>) => void;
  searchMovieUrl: string;
}

export interface HeaderProps {
  headerTitle: string;
  handleOpen?: (event: MouseEvent<HTMLButtonElement>) => void;
}
