import Body from "@/components/Body";
import Nav from "@/components/Nav";
import NavBottom from "@/components/NavBottom";
import Image from "next/image";

export default function Home() {
  return (
  <div>
    <Nav />
    <NavBottom/>
    <div className="mb-16">
    <Body/>
    </div>
  </div>
  );
}
