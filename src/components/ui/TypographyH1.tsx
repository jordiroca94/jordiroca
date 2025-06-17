export default function TypograhpyH1({ label }: { label: string }) {
  return (
    <div>
      <h1 className="text-3xl sm:text-4xl font-light text-gray-900 mb-4">
        {label}
      </h1>
      <div className="w-12 h-px bg-gray-300"></div>
    </div>
  );
}
