---
layout: default
title: Home
description: Portfolio, current work, and what I'm reading
---

<div class="hero">
  <h1 class="hero-title">Bhuvan Prakash</h1>
  <p class="hero-tagline">Building, learning, and sharing. This is my corner of the web.</p>
</div>

<section class="section doing">
  <h2 class="section-title">What I'm doing</h2>
  <ul class="doing-list">
    {% assign sorted_doing = site.doing | sort: "order" %}
    {% for item in sorted_doing %}
    <li class="doing-item">
      <a href="{{ item.url | relative_url }}" class="doing-link">
        <span class="doing-link-title">{{ item.title }}</span>
        <span class="doing-link-desc">{{ item.description }}</span>
        <span class="doing-link-arrow">→</span>
      </a>
    </li>
    {% endfor %}
  </ul>
</section>

<section class="section deep-dive">
  <h2 class="section-title">Deep Dive</h2>
  <p class="section-lead">Longer-form technical write-ups, format specs, and research.</p>
  <p><a href="{{ '/deep-dive/' | relative_url }}" class="deep-dive-link">View all deep dives →</a></p>
</section>

<section class="section reading">
  <h2 class="section-title">What I'm reading</h2>
  <p class="section-lead">Books that shape how I build and think. I’ll add more as I go.</p>
  <ul class="book-list">
    {% for book in site.data.reading %}
    <li class="book-item">
      <div class="book-main">
        {% if book.url %}
        <a href="{{ book.url }}" target="_blank" rel="noopener" class="book-title-link">{{ book.title }}</a>
        {% else %}
        <span class="book-title">{{ book.title }}</span>
        {% endif %}
        <span class="book-meta">{{ book.author }}{% if book.year %} · {{ book.year }}{% endif %}{% if book.note %} · {{ book.note }}{% endif %}</span>
      </div>
      {% if book.why %}
      <p class="book-why">{{ book.why }}</p>
      {% endif %}
    </li>
    {% endfor %}
  </ul>
</section>

<section class="section more">
  <p class="more-text">More projects and writing coming soon.</p>
</section>
