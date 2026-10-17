"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";

interface Product {
  id: string;
  name: string;
  category: "Lubricants" | "Hoods" | "Bumpers" | "Braking" | "Electrical";
  subcategory: string;
  price: number;
  priceLabel: string;
  image: string;
  alt: string;
  brand: "Bosch Industrial" | "Brembo Systems" | "Motul Performance";
  badge?: {
    text: string;
    type: "fit" | "top";
  };
}

const PRODUCTS: Product[] = [
  {
    id: "prod-1",
    name: "Advanced Synthetic 5W-30 Industrial Grade",
    category: "Lubricants",
    subcategory: "Lubricants / Synthetic",
    price: 84.99,
    priceLabel: "Unit Price",
    brand: "Motul Performance",
    badge: { text: "Guaranteed Fit", type: "fit" },
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDPdQ_isb-79ksUkk0zxlTeF9a1PF3ll7uJxngveAdutc0MeTAHzJwIFri0FtY29Iw87SvIUJN87t7Cd3LbqSXYOpfzHTDzDM7NeeHFiz4gmIqQDqe_MsBm5y9pZaqCOfEjsqtG1Dz0ttlkgBjTdtjBZDN0SI_9a3dXRSKQullpprzHfjDuQLkKtxo4VfXNfd6CWNJuXg50E47Nf8h5PAF-QTuWcH5DP0rOIzVmUW2ablvvqcK9DjyEdQ",
    alt: "A high-resolution product shot of a 5-liter canister of professional synthetic engine oil.",
  },
  {
    id: "prod-2",
    name: "Carbon Fiber Aero-Vent Hood Series X",
    category: "Hoods",
    subcategory: "Exterior / Hoods",
    price: 1249.0,
    priceLabel: "Starting from",
    brand: "Bosch Industrial",
    badge: { text: "Top Rated", type: "top" },
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuC2NqhF2YNLDTd-cFcsbpR470DjBUw_A37_oeYJH3DEKh8rTAj-Pq2oja2y8UAyzLrCC7ANDFAGHrBf8J-0slOfTv_Pz6FlTUZ8Jf2DOSggfPcRyeWV33BubHdSslb7QwaEnEQ_1ZU_GMXUOSXobncLJxnI9jmBq8xcniRC9LLYQLg34GerJyidystUhWmtAg4I0F3OzrcNyktjBY7WZZiNcLJpAOdMhWhphMHz4k0XvvzzpADlq6n5wg",
    alt: "A detailed view of a high-performance carbon fiber hood for a modern sports car.",
  },
  {
    id: "prod-3",
    name: "Heavy Duty Reinforced Steel Bumper",
    category: "Bumpers",
    subcategory: "Exterior / Bumpers",
    price: 640.5,
    priceLabel: "MSRP",
    brand: "Bosch Industrial",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuC-nSbRo92JYgN-Qc1anPVis2VgSQqnKp4fLsxIwG4u-nkyDVCUst8n7qIP7htBEHAHDXpFlqXpls_DZPFbJRIz69CUh6wGTMFfVxrk_QZZodmLXOQJkIJ_DuZPWubFD9M_ICWech13WWRDZX2ecmAvpTxbd5dtiK5s0S9d95IR4A0ur82DRcN_5uSra_RaxgB3g5DAuGhyJBV5IqPRnmii4ieA12pT3cb3sUUTA90530VIYybYwS7YCA",
    alt: "A close-up studio shot of a heavy-duty front bumper made of reinforced matte steel.",
  },
  {
    id: "prod-4",
    name: "High-Temp Industrial Gear Lubricant",
    category: "Lubricants",
    subcategory: "Lubricants / Specialty",
    price: 112.0,
    priceLabel: "Unit Price",
    brand: "Motul Performance",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuC-peBo7r02GURDUSYASucfKDoBoyLp2tJDvDpERVLl0M-Z9zUNI2Dhcg0KG0TyN2vHKRfKAEqG8t73SDRkSztKjkz29_f7aFm4J1yl1-4r9PU1xjwAa1uwWjXVySlo-S5-u5y9p0RIqx4ju7fJaKhzPxCWDphGboN1I2ItzK55ZMw_dDiWnuZ3PoF0HqJs-PsSeBGvrCvi65-SQXHomg_cWd4Q3Mn8LDxgEPh6cT2MdnSoie6q15ZI6g",
    alt: "A high-tech industrial lubricant bottle with metallic silver finish.",
  },
  {
    id: "prod-5",
    name: "Brembo-Inspired 6-Piston Calipers",
    category: "Braking",
    subcategory: "Braking / Performance",
    price: 899.0,
    priceLabel: "Set Price",
    brand: "Brembo Systems",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCOMOn1LvfHEKuOn03AOU1g-G7Qy5vV-KT0AkJcpbW40rom0wDi1DlIFpAdz5OKtQbzcD5Xs5Is_el8LXKBdAgMZlA2KN9yEshpTEoSByBaAEo5MLYCtNTc9YAmGvTJJwkT8P0Wwh-_ZEEg3vcRIlV34sfp-L4R1zdtyjQiqfK6H57DxECEtk-fHVWoKMaFd_0bVGDmRpMAQBV79VX47Wrms-QX38-1xumB0e52PmF2BNiHmNizDy4RVA",
    alt: "Studio photograph of a set of performance brake calipers in vibrant red.",
  },
  {
    id: "prod-6",
    name: "Ultra-Light Lithium Performance Battery",
    category: "Electrical",
    subcategory: "Electrical / Power",
    price: 450.0,
    priceLabel: "Unit Price",
    brand: "Bosch Industrial",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCYzbVtGCQd3Wkop8IHFskEAc-eFE-Hhp3KstkVFiwrqY3H59l2Rq7aV5YaqM5AwMEXpJnXwmi28ROIaUX4Zj206vcGzngzWJTVhOFCTka9UuU3dJ2vKiduZBHED4pnCabK7brGBR_m3eQaPRZ9jUZ4AzMjVMXod4zbmwJsMg5Q5gG03KA56bCQ2F3ZWxR7OZOVk0gPwFRAWLml8fxvAfaSp1uPi3hGSPR3-URgjsFU_6EeunZ-aLXsDg",
    alt: "A sleek, minimalist product image of a high-performance car battery.",
  },
];

