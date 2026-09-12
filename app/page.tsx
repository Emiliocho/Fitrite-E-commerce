import Link from "next/link";
import DealCountdown from "@/components/DealCountdown";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-surface flex flex-col">
      {/* HEADER */}
      <header className="fixed top-0 w-full z-50 bg-surface-container-lowest shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
        <div className="h-20 max-w-[1280px] mx-auto px-6 lg:px-12 flex items-center justify-between gap-6">
          <Link href="/" className="flex items-baseline gap-1.5 focus:outline-none">
            <span className="text-2xl tracking-tight text-primary uppercase font-bold">FITRITE</span>
            <span className="text-xs text-secondary uppercase tracking-widest font-bold">AUTO BODY PARTS</span>
          </Link>

          <div className="flex-1 max-w-xl hidden md:flex items-center bg-surface-container-low rounded-lg px-3 py-1.5 focus-within:ring-1 focus-within:ring-primary">
            <span className="material-symbols-outlined text-outline shrink-0 text-[20px] mr-2">search</span>
            <input
              className="w-full bg-transparent text-sm text-on-surface placeholder:text-outline focus:outline-none"
              placeholder="Buscar por VIN, OEM o N° de pieza (ej. 53100-02560)..."
              type="text"
            />
            <button className="ml-2 text-outline hover:text-on-surface transition-colors p-1 flex items-center" type="button">
              <span className="material-symbols-outlined text-[18px]">tune</span>
            </button>
          </div>

          <div className="flex items-center gap-4 shrink-0">
            <button aria-label="Carrito de compras" className="relative p-2 text-on-surface hover:text-secondary transition-colors" type="button">
              <span className="material-symbols-outlined text-[22px]">shopping_cart</span>
              <span className="absolute top-1 right-1 w-4 h-4 rounded-full bg-secondary text-white text-[10px] font-bold flex items-center justify-center leading-none">
                0
              </span>
            </button>
            <div className="h-6 w-[1px] bg-surface-container-highest hidden sm:block" />
            <div className="hidden sm:flex items-center gap-2">
              <Link href="#" className="px-3 py-2 text-sm text-on-surface-variant hover:text-on-surface transition-colors">
                Iniciar Sesión
              </Link>
              <Link href="#" className="px-4 py-2 bg-secondary text-white text-xs font-bold rounded uppercase hover:bg-secondary-container transition-colors flex items-center gap-1.5">
                <span>Registrarse</span>
                <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
              </Link>
            </div>
            <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white">
              <span className="material-symbols-outlined text-[18px]">person</span>
            </div>
          </div>
        </div>

        {/* Sub-nav */}
        <div className="bg-surface-container-low border-t border-surface-container">
          <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
            <nav className="flex items-center gap-8 h-10 overflow-x-auto text-sm">
              <Link href="#" className="text-on-surface font-semibold whitespace-nowrap">Marketplace</Link>
              <Link href="#" className="text-on-surface-variant hover:text-on-surface whitespace-nowrap">Categorías</Link>
              <Link href="#" className="text-on-surface-variant hover:text-on-surface whitespace-nowrap">Marcas compatibles</Link>
              <Link href="#" className="text-on-surface-variant hover:text-on-surface whitespace-nowrap">Ofertas</Link>
              <Link href="#" className="text-on-surface-variant hover:text-on-surface whitespace-nowrap">Soporte B2B/Talleres</Link>
            </nav>
          </div>
        </div>
      </header>

      {/* MAIN CONTENT */}
      <main className="w-full pt-30 flex-1">
        {/* 1. HERO SECTION */}
        <section className="relative w-full overflow-hidden bg-primary text-on-primary py-16 lg:py-24">
          <div
            className="absolute inset-0 opacity-20 pointer-events-none mix-blend-luminosity bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBBgqc4drRQFsBu9FcNA_lerVM0DcOvIu19flzsx39JfwaIHXNR888GauTQTb19F3EuP8veA60TjA7lRI8KXl08MdhfHoNlx8lxoNMJ3khT5ohqaiS-t1MkRQqw_o0DSu1N2KawKrS82UEo5DCu-SefmQQLHi0v79PPhShp2edVpC8ypR-c-uoleN5EgarGpvRRsr9QvA-oBysG74BFNbuJdCbb7oxexN6JLdVtvWytRb387UJGMHhuhQ')",
            }}
          />

          <div className="relative max-w-[1280px] mx-auto px-6 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-7 flex flex-col items-start">
                <div className="flex items-center gap-2 px-3 py-1 bg-white/10 rounded-full mb-6">
                  <span className="w-2 h-2 rounded-full bg-secondary-container animate-pulse" />
                  <span className="text-[11px] font-bold tracking-widest text-primary-fixed uppercase">
                    ESTÁNDAR OEM & CERTIFICACIÓN CAPA
                  </span>
                </div>
                <h1 className="text-4xl lg:text-5xl font-bold tracking-tight text-white mb-6 uppercase leading-tight">
                  Repuestos y Carrocería de <span className="text-secondary-container">Precisión Industrial</span>
                </h1>
                <p className="text-lg text-primary-fixed max-w-2xl mb-8">
                  Piezas certificadas OEM y Aftermarket de alta resistencia para talleres, flotas y apasionados del rendimiento automotriz. Ajuste milimétrico garantizado por VIN.
                </p>
                <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto">
                  <a href="#selector-rapido" className="w-full sm:w-auto px-8 py-4 bg-secondary text-white text-xs font-bold rounded uppercase tracking-wider hover:bg-secondary-container transition-all flex items-center justify-center gap-2 shadow-lg">
                    <span>Buscar Repuesto</span>
                    <span className="material-symbols-outlined text-[18px]">build</span>
                  </a>
                  <a href="#catalogo" className="w-full sm:w-auto px-6 py-4 bg-white/10 hover:bg-white/20 text-white text-sm font-medium rounded transition-all flex items-center justify-center gap-2">
                    <span>Ver Catálogo Completo</span>
                    <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                  </a>
                </div>
              </div>

              <div className="lg:col-span-5 flex flex-col gap-4">
                <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl text-white border border-white/10">
                  <div className="flex items-center justify-between pb-4 mb-4">
                    <div>
                      <span className="text-xs text-outline-variant uppercase tracking-wider block">Índice de Precisión</span>
                      <p className="text-2xl font-bold text-white">99.8% Tolerancia Cero</p>
                    </div>
                    <span className="material-symbols-outlined text-secondary-container text-[36px]">precision_manufacturing</span>
                  </div>
                  <div className="w-full bg-white/20 h-2 rounded-full overflow-hidden">
                    <div className="bg-secondary-container h-full rounded-full" style={{ width: "98.4%" }} />
                  </div>
                  <p className="text-xs text-outline-variant mt-3">Validado en banco de pruebas contra planos OEM originales.</p>
                </div>
              </div>
            </div>

            {/* Quick Finder Bar */}
            <div className="mt-14 w-full bg-surface-container-lowest text-on-surface rounded-xl p-6 lg:p-8 shadow-xl" id="selector-rapido">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-secondary text-[26px]">directions_car</span>
                  <div>
                    <h2 className="text-xl font-bold uppercase text-on-surface">Encuentra Tu Pieza Exacta</h2>
                    <p className="text-sm text-on-surface-variant">Calce directo verificado sin adaptaciones mecánicas</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-on-surface-variant bg-surface-container-low px-3 py-1.5 rounded">
                  <span className="material-symbols-outlined text-[18px]">verified_user</span>
                  <span className="text-xs font-semibold">100% Compatibilidad Garantizada</span>
                </div>
              </div>

              <form className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="text-[11px] font-bold text-on-surface-variant uppercase">1. Año</label>
                  <select defaultValue="" className="w-full bg-surface-container-low px-3 py-3 rounded text-sm text-on-surface focus:outline-none">
                    <option disabled value="">Seleccionar año</option>
                    <option value="2025">2025</option>
                    <option value="2024">2024</option>
                    <option value="2023">2023</option>
                    <option value="2022">2022</option>
                  </select>
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-[11px] font-bold text-on-surface-variant uppercase">2. Marca</label>
                  <select defaultValue="" className="w-full bg-surface-container-low px-3 py-3 rounded text-sm text-on-surface focus:outline-none">
                    <option disabled value="">Seleccionar marca</option>
                    <option value="toyota">Toyota</option>
                    <option value="ford">Ford</option>
                    <option value="nissan">Nissan</option>
                  </select>
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-[11px] font-bold text-on-surface-variant uppercase">3. Modelo</label>
                  <select defaultValue="" className="w-full bg-surface-container-low px-3 py-3 rounded text-sm text-on-surface focus:outline-none">
                    <option disabled value="">Seleccionar modelo</option>
                    <option value="hilux">Hilux / Tacoma</option>
                    <option value="f150">F-150 / Raptor</option>
                  </select>
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-[11px] font-bold text-on-surface-variant uppercase">4. Categoría</label>
                  <select defaultValue="" className="w-full bg-surface-container-low px-3 py-3 rounded text-sm text-on-surface focus:outline-none">
                    <option disabled value="">Tipo de repuesto</option>
                    <option value="hoods">Capós & Paneles</option>
                    <option value="bumpers">Parachoques / Bumpers</option>
                  </select>
                </div>
                <div className="flex flex-col justify-end">
                  <button type="button" className="w-full py-3.5 bg-secondary hover:bg-secondary-container text-white text-xs font-bold uppercase rounded transition-all flex items-center justify-center gap-2">
                    <span>Buscar</span>
                    <span className="material-symbols-outlined text-[18px]">search</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>

        {/* 2. FLASH DEALS SECTION */}
        <section className="w-full bg-surface-container-low py-20" id="ofertas-destacadas">
          <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
            <div className="bg-primary text-white rounded-2xl p-8 lg:p-10 mb-12 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 shadow-xl">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-secondary-container rounded-full text-white text-xs uppercase mb-3 font-bold">
                  <span className="material-symbols-outlined text-[16px]">bolt</span>
                  <span>Flash Deal de Temporada</span>
                </div>
                <h2 className="text-2xl font-bold uppercase text-white">Ofertas de Temporada en Carrocería</h2>
                <p className="text-sm text-primary-fixed mt-1">Hasta 35% OFF en líneas seleccionadas para reposición y colisión.</p>
              </div>
              <DealCountdown />
            </div>

            {/* Grid de Productos */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: "Capó Fibra de Carbono Ventilado Aero-Series",
                  category: "Capós Especializados",
                  sku: "HD-CF-9088",
                  price: "$936.75",
                  oldPrice: "$1,249.00",
                  discount: "-25% OFF",
                  img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAMF28Byb4ifu_GLD3Lo2rQ4bXxZEO2fVUw4oMraW2BbS6MEk-zIoiyuASDCtL8txkiHcaLXTxshJKFzlkVvADMOtkGfeb48lfog66Ki6_yXcp1v9USWDmLj3JADpwSaGM7Yq6SEdeaWM1KQzOO7ZBSBpY3fLr-Bvy_UtKW0XyRXWF2OfEmj1IAkwIyW7ntrlPTkRnYM5OQlXhPSZdqzlvpnEfIkzxmb3ZWPjlhWIX_Hy0JmV5GDdEsqQ",
                },
                {
                  title: "Paragolpes Delantero Reforzado Acero HD",
                  category: "Parachoques & Bumpers",
                  sku: "BP-ST-4120",
                  price: "$480.00",
                  oldPrice: "$640.50",
                  discount: "-25% OFF",
                  img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBPauGvaqISfgi862DxtRV8APRij9k3Zzc8inC4VIDNN2rGlmO_LG0KxXCoJuo-PGarbqSJmG7vG0ZCRpi1xA-qXNUO-_tvNppUp5_RxxMc6xPiDwCCDGxXxT9Ila_9MZ3PnPTAT0bCq9enOct097KHTEppgcqFcwvSj_4S-iaCeQEFlkkpCStqVvFBvASmgoHkRIU2T5QBzpU3hECVcbsadHz21NLIcpQG3lgADklF-26LS2op2ylhhQ",
                },
                {
                  title: "Kit Faros LED Matrix Pro Dual Beam",
                  category: "Sistemas de Iluminación",
                  sku: "LT-MX-0033",
                  price: "$870.00",
                  oldPrice: "$1,245.00",
                  discount: "-30% OFF",
                  img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAldsWg5LmeGhfqVPxJRUwKBar2gOw1A2TOFMcmTK6U_DYxvwJcXMZvL2bf1o2MIxiqnwU7eIqxhf5cqhZsmK69wE-6umK8IoHCMrOLo-by2p-Q3ajoezgDcpXT0YDs4KvjuuCB56Vz1-tVs9bDTBlkmUbWUAmusVoMKiTt2oqJJx0dnbHZc6XIyUSeYL--__keZ5ImoQRL8KAdL5Gztxa4Rgn8Vai1oSg2AUmcpLOPHF4VPqk-zzjr8w",
                },
                {
                  title: "Lubricante Sintético 5W-30 Alto Rendimiento",
                  category: "Fluidos & Mantenimiento",
                  sku: "LB-SY-5W30",
                  price: "$63.75",
                  oldPrice: "$84.99",
                  discount: "-25% OFF",
                  img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAk6E8LQKyt-MACXm4VdWJHeAbqsaz7QmMN7IqzyBZUVb5UApAeIKWlBr9uO9zALuYeS8AO6qmxN0H5zDjlXda7wLWOQlbbcM-3Ycp_-3cP6nbokZpBRTVPIl61lrInFqK5hk4x_n5VM4l_An4Iy24cyACoK8w4y7Wo-I6SoefL7Q3xsj2Uz8zP22Z1KfPqdN_Nqx82-ca7fBfR_jaFMzfuv2fwnVcDanALOq74u_p4OVp-Sh-BttddJA",
                },
              ].map((item) => (
                <div key={item.sku} className="bg-surface-container-lowest rounded-xl overflow-hidden flex flex-col justify-between shadow-sm hover:shadow-md transition-all">
                  <div>
                    <div
                      className="relative w-full h-56 bg-surface-container bg-cover bg-center"
                      style={{ backgroundImage: `url('${item.img}')` }}
                    >
                      <span className="absolute top-3 left-3 bg-secondary text-white px-2.5 py-1 rounded text-xs font-bold uppercase">
                        {item.discount}
                      </span>
                      <span className="absolute top-3 right-3 bg-white/90 px-2 py-1 rounded text-xs font-medium text-on-surface">
                        SKU: {item.sku}
                      </span>
                    </div>
                    <div className="p-6">
                      <span className="text-[11px] font-bold text-on-surface-variant uppercase tracking-wider block mb-1">
                        {item.category}
                      </span>
                      <h3 className="text-base font-bold text-on-surface mb-2">{item.title}</h3>
                      <div className="flex items-baseline gap-2 mb-4">
                        <span className="text-xl font-bold text-secondary">{item.price}</span>
                        <span className="text-sm text-outline line-through">{item.oldPrice}</span>
                      </div>
                    </div>
                  </div>
                  <div className="p-6 pt-0 flex gap-2">
                    <button type="button" className="flex-1 py-2.5 bg-secondary hover:bg-secondary-container text-white text-xs font-bold uppercase rounded transition-colors flex items-center justify-center gap-1">
                      <span className="material-symbols-outlined text-[16px]">add_shopping_cart</span>
                      <span>Añadir</span>
                    </button>
                    <button type="button" className="px-3 py-2.5 bg-surface-container-low hover:bg-surface-container text-on-surface rounded transition-colors" title="Ver ficha técnica">
                      <span className="material-symbols-outlined text-[18px]">visibility</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 3. TESTIMONIOS */}
        <section className="w-full max-w-[1280px] mx-auto px-6 lg:px-12 py-20">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <div className="flex text-secondary-container">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                      star
                    </span>
                  ))}
                </div>
                <span className="text-xs font-bold text-on-surface">4.9 / 5.0 Global Rating</span>
              </div>
              <h2 className="text-3xl font-bold uppercase text-on-surface">Confianza de Técnicos y Especialistas</h2>
            </div>
            <p className="text-sm text-on-surface-variant max-w-md">
              Más de 450 talleres mecánicos confían en la calibración y durabilidad de nuestras piezas.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                text: "Compramos parachoques delantero y capó para una Hilux 2022. La alineación con los tapabarros fue milimétrica, sin tener que calentar o forzar soportes.",
                name: "Rodrigo Cárdenas",
                role: "Jefe de Taller, Precision Motors",
                initials: "RC",
              },
              {
                text: "La validación por número de chasis (VIN) es lo que más valoramos. Con FitRite la compatibilidad siempre ha sido al 100%.",
                name: "Mauricio Valenzuela",
                role: "Gerente de Operaciones, Red Carrozados",
                initials: "MV",
              },
              {
                text: "Pedí un kit de ópticas Matrix LED para reemplazo post-choque. Llegaron en 24 horas a provincia con embalaje reforzado. Encendido sin errores en ECU.",
                name: "Esteban Peña",
                role: "Cliente Particular / Entusiasta",
                initials: "EP",
              },
            ].map((review, idx) => (
              <div key={idx} className="bg-surface-container-low p-8 rounded-xl flex flex-col justify-between">
                <div>
                  <div className="flex text-secondary mb-4">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                        star
                      </span>
                    ))}
                  </div>
                  <p className="text-sm text-on-surface mb-6 leading-relaxed">"{review.text}"</p>
                </div>
                <div className="pt-4 flex items-center gap-3 border-t border-surface-container">
                  <div className="w-10 h-10 rounded-full bg-surface-container-highest flex items-center justify-center font-bold text-on-surface text-sm">
                    {review.initials}
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-on-surface uppercase">{review.name}</h4>
                    <span className="text-xs text-on-surface-variant">{review.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="w-full bg-surface-container-low border-t border-surface-container">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-12 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12 pb-10 border-b border-surface-container">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-surface-container-lowest text-secondary shadow-sm">
                <span className="material-symbols-outlined text-[24px]">verified</span>
              </div>
              <div>
                <h4 className="text-xs font-bold text-on-surface uppercase mb-1">Calidad Certificada</h4>
                <p className="text-xs text-on-surface-variant">Estándares OEM y normas CAPA/TÜV garantizados.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-surface-container-lowest text-secondary shadow-sm">
                <span className="material-symbols-outlined text-[24px]">fit_screen</span>
              </div>
              <div>
                <h4 className="text-xs font-bold text-on-surface uppercase mb-1">Ajuste Garantizado</h4>
                <p className="text-xs text-on-surface-variant">Validación milimétrica por VIN.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-surface-container-lowest text-secondary shadow-sm">
                <span className="material-symbols-outlined text-[24px]">local_shipping</span>
              </div>
              <div>
                <h4 className="text-xs font-bold text-on-surface uppercase mb-1">Logística Express</h4>
                <p className="text-xs text-on-surface-variant">Despachos prioritarios para talleres.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-surface-container-lowest text-secondary shadow-sm">
                <span className="material-symbols-outlined text-[24px]">assignment_turned_in</span>
              </div>
              <div>
                <h4 className="text-xs font-bold text-on-surface uppercase mb-1">Garantía de 2 Años</h4>
                <p className="text-xs text-on-surface-variant">Cobertura total contra defectos de fábrica.</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-on-surface-variant">
            <p>© 2024 FitRite Auto Body Parts S.A. Todos los derechos reservados.</p>
            <div className="flex items-center gap-6">
              <span className="hover:text-on-surface cursor-pointer">Privacidad Técnica</span>
              <span className="hover:text-on-surface cursor-pointer">Términos de Garantía</span>
              <span className="hover:text-on-surface cursor-pointer">Cumplimiento Normativo</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}