# Bottler Buzz resource hub

A standalone resource library for working with AI tools, including tool-specific resources where labeled. No framework, build, install, analytics, external fonts, or network requests are required.

## Open locally

Double-click `index.html` in a current Edge, Chrome, Firefox, or Safari browser. Keep `styles.css`, `resources.js`, `prompt-library.js`, and `app.js` alongside it, plus the `skills` and `pdfs` folders. The site works directly from `file://`; it does not fetch local JSON. JavaScript must be enabled.

## Organization

- **Bottler Buzz AI Presentation Tools** is the yellow-outlined starting section: the three fill-out worksheets, Workflow Identifier, the bonus-agent PDF, and Anti-AI Slop skill. All four PDFs have active Download buttons. The sample Workflow Coach remains in the broader library.
- **More resources for your workday** contains the expanded prompt and agent library, followed by the other sample prompts so finished resources appear first.
- Each resource appears once. Search and filters apply to both sections; empty sections disappear and each section shows its matching count.
- **Resource type** answers what it is: Worksheets, Prompts, Agents, or Skills. Templates that contain copyable instructions are labeled Prompt template; agent templates appear in Agents.
- **App / tool** answers where it is used, including Excel, Outlook, Teams, Copilot Chat, Copilot Cowork, and other tools. Cards show the primary tool; the full-text dialog lists all assigned tools. Related-app filtering is based on each resource's explicit `apps` list, not incidental mentions.
- **Task / topic** covers uses such as Planning, Writing, Meetings, Dashboards, or Inbox Management. It is separate from resource type and app.

The expanded library includes 35 additional complete resources. The supplied Workflow Identifier already contains the same prompt as Automate (apart from whitespace), so it remains the single presentation card and is also searchable as "Automate." Full prompt text is stored locally, not replaced with excerpts or links. Source-site navigation, branding, signup code, styles, and tracking are not included.

## Edit the library

Edit **resources.js** for the presentation resources and original samples, or **prompt-library.js** for the expanded library, then save and refresh the browser:

- Update each resource's `title`, `summary`, `excerpt`, and `footer`.
- Keep `id` unique across both files. Use types `Worksheets`, `Prompts`, `Agents`, or `Skills`. Set `topic` to the task category, and `apps` to a nonempty array of tool names with the primary tool first. App and topic dropdown options are generated from the data.
- Set `featured: true` to include a resource in the yellow-outlined presentation section. Leave it absent or set it to `false` for the broader library. Use optional `aliases` for alternate searchable names.
- Worksheets are resources a participant fills out. Prompts about building skills or agents remain in **Prompts**; actual reusable skill instructions and agent starters belong in **Skills** and **Agents**.
- Inline text lives under `content`. In `resources.js`, multiline backtick strings require escaping literal backticks as `\`` and literal `${` as `\${`. In `prompt-library.js`, quoted JSON-style strings use `\n` for line breaks and `\"` for quotation marks.
- **Workflow Identifier** contains the user's supplied Microsoft 365 Copilot prompt, with a View action and copyable full text. It is not labeled as sample content. Use it in Microsoft 365 Copilot with appropriate access; this site does not access Microsoft 365 data or run the prompt.
- **Year in Review: My Accomplishments** is adapted for annual reflection, highlighting source-supported contributions, meaningful achievements, and lessons from the current year.
- **Anti-AI Slop** is an original downloadable editing skill in `skills/anti-ai-slop/SKILL.md`. It removes filler and formulaic language while preserving meaning, factual details, uncertainty, and the writer's voice. Edit that file to change the skill instructions.
- The four other original prompts in `resources.js` and the Workflow Coach agent are **sample content**, not final user-provided materials. Expanded-library resources and the supplied Workflow Identifier are not marked as samples. All agent entries are instruction text, not installed integrations.
- Keep `sample: true` for examples. Set it to `false` only after replacing them with approved final content.
- Copy an existing object to add a resource, giving it a new ID and separating objects with commas. Counts and search update automatically.
- Search matches all entered words across titles, summaries, excerpts, topics, types, apps, aliases, and full inline content. Type, app, topic, and search combine; Reset filters clears all four.

The three worksheets and bonus-agent guide are the supplied PDFs, copied without changing their contents. See `pdfs/README.md` for the filenames and card mapping.

## PDF downloads and replacements

1. Put approved replacement PDFs in the existing `pdfs` folder beside `index.html`. On GitHub, open that folder and use **Add file > Upload files**.
2. Set the card's `url` in `resources.js` to its exact relative path, for example `url: "pdfs/Bottler_Buzz_Workflow_Worksheets_Landscape.pdf"`. Match capitalization. Use forward slashes in web URLs, including on Windows.
3. Keep `action: "download"` for a download link, or use `action: "view"` to open the PDF in a new tab.
4. Alternatively, set `url` to the actual `https://...` address of a hosted PDF. Make sure your intended audience has permission to access it.
5. Refresh, open each configured link, and confirm the right PDF is accessible. The site cannot verify that a configured file exists or that the audience has access.

If a worksheet PDF is removed, an empty URL keeps the control disabled and visibly labeled **PDF pending**. As URLs are added, real links replace the pending controls. The pending notice updates automatically.

The **Bottler Buzz Bonus Agent** card links directly to `pdfs/Bottler_Buzz_Bonus_Agent_Original_Format.pdf`. It does not use a personal SharePoint link or require an organization sign-in on the public site.

