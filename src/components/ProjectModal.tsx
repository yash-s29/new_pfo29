import { useEffect, useState } from 'react';
import { X } from 'lucide-react';
import { supabase } from '../lib/supabase';

interface ProjectModalProps {
  onClose: () => void;
  onSuccess: () => void;
}

export default function ProjectModal({ onClose, onSuccess }: ProjectModalProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [form, setForm] = useState({
    title: '',
    description: '',
    technologies: '',
    image_url: '',
    live_url: '',
    github_url: '',
    order_index: 0,
  });

  /* Close on ESC */
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

    const techArray = form.technologies
      .split(',')
      .map((t) => t.trim())
      .filter(Boolean);

    if (techArray.length === 0) {
      setError('Please add at least one technology.');
      setIsSubmitting(false);
      return;
    }

    const { error } = await supabase.from('projects').insert([
      {
        title: form.title,
        description: form.description,
        technologies: techArray,
        image_url: form.image_url || null,
        live_url: form.live_url || null,
        github_url: form.github_url || null,
        order_index: form.order_index,
        is_featured: true, // carousel expects featured projects
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
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center px-4">
      <div className="relative w-full max-w-2xl rounded-3xl
                      backdrop-blur-md bg-white/10
                      border border-white/20 p-6">

        {/* HEADER */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-white">
            Add Project
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

          {/* TITLE */}
          <Field label="Project Title *">
            <input
              required
              value={form.title}
              onChange={(e) => setForm({ ...form, title: e.target.value })}
              className="input"
              placeholder="Portfolio Website"
            />
          </Field>

          {/* DESCRIPTION */}
          <Field label="Description *">
            <textarea
              required
              value={form.description}
              onChange={(e) => setForm({ ...form, description: e.target.value })}
              className="input min-h-[100px]"
              placeholder="What problem it solves, how, and impact"
            />
          </Field>

          {/* IMAGE */}
          <Field label="Cover Image URL">
            <input
              value={form.image_url}
              onChange={(e) => setForm({ ...form, image_url: e.target.value })}
              className="input"
              placeholder="https://image-url.com/project.png"
            />
          </Field>

          {/* TECH */}
          <Field label="Technologies (comma separated) *">
            <input
              required
              value={form.technologies}
              onChange={(e) => setForm({ ...form, technologies: e.target.value })}
              className="input"
              placeholder="React, TypeScript, Supabase"
            />
          </Field>

          {/* URLS */}
          <div className="grid md:grid-cols-2 gap-4">
            <Field label="Live URL">
              <input
                value={form.live_url}
                onChange={(e) => setForm({ ...form, live_url: e.target.value })}
                className="input"
                placeholder="https://example.com"
              />
            </Field>

            <Field label="GitHub URL">
              <input
                value={form.github_url}
                onChange={(e) => setForm({ ...form, github_url: e.target.value })}
                className="input"
                placeholder="https://github.com/user/repo"
              />
            </Field>
          </div>

          {/* ORDER */}
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
              {isSubmitting ? 'Saving…' : 'Save Project'}
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
