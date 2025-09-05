from fastapi import APIRouter

api_router = APIRouter()

# Health check endpoint
@api_router.get("/health")
async def health():
    """API v1 health check"""
    return {"status": "healthy", "version": "v1"}

# Future endpoints will be added here:
# api_router.include_router(auth.router, prefix="/auth", tags=["authentication"])
# api_router.include_router(accounts.router, prefix="/accounts", tags=["accounts"])
# api_router.include_router(transactions.router, prefix="/transactions", tags=["transactions"])