export default function LinkAnimation({
  label,
  lineColor,
}: {
  label: string;
  lineColor: string;
}) {
  return (
    <p className="relative font-medium cursor-pointer group w-min whitespace-nowrap">
      {label}
      <span
        className={`absolute left-0 top-1/2 h-0.5 ${lineColor} w-0 group-hover:w-full transition-all duration-500 ease-out`}
      ></span>
    </p>
  );
}
