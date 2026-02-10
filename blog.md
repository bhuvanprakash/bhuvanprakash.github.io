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

  {% assign posts_by_year = site.posts | group_by_exp: "post", "post.date | date: '%Y'" %}
  {% for year in posts_by_year %}
  <h2 class="blog-year">{{ year.name }}</h2>
  <ul class="blog-index-list">
    {% for post in year.items %}
    <li class="blog-index-item">
      <a href="{{ post.url | relative_url }}" class="blog-index-link">
        <span class="blog-index-title">{% if forloop.first and year.name == posts_by_year.first.name %}<span class="blog-badge-new">New</span> {% endif %}{{ post.title }}</span>
        <span class="blog-index-meta">{{ post.date | date: "%B %d" }}{% assign wc = post.content | number_of_words %}{% if wc > 0 %} · {{ wc | divided_by: 200 | plus: 1 }} min read{% endif %}</span>
        {% if post.description %}<span class="blog-index-excerpt">{{ post.description }}</span>{% endif %}
      </a>
    </li>
    {% endfor %}
  </ul>
  {% endfor %}
  {% if site.posts.size == 0 %}
  <p class="deepdive-section-empty">No posts yet.</p>
  {% endif %}
</article>
