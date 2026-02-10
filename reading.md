---
layout: default
title: What I'm reading
description: Books that shape how I build and think.
permalink: /reading/
---

<div class="doing-back">
  <a href="{{ '/' | relative_url }}">← Home</a>
</div>

<article class="doing-page reading-page">
  <header class="reading-header">
    <h1 class="reading-title">What I'm reading</h1>
    <p class="reading-lead">Books that shape how I build and think. <a href="https://www.notion.so/Book-Tracker-7ecb5138fee148c0b08f2cbf97b46c43" target="_blank" rel="noopener" class="reading-notion-inline">Full list on Notion →</a></p>
  </header>

  <div class="reading-grid">
    {% for book in site.data.reading %}
    <article class="book-tile">
      {% if book.url %}<a href="{{ book.url }}" target="_blank" rel="noopener" class="book-tile-link">{% endif %}
        {% if book.year %}<span class="book-tile-year">{{ book.year }}</span>{% endif %}
        <h2 class="book-tile-title">{{ book.title }}</h2>
        <p class="book-tile-meta">{{ book.author }}</p>
        {% if book.summary %}<p class="book-tile-summary">{{ book.summary }}</p>{% endif %}
      {% if book.url %}</a>{% endif %}
    </article>
    {% endfor %}
  </div>
</article>
