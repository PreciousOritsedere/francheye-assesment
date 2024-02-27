import "./App.css";
import Layout from "./components/Layout";
import UserProfile from "./components/UserProfile";

function App() {
  return (
    <Layout>
      <main className="m-auto max-w-[1320px] w-full flex flex-col items-center gap-11  md:flex-row">
        <section >
          <UserProfile/>
        </section>
       
      </main>
    </Layout>
  );
}

export default App;
