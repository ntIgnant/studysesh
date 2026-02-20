# Project: Study Community Web App

## 1. Vision

We are building a web app that helps university students reduce solitude while studying by joining structured online study rooms.

The goal is to create a focused, distraction-minimized alternative to Discord-style study servers.

This is NOT a social media app.
This is NOT a full Discord clone.
This is a focused study-presence platform.

---

## 2. Problem

Many university students spend long hours studying alone.
While Discord servers exist, they are often noisy and not optimized for structured studying.

We believe students want:
- Light social presence
- Accountability
- Structured rooms
- Identity (major/year/what they're studying)

---

## 3. Target Users

- University and college students
- Students who watch "study with me" creators
- Students who want accountability while studying

---

## 4. Core MVP Features
- Local Area (contains pomodoro timer, Notes, ToDo list)
- Social Area (The user can search for the room of hes favourite creator and join it)
- ...

### Accounts
- Sign up / login
- Basic profile:
  - Name
  - Major
  - Year
  - What they are studying currently (e.g Algorithms)

### Study Rooms
- Public rooms
- Room name
- Description
- Creator of the room
- List of active participants (Online market with a red light or some sign of activity)
- Ranking of most time stuyding (Calculated by time of personal pomodoro)

### Presence
- Show who is currently studying in a room
- Show what each user is studying + labels (e.g Oscar, Computer Science, Algorithms, Spain)

### Basic Chat
- Simple text chat per room
- No threads
- No complex moderation for MVP (needs to be regulated later)

---

## 5. Non-Goals (For Now)

- No complex DMs
- No full Discord-style features
- No advanced moderation system
- No mobile app (web responsive only)

---

## 6. Definition of MVP Success

We can:
1. Create an account
2. Join a room
3. See other students studying
4. Send basic chat messages
5. Leave and rejoin without errors

---

## 7. Product Areas (SaaS structure)
- Marketing (public): landing page, pricing, about, contact, privacy, terms
- Auth (public): sign-in, sign-up, onboarding
- App (protected): rooms list, room page, profile, settings
