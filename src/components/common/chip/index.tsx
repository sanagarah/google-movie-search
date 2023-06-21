interface ChipProps {
  text: string;
  isSearchCategory: boolean;
  path?: string;
}

export default function Chip({ text, isSearchCategory, path }: ChipProps) {
  const isActive = path && window.location.pathname.includes(path);

  return (
    <a
      className={`border px-3 py-2 me-2 rounded-full text-sm hover:filter hover:brightness-95 ${
        isSearchCategory
          ? "border-gray-300 bg-white text-black"
          : `${isActive && "border-red-200"} bg-red-100 text-red-200`
      }`}
      href={!isSearchCategory ? path : "/"}
    >
      <p>{text}</p>
    </a>
  );
}
