'use client';
import React from 'react';
import ContactForm from '../contact/ContactForm';

interface ContactSectionProps {
  title: string;
}

export default function ContactSection({ title }: ContactSectionProps) {
  return (
    <section id="contact" className="scroll-mt-40">
      <div className="section-surface animate-fade-up">
        <h2 className="text-center text-3xl font-semibold text-slate-800 transition-colors duration-300 dark:text-slate-100">
          {title}
        </h2>
        <ContactForm />
      </div>
    </section>
  );
}
