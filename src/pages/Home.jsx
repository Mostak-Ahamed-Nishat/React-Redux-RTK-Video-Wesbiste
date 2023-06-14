import Navbar from "../components/navbar/Navbar";
import Tags from "../components/tags/Tags";
import Grid from "../components/grid/Grid";
import Pagination from "../components/UI/Pagination";
import Footer from "../components/Footer";
export default function Home() {
  return (
    <>
      <Navbar />
      <Tags/>
      <Grid/>
      <Pagination/>
      <Footer/>
    </>
  );
}
