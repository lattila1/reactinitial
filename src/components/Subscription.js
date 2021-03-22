import { useState } from "react";

export default function Subscription() {
  const [email, setEmail] = useState("");

  function submit(e) {
    e.preventDefault();
  }

  return (
    <div>
      <form onSubmit={submit}>
        <input
          type="email"
          onInput={(e) => {
            setEmail(e.target.value);
          }}
        />
        <input type="submit" disabled={!email.includes("@") || !email.includes(".") ? true : false} />
      </form>
    </div>
  );
}
