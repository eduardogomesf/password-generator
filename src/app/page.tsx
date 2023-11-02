import { PasswordBox } from "./components/passsword-box";

export default function Home() {
  return (
    <div className="w-full h-screen pt-16 bg-almost-black">
      <main
        className="w-[343px] mx-auto md:w-[540px]"
      >
        <h1 className="text-base font-bold text-grey text-center md:text-2xl">
          Password generator
        </h1>

        <PasswordBox password="12345" />
      </main>
    </div>
  )
}
