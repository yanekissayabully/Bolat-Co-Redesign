import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { LeadForm } from '@/components/contact-form'
import { cases } from '@/lib/data'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import type { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Портфолио — Bolat & Co',
  description:
    'Кейсы Bolat & Co: реальные результаты внедрения AmoCRM. Рост продаж, автоматизация и интеграции для бизнеса в Казахстане.',
}

export default function PortfolioPage() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        {/* Hero */}
        <section className="bg-background py-24 px-6 border-b border-border">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
            {/* Левая часть с текстом */}
            <div className="flex-1">
              <span className="text-xs font-semibold uppercase tracking-widest text-primary mb-4 block">
                Портфолио
              </span>
              <h1
                className="text-5xl md:text-7xl font-bold text-balance mb-6 max-w-4xl"
                style={{ fontFamily: 'var(--font-syne)' }}
              >
                 Факты важнее{' '}
                <span className="text-primary">слов</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
                Реальные кейсы с измеримыми результатами. Каждый проект — это проблема клиента,
              наше решение и конкретные цифры.
              </p>
            </div>
        
            {/* Правая часть с изображением */}
            <div className="flex-1 flex justify-center lg:justify-end items-end">
              <div className="relative w-full max-w-xs">
                <Image
                  src="/2.png"
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

        {/* Cases */}
        <section className="bg-card py-24 px-6">
          <div className="max-w-7xl mx-auto flex flex-col gap-px bg-border">
            {cases.map((c, idx) => (
              <div key={c.id} className="bg-card">
                <div className="p-8 md:p-12 grid grid-cols-1 lg:grid-cols-12 gap-10">
                  {/* Number + tag */}
                  <div className="lg:col-span-2 flex flex-col gap-3">
                    <span
                      className="text-6xl font-bold text-border"
                      style={{ fontFamily: 'var(--font-syne)' }}
                    >
                      {String(idx + 1).padStart(2, '0')}
                    </span>
                    <span className="text-xs font-semibold uppercase tracking-widest text-primary">
                      {c.tag}
                    </span>
                    <span className="text-xs text-muted-foreground uppercase tracking-wide">
                      {c.industry}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="lg:col-span-6 flex flex-col gap-6">
                    <h2
                      className="text-2xl md:text-3xl font-bold"
                      style={{ fontFamily: 'var(--font-syne)' }}
                    >
                      {c.company}
                    </h2>

                    <div className="flex flex-col gap-4">
                      <div>
                        <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-2 block">
                          Проблема
                        </span>
                        <p className="text-sm text-muted-foreground leading-relaxed">{c.problem}</p>
                      </div>
                      <div className="w-8 h-px bg-primary" />
                      <div>
                        <span className="text-xs font-semibold uppercase tracking-widest text-primary mb-2 block">
                          Решение
                        </span>
                        <p className="text-sm leading-relaxed">{c.solution}</p>
                      </div>
                    </div>
                  </div>

                  {/* Metrics */}
                  <div className="lg:col-span-4 flex flex-col justify-start gap-px bg-border">
                    <div className="bg-secondary px-4 py-3">
                      <span className="text-xs text-muted-foreground uppercase tracking-wide block mb-1">
                        Результат
                      </span>
                    </div>
                    {c.metrics.map((m) => (
                      <div key={m.label} className="bg-card px-6 py-5 flex items-center justify-between">
                        <span className="text-sm text-muted-foreground">{m.label}</span>
                        <span
                          className="text-2xl font-bold text-primary"
                          style={{ fontFamily: 'var(--font-syne)' }}
                        >
                          {m.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Stats Banner */}
        <section className="bg-background border-t border-border py-24 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="mb-14 text-center">
              <h2
                className="text-4xl md:text-5xl font-bold text-balance"
                style={{ fontFamily: 'var(--font-syne)' }}
              >
                В цифрах
              </h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-border">
              {[
                { value: '400+', label: 'Проектов реализовано' },
                { value: '3.5x', label: 'Средний рост выручки' },
                { value: '14 дней', label: 'Среднее время внедрения' },
                { value: '98%', label: 'Клиентов рекомендуют нас' },
              ].map((stat) => (
                <div key={stat.label} className="bg-card p-8 text-center">
                  <div
                    className="text-4xl md:text-5xl font-bold text-primary mb-2"
                    style={{ fontFamily: 'var(--font-syne)' }}
                  >
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <LeadForm/>

      </main>
      <Footer />
    </>
  )
}
