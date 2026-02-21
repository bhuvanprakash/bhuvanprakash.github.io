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
    <p class="reading-lead">Books that shape how I build and think. <a href="https://www.notion.so/Book-Tracker-7ecb5138fee148c0b08f2cbf97b46c43" target="_blank" rel="noopener noreferrer" class="reading-notion-inline">Full list on Notion →</a></p>
    <div class="reading-filter-wrap">
      <label for="reading-search" class="visually-hidden">Filter books by title, author, or summary</label>
      <input type="text" id="reading-search" class="reading-search" placeholder="Filter by title, author, or summary…" autocomplete="off" inputmode="search" aria-describedby="reading-filter-help reading-results-status">
      <p id="reading-filter-help" class="reading-filter-help">Type to filter by title, author, or summary.</p>
      <p id="reading-results-status" class="reading-results-status" role="status" aria-live="polite">{{ site.data.reading | size }} books</p>
    </div>
  </header>

  <div class="reading-grid" id="reading-grid">
    {% for book in site.data.reading %}
    {% capture search_text %}{{ book.title }} {{ book.author }} {{ book.summary }}{% endcapture %}
    <article class="book-tile" data-search="{{ search_text | strip | escape }}">
      {% if book.url %}<a href="{{ book.url }}" target="_blank" rel="noopener noreferrer" class="book-tile-link" aria-label="Open {{ book.title }}">{% endif %}
        {% if book.year %}<span class="book-tile-year">{{ book.year }}</span>{% endif %}
        <h2 class="book-tile-title">{{ book.title }}</h2>
        {% if book.author %}
        <p class="book-tile-meta">{{ book.author }}</p>
        {% else %}
        <p class="book-tile-meta book-tile-meta-empty">Author not listed</p>
        {% endif %}
        {% if book.summary %}<p class="book-tile-summary">{{ book.summary }}</p>{% endif %}
      {% if book.url %}</a>{% endif %}
    </article>
    {% endfor %}
  </div>
  <p id="reading-no-results" class="reading-no-results" hidden>No books match your filter. Try a different keyword.</p>
</article>
