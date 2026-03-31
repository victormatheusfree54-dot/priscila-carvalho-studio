'use client';

import { motion } from 'motion/react';
import Image from 'next/image';

export default function Home() {
  const whatsappLink = "https://wa.me/5521970404119";

  return (
    <main className="min-h-screen bg-[#0A0A0A] text-[#F5F5F5] overflow-x-hidden">
      {/* HEADER */}
      <header className="fixed top-0 w-full z-50 bg-[#0A0A0A]/80 backdrop-blur-md border-b border-[#D4AF37]/20">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-xl md:text-2xl font-serif tracking-widest text-[#D4AF37] uppercase">
            Priscila Carvalho
          </h1>
          <nav className="hidden md:flex gap-8 items-center">
            <a href="#servicos" className="text-[#E6C2BF] hover:text-[#D4AF37] transition-colors text-sm tracking-widest uppercase">Serviços</a>
            <a href="#galeria" className="text-[#E6C2BF] hover:text-[#D4AF37] transition-colors text-sm tracking-widest uppercase">Galeria</a>
            <a href={whatsappLink} target="_blank" rel="noreferrer" className="border border-[#D4AF37] text-[#D4AF37] px-6 py-2 hover:bg-[#D4AF37] hover:text-[#0A0A0A] transition-all text-sm tracking-widest uppercase">
              Agendar 📅
            </a>
          </nav>
          <a href={whatsappLink} target="_blank" rel="noreferrer" className="md:hidden text-[#D4AF37] text-2xl">
            💬
          </a>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="relative min-h-[90vh] flex items-center pt-20 px-6 lg:px-20">
        <div className="absolute inset-0 z-0 opacity-40 md:opacity-100 md:w-1/2 md:left-1/2">
          <div className="relative w-full h-full">
            <Image 
              src="https://lh3.googleusercontent.com/aida/ADBb0ujQ_o-4PpzasBah1Gc8_5KKaNDhY8paJidHRsWS4oJ-5dHdETeesX-uJZ0RMDEaoLkO1R_fXm3rVAA4viC-q5xwB_PmpVfgxciWhsPkOcTsWgX2QWgEAuIxJ3EIUeCUkl7lH_WMawH_mQr0QLPbbzp0nvjBDfL9L8bxGE-YrZtJlajn76Y5qc8Xz7ZFtPe12ckMVR_w93tzjggf5qDWjT3WSLJd7jgZ1woa3Yl-l2TdO-Q_iblcT_cf0qaToxZn_TZ2Tn_VXPlL"
              alt="Priscila Carvalho Studio"
              fill
              className="object-cover object-center grayscale hover:grayscale-0 transition-all duration-1000"
              priority
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-[#0A0A0A] via-[#0A0A0A]/80 to-transparent"></div>
          </div>
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="max-w-2xl space-y-8"
          >
            <p className="text-[#E6C2BF] tracking-[0.3em] text-xs md:text-sm uppercase">Paciência, Rio de Janeiro 📍</p>
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-serif text-[#D4AF37] leading-[0.9] tracking-tighter uppercase">
              A Arte de <br/>
              <span className="text-[#F5F5F5]">Valorizar</span> <br/>
              Seu Olhar.
            </h2>
            <p className="text-lg md:text-xl text-[#E6C2BF] font-light max-w-md leading-relaxed">
              Especialista em extensões de cílios e design de sobrancelhas. Resultados incomparáveis para mulheres que exigem o melhor. ✨
            </p>
            <div className="pt-8">
              <a 
                href={whatsappLink} 
                target="_blank" 
                rel="noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 bg-[#D4AF37] text-[#0A0A0A] font-semibold tracking-widest uppercase hover:bg-[#E6C2BF] transition-colors duration-300"
              >
                Agendar Meu Horário 👑
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section id="servicos" className="py-32 px-6 bg-[#0F0C0B]">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-20 md:w-1/2"
          >
            <h3 className="text-4xl md:text-6xl font-serif text-[#D4AF37] uppercase tracking-tighter leading-none mb-6">
              Nossos <br/> Serviços
            </h3>
            <p className="text-[#E6C2BF] font-light text-lg">Técnicas refinadas e cuidado personalizado para destacar sua beleza natural.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24">
            {/* Service 1 */}
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="group border-t border-[#D4AF37]/30 pt-8"
            >
              <div className="flex justify-between items-start mb-6">
                <h4 className="text-3xl font-serif text-[#F5F5F5] uppercase tracking-tight group-hover:text-[#D4AF37] transition-colors">
                  Extensão <br/> de Cílios
                </h4>
                <span className="text-4xl">👁️</span>
              </div>
              <p className="text-[#E6C2BF] font-light leading-relaxed mb-8">
                Técnicas personalizadas do Fio a Fio ao Volume Russo. Garantimos leveza, durabilidade e um olhar marcante sem perder a naturalidade.
              </p>
              <a href={whatsappLink} target="_blank" rel="noreferrer" className="text-[#D4AF37] uppercase tracking-widest text-sm font-semibold hover:text-[#E6C2BF] transition-colors">
                Saber mais ➔
              </a>
            </motion.div>

            {/* Service 2 */}
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="group border-t border-[#D4AF37]/30 pt-8"
            >
              <div className="flex justify-between items-start mb-6">
                <h4 className="text-3xl font-serif text-[#F5F5F5] uppercase tracking-tight group-hover:text-[#D4AF37] transition-colors">
                  Design de <br/> Sobrancelhas
                </h4>
                <span className="text-4xl">🖌️</span>
              </div>
              <p className="text-[#E6C2BF] font-light leading-relaxed mb-8">
                Design estratégico que respeita o visagismo do seu rosto. Harmonização completa para elevar sua expressão e autoestima.
              </p>
              <a href={whatsappLink} target="_blank" rel="noreferrer" className="text-[#D4AF37] uppercase tracking-widest text-sm font-semibold hover:text-[#E6C2BF] transition-colors">
                Saber mais ➔
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* GALLERY SECTION */}
      <section id="galeria" className="py-32 px-6 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-24"
          >
            <span className="text-[#E6C2BF] tracking-[0.3em] text-xs uppercase block mb-4">Social Proof ⭐</span>
            <h3 className="text-4xl md:text-6xl font-serif text-[#D4AF37] uppercase tracking-tighter">
              Resultado Incomparável
            </h3>
            <p className="mt-6 text-[#F5F5F5] font-light italic max-w-xl mx-auto text-lg">
              "Cada olhar é uma tela única. Minha missão é traduzir sua essência através de técnicas de precisão."
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative aspect-[4/5] w-full"
            >
              <Image 
                src="https://lh3.googleusercontent.com/aida/ADBb0ui7SyV1YbPSxJIV1jlj4dmgo0NMkGIeT6VjyQPuFZOxuSuQBrkFw_SXqr6Zt_njhrpRywlYTKjE5TdQvwErhG1XjCRpTW-QMjU9Wf4OsbsZdYju63Xmz2brxeR1ezMgrJqCztaEf3LhNmfWsmpV8TYQb3wZbFgdKU0eMgPPyY4lwORp168V1Pc0iWZ1jYJbE1s0WMp9UXhU-SBNUlV-ER1R0egWyRFSip65VrwQtY7_8AdQ0wyda5dBi8sFPDq5XVa_smhovLc_"
                alt="Design de Sobrancelhas"
                fill
                className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-0 left-0 bg-[#0A0A0A] p-6 border-t border-r border-[#D4AF37]/30">
                <p className="font-serif text-[#D4AF37] uppercase tracking-widest text-sm">Design Perfeito ✨</p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative aspect-[4/5] w-full md:mt-32"
            >
              <Image 
                src="https://lh3.googleusercontent.com/aida/ADBb0uiJi2ikLheXZ6Zb7ge9IFF73OonDja2poEoJCSaLWRT-mVfwv3Er2vglDQCrgFeEMAfYw7U0-CkUOcg1yHLDTuqHBwMLM8vce6HY3ZgCq6Nq6UEb9_yo585XT9HGOcq0WWUm2kYRoxt21Kc1OAV20tV_ICVbgEF8LKfG7FCmWhT8DHGc3fd9UQVLE3eVPH65Nf5odl-IiczoTfT9o-BpMuSlOa0ygT9DELp-PBVJxcplzIiAaNOiHis4oi_z_CnkfqFVFbtxxF8lw"
                alt="Volume Russo"
                fill
                className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-0 left-0 bg-[#0A0A0A] p-6 border-t border-r border-[#D4AF37]/30">
                <p className="font-serif text-[#D4AF37] uppercase tracking-widest text-sm">Volume Russo 🖤</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* AFTERCARE SECTION */}
      <section className="py-32 px-6 bg-[#120F0E]">
        <div className="max-w-5xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h3 className="text-3xl md:text-5xl font-serif text-[#D4AF37] uppercase tracking-tighter mb-4">
              Cuidados Essenciais
            </h3>
            <p className="text-[#E6C2BF] font-light">Garanta a durabilidade e saúde dos seus cílios com passos simples.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[
              { icon: '💧', title: 'Não molhar por 24h', desc: 'Tempo necessário para a cura completa do adesivo.' },
              { icon: '🖌️', title: 'Escove diariamente', desc: 'Mantenha os fios alinhados com a escovinha higienizada.' },
              { icon: '🫧', title: 'Lave com espuma', desc: 'Use shampoo neutro ou espuma específica para cílios.' },
              { icon: '🚫', title: 'Evite óleos', desc: 'Demaquilantes oleosos podem comprometer a retenção.' }
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="flex gap-6 items-start border-l border-[#D4AF37]/30 pl-6"
              >
                <span className="text-3xl">{item.icon}</span>
                <div>
                  <h5 className="font-serif text-xl text-[#F5F5F5] uppercase tracking-tight mb-2">{item.title}</h5>
                  <p className="text-[#E6C2BF] font-light text-sm leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* LOCATION & CONTACT */}
      <section className="py-32 px-6 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2 space-y-12"
          >
            <div>
              <h3 className="text-4xl md:text-6xl font-serif text-[#D4AF37] uppercase tracking-tighter mb-6">
                Onde Estamos
              </h3>
              <p className="text-[#E6C2BF] font-light text-lg">Venha viver uma experiência de beleza única e transformadora.</p>
            </div>

            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <span className="text-2xl">📍</span>
                <div>
                  <p className="font-serif text-xl text-[#F5F5F5] uppercase tracking-tight mb-1">Paciência, RJ</p>
                  <p className="text-[#E6C2BF] font-light text-sm">Próximo aos principais pontos do bairro.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-6">
                <span className="text-2xl">💬</span>
                <div>
                  <p className="font-serif text-xl text-[#F5F5F5] uppercase tracking-tight mb-1">WhatsApp</p>
                  <p className="text-[#E6C2BF] font-light text-sm">(21) 97040-4119</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <span className="text-2xl">🕒</span>
                <div>
                  <p className="font-serif text-xl text-[#F5F5F5] uppercase tracking-tight mb-1">Horário</p>
                  <p className="text-[#E6C2BF] font-light text-sm">Segunda a Sábado: 09:00 às 18:00</p>
                </div>
              </div>
            </div>

            <a 
              href={whatsappLink} 
              target="_blank" 
              rel="noreferrer"
              className="inline-block px-8 py-4 border border-[#D4AF37] text-[#D4AF37] font-semibold tracking-widest uppercase hover:bg-[#D4AF37] hover:text-[#0A0A0A] transition-colors duration-300"
            >
              Falar no WhatsApp ➔
            </a>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2 h-[500px] relative border border-[#D4AF37]/20 p-2"
          >
            <div className="relative w-full h-full">
              <Image 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuB0pNDSaV3x-kzwmz4SNM4Tmq2bE-qJTKQsTEs_5OAfCE6ahFdoFZ75mw46fN6s8Efseip5yKIF2ZGzKDflujJPaYLIySEb2RHAYvqgqMkbmG-EMhK5GLerHEL11JnQY5Vbs2207DZA0nuPfqO3nJg0l_5IUtVYQdCXXv-THwXoIP8I7DpRRXS6EJTnWNuGWeBayvX_TZkua3vqLec7_wsJ-UjY8EUEXT1Yn6l_9YqF87xkrZQsMUCnYOlTAfdT5-wPH3gvcErEoIU"
                alt="Localização"
                fill
                className="object-cover grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#050505] py-12 border-t border-[#D4AF37]/20">
        <div className="max-w-7xl mx-auto px-6 flex flex-col items-center gap-8">
          <h4 className="text-2xl font-serif text-[#D4AF37] uppercase tracking-widest">
            Priscila Carvalho
          </h4>
          <div className="flex gap-8 text-[#E6C2BF] text-sm tracking-widest uppercase">
            <a href="#servicos" className="hover:text-[#D4AF37] transition-colors">Serviços</a>
            <a href="#galeria" className="hover:text-[#D4AF37] transition-colors">Galeria</a>
          </div>
          <p className="text-[#F5F5F5]/40 text-xs tracking-widest uppercase text-center">
            © {new Date().getFullYear()} Priscila Carvalho Studio • Paciência, RJ
          </p>
        </div>
      </footer>
    </main>
  );
}
