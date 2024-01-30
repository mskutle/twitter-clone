import clsx from "clsx";
import type { ButtonHTMLAttributes } from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {}

function TweetButton(props: Props) {
  return (
    <button className="min-w-fit w-full px-2 py-1.5 lg:py-3 font-bold lg:px-4 text-center text-lg grow bg-sky-600 drop-shadow-xl shadow-blue-50 text-white text-bold flex justify-center items-center rounded-full disabled:hover:bg-blue-500 hover:bg-blue-600 disabled:opacity-50">
      {props.children}
    </button>
  );
}

export { TweetButton };
