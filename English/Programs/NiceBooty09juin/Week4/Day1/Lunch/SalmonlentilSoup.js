import React, { Component } from 'react';
import { connect } from 'react-redux';
import Desserts from "./Desserts"




class SalmonLentilSoup extends Component {

  constructor(props) {
    super(props);


  const   ListeDataEN= [{
    key:1,
    Img: "https://github.com/selimbenmrad/photos/blob/master/English/Diet/PhotoLunch/PumpkinOmelette.jpg?raw=true",
    ListImg: [
      {img: "https://github.com/selimbenmrad/Files/blob/master/icon%20%20vegetarian.png?raw=true"},
      {img: "https://github.com/selimbenmrad/Files/blob/master/high%20protein.png?raw=true"},
    ],
    Title:"Salmon Lentil Soup",
    Min: "45 min",
    Ingredients: "1-  lentils  lb (ca.80 g).\n2- One slice salmon 0.22 lb (ca.100 g).\n3- Pinch of salt, black pepper, cumin.\n4- One tsp of 4 spices.\n5- One tsp Thyme.\n6- One tsp of olive oil  .\n7- Two cups of lettuce (100g).\n8- One slice of pineapple (90g).\n",
    Preparation: "1- Preheat the oven to 180 °C ( 356°F).\n2- Season the salmon with salt and pepper and thyme.\n3- Put the salmon in the oven for 15 minutes.\n4- Boil the lentil in a bowl until tender (30 minutes).\n5- Season the lentil with salt and pepper, cumin, four spices, and olive oil.\n6- Serve lentil soup , and pineapple green salad with salmon.\n"



  }]
  
    const ListeDataAR= [{
      key:1,
      Img: "https://github.com/selimbenmrad/photos/blob/master/English/Diet/PhotoLunch/PumpkinOmelette.jpg?raw=true",
      ListImg: [
        {img: "https://github.com/selimbenmrad/Files/blob/master/icon%20%20vegetarian.png?raw=true"},
        {img: "https://github.com/selimbenmrad/Files/blob/master/high%20protein.png?raw=true"},
      ],
      Title:"شوربة العدس و السلمون",
      Min: "45 دقيقة",
      Ingredients: "1- عدس  غ80.\n2-شريحة سلمون غ 100.\n3- رشة ملح و فلفل اسود و كمون.\n4- ملعقة صغيرة من اربع بهارات .\n5- ملعقة صغيرة من الزعتر.\n6-ملعقة صغيرة زيت زيتون.\n7- كوبان من الخس (100 غ).\n8- شريحة واحدة من الأناناس (90 غ).\n",
      Preparation: "1-  180°C سخن الفرن على درجة حرارة( 356°F).\n2-تبل شريحة السلمون بالملح و الفلفل الاسود و الزعتر.\n3-ضع شريحة السلمون في الفرن لمدة 15 دقيقة.\n4-اغلي العدس في الماء حتى ينضج (30 دقيقة).\n5- تبل العدس بالملح و الفلفل الاسود الكمون و الزعتر وزيت زيتون.\n6-قدمي شوربة العدس وسلطة الأناناس الخضراء مع السلمون.\n"



    }]
    const ListeDataFR= [{
      key:1,
      Img: "https://github.com/selimbenmrad/photos/blob/master/English/Diet/PhotoLunch/PumpkinOmelette.jpg?raw=true",
      ListImg: [
        {img: "https://github.com/selimbenmrad/Files/blob/master/icon%20%20vegetarian.png?raw=true"},
        {img: "https://github.com/selimbenmrad/Files/blob/master/high%20protein.png?raw=true"},
      ],
      Title:"Soupe de lentille et salmon",
      Min: "45 min",
      Ingredients: "1- Une tasse de lentilles  (environ 80 g).\n2-Une tranche de saumon (environ 100 g).\n3-Une pincée de sel, de poivre noir, de cumin.\n4-Une cuillère à café de quatre- épices.\n5-Une cuillère à café de thym.\n6- Une petite  cuillère d'huile d'olive..\n7-Deux tasses de laitue (100g).\n8- Une tranche d'ananas (90g).\n",
      Preparation: "1- Préchauffer le four à 180 ° C .\n2- Assaisonner avec du sel, du poivre et du thym.\n3-Mettre le saumon au four pendant 15 minutes.\n4-Faire bouillir les lentilles dans un bol jusqu'à ce qu'elles soient tendres (30 minutes).\n5-Assaisonner les lentilles avec du sel et du poivre, du cumin, quatre épices et huile d'olive.\n6-Servir la soupe de lentilles et la salade verte d'ananas avec du saumon.\n"


    }]


    var Data= null;
      
    if ( this.props.language == 'Arabic'){
      Data = ListeDataAR;
    }
    else if ( this.props.language == 'French'){
      Data = ListeDataFR;
    }
    else {
      Data = ListeDataEN;
    }


    this.state = {
      ListeSousHeader: [{
        Page: this.props.ChangePageToRenderDiet,
        NamePage: < Desserts />,
        ChangeHeader: this.props.ChangeHeaderDiet,
        Value: true,
        Name: Data.map(i=>i.Title),
      }],
    
      ListeData:Data,
    };
    
  }

 


  render() {
    const {ReduxManagedDiet}=this.props;
    return (


      <ReduxManagedDiet  

      ListeSousHeader={this.state.ListeSousHeader}
      ListeData={this.state.ListeData}
      
      />

  )



  }

}







function mapStateToProps(state) {

  return {
    pageToRenderDiet: state.pageToRenderDiet,
    showHeaderDiet: state.ChangeHeaderDiet,
    ReduxManagedDiet:state.ReduxManagedDiet,
    language: state.language,
  }
};


function mapDispatchToProps(dispatch) {
  return {
    // dispatching plain actions
    ChangeHeaderDiet: (value) => dispatch({ type: "ChangeHeaderDiet", data: value }),
    ChangePageToRenderDiet: (page) => dispatch({ type: 'ChangePageToRenderDiet', data: page })

  }
}


export default connect(mapStateToProps, mapDispatchToProps)(SalmonLentilSoup);






