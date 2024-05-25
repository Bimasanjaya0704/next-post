'use client'

const ViewUserBtn = () => {
    const handleClickBtn = () =>
        alert ("Berhasil di click")
    
  return (
    <div>
      <button onClick={handleClickBtn}>
        Lihat users
      </button>
    </div>
  )
}

export default ViewUserBtn
