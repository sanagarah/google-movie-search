import { useContext, useEffect, useState } from "react";
import TabsHeader from "src/components/common/tabs-header";
import { movieInfoType } from "src/data/types";
import Context from "src/hooks/context";
import { getMovieDetails } from "src/services/data-fetch";

export default function TabsHeaderContainer() {
  const { movieId } = useContext(Context);

  const [details, setDetails] = useState<movieInfoType>();

  useEffect(() => {
    if (movieId[0] !== 0) {
      getMovieDetails(movieId[0]).then((details) => {
        setDetails(details);
      });
    }
  }, [movieId]);

  return <div>{details && <TabsHeader movieDetails={details} />}</div>;
}
