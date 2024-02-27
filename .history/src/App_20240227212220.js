import "./App.css";
import Layout from "./components/Layout";
import UserProfile from "./components/UserProfile";
import PreviousWorks from "./components/PreviousWorks";
import Packages from "./components/Packages";

function App() {
  return (
    <Layout>
      <main className="m-auto max-w-[1320px] w-full flex flex-col items-center gap-11  md:flex-row md:items-start md:justify-center px-">
        <section className="flex flex-col gap-[70px]">
          <UserProfile />
          <PreviousWorks />
        </section>
        <Packages />
      </main>
    </Layout>
  );
}

export default App;
