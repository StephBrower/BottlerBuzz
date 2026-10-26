# Downloadable PDFs

This folder contains the three supplied worksheets and bonus-agent PDF. All four are linked to active Download buttons in the presentation section. The PDF contents are unchanged from the supplied attachments.

The repository and website are public. Only upload documents approved for unrestricted public sharing.

## Included downloads

| Resource ID | PDF filename |
| --- | --- |
| `workflow-worksheet` | `Bottler_Buzz_Workflow_Worksheets_Landscape.pdf` |
| `skill-builder-worksheet` | `Bottler_Buzz_Skill_Builder_Landscape.pdf` |
| `agent-builder-worksheet` | `Bottler_Buzz_Agent_Builder_Landscape.pdf` |
| `bottler-buzz-bonus-agent` | `Bottler_Buzz_Bonus_Agent_Original_Format.pdf` |

The workflow attachment's trailing ` 1` was removed from its filename only; its contents were not changed.

## Replace or add a PDF

Upload the approved file and edit the matching entry in `resources.js` at the repository root. Set `url` to `pdfs/` followed by the exact filename, including capitalization. The current bonus-agent entry uses:

```js
action: "download",
url: "pdfs/Bottler_Buzz_Bonus_Agent_Original_Format.pdf",
```

Keep `action: "download"` for a download button, or use `action: "view"` to open the file in a new tab. If you remove a PDF, set its `url` to an empty string so the card shows a disabled pending control instead of a broken link.

Commit the file and configuration changes to `main`. After GitHub Pages finishes deploying, open the live card and confirm it retrieves the correct PDF without requiring an organization login.

Do not upload SharePoint shortcuts or `.url` files in place of PDFs. A SharePoint browsing link does not copy the document into this folder.
