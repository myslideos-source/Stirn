"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X, MapPin } from "lucide-react";
import { projects, projectCategories, type Project, type ProjectCategory } from "@/content/projects";
import { SurfacePlaceholder } from "@/components/motion/SurfacePlaceholder";
import { LineReveal } from "@/components/motion/LineReveal";

export function ProjectGallery() {
  const [filter, setFilter] = useState<ProjectCategory | "alle">("alle");
  const [selected, setSelected] = useState<Project | null>(null);

  const filtered = useMemo(
    () => (filter === "alle" ? projects : projects.filter((p) => p.category === filter)),
    [filter]
  );

  return (
    <section id="projekte" className="border-t border-anthracite/10 bg-chalk py-24 sm:py-32">
      <div className="container-edge">
        <div className="mb-10 flex flex-col justify-between gap-8 sm:mb-14 lg:flex-row lg:items-end">
          <LineReveal
            as="h2"
            lines={["Projekte"]}
            className="font-display text-4xl font-extrabold tracking-tight text-anthracite sm:text-5xl md:text-6xl"
          />

          <div className="flex flex-wrap gap-2">
            <FilterChip active={filter === "alle"} onClick={() => setFilter("alle")}>
              Alle
            </FilterChip>
            {projectCategories.map((cat) => (
              <FilterChip key={cat.id} active={filter === cat.id} onClick={() => setFilter(cat.id)}>
                {cat.label}
              </FilterChip>
            ))}
          </div>
        </div>

        <p className="mb-10 max-w-xl text-[0.85rem] leading-relaxed text-anthracite/50">
          Die gezeigten Projekte sind aktuell Platzhalter zur Veranschaulichung des Layouts —
          echte Referenzprojekte folgen nach Freigabe durch den Betrieb.
        </p>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8 lg:grid-cols-6">
          {filtered.map((project, i) => (
            <button
              key={project.slug}
              type="button"
              onClick={() => setSelected(project)}
              className={`group relative overflow-hidden text-left focus-visible:outline-offset-4 ${
                project.orientation === "portrait"
                  ? "sm:col-span-1 lg:col-span-2 lg:row-span-2"
                  : i % 3 === 0
                    ? "sm:col-span-2 lg:col-span-4"
                    : "sm:col-span-2 lg:col-span-4"
              }`}
            >
              <div className={project.orientation === "portrait" ? "aspect-[3/4]" : "aspect-[16/10]"}>
                <SurfacePlaceholder
                  label={project.title}
                  tone={i % 3 === 0 ? "mineral" : i % 3 === 1 ? "anthracite" : "chalk"}
                  className="h-full w-full transition-transform duration-700 ease-[cubic-bezier(.65,0,.35,1)] group-hover:scale-[1.03]"
                />
              </div>
              <div className="mt-3 flex items-baseline justify-between gap-3">
                <span className="font-display text-lg font-bold text-anthracite">{project.title}</span>
                <span className="text-[0.78rem] uppercase tracking-wide text-anthracite/45">
                  {projectCategories.find((c) => c.id === project.category)?.label}
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selected && <ProjectDetailModal project={selected} onClose={() => setSelected(null)} />}
      </AnimatePresence>
    </section>
  );
}

function FilterChip({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`border px-4 py-2 text-[0.82rem] font-medium transition-colors ${
        active
          ? "border-anthracite bg-anthracite text-chalk"
          : "border-anthracite/20 text-anthracite/70 hover:border-anthracite/50"
      }`}
      aria-pressed={active}
    >
      {children}
    </button>
  );
}

function ProjectDetailModal({ project, onClose }: { project: Project; onClose: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[60] flex items-end justify-center bg-anthracite/60 p-0 sm:items-center sm:p-6"
      onClick={onClose}
      role="dialog"
      aria-modal
      aria-label={project.title}
    >
      <motion.div
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 20, opacity: 0 }}
        transition={{ duration: 0.35, ease: [0.65, 0, 0.35, 1] }}
        onClick={(e) => e.stopPropagation()}
        className="max-h-[92svh] w-full max-w-3xl overflow-y-auto bg-chalk"
      >
        <div className="relative aspect-[16/10]">
          <SurfacePlaceholder label={project.title} tone="mineral" className="h-full w-full" />
          <button
            type="button"
            onClick={onClose}
            aria-label="Schließen"
            className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center bg-chalk/90 text-anthracite"
          >
            <X className="h-5 w-5" strokeWidth={1.5} />
          </button>
        </div>
        <div className="p-6 sm:p-10">
          <h3 className="font-display text-2xl font-bold text-anthracite sm:text-3xl">{project.title}</h3>
          {project.location && (
            <p className="mt-2 flex items-center gap-1.5 text-[0.85rem] text-anthracite/60">
              <MapPin className="h-3.5 w-3.5" strokeWidth={1.75} />
              {project.location}
            </p>
          )}

          <dl className="mt-8 grid gap-6 sm:grid-cols-3">
            <div>
              <dt className="text-[0.75rem] uppercase tracking-wide text-anthracite/45">Aufgabe</dt>
              <dd className="mt-1.5 text-[0.92rem] leading-relaxed text-anthracite/80">{project.task}</dd>
            </div>
            <div>
              <dt className="text-[0.75rem] uppercase tracking-wide text-anthracite/45">
                Ausgeführte Arbeiten
              </dt>
              <dd className="mt-1.5 text-[0.92rem] leading-relaxed text-anthracite/80">
                {project.workDone}
              </dd>
            </div>
            <div>
              <dt className="text-[0.75rem] uppercase tracking-wide text-anthracite/45">
                Farbrichtung / Oberfläche
              </dt>
              <dd className="mt-1.5 text-[0.92rem] leading-relaxed text-anthracite/80">
                {project.colorDirection}
              </dd>
            </div>
          </dl>

          <p className="mt-8 text-[0.78rem] text-anthracite/40">
            Platzhalterprojekt — Inhalte werden nach Freigabe durch echte Projektdaten ersetzt.
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
}
