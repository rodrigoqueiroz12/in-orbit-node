import { getWeekSummary } from '@/functions/get-week-summary'
import type { FastifyPluginAsyncZod } from 'fastify-type-provider-zod'

export const metricRoutes: FastifyPluginAsyncZod = async app => {
  app.get('/metrics/summary', async () => {
    const { summary } = await getWeekSummary()

    return { summary }
  })
}
