import Tooltip from "@/components/Tooltip/Tooltip";
import Link from "next/link";

export default function Home() {
  return (
    <main className="p-40 flex flex-col items-center gap-[100px]">
      <div className="flex gap-[30px] ">
        <Tooltip arrowDirection="down" arrorRotate="rotate-[40deg]" tooltipPosition='-left-[200px] -top-[80px]' maxContentWidth="w-[220px]" text="Lorem ipsum dolor sit amet consectetur adipisicing elit." ><button className="px-4 py-2 bg-cyan-600 text-white hover:bg-cyan-800">Press me</button></Tooltip>
        <Tooltip arrowDirection="left" arrorRotate="rotate-[40deg]" tooltipPosition='left-[35px] top-[50px]' text="Lorem ipsum dolor sit amet consectetur!" >
          <Link href='/about'><button className="px-4 py-2 bg-cyan-600 text-white hover:bg-cyan-800">About</button>
          </Link>
          </Tooltip>
      </div>
      <div className="w-[500px]">
        <Tooltip arrowDirection="right" arrorRotate="-rotate-[45deg]" tooltipPosition=" left-[30px] top-[100px]" text="This is cool text">
          <h3>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati sapiente non quod ipsam error ipsum qui, explicabo excepturi laudantium incidunt ullam voluptatem quibusdam dolorem aspernatur nam, repudiandae consequatur! Saepe, eum.
          </h3>
        </Tooltip>
      </div>
    </main>
  );
}
