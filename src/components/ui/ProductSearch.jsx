import { useState } from "react";

function ProductSearch({ onSearch }) {
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(query);
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setQuery(value);

    // Show all products again when the search box is cleared
    if (value === "") {
      onSearch("");
    }
  };

  return (
    <div className="my-6">
      <form
        onSubmit={handleSubmit}
        className="flex items-center gap-3"
      >
        <input
          type="text"
          value={query}
          onChange={handleChange}
          placeholder="Search products..."
          className="flex-1 border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />

        <button
          type="submit"
          className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition-colors"
        >
          Search
        </button>
      </form>
    </div>
  );
}

export default ProductSearch;