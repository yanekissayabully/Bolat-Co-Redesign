// 'use client'

// import Link from 'next/link'
// import { ArrowRight, TrendingUp, Zap, Shield } from 'lucide-react'

// const stats = [
//   { value: '150+', label: 'Успешных внедрений' },
//   { value: '5 лет', label: 'На рынке' },
//   { value: 'x3.2', label: 'Средний рост продаж' },
//   { value: '98%', label: 'Довольных клиентов' },
// ]

// export function HeroSection() {
//   return (
//     <section className="relative min-h-screen flex flex-col justify-center bg-background overflow-hidden pt-16">
//       {/* Grid overlay */}
//       <div
//         className="absolute inset-0 pointer-events-none opacity-[0.03]"
//         style={{
//           backgroundImage:
//             'linear-gradient(to right, oklch(0.97 0 0) 1px, transparent 1px), linear-gradient(to bottom, oklch(0.97 0 0) 1px, transparent 1px)',
//           backgroundSize: '80px 80px',
//         }}
//       />

//       {/* Orange glow */}
//       <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

//       <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-24">
//         {/* Eyebrow */}
//         <div className="flex items-center gap-3 mb-8">
//           <span className="w-8 h-px bg-primary" />
//           <span className="text-xs font-semibold uppercase tracking-widest text-primary">
//             AmoCRM партнёр в Казахстане
//           </span>
//         </div>

//         {/* Headline */}
//         <h1
//           className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-balance leading-none tracking-tight mb-8 max-w-5xl"
//           style={{ fontFamily: 'var(--font-syne)' }}
//         >
//           Мы строим{' '}
//           <span className="text-primary">машины продаж</span>{' '}
//           на базе AmoCRM
//         </h1>

//         <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed mb-10">
//           Внедряем AmoCRM, автоматизируем бизнес-процессы и увеличиваем продажи.
//           Работаем системно — от аудита до поддержки.
//         </p>

//         <div className="flex flex-wrap items-center gap-4 mb-20">
//           <Link
//             href="#contact"
//             className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 font-semibold uppercase tracking-wide text-sm hover:bg-primary/90 transition-colors"
//           >
//             Получить консультацию
//             <ArrowRight size={16} />
//           </Link>
//           <Link
//             href="/portfolio"
//             className="inline-flex items-center gap-2 border border-border text-foreground px-8 py-4 font-semibold uppercase tracking-wide text-sm hover:border-primary hover:text-primary transition-colors"
//           >
//             Смотреть кейсы
//           </Link>
//         </div>

//         {/* Stats */}
//         <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-border">
//           {stats.map((stat) => (
//             <div key={stat.label} className="bg-background px-6 py-6">
//               <div
//                 className="text-3xl md:text-4xl font-bold text-primary mb-1"
//                 style={{ fontFamily: 'var(--font-syne)' }}
//               >
//                 {stat.value}
//               </div>
//               <div className="text-sm text-muted-foreground">{stat.label}</div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Scroll indicator */}
//       <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
//         <div className="w-px h-12 bg-foreground animate-pulse" />
//       </div>
//     </section>
//   )
// }

// export function AboutSection() {
//   const points = [
//     { icon: TrendingUp, text: 'Системный подход к росту продаж' },
//     { icon: Zap, text: 'Внедрение за 14 рабочих дней' },
//     { icon: Shield, text: 'Гарантия результата по договору' },
//   ]

//   return (
//     <section className="bg-card border-t border-border py-24 px-6">
//       <div className="max-w-7xl mx-auto">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
//           <div>
//             <span className="text-xs font-semibold uppercase tracking-widest text-primary mb-4 block">
//               О компании
//             </span>
//             <h2
//               className="text-4xl md:text-5xl font-bold text-balance mb-6"
//               style={{ fontFamily: 'var(--font-syne)' }}
//             >
//               Не просто внедряем CRM — меняем культуру продаж
//             </h2>
//             <p className="text-muted-foreground leading-relaxed text-lg mb-8">
//               Bolat & Co — это команда практиков с опытом в продажах и IT. Мы не просто настраиваем
//               систему, мы погружаемся в ваш бизнес и строим процессы, которые работают без вас.
//             </p>
//             <div className="flex flex-col gap-4">
//               {points.map(({ icon: Icon, text }) => (
//                 <div key={text} className="flex items-center gap-3">
//                   <div className="flex items-center justify-center w-9 h-9 bg-primary/10 shrink-0">
//                     <Icon size={16} className="text-primary" />
//                   </div>
//                   <span className="text-sm font-medium">{text}</span>
//                 </div>
//               ))}
//             </div>
//           </div>

