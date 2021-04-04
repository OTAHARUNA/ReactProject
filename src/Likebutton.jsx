import React, {useState,useEffect } from 'react';

const Likebutton = () => {
  //counterの値によって変えられるようになる
  const [count, counter] = useState(0);
  //②空の配列を第二引数に入れると2回目からのイベントリスナーが実行されない為以下追加
  const [limit, release] = useState(true);
  const countUp = () => {
    counter(count + 1)
  }
  useEffect(() => {
    console.log('UnMounting');
    document.getElementById("counter").addEventListener('click', countUp)
    //ここまでMounting 以下、UpdateMounting/UnMounting
    if (count == 10) {
      counter(0);
    }
    return () => {
      document.getElementById("counter").removeEventListener('click', countUp)
    }
  }, [true]);
  //②第2引数に引数に空の配列を入れると初めの1回（初めのマウント時にしかイベントリスナーが実行されない）のみ実行される　一度クリックすると次のrenderが実行されreturn内のクリーンアップされる為次のイベントリスナーが実行されない
  //第2引数の値が変わるとコールバック関数の値が変わる
  return (
    //②limit解除する為のボタン作成が必要になってくる
    <>
      <button id="counter">いいね数： {count}</button>
      <button onClick={() => release(!limit) }>もっといいねしたい</button>
    </>
    //上記でlimitがtrueからfalseに変わる
  )
}
export default Likebutton
