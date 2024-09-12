import z from 'zod'

export const storeGoalCompletionRequest = z.object({
  goalId: z.string(),
})
