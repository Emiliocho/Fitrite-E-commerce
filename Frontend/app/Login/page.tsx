"use client";

import React, { useState, FormEvent } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [focusedField, setFocusedField] = useState<"email" | "password" | null>(null);
  const [rememberMe, setRememberMe] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState<{
    type: "error" | "success";
    text: string;
  } | null>(null);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatusMessage(null);

    if (!email || !password) {
      setStatusMessage({
        type: "error",
        text: "Por favor completa todos los campos requeridos.",
      });
      return;
    }

    setIsLoading(true);

    try {
      // Simulación de autenticación (aquí se conectará con el endpoint del backend / API)
      await new Promise((resolve) => setTimeout(resolve, 1000));

      setStatusMessage({
        type: "success",
        text: "¡Inicio de sesión exitoso! Redirigiendo...",
      });

      setTimeout(() => {
        router.push("/");
      }, 1200);
    } catch {
      setStatusMessage({
        type: "error",
        text: "Error al iniciar sesión. Verifica tus credenciales.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-background text-on-background font-sans overflow-hidden min-h-screen">
      <main className="flex min-h-screen w-full">
        {/* Visual Section (Split Left) */}
        <section className="hidden lg:flex lg:w-1/2 relative overflow-hidden bg-primary-container select-none">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <div
              className="w-full h-full bg-cover bg-center brightness-50 contrast-125"
              style={{
                backgroundImage:
                  "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBxsatjphmh3g1JD_tjuiBq63gYkkxCL7SsgAp9wJyVwxgedfIFs_v4GBA6nQrmYyNJprLKMFAkHq8sOVKDH0q-6FfPa1boZpA5Gsd-m7uKPoB7tx17zh-uL19lO8nUCGN3cp-svQIP0Dah84__uyyqgB7BJeNhUyh2IEkrwkvtwmvuM67OgvOyKIkz4Xw_6PuxbhNg8BBx5cMCb4x9gquJG4bFT_VS6mx-wu4mBa5IwiPIXWIqGogQyA')",
              }}
              data-alt="Meticulously maintained high-performance car engine with metallic surfaces and carbon fiber details"
            />
          </div>

          {/* Branding Overlay */}
          <div className="relative z-10 p-10 xl:p-14 flex flex-col justify-between h-full w-full">
            <Link
              href="/"
              className="flex items-center gap-2 group transition-opacity hover:opacity-90 w-fit"
            >
              <span className="text-2xl font-bold tracking-tight text-secondary-fixed">
                FitRite Auto Body Parts
              </span>
            </Link>

            <div className="max-w-md">
              <h1 className="text-4xl xl:text-5xl font-bold text-white mb-3 tracking-tight leading-tight">
                Industrial Precision. Guaranteed.
              </h1>
              <p className="text-lg text-surface-variant opacity-80 leading-relaxed">
                Access your professional dashboard for FitRite auto body parts and supply chain management.
              </p>
            </div>

            <div className="flex items-center gap-6 text-white/60 text-sm font-medium tracking-wide">
              <span>V 2.4.0</span>
              <span className="w-1.5 h-1.5 rounded-full bg-white/30" />
              <span>ISO 9001 CERTIFIED</span>
            </div>
          </div>

          {/* Subtle Decorative Element */}
          <div className="absolute right-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/10 to-transparent" />
        </section>

        {/* Form Section (Split Right) */}
        <section className="w-full lg:w-1/2 bg-surface-container-lowest flex flex-col justify-center px-6 sm:px-12 md:px-24 xl:px-36 py-12 overflow-y-auto">
          <div className="max-w-md w-full mx-auto">
            {/* Back button */}
            <div className="mb-6">
              <Link
                href="/"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-on-surface-variant hover:text-secondary transition-colors group"
              >
                <span className="material-symbols-outlined text-[18px] group-hover:-translate-x-1 transition-transform">
                  arrow_back
                </span>
                <span>Volver al inicio</span>
              </Link>
            </div>

            {/* Mobile Branding */}
            <div className="lg:hidden mb-10 flex flex-col items-center">
              <Link href="/">
                <span className="text-2xl font-bold text-secondary">
                  FitRite Auto Body Parts
                </span>
              </Link>
            </div>

            <header className="mb-8">
              <h2 className="text-2xl font-bold tracking-tight text-primary mb-2">
                Sign In
              </h2>
              <p className="text-on-surface-variant text-base">
                Enter your credentials to manage your inventory.
              </p>
            </header>

            {/* Status alerts */}
            {statusMessage && (
              <div
                className={`mb-6 p-4 rounded-lg text-sm flex items-start gap-2.5 ${
                  statusMessage.type === "error"
                    ? "bg-red-50 text-red-800 border border-red-200"
                    : "bg-emerald-50 text-emerald-800 border border-emerald-200"
                }`}
              >
                <span className="material-symbols-outlined text-[20px] shrink-0 mt-0.5">
                  {statusMessage.type === "error" ? "error" : "check_circle"}
                </span>
                <span>{statusMessage.text}</span>
              </div>
            )}

            <form className="space-y-6" id="login-form" onSubmit={handleSubmit}>
              {/* Email Field */}
              <div className="space-y-2">
                <label
                  className={`block text-xs font-bold uppercase tracking-wider login-transition ${
                    focusedField === "email"
                      ? "text-secondary font-bold"
                      : "text-on-surface-variant"
                  }`}
                  htmlFor="email"
                >
                  Email Address
                </label>
                <div className="relative">
                  <input
                    className="w-full px-4 py-3 bg-white border border-outline-variant rounded focus:border-tertiary-fixed-dim input-focus-ring login-transition text-on-background placeholder:text-outline-variant text-sm md:text-base"
                    id="email"
                    name="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    onFocus={() => setFocusedField("email")}
                    onBlur={() => setFocusedField(null)}
                    placeholder="name@fitrite.com"
                    autoComplete="email"
                    required
                  />
                </div>
              </div>

              {/* Password Field */}
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <label
                    className={`block text-xs font-bold uppercase tracking-wider login-transition ${
                      focusedField === "password"
                        ? "text-secondary font-bold"
                        : "text-on-surface-variant"
                    }`}
                    htmlFor="password"
                  >
                    Password
                  </label>
                  <a
                    className="text-xs font-bold uppercase tracking-wider text-[#4184df] hover:text-blue-700 transition-colors"
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      alert("Recuperación de contraseña: Por favor contacta al administrador de FitRite o verifica tu correo corporativo.");
                    }}
                  >
                    Forgot Password?
                  </a>
                </div>
                <div className="relative">
                  <input
                    className="w-full pl-4 pr-11 py-3 bg-white border border-outline-variant rounded focus:border-tertiary-fixed-dim input-focus-ring login-transition text-on-background placeholder:text-outline-variant text-sm md:text-base"
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    onFocus={() => setFocusedField("password")}
                    onBlur={() => setFocusedField(null)}
                    placeholder="••••••••"
                    autoComplete="current-password"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-outline hover:text-on-surface p-1 transition-colors flex items-center justify-center"
                    tabIndex={-1}
                    aria-label={showPassword ? "Ocultar contraseña" : "Ver contraseña"}
                  >
                    <span className="material-symbols-outlined text-[20px]">
                      {showPassword ? "visibility_off" : "visibility"}
                    </span>
                  </button>
                </div>
              </div>

              {/* Remember me option */}
              <div className="flex items-center gap-2 pt-1">
                <input
                  type="checkbox"
                  id="remember-me"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="w-4 h-4 rounded border-outline-variant text-secondary focus:ring-secondary accent-secondary cursor-pointer"
                />
                <label
                  htmlFor="remember-me"
                  className="text-sm text-on-surface-variant cursor-pointer select-none"
                >
                  Recordar mi cuenta en este dispositivo
                </label>
              </div>

              {/* Action Button */}
              <button
                className="w-full py-4 bg-secondary text-white text-xs font-bold uppercase tracking-widest rounded-lg hover:bg-secondary-container active:scale-[0.98] transition-all shadow-md flex items-center justify-center gap-2 mt-2 group cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed"
                type="submit"
                disabled={isLoading}
              >
                {isLoading ? (
                  <span className="inline-flex items-center gap-2">
                    <svg
                      className="animate-spin h-4 w-4 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      />
                    </svg>
                    <span>Autenticando...</span>
                  </span>
                ) : (
                  <>
                    <span>Sign In</span>
                    <span
                      className="material-symbols-outlined text-[20px] group-hover:translate-x-1 transition-transform"
                      data-icon="chevron_right"
                    >
                      chevron_right
                    </span>
                  </>
                )}
              </button>
            </form>

            {/* Divider */}
            <div className="relative my-8">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-outline-variant" />
              </div>
              <div className="relative flex justify-center text-xs font-bold bg-surface-container-lowest px-4 text-on-surface-variant uppercase tracking-wider">
                Or Continue With
              </div>
            </div>

            {/* Social Logins */}
            <div className="grid grid-cols-2 gap-3">
              <button
                type="button"
                onClick={() => alert("Inicio de sesión con Google próximamente disponible.")}
                className="flex items-center justify-center gap-2 py-3 px-4 bg-white border border-outline-variant rounded hover:bg-surface-container transition-colors active:scale-95 cursor-pointer"
              >
                <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24">
                  <path
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    fill="#4285F4"
                  />
                  <path
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    fill="#34A853"
                  />
                  <path
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"
                    fill="#FBBC05"
                  />
                  <path
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 12-4.53z"
                    fill="#EA4335"
                  />
                </svg>
                <span className="text-xs font-bold uppercase tracking-wider text-on-surface-variant">
                  Google
                </span>
              </button>

              <button
                type="button"
                onClick={() => alert("Inicio de sesión con Apple ID próximamente disponible.")}
                className="flex items-center justify-center gap-2 py-3 px-4 bg-white border border-outline-variant rounded hover:bg-surface-container transition-colors active:scale-95 cursor-pointer"
              >
                <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24">
                  <path
                    d="M17.05 20.28c-.96.95-2.45 1.78-4.14 1.72-1.74-.07-2.75-.85-4.13-.85-1.39 0-2.65.84-4.1.91-1.68.07-3.32-.97-4.28-2.05-2.02-2.26-2.31-6.17-1.12-8.52.88-1.74 2.65-2.85 4.54-2.88 1.4-.02 2.51.85 3.51.85s2.21-.9 3.86-.74c.69.03 2.62.28 3.85 2.09-.1.06-2.3 1.34-2.27 3.98.03 3.19 2.79 4.3 2.81 4.31-.02.06-.41 1.45-1.43 2.47l.01-.01zM12.03 5.31c-.13-2.3 1.83-4.34 4.06-4.31.25 2.52-2.31 4.58-4.06 4.31z"
                    fill="#000000"
                  />
                </svg>
                <span className="text-xs font-bold uppercase tracking-wider text-on-surface-variant">
                  Apple
                </span>
              </button>
            </div>

            {/* Footer */}
            <footer className="mt-8 text-center">
              <p className="text-sm text-on-surface-variant">
                New partner?{" "}
                <Link
                  href="/register"
                  className="text-secondary font-bold hover:underline"
                >
                  Apply for an account
                </Link>
              </p>
            </footer>
          </div>
        </section>
      </main>
    </div>
  );
}

