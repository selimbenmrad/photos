import React, { Component } from 'react';
import { connect } from 'react-redux';
import Desserts from "./Desserts"




class TunaLentilSalad extends Component {

  constructor(props) {
    super(props);


  const   ListeDataEN= [{
    key:1,
    Img: "https://github.com/selimbenmrad/photos/blob/master/English/Programs/PhotoMenusProgram/Week1/Day2/TunaLentils.jpg?raw=true",
    ListImg: [
      {img: "https://github.com/selimbenmrad/Files/blob/master/icon%20vegan.png?raw=true"},
    ],
    Title:"Tuna Lentil Salad",
    Min: " 20-30 min",
    Ingredients: "1- One Green capsicum.\n2-One small onion.\n3-One tbsp of olive oil.\n4- Lentils 0,44 lb (ca.200 g).\n5 Pinch of salt and black pepper to taste.\n6- Two tbsps of parsley.\n7- Tuna  0,17 lb (ca.80 g).\n",
    Preparation: "1- Cut the vegetables into slices.\n2- Grill the vegetables(10 minutes) and season with salt,black pepper,and olive oil.\n3- Boil the lentil until tender (10 minutes).\n4- Mix the grilled  vegetables and lentils together.\n5- Top the plate with tuna and sprinkle parsley.\n"



  }]
  
    const ListeDataAR= [{
      key:1,
      Img: "https://github.com/selimbenmrad/photos/blob/master/English/Programs/PhotoMenusProgram/Week1/Day2/TunaLentils.jpg?raw=true",
      ListImg: [
        {img: "https://github.com/selimbenmrad/Files/blob/master/icon%20vegan.png?raw=true"},
      ],
      Title:"سلطة العدس مع التونة ",
      Min: " 20-30 دقيقة",
      Ingredients: "1- حبة فلفل اخضر.\n2- حبة بصل ضغيرة.\n3-ملعقة كبيرة من زيت الزيتون.\n4- عدس  200 غ.\n5-رشة ملح و فلفل اسود حسب المذاق.\n6- ملعقتان كبيرتان من البقدونس.\n7- تونة 80 غ.\n",
      Preparation: "1- قطع الخضر الى قطع.\n2- تبل الخضار بالملح و الفلفل الاسود و زيت الزيتون و اشويها لمدة 10 دقائق.\n3-اسلق العدس لمدة 10 دقائق حتى يصبح طريا.\n4-امزجي العدس و الخضروات المشوية معا.\n5-ضع التونة فوق الخليط و رش قليل من البقدونس.\n"



    }]
    const ListeDataFR= [{
      key:1,
      Img: "https://github.com/selimbenmrad/photos/blob/master/English/Programs/PhotoMenusProgram/Week1/Day2/TunaLentils.jpg?raw=true",
      ListImg: [
        {img: "https://github.com/selimbenmrad/Files/blob/master/icon%20vegan.png?raw=true"},
      ],
      Title:"Salade de lentilles au thon",
      Min: "20-30 min",
      Ingredients: "1- Un poivron vert.\n2- Un petit oignon.\n3- Une cuillère à soupe d'huile d'olive.\n4- 200 g Lentilles.\n5-Pincée de sel et poivre noir au goût.\n6- Deux cuillères à soupe de persil.\n7- 80 g de thon.\n",
      Preparation: "1- couper les legumes en tranches.\n2- Griller les légumes (10 minutes) et assaisonner avec du sel, du poivre noir et de l'huile d'olive.\n3- Faire bouillir les lentilles jusqu'à ce qu'elles soient tendres (10 minutes).\n4- Mélanger les légumes grillés et les lentilles ensemble.\n5- Garnir l'assiette avec thon et saupoudrer de persil.\n"

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


export default connect(mapStateToProps, mapDispatchToProps)(TunaLentilSalad);






