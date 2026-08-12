import Image from "next/image";

export default function Page() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-white px-6 py-16">
      <div className="max-w-xl w-full text-center">
        <div className="flex flex-col sm:flex-row items-center sm:items-end justify-center gap-6 sm:gap-6 mb-10 sm:mb-12 animate-dissolve [animation-delay:0ms] relative select-none">
          <Image
            alt=""
            draggable={false}
            width={320}
            height={94}
            className="w-[160px] sm:w-[240px] md:w-[320px] h-auto"
            src="/logo-aata.svg"
          />
          <div className="hidden sm:block w-px h-16 md:h-20 bg-gray-300 shrink-0" />
          <Image
            alt=""
            draggable={false}
            width={320}
            height={76}
            className="w-[150px] sm:w-[230px] md:w-[320px] h-auto"
            src="/logo-aatai.svg"
          />
          <div className="absolute inset-0" />
        </div>
        <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 leading-snug mb-2 animate-dissolve [animation-delay:200ms]">
          Estamos trabajando en nuestro sitio web
        </h1>
        <p className="text-base sm:text-lg text-gray-500 leading-relaxed animate-dissolve [animation-delay:400ms]">
          Muy pronto vas a poder encontrar acá toda la información.
          <br className="hidden sm:block" />
          Mientras tanto, gracias por tu paciencia.
        </p>
      </div>
    </main>
  );
}
