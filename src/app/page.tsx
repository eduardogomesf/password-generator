'use client'

import generator from 'generate-password'
import { useState } from "react";
import { Generator } from "./components/generator";
import { PasswordBox } from "./components/PasswordBox";

export type Level = '1' | '2' | '3' | '4';

export type GenerateParams = {
  length: number;
  includeUppercase: boolean;
  includeLowercase: boolean;
  includeNumbers: boolean;
  includeSymbols: boolean;
}

export default function Home() {
  const [password, setPassword] = useState('');
  const [level, setLevel] = useState<Level>('1');

  function generatePassword(params: GenerateParams) {
    const isAllUnchecked = !params.includeUppercase && !params.includeLowercase && !params.includeNumbers && !params.includeSymbols;

    let password = generator.generate({
      length: params.length,
      uppercase: params.includeUppercase,
      lowercase: isAllUnchecked ? true : params.includeLowercase,
      numbers: params.includeNumbers,
      symbols: params.includeSymbols,
    })

    setPassword(password)
  }

  function calculatePoints(params: GenerateParams) {
    let points = 0;

    if (params.includeUppercase) points++;
    if (params.includeLowercase) points++;
    if (params.includeNumbers) points++;
    if (params.includeSymbols) points++;

    if (params.length >= 6 && params.length <= 8) { points += 1 };

    if (params.length >= 9 && params.length <= 11) { points += 2 };

    if (params.length >= 12 && params.length <= 13) { points += 3 };

    if (params.length >= 14 && params.length <= 15) { points += 4 };

    return points
  }

  function handleGenerate(params: GenerateParams) {
    const points = calculatePoints(params);

    if (points <= 2) {
      setLevel('1')
    } else if (points <= 5) {
      setLevel('2')
    } else if (points <= 7) {
      setLevel('3')
    } else {
      setLevel('4')
    }

    generatePassword(params)
  }

  return (
    <div className="w-full h-screen pt-16 bg-almost-black">
      <main
        className="w-[343px] mx-auto md:w-[540px]"
      >
        <h1 className="text-base font-bold text-grey text-center md:text-2xl">
          Password generator
        </h1>

        <PasswordBox
          password={password}
        />

        <Generator
          onGenerate={handleGenerate}
          level={level}
        />
      </main>
    </div>
  )
}
