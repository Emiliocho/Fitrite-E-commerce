"use client";

import React, { useState } from "react";
import Link from "next/link";

interface ProductImage {
  src: string;
  alt: string;
  label: string;
}

const GALLERY_IMAGES: ProductImage[] = [
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCe9pL_IgCRXLPAaZj9Z8ZVmCl4SgTOwSEdl6Yohx3dPgI9tSs74_yvdZVs2zWwFQcRwChAV_Kr4zrN9wPLn5EE2jGX-bJ2N3bOhHJwMdf8PecHyPXME1qQAZCJnzBWfzLe0u_Idc7x4Y6y7e0E08ZyybQVMzbV4PG0QkjfiA6tDrjXGugntI3CJFC8EL-ATy2FkXhZNEK77xn4KPHGX6ZVihp3H7qoNdBz6nVpvLH3rM-Nt_z-yFy5Kg",
    alt: "Vista frontal de estudio del capó de fibra de carbono de alto rendimiento V-Series.",
    label: "Vista Principal",
  },
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAHFF4TXJ5_RWd0f4_1kY_zQg8e3IiA6enF7H_r8f3ddNpQp0pNXE1YXDKucNB6qNMpmvRdjEU0CaSKtR92AVt_8eVn9WII-EweIoSyNv_MBNdeXPImTETIbQCgb7Cna6H5ysn1ip5U-pcGXtFkYrdoplQkNWA8LHycZ5P8aZlzfMVm4LtmtSV42-Nwifqja_xOqk9gqa0K7Q6fnj_Ot21Vzd7GUlkLpgl4qyUJXUTUTqxoSEnG0l0lGg",
    alt: "Detalle en primer plano del tejido twill 2x2 y acabado brillante transparente con protección UV.",
    label: "Tejido Twill 3K",
  },
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuD6g3y71mnIIQrYsclV3ayqsqzWYCFaUrPDxtSGEY13vUMz2vNiJRLMjNbp-SX3sh7DOtk6CQH9ZFV4HTBBhNe1paAPumA3o3nngNIdmwxiI1VtiGBlVElBUwkzZV4vU85PvXs4UlGObh8XecqY4T5reMyhqEmgPy3Nl9dLwmwoP6-tT3QN7N3GWJZ660pe0lOtGA2Y-wzPn_V9lScDwED2kyZHZLIftZakTMo_XTv8zZY269Adkm6Hbw",
    alt: "Perfil lateral de vehículo deportivo de alto rendimiento con el capó instalado a ras.",
    label: "Instalado en Vehículo",
  },
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAufCbwyLjLnYHzR2197Z1iJSYPKBK3eB-wriT1vVOuo_QqhoKFu2RL2KskduKznvOZ2MVyWory8QkHog5Pv4ZNkOkyEHW1dPrh5Ycz6FqMJWi9-kb6ccVLSh4kNmiifazvMqTPUMYCWFhWuvbRBLrFEWcNhtOjpDq7lyq8JNVuvo_EoknYy2v4BOV5gXfh6tvftGesOp4hTjyaO0KHvB6txAgFG_md2LUTom81qctmZApMF7atv69igQ",
    alt: "Parte inferior del capó mostrando los puntos de anclaje de fábrica y nervaduras estructurales reforzadas.",
    label: "Estructura Inferior",
  },
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCG52_kczsbOuBkkg0LM9LyFIuJ4ZwFS6BZ-OiXCY3axSxt67XyQ3n6MD7mLlqry55KwwCNdEkkfm9NQrEtPdcUc336V5CF1j7Vku-fzGbO45Lj-lE5WtlNKSBz3iIPDH1it2y-FePap2vb6z77vNWOO5LgLi_ASuvs7iH9E7zgSL5MpH4u5byrSKNeHjCHVGVQgAiHlm2eFqHxc_adsfPLctV6DokTFFwXyJAQpeozzcvST4kw4AqkpA",
    alt: "Embalaje protector en caja de madera reforzada para transporte industrial seguro sin vibraciones.",
    label: "Embalaje Crate",
  },
];

const MAKE_MODELS: Record<string, string[]> = {
  BMW: ["M3 (G80/F80)", "M4 (G82/F82)", "M2 Competition", "M5 (F90)", "340i / 440i M-Sport"],
  Audi: ["RS4 Avant", "RS5 Sportback", "S4 / S5 B9", "RS3 Sedan", "R8 V10 Plus"],
  "Mercedes-Benz": ["C63 AMG (W205)", "E63 AMG", "A45 AMG", "AMG GT Coupe"],
  Porsche: ["911 GT3 (992)", "Cayman GT4", "911 Carrera S"],
  Toyota: ["GR Supra (A90/A91)", "GR Yaris", "GR86"],
};

