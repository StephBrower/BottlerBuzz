---
name: hr-swot-analysis
description: |-
  Creates evidence-based SWOT analyses for HR functions, workforce challenges, people programs, and business units. Distinguishes evidence from observations and hypotheses, then prioritizes practical HR actions.

  Use when the user says:
  - "Create an HR SWOT analysis for our team."
  - "Turn this turnover and engagement data into a people strategy SWOT."
  - "Review and improve this workforce SWOT."
  - "What are the HR strengths, weaknesses, opportunities, and threats for this facility?"
---
# HR SWOT Analysis

## Purpose

Convert available HR and business context into a concise, evidence-based SWOT analysis and a prioritized action plan that connects people implications to business outcomes.

The output must be specific enough for leadership review and practical enough to guide HR priorities. Do not produce a generic list of HR themes.

## Core classification rules

Classify each point based on both control and current state:

- **Strengths:** Current internal capabilities, resources, practices, results, or advantages that are working well.
- **Weaknesses:** Current internal gaps, constraints, inconsistencies, capability issues, or practices the organization can influence directly.
- **Opportunities:** External developments or realistic future possibilities the organization could use to improve results. A proposed internal action is not automatically an opportunity.
- **Threats:** External forces, conditions, market dynamics, regulatory pressures, labor conditions, or competitive risks that can negatively affect outcomes.

Apply these checks before finalizing:

1. If the organization causes or controls it, classify it as a strength or weakness.
2. If it primarily happens outside the organization, classify it as an opportunity or threat.
3. If it is merely an action idea, move it to the action plan rather than forcing it into the SWOT.
4. If a point contains multiple ideas, split it into separate points.
5. Avoid placing the same issue in more than one quadrant unless the wording clearly identifies different dimensions.

## Evidence and accuracy requirements

- Use only information supplied by the user or retrieved from approved sources available to the agent.
- Never invent metrics, employee sentiment, competitor practices, root causes, legal conclusions, or organizational facts.
- Distinguish among:
  - **Evidence:** Directly supported by data or source material.
  - **Reported observation:** Attributed to stakeholder input but not independently validated.
  - **Hypothesis:** A possible interpretation that requires validation.
- When evidence is incomplete, label the gap and continue with the best supported analysis. Do not stop the workflow to ask broad questions.
- If quantitative data is provided, retain the exact measures, populations, and time periods stated.
- Treat small samples, inconsistent definitions, and mixed reporting periods as limitations.
- Do not infer an employee's emotions, intent, performance, potential, or protected characteristics.
- Do not make employment, selection, promotion, compensation, disciplinary, or termination decisions.
- Do not present legal guidance. Flag matters requiring HR, Legal, Labor Relations, Privacy, or Compliance review.

## Priority evidence to use

When available, consider:

- Business goals, operating priorities, and workforce requirements
- Headcount, vacancy, time-to-fill, hiring funnel, and quality indicators
- Turnover, retention, tenure, termination, and exit information
- Engagement surveys, listening data, employee feedback, and recognition
- Leadership capability, succession, development, and frontline leader practices
- Performance management and employee relations themes
- Compensation, benefits, wellbeing, scheduling, and work design
- Safety, labor relations, union environment, compliance, and regulatory change
- HR service delivery, systems, data quality, process efficiency, and role clarity
- External labor market, competition, demographic, economic, technology, and industry trends

## Workflow

### 1. Establish the scope

Identify from the request:

- Subject of the SWOT
- Business unit, team, facility, population, program, or geography
- Business outcome or decision the SWOT should support
- Time period represented by the evidence
- Intended audience and desired level of detail

If scope is missing, state a narrow working assumption and proceed. Do not expand an HR-specific request into an enterprise-wide assessment without evidence.

### 2. Build an evidence inventory

Organize the available information into:

- Business context
- Workforce outcomes
- Employee experience
- Leadership and capability
- HR operations and technology
- External environment
- Data gaps or limitations

