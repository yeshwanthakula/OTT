import React from 'react'
import styled from 'styled-components'
import Imgsli from './Imgsli';
import Newest from './Newest';
import Recommends from './Recommends';
import Trending from './Trending';
import Viewer from './Viewer';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import db from '../firebase';
import {selectUserName} from '../features/users/Userslice'
import { setmovie } from '../features/movie/movieSlice';
import Original from './Original';
import Telugu from './Telugu';
import Bollywood from './Bollywood';
import Tamil from './Tamil';
// eslint-disable-next-line

const Home = () => {




// const userSwitch =(doc)=>{
 
//   switch(doc.data().type){
//    case "recommend":
//     recommends = [...recommends, { id: doc.id, ...doc.data() }];
//      break;

//      case "new":
//      newm = [...newm, { id: doc.id, ...doc.data() }];
//      break;

//      case "original":
//       originals = [...originals, { id: doc.id, ...doc.data() }];
//       break;

//     case "trending":
//       trending = [...trending, { id: doc.id, ...doc.data() }];
//       break;





//    default:
//      return [];

//   }


// }

// useEffect(() => {
//   console.log("hello");
//   db.collection("movies").onSnapshot((snapshot) => {
//     snapshot.docs.map((doc)=> {
//     return userSwitch(doc);
      
//     });

//     dispatch(
//       setmovie({
//         recommend: recommends,
//         new: newm,
//         original: originals,
//         trending: trending,
//       })
//     );
//   });
// }, [userName]);
const dispatch = useDispatch();

const userName = useSelector(selectUserName);

useEffect(() => {
  
let recommends =[];
let newm=[];
let trending =[];
let telugu=[];
let bollywood =[];
let tamil=[];

let originals=[];
  
  db.collection("movies").onSnapshot((snapshot) => {
    snapshot.docs.map((doc) => {
      console.log(recommends);
      switch (doc.data().type) {
        case "recommend":
          recommends.push({id:doc.id , ...doc.data()});
          break;

        case "new":
          newm.push({id:doc.id , ...doc.data()});
          break;

        case "original":
          originals.push({id:doc.id , ...doc.data()});;
          break;

        case "trending":
          trending.push({id:doc.id , ...doc.data()});
          break;
          case "Telugu":
            telugu.push({id:doc.id , ...doc.data()});
            break;

            case "bollywood":
            bollywood.push({id:doc.id , ...doc.data()});
            break;

            case "tamil":
            tamil.push({id:doc.id , ...doc.data()});
            break;

         default:
           return []; 
      }
      return [];
    });

    dispatch(
      setmovie({
        recommend: recommends,
        new: newm,
        original: originals,
        trending: trending,
        telugu:telugu,
        bollywood:bollywood,
        tamil:tamil,
      })
    );
  });
}, [userName]);


// useEffect(() => {
//   console.log("hello");
//   db.collection("movies").onSnapshot((snapshot) => {
//     snapshot.docs.map((doc) => {
//       console.log(recommends);
//       switch (doc.data().type) {
//         case "recommend":
//           recommends = [...recommends, { id: doc.id, ...doc.data() }];
//           break;

//         case "new":
//           newDisneys = [...newDisneys, { id: doc.id, ...doc.data() }];
//           break;

//         case "original":
//           originals = [...originals, { id: doc.id, ...doc.data() }];
//           break;

//         case "trending":
//           trending = [...trending, { id: doc.id, ...doc.data() }];
//           break;
//       }
//     });

//     dispatch(
//       setMovies({
//         recommend: recommends,
//         newDisney: newDisneys,
//         original: originals,
//         trending: trending,
//       })
//     );
//   });
// }, [userName]);





    return (
        <Container>
            <Imgsli></Imgsli>
            <Viewer></Viewer>
            
            <Telugu></Telugu>
            <Tamil></Tamil>
            <Recommends></Recommends>
            <Bollywood></Bollywood>
            <Newest></Newest>
            <Trending></Trending>
            <Original></Original>
            
            
           
            
        </Container>
    )
}

const Container = styled.main`
  position: relative;
  min-height: calc(100vh - 250px);
  overflow-x: hidden;
  display: block;
  top: 72px;
  padding: 0 calc(3.5vw + 5px);
  &:after {
    background: url("/images/home-background.png") center center / cover
      no-repeat fixed;
    content: "";
    position: absolute;
    inset: 0px;
    opacity: 1;
    z-index: -1;
  }
`;




export default Home;
