export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-white via-blue-100 to-white text-center p-6 font-sans text-gray-800">
      <h1 className="text-5xl font-extrabold text-blue-700 mb-4 drop-shadow-lg">Welcome to ClyptixAI</h1>
      <p className="mb-6 text-lg text-gray-600">Turn your ideas into videos with AI</p>
      <input
        type="text"
        placeholder="Enter your prompt..."
        className="w-full max-w-md p-3 mb-4 border border-gray-300 rounded shadow-sm"
      />
      <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition duration-300">
        Generate Video
      </button>
    </main>
  );
}