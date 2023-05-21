import Link from 'next/link';

export default function DevNull() {
  return (
    <div className="max-w-[75ch] mx-auto py-12 px-5 flex flex-col gap-8 justify-center items-center">
      <h1 className="text-3xl">/dev/null</h1>
      <p>What you are looking at is a black hole.</p>
      <Link href="/" className="link-btn">
        Back to the real world
      </Link>
    </div>
  );
}