export default function MarketplacePage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategories, setSelectedCategories] = useState<string[]>([
    "Lubricants",
  ]);
  const [maxPrice, setMaxPrice] = useState<number>(5000);
  const [selectedBrand, setSelectedBrand] = useState<string>("All");
  const [sortBy, setSortBy] = useState<string>("Relevance");
  const [cartCount, setCartCount] = useState<number>(0);
  const [addedItems, setAddedItems] = useState<Record<string, boolean>>({});
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [mobileSearchOpen, setMobileSearchOpen] = useState(false);
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [newsletterSubscribed, setNewsletterSubscribed] = useState(false);

  // Toggle category checkbox
  const handleCategoryToggle = (category: string) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
  };

  // Clear all filters
  const handleClearFilters = () => {
    setSelectedCategories([]);
    setMaxPrice(5000);
    setSelectedBrand("All");
    setSearchQuery("");
  };

  // Add to cart micro-interaction
  const handleAddToCart = (productId: string) => {
    setCartCount((prev) => prev + 1);
    setAddedItems((prev) => ({ ...prev, [productId]: true }));

    setTimeout(() => {
      setAddedItems((prev) => ({ ...prev, [productId]: false }));
    }, 1500);
  };

  // Filtered & sorted products
  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((product) => {
      // Search filter
      if (
        searchQuery.trim() !== "" &&
        !product.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
        !product.subcategory.toLowerCase().includes(searchQuery.toLowerCase())
      ) {
        return false;
      }

      // Category filter (if categories selected)
      if (
        selectedCategories.length > 0 &&
        !selectedCategories.includes(product.category)
      ) {
        return false;
      }

      // Price filter
      if (product.price > maxPrice) {
        return false;
      }

      // Brand filter
      if (selectedBrand !== "All" && product.brand !== selectedBrand) {
        return false;
      }

      return true;
    }).sort((a, b) => {
      if (sortBy === "Price: Low to High") return a.price - b.price;
      if (sortBy === "Price: High to Low") return b.price - a.price;
      return 0;
    });
  }, [searchQuery, selectedCategories, maxPrice, selectedBrand, sortBy]);

  const activeFiltersCount =
    selectedCategories.length +
    (selectedBrand !== "All" ? 1 : 0) +
    (maxPrice < 5000 ? 1 : 0) +
    (searchQuery.trim() ? 1 : 0);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail) {
      setNewsletterSubscribed(true);
      setTimeout(() => setNewsletterSubscribed(false), 4000);
      setNewsletterEmail("");
    }
  };

  return (
    <div className="bg-surface text-on-surface min-h-screen flex flex-col font-sans selection:bg-secondary selection:text-white">
      {/* TopNavBar */}
      <header className="bg-surface-container-lowest border-b border-outline-variant sticky top-0 z-50 shadow-xs">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-10 py-3.5 flex justify-between items-center gap-3">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-1.5 focus:outline-none shrink-0"
          >
            <span className="text-lg sm:text-2xl font-bold tracking-tight text-secondary">
              FitRite Auto Body Parts
            </span>
          </Link>

          {/* Search Bar - Desktop */}
          <div className="hidden md:flex flex-1 max-w-xl mx-4 lg:mx-8">
            <div className="relative w-full">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline text-[20px] pointer-events-none">
                search
              </span>
              <input
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-10 py-2 border border-outline-variant rounded-lg bg-surface-container-low text-sm focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition-all placeholder:text-outline"
                placeholder="Search industrial car parts..."
                type="text"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-outline hover:text-secondary p-0.5 cursor-pointer"
                  title="Limpiar búsqueda"
                >
                  <span className="material-symbols-outlined text-[18px]">
                    close
                  </span>
                </button>
              )}
            </div>
          </div>

          {/* Right actions */}
          <div className="flex items-center gap-1.5 sm:gap-3 shrink-0">
            {/* Mobile Search Toggle */}
            <button
              type="button"
              onClick={() => setMobileSearchOpen(!mobileSearchOpen)}
              className="p-2 text-on-surface-variant hover:text-secondary md:hidden flex items-center justify-center cursor-pointer transition-colors"
              aria-label="Buscar productos"
            >
              <span className="material-symbols-outlined text-[24px]">
                {mobileSearchOpen ? "close" : "search"}
              </span>
            </button>

            {/* Cart Icon */}
            <Link
              href="/"
              className="p-2 text-on-surface-variant hover:text-secondary transition-colors relative flex items-center justify-center"
              title="Carrito de compras"
              aria-label="Carrito de compras"
            >
              <span className="material-symbols-outlined text-[24px]">
                shopping_cart
              </span>
              {cartCount > 0 ? (
                <span className="absolute top-1 right-1 w-4 h-4 bg-secondary text-white text-[10px] font-bold rounded-full flex items-center justify-center animate-pulse">
                  {cartCount}
                </span>
              ) : (
                <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-secondary rounded-full" />
              )}
            </Link>

            {/* Account Icon */}
            <Link
              href="/login"
              className="p-2 text-on-surface-variant hover:text-secondary transition-colors flex items-center justify-center"
              title="Iniciar Sesión"
              aria-label="Iniciar Sesión"
            >
              <span className="material-symbols-outlined text-[24px]">
                account_circle
              </span>
            </Link>
          </div>
        </div>

        {/* Mobile Search Input Collapse */}
        {mobileSearchOpen && (
          <div className="md:hidden px-4 pb-3 pt-1 border-t border-outline-variant/40 bg-surface-container-low transition-all">
            <div className="relative w-full">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline text-[18px]">
                search
              </span>
              <input
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                autoFocus
                className="w-full pl-9 pr-9 py-2 border border-outline-variant rounded-lg bg-surface-container-lowest text-sm focus:ring-2 focus:ring-secondary focus:border-transparent outline-none placeholder:text-outline"
                placeholder="Buscar repuestos industriales..."
                type="text"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-outline hover:text-secondary"
                >
                  <span className="material-symbols-outlined text-[18px]">
                    close
                  </span>
                </button>
              )}
            </div>
          </div>
        )}
      </header>

      {/* Main Container with original root background */}
      <main className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-10 py-6 sm:py-8 flex-1 w-full bg-surface">
        {/* Hero Banner */}
        <section className="relative rounded-xl overflow-hidden mb-8 sm:mb-10 min-h-[280px] sm:h-[340px] flex items-center group shadow-xs">
          <div className="absolute inset-0 z-0">
            <div
              className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
              style={{
                backgroundImage:
                  "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAIxkcsZpdutby1mgpB_ZnHbFBySM4ul0BBaifEq2lQ-Fq2RzxiyRL-fwdGrHAqyD8J7C4DKxefb8nkpFa1AmXOU9VwwzKfWZ4QZ5hC_MgsrzvPzjIPFiV8sLrtkdIaLh7kK-bFv8KMn4PQsZJ4hsvMYxh0Na6MR5yWyjprIM0auMEPug_PVMSJwzkuXSGR9MDlEbdRBRMFLxHY3C-BcecoDiy5vgedrEgfW-cUVf0foHbmjH_K3ldRyA')",
              }}
              data-alt="A sleek studio photograph of a premium synthetic oil bottle pouring golden liquid into a high-performance engine."
            />
            <div className="absolute inset-0 bg-linear-to-r from-primary/95 via-primary/75 to-transparent sm:to-transparent" />
          </div>

          <div className="relative z-10 px-5 sm:px-10 lg:px-12 py-8 sm:py-0 max-w-2xl">
            <span className="text-secondary font-bold text-xs uppercase tracking-widest mb-2 block">
              New Technical Release
            </span>
            <h1 className="text-white text-2xl sm:text-4xl lg:text-5xl font-bold mb-2.5 sm:mb-3 leading-tight tracking-tight">
              Premium Synthetic Lubricants
            </h1>
            <p className="text-surface-variant text-sm sm:text-base lg:text-lg mb-5 sm:mb-6 max-w-md opacity-90 leading-relaxed">
              Engineered for extreme performance in industrial environments. Reduced friction, maximum longevity.
            </p>
            <button
              onClick={() => {
                setSelectedCategories(["Lubricants"]);
                setSelectedBrand("All");
              }}
              className="bg-secondary text-white px-5 sm:px-6 py-2.5 sm:py-3 rounded text-xs font-bold uppercase tracking-wider flex items-center gap-2 hover:bg-secondary-container active:scale-95 transition-all shadow-md cursor-pointer"
            >
              <span>Explore Lubricants</span>
              <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </button>
          </div>
        </section>

        {/* Mobile Filter & Sort Control Bar */}
        <div className="md:hidden mb-6 flex flex-col gap-3">
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setMobileFiltersOpen(!mobileFiltersOpen)}
              className="flex-1 flex items-center justify-between px-4 py-2.5 bg-surface-container-lowest border border-outline-variant rounded-lg text-sm font-semibold shadow-xs cursor-pointer active:scale-[0.99] transition-transform"
            >
              <span className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[20px] text-secondary">
                  tune
                </span>
                <span>Filtros</span>
                {activeFiltersCount > 0 && (
                  <span className="bg-secondary text-white text-[11px] px-2 py-0.5 rounded-full font-bold">
                    {activeFiltersCount}
                  </span>
                )}
              </span>
              <span className="material-symbols-outlined text-[20px] text-outline">
                {mobileFiltersOpen ? "expand_less" : "expand_more"}
              </span>
            </button>

            {/* Quick Sort on Mobile */}
            <div className="bg-surface-container-lowest border border-outline-variant rounded-lg px-2.5 py-2 flex items-center shadow-xs">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                aria-label="Ordenar productos"
                className="bg-transparent text-xs font-bold focus:ring-0 cursor-pointer text-on-surface border-none outline-none pr-1"
              >
                <option value="Relevance">Relevancia</option>
                <option value="Price: Low to High">Menor Precio</option>
                <option value="Price: High to Low">Mayor Precio</option>
              </select>
            </div>
          </div>

          {/* Active Filter Chips on Mobile */}
          {activeFiltersCount > 0 && (
            <div className="flex flex-wrap items-center gap-1.5 pt-1">
              {selectedCategories.map((cat) => (
                <span
                  key={cat}
                  className="inline-flex items-center gap-1 px-2.5 py-1 bg-surface-container-low border border-outline-variant rounded-full text-xs text-on-surface"
                >
                  <span>{cat}</span>
                  <button
                    onClick={() => handleCategoryToggle(cat)}
                    className="hover:text-secondary flex items-center"
                  >
                    <span className="material-symbols-outlined text-[14px]">
                      close
                    </span>
                  </button>
                </span>
              ))}
              {selectedBrand !== "All" && (
                <span className="inline-flex items-center gap-1 px-2.5 py-1 bg-surface-container-low border border-outline-variant rounded-full text-xs text-on-surface">
                  <span>{selectedBrand}</span>
                  <button
                    onClick={() => setSelectedBrand("All")}
                    className="hover:text-secondary flex items-center"
                  >
                    <span className="material-symbols-outlined text-[14px]">
                      close
                    </span>
                  </button>
                </span>
              )}
              {maxPrice < 5000 && (
                <span className="inline-flex items-center gap-1 px-2.5 py-1 bg-surface-container-low border border-outline-variant rounded-full text-xs text-on-surface">
                  <span>&lt; ${maxPrice}</span>
                  <button
                    onClick={() => setMaxPrice(5000)}
                    className="hover:text-secondary flex items-center"
                  >
                    <span className="material-symbols-outlined text-[14px]">
                      close
                    </span>
                  </button>
                </span>
              )}
              <button
                onClick={handleClearFilters}
                className="text-xs text-secondary font-bold hover:underline ml-1"
              >
                Limpiar todo
              </button>
            </div>
          )}
        </div>

        {/* Layout: Sidebar + Product Grid */}
        <div className="flex flex-col md:flex-row gap-8 items-start">
          {/* Sidebar Filters (Desktop & Collapsible Mobile) */}
          <aside
            className={`${
              mobileFiltersOpen ? "block" : "hidden"
            } md:block w-full md:w-64 shrink-0 bg-surface-container-lowest md:bg-transparent p-5 md:p-0 rounded-xl md:rounded-none border md:border-none border-outline-variant shadow-xs md:shadow-none space-y-7`}
          >
            {/* Category Filter */}
            <div>
              <h3 className="text-xs font-bold text-outline uppercase tracking-wider mb-3.5">
                Category
              </h3>
              <ul className="space-y-2.5">
                {[
                  { id: "Hoods", label: "Hoods" },
                  { id: "Bumpers", label: "Bumpers" },
                  { id: "Lubricants", label: "Lubricants" },
                ].map((cat) => {
                  const isChecked = selectedCategories.includes(cat.id);
                  return (
                    <li key={cat.id}>
                      <label className="flex items-center gap-3 cursor-pointer group select-none">
                        <input
                          checked={isChecked}
                          onChange={() => handleCategoryToggle(cat.id)}
                          className="w-5 h-5 rounded border-outline-variant text-secondary focus:ring-secondary accent-secondary cursor-pointer"
                          type="checkbox"
                        />
                        <span
                          className={`text-sm transition-colors ${
                            isChecked
                              ? "text-secondary font-bold"
                              : "text-on-surface-variant group-hover:text-on-surface"
                          }`}
                        >
                          {cat.label}
                        </span>
                      </label>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* Price Range Filter */}
            <div>
              <div className="flex justify-between items-center mb-2.5">
                <h3 className="text-xs font-bold text-outline uppercase tracking-wider">
                  Price Range
                </h3>
                <span className="text-xs font-bold text-secondary">
                  ${maxPrice.toLocaleString()}
                </span>
              </div>
              <div className="space-y-2">
                <input
                  className="w-full accent-secondary cursor-pointer"
                  max="5000"
                  min="0"
                  step="50"
                  value={maxPrice}
                  onChange={(e) => setMaxPrice(Number(e.target.value))}
                  type="range"
                  aria-label="Rango de precio máximo"
                />
                <div className="flex justify-between text-xs text-on-surface-variant font-medium">
                  <span>$0</span>
                  <span>$5,000+</span>
                </div>
              </div>
            </div>

            {/* Manufacturer Filter */}
            <div>
              <h3 className="text-xs font-bold text-outline uppercase tracking-wider mb-3.5">
                Manufacturer
              </h3>
              <ul className="space-y-2.5">
                {[
                  { id: "All", label: "All Manufacturers" },
                  { id: "Bosch Industrial", label: "Bosch Industrial" },
                  { id: "Brembo Systems", label: "Brembo Systems" },
                  { id: "Motul Performance", label: "Motul Performance" },
                ].map((brand) => (
                  <li key={brand.id}>
                    <label className="flex items-center gap-3 cursor-pointer group select-none">
                      <input
                        checked={selectedBrand === brand.id}
                        onChange={() => setSelectedBrand(brand.id)}
                        className="w-5 h-5 border-outline-variant text-secondary focus:ring-secondary accent-secondary cursor-pointer"
                        name="brand"
                        type="radio"
                      />
                      <span
                        className={`text-sm transition-colors ${
                          selectedBrand === brand.id
                            ? "text-secondary font-bold"
                            : "text-on-surface-variant group-hover:text-on-surface"
                        }`}
                      >
                        {brand.label}
                      </span>
                    </label>
                  </li>
                ))}
              </ul>
            </div>

            {/* Action Buttons inside mobile filter */}
            <div className="pt-2 flex flex-col gap-2">
              <button
                onClick={handleClearFilters}
                className="w-full border border-outline text-on-surface text-xs font-bold py-2.5 rounded uppercase tracking-wider hover:bg-surface-container active:scale-95 transition-all cursor-pointer"
              >
                Clear Filters
              </button>
              {mobileFiltersOpen && (
                <button
                  onClick={() => setMobileFiltersOpen(false)}
                  className="md:hidden w-full bg-secondary text-white text-xs font-bold py-2.5 rounded uppercase tracking-wider shadow-sm active:scale-95 transition-all"
                >
                  Aplicar Filtros ({filteredProducts.length})
                </button>
              )}
            </div>
          </aside>

          {/* Product Grid Area */}
          <div className="flex-1 w-full">
            {/* Desktop Grid Header */}
            <div className="hidden md:flex justify-between items-center mb-6 pb-3 border-b border-outline-variant/40">
              <span className="text-sm text-on-surface-variant font-medium">
                Showing {filteredProducts.length} product
                {filteredProducts.length !== 1 ? "s" : ""}
                {selectedCategories.length > 0 &&
                  ` in ${selectedCategories.join(", ")}`}
              </span>
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-outline uppercase tracking-wider">
                  Sort by:
                </span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  aria-label="Ordenar productos"
                  className="border-none bg-transparent text-sm focus:ring-0 cursor-pointer text-on-surface font-bold pr-2"
                >
                  <option value="Relevance">Relevance</option>
                  <option value="Price: Low to High">Price: Low to High</option>
                  <option value="Price: High to Low">Price: High to Low</option>
                </select>
              </div>
            </div>

            {/* Empty State */}
            {filteredProducts.length === 0 ? (
              <div className="bg-surface-container-lowest rounded-xl p-10 sm:p-14 text-center border border-outline-variant shadow-xs">
                <span className="material-symbols-outlined text-outline text-5xl mb-3">
                  search_off
                </span>
                <h3 className="text-lg font-bold text-primary mb-1">
                  No se encontraron productos
                </h3>
                <p className="text-sm text-on-surface-variant mb-6 max-w-sm mx-auto">
                  Intenta ajustar tus filtros de búsqueda o seleccionar otras categorías.
                </p>
                <button
                  onClick={handleClearFilters}
                  className="px-6 py-2.5 bg-secondary text-white text-xs font-bold uppercase rounded-lg hover:bg-secondary-container transition-colors cursor-pointer shadow-sm"
                >
                  Limpiar filtros
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                {filteredProducts.map((product) => {
                  const isAdded = !!addedItems[product.id];
                  return (
                    <div
                      key={product.id}
                      className="bg-surface-container-lowest rounded-lg overflow-hidden border border-outline-variant/60 hover:border-outline-variant hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(0,0,0,0.08)] transition-all duration-300 flex flex-col group"
                    >
                      {/* Product Image Box */}
                      <div className="relative aspect-square bg-surface-container overflow-hidden">
                        <img
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                          data-alt={product.alt}
                          src={product.image}
                          alt={product.name}
                          loading="lazy"
                        />
                        {/* Badges */}
                        {product.badge && (
                          <div className="absolute top-3 left-3">
                            {product.badge.type === "fit" ? (
                              <div className="bg-white/95 backdrop-blur-sm px-2.5 py-1 rounded text-[10px] font-bold uppercase tracking-wider flex items-center gap-1.5 shadow-sm">
                                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                                <span>{product.badge.text}</span>
                              </div>
                            ) : (
                              <div className="bg-secondary text-white px-2.5 py-1 rounded text-[10px] font-bold uppercase tracking-wider shadow-sm">
                                {product.badge.text}
                              </div>
                            )}
                          </div>
                        )}
                      </div>

                      {/* Product Details */}
                      <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
                        <div>
                          <span className="text-[10px] text-outline uppercase tracking-widest font-bold block mb-1">
                            {product.subcategory}
                          </span>
                          <h3 className="text-sm sm:text-base font-bold text-on-surface mb-3 sm:mb-4 leading-snug line-clamp-2">
                            {product.name}
                          </h3>
                        </div>

                        <div className="mt-auto pt-3 flex items-end justify-between border-t border-surface-container">
                          <div>
                            <span className="text-xs text-outline font-medium block mb-0.5">
                              {product.priceLabel}
                            </span>
                            <span className="text-xl sm:text-2xl font-bold text-secondary">
                              ${product.price.toFixed(2)}
                            </span>
                          </div>

                          {/* Add to Cart Button with micro-interaction */}
                          <button
                            onClick={() => handleAddToCart(product.id)}
                            className={`p-3 rounded-lg transition-all active:scale-95 cursor-pointer flex items-center justify-center ${
                              isAdded
                                ? "bg-emerald-600 text-white"
                                : "bg-primary text-white hover:bg-secondary"
                            }`}
                            aria-label={`Agregar ${product.name} al carrito`}
                            title={
                              isAdded ? "¡Agregado!" : "Agregar al carrito"
                            }
                          >
                            <span
                              className={`material-symbols-outlined text-[20px] transition-colors ${
                                isAdded ? "text-white" : ""
                              }`}
                            >
                              {isAdded ? "check_circle" : "add_shopping_cart"}
                            </span>
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}

            {/* Pagination (Responsive) */}
            <div className="mt-10 sm:mt-12 flex justify-center items-center gap-1.5 sm:gap-2">
              <button
                onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                className="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center border border-outline-variant rounded-md hover:bg-surface-container transition-colors cursor-pointer bg-surface-container-lowest"
                aria-label="Página anterior"
              >
                <span className="material-symbols-outlined text-[20px]">
                  chevron_left
                </span>
              </button>

              {[1, 2, 3].map((page) => (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={`w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center rounded-md font-bold text-xs sm:text-sm transition-colors cursor-pointer ${
                    currentPage === page
                      ? "bg-secondary text-white"
                      : "bg-surface-container-lowest border border-outline-variant hover:bg-surface-container"
                  }`}
                >
                  {page}
                </button>
              ))}

              <span className="text-outline px-0.5 sm:px-1">...</span>

              <button
                onClick={() => setCurrentPage(12)}
                className={`w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center rounded-md font-bold text-xs sm:text-sm transition-colors cursor-pointer ${
                  currentPage === 12
                    ? "bg-secondary text-white"
                    : "bg-surface-container-lowest border border-outline-variant hover:bg-surface-container"
                }`}
              >
                12
              </button>

              <button
                onClick={() => setCurrentPage((p) => Math.min(12, p + 1))}
                className="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center border border-outline-variant rounded-md hover:bg-surface-container transition-colors cursor-pointer bg-surface-container-lowest"
                aria-label="Página siguiente"
              >
                <span className="material-symbols-outlined text-[20px]">
                  chevron_right
                </span>
              </button>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-surface-container-highest mt-16 border-t border-outline-variant/30">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10 px-4 sm:px-6 lg:px-10 py-12 max-w-[1280px] mx-auto">
          {/* Brand Col */}
          <div className="col-span-1">
            <span className="text-xl font-bold text-secondary mb-3 block">
              FitRite Auto Body Parts
            </span>
            <p className="text-sm text-on-surface-variant leading-relaxed">
              Industrial Precision Guaranteed. High-performance parts for professional automotive maintenance.
            </p>
          </div>

          {/* Shop Parts Col */}
          <div>
            <h4 className="text-xs font-bold text-on-surface uppercase tracking-wider mb-4">
              Shop Parts
            </h4>
            <ul className="space-y-2 text-sm text-on-surface-variant">
              <li>
                <button
                  onClick={() => setSelectedCategories(["Hoods"])}
                  className="hover:text-secondary transition-colors cursor-pointer"
                >
                  Hoods
                </button>
              </li>
              <li>
                <button
                  onClick={() => setSelectedCategories(["Bumpers"])}
                  className="hover:text-secondary transition-colors cursor-pointer"
                >
                  Bumpers
                </button>
              </li>
              <li>
                <button
                  onClick={() => setSelectedCategories(["Lubricants"])}
                  className="hover:text-secondary transition-colors cursor-pointer"
                >
                  Lubricants
                </button>
              </li>
              <li>
                <button
                  onClick={() => setSelectedCategories(["Braking"])}
                  className="hover:text-secondary transition-colors cursor-pointer"
                >
                  Braking Systems
                </button>
              </li>
            </ul>
          </div>

          {/* Service Col */}
          <div>
            <h4 className="text-xs font-bold text-on-surface uppercase tracking-wider mb-4">
              Service
            </h4>
            <ul className="space-y-2 text-sm text-on-surface-variant">
              <li>
                <Link href="#" className="hover:text-secondary transition-colors">
                  Store Location
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-secondary transition-colors">
                  Contact Info
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-secondary transition-colors">
                  Shipping Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-secondary transition-colors">
                  Returns
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter Col */}
          <div>
            <h4 className="text-xs font-bold text-on-surface uppercase tracking-wider mb-4">
              Newsletter
            </h4>
            <p className="text-sm text-on-surface-variant mb-3">
              Technical updates and new part arrivals.
            </p>
            {newsletterSubscribed ? (
              <div className="bg-emerald-50 text-emerald-800 border border-emerald-200 text-xs p-3 rounded font-medium">
                ✓ ¡Gracias por suscribirte al boletín técnico!
              </div>
            ) : (
              <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-2">
                <input
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  className="flex-1 px-3 py-2 text-sm border border-outline-variant rounded bg-white text-on-surface focus:ring-1 focus:ring-secondary outline-none"
                  placeholder="Email"
                  type="email"
                  required
                />
                <button
                  type="submit"
                  className="bg-primary text-white text-xs font-bold uppercase tracking-wider px-4 py-2 rounded hover:bg-secondary transition-colors cursor-pointer shrink-0"
                >
                  Join
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Copyright sub-bar */}
        <div className="border-t border-outline-variant/30 py-6 text-center px-4">
          <p className="text-xs text-outline">
            © 2024 FitRite Auto Body Parts. Industrial Precision Guaranteed.
          </p>
        </div>
      </footer>
    </div>
  );
}
