'use client';

import { FormEvent, useState } from 'react';

type FormState = 'idle' | 'loading' | 'success' | 'error';

export default function ContactForm() {
  const [status, setStatus] = useState<FormState>('idle');
  const [error, setError] = useState('');

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError('');
    setStatus('idle');

    const form = event.currentTarget;
    const data = new FormData(form);
    const name = String(data.get('name') || '').trim();
    const email = String(data.get('email') || '').trim();
    const message = String(data.get('message') || '').trim();
    const honeypot = String(data.get('company') || '').trim();

    if (honeypot) {
      setStatus('error');
      setError('Spam protection blocked this message.');
      return;
    }

    if (!name || !email || !message) {
      setStatus('error');
      setError('Please fill in your name, email, and message.');
      return;
    }

    if (!/^\S+@\S+\.\S+$/.test(email)) {
      setStatus('error');
      setError('Please enter a valid email address.');
      return;
    }

    setStatus('loading');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, email, message, company: honeypot })
      });

      const result = (await response.json()) as { error?: string };

      if (!response.ok) {
        setStatus('error');
        setError(result.error || 'Something went wrong. Please try again.');
        return;
      }

      setStatus('success');
      form.reset();
    } catch {
      setStatus('error');
      setError('Message could not be sent. Please try again later.');
    }
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-4 border border-black/10 bg-white p-5" noValidate>
      <div className="hidden" aria-hidden="true">
        <label htmlFor="company">Company</label>
        <input id="company" name="company" tabIndex={-1} autoComplete="off" />
      </div>

      <div>
        <label htmlFor="name" className="mb-2 block font-mono text-xs font-black uppercase tracking-widest text-black/55">
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          autoComplete="name"
          className="w-full border border-black/15 bg-white px-4 py-3 text-base text-black outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/25"
          placeholder="Your name"
          required
        />
      </div>

      <div>
        <label htmlFor="email" className="mb-2 block font-mono text-xs font-black uppercase tracking-widest text-black/55">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          className="w-full border border-black/15 bg-white px-4 py-3 text-base text-black outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/25"
          placeholder="your@email.com"
          required
        />
      </div>

      <div>
        <label htmlFor="message" className="mb-2 block font-mono text-xs font-black uppercase tracking-widest text-black/55">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          className="w-full resize-none border border-black/15 bg-white px-4 py-3 text-base text-black outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/25"
          placeholder="Write your message..."
          required
        />
      </div>

      {status === 'error' && (
        <p role="alert" className="border border-red-200 bg-red-50 px-4 py-3 text-sm font-bold text-red-700">
          {error}
        </p>
      )}

      {status === 'success' && (
        <p role="status" className="border border-green-200 bg-green-50 px-4 py-3 text-sm font-bold text-green-700">
          Message sent successfully. I will get back to you soon.
        </p>
      )}

      <button type="submit" className="orange-button text-sm" disabled={status === 'loading'}>
        {status === 'loading' ? 'Sending...' : 'Send Message'}
      </button>
    </form>
  );
}
