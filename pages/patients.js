import Link from "next/link";
import MyLayout from "../layouts/MyLayout";

export default function Patients() {
  return (
    <div>
      <p>This is the Patients page.</p>
      <p>
        <Link href="/appointments">
          <a>Go: appointments</a>
        </Link>
      </p>
    </div>
  );
}

Patients.Layout = MyLayout;