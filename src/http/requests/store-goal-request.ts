import z from 'zod'

export const storeGoalRequestSchema = z.object({
  title: z.string(),
  desiredWeeklyFrequency: z.coerce.number().min(0),
})
