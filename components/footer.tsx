import Link from 'next/link'
import { Mail, Phone, MapPin, ArrowUpRight, Instagram, MessageCircle, Send } from 'lucide-react'
import Image from 'next/image'

const services = [
  { label: 'Внедрение AmoCRM', href: '/services' },
  { label: 'Настройка воронок', href: '/services' },
  { label: 'Автоматизация', href: '/services' },
  { label: 'Консалтинг', href: '/services' },
  { label: 'Поддержка', href: '/services' },
]

const integrations = [
  { label: 'WhatsApp', href: '/integrations' },
  { label: 'Telegram', href: '/integrations' },
  { label: 'Сайты', href: '/integrations' },
  { label: 'Платежные системы', href: '/integrations' },
  { label: 'API интеграции', href: '/integrations' },
]

const socialLinks = [
  { 
    label: 'Instagram', 
    href: 'https://www.instagram.com/bolatandco', 
    icon: Instagram,
    color: 'hover:text-pink-500'
  },
  { 
    label: 'WhatsApp', 
    href: 'https://wa.me/77066398062', 
    icon: MessageCircle,
    color: 'hover:text-green-500'
  },
  { 
    label: 'Telegram', 
    href: 'https://t.me/Rizabek_Bolat', 
    icon: Send,
    color: 'hover:text-blue-500'
  },
]

export function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4 group">
              <div className="relative w-8 h-8">
                <Image
                  src="/favicon.ico"
                  alt="BOLAT & CO Logo"
                  width={32}
                  height={32}
                  className="object-contain"
                />
              </div>
              <span
                className="text-2xl font-bold tracking-tight"
                style={{ fontFamily: 'var(--font-syne)' }}
              >
                <span className="text-foreground">BOLAT</span>
                <span className="text-primary">&</span>
                <span className="text-foreground">CO</span>
              </span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed mb-6">
              Внедряем AmoCRM, автоматизируем бизнес-процессы и увеличиваем продажи. Работаем с компаниями, которые хотят расти.
            </p>
            <div className="flex flex-col gap-2 text-sm text-muted-foreground">
              <a
                href="mailto:corp@bolatco.kz"
                className="flex items-center gap-2 hover:text-primary transition-colors"
              >
                <Mail size={14} className="text-primary shrink-0" />
                corp@bolatco.kz
              </a>
              <a
                href="tel:+77001234567"
                className="flex items-center gap-2 hover:text-primary transition-colors"
              >
                <Phone size={14} className="text-primary shrink-0" />
                +7 (706) 639 80 62
              </a>
              <span className="flex items-center gap-2">
                <MapPin size={14} className="text-primary shrink-0" />
                Алматы, Казахстан
              </span>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-primary mb-5">
              Услуги
            </h3>
            <ul className="flex flex-col gap-3">
              {services.map((s) => (
                <li key={s.label}>
                  <Link
                    href={s.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1 group"
                  >
                    <span className="w-4 h-px bg-border group-hover:bg-primary transition-colors" />
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Integrations */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-primary mb-5">
              Интеграции
            </h3>
            <ul className="flex flex-col gap-3">
              {integrations.map((i) => (
                <li key={i.label}>
                  <Link
                    href={i.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1 group"
                  >
                    <span className="w-4 h-px bg-border group-hover:bg-primary transition-colors" />
                    {i.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-primary mb-5">
              Социальные сети
            </h3>
            <p className="text-sm text-muted-foreground mb-5 leading-relaxed">
              Следите за нами в соцсетях и задавайте вопросы
            </p>
            <div className="flex flex-col gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-all group ${social.color}`}
                  >
                    <Icon size={18} className="shrink-0 transition-transform group-hover:scale-110" />
                    <span>{social.label}</span>
                    <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-all -translate-x-1 group-hover:translate-x-0" />
                  </a>
                )
              })}
            </div>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <span>© {new Date().getFullYear()} Bolat & Co. Все права защищены.</span>
          <div className="flex items-center gap-6">
            <Link href="/portfolio" className="hover:text-foreground transition-colors">
              Портфолио
            </Link>
            <Link href="/partners" className="hover:text-foreground transition-colors">
              Партнерам
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}