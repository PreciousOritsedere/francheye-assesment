import { useState } from "react";
import UserData from "../data/user1.json";
import Check from "../assets/check.svg";

export default function Packages() {
  const [activeTab, setActiveTab] = useState("ugc");
  const [activeSubTab, setActiveSubTab] = useState("video");

  const { packages } = UserData;

  // Function to change the active tab
  const handleTabClick = (tabName) => {
    console.log(`Tab clicked: ${tabName}`);
    setActiveTab(tabName.toLowerCase());
  };

  // Sub tab click handler for Videos and Photos
  const handleSubTabClick = (tabName) => {
    setActiveSubTab(tabName.toLowerCase());
  };

  // Filter packages based on the activeTab and activeSubTab
  const filteredPackages = packages.filter((pkg) => {
    // Ensure package type matches active tab (e.g., UGC, affiliate) in lowercase
    const typeMatch = pkg.packageType.toLowerCase() === activeTab;
    // Ensure package content type matches active sub-tab (e.g., Video, Photo), case-insensitive comparison
    const contentMatch = pkg.contentType.toLowerCase() === activeSubTab;
    return typeMatch && contentMatch; // Only include packages that match both conditions
  });

  return (
    <main className="max-w-[502px] w-full flex flex-col gap-9 mt-48">
      <section className="w-full flex flex-col gap-[50px]">
        <section className="w-full flex flex-col gap-[30px]">
          <div className="w-full flex items-center rounded-[10px]">
            <div
              onClick={() => handleTabClick("UGC")}
              className={`tab ${activeTab === "ugc" ? "tab-UGC.active" : ""}`}
            >
              UGC
            </div>
            <div
              onClick={() => handleTabClick("Affiliate")} 
              className={`tab ${activeTab === "affiliate" ? "tab-Affiliates.active" : ""}`}
            >
              Affiliates
            </div>
          </div>

          <div className="w-full flex flex-col gap-9">
            <div className="flex items-center gap-[38px]">
              <p
                onClick={() => handleSubTabClick("video")} 
                className={`cursor-pointer ${
                  activeSubTab === "video" ? "text-black" : "text-[#0000004D]"
                }`}
              >
                Videos
              </p>
              <p
                onClick={() => handleSubTabClick("photo")} // Changed to lowercase
                className={`cursor-pointer ${
                  activeSubTab === "photo" ? "text-black" : "text-[#0000004D]"
                }`}
              >
                Photos
              </p>
            </div>

            {filteredPackages.length > 0 ? (
              filteredPackages.map((pkg, index) => (
                <div key={index} className="w-full flex flex-col gap-4">
                  <div className="w-full flex items-center justify-between text-xl">
                    <h3 className="font-semibold text-black">{pkg.title}</h3>
                    <p>USD {pkg.price.toFixed(2)}</p>
                  </div>
                  <div className="flex flex-col gap-2.5">
                    {pkg.services.map((service, serviceIndex) => (
                      <div
                        key={serviceIndex}
                        className="flex items-center gap-1 text-sm"
                      >
                        <img src={Check} alt="check icon" />
                        <p>{service}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))
            ) : (
              <p>No packages available for this selection.</p>
            )}
          </div>
        </section>

        <button className="py-4 px-8 bg-[#0014BC] rounded-[10px] text-white text-xs">
          Contact Emmanuel
        </button>
      </section>

      <section className="w-full flex flex-col gap-4 rounded-[10px] py-[26px] px-7 bg-[#D9D9D9] text-xs text-[#11111180]">
        <h3 className="text-xl text-[#000A5C] font-semibold">Our Guarantee</h3>
        <p>
          Your Satisfaction is our top priority. Payments only get released to
          the creator once the order is completed
        </p>
      </section>
    </main>
  );
}
