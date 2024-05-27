import { useEffect, useState } from 'react'

const CAT_IMAGE_BASE_URL = 'https://cataas.com'

export function useCatImage ({ fact }) {
  const [imageUrl, setImageUrl] = useState()

  useEffect(() => {
    if (!fact) return

    fetch(`https://cataas.com/cat/says/${fact}?size=50&fontColor=white&json=true`)
      .then(res => res.json())
      .then(response => {
        const { _id } = response
        const url = `/cat/${_id}/says/${fact}?fontSize=20&fontColor=white`
        setImageUrl(url)
      })
  }, [fact])

  return { imageUrl: `${CAT_IMAGE_BASE_URL}${imageUrl}` }
}