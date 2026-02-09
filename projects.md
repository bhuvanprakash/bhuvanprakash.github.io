---
layout: default
title: Projects
description: Open-source and side projects I build and maintain.
permalink: /projects/
---

<div class="doing-back">
  <a href="{{ '/' | relative_url }}">← Home</a>
</div>

<article class="doing-page">
  <h1 class="doing-page-title">Projects</h1>
  <p class="doing-page-lead">Open-source and side projects I build and maintain. More on <a href="{{ site.links.github }}" target="_blank" rel="noopener">GitHub</a>.</p>

  <ul class="deepdive-index-list">
    {% assign sorted = site.projects | sort: "order" %}
    {% for proj in sorted %}
    <li class="deepdive-index-item">
      <a href="{{ proj.link }}" target="_blank" rel="noopener" class="deepdive-index-link">
        <span class="deepdive-index-title">{{ proj.title }}</span>
        <span class="deepdive-index-meta">{{ proj.description }}{% if proj.tech %} · {{ proj.tech }}{% endif %}</span>
      </a>
    </li>
    {% endfor %}
  </ul>
</article>
