import LoadingMask from "./LoadingMask";
import { useState } from "react";

export default function Subscription({ hotel, setShowSubscription }) {
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [result, setResult] = useState(false);

  function submit(e) {
    e.preventDefault();
    setIsLoading(true);
    fetch("api/hotels/subscribe", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        hotel: hotel.name,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          setResult("Subscribed");
        } else {
          setResult("Already subscribed");
        }
      })
      .finally(() => {
        setTimeout(() => {
          setShowSubscription(false);
        }, 5000);
      });
  }

  return (
    <div>
      {!result && <h3>Request more info about {hotel.name}</h3>}
      {result ? (
        <p>{result}</p>
      ) : isLoading ? (
        <LoadingMask />
      ) : (
        <form onSubmit={submit}>
          <input
            type="email"
            onInput={(e) => {
              setEmail(e.target.value);
            }}
          />
          <input type="submit" disabled={!email.includes("@") || !email.includes(".") ? true : false} />
        </form>
      )}
    </div>
  );
}
