# Starter monorepo

> :hammer_and_wrench: work in progress
>> :exclamation: this template repository is not tested yet

The workflow will be...

1. Use this template on GitHub
2. Clone repositoy locally
3. Replace repository name, there are two different way for it
   - Open with VS Code and replace all occurences of `starter-monorepo`
   expression with <kbd>Ctrl+Shift+H</kbd>
   - Paste this command in root of the project

  ```bash
  from='starter-monorepo'
  to='<project name>'

  grep -rl $from . | xargs sed -i "s/$from/$to/g"
  ```

4. Create environment file `mv .env.example .env`
5. Change Commitlint issue prefix if is needed in `package.json` in root, but
don't forget to add to reference link under repository settings
6. Reopen folder in Devcontainer, check result (Commitlint + Husky, ESLint,
Node.js, ...)
7. Rebase Git history `git commit --amend && git push --force` or
`git rebase --interactive HEAD~1 && git push --force` - it should break
if the issue number is missing, this is normal; add one or commit without
verifying `--no-verify`
8. Create first issue and open a new branch, create new pull request for changes
and repeat this step

TODO:

- chek TypeScript version changes, because beta installed
- use `TIMING=true nr lint` to check linter rules effort

[Setup Window with WSL 2]

[Setup Window with WSL 2]: https://gist.github.com/nandordudas/a80971a3cf4a4563a26bc9aa3cfc8c00
