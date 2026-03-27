import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { services } from '@/lib/data'
import { cases } from '@/lib/data'

export function ServicesPreview() {
  return (
    <section className="bg-background border-t border-border py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-primary mb-4 block">
              Услуги
            </span>
            <h2
              className="text-4xl md:text-5xl font-bold text-balance"
              style={{ fontFamily: 'var(--font-syne)' }}
            >
              Что мы делаем
            </h2>
          </div>
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:gap-3 transition-all"
          >
            Все услуги <ArrowRight size={16} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
          {services.slice(0, 3).map((service) => (
            <div
              key={service.id}
              className="bg-card p-8 group hover:bg-secondary transition-colors"
            >
              <div
                className="text-5xl font-bold text-border group-hover:text-primary/20 transition-colors mb-6"
                style={{ fontFamily: 'var(--font-syne)' }}
              >
                {service.icon}
              </div>
              <h3
                className="text-xl font-bold mb-3"
                style={{ fontFamily: 'var(--font-syne)' }}
              >
                {service.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                {service.description}
              </p>
              <Link
                href="/services"
                className="inline-flex items-center gap-1 text-sm font-semibold text-primary opacity-0 group-hover:opacity-100 transition-opacity"
              >
                Подробнее <ArrowRight size={14} />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function AdvantagesSection() {
  const advantages = [
    {
      num: '01',
      title: 'Работаем по методологии',
      desc: 'Чёткий процесс внедрения — без хаоса и потери данных.',
    },
    {
      num: '02',
      title: 'Команда из практиков',
      desc: 'Бывшие руководители продаж и CRM-разработчики с опытом 5+ лет.',
    },
    {
      num: '03',
      title: 'Результат по договору',
      desc: 'Фиксируем KPI в договоре — платите за результат, не за часы.',
    },
    {
      num: '04',
      title: 'Поддержка после запуска',
      desc: 'Сопровождаем от запуска до масштабирования — мы не исчезаем.',
    },
  ]

  return (
    <section className="bg-card border-t border-border py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-14">
          <span className="text-xs font-semibold uppercase tracking-widest text-primary mb-4 block">
            Преимущества
          </span>
          <h2
            className="text-4xl md:text-5xl font-bold text-balance max-w-xl"
            style={{ fontFamily: 'var(--font-syne)' }}
          >
            Почему выбирают нас
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border">
          {advantages.map((adv) => (
            <div key={adv.num} className="bg-card p-8 flex flex-col gap-4">
              <span
                className="text-xs font-semibold uppercase tracking-widest text-primary"
              >
                {adv.num}
              </span>
              <h3
                className="text-lg font-bold"
                style={{ fontFamily: 'var(--font-syne)' }}
              >
                {adv.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{adv.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function CasesPreview() {
  return (
    <section className="relative bg-background border-t border-border py-24 px-6 overflow-hidden">
      <div className="relative max-w-7xl mx-auto z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-primary mb-4 block">
              Кейсы
            </span>
            <h2
              className="text-4xl md:text-5xl font-bold text-balance"
              style={{ fontFamily: 'var(--font-syne)' }}
            >
              Реальные результаты
            </h2>
          </div>
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:gap-3 transition-all"
          >
            Все кейсы <ArrowRight size={16} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border">
          {cases.slice(0, 2).map((c) => (
            <div key={c.id} className="relative bg-card p-8 group hover:bg-secondary transition-colors overflow-hidden">
              {/* Фоновое изображение */}
              <div className="absolute inset-0 z-0 opacity-20 group-hover:opacity-30 transition-opacity">
                <div 
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${c.image})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/80 to-transparent" />
              </div>
              
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-6">
                  <span className="text-xs font-semibold uppercase tracking-widest text-primary">
                    {c.tag}
                  </span>
                  <span className="text-xs text-muted-foreground">{c.industry}</span>
                </div>
                <h3
                  className="text-2xl font-bold mb-4"
                  style={{ fontFamily: 'var(--font-syne)' }}
                >
                  {c.company}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-6">{c.problem}</p>
                <div className="flex flex-wrap gap-3">
                  {c.metrics.map((m) => (
                    <div
                      key={m.label}
                      className="flex flex-col bg-background/80 backdrop-blur-sm px-4 py-3 border border-border rounded-md"
                    >
                      <span
                        className="text-xl font-bold text-primary"
                        style={{ fontFamily: 'var(--font-syne)' }}
                      >
                        {m.value}
                      </span>
                      <span className="text-xs text-muted-foreground">{m.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function TrustedBySection() {
  const partners = [
    {
      id: '1',
      name: 'TechCorp',
      logo: '/logos/1.png',
    },
    {
      id: '2',
      name: 'InnovateLabs',
      logo: '/logos/2.png',
    },
    {
      id: '3',
      name: 'SmartFlow',
      logo: '/logos/3.webp',
    },
    {
      id: '4',
      name: 'DataCore',
      logo: '/logos/4.jpg',
    },
    {
      id: '5',
      name: 'FutureSoft',
      logo: '/logos/5.png',
    },
    {
      id: '6',
      name: 'AlphaGroup',
      logo: '/logos/6.png',
    },
    {
      id: '7',
      name: 'PrimeSolutions',
      logo: '/logos/m.png',
    },
    {
      id: '8',
      name: 'NexusTech',
      logo: '/logos/8.svg',
    },
    {
      id: '9',
      name: 'Visionary',
      logo: '/logos/sdu.png',
    },
    {
      id: '10',
      name: 'GlobalTrade',
      logo: '/logos/10.png',
    },
  ]

  return (
    <section className="bg-card border-t border-border py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-14">
          <span className="text-xs font-semibold uppercase tracking-widest text-primary mb-4 block">
            Нам доверяют
          </span>
          <h2
            className="text-4xl md:text-5xl font-bold text-balance max-w-xl"
            style={{ fontFamily: 'var(--font-syne)' }}
          >
            Наши партнеры
          </h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-px bg-border">
          {partners.map((partner) => (
            <div
              key={partner.id}
              className="bg-card p-4 md:p-6 flex items-center justify-center group transition-all duration-300 hover:bg-muted/30"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="w-full max-w-[100px] h-12 object-contain transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function CtaBanner() {
  return (
    <section className="bg-primary py-20 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        <div>
          <h2
            className="text-3xl md:text-4xl font-bold text-primary-foreground text-balance"
            style={{ fontFamily: 'var(--font-syne)' }}
          >
            Готовы к росту продаж?
          </h2>
          <p className="text-primary-foreground/70 mt-2 text-lg">
            Бесплатная консультация — 30 минут с нашим экспертом.
          </p>
        </div>
        <Link
          href="#contact"
          className="shrink-0 inline-flex items-center gap-2 bg-background text-foreground px-8 py-4 font-semibold uppercase tracking-wide text-sm hover:bg-background/90 transition-colors"
        >
          Записаться бесплатно
          <ArrowRight size={16} />
        </Link>
      </div>
    </section>
  )
}
