import { Section } from "./components/Section";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
export default function Home() {
  return(
    <div className="text">
      <Header />
      <Section title="Popular" endpoint="popular" />
      <Section title="Upcoming" endpoint="upcoming" />
      <Section title="Top rated" endpoint="top_rated" />

   
    
    <Footer/>
    </div>
  )
}