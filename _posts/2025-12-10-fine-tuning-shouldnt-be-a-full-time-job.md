---
layout: post
title: "Fine-tuning shouldn't be a full-time job"
date: 2025-12-10
description: "What I want from a fine-tuning platform—and why I'm building toward it."
---

Hugging Face made pretrained models easy to find, load, and try. The next step is making **fine-tuning** that easy: take a base model, plug in your data and your task, and get a model that works for you—without rebuilding the whole stack.

Right now, fine-tuning often means wrestling with data pipelines, training loops, evaluation, and reproducibility. If you're a researcher or a product team, you want to focus on your problem, not on infra. So I'm working on a **fine-tuning platform** that does the heavy lifting: good defaults, clear evaluation, and a path from experiment to something you can ship.

A few principles I care about:

- **Discover and load** — Pick a base model (or use one you already trust), then point at your dataset. No need to clone five repos and patch CUDA.
- **Reproducibility** — Every run is versioned: data, config, and seeds. You can replay or share an experiment without “it worked on my machine.”
- **Simple UX** — If you can describe your task and your data, you should be able to launch a run. Power users can still tune everything.

I'm not there yet, but this is the bar I'm aiming for. If you're building something similar or you've felt the pain of “I just want to fine-tune this model,” I'd love to [compare notes](https://www.linkedin.com/in/bhuvanprakash/).
