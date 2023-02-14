/* eslint-disable max-len */
import type { Property } from '~/types'

const properties: Property[] = [
  {
    id: '3-canadaian',
    title: '3 Canadian Industrial Properties You Can Buy For Less Than $10 Million',
    description: 'An elephant at sunset',
    imageAlt: 'San Francisco',
    imageUrl: 'https://www.loopnet.com/modules/home/content/images/news/news_placeholder.jpg',
  },
  {
    id: 'how-to-boost',
    title: 'How To Boost Your Retail Foot Traffic With a Fitness Center',
    description: 'Trends',
    imageAlt: 'San Francisco',
    imageUrl: 'https://costar.brightspotcdn.com/dims4/default/7ca4d55/2147483647/strip/true/crop/880x495+0+0/resize/1200x675!/quality/90/?url=http%3A%2F%2Fcostar-brightspot.s3.amazonaws.com%2Fad%2F0b%2F6dffff01408a9c52301af31b263c%2Frsz-la-fitness-3.jpg',
  },
  {
    id: 'the-startups',
    title: 'This Startup\'s Lease-To-Own Model Empowers Small Businesses To Buy Their Property',
    description: 'Retail & Restaurant',
    imageAlt: 'San Francisco',
    imageUrl: 'https://costar.brightspotcdn.com/dims4/default/7011120/2147483647/strip/true/crop/548x548+166+0/resize/450x450!/quality/90/?url=http%3A%2F%2Fcostar-brightspot.s3.amazonaws.com%2F9e%2Fff%2Fdf0c67724e288f9eafbcbc009da9%2Fgettyimages-1342165160-1-880x548.jpeg',
  },
]

// https://my.matterport.com/show/?m=r4tiL6ozNAH

export default defineEventHandler((event) => {
  const query = getQuery(event)

  if (query?.id)
    return properties.find(item => item.id === query.id)

  return properties
})
