import { useState } from "react";
import UserData from "../data/user1.json";
import Check from "../assets/check.svg";

export default function Packages() {
  const [activeTab, setActiveTab] = useState("UGC");
  const [activeSubTab, setActiveSubTab] = useState("Videos");

  const { packages } = UserData;

  // Function to change the active tab
  const handleTabClick = (tabName) => {
    console.log(`Tab clicked: ${tabName}`); // This should log to the console when a tab is clicked
    setActiveTab(tabName);
  };

  // Sub tab click handler for Videos and Photos
  const handleSubTabClick = (tabName) => {
    setActiveSubTab(tabName);
  };

  // Filter packages based on the activeTab and activeSubTab
  const filteredPackages = packages.filter((pkg) => {
    const typeMatch = pkg.packageType === activeTab; /
    const categoryMatch = pkg.contentType === activeSubTab; // Ensure package category matches active sub-tab (e.g., Videos, Photos)
    return typeMatch && categoryMatch; // Only include packages that match both conditions
  });

    // Adjust the filtering logic based on assumed properties
    const filteredPackages = packages.filter(pkg => {
        // Assuming 'packageType' can be 'ugc' or 'affiliate' to match with 'UGC'/'Affiliates' tabs
        const typeMatch = pkg.packageType === activeTab.toLowerCase(); 
        // Assuming 'contentType' can be 'video' or 'photo' to match with 'Videos'/'Photos' sub-tabs
        const contentMatch = pkg.contentType === activeSubTab.toLowerCase();
        return typeMatch && contentMatch;
      });

  return (
    <main className="max-w-[502px] w-full flex flex-col gap-9 mt-48">
      <section className="w-full flex flex-col gap-[50px]">
        <section className="w-full flex flex-col gap-[30px]">
          <div className="w-full flex items-center rounded-[10px]">
            <div
              onClick={() => handleTabClick("UGC")}
              className={`tab tab-UGC ${activeTab === "UGC" ? "active" : ""}`}
            >
              UGC
            </div>
            <div
              onClick={() => handleTabClick("Affiliates")}
              className={`tab tab-Affiliates ${
                activeTab === "Affiliates" ? "active" : ""
              }`}
            >
              Affiliates
            </div>
          </div>

          <div className="w-full flex flex-col gap-9">
            <div className="flex items-center gap-[38px]">
              <p
                onClick={() => handleSubTabClick("Videos")}
                className={`cursor-pointer ${
                  activeSubTab === "Videos" ? "text-black" : "text-[#0000004D]"
                }`}
              >
                Videos
              </p>
              <p
                onClick={() => handleSubTabClick("Photos")}
                className={`cursor-pointer ${
                  activeSubTab === "Photos" ? "text-black" : "text-[#0000004D]"
                }`}
              >
                Photos
              </p>
            </div>

            {filteredPackages.map((pkg, index) => (
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
            ))}
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
