import { pgTable, unique, text, timestamp } from "drizzle-orm/pg-core";

export const users = pgTable(
  "users",
  {
    id: text().primaryKey().notNull(),
    email: text().notNull(),
    name: text(),
    createdAt: timestamp("created_at", { mode: "string" })
      .defaultNow()
      .notNull(),
    updatedAt: timestamp("updated_at", { mode: "string" })
      .defaultNow()
      .notNull(),
    emailVerified: timestamp("email_verified", { mode: "string" }),
    image: text(),
  },
  (table) => [unique("users_email_unique").on(table.email)]
);
