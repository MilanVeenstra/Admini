from sqlalchemy import Column, String, Boolean
from app.core.database import Base
from app.models.base import UUIDMixin, TimestampMixin


class Company(Base, UUIDMixin, TimestampMixin):
    """Company model for Dutch businesses"""
    
    __tablename__ = "companies"
    
    # Basic company information
    name = Column(String(255), nullable=False, index=True)
    legal_name = Column(String(255), nullable=True)  # Official legal name if different
    
    # Dutch-specific identifiers
    kvk_number = Column(String(8), unique=True, nullable=True, index=True)  # Chamber of Commerce number
    vat_number = Column(String(14), unique=True, nullable=True, index=True)  # BTW nummer (NL123456789B01)
    
    # Address information
    address_line_1 = Column(String(255), nullable=False)
    address_line_2 = Column(String(255), nullable=True)
    city = Column(String(100), nullable=False)
    postal_code = Column(String(7), nullable=False)  # Dutch postal code format: 1234AB
    country = Column(String(2), nullable=False, default="NL")  # ISO country code
    
    # Contact information
    phone = Column(String(20), nullable=True)
    email = Column(String(255), nullable=True)
    website = Column(String(255), nullable=True)
    
    # VAT configuration
    is_vat_registered = Column(Boolean, default=True, nullable=False)
    is_kor_enabled = Column(Boolean, default=False, nullable=False)  # Small Business Scheme (KOR)
    
    # Status
    is_active = Column(Boolean, default=True, nullable=False)
    
    def __repr__(self):
        return f"<Company(name='{self.name}', kvk='{self.kvk_number}')>"