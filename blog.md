---
layout: default
title: Blog
description: Short updates, notes, and essays.
permalink: /blog/
---

<div class="doing-back">
  <a href="{{ '/' | relative_url }}">← Home</a>
</div>

<article class="doing-page">
  <h1 class="doing-page-title">Blog</h1>
  <p class="doing-page-lead">Short updates, notes from building, and occasional longer essays. For in-depth technical write-ups, see <a href="{{ '/deep-dive/' | relative_url }}">Deep Dive</a>.</p>

  <ul class="deepdive-index-list">
    {% for post in site.posts %}
    <li class="deepdive-index-item">
      <a href="{{ post.url | relative_url }}" class="deepdive-index-link">
        <span class="deepdive-index-title">{{ post.title }}</span>
        <span class="deepdive-index-meta">{{ post.date | date: "%B %d, %Y" }}{% if post.description %} · {{ post.description }}{% endif %}</span>
      </a>
    </li>
    {% endfor %}
  </ul>
</article>
