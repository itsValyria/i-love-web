---
id: "18"
title: "21 oktober 2024"
date: "2024-10-21"
description: "Vandag heb ik mijn website uitvoerig getest en ook met JavaScript een soort drag functie gemaakt."
labels: ["Sprint 15", "Bouwen", "Testen"]
---

# Wat heb ik vandaag gedaan?

Vandaag heb ik met JavaScript een scroll functie gemaakt voor kleinere windows op PC, zodat je basically de carousel kan draggen. Dit heb ik gedaan door middel van MouseDown en MouseUp events. Het werkt, nog niet helemaal zoals ik zou willen, maar het werkt. Hierna ben ik gaan bouwen aan de contouring cards, en nadat dit af was, was het tijd voor het testen! <br>
Ik begon met een Lighthouse accessibility test, waar ik eerst 87 scoorde. Het bleek dat ik op een van de logo's een alt vergeten was, zo opgelost natuurlijk. Daarna had ik een error dat de search button geen accessible name had, dit kwam omdat ik een aria-label vergeten was. Dit was natuurlijk ook zo opgelost. Daarna heb ik een tab test gedaan, dat hoort natuurlijk ook bij accessibility, en dat ging ook allemaal zoals het hoort.<br>
Toen heb ik snel een HTML validator test gedaan, en tot mijn mega verbazing, was er geen enkele error, warning, niks! Wow! <br>
Dan was er de laatste, en voor mij de meest challenging stap, namelijk performance. En inderdaad, een score van 85 was aanwezig. LCP was namelijk een groot probleem, zoals ik al verwachtte. Ik heb eerst gekeken naar een package die foto's automatisch convert naar AVIF of zo, maar dit kan dus niet, omdat de images uit de API getrokken worden. Daarom besloot ik al snel in de directus docs gaan kijken, en toen kwam ik er achter dat ik met ?format een formaat kan forceren. Deze heb ik op .webp gezet, en dit verbeterde de performance test score tot 99.

# Wat heb ik vandaag geleerd?

Hoe ik met de Directus API images kan manipuleren! Niet alleen formats, maar ook dingen als height, width en nog andere dingen.

# Heb ik nog leervragen?

Niet echt.






