import { useContext, useEffect, useState } from "react";
import SearchBox from "src/components/common/search-box";
import Context from "src/hooks/context";
import { getMovieIds } from "src/services/data-fetch";

export default function SearchBoxContainer() {
  const { changeMoveId } = useContext(Context);

  const [searchText, setSearchText] = useState("");

  const pullSearchText = (searchText: string) => {
    setSearchText(searchText);
  };

  useEffect(() => {
    let moviesId: number[] = [];
    if (searchText !== "") {
      getMovieIds(searchText).then((ids) => {
        let result = ids.results;
        if (result.length > 0) {
          if (result.length > 1) {
            moviesId.push(result[0].id);
            moviesId.push(result[1].id);
          } else {
            moviesId.push(result[0].id);
          }
        }
        changeMoveId(moviesId);
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchText]);

  return <SearchBox handleSearch={pullSearchText} />;
}