export default function ProductDetailsPage() {
  const [selectedImage, setSelectedImage] = useState<number>(0);
  const [quantity, setQuantity] = useState<number>(1);
  const [cartCount, setCartCount] = useState<number>(0);
  const [isAdding, setIsAdding] = useState<boolean>(false);
  const [isWishlisted, setIsWishlisted] = useState<boolean>(false);

  // Fitment Checker States
  const [selectedYear, setSelectedYear] = useState<string>("2024");
  const [selectedMake, setSelectedMake] = useState<string>("BMW");
  const [selectedModel, setSelectedModel] = useState<string>("M3 (G80/F80)");
  const [fitmentResult, setFitmentResult] = useState<{
    status: "success" | "warning" | "idle";
    message: string;
  }>({
    status: "idle",
    message: "",
  });

  // Active technical tab
  const [activeTab, setActiveTab] = useState<"specs" | "install" | "shipping">("specs");

  // Search input state in navbar
  const [searchQuery, setSearchQuery] = useState<string>("");

  // Newsletter state
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [newsletterSent, setNewsletterSent] = useState(false);

  const handleMakeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const make = e.target.value;
    setSelectedMake(make);
    if (MAKE_MODELS[make] && MAKE_MODELS[make].length > 0) {
      setSelectedModel(MAKE_MODELS[make][0]);
    } else {
      setSelectedModel("");
    }
    setFitmentResult({ status: "idle", message: "" });
  };

  const handleCheckFitment = () => {
    if (!selectedYear || !selectedMake || !selectedModel) {
      setFitmentResult({
        status: "warning",
        message: "Por favor selecciona el Año, Marca y Modelo de tu vehículo.",
      });
      return;
    }

    setFitmentResult({
      status: "success",
      message: `¡Ajuste Garantizado! Compatible al 100% con ${selectedMake} ${selectedModel} ${selectedYear} usando cerrojos y bisagras OEM de fábrica.`,
    });
  };

  const handleAddToCart = () => {
    setIsAdding(true);
    setCartCount((prev) => prev + quantity);

    setTimeout(() => {
      setIsAdding(false);
    }, 1400);
  };

  const handleNewsletter = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail) {
      setNewsletterSent(true);
      setNewsletterEmail("");
      setTimeout(() => setNewsletterSent(false), 4000);
    }
  };

  return (
    <div className="bg-surface text-on-surface font-sans min-h-screen flex flex-col selection:bg-secondary selection:text-white">
      {/* TopNavBar */}
      <nav className="bg-surface-container-lowest sticky top-0 z-50 border-b border-outline-variant shadow-xs">
        <div className="flex justify-between items-center px-4 sm:px-6 lg:px-10 py-3.5 max-w-[1280px] mx-auto w-full">
          <div className="flex items-center gap-6 lg:gap-8">
            <Link href="/" className="flex items-center gap-1.5 focus:outline-none shrink-0">
              <span className="text-xl sm:text-2xl font-bold tracking-tight text-secondary">
                FitRite Auto Body Parts
              </span>
            </Link>

            <div className="hidden md:flex items-center gap-6 text-sm font-medium">
              <Link
                href="/"
                className="text-on-surface-variant hover:text-secondary transition-colors"
              >
                Home
              </Link>
              <Link
                href="/marketplace"
                className="text-secondary font-bold border-b-2 border-secondary pb-0.5"
              >
                Store / Marketplace
              </Link>
              <Link
                href="/marketplace"
                className="text-on-surface-variant hover:text-secondary transition-colors"
              >
                Services & B2B
              </Link>
            </div>
          </div>

          <div className="flex items-center gap-3 sm:gap-4">
            <div className="relative hidden sm:block w-48 md:w-64">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline text-[18px]">
                search
              </span>
              <input
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-3 py-1.5 bg-surface-container-low border border-outline-variant rounded-lg focus:outline-none focus:ring-1 focus:ring-secondary text-xs sm:text-sm placeholder:text-outline"
                placeholder="Search components..."
                type="text"
              />
            </div>

            <div className="flex items-center gap-1 sm:gap-2">
              <button
                type="button"
                onClick={handleAddToCart}
                className="relative p-2 text-primary hover:text-secondary active:scale-95 transition-all cursor-pointer"
                title="Carrito de compras"
                aria-label="Carrito de compras"
              >
                <span className="material-symbols-outlined text-[24px]">shopping_cart</span>
                {cartCount > 0 ? (
                  <span className="absolute top-1 right-1 w-4 h-4 bg-secondary text-white text-[10px] font-bold rounded-full flex items-center justify-center animate-pulse">
                    {cartCount}
                  </span>
                ) : (
                  <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-secondary rounded-full" />
                )}
              </button>

              <Link
                href="/login"
                className="p-2 text-primary hover:text-secondary active:scale-95 transition-all flex items-center justify-center"
                title="Iniciar Sesión"
                aria-label="Iniciar Sesión"
              >
                <span className="material-symbols-outlined text-[24px]">account_circle</span>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Container */}
      <main className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-10 py-6 sm:py-8 flex-1 w-full">
        {/* Breadcrumbs */}
        <nav
          aria-label="Migas de pan"
          className="mb-6 flex flex-wrap items-center gap-2 text-on-surface-variant text-xs font-bold uppercase tracking-wider"
        >
          <Link href="/" className="hover:text-secondary transition-colors">
            SHOP
          </Link>
          <span className="material-symbols-outlined text-[14px]">chevron_right</span>
          <Link href="/marketplace" className="hover:text-secondary transition-colors">
            EXTERIOR
          </Link>
          <span className="material-symbols-outlined text-[14px]">chevron_right</span>
          <span className="text-on-surface">HOODS</span>
          <span className="material-symbols-outlined text-[14px]">chevron_right</span>
          <span className="text-secondary truncate max-w-[220px] sm:max-w-none">
            V-SERIES PERFORMANCE CARBON FIBER HOOD
          </span>
        </nav>

        {/* Product Showcase: Grid 12 cols */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left: Image Gallery (7 cols) */}
          <div className="lg:col-span-7 space-y-4">
            {/* Main Stage Image */}
            <div className="aspect-[4/3] bg-surface-container-high overflow-hidden rounded-xl relative group border border-outline-variant/60 shadow-xs">
              <img
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                src={GALLERY_IMAGES[selectedImage].src}
                alt={GALLERY_IMAGES[selectedImage].alt}
              />
              <div className="absolute top-4 left-4 bg-secondary text-white text-[11px] font-bold uppercase tracking-widest px-3 py-1 rounded-full shadow-sm flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                <span>PREMIUM SERIES</span>
              </div>
              <div className="absolute bottom-4 right-4 bg-primary/80 backdrop-blur-xs text-white text-[11px] font-medium px-3 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity">
                {GALLERY_IMAGES[selectedImage].label}
              </div>
            </div>

            {/* Thumbnails Scrollable Row */}
            <div className="flex gap-3 overflow-x-auto pb-2 custom-scrollbar">
              {GALLERY_IMAGES.map((img, idx) => {
                const isActive = selectedImage === idx;
                return (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setSelectedImage(idx)}
                    className={`w-20 h-20 sm:w-24 sm:h-24 shrink-0 rounded-lg overflow-hidden transition-all duration-200 cursor-pointer ${
                      isActive
                        ? "border-2 border-secondary ring-2 ring-secondary/20 scale-[1.02]"
                        : "border border-outline-variant hover:border-secondary opacity-75 hover:opacity-100"
                    }`}
                    title={img.label}
                    aria-label={`Ver ${img.label}`}
                  >
                    <img
                      className="w-full h-full object-cover"
                      src={img.src}
                      alt={img.alt}
                    />
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right: Product Info & Actions (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div>
              <span className="text-[11px] font-bold tracking-widest text-outline uppercase block mb-1">
                AERO SERIES X / INDUSTRIAL PERFORMANCE
              </span>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-primary leading-tight mb-3">
                V-Series Performance Carbon Fiber Hood
              </h1>

              <div className="flex items-center gap-4 flex-wrap">
                <span className="text-3xl font-bold text-primary tracking-tight">
                  $899.00
                </span>
                <span className="text-xs text-outline line-through font-medium">
                  MSRP $1,250.00
                </span>
                <div className="flex items-center gap-1.5 px-3 py-1 bg-emerald-50 text-emerald-800 border border-emerald-200 text-xs font-bold rounded-full">
                  <span className="material-symbols-outlined text-[16px] text-emerald-600">
                    check_circle
                  </span>
                  <span>En Stock para Envío Inmediato</span>
                </div>
              </div>
            </div>

            <div className="h-[1px] bg-outline-variant/60" />

            {/* Fitment Checker */}
            <div className="p-5 bg-surface-container-low rounded-xl border border-outline-variant/80 shadow-xs">
              <div className="flex items-center gap-2 mb-3">
                <span className="material-symbols-outlined text-on-tertiary-container text-[20px]">
                  directions_car
                </span>
                <h3 className="text-xs font-bold text-primary uppercase tracking-wider">
                  FITMENT CHECKER (COMPATIBILIDAD POR VEHÍCULO)
                </h3>
              </div>

              <div className="grid grid-cols-1 gap-3">
                <div className="grid grid-cols-3 gap-2">
                  <select
                    value={selectedYear}
                    onChange={(e) => {
                      setSelectedYear(e.target.value);
                      setFitmentResult({ status: "idle", message: "" });
                    }}
                    aria-label="Seleccionar año del vehículo"
                    className="col-span-1 bg-surface-container-lowest border border-outline-variant py-2 px-2.5 rounded-lg text-xs sm:text-sm font-medium focus:border-on-tertiary-container outline-none"
                  >
                    <option value="">Año</option>
                    <option value="2025">2025</option>
                    <option value="2024">2024</option>
                    <option value="2023">2023</option>
                    <option value="2022">2022</option>
                    <option value="2021">2021</option>
                    <option value="2020">2020</option>
                  </select>

                  <select
                    value={selectedMake}
                    onChange={handleMakeChange}
                    aria-label="Seleccionar fabricante del vehículo"
                    className="col-span-1 bg-surface-container-lowest border border-outline-variant py-2 px-2.5 rounded-lg text-xs sm:text-sm font-medium focus:border-on-tertiary-container outline-none"
                  >
                    <option value="">Marca</option>
                    <option value="BMW">BMW</option>
                    <option value="Audi">Audi</option>
                    <option value="Mercedes-Benz">Mercedes-Benz</option>
                    <option value="Porsche">Porsche</option>
                    <option value="Toyota">Toyota</option>
                  </select>

                  <select
                    value={selectedModel}
                    onChange={(e) => {
                      setSelectedModel(e.target.value);
                      setFitmentResult({ status: "idle", message: "" });
                    }}
                    aria-label="Seleccionar modelo del vehículo"
                    className="col-span-1 bg-surface-container-lowest border border-outline-variant py-2 px-2.5 rounded-lg text-xs sm:text-sm font-medium focus:border-on-tertiary-container outline-none"
                  >
                    <option value="">Modelo</option>
                    {selectedMake &&
                      MAKE_MODELS[selectedMake]?.map((mod) => (
                        <option key={mod} value={mod}>
                          {mod}
                        </option>
                      ))}
                  </select>
                </div>

                <button
                  type="button"
                  onClick={handleCheckFitment}
                  className="w-full bg-on-tertiary-container hover:bg-blue-700 text-white py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer active:scale-[0.99]"
                >
                  CHECK COMPATIBILITY
                </button>
              </div>

              {/* Fitment Result feedback */}
              {fitmentResult.status === "success" && (
                <div className="mt-3 p-3 bg-emerald-50 border border-emerald-300 text-emerald-900 rounded-lg text-xs flex items-start gap-2">
                  <span className="material-symbols-outlined text-[18px] text-emerald-600 shrink-0 mt-0.5">
                    verified
                  </span>
                  <span>{fitmentResult.message}</span>
                </div>
              )}
              {fitmentResult.status === "warning" && (
                <div className="mt-3 p-3 bg-amber-50 border border-amber-300 text-amber-900 rounded-lg text-xs flex items-start gap-2">
                  <span className="material-symbols-outlined text-[18px] text-amber-600 shrink-0 mt-0.5">
                    warning
                  </span>
                  <span>{fitmentResult.message}</span>
                </div>
              )}
              {fitmentResult.status === "idle" && (
                <p className="mt-2 text-[11px] text-on-surface-variant italic">
                  Ingresa los detalles de tu vehículo para garantizar un ajuste OEM milimétrico.
                </p>
              )}
            </div>

            {/* Quantity and Actions */}
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <span className="text-xs font-bold text-outline uppercase tracking-wider">
                  Cantidad:
                </span>
                <div className="flex items-center border border-outline-variant rounded-lg bg-surface-container-lowest overflow-hidden">
                  <button
                    type="button"
                    onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                    className="w-9 h-9 flex items-center justify-center hover:bg-surface-container text-on-surface transition-colors cursor-pointer"
                    aria-label="Disminuir cantidad"
                  >
                    -
                  </button>
                  <span className="w-10 text-center font-bold text-sm text-on-surface">
                    {quantity}
                  </span>
                  <button
                    type="button"
                    onClick={() => setQuantity((q) => q + 1)}
                    className="w-9 h-9 flex items-center justify-center hover:bg-surface-container text-on-surface transition-colors cursor-pointer"
                    aria-label="Aumentar cantidad"
                  >
                    +
                  </button>
                </div>
                <span className="text-xs text-on-surface-variant ml-auto font-medium">
                  Subtotal: <strong className="text-secondary font-bold">${(899 * quantity).toLocaleString()}</strong>
                </span>
              </div>

              {/* Add to Cart button with micro-interaction */}
              <button
                type="button"
                onClick={handleAddToCart}
                disabled={isAdding}
                className="flex items-center justify-center gap-2 w-full bg-secondary hover:bg-secondary-container text-white py-3.5 sm:py-4 rounded-lg font-bold text-base uppercase tracking-wider transition-all active:scale-[0.98] cursor-pointer shadow-md disabled:opacity-80"
              >
                {isAdding ? (
                  <>
                    <span className="material-symbols-outlined text-[22px] animate-spin">
                      progress_activity
                    </span>
                    <span>¡Agregado al Carrito!</span>
                  </>
                ) : (
                  <>
                    <span className="material-symbols-outlined text-[22px]">shopping_cart</span>
                    <span>Add to Cart ({quantity})</span>
                  </>
                )}
              </button>

              {/* Wishlist toggle button */}
              <button
                type="button"
                onClick={() => setIsWishlisted(!isWishlisted)}
                className={`w-full border py-3 rounded-lg text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer flex items-center justify-center gap-2 ${
                  isWishlisted
                    ? "border-secondary bg-red-50 text-secondary"
                    : "border-outline text-on-surface hover:bg-surface-container"
                }`}
              >
                <span className="material-symbols-outlined text-[18px]">
                  {isWishlisted ? "favorite" : "favorite_border"}
                </span>
                <span>{isWishlisted ? "GUARDADO EN FAVORITOS" : "SAVE TO WISHLIST"}</span>
              </button>
            </div>

            {/* Quality & Shipping Badges */}
            <div className="space-y-2.5 pt-2 border-t border-outline-variant/60">
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-outline text-[20px]">
                  local_shipping
                </span>
                <span className="text-sm text-on-surface-variant font-medium">
                  Envío rápido: Despacho en 2-3 días hábiles en caja de madera reforzada.
                </span>
              </div>
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-outline text-[20px]">
                  verified_user
                </span>
                <span className="text-sm text-on-surface-variant font-medium">
                  Garantía estructural de por vida contra deformación y deslaminación.
                </span>
              </div>
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-outline text-[20px]">
                  workspace_premium
                </span>
                <span className="text-sm text-on-surface-variant font-medium">
                  Certificación CAPA & Estándar ISO 9001:2015 Industrial Grade.
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Specs and Technical Details Section */}
        <div className="mt-12 sm:mt-16 border-t border-outline-variant/80 pt-10">
          {/* Tab Navigation */}
          <div className="flex border-b border-outline-variant/60 mb-8 overflow-x-auto gap-4 sm:gap-8">
            <button
              onClick={() => setActiveTab("specs")}
              className={`pb-3 text-sm sm:text-base font-bold whitespace-nowrap border-b-2 transition-colors cursor-pointer ${
                activeTab === "specs"
                  ? "border-secondary text-secondary"
                  : "border-transparent text-on-surface-variant hover:text-on-surface"
              }`}
            >
              Technical Specifications
            </button>
            <button
              onClick={() => setActiveTab("install")}
              className={`pb-3 text-sm sm:text-base font-bold whitespace-nowrap border-b-2 transition-colors cursor-pointer ${
                activeTab === "install"
                  ? "border-secondary text-secondary"
                  : "border-transparent text-on-surface-variant hover:text-on-surface"
              }`}
            >
              Instalación & Montaje
            </button>
            <button
              onClick={() => setActiveTab("shipping")}
              className={`pb-3 text-sm sm:text-base font-bold whitespace-nowrap border-b-2 transition-colors cursor-pointer ${
                activeTab === "shipping"
                  ? "border-secondary text-secondary"
                  : "border-transparent text-on-surface-variant hover:text-on-surface"
              }`}
            >
              Envío & Logística Industrial
            </button>
          </div>

          {activeTab === "specs" && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
              <div className="md:col-span-1 space-y-3">
                <h2 className="text-xl sm:text-2xl font-bold text-primary tracking-tight">
                  Especificaciones de Ingeniería
                </h2>
                <p className="text-on-surface-variant text-sm sm:text-base leading-relaxed">
                  Diseñado para rendimiento a nivel de circuito. Nuestros capós V-Series utilizan fibra de carbono pre-impregnada 3K 2x2 twill curada en autoclave, con acabado en capa transparente cerámica resistente a rayos UV para prevenir decoloración y asegurar un reflejo tipo espejo.
                </p>
                <div className="p-4 bg-surface-container-low rounded-lg border border-outline-variant/60">
                  <span className="text-xs font-bold text-secondary uppercase block mb-1">
                    Número de Pieza OEM FitRite
                  </span>
                  <span className="font-mono text-sm font-semibold text-primary">
                    SKU: FR-HD-CF-V3982
                  </span>
                </div>
              </div>

              <div className="md:col-span-2">
                <div className="overflow-hidden rounded-xl border border-outline-variant shadow-xs">
                  <table className="w-full text-left text-xs sm:text-sm">
                    <tbody>
                      <tr className="bg-surface-container-lowest border-b border-outline-variant/60">
                        <th className="px-5 py-4 font-bold text-on-surface w-1/3">Material</th>
                        <td className="px-5 py-4 text-on-surface-variant">
                          Pre-preg Carbon Fiber (3K 2x2 Twill Weave)
                        </td>
                      </tr>
                      <tr className="bg-surface-container-low border-b border-outline-variant/60">
                        <th className="px-5 py-4 font-bold text-on-surface">Reducción de Peso</th>
                        <td className="px-5 py-4 text-on-surface-variant">
                          55% más ligero que el aluminio OEM (Peso neto: 7.6 kg)
                        </td>
                      </tr>
                      <tr className="bg-surface-container-lowest border-b border-outline-variant/60">
                        <th className="px-5 py-4 font-bold text-on-surface">Acabado Exterior</th>
                        <td className="px-5 py-4 text-on-surface-variant">
                          UV-Resistant High-Gloss Ceramic Clear Coat
                        </td>
                      </tr>
                      <tr className="bg-surface-container-low border-b border-outline-variant/60">
                        <th className="px-5 py-4 font-bold text-on-surface">Instalación</th>
                        <td className="px-5 py-4 text-on-surface-variant">
                          Direct Bolt-on (Compatible con cerrojos y bisagras de fábrica)
                        </td>
                      </tr>
                      <tr className="bg-surface-container-lowest border-b border-outline-variant/60">
                        <th className="px-5 py-4 font-bold text-on-surface">Tolerancia de Calce</th>
                        <td className="px-5 py-4 text-on-surface-variant">
                          Ajuste milimétrico de precisión (± 0.5 mm)
                        </td>
                      </tr>
                      <tr className="bg-surface-container-low">
                        <th className="px-5 py-4 font-bold text-on-surface">Certificación</th>
                        <td className="px-5 py-4 text-on-surface-variant">
                          ISO 9001:2015 Industrial Grade & Estándar CAPA
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {activeTab === "install" && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
              <div className="bg-surface-container-lowest p-6 rounded-xl border border-outline-variant space-y-4">
                <h3 className="text-lg font-bold text-primary flex items-center gap-2">
                  <span className="material-symbols-outlined text-secondary">build</span>
                  <span>Guía de Instalación Plug & Play</span>
                </h3>
                <p className="text-sm text-on-surface-variant leading-relaxed">
                  No requiere perforaciones ni modificaciones estructurales. Cada capó cuenta con insertos roscados de aleación aeronáutica integrados en la estructura inferior para fijarse directamente a las bisagras originales.
                </p>
                <ul className="text-sm text-on-surface-variant space-y-2 list-disc list-inside">
                  <li>Tiempo estimado de instalación: 45 - 60 minutos.</li>
                  <li>Herramientas requeridas: Llave dinamométrica de 10mm y 12mm.</li>
                  <li>Compatible con los amortiguadores de gas OEM del capó.</li>
                </ul>
              </div>

              <div className="bg-surface-container-lowest p-6 rounded-xl border border-outline-variant space-y-4">
                <h3 className="text-lg font-bold text-primary flex items-center gap-2">
                  <span className="material-symbols-outlined text-secondary">verified</span>
                  <span>Recomendaciones de Taller Certificado</span>
                </h3>
                <p className="text-sm text-on-surface-variant leading-relaxed">
                  Para vehículos destinados a competición en pista a velocidades superiores a 240 km/h, se sugiere la instalación de pasadores aerodinámicos de capó (hood pins) homologados por la FIA.
                </p>
              </div>
            </div>
          )}

          {activeTab === "shipping" && (
            <div className="bg-surface-container-lowest p-6 sm:p-8 rounded-xl border border-outline-variant space-y-4">
              <h3 className="text-lg font-bold text-primary flex items-center gap-2">
                <span className="material-symbols-outlined text-secondary">inventory_2</span>
                <span>Protocolo de Embalaje Industrial Crate</span>
              </h3>
              <p className="text-sm sm:text-base text-on-surface-variant leading-relaxed max-w-3xl">
                Debido a las dimensiones y al acabado de alta precisión de los componentes en fibra de carbono, cada pieza se sella en bolsa antiestática, se amortigua con espuma de polietileno de alta densidad y se resguarda dentro de una caja de madera reforzada (Crate) certificada para exportación e impacto industrial.
              </p>
            </div>
          )}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-surface-container-highest mt-16 border-t border-outline-variant">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4 sm:px-6 lg:px-10 py-12 max-w-[1280px] mx-auto">
          <div className="space-y-3">
            <span className="text-xl font-bold text-secondary block">
              FitRite Auto Body Parts
            </span>
            <p className="text-sm text-on-surface-variant leading-relaxed">
              Professional grade automotive parts and services. Engineering excellence for high-performance enthusiasts.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="flex flex-col gap-2">
              <h4 className="text-xs font-bold text-primary uppercase tracking-wider mb-1">
                SHOP
              </h4>
              <Link href="/marketplace" className="text-sm text-on-surface-variant hover:text-secondary hover:underline transition-colors">
                Hoods
              </Link>
              <Link href="/marketplace" className="text-sm text-on-surface-variant hover:text-secondary hover:underline transition-colors">
                Bumpers
              </Link>
              <Link href="/marketplace" className="text-sm text-on-surface-variant hover:text-secondary hover:underline transition-colors">
                Lubricants
              </Link>
            </div>
            <div className="flex flex-col gap-2">
              <h4 className="text-xs font-bold text-primary uppercase tracking-wider mb-1">
                COMPANY
              </h4>
              <Link href="#" className="text-sm text-on-surface-variant hover:text-secondary hover:underline transition-colors">
                Store Location
              </Link>
              <Link href="#" className="text-sm text-on-surface-variant hover:text-secondary hover:underline transition-colors">
                Contact Info
              </Link>
              <Link href="#" className="text-sm text-on-surface-variant hover:text-secondary hover:underline transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>

          <div className="space-y-3">
            <h4 className="text-xs font-bold text-primary uppercase tracking-wider mb-1">
              NEWSLETTER
            </h4>
            {newsletterSent ? (
              <div className="p-3 bg-emerald-50 border border-emerald-300 text-emerald-800 rounded-lg text-xs font-medium">
                ✓ ¡Suscrito al boletín de ingeniería FitRite!
              </div>
            ) : (
              <form onSubmit={handleNewsletter} className="flex">
                <input
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  className="flex-1 bg-surface-container-lowest border border-outline-variant px-3 py-2 rounded-l text-xs sm:text-sm focus:outline-none focus:border-secondary outline-none"
                  placeholder="Email Address"
                  type="email"
                  required
                />
                <button
                  type="submit"
                  className="bg-primary hover:bg-secondary text-white text-xs font-bold uppercase tracking-wider px-4 py-2 rounded-r transition-colors cursor-pointer"
                >
                  JOIN
                </button>
              </form>
            )}
            <p className="text-[12px] text-on-surface-variant">
              © 2024 FitRite Auto Body Parts. Industrial Precision Guaranteed.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

