import React from 'react'

const Spinning = () => {
  return (
    <div class="mt-6 flex-col items-center justify-center absolute top-36">
  <div class="inline-flex rounded-full h-12 w-12 border-4 border-gray-200">
    <div class="animate-spin rounded-full h-6 w-6 border-b-4 border-gray-800"></div>
  </div>
  <h2>Loading ...</h2>
</div>

  )
}

export default Spinning
