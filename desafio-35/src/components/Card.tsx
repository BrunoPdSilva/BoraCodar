import water from "../assets/agua.svg"

export function Card() {
  return (
    <section className="bg-blue rounded-[20px] w-52 min-h-[350px] flex flex-col items-center mb-7">
      <h3 className="text-violet-200 font-bold text-xs mt-8 mb-10">80%</h3>
      <img src={water} alt="Water" className="w-24 h-[151px]" />

      <div className="text-center text-violet-200 mt-8">
        <h2 className="font-semibold text-xl leading-[100%]">Beber água</h2>
        <h3 className="font-medium text-base tracking-wide mt-2">Meta: 3L</h3>
      </div>
    </section>
  )
}
