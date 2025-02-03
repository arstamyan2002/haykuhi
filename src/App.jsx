import Hero from "./components/blocks/Hero";
import VideoFrame from "./components/blocks/VideoFrame";
import Container from "./components/Container";
import Header from "./components/layouts/Header";
import Card from "./components/ui/card";
import { cards } from "./data/home/aboutCards";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Container>
        <div className="grid md:grid-cols-3 gap-10">
          {cards.map((card, idx) => (
            <Card key={idx} {...card} />
          ))}
        </div>
      </Container>
     <VideoFrame/>
    </>
  );
}

export default App;
