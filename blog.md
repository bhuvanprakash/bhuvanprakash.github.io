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
  <p class="doing-page-lead">Short updates, notes from building, and occasional essays. For longer technical articles, see <a href="{{ '/deep-dive/' | relative_url }}">Deep Dive</a>.</p>

  <ul class="blog-index-list">
    {% for post in site.posts %}
    <li class="blog-index-item">
      <a href="{{ post.url | relative_url }}" class="blog-index-link">
        <span class="blog-index-title">{{ post.title }}</span>
        <span class="blog-index-meta">{{ post.date | date: "%B %d, %Y" }}{% assign wc = post.content | number_of_words %}{% if wc > 0 %} · {{ wc | divided_by: 200 | plus: 1 }} min read{% endif %}</span>
        {% if post.description %}<span class="blog-index-excerpt">{{ post.description }}</span>{% endif %}
      </a>
    </li>
    {% endfor %}
  </ul>
  {% if site.posts.size == 0 %}
  <p class="deepdive-section-empty">No posts yet.</p>
  {% endif %}
</article>
