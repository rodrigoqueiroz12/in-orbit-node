import fastify from 'fastify'
import {
  serializerCompiler,
  validatorCompiler,
  type ZodTypeProvider,
} from 'fastify-type-provider-zod'
import { goalRoutes } from './routes/goal.routes'
import { goalCompletionRoutes } from './routes/goal-completion.routes'
import fastifyCors from '@fastify/cors'
import { metricRoutes } from './routes/metric.routes'
import { env } from '@/env'

export const app = fastify().withTypeProvider<ZodTypeProvider>()

app.register(fastifyCors, {
  origin: env.APP_CORS_ORIGIN,
})

app.setValidatorCompiler(validatorCompiler)
app.setSerializerCompiler(serializerCompiler)

app.register(goalRoutes)
app.register(goalCompletionRoutes)
app.register(metricRoutes)
