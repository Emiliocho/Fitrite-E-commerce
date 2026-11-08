import type { Metadata } from "next";
import ProductDetailsClient from "./product_details";

export const metadata: Metadata = {
  title: "V-Series Performance Carbon Fiber Hood | FitRite Auto Body Parts",
  description:
    "Capó de fibra de carbono pre-preg 3K de grado industrial con acabado transparente cerámico UV. 55% más ligero que el aluminio OEM.",
};

export default function Page() {
  return <ProductDetailsClient />;
}

