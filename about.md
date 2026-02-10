---
layout: default
title: About
description: A short intro and how to get in touch.
permalink: /about/
---

<div class="doing-back">
  <a href="{{ '/' | relative_url }}">← Home</a>
</div>

<article class="doing-page">
  <h1 class="doing-page-title">About</h1>
  <p class="doing-page-lead">Builder, learner, and occasional writer.</p>
  <div class="doing-page-content">
    <p>I work on ML infrastructure, photonics, and open-source tooling. I care about clean design, fast systems, and shipping things that others can build on. This site is a quiet corner for what I'm doing, reading, and thinking about.</p>
    <h2 class="about-reach-title">How to reach me</h2>
    <ul class="about-reach-list">
      {% if site.author.email and site.author.email != '' %}
      <li><a href="mailto:{{ site.author.email }}">Email</a></li>
      {% endif %}
      <li><a href="{{ site.links.linkedin }}" target="_blank" rel="noopener">LinkedIn</a></li>
      <li><a href="{{ site.links.twitter }}" target="_blank" rel="noopener">X (Twitter)</a></li>
      {% if site.links.website %}<li><a href="{{ site.links.website }}" target="_blank" rel="noopener">bhuvan.space</a></li>{% endif %}
    </ul>
    <p class="about-reach-note">{% if site.author.email and site.author.email != '' %}For anything longer, email is best.{% else %}Add <code>author.email</code> in <code>_config.yml</code> to show an email link here.{% endif %}</p>
  </div>
</article>
