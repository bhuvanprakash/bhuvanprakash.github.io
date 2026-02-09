---
layout: default
title: Deep Dive
description: Longer-form technical write-ups and deep dives.
permalink: /deep-dive/
---

<div class="doing-back">
  <a href="{{ '/' | relative_url }}">← Home</a>
</div>

<article class="doing-page">
  <h1 class="doing-page-title">Deep Dive</h1>
  <p class="doing-page-lead">In-depth write-ups on AI, liquid neural networks, photonics, and quantum computing. Same left-border style you liked—each item goes to a full article.</p>

  <ul class="deepdive-index-list">
    {% assign sorted = site.deepdives | sort: "order" %}
    {% for doc in sorted %}
    <li class="deepdive-index-item">
      <a href="{{ doc.url | relative_url }}" class="deepdive-index-link">
        <span class="deepdive-index-title">{{ doc.title }}</span>
        <span class="deepdive-index-meta">{{ doc.description }}</span>
      </a>
    </li>
    {% endfor %}
  </ul>

  <h2 class="deepdive-subtitle">References & specs</h2>
  <ul class="deepdive-index-list">
    <li class="deepdive-index-item">
      <a href="https://github.com/bhuvanprakash/Aero/blob/main/docs/FORMAT.md" target="_blank" rel="noopener" class="deepdive-index-link">
        <span class="deepdive-index-title">AERO format spec</span>
        <span class="deepdive-index-meta">Binary container for ML weights: header, TOC, BLAKE3, mmap-safe design.</span>
      </a>
    </li>
    <li class="deepdive-index-item">
      <a href="https://github.com/bhuvanprakash/Aero/blob/main/docs/AEROSET.md" target="_blank" rel="noopener" class="deepdive-index-link">
        <span class="deepdive-index-title">AEROSET</span>
        <span class="deepdive-index-meta">Multi-file AERO, remote URLs, cache guidance.</span>
      </a>
    </li>
    <li class="deepdive-index-item">
      <a href="{{ '/doing/research/' | relative_url }}" class="deepdive-index-link">
        <span class="deepdive-index-title">Research</span>
        <span class="deepdive-index-meta">MIRAE, quantum prototype, fine-tuning platform.</span>
      </a>
    </li>
  </ul>
</article>
