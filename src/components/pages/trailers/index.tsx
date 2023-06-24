import { useTranslation } from "react-i18next";
import { AiOutlineMore } from "react-icons/ai";
import YouTubeTrailer from "src/components/common/youtube-trailer";
import { trailersType } from "src/data/types";

interface TrailersProps {
  trailers: trailersType[];
}

export default function Trailers({ trailers }: TrailersProps) {
  const [t] = useTranslation();
  return (
    <div>
      <h1 className="flex items-center text-xl">
        {t("titles.trailers")}
        <span>
          <AiOutlineMore />
        </span>
      </h1>
      {trailers.map((trailer, index) => (
        <div key={index} className="flex items-center">
          <YouTubeTrailer videoId={trailer.key} />
          <div className="ps-4">
            <p className="text-sm font-medium">{trailer.name}</p>
            <p className="mt-3 text-xs font-light text-gray-400">
              YouTube · Paramount Pictures ·{" "}
              {trailer.published_at.substring(
                0,
                trailer.published_at.indexOf("T")
              )}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
