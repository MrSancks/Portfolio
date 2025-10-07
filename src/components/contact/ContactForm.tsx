import { useState } from 'react';
import { sendContactForm } from '../../features/contact/ContactService';

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await sendContactForm(form);
    setSent(true);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="animate-fade-up mx-auto mt-8 flex w-full max-w-md flex-col gap-4 rounded-2xl border border-white/30 bg-white/80 p-6 shadow-lg shadow-slate-900/10 backdrop-blur dark:border-white/10 dark:bg-slate-900/70"
    >
      <input
        name="name"
        value={form.name}
        onChange={handleChange}
        placeholder="Nombre"
        className="w-full rounded-xl border border-white/40 bg-white/60 px-4 py-2 text-sm text-slate-700 outline-none transition-all duration-300 focus:border-emerald-400 focus:ring-2 focus:ring-emerald-300 dark:border-white/10 dark:bg-slate-800/70 dark:text-slate-100"
        required
      />
      <input
        name="email"
        type="email"
        value={form.email}
        onChange={handleChange}
        placeholder="Email"
        className="w-full rounded-xl border border-white/40 bg-white/60 px-4 py-2 text-sm text-slate-700 outline-none transition-all duration-300 focus:border-emerald-400 focus:ring-2 focus:ring-emerald-300 dark:border-white/10 dark:bg-slate-800/70 dark:text-slate-100"
        required
      />
      <textarea
        name="message"
        value={form.message}
        onChange={handleChange}
        placeholder="Mensaje"
        rows={4}
        className="w-full rounded-xl border border-white/40 bg-white/60 px-4 py-2 text-sm text-slate-700 outline-none transition-all duration-300 focus:border-emerald-400 focus:ring-2 focus:ring-emerald-300 dark:border-white/10 dark:bg-slate-800/70 dark:text-slate-100"
        required
      />
      <button
        type="submit"
        className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-sky-400 via-indigo-400 to-emerald-400 px-5 py-2 text-sm font-semibold uppercase tracking-wide text-white shadow-lg shadow-slate-900/20 transition-transform duration-300 hover:scale-[1.02]"
      >
        Enviar
      </button>
      {sent && <p className="animate-fade-up text-center text-sm font-medium text-emerald-500">¡Mensaje enviado!</p>}
    </form>
  );
}
