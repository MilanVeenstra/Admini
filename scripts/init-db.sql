-- Initialize Dutch Accounting Database
-- This script runs when the PostgreSQL container is first created

-- Create extensions for better functionality
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE EXTENSION IF NOT EXISTS "pg_trgm";

-- Set timezone to Europe/Amsterdam (Dutch timezone)
SET timezone = 'Europe/Amsterdam';

-- Create initial database schema comment
COMMENT ON DATABASE accounting_db IS 'Dutch AI-driven Accounting System Database';

-- Grant necessary permissions
GRANT ALL PRIVILEGES ON DATABASE accounting_db TO accounting_user;