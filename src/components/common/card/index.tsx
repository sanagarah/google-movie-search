interface CardProps {
  small: boolean;
  path: string;
  title: string;
  subTitle?: string;
}

export default function Card({ small, path, title, subTitle }: CardProps) {
  return (
    <div
      className={`${small ? "w-20 h-20" : "w-20 h-32"} h-16 mt-3 mb-16 mx-3`}
    >
      <img
        src={`https://image.tmdb.org/t/p/original/${path}`}
        alt="img"
        className="w-full h-full object-cover rounded"
      />
      <p className="text-xs font-normal mt-2">{title}</p>
      {subTitle && <p className="text-[10px] text-gray-400 mt-1">{subTitle}</p>}
    </div>
  );
}
