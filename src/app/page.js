import Image from "next/image";
import Hero from "./components/hero";
import Navbar from "./components/navbar";
import Body from "./components/body"
import Invite from "./components/invite"
import Grid from './components/Grid'
import Marriage from './components/Marriage';
import Footer from './components/Footer'

export default function Home() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Body/>
      <Invite/>
      {/* <Grid/> */}
      <Marriage/>
      <Footer/>
    </div>
  );
}
