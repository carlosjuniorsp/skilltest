import React from "react";
import Header from "../../components/Header";

const Home = () => {
  return (
    <>
      <Header title="Usuários" />
      <main>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div className="px-4 py-6 sm:px-0">
              1 - Usuario <br/>
              2 - Usuario
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
