import ServerComponent from '@/app/ui/server-component';
import ClientComponent from '@/app/ui/client-component';

export default async function Page() {
  // 1. Fetching weather data for Madison, WI
  const response = await fetch(
    'https://www.7timer.info/bin/astro.php?lon=-89.4512&lat=43.0334&ac=0&unit=metric&output=json'
  );
  const data = await response.json();
  
  // 2. Getting the current temperature (temp2m) from the first data series
  const currentTemp = data.dataseries[0].temp2m;

  return (
    <main className="p-10 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-8 text-gray-800">Project 4: Weather Integration</h1>
      
      <div className="flex flex-col gap-8 max-w-2xl">
        {/* Passing the temperature as a prop to both components */}
        <ServerComponent temp={currentTemp} />
        <ClientComponent temp={currentTemp} />
      </div>
    </main>
  );
}