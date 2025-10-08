'use client';
import React from 'react';
import ContactForm from '../contact/ContactForm';

interface ContactSectionProps {
  title: string;
}

export default function ContactSection({ title }: ContactSectionProps) {
  return (
    <section id="contact" className="scroll-mt-40">
      <div className="section-surface relative overflow-hidden animate-fade-up">
        <div className="absolute -right-20 top-[-10%] h-72 w-72 rounded-full bg-rose-500/15 blur-3xl" aria-hidden />
        <div className="absolute -left-24 bottom-[-20%] h-96 w-96 rounded-full bg-sky-500/10 blur-3xl" aria-hidden />
        <div className="relative grid gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="space-y-6">
            <h2 className="text-3xl font-semibold text-white lg:text-4xl">{title}</h2>
            <p className="text-sm leading-relaxed text-slate-200">
              Cuéntame sobre tu reto: automatización, migración de arquitecturas, nuevas features o lanzamientos completos. Respondo en menos de 24 horas.
            </p>
            <div className="rounded-[2rem] border border-white/10 bg-white/[0.06] p-6 text-white shadow-xl shadow-black/40">
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-slate-200">Disponibilidad</p>
              <p className="mt-2 text-2xl font-semibold">Consultorías y desarrollo end-to-end</p>
              <div className="mt-4 grid gap-4 text-sm text-slate-100">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-white/20 bg-black/40">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      className="h-5 w-5"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 0 0 2.22 0L21 8m-18 8h18" />
                    </svg>
                  </div>
                  <a href="mailto:cristiancamilo7890@gmail.com" className="text-sm text-slate-100 underline-offset-4 hover:underline">
                    cristiancamilo7890@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-white/20 bg-black/40">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      className="h-5 w-5"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8 7h8m-4 12v-4m-7 0a7 7 0 1 1 14 0 7 7 0 0 1-14 0Z" />
                    </svg>
                  </div>
                  <span>Agenda una sesión estratégica de 30 minutos.</span>
                </div>
              </div>
            </div>
          </div>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