The browser decides whether to download or display a PDF. The HTML `download` hint can be ignored for cross-origin URLs and local files; server headers and browser settings also affect it. Use `action: "view"` when viewing a hosted PDF is more reliable. The site accepts relative filenames and HTTP(S) URLs, not JavaScript or other executable URL schemes.

GitHub file links are suitable for identifying the worksheets. For the configured PDF URL, use the actual **Raw/Download** link rather than the GitHub file-preview page. Verify it works for the intended audience; private repository links may require authentication. Do not put access tokens in the URL or site files.

## View or download any resource

Every resource has `action: "view"` or `action: "download"`, regardless of category:

- **View with `url`** opens the linked file or page in a new tab.
- **View with `content` and no URL** opens the copyable text dialog for prompts, agents, and skills.
- **Download with `url`** links to the real file using the browser's download hint. This works for skill files, agent instructions, and other formats as well as PDFs, subject to the same browser/cross-origin limitations above.
- **Missing file or content** leaves a clearly disabled pending action. A worksheet always needs its real PDF URL; inline text is not substituted for the user's fillable worksheet.

To add a skill or agent download, copy a resource object, set its `type`, `topic`, `action`, and actual file `url`, and keep `sample: true` or `false` accurate. No automatic installation is implied. A configured URL takes precedence over inline content.

For **Anti-AI Slop**, save the downloaded `SKILL.md` in an `anti-ai-slop` folder if your AI tool supports that skill-folder format, then follow that tool's installation instructions. Otherwise, attach the file or paste its instructions alongside a draft in an approved AI tool. The file includes usage guidance. A download does not install or activate the skill.

When opening the hub directly from disk, some browsers display the Markdown file instead of saving it. Use the browser's **Save as** command (Ctrl+S on Windows or Command+S on Mac) and keep the `SKILL.md` filename, or copy the existing file from the `skills/anti-ai-slop` folder.

### Additional supplied skills

These four resources appear under **Skills** in the broader library, each with a Download action:

| Skill | File | Topic |
| --- | --- | --- |
| Doublecheck | `skills/doublecheck/SKILL.md` | Reasoning |
| HR SWOT Analysis | `skills/hr-swot-analysis/SKILL.md` | HR Strategy |
| Talent & Leadership Storytelling Generator | `skills/talent-leadership-storytelling-generator/SKILL.md` | Communication |
| HR Executive Briefing Generator | `skills/hr-executive-briefing-generator/SKILL.md` | Leadership Briefings |

The supplied instructions are preserved. The two pasted skills have Markdown headings and YAML frontmatter added; the HR SWOT metadata name is normalized to lowercase to match its folder. Doublecheck is copied from its attachment without rewriting its instructions.

Save each `SKILL.md` in its own named folder to avoid overwriting the others. Follow your AI tool's skill installation guidance, or attach/paste the instructions when supported. These downloads do not install skills or grant access to data.

Doublecheck refers to specific search/retrieval tool names (`internet_search`, `tools.files.semanticSearch`, and `tools.files.read`). Map those names to supported equivalents in your environment before use; verification requires access to actual sources. The HR skills likewise require authorized source material. If source access is unavailable, the tool must identify the limitation rather than claim verification. No fact-checking or enterprise access runs on this website.

## Copy and keyboard behavior

View opens a native modal dialog with focus contained inside it. Escape or the Close button dismisses it and returns focus to the card. **Copy sample** uses the browser clipboard when permitted. If local-file restrictions or browser permissions block automatic copying, the text is selected with manual-copy instructions. **Select text** is always available, including for mobile copy menus.

## GitHub and hosting

- Repository: https://github.com/StephBrower/BottlerBuzz
- GitHub Pages: https://stephbrower.github.io/BottlerBuzz/
- Pages is configured to deploy from the `main` branch, root folder. Updates to that branch update the public site after the Pages build completes.
- Keep `.nojekyll` at the repository root so Pages serves the downloadable `SKILL.md` files unchanged rather than processing their Markdown frontmatter.

To update the site, upload or commit `.nojekyll`, `index.html`, `styles.css`, `resources.js`, `prompt-library.js`, `app.js`, the `skills` folder, and any approved PDFs, preserving their relative paths. Wait for the Pages deployment, then check combined search/type/app/topic filters, both resource sections, modal controls, and every resource link on desktop and mobile. The same files still work locally by opening `index.html`.

GitHub Pages is static hosting, not an access-control system. Confirm organization policy and the site's actual visibility before publishing internal material. Use only material authorized for that audience; private repository status alone does not guarantee a private Pages site. Do not upload sensitive information or credentials.

## Files

| File | Purpose |
| --- | --- |
| `.nojekyll` | Serve all files directly on GitHub Pages, including raw skill downloads |
| `pdfs/` | Four supplied PDF downloads and file replacement instructions |
| `index.html` | Semantic page and modal structure |
| `styles.css` | Original responsive light-theme design |
| `resources.js` | Editable content, sample instructions, and PDF URLs |
| `prompt-library.js` | Complete expanded prompt and agent library |
| `app.js` | Search, filters, cards, dialog, and clipboard behavior |
| `skills/anti-ai-slop/SKILL.md` | Downloadable editing skill and usage instructions |
| `README.md` | Local use, content configuration, and future hosting |
