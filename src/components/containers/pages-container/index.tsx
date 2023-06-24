import { useContext, useEffect, useState } from "react";
import MovieSearchLayout from "src/components/layouts/movie-search-layout";
import Cast from "src/components/pages/cast";
import Movies from "src/components/pages/movies";
import Overview from "src/components/pages/overview";
import Trailers from "src/components/pages/trailers";
import { movieDetailsInitials } from "src/data/constants";
import {
  castDetailsType,
  movieDetailsType,
  trailersType,
} from "src/data/types";
import MovieDetailsContext from "src/hooks/contexts/MovieDetailsContext";
import MovieIdContext from "src/hooks/contexts/MovieIdContext";
import TabContext from "src/hooks/contexts/tabContext";
import {
  getMovieCredits,
  getMovieDetails,
  getMovieTrailers,
} from "src/services/data-fetch";

export default function PagesContainer() {
  const { activeTab } = useContext(TabContext);
  const { movieId } = useContext(MovieIdContext);
  const { movieDetails } = useContext(MovieDetailsContext);

  const [details, setDetails] = useState<movieDetailsType[]>([]);
  const [cast, setCast] = useState<castDetailsType[]>([]);
  const [trailers, setTrailers] = useState<trailersType[]>([]);

  const getPageByCurrentPath = () => {
    if (details.length > 0) {
      if (activeTab === 1) {
        return <Movies details={details} />;
      } else if (activeTab === 2) {
        return <Cast cast={cast} />;
      } else if (activeTab === 3) {
        return <Trailers trailers={trailers} />;
      } else return <Overview details={details} cast={cast} />;
    }
  };

  useEffect(() => {
    setDetails([]);
    if (
      movieId[0] !== 0 &&
      movieDetails !== movieDetailsInitials &&
      details.length < 2
    ) {
      setDetails((prevArray: movieDetailsType[]) => [
        ...prevArray,
        movieDetails,
      ]);

      getMovieCredits(movieId[0]).then((credits) => {
        let cast = credits.cast.filter(
          (credit: castDetailsType) =>
            credit["known_for_department"] === "Acting"
        );
        setCast(cast);
      });
      getMovieTrailers(movieId[0]).then((trailers) => {
        let youtubeTrailers = trailers.results.filter(
          (trailer: trailersType) => trailer["site"] === "YouTube"
        );
        setTrailers(youtubeTrailers);
      });
    }
    if (
      movieId.length > 1 &&
      movieDetails !== movieDetailsInitials &&
      details.length < 2
    ) {
      getMovieDetails(movieId[1]).then((secondMovieDetails) => {
        setDetails((prevArray: movieDetailsType[]) => [
          ...prevArray,
          secondMovieDetails,
        ]);
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [movieDetails, movieId]);

  return <MovieSearchLayout>{getPageByCurrentPath()}</MovieSearchLayout>;
}
