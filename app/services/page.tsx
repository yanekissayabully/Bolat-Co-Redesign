import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { ContactForm } from '@/components/contact-form'
import { services } from '@/lib/data'
import { Check, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import type { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Услуги — Bolat & Co',
  description:
    'Внедрение AmoCRM, настройка воронок продаж, автоматизация процессов, консалтинг и поддержка. Полный цикл работы с CRM.',
}

const process = [
  { num: '01', title: 'Аудит', desc: 'Изучаем ваши процессы, находим узкие места и точки роста.' },
  { num: '02', title: 'Стратегия', desc: 'Создаём план внедрения с чёткими KPI и сроками.' },
  { num: '03', title: 'Настройка', desc: 'Конфигурируем AmoCRM, интегрируем нужные сервисы.' },
  { num: '04', title: 'Обучение', desc: 'Проводим обучение команды и тестируем все сценарии.' },
  { num: '05', title: 'Запуск', desc: 'Запускаем систему в бой и сопровождаем первые 30 дней.' },
]

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        {/* Hero */}
        {/* <section className="bg-background py-24 px-6 border-b border-border">
          <div className="max-w-7xl mx-auto">
            <span className="text-xs font-semibold uppercase tracking-widest text-primary mb-4 block">
              Услуги
            </span>
            <h1
              className="text-5xl md:text-7xl font-bold text-balance mb-6 max-w-4xl"
              style={{ fontFamily: 'var(--font-syne)' }}
            >
              Всё для роста{' '}
              <span className="text-primary">ваших продаж</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
              Комплексные решения на базе AmoCRM — от аудита текущих процессов до полноценного
              запуска и поддержки системы продаж.
            </p>
          </div>
        </section> */}

        <section className="bg-background py-24 px-6 border-b border-border">
  <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
    {/* Левая часть с текстом */}
    <div className="flex-1">
      <span className="text-xs font-semibold uppercase tracking-widest text-primary mb-4 block">
        Услуги
      </span>
      <h1
        className="text-5xl md:text-7xl font-bold text-balance mb-6 max-w-4xl"
        style={{ fontFamily: 'var(--font-syne)' }}
      >
        Всё для роста{' '}
        <span className="text-primary">ваших продаж</span>
      </h1>
      <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
        Комплексные решения на базе AmoCRM — от аудита текущих процессов до полноценного
        запуска и поддержки системы продаж.
      </p>
    </div>

    {/* Правая часть с изображением */}
    <div className="flex-1 flex justify-center lg:justify-end items-end">
      <div className="relative w-full max-w-xs">
        <Image
          src="/1.png"
          alt="Swagy illustration"
          width={300}
          height={300}
          className="w-full h-auto object-contain"
          priority
        />
      </div>
    </div>
  </div>
</section>

        {/* Services List */}
        <section className="bg-card py-24 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col gap-px bg-border">
              {services.map((service, idx) => (
                <div
                  key={service.id}
                  className="bg-card hover:bg-secondary transition-colors group"
                >
                  <div className="p-8 md:p-10 grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
                    <div className="md:col-span-1">
                      <span
                        className="text-4xl font-bold text-border group-hover:text-primary/30 transition-colors"
                        style={{ fontFamily: 'var(--font-syne)' }}
                      >
                        {service.icon}
                      </span>
                    </div>
                    <div className="md:col-span-5">
                      <h2
                        className="text-2xl md:text-3xl font-bold mb-3"
                        style={{ fontFamily: 'var(--font-syne)' }}
                      >
                        {service.title}
                      </h2>
                      <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                    </div>
                    <div className="md:col-span-4">
                      <ul className="flex flex-col gap-2">
                        {service.features.map((f) => (
                          <li key={f} className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Check size={14} className="text-primary shrink-0" />
                            {f}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="md:col-span-2 flex items-start justify-end">
                      <Link
                        href="#contact"
                        className="inline-flex items-center gap-2 border border-primary text-primary px-5 py-2.5 text-sm font-semibold uppercase tracking-wide hover:bg-primary hover:text-primary-foreground transition-colors rounded-lg"
                      >
                        Заказать
                        <ArrowRight size={14} />
                      </Link>
                    </div>
                  </div>
                  {idx < services.length - 1 && (
                    <div className="h-px bg-border mx-8 md:mx-10" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="bg-background border-t border-border py-24 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="mb-14">
              <span className="text-xs font-semibold uppercase tracking-widest text-primary mb-4 block">
                Как мы работаем
              </span>
              <h2
                className="text-4xl md:text-5xl font-bold text-balance"
                style={{ fontFamily: 'var(--font-syne)' }}
              >
                Наш процесс
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-px bg-border">
              {process.map((step) => (
                <div key={step.num} className="bg-card p-8 flex flex-col gap-4">
                  <span
                    className="text-4xl font-bold text-primary"
                    style={{ fontFamily: 'var(--font-syne)' }}
                  >
                    {step.num}
                  </span>
                  <h3
                    className="text-lg font-bold"
                    style={{ fontFamily: 'var(--font-syne)' }}
                  >
                    {step.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <ContactForm />
      </main>
      <Footer />
    </>
  )
}
