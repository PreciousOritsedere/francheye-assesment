import React from "react";
import UserData from "../data/user1.json";
import Cover from "../assets/cover-photo.svg";
import User from "../assets/user-img.svg";
import Verified from "../assets/verified.svg";
import Star from "../assets/star.svg";
import Location from "../assets/location.svg";
import Smile from "../assets/smiley-face.svg";
import Nike from "../assets/nike.svg";
import Arrow from "../assets/arrow-down.svg";
import IG from "../assets/instagram.svg";
import Right from "../assets/arrow-right.svg";

export default function UserProfile() {
  const {
    name,
    isVerified,
    username,
    id,
    industries,
    country,
    bio,
    languages,
    contentType,
    accounts,
    // ...
  } = UserData;

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
        <section className="flex  flex-col gap-10 items-center md:items-start md:flex-row md:justify-between p-2.5">
          <div className="max-w-[452px] w-full flex flex-col gap-9 ">
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <h3 className="text-2xl text-black font-bold">
                  {name}
                </h3>
                {isVerified && <img src={Verified} alt="verified icon" />}
              </div>

              <div className="flex items-center gap-2.5">
                <p>@{username}/francheye.com</p>
                <img src={Star} alt="star icon" />
                <p>5.0 ({id}) </p>
              </div>
              <p>{industries.map(industry => `#${industry}`).join(' ')}</p>
              <div className="flex items-center gap-2">
                <img src={Location} alt="location icon" />
                <p>{country}</p>
              </div>
            </div>

            <div className="flex flex-col  text-black">
              <p className="font-bold">My Bio</p>
              <p>
                {bio}
              </p>
            </div>
          </div>

          <div className="w-full flex flex-col gap-10 md:items-end">
            <button className="bg-[#0014BC] py-2.5 px-[30px] rounded-[10px] text-sm text-white">
              Follow
            </button>

            <div className="flex flex-col gap-5">
              <div>
                <h4 className="text-black font-semibold">Languages</h4>
                <p>{languages.map(language => language).join(' ')}</p>
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
            <h3 className="text-black font-semibold">Connected Accounts:</h3>
            <div className="flex items-center gap-1.5">
              <p>Instagram</p>
              <img src={Arrow} alt="down arrow" />
            </div>
          </div>

          <div className="flex items-center gap-4 ">
            <div className="flex flex-col items-center gap-2.5 p-2.5 bg-white rounded-md text-black">
              <div className="w-full flex items-center gap-2.5 text-xs">
                <img src={IG} alt="instagram icon" />
                <p>Mascottuiux</p>
                <img src={Right} alt="right arrow" />
              </div>

              <div className="w-full flex items-center gap-6">
                <div className="flex flex-col items-center gap-0.5">
                  <h4 className="text-[8px] font-semibold">10k</h4>
                  <p className="text-[4px] text-[#00000066] text-center">
                    Total lifetime views
                  </p>
                </div>
                <div className="flex flex-col items-center gap-0.5">
                  <h4 className="text-[8px] font-semibold">10k</h4>
                  <p className="text-[4px] text-[#00000066] text-center">
                    Likes
                  </p>
                </div>
                <div className="flex flex-col items-center gap-0.5">
                  <h4 className="text-[8px] font-semibold">10k</h4>
                  <p className="text-[4px] text-[#00000066] text-center">
                    Followers
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center gap-2.5 p-2.5 bg-white rounded-md text-black">
              <div className="w-full flex items-center gap-2.5 text-xs">
                <img src={IG} alt="instagram icon" />
                <p>Mascottuiux</p>
                <img src={Right} alt="right arrow" />
              </div>

              <div className="w-full flex items-center gap-6">
                <div className="flex flex-col items-center gap-0.5">
                  <h4 className="text-[8px] font-semibold">10k</h4>
                  <p className="text-[4px] text-[#00000066] text-center">
                    Total lifetime views
                  </p>
                </div>
                <div className="flex flex-col items-center gap-0.5">
                  <h4 className="text-[8px] font-semibold">10k</h4>
                  <p className="text-[4px] text-[#00000066] text-center">
                    Likes
                  </p>
                </div>
                <div className="flex flex-col items-center gap-0.5">
                  <h4 className="text-[8px] font-semibold">10k</h4>
                  <p className="text-[4px] text-[#00000066] text-center">
                    Followers
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center gap-2.5 p-2.5 bg-white rounded-md text-black">
              <div className="w-full flex items-center gap-2.5 text-xs">
                <img src={IG} alt="instagram icon" />
                <p>Mascottuiux</p>
                <img src={Right} alt="right arrow" />
              </div>

              <div className="w-full flex items-center gap-6">
                <div className="flex flex-col items-center gap-0.5">
                  <h4 className="text-[8px] font-semibold">10k</h4>
                  <p className="text-[4px] text-[#00000066] text-center">
                    Total lifetime views
                  </p>
                </div>
                <div className="flex flex-col items-center gap-0.5">
                  <h4 className="text-[8px] font-semibold">10k</h4>
                  <p className="text-[4px] text-[#00000066] text-center">
                    Likes
                  </p>
                </div>
                <div className="flex flex-col items-center gap-0.5">
                  <h4 className="text-[8px] font-semibold">10k</h4>
                  <p className="text-[4px] text-[#00000066] text-center">
                    Followers
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
    </main>
  );
}
