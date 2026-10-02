import ServerComponent from '@/app/ui/server-component';
import ClientComponent from '@/app/ui/client-component';

async function getTemperature(): Promise<number | null> {
  try {
    const response = await fetch(
      'https://www.7timer.info/bin/astro.php?lon=-89.4512&lat=43.0334&ac=0&unit=metric&output=json',
      {
        cache: 'no-store',
        signal: AbortSignal.timeout(10000),
      },
    );

    if (!response.ok) {
      return null;
    }

    const data = await response.json();
    const temperature = data?.dataseries?.[0]?.temp2m;

    if (
      typeof temperature !== 'number' ||
      !Number.isFinite(temperature)
    ) {
      return null;
    }

    return temperature;
  } catch {
    return null;
  }
}

export default async function Page() {
  const temperature = await getTemperature();

  return (
    <main className="min-h-screen bg-gray-100 p-6 md:p-10">
      <h1 className="mb-8 text-3xl font-bold text-gray-800">
        Madison Weather Dashboard
      </h1>

      {temperature === null ? (
        <div
          role="alert"
          className="max-w-2xl rounded-2xl border border-red-200 bg-red-50 p-6 text-red-800"
        >
          <h2 className="mb-2 text-xl font-semibold">
            Weather data is unavailable
          </h2>
          <p>
            We could not load the weather forecast. Please refresh
            the page to try again.
          </p>
        </div>
      ) : (
        <div className="flex max-w-2xl flex-col gap-8">
          <ServerComponent temp={temperature} />
          <ClientComponent temp={temperature} />
        </div>
      )}
    </main>
  );
}