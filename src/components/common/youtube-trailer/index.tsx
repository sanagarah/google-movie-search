import { BiPlay } from "react-icons/bi";

interface YouTubeTrailerProps {
  videoId: string;
}

export default function YouTubeTrailer({ videoId }: YouTubeTrailerProps) {
  const handlePictureClick = () => {
    window.open(`https://www.youtube.com/watch?v=${videoId}`, "_blank");
  };

  return (
    <div
      className="relative w-36 h-20 my-3 cursor-pointer"
      onClick={handlePictureClick}
    >
      <img
        src={`https://img.youtube.com/vi/${videoId}/0.jpg`}
        alt="YouTube Thumbnail"
        className="rounded w-full h-full object-cover"
      />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <BiPlay
          className="text-gray-500 bg-white rounded-full opacity-70"
          size={35}
        />
      </div>
    </div>
  );
}
