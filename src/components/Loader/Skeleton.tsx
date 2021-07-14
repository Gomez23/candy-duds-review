const Skeleton = ({ numberOfRows = 4 }) => {
  const rows = new Array(numberOfRows).fill('');
  return (
    <div className="h-full bg-inherit">
          <div className="w-full">
            <div className="bg-white rounded">
              <div className="grid grid-rows-4 gap-4 mt-2">
                {rows.map((_, i) => (
                  <div
                    key={`skeleton_${i}`}
                    className="grid grid-cols-6 gap-4 mt-2"
                  >
                    <div className="h-16 bg-gray-200 rounded animate-pulse mb-2"></div>
                    <div className="h-16 col-span-3 bg-gray-200 rounded animate-pulse mb-2"></div>
                    <div className="h-8 bg-gray-200 rounded animate-pulse mb-2"></div>
                    <div className="h-8 bg-gray-200 rounded animate-pulse mb-2"></div>
                  </div>
                ))}
              </div>
            </div>
      </div>
    </div>
  );
};
export default Skeleton;
