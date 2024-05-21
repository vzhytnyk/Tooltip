import Tooltip from "@/components/Tooltip/Tooltip";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Tooltip arrowDirection="right" text="Нажми на меня"><button className="px-4 py-2 bg-cyan-600 text-white hover:bg-cyan-800">Press me</button></Tooltip>
    </main>
  );
}
