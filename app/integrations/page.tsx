import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { ContactForm } from '@/components/contact-form'
import { integrations } from '@/lib/data'
import { Check, ArrowRight, Zap } from 'lucide-react'
import Link from 'next/link'
import type { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Интеграции — Bolat & Co',
  description:
    'Интегрируем AmoCRM с WhatsApp, Telegram, сайтами, платёжными системами и любыми API. Единая экосистема для вашего бизнеса.',
}

const techStack = [
  'WhatsApp Business API',
  'Telegram Bot API',
  'Bitrix24',
  'Tilda',
  'WordPress',
  'Kaspi Pay',
  'CloudPayments',
  '1С Предприятие',
  'Roistat',
  'Google Analytics',
  'Яндекс.Метрика',
  'Calltouch',
]

export default function IntegrationsPage() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        {/* Hero */}

<section className="bg-background border-b border-border relative overflow-hidden">
  {/* Контент с текстом */}
  <div className="relative z-10 py-24 px-6">
    <div className="max-w-7xl mx-auto">
      <div className="max-w-2xl">
        <span className="text-xs font-semibold uppercase tracking-widest text-primary mb-4 block">
          Интеграции
        </span>
        <h1
          className="text-5xl md:text-7xl font-bold text-balance mb-6"
          style={{ fontFamily: 'var(--font-syne)' }}
        >
          Единая экосистема{' '}
          <span className="text-primary">для вашего бизнеса</span>
        </h1>
        
        {/* Подложка для текста на мобильных */}
        <div className="relative">
          {/* Полупрозрачная подложка для мобилок */}
          <div className="absolute inset-0 bg-background/50 backdrop-blur-sm rounded-lg md:hidden" />
          
          {/* Текст */}
          <p className="relative text-lg text-muted-foreground leading-relaxed md:bg-transparent md:p-0 p-4 rounded-lg">
            Подключаем все каналы коммуникации, платёжные системы и сервисы к AmoCRM.
            Все данные — в одном месте, все процессы — автоматизированы.
          </p>
        </div>
      </div>
    </div>
  </div>

  {/* Изображение справа внизу */}
  <div className="absolute right-0 bottom-0 w-80 lg:w-96 pointer-events-none">
    <Image
      src="/swagy.png"
      alt="Integrations illustration"
      width={500}
      height={500}
      className="w-full h-auto object-contain"
      priority
    />
  </div>
</section>

        {/* Integrations Grid */}
        <section className="bg-card py-24 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="mb-14">
              <span className="text-xs font-semibold uppercase tracking-widest text-primary mb-4 block">
                Что подключаем
              </span>
              <h2
                className="text-4xl font-bold text-balance"
                style={{ fontFamily: 'var(--font-syne)' }}
              >
                Интеграции под любую задачу
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
              {integrations.map((integration) => (
                <div
                  key={integration.id}
                  className="bg-card p-8 hover:bg-secondary transition-colors group"
                >
                  <div className="flex items-center gap-4 mb-5">
                    <div className="flex items-center justify-center w-12 h-12 bg-secondary border border-border text-2xl rounded-lg">
                      {integration.icon}
                    </div>
                    <h3
                      className="text-xl font-bold"
                      style={{ fontFamily: 'var(--font-syne)' }}
                    >
                      {integration.name}
                    </h3>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                    {integration.description}
                  </p>
                  <ul className="flex flex-col gap-2">
                    {integration.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Check size={13} className="text-primary shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Tech Stack */}
        {/* <section className="bg-background border-t border-border py-24 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="mb-14">
              <span className="text-xs font-semibold uppercase tracking-widest text-primary mb-4 block">
                Технологии
              </span>
              <h2
                className="text-4xl font-bold text-balance"
                style={{ fontFamily: 'var(--font-syne)' }}
              >
                Работаем с любым стеком
              </h2>
            </div>
            <div className="flex flex-wrap gap-3">
              {techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 border border-border text-sm text-muted-foreground hover:border-primary hover:text-foreground transition-colors cursor-default"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </section> */}

        {/* Why integrate */}
        <section className="bg-card border-t border-border py-24 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <span className="text-xs font-semibold uppercase tracking-widest text-primary mb-4 block">
                  Зачем это нужно
                </span>
                <h2
                  className="text-4xl md:text-5xl font-bold text-balance mb-6"
                  style={{ fontFamily: 'var(--font-syne)' }}
                >
                  Разрозненные инструменты убивают продажи
                </h2>
                <p className="text-muted-foreground leading-relaxed text-lg mb-8">
                  Когда WhatsApp, сайт, звонки и оплаты живут в разных местах — менеджеры тратят
                  время на копирование данных вместо продаж. Мы объединяем всё в AmoCRM.
                </p>
                <Link
                  href="#contact"
                  className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 text-sm font-semibold uppercase tracking-wide hover:bg-primary/90 transition-colors rounded-lg"
                >
                  Обсудить интеграцию
                  <ArrowRight size={14} />
                </Link>
              </div>
              <div className="grid grid-cols-1 gap-px bg-border">
                {[
                  { title: 'До интеграции', items: ['Данные в 5 разных системах', 'Менеджеры вручную копируют данные', 'Заявки теряются между каналами', 'Нет общей картины продаж'] },
                  { title: 'После интеграции', items: ['Все данные в AmoCRM', 'Автоматический сбор лидов', 'Единая история клиента', 'Полная аналитика в реальном времени'], accent: true },
                ].map((col) => (
                  <div key={col.title} className={`p-8 ${col.accent ? 'bg-secondary' : 'bg-card'}`}>
                    <h3
                      className={`text-lg font-bold mb-4 ${col.accent ? 'text-primary' : 'text-muted-foreground'}`}
                      style={{ fontFamily: 'var(--font-syne)' }}
                    >
                      {col.title}
                    </h3>
                    <ul className="flex flex-col gap-2">
                      {col.items.map((item) => (
                        <li key={item} className="flex items-center gap-2 text-sm">
                          {col.accent ? (
                            <Check size={13} className="text-primary shrink-0" />
                          ) : (
                            <span className="w-3.5 h-px bg-muted-foreground shrink-0 mt-0.5" />
                          )}
                          <span className={col.accent ? 'text-foreground' : 'text-muted-foreground line-through'}>
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <ContactForm
          title="Какую интеграцию нужно подключить?"
          subtitle="Расскажите о вашей задаче — предложим оптимальное решение"
        />
      </main>
      <Footer />
    </>
  )
}
