import Link from "next/link";
import { ParentComponent } from "../../components";
// import { ClientComponent } from "../client-component";

export default function OtherPage() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto text-center">
        <ParentComponent/>
        <Link href="../">Home</Link>
      </div>
    </div>
  );
}
