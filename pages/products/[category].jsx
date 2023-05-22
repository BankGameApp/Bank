import React from 'react'
import { useRouter } from 'next/router'

const Category = () => {
  const router = useRouter()
  const { category } = router.query
  console.log('category', category)

  return (
    <div>{category}</div>
  )
}

export default Category
