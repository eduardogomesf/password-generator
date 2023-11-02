import { ArrowRight } from "lucide-react";

export function Generator() {
  return (
    <div className="mt-4 w-full p-4 bg-dark-grey">

      <button
        className="
          w-full h-14 bg-neon-green
          uppercase text-base text-dark-grey font-bold
          flex items-center justify-center gap-4
        "
      >
        Generate
        <ArrowRight
          className="h-5 w-5"
        />
      </button>
    </div>
  )
}