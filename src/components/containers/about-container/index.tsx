import { useContext, useEffect, useState } from "react";
import About from "src/components/common/about";
import { movieDetailsInitials } from "src/data/constants";
import { recommendationsType } from "src/data/types";
import MovieDetailsContext from "src/hooks/contexts/MovieDetailsContext";
import MovieIdContext from "src/hooks/contexts/MovieIdContext";
import {
  getMovieCredits,
  getMovieRecommendations,
} from "src/services/data-fetch";

export default function AboutContainer() {
  const { movieId } = useContext(MovieIdContext);
  const { movieDetails } = useContext(MovieDetailsContext);

  const [productionCompanies, setProductionCompanies] = useState<string[]>();
  const [characters, seCharacters] = useState<string[]>();
  const [directors, setDirectors] = useState<string[]>();
  const [recommendations, setRecommendations] =
    useState<recommendationsType[]>();

  useEffect(() => {
    if (movieId[0] !== 0) {
      let productionCompanies = movieDetails.production_companies?.map(
        (company: Record<string, any>) => company.name
      );
      setProductionCompanies(productionCompanies);

      getMovieCredits(movieId[0]).then((credits) => {
        let characters = credits.cast.map(
          (credit: Record<string, any>) => credit.character
        );
        seCharacters(characters);

        let directors = credits.crew
          .filter((credit: Record<string, any>) => credit["job"] === "Director")
          .map((credit: Record<string, any>) => credit.name);
        setDirectors(directors);
      });

      getMovieRecommendations(movieId[0]).then((recommendation) => {
        setRecommendations(recommendation.results);
      });
    }
  }, [movieId, movieDetails]);

  return (
    <div>
      {movieDetails !== movieDetailsInitials && (
        <About
          characters={characters}
          productionCompanies={productionCompanies}
          directors={directors}
          recommendations={recommendations}
        />
      )}
    </div>
  );
}
