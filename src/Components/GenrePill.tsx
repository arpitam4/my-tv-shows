const GenrePill = ({ name }: { name: string }) => {
  return (
    <div className="px-3 py-1 bg-gray-300 text-black font-semibold rounded-sm m-1">
      {name}
    </div>
  );
};

export default GenrePill;
