import { useState } from "react";

export default function Hotel({ hotel }) {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <>
      <h2>
        {hotel.name}{" "}
        <button
          onClick={() => {
            setShowDetails((prevState) => !prevState);
          }}
        >
          Show {showDetails ? "less" : "more"}
        </button>
      </h2>
      {showDetails && (
        <div>
          {hotel.city} ({hotel.stars})
        </div>
      )}
    </>
  );
}
