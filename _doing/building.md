---
layout: default
title: Building
description: This portfolio, side projects, and tools I ship.
order: 1
---

<div class="doing-back">
  <a href="{{ '/' | relative_url }}">← What I'm doing</a>
</div>

<article class="doing-page">
  <h1 class="doing-page-title">Building</h1>
  <p class="doing-page-lead">This portfolio, side projects, and tools I ship.</p>
  <div class="doing-page-content">
    <p>I’m a self-taught developer, and most of what I know comes from building things and breaking them until they work. This site is one of those things—a minimal home for my work and ideas, built with Jekyll so it’s fast, readable, and easy to update. I care a lot about clean UI and calm design, so you’ll see that reflected here.</p>
    <p><strong><a href="https://github.com/bhuvanprakash/jhol" target="_blank" rel="noopener">Jhol Free</a></strong> is a fast, decentralized, IPFS-friendly, offline-capable package manager—an alternative to NPM and Yarn. It’s built in Rust and focuses on blazing-fast installs, offline caching, and smart debugging (<code>jhol doctor --fix</code>). It’s designed for developers who want a lightweight, efficient workflow and the ability to work without a constant connection. Install with <code>cargo install --git https://github.com/bhuvanprakash/jhol</code>.</p>
    <p><strong><a href="https://github.com/bhuvanprakash/Aero" target="_blank" rel="noopener">AERO</a></strong> is a chunked model container format for machine-learning weights and metadata. It’s a minimal, deterministic binary format that supports fast loading, safe parsing, and zero-copy weight access via <code>mmap</code>. It includes a Table of Contents, per-chunk BLAKE3 integrity, optional zstd for metadata, and multi-file AEROSET for large models. I maintain Python and C++ readers/writers, plus converters from safetensors and GGUF. See the repo for the full spec and <code>aerotensor</code> on PyPI.</p>
    <p>I’m also building <strong><a href="https://github.com/bhuvanprakash/themodelindex" target="_blank" rel="noopener">TheModelIndex</a></strong> (model indexing and discovery), <strong><a href="https://github.com/bhuvanprakash/oraclehub" target="_blank" rel="noopener">OracleHub</a></strong> (shared components and tooling), <strong><a href="https://github.com/bhuvanprakash/inferencepark" target="_blank" rel="noopener">InferencePark</a></strong> (inference and serving), and <strong><a href="https://github.com/bhuvanprakash/quantanote" target="_blank" rel="noopener">Quantanote</a></strong> (quantum notes and experiments)—repos and docs are evolving; check my <a href="https://github.com/bhuvanprakash" target="_blank" rel="noopener">GitHub</a> for the latest.</p>
    <p>My stack shifts by project: Rust for Jhol, Python and C++ for AERO, plus Flask, FastAPI, React, Next.js when the problem calls for it. The goal is always to ship something that works and that others can build on.</p>
    <p>If you’re building something too—whether it’s a tiny script or a big system—I’d love to hear about it. Curiosity is what got me into programming, and it’s what keeps me here.</p>
  </div>
</article>
