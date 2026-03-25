import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { ContactForm } from '@/components/forma-os'
import { Check, Users, TrendingUp, Handshake, DollarSign } from 'lucide-react'
import type { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Партнерам — Bolat & Co',
  description:
    'Партнёрская программа Bolat & Co. Зарабатывайте, рекомендуя AmoCRM-интеграции вашим клиентам. Выгодные условия сотрудничества.',
}

const conditions = [
  {
    icon: DollarSign,
    title: 'Комиссия 15–25%',
    desc: 'Получайте % с каждого привлечённого проекта. Ставка зависит от объёма и категории.',
  },
  {
    icon: TrendingUp,
    title: 'Recurring-доход',
    desc: 'Комиссия с ежемесячных платежей за поддержку ваших клиентов.',
  },
  {
    icon: Handshake,
    title: 'Совместные продажи',
    desc: 'Выходим на встречи вместе, помогаем закрывать сделки — вы фокусируетесь на своём.',
  },
  {
    icon: Users,
    title: 'Маркетинговая поддержка',
    desc: 'Кейсы, презентации, пробные демо — всё готово для ваших клиентов.',
  },
]

const whoFits = [
  {
    title: 'Веб-студии и агентства',
    desc: 'Разрабатываете сайты и лендинги? Предложите клиентам автоматизацию продаж.',
  },
  {
    title: 'Маркетинговые агентства',
    desc: 'Приводите лиды, а CRM их теряет? Мы настроим систему для ваших клиентов.',
  },
  {
    title: 'Бизнес-консультанты',
    desc: 'Работаете с МСБ? Автоматизация AmoCRM — логичное продолжение вашей работы.',
  },
  {
    title: 'IT-компании',
    desc: 'Разрабатываете продукты? Добавьте CRM-интеграции к вашему портфелю.',
  },
  {
    title: 'Коучи и тренеры по продажам',
    desc: 'Обучаете команды? Подкрепите обучение правильным инструментом.',
  },
  {
    title: 'HR и рекрутинговые агентства',
    desc: 'Нанимаете менеджеров по продажам? Помогите им работать эффективнее.',
  },
]

const steps = [
  { num: '01', title: 'Подайте заявку', desc: 'Заполните форму ниже — свяжемся в течение суток.' },
  { num: '02', title: 'Онбординг', desc: 'Проводим вводный созвон, подписываем договор, даём материалы.' },
  { num: '03', title: 'Первый клиент', desc: 'Приводите клиента — берём на себя все переговоры и работу.' },
  { num: '04', title: 'Получаете доход', desc: 'Выплачиваем комиссию в день оплаты клиента.' },
]

export default function PartnersPage() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        <section className="bg-background py-24 px-6 border-b border-border">
                  <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
                    {/* Левая часть с текстом */}
                    <div className="flex-1">
                      <span className="text-xs font-semibold uppercase tracking-widest text-primary mb-4 block">
                        Партнерам
                      </span>
                      <h1
                        className="text-5xl md:text-7xl font-bold text-balance mb-6 max-w-4xl"
                        style={{ fontFamily: 'var(--font-syne)' }}
                      >
                         Зарабатывайте вместе{' '}
                        <span className="text-primary">с нами</span>
                      </h1>
                      <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
                        Партнёрская программа Bolat & Co — рекомендуйте AmoCRM-внедрения вашим клиентам
              и получайте комиссию до 25% с каждого проекта.
                      </p>
                      
                    </div>
                
                    {/* Правая часть с изображением */}
                    <div className="flex-1 flex justify-center lg:justify-end items-end">
                      <div className="relative w-full max-w-xs">
                        <Image
                          src="/3-removebg-preview.png"
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

        {/* Conditions */}
        <section className="bg-card py-24 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="mb-14">
              <span className="text-xs font-semibold uppercase tracking-widest text-primary mb-4 block">
                Условия
              </span>
              <h2
                className="text-4xl font-bold text-balance"
                style={{ fontFamily: 'var(--font-syne)' }}
              >
                Что вы получаете
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border">
              {conditions.map(({ icon: Icon, title, desc }) => (
                <div key={title} className="bg-card p-8 hover:bg-secondary transition-colors group">
                  <div className="flex items-center justify-center w-10 h-10 bg-primary/10 mb-5">
                    <Icon size={18} className="text-primary" />
                  </div>
                  <h3
                    className="text-lg font-bold mb-3"
                    style={{ fontFamily: 'var(--font-syne)' }}
                  >
                    {title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Who fits */}
        <section className="bg-background border-t border-border py-24 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="mb-14">
              <span className="text-xs font-semibold uppercase tracking-widest text-primary mb-4 block">
                Кому подойдет
              </span>
              <h2
                className="text-4xl font-bold text-balance"
                style={{ fontFamily: 'var(--font-syne)' }}
              >
                Идеальный партнёр
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
              {whoFits.map((item) => (
                <div key={item.title} className="bg-card p-8 hover:bg-secondary transition-colors">
                  <div className="flex items-start gap-3">
                    <Check size={16} className="text-primary shrink-0 mt-0.5" />
                    <div>
                      <h3
                        className="font-bold mb-2"
                        style={{ fontFamily: 'var(--font-syne)' }}
                      >
                        {item.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Steps */}
        <section className="bg-card border-t border-border py-24 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="mb-14">
              <span className="text-xs font-semibold uppercase tracking-widest text-primary mb-4 block">
                Как начать
              </span>
              <h2
                className="text-4xl font-bold text-balance"
                style={{ fontFamily: 'var(--font-syne)' }}
              >
                4 простых шага
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-px bg-border">
              {steps.map((step) => (
                <div key={step.num} className="bg-card p-8 flex flex-col gap-4">
                  <span
                    className="text-5xl font-bold text-primary"
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

        {/* Partner Form */}
        <div id="partner-form">
          <ContactForm
            title="Хочу стать партнёром"
            subtitle="Заполните форму — свяжемся в течение 24 часов и обсудим детали"
          />
        </div>
      </main>
      <Footer />
    </>
  )
}
