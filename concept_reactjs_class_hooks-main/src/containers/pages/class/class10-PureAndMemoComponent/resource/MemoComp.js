import React from 'react'

// // To achieve Pure Component in functional component Memo is use.
function MemoComp({ name }) {
  console.log('Rendering MemoComponent')
  return (
    <div>
      {name}
    </div>
  )
}

// // To achieve Memo component
export default React.memo(MemoComp)
