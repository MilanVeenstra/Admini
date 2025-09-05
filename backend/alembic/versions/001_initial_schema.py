"""Initial database schema with users and companies

Revision ID: 001_initial_schema
Revises: 
Create Date: 2024-01-15 10:00:00.000000

"""
from alembic import op
import sqlalchemy as sa
from sqlalchemy.dialects.postgresql import UUID


# revision identifiers, used by Alembic.
revision = '001_initial_schema'
down_revision = None
branch_labels = None
depends_on = None


def upgrade() -> None:
    # Create users table
    op.create_table('users',
        sa.Column('id', UUID(as_uuid=True), nullable=False),
        sa.Column('email', sa.String(length=255), nullable=False),
        sa.Column('full_name', sa.String(length=255), nullable=False),
        sa.Column('hashed_password', sa.String(length=255), nullable=False),
        sa.Column('role', sa.Enum('owner', 'accountant', 'staff', name='userrole'), nullable=False),
        sa.Column('is_active', sa.Boolean(), nullable=False),
        sa.Column('is_verified', sa.Boolean(), nullable=False),
        sa.Column('created_at', sa.DateTime(timezone=True), server_default=sa.text('now()'), nullable=False),
        sa.Column('updated_at', sa.DateTime(timezone=True), server_default=sa.text('now()'), nullable=False),
        sa.PrimaryKeyConstraint('id')
    )
    op.create_index(op.f('ix_users_id'), 'users', ['id'], unique=False)
    op.create_index(op.f('ix_users_email'), 'users', ['email'], unique=True)

    # Create companies table
    op.create_table('companies',
        sa.Column('id', UUID(as_uuid=True), nullable=False),
        sa.Column('name', sa.String(length=255), nullable=False),
        sa.Column('legal_name', sa.String(length=255), nullable=True),
        sa.Column('kvk_number', sa.String(length=8), nullable=True),
        sa.Column('vat_number', sa.String(length=14), nullable=True),
        sa.Column('address_line_1', sa.String(length=255), nullable=False),
        sa.Column('address_line_2', sa.String(length=255), nullable=True),
        sa.Column('city', sa.String(length=100), nullable=False),
        sa.Column('postal_code', sa.String(length=7), nullable=False),
        sa.Column('country', sa.String(length=2), nullable=False),
        sa.Column('phone', sa.String(length=20), nullable=True),
        sa.Column('email', sa.String(length=255), nullable=True),
        sa.Column('website', sa.String(length=255), nullable=True),
        sa.Column('is_vat_registered', sa.Boolean(), nullable=False),
        sa.Column('is_kor_enabled', sa.Boolean(), nullable=False),
        sa.Column('is_active', sa.Boolean(), nullable=False),
        sa.Column('created_at', sa.DateTime(timezone=True), server_default=sa.text('now()'), nullable=False),
        sa.Column('updated_at', sa.DateTime(timezone=True), server_default=sa.text('now()'), nullable=False),
        sa.PrimaryKeyConstraint('id')
    )
    op.create_index(op.f('ix_companies_id'), 'companies', ['id'], unique=False)
    op.create_index(op.f('ix_companies_name'), 'companies', ['name'], unique=False)
    op.create_index(op.f('ix_companies_kvk_number'), 'companies', ['kvk_number'], unique=True)
    op.create_index(op.f('ix_companies_vat_number'), 'companies', ['vat_number'], unique=True)


def downgrade() -> None:
    # Drop companies table
    op.drop_index(op.f('ix_companies_vat_number'), table_name='companies')
    op.drop_index(op.f('ix_companies_kvk_number'), table_name='companies')
    op.drop_index(op.f('ix_companies_name'), table_name='companies')
    op.drop_index(op.f('ix_companies_id'), table_name='companies')
    op.drop_table('companies')
    
    # Drop users table
    op.drop_index(op.f('ix_users_email'), table_name='users')
    op.drop_index(op.f('ix_users_id'), table_name='users')
    op.drop_table('users')
    
    # Drop enum type
    sa.Enum(name='userrole').drop(op.get_bind(), checkfirst=False)