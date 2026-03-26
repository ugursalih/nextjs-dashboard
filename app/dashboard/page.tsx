import ServerComponent from '@/app/ui/server-component';
import ClientComponent from '@/app/ui/client-component';

export default function Page() {
  return (
    <main>
      <h1 className="text-2xl font-bold mb-4">Dashboard Page</h1>
      
      {/* Bileşenleri burada çağırıyoruz: */}
      <ServerComponent />
      <ClientComponent />
    </main>
  );
}