---
layout: default
title: Now
description: What I'm focused on right now.
permalink: /now/
updated: 2025-02
---

<div class="doing-back">
  <a href="{{ '/' | relative_url }}">← Home</a>
</div>

<article class="doing-page">
  <h1 class="doing-page-title">Now</h1>
  <p class="doing-page-lead">What I'm focused on right now. I update this when things shift.</p>
  {% if page.updated %}<p class="now-updated">Last updated: {{ page.updated }}</p>{% endif %}
  <div class="doing-page-content">
    <p><strong>Work:</strong> Finishing the MIRAE fine-tuning platform and quantum prototype experiments. Shipping small improvements to <a href="https://github.com/bhuvanprakash/jhol" target="_blank" rel="noopener">Jhol</a> and <a href="https://github.com/bhuvanprakash/Aero" target="_blank" rel="noopener">AERO</a>.</p>
    <p><strong>Reading:</strong> <em>Deep Work</em>—applying it to build more with less context-switching.</p>
    <p>If you keep a Now page too, <a href="https://nownownow.com/about" target="_blank" rel="noopener">nownownow.com</a> has the list.</p>
  </div>
</article>
