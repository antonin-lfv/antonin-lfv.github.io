---
layout: page
permalink: /publications/
title: publications
description: My publications organized by year. (for now I havn't published anything)
# years: [2022, 2023]
nav: true
nav_order: 1
---
<!-- _pages/publications.md -->
<div class="publications">

{%- for y in page.years %}
  <h2 class="year">{{y}}</h2>
  {% bibliography -f papers -q @*[year={{y}}]* %}
{% endfor %}

</div>
