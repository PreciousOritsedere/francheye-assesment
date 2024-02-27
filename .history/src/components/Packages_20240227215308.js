import { useState } from "react";

export default function Packages() {
  const [activeTab, setActiveTab] = useState("UGC");

  // Function to change the active tab
  const handleTabClick = (tabName) => {
    console.log(`Tab clicked: ${tabName}`); // This should log to the console when a tab is clicked
    setActiveTab(tabName);
  };

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

          <div className="flex fle"></div>
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
