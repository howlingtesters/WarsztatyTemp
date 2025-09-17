### Git cheat sheet 
- `git init` - inicjalizacja repozytorium
- `git status` - sprawdzenie statusu repozytorium
- `git add .` - dodanie wszystkich plików do stage
- `git commit -m "Wiadomość"` - zatwierdzenie zmian
- `git log` - wyświetlenie historii commitów
- `git checkout -b nazwa-brancha` - utworzenie nowego brancha
- `git branch` - wyświetlenie listy branchy
- `git checkout nazwa-brancha` - przełączenie się na inny branch
- `git merge nazwa-brancha` - scalenie branchy
- `git push` - wysłanie zmian na zdalne repozytorium
- `git pull` - pobranie zmian z zdalnego repozytorium
- `git clone adres-repozytorium` - sklonowanie repozytorium

### Cofanie zmian
- `git reset --hard` - cofnięcie wszystkich zmian
- `git reset --hard HEAD~1` - cofnięcie ostatniego commita
- `git reset --soft HEAD~1` - cofnięcie ostatniego commita, ale zachowanie zmian
- `git revert nazwa-commita` - cofnięcie commita


### Stash - schowanie zmian
- `git stash` - schowanie zmian
- `git stash pop` - przywrócenie schowanych zmian
- `git stash list` - wyświetlenie listy schowanych zmian
- `git stash drop` - usunięcie schowanych zmian
