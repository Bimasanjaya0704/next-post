'use client'

interface ViewUserBtnProops{
  userId : number
}

const ViewUserBtn: React.FC<ViewUserBtnProops> = ({userId}) => {
    const handleClickBtn = () =>
        alert (`User Id : ${userId}`)
    
  return (
    <div>
      <button onClick={handleClickBtn}>
        Lihat users
      </button>
    </div>
  )
}

export default ViewUserBtn
