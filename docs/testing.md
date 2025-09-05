# Testing & Validation

## Methodology
- Use **pytest** for backend, **Jest** for frontend.
- Apply unit, integration, and end-to-end tests.

## Test Strategy Per Phase
- Phase 1: Ensure ledger balances, auth roles enforced.
- Phase 2: OCR extraction accuracy, VAT field validation.
- Phase 3: Bank reconciliation correctness, duplicate handling.
- Phase 4: Report totals match raw data, VAT reports align with Dutch forms.
- Phase 5: AI queries return accurate financial data (MCP validated).
- Phase 6: Invoice lifecycle (create → send → paid), notification triggers.

## Compliance Checks
- All VAT rates correct (21%, 9%, 0%, exempt).
- Reverse charge properly handled.
- GDPR: test data export and delete requests.
