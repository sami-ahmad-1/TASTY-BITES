import React, { useEffect, useState } from "react";
import { PropagateLoader } from "react-spinners";

function Success() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 3000);
  }, []);

  return (
    <>
      {loading ? (
        <div className="flex items-center justify-center h-screen">
          <PropagateLoader color="#36d7b7" />
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center h-screen bg-green-200">
          <h2 className="text-4xl font-bold text-green-800 mb-4">
            Order Successful
          </h2>
          <p className="text-lg text-black-600">
            Your order has been successfully placed.
          </p>
        </div>
      )}
    </>
  );
}

export default Success;
