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
      className="animate-fade-up mx-auto mt-8 flex w-full max-w-md flex-col gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-6 shadow-xl shadow-black/50 backdrop-blur"
    >
      <input
        name="name"
        value={form.name}
        onChange={handleChange}
        placeholder="Nombre"
        className="w-full rounded-xl border border-white/10 bg-black/50 px-4 py-2 text-sm text-slate-200 outline-none transition-all duration-300 focus:border-white/40 focus:bg-black/40"
        required
      />
      <input
        name="email"
        type="email"
        value={form.email}
        onChange={handleChange}
        placeholder="Email"
        className="w-full rounded-xl border border-white/10 bg-black/50 px-4 py-2 text-sm text-slate-200 outline-none transition-all duration-300 focus:border-white/40 focus:bg-black/40"
        required
      />
      <textarea
        name="message"
        value={form.message}
        onChange={handleChange}
        placeholder="Mensaje"
        rows={4}
        className="w-full rounded-xl border border-white/10 bg-black/50 px-4 py-2 text-sm text-slate-200 outline-none transition-all duration-300 focus:border-white/40 focus:bg-black/40"
        required
      />
      <button
        type="submit"
        className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/[0.06] px-5 py-2 text-sm font-semibold uppercase tracking-[0.3em] text-white transition-all duration-300 hover:border-white/40 hover:bg-white/10"
      >
        Enviar
      </button>
      {sent && <p className="animate-fade-up text-center text-sm font-medium text-slate-200">¡Mensaje enviado!</p>}
    </form>
  );
}
