import { useEffect, useState } from "react";

function PresistentCounterApp() {
  const [count, setCount] = useState(0);
  const storedCount = localStorage.getItem("key");
  const countValue = storedCount !== null ? JSON.parse(storedCount) : 0;

  useEffect(() => {
    console.log("Page reloaded.");
    console.log(countValue);
    setCount(countValue);
  }, []);

  useEffect(() => {
    localStorage.setItem("key", JSON.stringify(count));
  }, [count]);
   return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-slate-200 p-8">
      <div className="bg-white p-12 rounded-3xl shadow-2xl text-center space-y-8 max-w-md w-full border border-slate-100">
        <h1 className="text-4xl font-black text-slate-800 tracking-tight">Persistent Counter</h1>
        <div className="text-7xl font-extrabold text-blue-700">{count}</div>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            className="px-8 py-3 rounded-full bg-green-500 text-white hover:bg-green-600 font-bold shadow hover:shadow-md transition"
            onClick={() => setCount(count + 1)}
          >
            Increment
          </button>
          <button
            className="px-8 py-3 rounded-full bg-blue-500 text-white hover:bg-blue-600 font-bold shadow hover:shadow-md transition"
            onClick={() => setCount(count - 1)}
          >
            Decrement
          </button>
          <button
            className="px-8 py-3 rounded-full bg-red-500 text-white hover:bg-red-600 font-bold shadow hover:shadow-md transition"
            onClick={() => setCount(0)}
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}

export default PresistentCounterApp;
