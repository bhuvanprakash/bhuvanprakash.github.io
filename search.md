---
layout: default
title: Search
description: Search blog posts and deep dives.
permalink: /search/
---

<div class="doing-back">
  <a href="{{ '/' | relative_url }}">← Home</a>
</div>

<article class="search-page" data-search-index="{{ '/search.json' | relative_url }}">
  <h1 class="doing-page-title">Search</h1>
  <p class="doing-page-lead">Search across blog posts and deep dives.</p>
  <form class="search-form" role="search" id="search-form">
    <label for="search-input" class="visually-hidden">Search</label>
    <input type="search" id="search-input" class="search-input" placeholder="Type to search…" autocomplete="off" autofocus>
  </form>
  <div id="search-results" class="search-results" aria-live="polite"></div>
  <p class="search-hint" id="search-hint">Results appear as you type.</p>
</article>
<script src="{{ '/assets/js/search.js' | relative_url }}" defer></script>
