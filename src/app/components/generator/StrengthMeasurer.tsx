import { tv } from "tailwind-variants";

type Level = '1' | '2' | '3' | '4';

interface LevelBarProps {
  level: Level;
}

const levelStyles = tv({
  base: 'w-[10px] h-[28px] border-2',

  variants: {
    level: {
      'empty': "bg-transparent border-almost-white",
      '1': "bg-red border-red",
      '2': "bg-orange border-orange",
      '3': "bg-yellow border-yellow",
      '4': "bg-neon-green border-neon-green",
    }
  }
})

function LevelBars({ level }: LevelBarProps) {
  const arrayFromLevel = Array.from({ length: 4 });

  return (
    <div className="flex items-center gap-2">
      {arrayFromLevel.map((_, index) => (
        <div
          key={index}
          className={levelStyles({ level: index + 1 <= Number(level) ? level : 'empty' })}
        />
      ))}
    </div>
  )
}

interface StrengthMeasurerProps {
  level: Level
}

export function StrengthMeasurer({ level = '1' }: StrengthMeasurerProps) {
  const levels = {
    '1': 'Too Weak!',
    '2': 'Weak',
    '3': 'Medium',
    '4': 'Strong',
  }

  return (
    <div className="mt-8 w-full py-3 px-4 bg-very-dark-grey flex items-center justify-between md:py-5 md:px-8">
      <span
        className="uppercase text-base text-grey font-bold md:text-lg"
      >
        Strength
      </span>
      <div className="flex items-center gap-4">
        <strong className="uppercase text-lg text-almost-white font-bold md:text-2xl">
          {levels[level]}
        </strong>
        <LevelBars
          level={level}
        />
      </div>
    </div>
  )
}