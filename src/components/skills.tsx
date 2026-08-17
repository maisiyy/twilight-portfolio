'use client';

import Image, { type StaticImageData } from 'next/image';
import { useState } from 'react';
import type { IconType } from 'react-icons';
import { FaAws, FaDatabase, FaJava, FaMicrosoft } from 'react-icons/fa';
import {
  SiC,
  SiFigma,
  SiFlask,
  SiGit,
  SiJavascript,
  SiLaravel,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiPhp,
  SiPostman,
  SiPython,
  SiReact,
  SiTypescript,
  SiUnity,
} from 'react-icons/si';
import { SKILL_CATEGORIES } from '@/data/portfolio';
import skills1 from '../../public/skills1.png';
import skills2 from '../../public/skills2.png';
import skills3 from '../../public/skills3.png';
import skills4 from '../../public/skills4.png';

const BOOK_COVERS: Record<string, StaticImageData> = {
  'Programming Languages': skills1,
  'Frameworks & Libraries': skills2,
  'Tools & Platforms': skills3,
  Databases: skills4,
};

const SKILL_ICONS: Record<string, IconType> = {
  javascript: SiJavascript,
  typescript: SiTypescript,
  python: SiPython,
  c: SiC,
  csharp: FaMicrosoft,
  java: FaJava,
  php: SiPhp,
  react: SiReact,
  nextjs: SiNextdotjs,
  nodejs: SiNodedotjs,
  laravel: SiLaravel,
  flask: SiFlask,
  git: SiGit,
  aws: FaAws,
  postman: SiPostman,
  figma: SiFigma,
  unity: SiUnity,
  mysql: SiMysql,
  sqlserver: FaDatabase,
};

export function Skills() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const selectedSkills = SKILL_CATEGORIES.find(({ title }) => title === selectedCategory);

  return (
    <section id="skills" className="screen-section mx-auto flex w-full max-w-[1400px] flex-col justify-center px-4 text-center sm:px-8">
      <h2 className="font-[Cinzel] mb-7 -translate-y-15 text-3xl tracking-wide text-[var(--text-primary)]">
        Skills
      </h2>

      <div className="grid grid-cols-2 gap-x-10 gap-y-12 sm:gap-x-16 lg:grid-cols-4 lg:gap-x-24">
        {SKILL_CATEGORIES.map((category, index) => (
          <article key={category.title} className="group flex min-w-0 flex-col items-center">
            <button
              type="button"
              aria-label={`Show ${category.title} skills`}
              aria-expanded={selectedCategory === category.title}
              onClick={() =>
                setSelectedCategory((current) =>
                  current === category.title ? null : category.title
                )
              }
              className={`floating-book relative mb-2 h-[clamp(12rem,26vw,26rem)] aspect-[2/3] overflow-hidden rounded-r-md rounded-l-sm border shadow-[12px_16px_25px_rgba(0,0,0,0.45)] transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--accent)] ${
                selectedCategory === category.title
                  ? 'border-[var(--accent)] ring-2 ring-[var(--accent)]/30'
                  : 'border-[var(--border-glass)] hover:border-[var(--accent)]/70'
              }`}
              style={{ animationDelay: `${index * -1.15}s` }}
            >
              <Image
                src={BOOK_COVERS[category.title]}
                alt={`${category.title} book cover`}
                fill
                sizes="(max-width: 640px) 42vw, (max-width: 1024px) 25vw, 18rem"
                className="object-cover"
              />
              <div className="absolute inset-y-0 left-0 w-3 bg-gradient-to-r from-black/45 to-transparent" />
              <div className="absolute -bottom-5 left-1/2 h-8 w-3/4 -translate-x-1/2 rounded-full bg-[var(--accent)]/25 blur-xl" />
            </button>
            <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-[var(--accent)]">
              Click to open
            </span>
          </article>
        ))}
      </div>

      {selectedSkills && (
        <div className="skill-chapter mx-auto mt-8 w-full max-w-3xl rounded-2xl border border-[var(--border-glass)] bg-[var(--surface-glass)] p-5 backdrop-blur-md sm:p-6">
          <h3 className="font-[Cinzel] text-xl text-[var(--text-primary)]">
            {selectedSkills.title}
          </h3>
          <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
            {selectedSkills.items.map((item) => {
              const Icon = SKILL_ICONS[item.iconName];

              return (
                <div
                  key={item.name}
                  className="flex items-center gap-3 rounded-xl border border-[var(--border-glass)] bg-[var(--bg-base)]/35 px-3 py-3 text-left"
                >
                  {Icon ? <Icon size={22} color={item.color} aria-hidden="true" /> : <FaDatabase size={22} aria-hidden="true" />}
                  <span className="font-mono text-xs text-[var(--text-secondary)]">{item.name}</span>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </section>
  );
}
