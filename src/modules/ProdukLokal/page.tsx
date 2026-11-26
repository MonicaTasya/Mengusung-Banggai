import { ProductGrid } from "@/src/modules/ProdukLokal/ProductGrid";
import { ProductPageHeader } from "@/src/modules/ProdukLokal/ProductPageHeader";
import { localProducts } from "@/src/modules/ProdukLokal/productData";

export default function ProdukLokalPage() {
  return (
    <>
      <ProductPageHeader />
      <ProductGrid products={localProducts} />
    </>
  );
}
