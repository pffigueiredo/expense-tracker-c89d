
import { z } from 'zod';

// Expense schema
export const expenseSchema = z.object({
  id: z.number(),
  description: z.string(),
  amount: z.number(),
  date: z.coerce.date(),
  created_at: z.coerce.date()
});

export type Expense = z.infer<typeof expenseSchema>;

// Input schema for creating expenses
export const createExpenseInputSchema = z.object({
  description: z.string().min(1, "Description is required"),
  amount: z.number().positive("Amount must be positive"),
  date: z.string().refine((date) => !isNaN(Date.parse(date)), "Invalid date format")
});

export type CreateExpenseInput = z.infer<typeof createExpenseInputSchema>;
