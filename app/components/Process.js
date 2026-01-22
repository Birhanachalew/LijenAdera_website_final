import React from "react";

const Process = () => {
  return (
    <div className="flex justify-around flex-wrap mb-24">
      <div className="bg-white rounded-[9px] border border-gray-300 px-4 py-6 m-4 max-w-sm">
        <div className="flex items-center mb-2">
          <span className="bg-gradient-to-r from-[#DE4396] to-pink-950 bg-clip-text text-transparent font-bold text-xl h-8 w-8 flex items-center justify-center mr-2">
            #{1}
          </span>
          <h2 className="text-lg font-bold">Assemble the right team</h2>
        </div>
        <p className="text-[#4A5568]">
          We handle all aspects of vetting and choosing the right team that you
          don&apos;t have the time, expertise, or desire to do.
        </p>
      </div>
      <div className="bg-white rounded-[9px] border border-gray-300 px-4 py-6 m-4 max-w-sm">
        <div className="flex items-center mb-2">
          <span className="bg-gradient-to-r from-[#DE4396] to-pink-950 bg-clip-text text-transparent font-bold text-xl h-8 w-8 flex items-center justify-center mr-2">
            #{2}
          </span>
          <h2 className="text-lg font-bold">Sprint planning</h2>
        </div>
        <p className="text-[#4A5568]">
          Sprint roadmap is a collective planning effort. Team members
          collaborate to clarify items and ensure shared understanding.
        </p>
      </div>
      <div className="bg-white rounded-[9px] border border-gray-300 px-4 py-6 m-4 max-w-sm">
        <div className="flex items-center mb-2">
          <span className="bg-gradient-to-r from-[#DE4396] to-pink-950 bg-clip-text text-transparent font-bold text-xl h-8 w-8 flex items-center justify-center mr-2">
            #{3}
          </span>
          <h2 className="text-lg font-bold">Tech architecture</h2>
        </div>
        <p className="text-[#4A5568]">
          We break monolithic apps into microservices. Decoupling the code
          allows teams to move faster and more independently
        </p>
      </div>

      <div className="bg-white rounded-[9px] border border-gray-300 px-4 py-6 m-4 max-w-sm">
        <div className="flex items-center mb-2">
          <span className="bg-gradient-to-r from-[#DE4396] to-pink-950 bg-clip-text text-transparent font-bold text-xl h-8 w-8 flex items-center justify-center mr-2">
            #{4}
          </span>
          <h2 className="text-lg font-bold">Standups & weekly demos</h2>
        </div>
        <p className="text-[#4A5568]">
          Standups, weekly demos, and weekly reviews make sure everyone is on
          the same page and can raise their concerns.
        </p>
      </div>

      <div className="bg-white rounded-[9px] border border-gray-300 px-4 py-6 m-4 max-w-sm">
        <div className="flex items-center mb-2">
          <span className="bg-gradient-to-r from-[#DE4396] to-pink-950 bg-clip-text text-transparent font-bold text-xl h-8 w-8 flex items-center justify-center mr-2">
            #{5}
          </span>
          <h2 className="text-lg font-bold">Code reviews</h2>
        </div>
        <p className="text-[#4A5568]">
          Code reviews before release help detect issues like memory leaks, file
          leaks, performance signs, and general bad smells
        </p>
      </div>
      <div className="bg-white rounded-[9px] border border-gray-300 px-4 py-6 m-4 max-w-sm">
        <div className="flex items-center mb-2">
          <span className="bg-gradient-to-r from-[#DE4396] to-pink-950 bg-clip-text text-transparent font-bold text-xl h-8 w-8 flex items-center justify-center mr-2">
            #{6}
          </span>
          <h2 className="text-lg font-bold">Iterative delivery</h2>
        </div>
        <p className="text-[#4A5568]">
          We divide the implementation process into several checkpoints rather
          than a single deadline.
        </p>
      </div>
    </div>
  );
};

export default Process;
