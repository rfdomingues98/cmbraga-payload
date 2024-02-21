export function TailwindIndicator() {
  if (process.env.NODE_ENV === "production") return null

  return (
    <div className="fixed bottom-1 left-1 z-50 flex h-6 w-6 items-center justify-center rounded-full bg-gray-800 p-3 font-mono text-xs text-white">
      <div className="block sm:hidden">xs</div>
      <div className="3xl:hidden 4xl:hidden hidden sm:block md:hidden lg:hidden xl:hidden 2xl:hidden">
        sm
      </div>
      <div className="3xl:hidden 4xl:hidden hidden md:block lg:hidden xl:hidden 2xl:hidden">md</div>
      <div className="3xl:hidden 4xl:hidden hidden lg:block xl:hidden 2xl:hidden">lg</div>
      <div className="3xl:hidden 4xl:hidden hidden xl:block 2xl:hidden">xl</div>
      <div className="3xl:hidden 4xl:hidden hidden 2xl:block">2xl</div>
      <div className="3xl:block 4xl:hidden hidden">3xl</div>
    </div>
  )
}
