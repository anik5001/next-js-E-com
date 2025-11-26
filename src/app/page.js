import Banner from "@/Components/Banner";

import Testimonals from "@/Components/Testimonals";
import Image from "next/image";
import AllProduct from "./allProduct/page";
import LatestProduct from "@/Components/LatestProduct";
import Feature from "./feature/page";

export default function Home() {
  return (
    <div>
      <Banner />
      {/* <AllProduct /> */}
      <LatestProduct />
      <Feature />
      <Testimonals />
    </div>
  );
}
