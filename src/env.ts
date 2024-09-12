import z from 'zod'

const envSchema = z.object({
  APP_PORT: z.coerce.number(),
  APP_CORS_ORIGIN: z.string(),
  DATABASE_URL: z.string().url(),
})

export const env = envSchema.parse(process.env)
