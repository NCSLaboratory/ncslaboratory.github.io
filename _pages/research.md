---
title: "Research"
permalink: /research/
classes: wide
---

Our research examines nonlinear and complex systems through mathematics, computation, and AI.

## Reservoir computing: our core method

Reservoir Computing is a central methodology in the laboratory. We exploit the rich transient dynamics and memory of recurrent systems as a computational reservoir, training only a lightweight readout layer to learn temporal patterns and complex signals.

This approach connects the laboratory's interests in nonlinear dynamics, neuromorphic computation, and scientific machine learning. Our work includes chaotic reservoirs, unsupervised denoising, image processing, critical-transition prediction, and other data-driven analyses of complex systems.

## Nonlinear collective dynamics

We investigate how local interactions produce collective behavior, emergent patterns, and transitions in nonlinear systems.

## Mathematical modeling of social phenomena

We use mathematical models to study strategic interaction, cooperation, competition, and collective behavior in social systems.

## Neuromorphic computing

Inspired by biological neural systems, we explore efficient information processing with a focus on reservoir computing and the temporal dynamics of recurrent networks.

## Scientific computing and numerical analysis

We develop computational methods for simulating, analyzing, and predicting complex phenomena when analytical solutions are unavailable.

## Themes from the laboratory poster

- **Chaos theory:** order within unpredictability, sensitive dependence on initial conditions, and limits of long-term prediction
- **Game theory:** the mathematics of strategic interaction, equilibrium, competition, and cooperation

## Research media gallery

The following videos are grouped by research theme to provide a quick visual overview of lab simulations and computational results.

{% assign video_groups = site.data.research_videos | group_by: "category" %}
{% for group in video_groups %}
### {{ group.name }}

<div class="research-video-grid">
  {% for video in group.items %}
    <article class="research-video-card">
      <video controls preload="metadata" playsinline {% if video.poster %}poster="{{ video.poster | relative_url }}"{% endif %}>
        <source src="{{ video.file | relative_url }}" type="video/mp4" />
      </video>
      <h4>{{ video.title }}</h4>
      <p>{{ video.description }}</p>
    </article>
  {% endfor %}
</div>
{% endfor %}
