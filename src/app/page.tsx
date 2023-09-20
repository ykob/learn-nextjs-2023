import Link from "next/link";

export default function Home() {
  return (
    <main>
      <ul>
        <li>
          <Link href="/spacex">Demo with Space-X API</Link>
        </li>
      </ul>
    </main>
  );
}
