import { useContext, useEffect, useState } from "react";
import Overview from "src/components/pages/overview";
import { castDetailsType, movieDetailsType } from "src/data/types";
import Context from "src/hooks/context";
import { getMovieCredits, getMovieDetails } from "src/services/data-fetch";

export default function OverviewContainer() {
  const { movieId } = useContext(Context);

  const [details, setDetails] = useState<movieDetailsType[]>([]);
  const [cast, setCast] = useState<castDetailsType[]>([]);

  useEffect(() => {
    setDetails([]);
    if (movieId[0] !== 0) {
      getMovieDetails(movieId[0]).then((firstMovieDetails) => {
        setDetails((prevArray: movieDetailsType[]) => [
          ...prevArray,
          firstMovieDetails,
        ]);
      });
      getMovieCredits(movieId[0]).then((credits) => {
        let cast = credits.cast.filter(
          (credit: castDetailsType) =>
            credit["known_for_department"] === "Acting"
        );
        setCast(cast);
      });
    }
    if (movieId.length > 1) {
      getMovieDetails(movieId[1]).then((secondMovieDetails) => {
        setDetails((prevArray: movieDetailsType[]) => [
          ...prevArray,
          secondMovieDetails,
        ]);
      });
    }
  }, [movieId]);

  return (
    <div>
      {details.length > 0 && <Overview details={details} cast={cast} />}
    </div>
  );
}
