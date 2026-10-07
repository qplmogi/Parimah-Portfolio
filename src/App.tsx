import { Navbar } from "./components/layout/Navbar";
import { Hero } from "./sections/Hero/Hero";
import { SelectedWork } from "./sections/SelectedWork/SelectedWork";

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <SelectedWork />
      </main>
    </>
  );
}