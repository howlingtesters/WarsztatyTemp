### 🤖 Sprawdź wersję Node.js

Uruchom polecenie w konsoli:

```sh
node -v
```

- **Mam wersję powyżej 20.0**: idealnie! Przejdź do kolejnej sekcji ✅
- **Mam wersję poniżej 20.0**: [zaktualizuj Node.js](https://nodejs.org/en)
- **Nie mam zainstalowanego Node.js**: - [zainstaluj Node.js](https://nodejs.org/en).

Do zainstalowania lub aktualizacji Node.js możesz też skorzystać z Node Version Manager: wersja [Windows](https://github.com/coreybutler/nvm-windows) lub [Linux, MacOS](https://github.com/nvm-sh/nvm).

### 🛠 Przygotuj IDE

- **Mam już Visual Studio Code** - upewnij się, że masz najbardziej aktualną wersję.
- **Nie mam Visual Studio Code** - [zainstaluj VSC](https://code.visualstudio.com/).
- **Nie chcę instalować Visual Studio Code** - OK! Na szkoleniu będziemy pokazywać jak efektywnie pracować korzystając z zalet Visual Studio Code, ale możesz też korzystać z innych IDE.

### 🛠 Zainstaluj wtyczkę Playwright dla Visual Studio Code

- Otwórz Visual Studio Code
- Przejdź do zakładki Extensions (Ctrl+Shift+X)
- Wyszukaj `Playwright` i zainstaluj wtyczkę [Playwright Test for VSCode (Microsoft)](https://marketplace.visualstudio.com/items?itemName=ms-playwright.playwright)

### 🤖 Opcjonalnie: utwórz repozytorium Github

Jeżeli chcesz przetestować uruchomienie napisanych testów za pomocą Github Actions, utwórz repozytorium na Githubie. [Utwórz nowe repozytorium](https://docs.github.com/en/get-started/quickstart/create-a-repo) i przygotuj się do pracy na nim lokalnie.

Ta opcja nie jest wymagana podczas warsztatów, ale jeżeli chcesz sprawdzić działanie Github Actions, to warto ją wykonać. W przeciwnym razie, możesz po prostu przygotować nowy folder, w którym będziesz pracować lokalnie.

### 📦 Przygotuj miejsce na swój projekt

Otwórz konsolę i przejdź do folderu, na którym będziesz pracować za pomocą polecenia:

```sh
cd ścieżka/do/twojego/folderu
```

### 🚀 Zainstaluj Playwright

Uruchom polecenie w konsoli:

```sh
npm init playwright@latest
```

⚠️ Wybierz proponowane odpowiedzi oprócz pytania dotyczącego Github Action.

```
✔ Do you want to use TypeScript or JavaScript? · TypeScript
✔ Where to put your end-to-end tests? · tests
✔ Add a GitHub Actions workflow? (y/N) · (y) true
✔ Install Playwright browsers (can be done manually via 'npx playwright install')? (Y/n) · (n) false
```

### 🔍 Sprawdź poprawność instalacji

Uruchom testy w konsoli

```sh
npx playwright test
```

Otwórz raport z wykonania testów (zakończ za pomocą Ctlr+C)

```sh
npx playwright show-report
```
