import dayjs from 'dayjs'
import { client, connection } from './connection'
import { goalCompletions, goals } from './schema'

async function seed() {
  await connection.delete(goals)
  await connection.delete(goalCompletions)

  const createdGoals = await connection
    .insert(goals)
    .values([
      { title: 'Jogar Mobile Legends', desiredWeeklyFrequency: 7 },
      { title: 'Ler', desiredWeeklyFrequency: 2 },
      { title: 'Beber água', desiredWeeklyFrequency: 18 },
    ])
    .returning()

  const startOfWeek = dayjs().startOf('week')

  await connection.insert(goalCompletions).values([
    { goalId: createdGoals[0].id, createdAt: startOfWeek.toDate() },
    {
      goalId: createdGoals[1].id,
      createdAt: startOfWeek.add(1, 'day').toDate(),
    },
    {
      goalId: createdGoals[2].id,
      createdAt: startOfWeek.add(2, 'day').toDate(),
    },
  ])
}

seed().finally(() => {
  client.end()
})
