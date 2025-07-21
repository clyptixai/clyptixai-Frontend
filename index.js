export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center p-8">
      <h1 className="text-4xl font-bold mb-4">Welcome to ClyptixAI</h1>
      <p className="mb-6 text-lg text-gray-600">Turn your ideas into videos with AI</p>
      <input
        type="text"
        placeholder="Enter your prompt..."
        className="w-full max-w-md p-3 mb-4 border border-gray-300 rounded"
      />
      <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">
        Generate Video
      </button>
    </main>
  );
}