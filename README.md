# Portfolio v3.1

Landing page portfolio personal yang dibuat dengan Astro, Tailwind CSS v4, TypeScript, dan integrasi React/shadcn untuk komponen UI bila dibutuhkan.

Project ini sudah tidak lagi memakai README template bawaan. Isi halaman utamanya berupa satu landing page portfolio dengan section:

- Hero
- Services
- Experience
- About
- Portfolio
- Testimonials
- CTA
- Marquee
- Blog
- Footer

## Stack

- Astro 6
- TypeScript
- Tailwind CSS 4
- React 19
- shadcn/ui
- ESLint
- Prettier

## Struktur Project

```text
src/
  assets/img/                  # Asset gambar
  components/
    sections/                  # Section landing page
    navbar.astro               # Navbar utama
    ui/                        # Komponen UI reusable
  layouts/
    main.astro                 # Layout utama + metadata dasar
  pages/
    index.astro                # Halaman utama
  styles/
    global.css                 # Global styling dan theme
```

## Menjalankan Project

Pastikan menggunakan `pnpm` karena repo ini sudah menyertakan `pnpm-lock.yaml`.

```bash
pnpm install
pnpm dev
```

Setelah itu buka:

```bash
http://localhost:4321
```

## Script Yang Tersedia

```bash
pnpm dev        # Menjalankan local development server
pnpm build      # Build production
pnpm preview    # Preview hasil build
pnpm lint       # Menjalankan ESLint
pnpm format     # Format file ts, tsx, astro
pnpm typecheck  # Type check dengan Astro
```

## Catatan

- Entry page ada di `src/pages/index.astro`
- Layout utama ada di `src/layouts/main.astro`
- Judul halaman saat ini adalah `Faris Portfolio`
- Styling global dan token theme ada di `src/styles/global.css`

## Pengembangan Konten

Kalau ingin menyesuaikan isi portfolio:

- Ubah susunan section di `src/pages/index.astro`
- Edit konten tiap section di folder `src/components/sections`
- Ganti logo atau gambar di `src/assets/img`
- Sesuaikan metadata dasar di `src/layouts/main.astro`
