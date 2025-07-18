
import { serial, text, pgTable, timestamp, numeric, date } from 'drizzle-orm/pg-core';

export const expensesTable = pgTable('expenses', {
  id: serial('id').primaryKey(),
  description: text('description').notNull(),
  amount: numeric('amount', { precision: 10, scale: 2 }).notNull(),
  date: date('date').notNull(),
  created_at: timestamp('created_at').defaultNow().notNull(),
});

// TypeScript type for the table schema
export type Expense = typeof expensesTable.$inferSelect;
export type NewExpense = typeof expensesTable.$inferInsert;

// Important: Export all tables for proper query building
export const tables = { expenses: expensesTable };
