import { string, z } from 'zod'
const url = 'https://www.course-api.com/react-tours-project'

// Define a type for the data you're fetching.
const tourSachema = z.object({
  id: z.string(),
  name: z.string(),
  info: z.string(),
  image: z.string(),
  price: z.string(),
  something: z.boolean(),
})
type Tour = z.infer<typeof tourSachema>

async function fetchData(url: string): Promise<Tour[]> {
  try {
    const response = await fetch(url)

    // Check if the request was successful.
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    const rawData: Tour[] = await response.json()
    const result = tourSachema.array().safeParse(rawData)
    if (!result.success) {
      throw new Error(`Invalid data: ${result.error}`)
    }

    return result.data
  } catch (error) {
    const errMsg =
      error instanceof Error ? error.message : 'there was an error...'
    console.error(errMsg)

    // throw error;
    return []
  }
}

const tours = await fetchData(url)
tours.map((tour) => {
  console.log(tour.name)
})
