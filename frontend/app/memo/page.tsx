"use client";

import Link from "next/link";

const App = () => {
  // const [memos, setMemos] = useState<MemoType[]>([]);
  // useEffect(() => {
  //   getMemos().then((response) => setMemos(response.data));
  // }, []);
  return (
    <div className="flex pt-10 justify-center h-screen bg-gray-200 text-black md:w-full">
      <div className="flex flex-col w-1/2">
        <Link href="/">
          <svg
            className="h-8 w-8 text-black mb-5 ml-40"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            {" "}
            <circle cx="12" cy="12" r="10" />{" "}
            <polyline points="12 8 8 12 12 16" />{" "}
            <line x1="16" y1="12" x2="8" y2="12" />
          </svg>
        </Link>
        <div>
          <form className="max-w-sm mx-auto">
            <div className="mb-5">
              <label className="block mb-2 text-sm font-medium text-gray-900">
                TITLE
              </label>
              <input
                type="text"
                id="base-input"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              />
            </div>
            <div className="mb-5">
              <label className="block mb-2 text-sm font-medium text-gray-900">
                CONTENT
              </label>
              <textarea
                id="message"
                rows={15}
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Write your thoughts here..."
              ></textarea>
            </div>
          </form>
        </div>
        <div className="flex flex-row-reverse">
          <button>
            <svg
              className="h-12 w-12 text-black mr-40"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              {" "}
              <line x1="22" y1="2" x2="11" y2="13" />{" "}
              <polygon points="22 2 15 22 11 13 2 9 22 2" />
            </svg>
          </button>
          <button>
            <svg
              className="h-12 w-12 text-red-500 mr-5"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              {" "}
              <path stroke="none" d="M0 0h24v24H0z" />{" "}
              <line x1="4" y1="7" x2="20" y2="7" />{" "}
              <line x1="10" y1="11" x2="10" y2="17" />{" "}
              <line x1="14" y1="11" x2="14" y2="17" />{" "}
              <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />{" "}
              <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
