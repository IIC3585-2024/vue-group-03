export function getRandomSubset(arr, size) {
  const validItems = arr.filter(item => 
    item.title && 
    item.author && 
    item.description && 
    item.content && 
    item.urlToImage
  )

  const shuffled = validItems.sort(() => 0.5 - Math.random())
  return shuffled.slice(0, size)
}