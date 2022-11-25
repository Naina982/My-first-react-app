import React from 'react';
import  ReactDOM  from 'react-dom';
//css add
import './index.css'
// function Greeting(){
//   // return <h4> This is Naina and it is my first component.</h4>;
//   return React.createElement('h1',{},'hello world')

// }

// function BookList(){
//   return (
//     <section className='booklist'>
//       <Book/>
//       <Book/>
//       <Book/>
//       <Book/>
//       <Book/>
//     </section>
//   );
// };
// const Book=()=>{
//   return(
//     <article className='book'>
//       <Image></Image>
//       <Title/>
//       <Author/>
//     </article>
//   )
// }
// const Image=()=>(
//     <img 
//     src='https://m.media-amazon.com/images/I/51QnuLIY2uL._SX322_BO1,204,203,200_.jpg'
//     alt='book list plz wait for loading'
//     />
// );
// const Title=()=> <h1>The Power of Your Subconscious Mind</h1>;
// const Author=()=> <h4 style={{color:'#617d98', fontSize:'0.85rem',marginTop:'0.25rem'}}>Joseph Murphy </h4>

// const Author="Joseph Murphy"
// const Book=()=>{
//   const Title='The Power of Your Subconscious Mind '
// return(
//   <article className='book'>
//     <img 
//      src='https://m.media-amazon.com/images/I/51QnuLIY2uL._SX322_BO1,204,203,200_.jpg'
//      alt='book list plz wait for loading'
//     />
//     <h1>{Title}</h1>
//     <h4>{Author.toUpperCase()}</h4>
//     <p>{2+2}</p>
//   </article>
// )
// }

// -----------------Another way to create different multiple book is ................

// const firstbook={
//   img: 'https://m.media-amazon.com/images/I/51QnuLIY2uL._SX322_BO1,204,203,200_.jpg',
//   title:'The Power of Your Subconscious Mind',
//    author: 'Joseph Murphy',

// };

// const secondbook={
//    img: 'https://images-eu.ssl-images-amazon.com/images/I/91bYsX41DVL._AC_UL600_SR600,400_.jpg',
//   title:'Atomic Habits',
//    author: 'James Clear',

// };
// const thirdbook={
//    img: 'https://images-eu.ssl-images-amazon.com/images/I/71CtcAltv+L._AC_UL600_SR600,400_.jpg',
//   title:'The Simplest Book For Technical Analysis | Stock Market',
//    author: 'Mukul Agrawal',

// };
// const fourthbook={
//    img: 'https://images-eu.ssl-images-amazon.com/images/I/61ZPDQOjw-L._AC_UL600_SR600,400_.jpg',
//   title:'Do It Today: Overcome procrastination,',
//    author: 'Darius Foroux',

// };
// const fifthbook={
//    img: 'https://images-eu.ssl-images-amazon.com/images/I/81ZLwAwD-ML._AC_UL600_SR600,400_.jpg',
//   title:'Rich Dad Poor Dad',
//    author: 'Robert T. Kiyosaki',

// };

// function BookList(){
//   return(
//     <section className='booklist'>
//       <Book 
//       img={firstbook.img}
//       title={firstbook.title}
//       author={firstbook.author}
//       >
//       {/* <p> The Power of Your Subconscious Mind is one of the its ideas have changed the lives of many all over the world.</p> */}

//       </Book>
    

//        <Book 
//       img={secondbook.img}
//       title={secondbook.title}
//       author={secondbook.author}
//       />

//        <Book 
//       img={thirdbook.img}
//       title={thirdbook.title}
//       author={thirdbook.author}
//       />

//        <Book 
//       img={fourthbook.img}
//       title={fourthbook.title}
//       author={fourthbook.author}
//       />

//        <Book 
//       img={fifthbook.img}
//       title={fifthbook.title}
//       author={fifthbook.author}
//       />

//         <Book 
//       img={fifthbook.img}
//       title={fifthbook.title}
//       author={fifthbook.author}
//       />


//     </section>
//   )
// }



import {books} from './book'

function BookList(){
  return(
    <section className='booklist'>
      {books.map((book)=>{
        // const {img,title,author}=book;
        return <Book key={book.id} book={book}></Book>
      })}
    </section>
  )
}

const Book=(props)=>{
  //attribute eventHandler, onclickand onMouseOver
  const clickHandler=()=>{
    alert('hello world');
  }
  const { img,title,author }=props.book;
  return(
    <article className='book'>
      <img src={img} alt='wait for download'/>
      <h1>{title}</h1>
      <h4>{author}</h4>
      <button type='button' onClick={clickHandler}>Know more</button>
      
    </article>
  )
}



ReactDOM.render(<BookList/>, document.getElementById('root'))