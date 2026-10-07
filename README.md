# Italian Tutor

Beginner-friendly tools in one place:

1. **English ⇄ Italian Translator** (`index.html`) — a self-contained web app that translates spoken or written English to Italian and Italian to English.
2. **Interactive Lesson Plan** (`lessons.html` + `lessons-data.js`) — three 8-week courses (Beginner A1, Intermediate B1, Advanced C1) as clickable weekly tabs. Every week includes a listenable dialogue, vocabulary with translations, grammar, and dedicated **speaking**, **writing**, and **describing** practice, plus exercises you can answer by typing or speaking (with pronunciation of the correct answer). Progress and answers are saved in your browser.

### Checking your speaking & writing

Each speaking, writing, and describing task has an answer box (type or **dictate**) and a **✓ Check my answer** button. To enable AI corrections:

1. Click **⚙️ AI feedback** at the top.
2. Paste your Bifrost API key and click **Save**.

The key is stored **only in your browser's localStorage** — it is never written to the site, the repository, or GitHub. If you don't add a key, you can still save and review your answers offline.

> Note: because the app runs entirely in the browser, a key entered there is visible to anyone using that browser profile. For a shared or public device, don't save a key.
3. **Lesson Plan (Markdown)** (`italian-lesson-plan.md`) — the same 8-week A1 course as a plain document.

## Translator Features

- Translate **English → Italian** and **Italian → English**
- **Type** text or use the **microphone** (speech-to-text)
- **Listen** to the source and translation with text-to-speech
- Swap languages with one click
- Copy the translation to your clipboard
- Works on desktop and mobile browsers

## Running Locally

No build step is required.

**Easiest (no terminal):** double-click **`Start Italian Tutor.command`** in Finder. It starts the local server and opens the app automatically.

**Or run it from the terminal:**

```bash
./start.sh
```

To use a different port: `./start.sh 9000`

Then open `http://localhost:8000` in Chrome and allow the microphone.

> Opening `index.html` directly (`file://`) works for text translation and speech playback, but Chrome blocks the microphone on `file://` pages. Use the local server above or GitHub Pages for speech input.

Speech input works best in **Chrome** or **Edge**. Text-to-speech works in most modern browsers.

## Publishing with GitHub Pages

1. Create a new repository on GitHub named `italian-tutor` (public).
2. Push this folder to the repository using GitHub Desktop.
3. On GitHub, go to **Settings → Pages**.
4. Under **Build and deployment**, set **Source** to **Deploy from a branch**.
5. Choose branch **main** and folder **/ (root)**, then click **Save**.
6. Wait 1–2 minutes. Your app will be live at:
   `https://<your-username>.github.io/italian-tutor/`

## Notes

- Translation uses the free [MyMemory](https://mymemory.translated.net/) public API, which has daily usage limits.
- No data is stored; everything runs in your browser.
