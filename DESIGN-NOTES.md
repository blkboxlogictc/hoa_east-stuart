# Design direction: Heritage, with room to grow

The redesign combines the existing React site's navigation and photography with the client's royal crest, embroidered ornament, navy, ivory, and gold.

## The design decisions

- Lead with a human message and a large arched photograph. The institution's name remains in the masthead; the headline explains why visitors should care.
- Concentrate ornate artwork in the crest and North Star section. Double borders and a fine stitched rule echo the embroidery without enclosing every paragraph in decoration.
- Alternate navy, ivory, photography, and generous spacing to create a deliberate reading rhythm.
- Give the homepage a short sequence: purpose, guiding commitment, programs, participation. Keep detailed governance and program material on their existing pages.
- Use six plain-language program labels with links directly to the matching program sections.
- Make resident, volunteer, and partner entry points visible. Contact actions currently use email; the support action is labeled as an inquiry rather than implying checkout.
- Preserve keyboard focus indicators, a skip link, Escape dismissal for the mobile menu, and reduced-motion preferences.

## Source assets

Reused from https://www.heritageandopportunityalliance.org/ on September 17, 2026:

- /hoa-logo.jpg → public/assets/royal-crest.jpg
- /royal/hoa-royal-header.webp → public/assets/royal-header.webp
- /royal/hoa-ivory-paper-tile.webp → public/assets/ivory-paper.webp

Existing project photography remains in use. Before publication, confirm it accurately represents the community and has appropriate usage rights; it has not been independently verified as documentary photography of East Stuart.

## Scope

Implemented homepage redesign, shared navigation and theme, matching footer crest, program anchors, and clearer contact actions. Existing interior page content remains largely intact. The live client's account system, applications, toolbox, and 25-slide strategy presentation have not been migrated into this local project.

## Preview

Run `npm run dev` and open the local Vite URL. `npm run build` creates the production bundle. No deployment was performed.
