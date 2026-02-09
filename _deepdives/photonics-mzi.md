---
layout: default
title: "Photonics and Mach–Zehnder Interferometers"
description: "Integrated photonics, MZI building blocks, and programmable optical circuits."
order: 3
---

<div class="doing-back">
  <a href="{{ '/deep-dive/' | relative_url }}">← Deep Dive</a>
</div>

<article class="deepdive-article">
  <header class="deepdive-header">
    <h1 class="deepdive-title">Photonics and Mach–Zehnder Interferometers</h1>
    <p class="deepdive-lead">Integrated photonics, MZI building blocks, and programmable optical circuits.</p>
  </header>

  <div class="deepdive-prose">
    <p>Photonics is the science and engineering of light: generation, guiding, modulation, and detection. Unlike electronics, where electrons carry information, photonics uses photons. That gives advantages in speed, bandwidth, and immunity to electromagnetic interference. This deep dive focuses on <strong>integrated photonics</strong>—putting optical components on a chip—and on one of its fundamental building blocks: the <strong>Mach–Zehnder interferometer (MZI)</strong>.</p>

    <figure class="deepdive-figure">
      <img src="{{ '/assets/images/mzi-schematic.svg' | relative_url }}" alt="Mach-Zehnder interferometer: input, BS1, two arms (phase φ), BS2, Out 1 and Out 2." width="640" height="320">
      <figcaption>Fig. 1 — Mach–Zehnder interferometer: input split at BS₁, two arms (one with phase φ), recombined at BS₂. Output depends on phase difference.</figcaption>
    </figure>

    <h2>Why integrated photonics?</h2>
    <p>Traditional optics uses bulk components: lenses, mirrors, free-space beams. Integrated photonics replaces them with waveguides—thin channels that confine light—etched or deposited on a substrate (silicon, silicon nitride, indium phosphide, etc.). You get smaller, more stable, and scalable circuits that can be manufactured like chips. Applications include telecom, sensing, lidar, and signal processing. My interest is in how these circuits are designed and how MZIs sit at the heart of programmable linear optics.</p>

    <h2>The Mach–Zehnder interferometer in detail</h2>
    <p>An MZI has three stages: <strong>split</strong>, <strong>phase</strong>, <strong>recombine</strong>. A beam splitter (or directional coupler in integrated form) splits the input into two paths. One or both paths get a controllable phase shift (via thermo-optic or electro-optic effect). A second beam splitter recombines the two beams. Depending on the phase difference, the light exits one port (constructive interference) or the other (destructive), or a mix. So a single MZI acts as a tunable 2×2 coupler: it can route light between two output modes as you change the phase.</p>
    <p>In integrated photonics, the “beam splitters” are often <strong>directional couplers</strong> (two waveguides brought close so evanescent coupling splits the power) or <strong>multimode interference (MMI)</strong> sections. The phase shift is applied by heating a section of waveguide (thermo-optic) or by applying a voltage (electro-optic in materials like lithium niobate). That makes MZIs programmable: you can reconfigure the circuit without changing the hardware.</p>

    <h2>From one MZI to circuits</h2>
    <p>A single MZI implements a 2×2 unitary on two optical modes. By cascading many MZIs in a mesh (e.g. triangular or rectangular arrangements), you can approximate arbitrary unitary matrices on many modes. That’s the basis of <strong>programmable photonic circuits</strong>: one chip, many possible linear transforms depending on the phase settings. Such circuits are used in optical neural networks, quantum simulation, and classical signal processing. The math is well understood (e.g. Clements decomposition), and the challenge is fabrication, tuning, and calibration.</p>

    <h2>Connection to my work</h2>
    <p>I’m working on photonic structures and scalable prototypes. MZIs are a core primitive: they’re simple to model, widely used in the literature, and implementable in foundry processes. Understanding how to lay out MZI meshes, simulate them, and interface them with sources and detectors is part of making photonic systems practical. This page is a standalone deep dive on photonics and MZIs; for laser-based quantum computing, see the separate <a href="{{ '/deep-dive/quantum-computing-lasers/' | relative_url }}">Quantum computing with lasers</a> article.</p>

    <p><a href="{{ '/deep-dive/' | relative_url }}">← Back to Deep Dive</a></p>
  </div>
</article>
