"use client";
import { MemoType } from "../types/memo";
import { useEffect, useState } from "react";
import { getMemos } from "../api/memo";

const App = () => {
  // const [memos, setMemos] = useState<MemoType[]>([]);
  // useEffect(() => {
  //   getMemos().then((response) => setMemos(response.data));
  // }, []);
  return (
    <div className="flex items-center justify-center h-screen bg-gray-200 text-black md:w-full">
      <div className="flex flex-col w-1/2">
        <div className="pb-4">
          <div className="text-3xl pb-10">Memo</div>
          <div className="text-xl">過去30日間</div>
          <div className="pb-4">
            <div className="rounded-lg p-8 shadow-2xl bg-white">
              <div>test 1</div>
            </div>
          </div>
        </div>
        <div className="pb-4">
          <div className="text-xl">2023年</div>
          <div className="pb-4">
            <div className="rounded-lg p-8 shadow-2xl bg-white">
              <div>test 2</div>
            </div>
          </div>
        </div>
        <div className="pb-4">
          <div className="text-xl">2022年</div>
          <div className="pb-4">
            <div className="rounded-lg p-8 shadow-2xl bg-white">
              <div>test 3</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
