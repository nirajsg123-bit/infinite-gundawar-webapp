'use client'
import { useState } from 'react'

const languages = [
  { code: 'en', name: 'English', flag: '🇮🇳' },
  { code: 'hi', name: 'हिंदी', flag: '🇮🇳' },
  { code: 'mr', name: 'मराठी', flag: '🇮🇳' },
  { code: 'gu', name: 'ગુજરાતી', flag: '🇮🇳' },
  { code: 'bn', name: 'বাংলা', flag: '🇮🇳' },
  { code: 'ta', name: 'தமிழ்', flag: '🇮🇳' },
  { code: 'te', name: 'తెలుగు', flag: '🇮🇳' },
  { code: 'kn', name: 'ಕನ್ನಡ', flag: '🇮🇳' },
  { code: 'es', name: 'Español', flag: '🇪🇸' },
  { code: 'fr', name: 'Français', flag: '🇫🇷' },
  { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
  { code: 'zh', name: '中文', flag: '🇨🇳' },
]

const translations: Record<string, Record<string, string>> = {
  hi: { home: 'होम', about: 'हमारे बारे में', services: 'सेवाएं', contact: 'संपर्क', finance: 'वित्त', ayurveda: 'आयुर्वेद', happiness: 'खुशी', career: 'करियर' },
  mr: { home: 'मुख्यपृष्ठ', about: 'आमच्याबद्दल', services: 'सेवा', contact: 'संपर्क', finance: 'वित्त', ayurveda: 'आयुर्वेद', happiness: 'आनंद', career: 'करियर' },
}

export function FloatingBots() {
  const [showLangBot, setShowLangBot] = useState(false)
  const [selectedLang, setSelectedLang] = useState('en')
  const [showWhatsApp, setShowWhatsApp] = useState(false)

  return (
    <>
      {/* Language Bot Button */}
      <button onClick={() => setShowLangBot(!showLangBot)}
        className="fixed bottom-6 left-6 z-50 w-14 h-14 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 shadow-xl flex items-center justify-center hover:scale-110 transition-transform group">
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" /></svg>
        <span className="absolute bottom-full left-0 mb-2 px-3 py-1.5 bg-[#0f172a] text-white text-xs rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">🌐 Language</span>
      </button>

      {/* Language Bot Panel */}
      {showLangBot && (
        <div className="fixed bottom-24 left-6 z-50 w-72 bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden">
          <div className="bg-gradient-to-r from-indigo-600 to-purple-700 p-4 text-white flex items-center justify-between">
            <div className="flex items-center gap-2"><span className="text-lg">🌐</span><h4 className="font-bold text-sm">Language / भाषा</h4></div>
            <button onClick={() => setShowLangBot(false)} className="w-7 h-7 rounded-lg bg-white/10 flex items-center justify-center hover:bg-white/20">✕</button>
          </div>
          <div className="p-3 grid grid-cols-2 gap-2 max-h-[300px] overflow-y-auto">
            {languages.map(lang => (
              <button key={lang.code} onClick={() => { setSelectedLang(lang.code); setShowLangBot(false) }}
                className={`flex items-center gap-2 px-3 py-2.5 rounded-xl text-sm transition-all ${selectedLang === lang.code ? 'bg-indigo-100 text-indigo-700 font-medium border-2 border-indigo-300' : 'bg-gray-50 text-gray-600 hover:bg-gray-100 border-2 border-transparent'}`}>
                <span className="text-lg">{lang.flag}</span>
                <span>{lang.name}</span>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* WhatsApp Bot Button */}
      <button onClick={() => setShowWhatsApp(!showWhatsApp)}
        className="fixed bottom-6 right-24 z-50 w-14 h-14 rounded-full bg-gradient-to-br from-green-500 to-emerald-600 shadow-xl flex items-center justify-center hover:scale-110 transition-transform group">
        <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
        <span className="absolute bottom-full right-0 mb-2 px-3 py-1.5 bg-[#0f172a] text-white text-xs rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">💬 WhatsApp</span>
      </button>

      {/* WhatsApp Panel */}
      {showWhatsApp && (
        <div className="fixed bottom-24 right-24 z-50 w-80 bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden">
          <div className="bg-gradient-to-r from-green-500 to-emerald-600 p-4 text-white">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2"><span className="text-lg">💬</span><h4 className="font-bold text-sm">WhatsApp Support</h4></div>
              <button onClick={() => setShowWhatsApp(false)} className="w-7 h-7 rounded-lg bg-white/10 flex items-center justify-center hover:bg-white/20">✕</button>
            </div>
          </div>
          <div className="p-4 space-y-3">
            <p className="text-sm text-gray-600">Get instant support on WhatsApp. Choose a topic:</p>
            {[
              { label: '🏗️ Real Estate Inquiry', msg: 'Hi, I\'m interested in real estate services' },
              { label: '🌿 Ayurveda Consultation', msg: 'Hi, I want to book an Ayurveda consultation' },
              { label: '💼 Business Partnership', msg: 'Hi, I\'d like to discuss a business partnership' },
              { label: '📊 Finance & Investment', msg: 'Hi, I need financial advice' },
              { label: '🎓 Career Counselling', msg: 'Hi, I need career guidance' },
              { label: '🤖 AI Tools Help', msg: 'Hi, I need help with AI tools' },
            ].map(item => (
              <a key={item.label} href={`https://wa.me/919****1665?text=${encodeURIComponent(item.msg)}`} target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 bg-green-50 rounded-xl hover:bg-green-100 transition-all border border-green-100">
                <span className="text-sm font-medium text-gray-700">{item.label}</span>
              </a>
            ))}
            <div className="bg-gray-50 rounded-xl p-3 text-center">
              <p className="text-xs text-gray-500">Or call us directly</p>
              <a href="tel:+919****1665" className="text-lg font-bold text-emerald-600">+91 94043 11665</a>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
