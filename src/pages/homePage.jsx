export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-100">
      
      {/* Navbar */}
      <nav className="bg-indigo-600 text-white px-8 py-4 flex justify-between items-center shadow-md">
        <h1 className="text-xl font-bold">MyApp</h1>
        <div className="space-x-6">
          <button className="hover:text-gray-200">Home</button>
          <button className="hover:text-gray-200">Profile</button>
          <button className="bg-white text-indigo-600 px-4 py-1 rounded-lg font-semibold hover:bg-gray-100">
            Logout
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="flex flex-col items-center justify-center text-center py-20 px-6">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">
          Welcome to Your Dashboard
        </h2>
        <p className="text-gray-600 max-w-xl mb-8">
          This is your home page after login. You can place your project
          features, stats, or shortcuts here.
        </p>

        <div className="flex gap-4">
          <button className="bg-indigo-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-indigo-700 transition">
            Get Started
          </button>

          <button className="border border-indigo-600 text-indigo-600 px-6 py-2 rounded-lg font-semibold hover:bg-indigo-50 transition">
            Learn More
          </button>
        </div>
      </div>

      {/* Cards Section */}
      <div className="grid md:grid-cols-3 gap-6 px-8 pb-16">
        
        <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
          <h3 className="text-xl font-semibold mb-2">Feature One</h3>
          <p className="text-gray-600">
            Add your first feature description here.
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
          <h3 className="text-xl font-semibold mb-2">Feature Two</h3>
          <p className="text-gray-600">
            Add your second feature description here.
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
          <h3 className="text-xl font-semibold mb-2">Feature Three</h3>
          <p className="text-gray-600">
            Add your third feature description here.
          </p>
        </div>

      </div>

    </div>
  );
}