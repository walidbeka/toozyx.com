export default function Loading() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#3D49A8] to-[#6874E8] animate-pulse" />
        <p className="text-sm text-gray-400">Loading...</p>
      </div>
    </div>
  );
}
