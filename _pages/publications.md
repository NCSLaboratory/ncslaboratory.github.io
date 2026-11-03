---
title: "Publications"
permalink: /publications/
classes: wide
---

The list below contains the 24 publications in the supplied Scopus export covering 2016–2025. DOI links point to the publisher or persistent article record; Scopus links point to the indexed publication record.

<div class="publication-list">
  {% for publication in site.data.publications %}
    <article class="publication-item">
      <p class="publication-meta">{{ publication.year }} · {{ publication.journal }} · {{ publication.citations }} citations</p>
      <h2>{{ publication.title }}</h2>
      <p class="publication-authors">{{ publication.authors | replace: "|", ", " }}</p>
      <div class="publication-links">
        <a href="{{ publication.doi_url }}">DOI</a>
        <a href="{{ publication.scopus_url }}">Scopus</a>
      </div>
    </article>
  {% endfor %}
</div>
