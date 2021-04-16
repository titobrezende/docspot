import Link from "next/link";
import MyLayout from "../layouts/MyLayout";

export default function Appointments() {
  return (
    <div>
      <p>This is the Appointments page.</p>
      <p>
        <Link href="/patients">
          <a>Go: patients</a>
        </Link>
      </p>
    </div>
  );
}

Appointments.Layout = MyLayout;