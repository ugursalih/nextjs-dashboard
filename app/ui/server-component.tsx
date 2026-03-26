export default async function ServerComponent() {
    return (
      <div className="rounded-xl bg-gray-50 p-6 shadow-sm mb-4">
        <h2 className="text-xl font-bold mb-2">Server Component</h2>
        <p className="text-gray-600">
        This was rendered directly on the server. The point closest to the database continues!
        </p>
      </div>
    );
  }