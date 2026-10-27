---
name: apple-deck-design
description: Apple's design principles applied to slide decks in Keynote, PowerPoint, and Google Slides. Use when you build or review a deck: slide layout, hierarchy, typography (tracking, leading, weight), color and translucent panels, builds and transitions, motion accessibility, and the design foundations (purpose, simplicity, consistency, craft) behind Apple-style presentations.
---

# Apple Deck Design

## Initial Response

When this skill is first invoked without a specific question, respond only with:

> I'm ready to help you design Apple-style decks in Keynote, PowerPoint, or Google Slides. My knowledge comes from Apple's WWDC design talks, applied to slides.

Do not provide any other information until the user asks a question.

This skill uses Apple's WWDC design talks (*Designing Fluid Interfaces*, 2018; *The Details of UI Typography*, 2020; *Principles of Great Design*, 2026) and applies them to slide decks.

The main rule: every element on a slide has a purpose, a clear rank in the hierarchy, and a consistent position. Motion shows where content comes from and where it goes. If a build or transition does not help the audience understand, remove it.

## 1. Design foundations

Use these principles to make and explain decisions.

1. **Purpose.** Decide what each slide must do before you design it. Decide what not to include. Each slide asks for the audience's attention. Use that attention only where it helps the message.
2. **Simplicity, not minimalism.** Remove what is not necessary so the main point is clear. A slide that hides important context looks minimal but is not simple. Sometimes added context makes a slide simpler, for example a label on a chart line instead of a separate legend. Show the main point first. Put detail in the appendix or in speaker notes.
3. **Clarity through hierarchy.** Use order, size, weight, spacing, and contrast so the most important item is the most visible item. Use one main point per slide.
4. **Familiarity and consistency.** Elements that look the same must behave the same and appear in the same place. Keep titles, page numbers, logos, and section markers in fixed positions on the master slides. Use visual conventions the audience already knows. Break a convention only if you can show that the new way is better, and test it.
5. **Flexibility.** Design for the room and the screen. Text must be readable from the back of the room, on a laptop screen, on a video call, and in a shared PDF. Projectors reduce contrast, so check contrast on the real equipment. Design for the full range of abilities: do not use color as the only signal.
6. **Craft.** Every spacing, alignment, and timing value is a deliberate choice that you can explain. Use a grid. Align objects precisely. Misaligned objects, inconsistent margins, and mixed font styles look careless and reduce trust.
7. **Delight.** Delight is the result of the other six principles. It is not decoration that you add at the end. Decide the emotion you want the audience to feel (calm, confident, excited) and support it in every decision.

Tactical rules that support these principles:

- **Wayfinding.** The audience must always know: Where are we? What comes next? How much is left? Use agenda slides, section dividers, and a consistent section or progress marker.
- **Grouping and mapping.** Proximity shows a relationship. Put a label next to the item it describes. Arrange items in the same order as the process or data they show. If a chart needs a long explanation, its mapping is weak.
- **Specific titles.** Write slide titles that state the point ("Costs fell 20% after launch"), not a general topic ("Costs"). Specific titles help the audience predict what the slide shows.

## 2. Typography

- **Tracking changes with size.** Never use one character spacing value for all sizes. Large display text needs negative tracking, because letters look too far apart as they get larger. Small text needs zero or slightly positive tracking.
  - Keynote: Character Spacing is in percent. Start at about -2% for large titles.
  - PowerPoint: Character Spacing is in points. -2% of the font size is a good start (for a 60 pt title, about -1.2 pt).
  - Google Slides has no tracking control. Choose a font with good default spacing at large sizes.
- **Leading changes inversely with size.** Use tight line spacing on large titles (about 1.05 lines) and looser line spacing on body text (about 1.3 to 1.5 lines). Increase it for scripts with tall ascenders and descenders. Decrease it for dense tables and data slides.
- **Build hierarchy with weight, size, and leading together,** not with size only. Use weight for emphasis. It makes text more visible without using more space.
- **Use one minimum body size for the whole deck.** If text does not fit at that size, cut text or split the slide.
- **Default to a system font before a custom font.** System fonts have tuned spacing and legibility. Use a custom font only for a clear reason, such as brand rules. If the deck moves between Mac and Windows, or between apps, use a font that all systems have, or embed the font, so the layout does not change.

## 3. Color, panels, and depth

