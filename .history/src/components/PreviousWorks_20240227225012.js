import React, { useState, useEffect, lazy, Suspense } from "react";
import axios from "axios";


// Lazy loaded Image component
const LazyImage = lazy(() => import("./LazyImage"));

export default function PreviousWorks() {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    // Function to fetch photos
    const fetchPhotos = async () => {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/photos"
        );
        setPhotos(response.data.slice(0, 10)); // Taking only the first 10 photos for display
      } catch (error) {
        console.error("Error fetching photos", error);
      }
    };

    fetchPhotos();
  }, []);

  return (
    <main className="max-w-[776px] w-full flex flex-col gap-[38px] pt-1px-10 text-xl text-black font-bold">
      <h3>Previous Works</h3>

      <div className="w-full grid grid-cols-3 gap-[25px]">
        {photos.map((photo) => (
          <div key={photo.id} className="max-w-[242px] w-full rounded-[10px]">
            <Suspense fallback={<div>Loading...</div>}>
              <LazyImage
                src={photo.thumbnailUrl}
                alt={photo.title}
                className="w-full h-full object-cover rounded-[10px]"
              />
            </Suspense>
          </div>
        ))}
      </div>
    </main>
  );
}
