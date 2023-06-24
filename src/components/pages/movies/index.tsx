import Card from "src/components/common/card";
import { movieDetailsType } from "src/data/types";
import { useTranslation } from "react-i18next";
interface MoviesProps {
  details: movieDetailsType[];
}

export default function Movies({ details }: MoviesProps) {
  const [t] = useTranslation();

  return (
    <div>
      <h1 className="flex items-center gap-2 text-xl">{t("titles.movies")}</h1>
      <div className="flex">
        {details?.map((moviesDetails, index) => (
          <Card
            key={index}
            small={false}
            path={moviesDetails?.poster_path}
            title={moviesDetails?.original_title}
            subTitle={moviesDetails?.release_date?.slice(0, 4)}
          />
        ))}
      </div>
    </div>
  );
}
