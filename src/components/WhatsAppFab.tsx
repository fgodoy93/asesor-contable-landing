import { getWhatsAppUrl } from '../data/siteData';

export default function WhatsAppFab() {
  return (
    <a
      href={getWhatsAppUrl('Hola Daniela, me gustaría cotizar asesoría contable')}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
      className="fixed bottom-5 right-5 z-40 w-14 h-14 bg-[#16A34A] hover:bg-[#15803D] text-white rounded-full shadow-xl hover:scale-105 transition-all duration-200 flex items-center justify-center group focus:outline-none focus-visible:ring-4 focus-visible:ring-emerald-300"
    >
      <span className="absolute inset-0 rounded-full bg-emerald-500/30 animate-ping pointer-events-none" />
      <svg
        width="26"
        height="26"
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
        className="relative z-10"
      >
        <path d="M12.004 2C6.484 2 2 6.484 2 12.004C2 13.765 2.458 15.42 3.257 16.858L2 22L7.26 20.767C8.653 21.521 10.274 21.96 12.004 21.96C17.524 21.96 22 17.476 22 11.956C22 6.436 17.524 2 12.004 2ZM17.155 16.29C16.945 16.884 15.825 17.387 15.228 17.447C14.757 17.495 14.1 17.543 11.964 16.658C9.23 15.523 7.458 12.723 7.314 12.532C7.17 12.34 6.131 10.966 6.131 9.544C6.131 8.122 6.848 7.428 7.159 7.117C7.422 6.854 7.828 6.734 8.21 6.734C8.33 6.734 8.438 6.74 8.533 6.746C8.844 6.77 9 6.818 9.203 7.308C9.454 7.918 10.063 9.4 10.135 9.556C10.207 9.711 10.302 9.914 10.207 10.106C10.111 10.309 10.027 10.393 9.872 10.573C9.716 10.752 9.573 10.872 9.418 11.075C9.274 11.254 9.119 11.446 9.298 11.757C9.478 12.056 10.088 13.048 10.984 13.85C12.14 14.882 13.084 15.216 13.418 15.36C13.753 15.503 13.944 15.479 14.147 15.264C14.35 15.048 14.948 14.331 15.163 13.996C15.378 13.66 15.581 13.708 15.892 13.828C16.203 13.947 17.744 14.713 18.055 14.869C18.366 15.024 18.569 15.108 18.641 15.228C18.712 15.347 18.712 15.934 18.509 16.532l-1.354-.242z" />
      </svg>
      <span className="hidden md:block absolute right-16 px-3.5 py-1.5 bg-plum-900 text-white text-xs font-semibold rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap">
        Conversemos por WhatsApp
      </span>
    </a>
  );
}
