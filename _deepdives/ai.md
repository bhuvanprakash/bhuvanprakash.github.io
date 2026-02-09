---
layout: default
title: "AI — What I Mean When I Say AI"
description: "Scale, efficiency, and where I put my focus."
order: 1
---

<div class="doing-back">
  <a href="{{ '/deep-dive/' | relative_url }}">← Deep Dive</a>
</div>

<article class="deepdive-article">
  <header class="deepdive-header">
    <h1 class="deepdive-title">AI — What I Mean When I Say AI</h1>
    <p class="deepdive-lead">Scale, efficiency, and where I put my focus.</p>
  </header>

  <div class="deepdive-prose">
    <p>When I say “AI” I usually mean machine learning systems that learn from data and generalize—neural networks, transformers, diffusion models, and the whole ecosystem of training, inference, and deployment. I’m less interested in the hype cycle and more in what actually works: architectures that are efficient, models we can run and iterate on without burning the planet, and tooling that makes the whole pipeline reproducible and safe.</p>

    <h2>Why efficiency matters</h2>
    <p>Today’s biggest models are powerful but expensive. Training and serving them at scale costs a lot of compute and energy. I care about the other axis: getting more out of less. That means better inductive biases, data-efficient learning, smaller or sparser models that still solve the task, and formats (like <a href="https://github.com/bhuvanprakash/Aero" target="_blank" rel="noopener">AERO</a>) that make loading and serving weights fast and predictable. The goal isn’t to replace large models everywhere; it’s to make strong AI practical in more settings—edge, on-device, and in environments where every watt and dollar counts.</p>

    <h2>Where I focus</h2>
    <p>My work centers on a few threads: energy-efficient learning (the <a href="{{ '/doing/research/' | relative_url }}">MIRAE</a> direction), model containers and tooling (AERO, fine-tuning platforms), and the intersection of AI with other domains—quantum, photonics, and systems that mix classical and novel hardware. I’m also interested in how we reason about these systems: interpretability, safety, and the messy questions at the edge of science and philosophy. I write and build in that space; this deep dive and the others on this site are part of that.</p>

    <p>More technical deep dives: <a href="{{ '/deep-dive/liquid-ai-models/' | relative_url }}">Liquid AI models</a>, <a href="{{ '/deep-dive/photonics-mzi-quantum-laser/' | relative_url }}">Photonics MZI and quantum computing with laser</a>.</p>
  </div>
</article>
