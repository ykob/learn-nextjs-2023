import Link from "next/link";

export default function SpaceXLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <main>{children}</main>
      <sub>
        <h2>Index</h2>
        <ul>
          <li>
            <Link href="/spacex">Space X Home</Link>
          </li>
          <li>
            <Link href="/spacex/rockets">Rockets</Link>
          </li>
        </ul>
        <p>
          <Link href="/">Back to Home</Link>
        </p>
      </sub>
    </>
  );
}
