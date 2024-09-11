import { useState, useEffect } from "react";
import SearchBar from "../Components/SearchBar";
import ShowCard from "../Components/ShowCard";
import { searchShows } from "../api"; // Using searchShows function from API

function ShowListPage() {
  const [shows, setShows] = useState<any[]>([]);
  const [query, setQuery] = useState("");

  // Fetch shows when query changes
  useEffect(() => {
    if (query) {
      searchShows(query).then((data) => setShows(data));
    }
  }, [query]);

  return (
    <div className="mt-2">
      <SearchBar onSearch={(value) => setQuery(value)} />
      <div className="flex flex-wrap justify-center">
        {shows.length ? (
          shows.map((show) => <ShowCard key={show.id} show={show} />)
        ) : (
          <p>No shows found. Try searching for something else.</p>
        )}
      </div>
    </div>
  );
}

export default ShowListPage;
