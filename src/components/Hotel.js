import { useState } from "react";
import Subscription from "./Subscription";

export default function Hotel({ hotel }) {
  const [showDetails, setShowDetails] = useState(false);
  const [showSubscription, setShowSubscription] = useState(false);

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
          <div>
            {hotel.city} ({hotel.stars})
          </div>
          <div>
            <button
              onClick={() => {
                setShowSubscription(true);
              }}
            >
              Request more info about {hotel.name}
            </button>
            {showSubscription && <Subscription />}
          </div>
        </div>
      )}
    </>
  );
}
