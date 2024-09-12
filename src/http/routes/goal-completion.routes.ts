import type { FastifyPluginAsyncZod } from 'fastify-type-provider-zod'
import { storeGoalCompletionRequest } from '../requests/store-goal-completion-request'
import { createGoalCompletion } from '@/functions/create-goal-completion'

export const goalCompletionRoutes: FastifyPluginAsyncZod = async app => {
  app.post(
    '/goal-completions',
    {
      schema: {
        body: storeGoalCompletionRequest,
      },
    },
    async (request, reply) => {
      const { goalId } = request.body

      const { goalCompletion } = await createGoalCompletion({ goalId })

      return reply.status(201).send({ goalCompletion })
    }
  )
}
