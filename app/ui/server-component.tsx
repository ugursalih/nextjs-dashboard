export default function ServerComponent({ temp }: { temp: number }) {
  return (
    <div className="rounded-2xl bg-white p-8 shadow-md border border-gray-200">
      <h2 className="text-xl font-semibold mb-4 text-gray-700">Madison Weather (Server-Side)</h2>
      <div className="flex items-center gap-4">
        <span className="text-5xl font-extrabold text-blue-600">{temp}°C</span>
        <p className="text-sm text-gray-500 leading-tight">
          This data was fetched on the server <br /> and rendered as static HTML.
        </p>
      </div>
    </div>
  );
}