export default function Loading() {
    return (
      <main
        aria-busy="true"
        className="min-h-screen bg-gray-100 p-6 md:p-10"
      >
        <h1 className="mb-8 text-3xl font-bold text-gray-800">
          Madison Weather Dashboard
        </h1>
  
        <div
          role="status"
          className="max-w-2xl rounded-2xl bg-white p-8 shadow-md"
        >
          <p className="font-medium text-gray-700">
            Loading weather forecast...
          </p>
  
          <div
            aria-hidden="true"
            className="mt-6 h-12 w-32 animate-pulse rounded-lg bg-gray-200"
          />
        </div>
      </main>
    );
  }