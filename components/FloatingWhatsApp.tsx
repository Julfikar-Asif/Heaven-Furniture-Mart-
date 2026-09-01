import { MessageSquare } from "lucide-react";

export default function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/8801960481983"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform duration-300 flex items-center justify-center group"
      aria-label="Chat on WhatsApp"
    >
      <MessageSquare size={24} className="fill-current" />
      <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-300 ease-in-out font-semibold text-xs px-0 group-hover:px-2">
        Chat on WhatsApp
      </span>
    </a>
  );
}