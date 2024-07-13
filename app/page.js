import Link from "next/link";

export default function Home() {
  return (
    <main className="flex justify-center items-center w-full h-screen">
      <Link href="/send">
        <button className="border-2 border-slate-300 text-2xl rounded-lg px-8 py-6">
          Go to Send
        </button>
      </Link>
    </main>
  );
}
