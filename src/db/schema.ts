import { pgTable, serial, text, varchar, integer, timestamp, boolean, jsonb } from "drizzle-orm/pg-core";

export const contacts = pgTable("contacts", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 255 }).notNull(),
  phone: varchar("phone", { length: 50 }).notNull(),
  city: varchar("city", { length: 255 }),
  kitchenSize: varchar("kitchen_size", { length: 100 }),
  preferredDate: varchar("preferred_date", { length: 100 }),
  notes: text("notes"),
  status: varchar("status", { length: 50 }).default("new"),
  createdAt: timestamp("created_at").defaultNow(),
});

export const orders = pgTable("orders", {
  id: serial("id").primaryKey(),
  orderNumber: varchar("order_number", { length: 50 }).notNull().unique(),
  customerName: varchar("customer_name", { length: 255 }).notNull(),
  phone: varchar("phone", { length: 50 }).notNull(),
  status: varchar("status", { length: 50 }).default("received"),
  progress: integer("progress").default(0),
  notes: text("notes"),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

export const newsletter = pgTable("newsletter", {
  id: serial("id").primaryKey(),
  email: varchar("email", { length: 255 }).notNull().unique(),
  createdAt: timestamp("created_at").defaultNow(),
});

export const calculatorLeads = pgTable("calculator_leads", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 255 }),
  phone: varchar("phone", { length: 50 }),
  length: varchar("length", { length: 20 }),
  width: varchar("width", { length: 20 }),
  material: varchar("material", { length: 100 }),
  countertop: varchar("countertop", { length: 100 }),
  accessories: text("accessories"),
  estimatedPrice: integer("estimated_price"),
  createdAt: timestamp("created_at").defaultNow(),
});

export const adminUsers = pgTable("admin_users", {
  id: serial("id").primaryKey(),
  username: varchar("username", { length: 100 }).notNull().unique(),
  passwordHash: varchar("password_hash", { length: 255 }).notNull(),
  createdAt: timestamp("created_at").defaultNow(),
});
