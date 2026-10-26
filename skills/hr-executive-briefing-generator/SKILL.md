---
name: hr-executive-briefing-generator
description: Converts meetings, emails, chats, files, notes, and project updates into concise HR executive briefings with priorities, risks, decisions, owners, and next steps. Use for leadership preparation, weekly updates, project status, meeting prep, and meeting recap.
---

# HR Executive Briefing Generator

## Purpose

Turn complex or scattered HR information into a concise, decision-ready briefing for senior leaders.

## Trigger When

Use this skill when the user asks to:

- Create an executive brief, leadership update, one-page summary, or talking points
- Prepare for or recap a meeting
- Summarize emails, chats, files, notes, transcripts, or project activity for leadership
- Identify priorities, decisions, risks, owners, deadlines, or next steps
- Make an update “MVR-ready,” executive-ready, or easier to present

## Inputs

Use authorized sources such as:

- Meeting transcripts and notes
- Emails and Teams messages
- Project plans and status files
- Dashboards or reports
- User-provided context

Search the appropriate enterprise sources when needed. Preserve the user's time range, project name, participants, and other constraints exactly.

## Briefing Principles

- Lead with what matters now
- Separate facts from interpretation
- Make decisions and actions unmistakable
- Prioritize business impact over activity lists
- Surface gaps and risks directly
- Use plain language
- Keep the default output to one screen when possible

## Workflow

1. Establish the briefing purpose and audience from the request.
2. Gather relevant authorized source material.
3. Extract only explicitly supported:
   - Current status
   - Material developments
   - Decisions made
   - Open decisions
   - Risks, blockers, and dependencies
   - Actions, owners, and dates
   - Leadership implications
4. Deduplicate repeated updates.
5. Rank items by urgency and business impact, not source order.
6. Distinguish:
   - Confirmed
   - Proposed
   - Pending
   - At risk
   - Unknown or not specified
7. Draft the executive brief.
8. Verify every date, owner, status, and decision against the source.

## Default Output

### Executive Brief

#### Bottom Line

Two to four sentences covering the current state, why it matters, and the most important next move.

#### Top Priorities

1. [Priority]: [Concise status and next action]
2. [Priority]: [Concise status and next action]
3. [Priority]: [Concise status and next action]

#### Decisions Needed

- Decision: [Specific choice]
  - Why now: [Business reason or deadline]
  - Recommendation: [Recommendation clearly labeled as such]

If no decision is supported by the source, state: No leadership decision identified.

#### Risks / Watchouts

- [Risk]: [Evidence, impact, and mitigation if documented]

If none are identified, state: No material risks identified in the available information.

#### Actions

- Owner | Action | Due date | Status

Use “Owner not specified” or “Due date not specified” rather than guessing.

#### Leadership Talking Points

- Three to five concise statements that can be used verbatim.

## Optional Formats

Choose a different format when the request calls for it.

### Meeting Prep

- Meeting objective
- What changed since the last discussion
- Decisions to drive
- Questions to ask
- Recommended position
- Related materials

### Meeting Recap

- Outcome
- Decisions made
- Key discussion points
- Action items
- Open questions
- Follow-up communication

### Weekly Portfolio Update

- On track
- Needs attention
- At risk
- Decisions needed
- Next seven days

### Ultra-Short Leadership Update

- Status:
- Risk:
- Decision:
- Next step:

## Recommendation Rules

Recommendations must:

- Be labeled as recommendations
- Follow logically from supported facts
- Explain the tradeoff in one sentence when useful
- Never be presented as an approved decision

## Source and Accuracy Guardrails

- Cite enterprise sources when citations are available.
- Never invent owners, deadlines, attendance, decisions, metrics, or causal explanations.
- An invitation does not prove attendance.
- A related file or chat is not automatically a meeting decision.
- State exactly where information came from when multiple source types are used.
- If sources conflict, show the conflict and identify what needs confirmation.
- Do not infer employee performance, potential, commitment, attitude, or emotion.
- Do not expose sensitive HR or personal information unless necessary and authorized for the request.

## Quality Check

Before returning the briefing, verify:

- The bottom line is clear without reading the details
- Decisions are separated from actions
- Owners and dates are source-supported
- Risks include actual evidence
- Recommendations are labeled
- Repetition and low-value activity are removed
- The output is concise enough for a leader to scan quickly
