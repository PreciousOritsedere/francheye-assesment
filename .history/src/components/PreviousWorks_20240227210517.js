import React, { useState, useEffect, lazy } from "react";
import axios from "axios";
import Work from "../assets/work-img.svg";

// Lazy loaded Image component
const LazyImage = lazy(() => import('./LazyImage'));


export default function PreviousWorks() {
  const [photos, setPhotos] = useState([]);

  return (
    <main className="max-w-[776px] w-full flex flex-col gap-[38px] p-10 text-xl text-black font-bold">
      <h3>Previous Works</h3>

      <div className="grid grid-rows-3 gap[25px]">
        <div className="max-w-[242px] w-full rounded-[10px]">
          <img
            src={Work}
            alt="work image"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </main>
  );
}
