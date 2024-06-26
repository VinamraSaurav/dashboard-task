import Body from "@/components/Body/Body";
import Nav from "@/components/Nav/Nav";
import NavBottom from "@/components/Nav/NavBottom";


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
