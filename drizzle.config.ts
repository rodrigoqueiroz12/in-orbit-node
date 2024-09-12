import { env } from '@/env'
import { defineConfig } from 'drizzle-kit'

export default defineConfig({
  schema: './src/db/schema.ts',
  dialect: 'postgresql',
  out: './src/db/.migrations',
  dbCredentials: {
    url: env.DATABASE_URL,
  },
})
