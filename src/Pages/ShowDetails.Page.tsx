import { FC, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { IoMdArrowRoundBack } from "react-icons/io"; // Import the icon
import CastCard from "../Components/CastCard";
import GenrePill from "../Components/GenrePill";
import axios from "axios";

const ShowDetailPage: FC = () => {
  const { show_id } = useParams<{ show_id: string }>();
  const [showDetails, setShowDetails] = useState<any>(null);
  const [cast, setCast] = useState<any[]>([]);
  const navigate = useNavigate(); // Use navigate hook

  useEffect(() => {
    if (show_id) {
      // Fetch show details
      axios.get(`https://api.tvmaze.com/shows/${show_id}`).then((response) => {
        setShowDetails(response.data);
      });

      // Fetch cast information
      axios
        .get(`https://api.tvmaze.com/shows/${show_id}/cast`)
        .then((response) => {
          setCast(response.data);
        });
    }
  }, [show_id]);

  if (!showDetails || cast.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div className="mt-2">
      {/* Back button */}
      <button
        className="flex items-center text-gray-700 hover:text-gray-900 mb-4"
        onClick={() => navigate(-1)} // Go back to the previous page
      >
        <IoMdArrowRoundBack size={24} className="mr-2" />
        Back
      </button>

      <h2 className="text-4xl font-semibold tracking-wide">
        {showDetails.name}
      </h2>

      {/* Genres in grey rectangular boxes */}
      <div className="flex space-x-3 my-2">
        {showDetails.genres.map((genre: string) => (
          <GenrePill key={genre} name={genre} />
        ))}
      </div>

      <div className="mt-2 flex">
        <img
          src={
            showDetails.image
              ? showDetails.image.medium
              : "https://via.placeholder.com/210"
          }
          alt={showDetails.name}
          className="object-cover object-center w-full rounded-t-md h-72"
        />
        <div className="ml-2">
          <p>
            {showDetails.summary
              ? showDetails.summary.replace(/(<([^>]+)>)/gi, "")
              : "No summary available."}
          </p>
          <p className="mt-2 text-lg font-bold border border-gray-700 rounded-md px-2 py-1 max-w-max">
            Rating:{" "}
            <span className="text-gray-700">
              {showDetails.rating.average || "N/A"}/10
            </span>
          </p>
        </div>
      </div>

      <div className="mt-2">
        <h4 className="text-2xl font-semibold tracking-wide">Cast</h4>
        <div className="flex flex-wrap">
          {cast.map((member: any) => (
            <CastCard
              key={member.person.id}
              avatarLink={
                member.person.image
                  ? member.person.image.medium
                  : "https://via.placeholder.com/210"
              }
              name={member.person.name}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShowDetailPage;
