export default function Loading() {
  return (
    <main className="w-screen h-screen">
      <div className="w-full h-full flex items-center justify-center">
        <button
          type="button"
          className="bg-gray-500 text-white font-medium flex rounded-xl p-4 text-xl hover:bg-gray-400 duration-500"
          disabled
        >
          <svg className="animate-spin h-8 w-8 mr-3" viewBox="0 0 24 24">
            <path
              d="M12 2.25V4.75M12 18V22M5.75 12H2.25M21.25 12H19.75M18.4571 18.4571L17.75 17.75M18.6642 5.41579L17.25 6.83M4.92157 19.0784L7.75 16.25M5.12868 5.20868L7.25 7.33"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          Processing...
        </button>
      </div>
    </main>
  );
}
