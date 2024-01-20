import { Intro } from "@/components/Intro";
import { Spacer } from "@/components/Spacer";
import { Experience } from "@/components/Experience";
import Link from "next/link";

export default function Home() {
  return (
    <section>
      <Intro />
      <Spacer />
      <p>
        Hi there and welcome to BABA&apos;s website, you can also call me{" "}
        <Link href={"https://dishonored.fandom.com/wiki/Daud"}>Daud</Link>.
      </p>
      <p>
        I picked up the name from a game called{" "}
        <Link href={"https://en.wikipedia.org/wiki/Dishonored"}>
          Dishonored
        </Link>{" "}
      </p>
      <Spacer />
      <Experience />
    </section>
  );
}
