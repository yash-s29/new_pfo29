import { useEffect, useState } from 'react';
import { X } from 'lucide-react';
import { supabase } from '../lib/supabase';

interface CertificationModalProps {
  onClose: () => void;
  onSuccess: () => void;
}

export default function CertificationModal({
  onClose,
  onSuccess,
}: CertificationModalProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [form, setForm] = useState({
    title: '',
    issuer: '',
    issue_date: '',
    credential_url: '',
    order_index: 0,
  });

  /* ESC to close */
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [onClose]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    if (!form.title || !form.issuer || !form.issue_date) {
      setError('Please fill all required fields.');
      setIsSubmitting(false);
      return;
    }

    const { error } = await supabase.from('certifications').insert([
      {
        title: form.title,
        issuer: form.issuer,
        issue_date: form.issue_date,
        credential_url: form.credential_url || null,
        order_index: form.order_index,
      },
    ]);

    if (error) {
      setError(error.message);
      setIsSubmitting(false);
      return;
    }

    onSuccess();
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm
                    flex items-center justify-center px-4">
      <div
        className="relative w-full max-w-xl rounded-3xl
                   backdrop-blur-md bg-white/10
                   border border-white/20 p-6"
      >
        {/* HEADER */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-white">
            Add Certification
          </h2>
          <button
            onClick={onClose}
            className="p-2 rounded-lg hover:bg-white/10 transition"
          >
            <X className="text-white" />
          </button>
        </div>

        {/* ERROR */}
        {error && (
          <div className="mb-4 text-sm text-red-400">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">

          <Field label="Certification Title *">
            <input
              required
              value={form.title}
              onChange={(e) => setForm({ ...form, title: e.target.value })}
              className="input"
              placeholder="AWS Certified Solutions Architect"
            />
          </Field>

          <Field label="Issuing Organization *">
            <input
              required
              value={form.issuer}
              onChange={(e) => setForm({ ...form, issuer: e.target.value })}
              className="input"
              placeholder="Amazon Web Services"
            />
          </Field>

          <Field label="Issue Date *">
            <input
              type="date"
              required
              value={form.issue_date}
              onChange={(e) => setForm({ ...form, issue_date: e.target.value })}
              className="input"
            />
          </Field>

          <Field label="Credential URL (optional)">
            <input
              value={form.credential_url}
              onChange={(e) =>
                setForm({ ...form, credential_url: e.target.value })
              }
              className="input"
              placeholder="https://credential.net/..."
            />
          </Field>

          <Field label="Display Order (lower = first)">
            <input
              type="number"
              value={form.order_index}
              onChange={(e) =>
                setForm({ ...form, order_index: Number(e.target.value) })
              }
              className="input"
            />
          </Field>

          {/* ACTIONS */}
          <div className="flex gap-4 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 btn-secondary"
            >
              Cancel
            </button>

            <button
              type="submit"
              disabled={isSubmitting}
              className="flex-1 btn-primary disabled:opacity-50"
            >
              {isSubmitting ? 'Saving…' : 'Save Certification'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

/* ================= UTIL ================= */

function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label className="block text-white/80 mb-2">
        {label}
      </label>
      {children}
    </div>
  );
}
