import { env } from '@/env'
import { drizzle } from 'drizzle-orm/postgres-js'
import postgres from 'postgres'
import * as schema from '@/db/schema'

export const client = postgres(env.DATABASE_URL)

export const connection = drizzle(client, {
  schema,
  logger: true,
})
