import Image from "next/image"
import { MouseGradient } from "@/components/mouse-gradient"
import { cn } from "@/lib/utils"

const gradient1 = "bg-radial-gradient-circle-c from-[#F100AE33] to-[#FF00B800] to-70%"
const gradient2 = "bg-radial-gradient-circle-c from-[#F4DABB99] to-[#F4DABB00] to-70%"
const gradient3 = "bg-radial-gradient-circle-c from-[#FF00B833] to-[#FF00B800] to-70%"
const gradient4 = "bg-radial-gradient-circle-c from-[#82B3FF33] to-[#AFCEFF00] to-70%"
const gradient5 = "bg-radial-gradient-circle-c from-[#3C75CC33] to-[#3C75CC00] to-70%"

const Gradients = () => {
  return (
    <>
      <div className={cn("absolute left-[-345px] top-[-368px] h-[785px] w-[785px]", gradient1)} />
      <div
        className={cn(
          "absolute left-[934px] top-[-387px] h-[819px] w-[819px] opacity-30",
          gradient2,
        )}
      />
      <div className={cn("absolute left-[1141px] top-[-235px] h-[785px] w-[785px]", gradient3)} />
      <div className={cn("absolute left-[-353px] top-[39px] h-[785px] w-[785px]", gradient4)} />
      <div className={cn("absolute left-[957px] top-[8px] h-[793px] w-[793px]", gradient5)} />
    </>
  )
}

export default function Page() {
  return (
    <>
      <section className="flex h-screen w-screen items-center">
        <Image
          src="/braga-romana.jpeg"
          alt="Imagem da Carolina Deslandes"
          width={1920}
          height={1080}
          style={{ width: "100%", height: "auto" }}
          className="absolute min-h-screen max-w-full opacity-40 grayscale gradient-mask-b-0"
        />
        <div className="z-1 container relative mx-auto flex w-full flex-col items-end justify-between px-[72px] md:flex-row">
          <Gradients />
          <h1 className="z-10 w-[850px] cursor-default font-canopee text-[240px] leading-[240px] text-white subpixel-antialiased mix-blend-overlay">
            Calendario
          </h1>
        </div>
        <MouseGradient />
      </section>
    </>
  )
}
