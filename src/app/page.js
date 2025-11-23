import Banner from "@/Components/Banner";
import Feature from "@/Components/Feature";
import Testimonals from "@/Components/Testimonals";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Banner />

      <Feature />
      <Testimonals />
    </div>
  );
}
