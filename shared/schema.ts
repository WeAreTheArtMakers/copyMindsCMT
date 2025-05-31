import { pgTable, text, serial, integer, boolean, decimal, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
  email: text("email").notNull().unique(),
  balance: decimal("balance", { precision: 15, scale: 2 }).default("0.00"),
  cmtTokens: decimal("cmt_tokens", { precision: 15, scale: 2 }).default("0.00"),
  createdAt: timestamp("created_at").defaultNow(),
});

export const traders = pgTable("traders", {
  id: serial("id").primaryKey(),
  userId: integer("user_id").references(() => users.id),
  displayName: text("display_name").notNull(),
  avatar: text("avatar"),
  bio: text("bio"),
  winRate: decimal("win_rate", { precision: 5, scale: 2 }),
  totalReturn: decimal("total_return", { precision: 10, scale: 2 }),
  monthlyReturn: decimal("monthly_return", { precision: 10, scale: 2 }),
  followers: integer("followers").default(0),
  riskScore: decimal("risk_score", { precision: 3, scale: 1 }),
  experience: integer("experience_years"),
  verified: boolean("verified").default(false),
  createdAt: timestamp("created_at").defaultNow(),
});

export const copyTrades = pgTable("copy_trades", {
  id: serial("id").primaryKey(),
  userId: integer("user_id").references(() => users.id),
  traderId: integer("trader_id").references(() => traders.id),
  amount: decimal("amount", { precision: 15, scale: 2 }),
  currentPnl: decimal("current_pnl", { precision: 15, scale: 2 }).default("0.00"),
  roi: decimal("roi", { precision: 10, scale: 2 }).default("0.00"),
  isActive: boolean("is_active").default(true),
  createdAt: timestamp("created_at").defaultNow(),
});

export const cmtToken = pgTable("cmt_token", {
  id: serial("id").primaryKey(),
  price: decimal("price", { precision: 10, scale: 4 }),
  marketCap: decimal("market_cap", { precision: 20, scale: 2 }),
  change24h: decimal("change_24h", { precision: 5, scale: 2 }),
  totalSupply: decimal("total_supply", { precision: 20, scale: 0 }),
  circulatingSupply: decimal("circulating_supply", { precision: 20, scale: 0 }),
  updatedAt: timestamp("updated_at").defaultNow(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
  email: true,
});

export const insertTraderSchema = createInsertSchema(traders).omit({
  id: true,
  createdAt: true,
});

export const insertCopyTradeSchema = createInsertSchema(copyTrades).omit({
  id: true,
  createdAt: true,
  currentPnl: true,
  roi: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;
export type Trader = typeof traders.$inferSelect;
export type CopyTrade = typeof copyTrades.$inferSelect;
export type CmtToken = typeof cmtToken.$inferSelect;
export type InsertTrader = z.infer<typeof insertTraderSchema>;
export type InsertCopyTrade = z.infer<typeof insertCopyTradeSchema>;
