"use client";

import { useEffect, useState } from "react";

const products = [
  { name: "Capo Carbon Aero-Series", category: "Carroceria", price: "$936.75", oldPrice: "$1,249.00", discount: "-25%", sku: "HD-CF-9088", image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=900&q=85" },
  { name: "Parachoques Delantero HD", category: "Parachoques", price: "$480.00", oldPrice: "$640.50", discount: "-25%", sku: "BP-ST-4120", image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=900&q=85" },
  { name: "Kit Faros LED Matrix", category: "Iluminacion", price: "$870.00", oldPrice: "$1,245.00", discount: "-30%", sku: "LT-MX-0033", image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=900&q=85" },
  { name: "Lubricante Sintetico 5W-30", category: "Mantenimiento", price: "$63.75", oldPrice: "$84.99", discount: "-25%", sku: "LB-SY-5W30", image: "https://images.unsplash.com/photo-1615906655593-ad0386982a0f?auto=format&fit=crop&w=900&q=85" },
];

const categories = [
  ["CAPOS / GUARDABARROS", "Paneles laterales y frontales de precision", "https://images.unsplash.com/photo-1544829099-b9a0c07fad1a?auto=format&fit=crop&w=800&q=80"],
  ["PARACHOQUES", "Bumpers delanteros y traseros", "https://images.unsplash.com/photo-1551830820-330a71b99659?auto=format&fit=crop&w=800&q=80"],
  ["FAROS LED", "Halogeno, Xenon y Matrix LED", "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?auto=format&fit=crop&w=800&q=80"],
  ["ESPEJOS / VIDRIOS", "Retrovisores y sensores de punto ciego", "https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=800&q=80"],
  ["CHASIS / MOTOR", "Radiadores, travesanos y blindaje", "https://images.unsplash.com/photo-1486006920555-c77dcf18193c?auto=format&fit=crop&w=800&q=80"],
];

export default function Home() {
  const [cart, setCart] = useState(0);
  const [query, setQuery] = useState("");
  const [seconds, setSeconds] = useState(14 * 3600 + 39 * 60 + 35);
  const [notice, setNotice] = useState("");

  useEffect(() => {
    const timer = window.setInterval(() => setSeconds((current) => current > 0 ? current - 1 : 24 * 3600), 1000);
    return () => window.clearInterval(timer);
  }, []);

  const addToCart = (name: string) => {
    setCart((current) => current + 1);
    setNotice(`${name} agregado al carrito`);
    window.setTimeout(() => setNotice(""), 2200);
  };

  const clock = (value: number) => String(value).padStart(2, "0");
  const filteredProducts = products.filter((product) => product.name.toLowerCase().includes(query.toLowerCase()) || product.sku.toLowerCase().includes(query.toLowerCase()));

  return (
    <div className="site-shell">
      {notice && <div className="toast">+ {notice}</div>}
      <header className="site-header">
        <div className="header-inner">
          <a className="brand" href="#top" aria-label="FitRite Auto Body Parts"><strong>FITRITE</strong><span>AUTO BODY PARTS</span></a>
          <div className="search-box"><span className="search-mark">/</span><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Buscar por VIN, OEM o numero de pieza..." aria-label="Buscar piezas" /><button type="button">FILTROS</button></div>
          <nav className="header-actions"><a href="#catalogo">CATALOGO</a><a href="#soporte">SOPORTE</a><button className="cart-button" type="button" aria-label="Carrito">CARRITO <b>{cart}</b></button></nav>
        </div>
        <div className="nav-strip"><div className="header-inner"><a className="active" href="#top">Marketplace</a><a href="#catalogo">Categorias</a><a href="#catalogo">Marcas compatibles</a><a href="#ofertas">Ofertas</a><a href="#soporte">Soporte B2B / Talleres</a><span className="account-link">Iniciar sesion <strong>REGISTRARSE -&gt;</strong></span></div></div>
      </header>

      <main id="top">
        <section className="hero">
          <div className="hero-image" />
          <div className="content hero-grid"><div className="hero-copy"><span className="eyebrow"><i /> ESTANDAR OEM / CERTIFICACION CAPA</span><h1>Repuestos y carroceria de <em>precision industrial.</em></h1><p>Piezas certificadas OEM y Aftermarket de alta resistencia para talleres, flotas y apasionados del rendimiento automotriz. Ajuste milimetrico garantizado por VIN.</p><div className="hero-buttons"><a className="button button-red" href="#selector">BUSCAR REPUESTO <span>-&gt;</span></a><a className="button button-ghost" href="#catalogo">VER CATALOGO COMPLETO</a></div></div><div className="precision-panel"><span>INDICE DE PRECISION</span><strong>99.8% TOLERANCIA CERO</strong><div className="meter"><i /></div><small>Validado contra planos OEM originales.</small></div></div>
          <div className="content selector" id="selector"><div className="selector-heading"><div><span className="red-kicker">FINDER / 01</span><h2>Encuentra tu pieza exacta</h2></div><span className="compatibility">[OK] 100% COMPATIBILIDAD GARANTIZADA</span></div><div className="selector-fields"><label>Ano<select defaultValue=""><option value="" disabled>Seleccionar ano</option><option>2025</option><option>2024</option><option>2023</option><option>2022</option></select></label><label>Marca<select defaultValue=""><option value="" disabled>Seleccionar marca</option><option>Toyota</option><option>Ford</option><option>Chevrolet</option><option>Nissan</option></select></label><label>Modelo<select defaultValue=""><option value="" disabled>Seleccionar modelo</option><option>Hilux / Tacoma</option><option>F-150 / Raptor</option><option>Silverado 1500</option></select></label><label>Categoria<select defaultValue=""><option value="" disabled>Tipo de repuesto</option><option>Capos y paneles</option><option>Parachoques</option><option>Iluminacion LED</option></select></label><button className="button button-red" type="button" onClick={() => setNotice("Buscando compatibilidad por VIN...")}>BUSCAR <span>-&gt;</span></button></div><div className="trust-row"><span>[+] Compatibilidad garantizada</span><span>[+] Despacho 24/48h nacional</span><span>[+] Garantia estructural de 2 anos</span></div></div>
        </section>

        <section className="content value-section"><div className="section-intro"><span className="red-kicker">POR QUE FITRITE</span><h2>Precision industrial construida para durar.</h2><p>No comercializamos piezas genericas sin soporte. Cada componente pasa por control dimensional y pruebas de fatiga para que el montaje sea rapido, limpio y resistente a impactos reales.</p></div><div className="value-grid">{[["01", "Ajuste perfecto", "Puntos de anclaje identicos a fabrica. Cero modificaciones y horas extra de taller."], ["02", "Materiales top-tier", "Acero electrogalvanizado y polimeros ABS de alto modulo termico."], ["03", "Directo de fabrica", "Cadena logistica sin intermediarios. Stock real y precios transparentes."], ["04", "Validacion por VIN", "Nuestro equipo tecnico verifica el chasis antes de cada despacho."]].map(([number, title, copy]) => <article className="value-card" key={number}><span className="card-number">{number}</span><h3>{title}</h3><p>{copy}</p><strong>VERIFICADO -&gt;</strong></article>)}</div></section>

        <section className="deals" id="ofertas"><div className="content"><div className="deal-banner"><div><span className="eyebrow"><i /> FLASH DEAL DE TEMPORADA</span><h2>Ofertas en carroceria e iluminacion</h2><p>Hasta 35% OFF en lineas seleccionadas para reposicion y colision.</p></div><div className="countdown"><div><b>{clock(Math.floor(seconds / 3600))}</b><span>HORAS</span></div><i>:</i><div><b>{clock(Math.floor((seconds % 3600) / 60))}</b><span>MIN</span></div><i>:</i><div><b>{clock(seconds % 60)}</b><span>SEG</span></div></div></div><div className="product-grid">{filteredProducts.map((product) => <article className="product-card" key={product.sku}><div className="product-image" style={{ backgroundImage: `url(${product.image})` }}><span className="discount">{product.discount}</span><span className="sku">SKU: {product.sku}</span></div><div className="product-info"><span className="product-category">{product.category}</span><h3>{product.name}</h3><p>Calce directo verificado. Acabado profesional y materiales de alto rendimiento.</p><div className="price"><strong>{product.price}</strong><del>{product.oldPrice}</del></div><button className="button button-red add-button" onClick={() => addToCart(product.name)} type="button">+ ANADIR AL CARRITO</button></div></article>)}</div></div></section>

        <section className="content catalog" id="catalogo"><div className="section-heading"><div><span className="red-kicker">GAMA DE REPOSICION</span><h2>Categorias populares</h2></div><a href="#selector">EXPLORAR LAS 28 LINEAS -&gt;</a></div><div className="category-grid">{categories.map(([name, copy, image]) => <a className="category-card" href="#selector" key={name}><div className="category-image" style={{ backgroundImage: `url(${image})` }} /><h3>{name}</h3><p>{copy}</p><strong>VER PIEZAS -&gt;</strong></a>)}</div></section>

        <section className="content reviews" id="soporte"><div className="section-heading"><div><span className="stars">*****</span><span className="rating"> 4.9 / 5.0 GLOBAL RATING</span><h2>Confianza de tecnicos y especialistas</h2></div><p>Mas de 450 talleres mecanicos confian en la calibracion y durabilidad FitRite.</p></div><div className="review-grid">{[["RC", "Rodrigo Cardenas", "Jefe de Taller, Precision Motors", "La alineacion con los tapabarros fue milimetrica, sin forzar soportes. El acabado E-Coat ahorro dos horas de preparacion."], ["MV", "Mauricio Valenzuela", "Gerente de Operaciones, Red Carrozados", "La validacion por VIN es lo que mas valoramos. La compatibilidad siempre ha sido del 100%."], ["EP", "Esteban Pena", "Cliente particular", "El kit Matrix LED llego en 24 horas y encendio de inmediato, sin errores en la ECU."]].map(([initials, name, role, quote]) => <article className="review-card" key={name}><span className="stars">*****</span><p>&quot;{quote}&quot;</p><div className="reviewer"><span>{initials}</span><div><strong>{name}</strong><small>{role}</small></div></div></article>)}</div></section>
      </main>
      <footer><div className="content footer-grid"><div><a className="brand footer-brand" href="#top"><strong>FITRITE</strong><span>PARTS</span></a><p>Distribuidor tecnico especializado en carroceria, paneles de precision e insumos para reacondicionamiento automotriz.</p></div><div><h4>CATALOGO</h4><a href="#catalogo">Carroceria</a><a href="#catalogo">Parachoques</a><a href="#catalogo">Iluminacion</a></div><div><h4>SOPORTE</h4><a href="#soporte">Portal Talleres / B2B</a><a href="#soporte">Seguimiento de envios</a><a href="#soporte">Garantias</a></div><div><h4>CONTACTO</h4><p>+56 (2) 2890 4100<br />contacto@fitriteautoparts.com</p><a className="button button-red" href="mailto:contacto@fitriteautoparts.com">CONTACTAR INGENIERO</a></div></div><div className="content footer-bottom">© 2026 FitRite Auto Body Parts S.A. <span>Privacidad tecnica / Terminos de garantia</span></div></footer>
    </div>
  );
}
