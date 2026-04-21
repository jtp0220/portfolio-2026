import { useState } from "react";

import { type BlogPost } from "../../lib/blogposts";

export default function BlogPost({ ...params }: BlogPost) {
  const [open, setOpen] = useState(false);

  return (
    <div className={`bg-bg-primary text-text-primary w-full overflow-hidden rounded-2xl p-5 transition-all duration-300 ease-in-out`}>
      <div className="flex flex-col">
        <div className="flex items-center justify-between pb-5">
          <span className="font-bold">{params.date?.toLocaleDateString()}</span>
          <Arrow open={open} setOpen={() => setOpen(!open)} />
        </div>
        <div className="flex flex-col gap-5">
          <div className="bg-bg-tertiary h-100 w-full rounded-2xl">{params.img ? <img className="h-full w-full rounded-2xl object-cover" src={params.img}></img> : <div className="flex h-full w-full items-center justify-center text-3xl">No Image</div>}</div>
          <h1 className={`${open ? "" : "line-clamp-3"} text-5xl font-bold`}>{params.title}</h1>
        </div>
      </div>

      <div className={`grid transition-all duration-300 ease-in-out ${open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
        <div className="overflow-hidden">
          <div className="pt-5">{params.children}</div>
        </div>
      </div>

      <div className="flex w-full flex-wrap items-center gap-2 rounded-2xl pt-5">
        <span>Tags:</span>
        {params.tags?.map((value, index) => (
          <div className="bg-bg-tertiary rounded-2xl px-3 py-1 text-sm" key={index}>
            {value}
          </div>
        ))}
      </div>
    </div>
  );
}

import ArrowIcon from "/src/assets/icons/arrow.svg?react";

function Arrow({ open, setOpen }: { open: boolean; setOpen: () => void }) {
  return (
    <button onClick={setOpen}>
      <ArrowIcon className={`${open ? "bg-bg-tertiary -rotate-180" : "bg-bg-secondary"} h-9 w-9 rounded-xl p-2 transition-all duration-300 ease-in-out`} />
    </button>
  );
}
