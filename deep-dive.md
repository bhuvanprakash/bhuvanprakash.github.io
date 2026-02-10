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
  <p class="doing-page-lead">In-depth write-ups on AI, liquid neural networks, photonics, quantum computing, and papers I care about. Each link opens a full article.</p>

  <h2 class="deepdive-subtitle">Articles</h2>
  <p class="deepdive-section-lead">Long-form technical write-ups.</p>
  <ul class="deepdive-index-list deepdive-index-section">
    {% assign articles = site.deepdives | where_exp: "d", "d.section != 'talks'" | sort: "order" %}
    {% for doc in articles %}
    <li class="deepdive-index-item">
      <a href="{{ doc.url | relative_url }}" class="deepdive-index-link">
        <span class="deepdive-index-title">{{ doc.title }}</span>
        <span class="deepdive-index-meta">{{ doc.description }}</span>
      </a>
    </li>
    {% endfor %}
  </ul>

  <h2 class="deepdive-subtitle">Talks & papers</h2>
  <p class="deepdive-section-lead">Paper summaries and external slides. Full write-ups live here on the site.</p>
  {% assign talk_docs = site.deepdives | where_exp: "d", "d.section == 'talks'" | sort: "order" %}
  <ul class="deepdive-index-list deepdive-index-section">
    {% for talk in site.data.talks %}
    <li class="deepdive-index-item">
      <a href="{% if talk.url contains 'http' %}{{ talk.url }}{% else %}{{ talk.url | relative_url }}{% endif %}" {% if talk.url contains 'http' %}target="_blank" rel="noopener"{% endif %} class="deepdive-index-link">
        <span class="deepdive-index-title">{{ talk.title }}</span>
        <span class="deepdive-index-meta">{{ talk.venue }}{% if talk.date %} · {{ talk.date }}{% endif %}{% if talk.description %} · {{ talk.description }}{% endif %}</span>
      </a>
    </li>
    {% endfor %}
    {% for doc in talk_docs %}
    <li class="deepdive-index-item">
      <a href="{{ doc.url | relative_url }}" class="deepdive-index-link">
        <span class="deepdive-index-title">{{ doc.title }}</span>
        <span class="deepdive-index-meta">{{ doc.description }}</span>
      </a>
    </li>
    {% endfor %}
  </ul>
  {% assign has_talks = site.data.talks.size | plus: talk_docs.size %}
  {% if has_talks == 0 %}
  <p class="deepdive-section-empty">None listed yet.</p>
  {% endif %}

  <h2 class="deepdive-subtitle">References & specs</h2>
  <p class="deepdive-section-lead">Format docs and project references.</p>
  <ul class="deepdive-index-list deepdive-index-section deepdive-index-section-last">
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
        <span class="deepdive-index-meta">MIRAE, photonics GPU, fine-tuning platform.</span>
      </a>
    </li>
  </ul>
</article>
