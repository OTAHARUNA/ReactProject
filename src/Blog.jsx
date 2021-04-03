import React from 'react';
import Article from './Article';
//以下別名import FooBarコンポーネント全てエクスポートした
import * as FooBar from './components/FooBar';
//以下は、それぞれの関数指定してエクスポートした
//import { Foo, Bar } from './components/FooBar';
//fromの後ろは相対パスになる
import Hoge from './components/Hoge';



const Blog = () => {
  // componentDidMount() {
    //ボタンがクリックされたらこの関数呼び出してね→その関数は+1する関数だよ
    //()=>this.countUpと同じ意味合いになるthis.countUp()にしなければOK
    // document.getElementById("counter").addEventListener('click' , this.countUp)
  // }
  //componentDidUpdate() {
  //  //このままだと永遠にいいね数が増えるだけのためいいね数が//10超えたらカウント0に戻す。カウントアップされて再描画さ//れた後の話になる
  //  if (this.state.count >= 10) {
  //    console.log(this.state.count);
  //    this.setState({count:0})
  //  }
  //}
  //componentWillUnmount() {
  //  //リソースが解放されてサーバーの負担減らせる。 今回は目//視では確認できない
  //  document.getElementById("counter").//removeEventListener('click' , this.countUp)
  //}

  //countUp = () => {
  //  this.setState({count : this.state.count + 1})
  //}

    return (
      //JSXかく <>はReact
      <>
        {/*Articleというコンポーネント*/}
        {/*文字列のみだったら{}なしでOK*/}
        <Article title={"reactの使い方"}
         // isPublished={this.state.isPublished}
          toggle={() => this.togglePublished()}
        //count={this.state.count}
        />
        {/*<Foo />
        <Bar />*/}
        <FooBar.Foo />
        <FooBar.Bar/>
        <Hoge/>
      </>
    )
}

export default Blog;



{/*class Blog extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      isPublished: false,
      count: 0
    }
  }
functionに変更する場合はconstructorいらなくなる為削除
  */}
