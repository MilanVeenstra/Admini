from typing import List, Union
from pydantic import AnyHttpUrl, field_validator
from pydantic_settings import BaseSettings, SettingsConfigDict


class Settings(BaseSettings):
    model_config = SettingsConfigDict(env_file=".env", case_sensitive=True)
    
    # API Configuration
    API_V1_STR: str = "/api/v1"
    PROJECT_NAME: str = "Dutch AI Accounting System"
    
    # CORS Configuration
    BACKEND_CORS_ORIGINS: List[AnyHttpUrl] = []
    
    @field_validator("BACKEND_CORS_ORIGINS", mode="before")
    @classmethod
    def assemble_cors_origins(cls, v: Union[str, List[str]]) -> Union[List[str], str]:
        if isinstance(v, str) and not v.startswith("["):
            return [i.strip() for i in v.split(",")]
        elif isinstance(v, (list, str)):
            return v
        raise ValueError(v)
    
    # Database Configuration
    DATABASE_URL: str = "postgresql+asyncpg://accounting_user:accounting_pass@localhost:5432/accounting_db"
    
    # Security Configuration
    SECRET_KEY: str = "your-secret-key-change-in-production"
    ACCESS_TOKEN_EXPIRE_MINUTES: int = 30
    REFRESH_TOKEN_EXPIRE_DAYS: int = 7
    ALGORITHM: str = "HS256"
    
    # Dutch VAT Configuration
    DEFAULT_VAT_RATES: dict = {
        "standard": 0.21,  # 21% standard rate
        "reduced": 0.09,   # 9% reduced rate
        "zero": 0.00,      # 0% zero rate
        "exempt": None     # VAT exempt
    }
    
    # Environment
    ENVIRONMENT: str = "development"
    DEBUG: bool = True


settings = Settings()