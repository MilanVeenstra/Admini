# CLAUDE.md – Project Memory for AI-Driven Accounting System

This file provides Claude with essential context and rules for working in this repository.  
It imports modular `.md` files for clarity.

---

## Imports
- @docs/architecture.md
- @docs/testing.md
- @docs/dev-env.md
- @docs/repo-guidelines.md
- @docs/vat-compliance.md
- @docs/design-doc.md 

---

## Core Rules
- **ALWAYS follow Dutch accounting rules and VAT compliance.**
- **NEVER remove or bypass audit trail, backups, or security checks.**
- **PRESERVE double-entry accounting integrity (debit = credit).**
- Prefer modular design (microservices / FastAPI + React/React Native) as in architecture notes.
- Use PostgreSQL for financial records, JSONB where semi-structured data is needed.
- For AI features (OCR, LLM assistant), always ground responses via MCP server access to data.

---

## Workflow Summary
1. Work in phases (see architecture.md for breakdown).  
2. After each phase, **write and run tests** (see testing.md).  
3. Respect coding conventions and repository etiquette.  
4. For environment setup, follow dev-env.md instructions.  

---

## Do Not Touch
- Do not modify encryption or GDPR compliance rules.
- Do not hardcode secrets or API keys.
- Do not disable VAT validation or compliance checks.

## GitHub Workflow Rules
- After each milestone/phase is fully implemented **and all tests pass**, Claude must:
  1. Create a new branch `feature/<phase-name>`
  2. Stage all changes: `git add .`
  3. Commit with Conventional Commit style:  
     `git commit -m "feat(phase-x): implement <short description>"`
  4. Push the branch:  
     `git push -u origin feature/<phase-name>`
  5. Open a Pull Request via GitHub CLI:  
     `gh pr create --fill --base main --head feature/<phase-name>`
- After PR approval, Claude must merge using:  
  `gh pr merge --squash --delete-branch`


