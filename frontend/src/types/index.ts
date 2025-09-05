// Common types for the Dutch AI Accounting System

export interface User {
  id: string
  email: string
  full_name: string
  role: UserRole
  is_active: boolean
  created_at: string
  updated_at: string
}

export enum UserRole {
  OWNER = 'owner',
  ACCOUNTANT = 'accountant',
  STAFF = 'staff'
}

export interface Company {
  id: string
  name: string
  vat_number: string
  kvk_number: string
  address: string
  city: string
  postal_code: string
  country: string
  created_at: string
  updated_at: string
}

export interface Account {
  id: string
  code: string
  name: string
  account_type: AccountType
  is_active: boolean
  created_at: string
  updated_at: string
}

export enum AccountType {
  ASSET = 'asset',
  LIABILITY = 'liability',
  EQUITY = 'equity',
  REVENUE = 'revenue',
  EXPENSE = 'expense'
}

export interface Transaction {
  id: string
  reference: string
  description: string
  amount: number
  vat_rate: number
  vat_amount: number
  transaction_date: string
  created_at: string
  updated_at: string
}

export interface VatRate {
  standard: number  // 21%
  reduced: number   // 9%
  zero: number      // 0%
  exempt: null      // VAT exempt
}