import { useState } from 'react';
import { useTranslation } from 'react-i18next';

export default function FloatingContact() {
  const { t } = useTranslation();
  const [expanded, setExpanded] = useState(false);

  const whatsappUrl = 'https://wa.me/85599590033';
  const telegramUrl = 'https://t.me/+85599590033';

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {expanded && (
        <>
          {/* Telegram */}
          <a
            href={telegramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-[#0088CC] text-white rounded-full pl-3 pr-5 py-2.5 cursor-pointer transition-all duration-200 hover:scale-105 hover:bg-[#006aaa]"
            style={{ boxShadow: '0 4px 16px rgba(0,136,204,0.4)' }}
          >
            <span className="w-8 h-8 flex items-center justify-center bg-white/20 rounded-full flex-shrink-0">
              <i className="ri-telegram-fill text-lg"></i>
            </span>
            <div>
              <p className="text-xs font-bold whitespace-nowrap leading-tight">Telegram</p>
              <p className="text-xs text-white/80 whitespace-nowrap leading-tight">+855 99 590 033</p>
            </div>
          </a>

          {/* WhatsApp */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-[#25D366] text-white rounded-full pl-3 pr-5 py-2.5 cursor-pointer transition-all duration-200 hover:scale-105 hover:bg-[#1dba58]"
            style={{ boxShadow: '0 4px 16px rgba(37,211,102,0.4)' }}
          >
            <span className="w-8 h-8 flex items-center justify-center bg-white/20 rounded-full flex-shrink-0">
              <i className="ri-whatsapp-line text-lg"></i>
            </span>
            <div>
              <p className="text-xs font-bold whitespace-nowrap leading-tight">WhatsApp</p>
              <p className="text-xs text-white/80 whitespace-nowrap leading-tight">+855 99 590 033</p>
            </div>
          </a>

          {/* Label */}
          <div className="bg-white rounded-xl px-4 py-2 text-center" style={{ boxShadow: '0 2px 10px rgba(0,0,0,0.12)' }}>
            <p className="text-xs font-bold text-gray-800 whitespace-nowrap">{t('floating_chat_with_us')}</p>
            <p className="text-xs text-gray-500 whitespace-nowrap">{t('floating_instant_reply')}</p>
          </div>
        </>
      )}

      {/* Toggle Button */}
      <button
        onClick={() => setExpanded((v) => !v)}
        className="w-14 h-14 flex items-center justify-center bg-teal-600 hover:bg-teal-700 text-white rounded-full cursor-pointer transition-all duration-200 hover:scale-105"
        style={{ boxShadow: '0 4px 20px rgba(15,118,110,0.5)' }}
        aria-label="Contact us"
      >
        <i
          className={`text-2xl transition-transform duration-200 ${
            expanded ? 'ri-close-line rotate-90' : 'ri-message-3-line'
          }`}
        ></i>
      </button>

      {/* Pulse ring when closed */}
      {!expanded && (
        <span className="absolute bottom-0 right-0 w-14 h-14 rounded-full bg-teal-500/30 animate-ping pointer-events-none"></span>
      )}
    </div>
  );
}
