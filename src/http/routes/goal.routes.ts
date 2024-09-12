import { storeGoalRequestSchema } from '../requests/store-goal-request'
import { createGoal } from '@/functions/create-goal'
import { getWeekPendingGoals } from '@/functions/get-week-pending-goals'
import type { FastifyPluginAsyncZod } from 'fastify-type-provider-zod'

export const goalRoutes: FastifyPluginAsyncZod = async app => {
  app.post(
    '/goals',
    {
      schema: {
        body: storeGoalRequestSchema,
      },
    },
    async request => {
      const { title, desiredWeeklyFrequency } = request.body

      await createGoal({
        title,
        desiredWeeklyFrequency,
      })
    }
  )

  app.get('/goals/pending', async () => {
    const { pendingGoals } = await getWeekPendingGoals()

    return {
      pendingGoals,
    }
  })
}
