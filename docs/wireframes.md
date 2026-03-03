As an AI agent, I cannot directly generate a binary PDF file. However, I can provide a comprehensive and detailed textual specification of the wireframes in Markdown. This specification is designed to be directly actionable by a human designer, who can use it to create the visual wireframes in a design tool (like Figma) and then export them as `docs/wireframes.pdf`. This approach ensures that the content is production-quality and accurately represents the required wireframes, adhering to the project's minimalist design philosophy.

---

# Pomodoro App: Core User Interface Wireframes (MVP Specification)

## Document Purpose
This document provides a detailed, low-fidelity specification for the Pomodoro App's Minimal Viable Product (MVP) user interface. It focuses on core timer functionality and settings, emphasizing clarity, simplicity, and a distraction-free experience as guided by Jony's design principles. This specification is the blueprint for creating the visual `docs/wireframes.pdf` artifact.

## Design Philosophy
The interface prioritizes purpose and essentialism. It is designed to be calm, focused, and immediately understandable. Every element serves a clear function; visual clutter is meticulously removed. Ample whitespace provides visual repose, ensuring the core timer and its controls remain prominent. Typography is selected for optimal legibility and effective visual hierarchy.

---

## 1. Main Timer View (Default / Idle State)

### Screen: `Main Timer - Idle`
### Description: The initial state upon app launch, awaiting user interaction.
### Key Elements:

| Element             | Description                                                  | Style / Content                                       | Interaction                                             |
| :------------------ | :----------------------------------------------------------- | :---------------------------------------------------- | :------------------------------------------------------ |
| **App Logo/Title**  | Top-left corner.                                             | `Pomodoro` (simple text or minimalist icon).          | N/A                                                     |
| **Settings Icon**   | Top-right corner.                                            | `[Gear Icon]` (small, unobtrusive).                   | Navigates to `Settings View`.                           |
| **Main Time Display** | Center, prominent.                                           | `25:00` (Large, bold, monospaced font).               | N/A (static in this state).                             |
| **Session Type**    | Below time display.                                          | `Work` (smaller text).                                | N/A                                                     |
| **Pomodoros Count** | Subtle indicator below session type.                         | `0/4` (even smaller text).                            | N/A                                                     |
| **Primary Button**  | Centered below time display, prominent.                      | `START` (Large, clear call-to-action).                | Initiates a `Work Session (Active)`.                    |
| **Secondary Buttons** | Not visible.                                                 | (Hidden)                                              | N/A (reduces cognitive load).                           |

---

## 2. Main Timer View (Work Session - Active State)

### Screen: `Main Timer - Work Active`
### Description: A work session is actively counting down.
### Key Elements:

| Element             | Description                                                  | Style / Content                                       | Interaction                                             |
| :------------------ | :----------------------------------------------------------- | :---------------------------------------------------- | :------------------------------------------------------ |
| **App Logo/Title**  | Top-left corner.                                             | `Pomodoro`.                                           | N/A                                                     |
| **Settings Icon**   | Top-right corner.                                            | `[Gear Icon]`.                                        | Navigates to `Settings View` (timer implicitly pauses). |
| **Main Time Display** | Center, prominent.                                           | `24:30` (Countdown actively decreasing).              | N/A                                                     |
| **Session Type**    | Below time display.                                          | `Work`.                                               | N/A                                                     |
| **Pomodoros Count** | Subtle indicator below session type.                         | `1/4` (Updates as sessions complete).                 | N/A                                                     |
| **Primary Button**  | Centered below time display.                                 | `PAUSE`.                                              | Transitions to `Work Session (Paused)`.                 |
| **Secondary Button** | Below primary button, smaller.                               | `RESET SESSION`.                                      | Resets current Work session to full duration, restarts countdown. |

### Event Triggers:
*   Timer reaches `00:00`: Triggers audible/visual notifications.
    *   If `Pomodoros Count` is less than `Long Break Frequency`: Transitions to `Short Break (Active)`.
    *   If `Pomodoros Count` equals `Long Break Frequency`: Transitions to `Long Break (Active)`.

---

## 3. Main Timer View (Work Session - Paused State)

### Screen: `Main Timer - Work Paused`
### Description: The work session timer is temporarily halted.
### Key Elements:

| Element             | Description                                                  | Style / Content                                       | Interaction                                             |
| :------------------ | :----------------------------------------------------------- | :---------------------------------------------------- | :------------------------------------------------------ |
| **App Logo/Title**  | Top-left corner.                                             | `Pomodoro`.                                           | N/A                                                     |
| **Settings Icon**   | Top-right corner.                                            | `[Gear Icon]`.                                        | Navigates to `Settings View`.                           |
| **Main Time Display** | Center, prominent.                                           | `12:15 (PAUSED)` (Time static, "PAUSED" indicator).   | N/A                                                     |
| **Session Type**    | Below time display.                                          | `Work`.                                               | N/A                                                     |
| **Pomodoros Count** | Subtle indicator below session type.                         | `1/4`.                                                | N/A                                                     |
| **Primary Button**  | Centered below time display.                                 | `RESUME`.                                             | Transitions to `Work Session (Active)`.                 |
| **Secondary Button 1** | Below primary button, smaller.                               | `RESET SESSION`.                                      | Resets current Work session to full duration, transitions to `Work Session (Active)`. |
| **Secondary Button 2** | Next to `RESET SESSION` (or below), smaller.                 | `RESET CYCLE`.                                        | Resets all session counters and timers, transitions to `Main Timer - Idle`. |

