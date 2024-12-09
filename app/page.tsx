import Hero from "./Components/heroSection/Hero";
import FeatureProducts from "./Components/FeatureProduct/FeaturedProductss";
import TopCategoriess from "./Components/TopCategories/TopCategoriess";
import ExploreGallery from "./Components/Explorergallery/ExplorerGallerys";
import ProductGrid from "./Components/Ourproduct/OurProduct";
export default function Home() {
  return (
    <main>
      <main className="  ">
        <div>
          <Hero />
        </div>
        <div>
          <FeatureProducts />
        </div>
        <div>
          <TopCategoriess />
        </div>
        <div>
          <ExploreGallery />
        </div>
        <div>
          <ProductGrid />
        </div>
      </main>
    </main>
  );
}