- **Use translucent panels to put text over images.** The panel keeps the image visible and gives the text a stable background. Use a shape with a semi-transparent fill. For a frosted look, put a blurred copy of the image behind the text area and crop it to the panel shape.
- **Panel weight shows hierarchy.** Darker, heavier panels separate structural areas (sidebars, section bands). Lighter panels bring attention to key items.
- **Do not put a light translucent panel on another light translucent panel.** The text becomes hard to read.
- **Larger panels look thicker.** Give large panels more blur and a deeper shadow than small labels. Use more shadow over busy images and less shadow over plain backgrounds.
- **Make text on translucent panels easy to read.** Use high contrast, a slightly heavier weight, and a small increase in tracking. Do not use flat gray text. Put strong color on solid shapes, not on translucent layers.
- **Dim to focus.** To focus on one item, dim the other items (lower opacity or gray) and keep the focus item at full contrast. When a callout must hold all attention, put a dark overlay behind it.

## 4. Builds and transitions

- **Spatial consistency.** Content leaves the same way it came in. If a panel moves in from the right, it leaves to the right. Content that enters from the right and leaves from the bottom confuses the audience.
- **Anchor motion to its source.** A detail callout grows from the item it describes, not from the center of the slide. A zoomed view starts from the area it enlarges.
- **Continuity between slides.** When the same object appears on two slides, use Magic Move (Keynote) or Morph (PowerPoint). The audience then sees one object change, not two different objects. Keep the object the same on both slides so the app can match it.
- **Show the direction.** Motion during a build must show where the content is going. A chart bar grows in the direction of its value. Process steps appear in reading order.
- **Mirror the easing.** When a build reverses an earlier build, use the opposite direction and the same timing, so the return path matches the first path.
- **Default to smooth motion with no bounce** (ease in-out, short duration). Use bounce or elastic effects only when the object must look physically thrown or dropped. A title that bounces looks wrong.
- **Utility.** Use builds only when they help understanding: to reveal steps in order, to show change, or to direct attention. Too many effects teach the audience to ignore all of them. Use one or two transition types for the whole deck.

## 5. Motion accessibility

The audience cannot set a reduced-motion preference for your deck, so design for it.

- **Prepare a low-motion version** for recordings, shared files, and audiences that are sensitive to motion. Replace moves, zooms, and slides with short cross-fades (Dissolve in Keynote, Fade in PowerPoint and Google Slides). Keep opacity and color changes that help comprehension.
- **Do not use full-slide moving backgrounds.**
- **Do not use slow looping motion** near one cycle every 5 seconds (0.2 Hz).
- **Do not jump suddenly between very dark and very bright slides.** Use a fade, or keep one consistent background.
- **Make large objects semi-transparent while they move,** or fade them out before a large move and fade them in after.
- **For high-contrast needs,** put text on near-solid backgrounds and give panels a clear border where they meet an image. When text is on a translucent panel, make the panel more opaque.

## 6. Process

- **Make a rough working version early.** Click through the real deck with builds on. A working draft shows problems that static mockups do not show, and it sets a quality standard for the final version.
- **Design motion and visuals together.** Plan builds when you plan the layout, not after.
- **Rehearse with real people in the real context** (room, screen, video call). Watch the builds again later with fresh eyes. Step through them slowly to find problems you cannot see at full speed.

## Quick reference

| Need | Technique | Value |
| --- | --- | --- |
| Large title tracking | Negative character spacing | About -2% (Keynote); about -1.2 pt at 60 pt (PowerPoint) |
| Body tracking | Zero or slightly positive | 0, slightly positive for small text |
| Title leading | Tight | About 1.05 lines |
| Body leading | Comfortable | About 1.3 to 1.5 lines |
| Emphasis | Weight, not only size | Heavier weight |
| Text over images | Translucent or frosted panel | High-contrast text, slightly heavier |
| Focus on one item | Dim the other items | Lower opacity on other items |
| Same object on two slides | Magic Move or Morph | Same object on both slides |
| Enter and exit | Same path | In from right, out to right |
| Callouts | Grow from their source | Origin at the item |
| Default motion | Smooth, no bounce | Ease in-out, short |
| Bounce | Only for physical motion | Thrown or dropped objects |
| Low-motion version | Cross-fade | Dissolve or Fade |
| Slide titles | State the point | "Costs fell 20%", not "Costs" |