import { useEffect, useState } from "react";

function Clock({props}) {
  const [time, setTime] = useState(0);
  useEffect(() => {
    setInterval(function () {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
  }, []);
  return (
    <div>
      <h1
        style={{
          color: props,
          border: "2px solid black",
          width: "160px",
          padding: "10px",
          borderRadius: "10px",
        }}
      >
        {time}
      </h1>
    </div>
  );
}
export default Clock;
