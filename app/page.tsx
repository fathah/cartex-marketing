import AOSClient from "@/components/AOSClient";
import Features from "./(COMPS)/Features";
import Hero from "./(COMPS)/Hero";
import Clients from "./(COMPS)/Clients";

const IndexPage = () => {
 
  return (
    <div>
      <AOSClient/>
      <Hero/>
      <Features/>
      <Clients/>
    </div>
  );
}

export default IndexPage;