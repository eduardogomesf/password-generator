'use client'

import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { Checkbox } from "./Checkbox";

export function Generator() {
  const [includeUppercase, setIncludeUppercase] = useState(false);
  const [IncludeLowercase, setIncludeLowercase] = useState(false);
  const [includeNumbers, setIncludeNumbers] = useState(false);
  const [includeSymbols, setIncludeSymbols] = useState(false);

  return (
    <div className="mt-4 w-full p-4 bg-dark-grey">

      <div className="flex flex-col items-start gap-4">
        <Checkbox
          id="include-uppercase"
          label="Include Uppercase Letters"
          checked={includeUppercase}
          onCheckedChange={setIncludeUppercase}
        />

        <Checkbox
          id="include-lowercase"
          label="Include Lowercase Letters"
          checked={IncludeLowercase}
          onCheckedChange={setIncludeLowercase}
        />

        <Checkbox
          id="include-numbers"
          label="Include Numbers"
          checked={includeNumbers}
          onCheckedChange={setIncludeNumbers}
        />

        <Checkbox
          id="include-symbols"
          label="Include Symbols"
          checked={includeSymbols}
          onCheckedChange={setIncludeSymbols}
        />
      </div>

      <button
        className="
          mt-4 w-full h-14 bg-neon-green
          uppercase text-base text-dark-grey font-bold md:text-lg
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