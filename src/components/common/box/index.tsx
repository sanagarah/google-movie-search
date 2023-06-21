interface BoxProps {
  text: string;
}

export default function Box({ text }: BoxProps) {
  return (
    <button className="px-3 py-2 rounded text-gray-400 bg-white text-sm hover:filter hover:brightness-95 hover:text-black">
      <p>{text}</p>
    </button>
  );
}
