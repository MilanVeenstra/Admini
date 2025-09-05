# Architecture & Development Phases

## Phase 1: Core Accounting Engine
- Build core ledger with double-entry validation.
- Include auth, RBAC, basic manual data entry.

## Phase 2: Document Processing
- OCR pipeline (Google Vision/Azure Form Recognizer).
- AI categorization with feedback loop.

## Phase 3: Bank Integration
- PSD2 aggregator API (Salt Edge, Tink, Yodlee).
- Automatic reconciliation of bank transactions.

## Phase 4: Reporting & VAT
- Financial dashboard with KPIs.
- VAT return module (monthly/quarterly).
- Export to PDF/CSV.

## Phase 5: AI Assistant
- LLM-based chatbot (OpenAI GPT-4 / LLaMA).
- MCP server integration for real data queries.

## Phase 6: Invoicing, Notifications, Security
- Invoice generation and debtor management.
- Deadline and anomaly notifications.
- Full GDPR compliance, audit trail, backups.
