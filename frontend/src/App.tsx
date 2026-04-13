import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="flex min-h-screen">
      <Navbar />
      <main className="flex-1 bg-gray-100 p-8">
        <h1 className="text-2xl font-bold">Dashboard</h1>
      </main>
    </div>
  );
}

export default App;