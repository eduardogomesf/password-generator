'use client'

import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { Checkbox } from "./Checkbox";
import { LengthController } from "./LengthController";
import { StrengthMeasurer } from "./StrengthMeasurer";

export function Generator() {
  const [length, setLength] = useState([10]);
  const [includeUppercase, setIncludeUppercase] = useState(false);
  const [IncludeLowercase, setIncludeLowercase] = useState(false);
  const [includeNumbers, setIncludeNumbers] = useState(false);
  const [includeSymbols, setIncludeSymbols] = useState(false);

  return (
    <div className="mt-4 w-full p-4 bg-dark-grey">
      <LengthController
        value={length}
        onChange={setLength}
      />

      <div className="mt-8 flex flex-col items-start gap-4">
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

      <StrengthMeasurer
        level={'4'}
      />

      <button
        className="
          mt-4 md:mt-8 w-full h-14 bg-neon-green
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