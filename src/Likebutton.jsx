import React, {useState,useEffect } from 'react';

const Likebutton = () => {
  //counterの値によって変えられるようになる
  const [count, counter] = useState(0);
  const countUp = () => {
    counter(count + 1)
  }
  useEffect(() => {
    console.log('UnMounting');
    document.getElementById("counter").addEventListener('click', countUp)
    //ここまでMounting 以下、UpdateMounting/UnMounting
    return () => (
      document.getElementById("counter").removeEventListener('click', countUp)
    )


  });
  return (
    <button id="counter">いいね数： {count}</button>
  )
}
export default Likebutton
