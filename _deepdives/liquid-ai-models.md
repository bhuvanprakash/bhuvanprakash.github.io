---
layout: deepdive
title: "Liquid AI Models"
description: "Continuous-time, compact neural networks that adapt on the fly."
order: 2
---

<div class="doing-back">
  <a href="{{ '/deep-dive/' | relative_url }}">← Deep Dive</a>
</div>

<article class="deepdive-article">
  <header class="deepdive-header">
    <h1 class="deepdive-title">Liquid AI Models</h1>
    <p class="deepdive-lead">Continuous-time, compact neural networks that adapt on the fly.</p>
  </header>

  <div class="deepdive-prose">
    <p>“Liquid” neural networks are a family of models that treat time as continuous and use differential equations to update their hidden state. Unlike standard feedforward or recurrent nets with fixed discrete steps, liquid networks have dynamics that evolve smoothly over time. That makes them well suited for streaming data, control, and settings where you want a small, adaptive model instead of a huge static one.</p>

    <h2>Where the idea comes from</h2>
    <p>Work on liquid time-constant networks (LTCs) and related architectures—e.g. by Ramin Hasani and collaborators—shows that you can get strong performance with far fewer parameters by letting the system be continuous in time and by encoding the “program” in the dynamics themselves. The network is effectively a dynamical system: inputs modulate how the state evolves, and the state can be read out at any time. That’s useful for robotics, edge deployment, and anywhere you care about latency, power, and adaptability.</p>

    <h2>Why it matters for what I do</h2>
    <p>I’m interested in AI that is efficient and deployable. Liquid-style models fit that: they’re compact, they can run in real time, and they adapt to the input stream instead of depending on a fixed window or a massive backbone. They also connect to a more general theme—treating learning and inference as processes in time rather than one-shot computations. That overlaps with how we might design systems that sit at the boundary of classical and other paradigms (e.g. photonic or quantum) where continuous dynamics are natural.</p>

    <h2>Where to look further</h2>
    <p>If you want to go deeper, search for “liquid time-constant networks,” “LTC,” and “liquid neural networks” (e.g. Hasani et al.); the original papers and code are a good start. I’ll add more formal notes and links here as I consolidate them.</p>

    <p><a href="{{ '/deep-dive/' | relative_url }}">← Back to Deep Dive</a></p>
  </div>
</article>
