import React,{useState,useEffect} from "react";
import OneCard from "./oneCard";
import database from "./firebaseConfig";

export default function Cards() {

  const [cardArr,setCardArr]= useState([]);
  
  async function chapterFetch () {

    const res = await database.collection('Curriculim').get();
    const data = res.docs.map( (el)=>el.data())

    console.log(data)
      setCardArr([...data])

  };
useEffect(() => {
   chapterFetch();

}, [])
   function renderCard() {

    const allCards = cardArr.map(function(card, index) {
      return <OneCard card={card} key={index} />;
    });
    return allCards;
  };
  
  return (
    <div className="card">

      <div>{renderCard()}</div>
    </div>
  );
}
