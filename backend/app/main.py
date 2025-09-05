from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.core.config import settings
from app.api.api_v1.api import api_router

app = FastAPI(
    title="Dutch AI Accounting System",
    description="AI-driven accounting and administration system for the Dutch market",
    version="0.1.0",
    openapi_url=f"{settings.API_V1_STR}/openapi.json",
)

# Set up CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=settings.BACKEND_CORS_ORIGINS,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Include API router
app.include_router(api_router, prefix=settings.API_V1_STR)


@app.get("/")
async def root():
    """Health check endpoint"""
    return {
        "message": "Dutch AI Accounting System API",
        "version": "0.1.0",
        "status": "healthy"
    }


@app.get("/health")
async def health_check():
    """Detailed health check endpoint"""
    return {
        "status": "healthy",
        "service": "accounting-api",
        "version": "0.1.0"
    }