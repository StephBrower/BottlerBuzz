# Downloadable PDFs

Upload the approved worksheet and bonus-agent PDFs into this folder. No PDFs have been supplied yet; the site's four PDF download controls remain disabled until their files are added and linked.

The repository and website are public. Only upload documents approved for unrestricted public sharing.

## Link a PDF to its card

After uploading a file, edit its entry in `resources.js` at the repository root:

| Resource ID | Intended PDF |
| --- | --- |
| `workflow-worksheet` | Workflow worksheet |
| `skill-builder-worksheet` | Skill Builder Worksheet |
| `agent-builder-worksheet` | Bottler Buzz Agent Builder Worksheet |
| `bottler-buzz-bonus-agent` | Bottler Buzz Bonus Agent guide |

Replace the entry's empty `url` with `pdfs/` followed by the exact uploaded filename, including capitalization. For example, if you upload `Bottler_Buzz_Bonus_Agent_Original_Format.pdf`, use:

```js
action: "download",
url: "pdfs/Bottler_Buzz_Bonus_Agent_Original_Format.pdf",
```

That filename is an example, not a file currently included here. Keep `action: "download"` for a download button, or use `action: "view"` to open the file in a new tab.

Commit the file and configuration changes to `main`. After GitHub Pages finishes deploying, open the live card and confirm it retrieves the correct PDF without requiring an organization login.

Do not upload SharePoint shortcuts or `.url` files in place of PDFs. A SharePoint browsing link does not copy the document into this folder.
