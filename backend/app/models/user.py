from sqlalchemy import Boolean, Column, String, Enum
from sqlalchemy.orm import relationship
from app.core.database import Base
from app.models.base import UUIDMixin, TimestampMixin
import enum


class UserRole(str, enum.Enum):
    """User roles in the accounting system"""
    OWNER = "owner"
    ACCOUNTANT = "accountant"
    STAFF = "staff"


class User(Base, UUIDMixin, TimestampMixin):
    """User model for authentication and authorization"""
    
    __tablename__ = "users"
    
    email = Column(String(255), unique=True, index=True, nullable=False)
    full_name = Column(String(255), nullable=False)
    hashed_password = Column(String(255), nullable=False)
    role = Column(Enum(UserRole), nullable=False, default=UserRole.STAFF)
    is_active = Column(Boolean, default=True, nullable=False)
    is_verified = Column(Boolean, default=False, nullable=False)
    
    def __repr__(self):
        return f"<User(email='{self.email}', role='{self.role}')>"