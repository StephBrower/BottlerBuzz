---
name: doublecheck
description: |-
  Verifies factual claims in supplied or prior AI-generated text through claim extraction, source checks, and adversarial review. Produces a structured report with source links and flags possible hallucinations.

  Use when the user says:
  - "Doublecheck this response."
  - "Verify these claims."
  - "Run a full verification report."
  - "Fact-check this AI output."
  - "Turn on doublecheck."
---
# Doublecheck

## When to use

Use this skill to verify factual claims in supplied text or prior AI-generated output. It supports one-shot verification and an active mode that adds verification summaries to later substantive responses.

Use public web search only when the user explicitly asks to search the web, look online, verify, fact-check, or doublecheck. For organization-specific claims, retrieve and cite the relevant tenant sources first.

## Inputs

- Target text to verify, or a clear reference to prior output.
- Whether the user wants one-shot verification, a full report, or active mode.
- Any domain, jurisdiction, date range, or source constraints.

If no text is supplied and the user invokes Doublecheck, activate active mode. If text is supplied or the user asks for a full report, run the complete pipeline.

## Steps

### 1. Select the mode

- **Active mode:** If invoked without target text, respond: "**Doublecheck is now active.** I'll verify factual claims in my responses before presenting them. You'll see an inline verification summary after each substantive response. Say \"full report\" on any response to get the complete three-layer verification with detailed sourcing. Turn it off anytime by saying \"turn off doublecheck.\""
- **One-shot mode:** If target text is supplied or referenced, run the complete three-layer pipeline and return the full report.
- **Deactivate:** If the user says "turn off doublecheck" or similar, respond: "**Doublecheck is now off.** I'll respond normally without inline verification. You can reactivate it anytime."

### 2. Layer 1: Self-audit

Read the target text in full. Extract every verifiable claim and assign IDs `C1`, `C2`, and so on. Categorize each as factual, statistical, citation, entity, causal, or temporal.

Check extracted claims for internal contradictions, incompatible assumptions, or conflicting dates. Privately assess initial confidence and identify high-risk claims, especially precise statistics, exact dates, legal citations, statutory references, case names, CVEs, and version-specific technical claims.

### 3. Layer 2: Source verification

For each claim, search for authoritative evidence. For public claims, use `internet_search` with a targeted query. Prefer primary sources: official documentation, legislation, court records, regulatory filings, specifications, peer-reviewed publications, and official organizational sources. For tenant claims, use `tools.files.semanticSearch` to locate candidate sources, then `tools.files.read` to verify the source content.

For citations, search the exact title, case name, standard, or section number and confirm that the cited source supports the claim. Retry once with a reformulated query if the first search is not relevant. Record supporting or contradicting sources and clearly label source type when it is secondary.

If public web search isn't authorized by the user's request, say what couldn't be verified rather than presenting unsupported web findings.

### 4. Layer 3: Adversarial review

Assume the target contains errors. Test each major claim for:

1. Fabricated citations
2. Precise numbers without identifiable sources
3. Confident specificity on uncertain or disputed topics
4. Plausible-but-wrong associations
5. Temporal confusion or outdated information
6. Overgeneralization across jurisdiction, context, or period
7. Missing qualifiers, exceptions, or counterarguments

Ask what would make each claim wrong, whether a subject-matter expert would object to its wording, and whether the claim could be outdated. Flag unfindable citations, unsupported statistics, conflicts with authoritative sources, and high-confidence claims that are actually uncertain.

### 5. Apply domain-specific scrutiny

- **Legal:** Verify case names, citations, statutory language, regulatory interpretation, holdings, jurisdiction, and exceptions. State that the result isn't legal advice.
- **Medical and scientific:** Verify study existence, accurate result descriptions, current guidelines, dosages, protocols, and diagnostic criteria. State that the result isn't medical advice.
- **Financial and regulatory:** Verify amounts, dates, thresholds, jurisdiction, and current rules.
- **Technical and security:** Verify CVE numbers, affected versions, vulnerability descriptions, API specifications, and current configuration guidance.

