# Italian Tutor

Two beginner-friendly tools in one place:

1. **English ⇄ Italian Translator** (`index.html`) — a self-contained web app that translates spoken or written English to Italian and Italian to English.
2. **Beginner Italian Lesson Plan** (`italian-lesson-plan.md`) — an 8-week A1 course written in English.

## Translator Features

- Translate **English → Italian** and **Italian → English**
- **Type** text or use the **microphone** (speech-to-text)
- **Listen** to the source and translation with text-to-speech
- Swap languages with one click
- Copy the translation to your clipboard
- Works on desktop and mobile browsers

## Running Locally

No build step is required. Simply open `index.html` in a browser:

```bash
open index.html
```

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