//           <div className="grid grid-cols-2 gap-4">
//             {[
//               { val: '150+', desc: 'Проектов завершено' },
//               { val: '5', desc: 'Лет на рынке' },
//               { val: '12', desc: 'Специалистов в команде' },
//               { val: '3x', desc: 'Средний рост выручки клиента' },
//             ].map((item) => (
//               <div
//                 key={item.desc}
//                 className="bg-secondary border border-border p-6"
//               >
//                 <div
//                   className="text-4xl font-bold text-primary mb-2"
//                   style={{ fontFamily: 'var(--font-syne)' }}
//                 >
//                   {item.val}
//                 </div>
//                 <div className="text-sm text-muted-foreground leading-snug">{item.desc}</div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }



'use client'

import Link from 'next/link'
import { ArrowRight, TrendingUp, Zap, Shield } from 'lucide-react'
import DarkVeil from './DarkVeil'

const stats = [
  { value: '400+', label: 'Успешных внедрений' },
  { value: '5 лет', label: 'На рынке' },
  { value: 'x3.5', label: 'Средний рост продаж' },
  { value: '98%', label: 'Довольных клиентов' },
]

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-16">
      {/* DarkVeil Background */}
      {/* <div className="absolute inset-0 w-full h-full">
        <DarkVeil
          hueShift={15}
          noiseIntensity={0}
          scanlineIntensity={0.1}
          speed={0.5}
          scanlineFrequency={300}
          warpAmount={0.05}
          resolutionScale={1}
        />
        <div className="absolute inset-0 bg-background/50 backdrop-blur-[2px]" />
      </div> */}

      {/* Orange glow */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none z-10" />

      <div className="relative z-20 max-w-7xl mx-auto px-6 lg:px-8 py-24">
        {/* Eyebrow */}
        <div className="flex items-center gap-3 mb-8">
          <span className="w-8 h-px bg-primary" />
          <span className="text-xs font-semibold uppercase tracking-widest text-primary">
            AmoCRM партнёр в Казахстане
          </span>
        </div>

        {/* Headline */}
        <h1
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-balance leading-none tracking-tight mb-8 max-w-5xl"
          style={{ fontFamily: 'var(--font-syne)' }}
        >
          Мы строим{' '}
          <span className="text-primary">машины продаж</span>{' '}
          на базе AmoCRM
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed mb-10">
          Внедряем AmoCRM, автоматизируем бизнес-процессы и увеличиваем продажи.
          Работаем системно — от аудита до поддержки.
        </p>

        <div className="flex flex-wrap items-center gap-4 mb-20">
          <Link
            href="#contact"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 font-semibold uppercase tracking-wide text-sm hover:bg-primary/90 transition-colors rounded-lg"
          >
            Получить консультацию
            <ArrowRight size={16} />
          </Link>
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 border border-border text-foreground px-8 py-4 font-semibold uppercase tracking-wide text-sm hover:border-primary hover:text-primary transition-colors rounded-lg"
          >
            Смотреть кейсы
          </Link>
        </div>

        {/* Stats */}
        {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-border">
          {stats.map((stat) => (
            <div key={stat.label} className="bg-background/80 backdrop-blur-sm px-6 py-6">
              <div
                className="text-3xl md:text-4xl font-bold text-primary mb-1"
                style={{ fontFamily: 'var(--font-syne)' }}
              >
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div> */}
      </div>

    
    </section>
  )
}

export function AboutSection() {
  const points = [
    { icon: TrendingUp, text: 'Системный подход к росту продаж' },
    { icon: Zap, text: 'Внедрение за 14 рабочих дней' },
    { icon: Shield, text: 'Гарантия результата по договору' },
  ]

  return (
    <section className="bg-card border-t border-border py-24 px-6 relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-primary mb-4 block">
              О компании
            </span>
            <h2
              className="text-4xl md:text-5xl font-bold text-balance mb-6"
              style={{ fontFamily: 'var(--font-syne)' }}
            >
              Не просто внедряем CRM — меняем культуру продаж
            </h2>
            <p className="text-muted-foreground leading-relaxed text-lg mb-8">
              Bolat & Co — это команда практиков с опытом в продажах и IT. Мы не просто настраиваем
              систему, мы погружаемся в ваш бизнес и строим процессы, которые работают без вас.
            </p>
            <div className="flex flex-col gap-4">
              {points.map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-3">
                  <div className="flex items-center justify-center w-9 h-9 bg-primary/10 shrink-0 rounded-md">
                    <Icon size={16} className="text-primary" />
                  </div>
                  <span className="text-sm font-medium">{text}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {[
              { val: '400+', desc: 'Проектов завершено' },
              { val: '5', desc: 'Лет на рынке' },
              { val: '98%', desc: 'Довольных клиентов' },
              { val: '3.5x', desc: 'Средний рост выручки клиента' },
            ].map((item) => (
              <div
                key={item.desc}
                className="bg-secondary border border-border p-6 rounded-lg"
              >
                <div
                  className="text-4xl font-bold text-primary mb-2"
                  style={{ fontFamily: 'var(--font-syne)' }}
                >
                  {item.val}
                </div>
                <div className="text-sm text-muted-foreground leading-snug">{item.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}