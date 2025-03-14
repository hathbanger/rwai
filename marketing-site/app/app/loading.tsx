export default function Loading() {
  return (
    <div className="flex items-center justify-center min-h-[60vh]">
      <div className="flex flex-col items-center space-y-4">
        <div className="w-12 h-12 rounded-full border-4 border-gray-200 border-t-blue-500 animate-spin"></div>
        <p className="text-lg font-medium text-gray-700">Loading dashboard...</p>
      </div>
    </div>
  );
} 