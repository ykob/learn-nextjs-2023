import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h2>Demo with Space-X API</h2>
      <ul>
        <li>
          <Link href="/spacex">Index</Link>
        </li>
      </ul>
    </main>
  );
}
