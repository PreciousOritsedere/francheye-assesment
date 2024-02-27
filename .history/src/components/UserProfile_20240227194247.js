import React from "react";
import Cover from "../assets/cover-photo.svg";
import User from "../assets/user-img.svg";
import Verified from "../assets/verified.svg";
import Star from "../assets/star.svg";
import Location from "../assets/location.svg";
import Smile from "../assets/smiley-face.svg";
import Nike from "../assets/nike.svg";

export default function UserProfile() {
  return (
    <main className="max-w-[774px] w-full flex flex-col gap-24 mt-48 p-10 relative">
      <section className="w-full rounded-xl relative">
        <img src={Cover} alt="cover photo" className="w-full h-full" />
        <div className="absolute bottom-0 transform translate-y-1/2 left-18 ml-12 w-[128px] h-[128px] rounded-full overflow-hidden border-4 border-white bg-white">
          <img
            src={User}
            alt="user photo"
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      <section className="flex flex-col gap-[51px]">
        <section className="flex  flex-col gap-10 items-start md:flex-row md:justify-between">
          <div className="max-w-[452px] w-full flex flex-col gap-9">
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <h3 className="text-2xl text-black font-bold">
                  Umoru Emmanuel
                </h3>
                <img src={Verified} alt="verified icon" />
              </div>

              <div className="flex items-center gap-2.5">
                <p>@ma.nn.y/francheye.com</p>
                <img src={Star} alt="star icon" />
                <p>5.0 (21st) </p>
              </div>
              <p>#Consumer goods #Health,wellness and fitness, #Home</p>
              <div className="flex items-center gap-2">
                <img src={Location} alt="location icon" />
                <p>United states of America</p>
              </div>
            </div>

            <div className="flex flex-col  text-black">
              <h3 className="text-2xl font-bold">My Bio</h3>
              <p>
                My mind is a kaleidoscope of art. I craft creations that
                inspire. fueled by the need to prove and always pushing
                boundaries, I’m here to redefine content creation. Join me on
                this wild ride!
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-10 items-end">
            <button className="bg-[#0014BC] py-2.5 px-[30px] rounded-[10px] text-sm text-white">
              Follow
            </button>

            <div className="flex flex-col gap-5">
              <div>
                <h4 className="text-black font-semibold">Languages</h4>
                <p>French, English, Spanish</p>
              </div>
              <div>
                <h4 className="text-black font-semibold">Content Type</h4>
                <div className="flex items-center gap-2.5">
                  <img src={Smile} alt="smile icon" />
                  <p>Face Creator</p>
                </div>
              </div>
              <div>
                <h4 className="text-black font-semibold">
                  Brands I’ve worked with
                </h4>
                <div className="flex items-center gap-4">
                  <img src={Nike} alt="nike icon" />
                  <img src={Nike} alt="nike icon" />
                  <img src={Nike} alt="nike icon" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="flex flex-col gap-[18px]">
        <div className="flex items-center gap-3">
        <h3>Connected Accounts:</h3>

        </div>

        </section>
      </section>
    </main>
  );
}
