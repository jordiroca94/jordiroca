const TypograhpyH2 = ({ label }: { label: string }) => {
  return (
    <div className="mb-16">
      <h2 className="text-4xl font-light text-gray-900 mb-4">{label}</h2>
      <div className="w-12 h-px bg-gray-300"></div>
    </div>
  );
};

export default TypograhpyH2;
