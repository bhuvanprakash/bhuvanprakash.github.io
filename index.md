---
layout: default
title: Home
description: Portfolio, current work, and what I'm reading
---

<div class="hero">
  <h1 class="hero-title">Bhuvan Prakash</h1>
  <p class="hero-tagline">Building, learning, and sharing. This is my corner of the web. <a href="{{ '/now/' | relative_url }}" class="hero-now">What I'm focused on now</a>.</p>
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

<section class="section github">
  <h2 class="section-title">On GitHub</h2>
  <p class="section-lead">Repos I'm actively building.</p>
  <p><a href="{{ site.links.github }}" target="_blank" rel="noopener" class="deep-dive-link">View all →</a></p>
</section>

<section class="section deep-dive">
  <h2 class="section-title">Deep Dive</h2>
  <p class="section-lead">Longer-form technical write-ups, format specs, and research.</p>
  <p><a href="{{ '/deep-dive/' | relative_url }}" class="deep-dive-link">View all deep dives →</a></p>
</section>

<section class="section reading">
  <h2 class="section-title">What I'm reading</h2>
  <p class="section-lead">Books that shape how I build and think.</p>
  <p><a href="{{ '/reading/' | relative_url }}" class="deep-dive-link">View all books →</a></p>
</section>

<section class="section more">
  <p class="more-cta"><a href="{{ '/projects/' | relative_url }}" class="deep-dive-link">Browse projects</a> · <a href="{{ '/blog/' | relative_url }}" class="deep-dive-link">Read the blog</a></p>
</section>