Separate facts from interpretations. Consolidate duplicate evidence.

### 3. Draft the SWOT

Create no more than five high-value points per quadrant unless the user requests a comprehensive analysis.

Each point should contain:

- A bold, concise theme
- One sentence explaining the evidence or observed condition
- The business or workforce implication

Prefer specific statements such as:

- **Frontline leader capability is inconsistent:** Engagement comments and employee relations themes indicate uneven communication and coaching practices, increasing retention and change-adoption risk.

Avoid generic statements such as:

- Leadership needs improvement.
- Technology is changing.
- Employee engagement is an opportunity.

### 4. Run a classification challenge

For every point, test:

- Is this internal or external?
- Is this current or prospective?
- Is this evidence, observation, or hypothesis?
- Does it describe a condition rather than an action?
- Is the implication clear?
- Is it materially different from the other points?

Reclassify or remove weak points.

### 5. Synthesize strategic implications

Identify three to five implications that emerge across quadrants. Look for:

- Strengths that can be used to capture opportunities
- Strengths that can reduce threats
- Weaknesses that block opportunities
- Weaknesses that increase exposure to threats

Do not simply repeat the quadrants. Explain what the combined pattern means for HR and the business.

### 6. Prioritize actions

Recommend three to five focus areas. Prioritize using:

- Business impact
- Workforce impact
- Urgency
- Level of organizational control
- Evidence strength
- Effort or dependency

For each focus area include:

- **Priority**
- **Why it matters**
- **Recommended action**
- **Suggested owner:** Use a role or function unless a named owner is explicitly provided
- **Timing:** Immediate, near term, or longer term unless exact dates are provided
- **Success measure:** Use a measurable indicator without inventing a target

### 7. Identify validation needs

List the most important unanswered questions or analyses needed to validate the SWOT. Examples include segmenting turnover, comparing engagement themes by population, validating process ownership, or obtaining external labor-market information.

## Required output format

Use the following structure unless the user requests another format:

# HR SWOT Analysis: [Scope]

## Executive takeaway
Write two to four sentences explaining the most important pattern, business relevance, and recommended direction.

## SWOT

### Strengths
1. **Theme:** Evidence-based explanation and implication.

### Weaknesses
1. **Theme:** Evidence-based explanation and implication.

### Opportunities
1. **Theme:** Evidence-based explanation and implication.

### Threats
1. **Theme:** Evidence-based explanation and implication.

## Strategic implications
- **Implication:** Explanation connecting multiple SWOT findings.

## Recommended priorities

| Priority | Why it matters | Recommended action | Suggested owner | Timing | Success measure |
|---|---|---|---|---|---|

## Data gaps and validation needs
- Gap or question and why it matters.

## Source and confidence note
Briefly state what information the analysis used, what was not available, and where conclusions are provisional.

## Style requirements

- Write for HR and business leaders.
- Be concise, direct, neutral, and specific.
- Connect people issues to operational or business impact.
- Use plain language and avoid HR jargon when possible.
- Surface uncomfortable findings without exaggeration.
- Do not overfill each quadrant to make it appear balanced.
- Do not treat every HR program as a strength.
- Do not recommend a program without explaining the problem it addresses.
- Do not use fabricated benchmarks or targets.

## Review mode

When the user gives an existing SWOT to review:

1. Preserve valid source-supported content.
2. Flag likely misclassified items.
3. Remove duplicates and action statements from the quadrants.
4. Rewrite vague points into condition, evidence, and implication.
5. Highlight unsupported claims and missing evidence.
6. Return the corrected SWOT and prioritized action plan.

## Facilitation mode

When the user wants questions for an HR SWOT workshop, organize prompts by quadrant and category. Include questions covering business strategy, talent attraction, retention, engagement, leadership, development, performance, compensation, wellbeing, labor, compliance, HR operations, systems, and workforce trends. End with prioritization questions that force the group to select the few issues with the greatest business impact.