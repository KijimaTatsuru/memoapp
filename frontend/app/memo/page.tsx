"use client";

const App = () => {
  // const [memos, setMemos] = useState<MemoType[]>([]);
  // useEffect(() => {
  //   getMemos().then((response) => setMemos(response.data));
  // }, []);
  return (
    <div className="flex pt-10 items-center justify-center h-screen bg-gray-200 text-black md:w-full">
      <div className="flex flex-col w-1/2">
        <div>
          <form className="max-w-sm mx-auto">
            <div className="mb-5">
              <label className="block mb-2 text-sm font-medium text-gray-900">
                title
              </label>
              <input
                type="text"
                id="base-input"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              />
            </div>
            <div className="mb-5">
              <label className="block mb-2 text-sm font-medium text-gray-900">
                input
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
      </div>
    </div>
  );
};

export default App;
