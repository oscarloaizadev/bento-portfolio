import Image from "next/image";
import StackEntry from "./components/StackEntry";
import SideImage from "./components/SideImage";
import BodyContent from "./components/BodyContent";

export default function Home() {
  return (
    <>
      <SideImage />
      <main className="basis-full">
        <BodyContent />
      </main>
    </>
  );
}
