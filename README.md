# lumbar-spine-ct-reporter

Left sidebar (approx. 20% width)
Numbered sections for Numeração, Pós-operatório, Alinhamento, Corpos vertebrais, etc.
Allows selection of relevant sections to include in the report
Main content area (approx. 60% width)
Top tabs for técnica, análise, conclusão
"técnica" tab selected, showing a bullet point summary of the CT technique
Images obtained via multislice CT acquisition
"análise" and "conclusão" tabs would likely contain the radiologist's detailed findings and impression
Right sidebar (approx. 20% width)
Auto-text shortcuts to insert pre-written text for normal/common findings
Sections for Discography, D10-D11 through L5-S1 vertebral levels
Clicking inserts the auto-text for that level, e.g. "No significant disc height loss" for L5-S1
In summary, this standardized interface allows radiologists to efficiently generate structured lumbar spine CT reports by selecting relevant sections, inserting normal findings via auto-text, and focusing their dictation on abnormal findings in the análise and conclusão tabs. The numbered left sidebar organizes the report into logical sections.

Copy


KT
explain all.,

Here is a detailed breakdown of the medical reporting interface shown in the images:

Top-level layout
Application window divided into 3 vertical sections: left sidebar (20% width), main content area (60% width), right sidebar (20% width)
Header bar at top with application name/logo and user controls
Left sidebar
Purpose: Allows user to select relevant sections to include in the report
Vertically stacked list of collapsible sections, labeled:
Numeração (Numbering)
Pós-operatório (Postoperative)
Alinhamento (Alignment)
Corpos vertebrais (Vertebral bodies)
Facetas (Facet joints)
Discos (Intervertebral discs)
Hérnias (Disc herniations)
Canal vertebral (Vertebral canal)
Musculatura (Musculature)
Boastrap (Bootstrap)
Cistos perinradiculares (Perineural cysts)
Sections can be expanded/collapsed by clicking disclosure triangle
Checkboxes next to each item allow single or multiple selection
Items are hierarchical with indented sub-items, e.g. under "Discos":
Normal
L1-L2, L2-L3, L3-L4, L4-L5, L5-S1 disc levels
Selected items will be inserted into the report
Main content area
Tabbed interface with 3 tabs: técnica (technique), análise (analysis), conclusão (conclusion)
"técnica" tab open by default
Displays a bullet point summary of the CT scanning technique
Standard text: "Images obtained in aquisição tomográficas com multidetectores" (Images obtained via multislice CT acquisition)
"análise" tab
Where radiologist would enter detailed findings
Sections auto-populated from selections made in left sidebar
Free-text boxes to enter additional findings not covered by auto-text
"conclusão" tab
Where radiologist would synthesize findings into an impression
Free-text box to enter impression
Right sidebar
Purpose: Auto-text shortcuts to quickly enter normal/negative findings
Vertically stacked sections:
descobrir (discover)
Conclusão (conclusion)
Field where auto-text is inserted, e.g. "Disposição degenerativa conforme normatizado acima." (Degenerative changes as described above.)
Disc levels D10-D11 through L5-S1
Clicking on a level inserts pre-written auto-text, e.g. for L5-S1:
"L5-S1: Prolapso discal sem determinar compressão significativa de estruturas neurais." (L5-S1: Disc prolapse without significant compression of neural structures.)
Bottom
Likely contains button controls to insert auto-text (Descrição), clear form (Limpar), save report (Salvar), etc.
In summary, this is a highly structured interface for efficiently generating lumbar spine CT reports. The radiologist can quickly select relevant sections, insert normal findings via auto-text, and focus their time on detailing abnormal findings and synthesizing their impression. The left sidebar keeps the report organized, the right sidebar speeds up data entry, and the tabbed main area provides a framework for a logical, comprehensive report.

## Collaborate with GPT Engineer

This is a [gptengineer.app](https://gptengineer.app)-synced repository 🌟🤖

Changes made via gptengineer.app will be committed to this repo.

If you clone this repo and push changes, you will have them reflected in the GPT Engineer UI.

## Setup

```sh
git clone https://github.com/GPT-Engineer-App/lumbar-spine-ct-reporter.git
cd lumbar-spine-ct-reporter
npm i
```

```sh
npm run dev
```

This will run a dev server with auto reloading and an instant preview.

## Tech stack

- [Vite](https://vitejs.dev/)
- [React](https://react.dev/)
- [Chakra UI](https://chakra-ui.com/)

## Requirements

- Node.js & npm - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)
