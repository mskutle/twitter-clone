import { BsImage } from "react-icons/bs";
import { Avatar } from "./common/Avatar";
import { useState } from "react";

function TweetComposer() {
  const [text, setText] = useState("");
  return (
    <div className="flex items-start space-x-4 grow px-4 py-3 border-y border-gray-100">
      <Avatar src="/img/magne.png" alt="the developer of this site" />
      <div className="flex flex-col grow space-y-2">
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          multiple
          placeholder="Whats happening?"
          className="py-3 grow placeholder:text-xl placeholder:text-gray-500 focus:outline-none"
        />
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2 text-blue-400">
            <BsImage />
          </div>
          <button
            disabled={text === ""}
            className="px-4 py-1.5 max-w-fit font-semibold grow bg-sky-500 drop-shadow-xl shadow-blue-50 text-white text-bold flex justify-center items-center rounded-full hover:bg-sky-600 disabled:opacity-50"
          >
            Post
          </button>
        </div>
      </div>
    </div>
  );
}

export { TweetComposer };
