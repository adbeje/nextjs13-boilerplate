import Link from "next/link";

export default function Home() {
  return (
    <div className="flex justify-center gap-3">
      <Link href={"/redux/state"} className="text-blue-400 hover:underline">
        Ver estados redux
      </Link>
      <Link href={"/redux/query"} className="text-blue-400 hover:underline">
        Ver querys redux
      </Link>
    </div>
  );
}
