import Link from "next/link";

export default function NotFound() {
  return (
    <div className="max-w-[75ch] mx-auto py-12 px-5 flex flex-col gap-8 items-center">
      <h1>/dev/null</h1>
      <p>What you are looking at is a black hole.</p>
      <Link href="/">Back to the real world</Link>
    </div>
  );
}
