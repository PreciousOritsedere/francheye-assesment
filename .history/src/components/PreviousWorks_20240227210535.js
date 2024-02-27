import React, { useState, useEffect, lazy } from "react";
import axios from "axios";
import Work from "../assets/work-img.svg";

// Lazy loaded Image component
const LazyImage = lazy(() => import('./LazyImage'));


export default function PreviousWorks() {
  const [photos, setPhotos] = useState([]);


  useEffect(() => {
    // Function to fetch photos
    const fetchPhotos = async () => {
      try {
        console.log('Fetching photos...');
        const response = await Axios.get("https://jsonplaceholder.typicode.com/photos");
        console.log('Photos fetched successfully', response);
        setPhotos(response.data.slice(0, 10)); // Taking only the first 10 photos for display
      } catch (error) {
        console.error('Error fetching photos', error);
      }
    };

    fetchPhoto

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
