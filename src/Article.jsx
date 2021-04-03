import React, {useState} from 'react';
import Likebutton from './Likebutton';

//関数コンポーネント
//Articleという関数を宣言。以下関数の形()=>
const Article = (props) => {
//  let publishState = "";
//  if (props.isPublished) {
//    publishState = "公開"
//  } else {
//    publishState = "非公開"
//  }
  const [isPublished,togglePublished] = useState(false);
  return (
    <div>
      <h2>{props.title}</h2>
      <p>順番は{props.order}です</p>
      {/*htmlForにするとid="check"のラベルになりますといった意味になる */}
      <label htmlFor="check">公開状態:</label>
      <input type="checkbox" checked={isPublished} id="check" onClick={() => togglePublished(!isPublished) }/>
      {/*checked={props.isPublished}を上記に入れたままだとfalseだとチェックなしになる */}
      {/*      <p>{publishState}</p>*/}
      <Likebutton />
    </div>
  )
}
export default Article;