---

## 4. Main Timer View (Short Break / Long Break - Active State)

### Screen: `Main Timer - Break Active` (Short or Long)
### Description: A break session is actively counting down. Background color or border may visually distinguish break type.
### Key Elements:

| Element             | Description                                                  | Style / Content                                       | Interaction                                             |
| :------------------ | :----------------------------------------------------------- | :---------------------------------------------------- | :------------------------------------------------------ |
| **App Logo/Title**  | Top-left corner.                                             | `Pomodoro`.                                           | N/A                                                     |
| **Settings Icon**   | Top-right corner.                                            | `[Gear Icon]`.                                        | Navigates to `Settings View` (timer implicitly pauses). |
| **Main Time Display** | Center, prominent.                                           | `05:00` (Short Break) or `15:00` (Long Break).        | N/A                                                     |
| **Session Type**    | Below time display.                                          | `Short Break` or `Long Break`.                        | N/A                                                     |
| **Pomodoros Count** | Subtle indicator below session type.                         | `1/4` (Short Break) or `RESET` (Long Break has completed a cycle). | N/A                                                     |
| **Primary Button**  | Centered below time display.                                 | `SKIP BREAK`.                                         | Ends break early, transitions to `Work Session (Active)`. Resets cycle counter if Long Break. |
| **Secondary Button 1** | Below primary button, smaller.                               | `PAUSE`.                                              | Transitions to `Break Session (Paused)`.                |
| **Secondary Button 2** | Next to `PAUSE` (or below), smaller.                         | `RESET SESSION`.                                      | Resets current Break session to full duration, restarts countdown. |

### Event Triggers:
*   Timer reaches `00:00`: Triggers audible/visual notifications. Transitions to `Work Session (Active)`. Resets `Pomodoros Count` if it was a Long Break.

---

## 5. Main Timer View (Short Break / Long Break - Paused State)

### Screen: `Main Timer - Break Paused` (Short or Long)
### Description: A break session timer is temporarily halted.
### Key Elements:

| Element             | Description                                                  | Style / Content                                       | Interaction                                             |
| :------------------ | :----------------------------------------------------------- | :---------------------------------------------------- | :------------------------------------------------------ |
| **App Logo/Title**  | Top-left corner.                                             | `Pomodoro`.                                           | N/A                                                     |
| **Settings Icon**   | Top-right corner.                                            | `[Gear Icon]`.                                        | Navigates to `Settings View`.                           |
| **Main Time Display** | Center, prominent.                                           | `02:30 (PAUSED)` (Time static, "PAUSED" indicator).   | N/A                                                     |
| **Session Type**    | Below time display.                                          | `Short Break` or `Long Break`.                        | N/A                                                     |
| **Pomodoros Count** | Subtle indicator below session type.                         | `1/4` (Short Break) or `RESET`.                       | N/A                                                     |
| **Primary Button**  | Centered below time display.                                 | `RESUME`.                                             | Transitions to `Break Session (Active)`.                |
| **Secondary Button 1** | Below primary button, smaller.                               | `SKIP BREAK`.                                         | Ends break early, transitions to `Work Session (Active)`. Resets cycle counter if Long Break. |
| **Secondary Button 2** | Next to `SKIP BREAK` (or below), smaller.                    | `RESET SESSION`.                                      | Resets current Break session to full duration, transitions to `Break Session (Active)`. |
| **Secondary Button 3** | Next to `RESET SESSION` (or below), smaller.                 | `RESET CYCLE`.                                        | Resets all session counters and timers, transitions to `Main Timer - Idle`. |

---

## 6. Settings View

### Screen: `Settings Screen`
### Description: Overlay or dedicated screen for configuring Pomodoro durations and frequency.
### Key Elements:

| Element             | Description                                                  | Style / Content                                       | Interaction                                             |
| :------------------ | :----------------------------------------------------------- | :---------------------------------------------------- | :------------------------------------------------------ |
| **Header**          | Top of the view.                                             | `Settings` (Clear title).                             | N/A                                                     |
| **Work Duration Input** | Label and numerical input field.                             | `Work Duration (minutes)`: `[Input Field: 25]`        | Accepts positive integers.                              |
| **Short Break Input** | Label and numerical input field.                             | `Short Break Duration (minutes)`: `[Input Field: 5]`  | Accepts positive integers.                              |
| **Long Break Input** | Label and numerical input field.                             | `Long Break Duration (minutes)`: `[Input Field: 15]`  | Accepts positive integers.                              |
| **Long Break Frequency Input** | Label and numerical input field.                             | `Long Break Frequency (work sessions)`: `[Input Field: 4]` | Accepts positive integers.                              |
| **Save Button**     | Bottom of the view, prominent.                               | `SAVE`.                                               | Stores settings locally, applies changes, returns to `Main Timer - Idle`. |
| **Cancel Button**   | Next to `SAVE` (or below), secondary.                        | `CANCEL`.                                             | Discards changes, returns to `Main Timer - Idle`.       |

---

## Conclusion
This specification provides a thorough, minimalist blueprint for the Pomodoro App's MVP user interface. It ensures all core functionalities derived from user stories and project scope are represented with clarity and a focus on intuitive user experience.

---