### 6. Rate claims

Use these ratings:

- **VERIFIED:** A supporting source was found and linked.
- **PLAUSIBLE:** Consistent with general knowledge but without a specific confirming source.
- **UNVERIFIED:** No supporting or contradicting evidence was found.
- **DISPUTED:** Credible evidence contradicts the claim.
- **FABRICATION RISK:** The claim matches a hallucination pattern, such as an unfindable citation or unsourced precise statistic.

Do not treat lack of evidence as proof that a claim is false. For contradictions, present the claim and source evidence without declaring a final verdict.

### 7. Return the result

For full reports, use the output format below. Lead with flagged `DISPUTED` and `FABRICATION RISK` items. Always include source links or identify when a source couldn't be checked.

In active mode, first classify the response:

- High-stakes legal, regulatory, compliance, statutory, or case-citation content: always provide a full report.
- Document, research, or data summaries: provide inline verification for key claims.
- Code, creative writing, brainstorming, casual conversation, clarifying questions, and status updates: skip verification. For code or creative work, briefly note that Doublecheck doesn't apply when useful.

For inline verification, use:

---
**Verification (N claims checked)**

- [VERIFIED] "Claim text" — Source: [URL]
- [PLAUSIBLE] "Claim text" — no specific source found

_Say "full report" for detailed three-layer verification with sources._

If any claim is `DISPUTED` or `FABRICATION RISK`, don't use inline verification. Put this callout at the top, then return the full report:

**Heads up:** I'm not confident about [specific claim]. I couldn't find a supporting source or found contradictory evidence. You should verify this independently before relying on it.

If a retrieval or search tool fails or returns no results, say so plainly. Never invent a source, citation, search result, or verification outcome.

## Output format

# Verification Report

## Summary

**Text verified:** [brief description]

**Claims extracted:** [N total]

| Rating | Count |
|---|---:|
| VERIFIED | [N] |
| PLAUSIBLE | [N] |
| UNVERIFIED | [N] |
| DISPUTED | [N] |
| FABRICATION RISK | [N] |

**Items requiring attention:** [N items rated DISPUTED or FABRICATION RISK]

## Flagged items (review these first)

For each disputed or fabrication-risk claim:

### [C#] — [brief description]

- **Claim:** [specific assertion]
- **Rating:** [DISPUTED or FABRICATION RISK]
- **Finding:** [what is wrong, missing, or suspicious]
- **Source:** [URL or source unavailable]
- **Recommendation:** [specific next action]

## All claims

### VERIFIED

For each claim:
- **[C#] — [brief description]**
  - **Claim:** [assertion]
  - **Source:** [URL]
  - **Notes:** [relevant source context]

### PLAUSIBLE

For each claim:
- **[C#] — [brief description]**
  - **Claim:** [assertion]
  - **Notes:** [why plausible rather than verified]

### UNVERIFIED

For each claim:
- **[C#] — [brief description]**
  - **Claim:** [assertion]
  - **Notes:** [what was searched and why evidence wasn't found]

### DISPUTED

For each claim:
- **[C#] — [brief description]**
  - **Claim:** [assertion]
  - **Contradicting source:** [URL]
  - **Details:** [source evidence versus claim]

### FABRICATION RISK

For each claim:
- **[C#] — [brief description]**
  - **Claim:** [assertion]
  - **Pattern:** [hallucination pattern]
  - **Details:** [why flagged]

## Internal consistency

[List contradictions, or state: "No internal contradictions detected."]

## What was not checked

[List paywalled material, inaccessible databases, unfalsifiable claims, insufficiently specific claims, and other limits.]

## Limitations

- This tool accelerates human verification; it doesn't replace it.
- Search results may not include the most recent information or paywalled sources.
- The adversarial review uses the same underlying model that may have produced the original output. It catches many issues but can't catch all of them.
- A claim rated VERIFIED means a supporting source was found, not that the claim is definitely correct. Sources can be wrong too.
- Claims rated PLAUSIBLE may still be wrong. The absence of contradicting evidence isn't proof of accuracy.