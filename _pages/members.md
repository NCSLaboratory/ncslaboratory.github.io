---
title: "Members"
permalink: /members/
classes: wide
---

The lab members are listed below. Profile buttons are shown only when a verified public URL is available.

<div class="member-directory">
  {% for member in site.data.members %}
    <article class="member-profile">
      {% if member.photo %}<img class="member-photo" src="{{ member.photo | relative_url }}" alt="{{ member.name }}" />{% endif %}
      <p class="member-group">{{ member.group }}</p>
      <h2>{{ member.name }}</h2>
      {% if member.affiliation %}<p>{{ member.affiliation }}</p>{% endif %}
      <div class="member-links">
        {% if member.email %}<a href="mailto:{{ member.email }}">Email</a>{% endif %}
        {% if member.homepage %}<a href="{{ member.homepage }}">Homepage</a>{% endif %}
        {% if member.github %}<a href="{{ member.github }}">GitHub</a>{% endif %}
        {% if member.research_profile %}<a href="{{ member.research_profile }}">Research profile</a>{% endif %}
      </div>
    </article>
  {% endfor %}
</div>
