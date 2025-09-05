# Dutch AI-Driven Accounting System

> AI-powered bookkeeping and administration system designed specifically for Dutch entrepreneurs and SMEs, with full VAT compliance and Dutch language support.

## 🎯 Project Overview

This system automates manual accounting tasks using AI while ensuring full compliance with Dutch tax regulations (VAT, BTW). It provides real-time financial insights, automated document processing, and seamless bank integration via PSD2 APIs.

## 🚀 Quick Start

### Prerequisites

- **Docker & Docker Compose** (recommended for development)
- **Python 3.11+** (if running backend locally)
- **Node.js 18+** (if running frontend locally)
- **PostgreSQL 14+** (if running database locally)

### Docker Development Setup (Recommended)

1. **Clone and setup environment**:
   ```bash
   git clone <repository-url>
   cd dutch-ai-accounting
   cp .env.example .env
   cp frontend/.env.example frontend/.env
   ```

2. **Start all services**:
   ```bash
   docker-compose up -d
   ```

3. **Access the applications**:
   - Frontend: http://localhost:3000
   - Backend API: http://localhost:8000
   - API Documentation: http://localhost:8000/docs

4. **Run database migrations**:
   ```bash
   docker-compose exec backend alembic upgrade head
   ```

### Manual Development Setup

<details>
<summary>Click to expand manual setup instructions</summary>

#### Backend Setup
```bash
cd backend
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
pip install -r requirements.txt
```

#### Frontend Setup
```bash
cd frontend
npm install
```

#### Database Setup
```bash
# Start PostgreSQL service
# Create database: accounting_db
# Update .env with your database connection string
```

#### Run Services
```bash
# Terminal 1 - Backend
cd backend
uvicorn app.main:app --reload --host 0.0.0.0 --port 8000

# Terminal 2 - Frontend
cd frontend
npm run dev

# Terminal 3 - Database migrations
cd backend
alembic upgrade head
```
</details>

## 📋 Development Phases

The project is built in phases following the implementation plan in `CLAUDE.md`:

- **✅ Phase 0**: Bootstrap & Project Skeleton *(Current)*
- **🔄 Phase 1**: Core Accounting Engine (auth, RBAC, double-entry)
- **⏳ Phase 2**: Document Processing (OCR + AI categorization)
- **⏳ Phase 3**: Bank Integration (PSD2 feed + reconciliation)
- **⏳ Phase 4**: Reporting & VAT Module (dashboard + BTW aangifte)
- **⏳ Phase 5**: AI Assistant (MCP integration)
- **⏳ Phase 6**: Invoicing, Notifications, Security hardening

## 🛠️ Technology Stack

### Backend
- **FastAPI** - Modern, fast web framework for Python
- **SQLAlchemy** - Python SQL toolkit and ORM
- **Alembic** - Database migration tool
- **PostgreSQL** - Primary database
- **Redis** - Caching and session storage

### Frontend
- **React 18** - UI framework
- **TypeScript** - Type-safe JavaScript
- **Vite** - Fast build tool
- **Tailwind CSS** - Utility-first CSS framework
- **React Query** - Data fetching and caching

### DevOps & Development
- **Docker** - Containerization
- **Docker Compose** - Multi-container development
- **pytest** - Python testing framework
- **Jest** - JavaScript testing framework

## 🇳🇱 Dutch Compliance Features

- **VAT Rates**: 21% (standard), 9% (reduced), 0% (zero), exempt
- **Reverse Charge** (Verleggingsregeling) support
- **KOR** (Small Business Scheme) handling
- **BTW Aangifte** automated generation
- **7-year record retention** compliance
- **Dutch invoice requirements** validation

## 🔒 Security & Privacy

- **GDPR Compliant** - Full data protection compliance
- **Audit Trail** - Complete transaction logging
- **Role-based Access Control** (Owner, Accountant, Staff)
- **Encrypted Storage** - All sensitive data encrypted
- **EU Data Residency** - Data stored within EU boundaries

## 📖 Documentation

- [Architecture & Phases](docs/architecture.md)
- [VAT Compliance Rules](docs/vat-compliance.md)
- [Development Environment](docs/dev-env.md)
- [Testing Strategy](docs/testing.md)
- [Repository Guidelines](docs/repo-guidelines.md)
- [Design Document](docs/design-doc.md)

## 🧪 Testing

```bash
# Backend tests
cd backend
pytest

# Frontend tests
cd frontend
npm test

# Integration tests
docker-compose -f docker-compose.test.yml up --abort-on-container-exit
```

## 🤝 Contributing

1. Follow the conventional commit format
2. Create feature branches: `feature/<description>`
3. Ensure all tests pass before submitting PR
4. Update documentation as needed

## 📄 License

This project is proprietary software designed for Dutch accounting compliance.

## 🆘 Support

For development issues or feature requests, see the project documentation or contact the development team.

---

**Made with ❤️ for Dutch entrepreneurs**