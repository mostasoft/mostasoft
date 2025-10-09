// app/loading.tsx
export default function Loading() {
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-white">
      <img
        src="/logo.png"
        alt="Logo"
        className="w-24 h-24 mb-4 animate-pulse"
      />
      <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-blue-500"></div>
      <p className="mt-4 text-gray-600 font-medium">Loading...</p>
    </div>
  );
}
