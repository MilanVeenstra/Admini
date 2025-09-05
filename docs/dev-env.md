# Developer Environment Setup

## Languages & Frameworks
- Python 3.11+ (FastAPI backend).
- Node.js 18+ (React / React Native frontend).
- PostgreSQL 14+ database.

## Tools
- `pyenv` for Python version management.
- `venv` or Poetry for dependency isolation.
- Docker & docker-compose for local services.
- Git with feature-branch workflow.

## Setup Steps
1. Install Python via pyenv (`pyenv install 3.11.6`).
2. Create virtual env: `python -m venv venv && source venv/bin/activate`.
3. Install backend deps: `pip install -r requirements.txt`.
4. Install frontend deps: `npm install`.
5. Run local DB with `docker-compose up`.

## Compilers / Build Tools
- GCC/Clang for Python deps (OCR/ML libs).
- Xcode Command Line Tools (macOS) or Build Tools for Windows.
