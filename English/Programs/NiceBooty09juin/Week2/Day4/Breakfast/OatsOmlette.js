import React, { Component } from 'react';
import { connect } from 'react-redux';
import Desserts from "./Desserts";


class OatsOmelet extends Component {
 constructor(props) {
    super(props);
  const   ListeDataEN= [{
    key:1,
    Img: "https://github.com/selimbenmrad/photos/blob/master/English/Programs/PhotoMenusProgram/Week2/Day2/OatsSpinachOmelette.jpg?raw=true",
    ListImg: [
      {img: "https://github.com/selimbenmrad/Files/blob/master/icon%20%20vegetarian.png?raw=true"},
      {img: "https://github.com/selimbenmrad/Files/blob/master/high%20protein.png?raw=true"},
    ],
    Title:"Oats Omelet",
    Min: " 10 min",
    Ingredients: " 1- Two eggs.\n2-Six spinach leaves.\n3- Five tbsps of oats (ca 50 g).\n4- One tsp of olive oil.\n5- Pinch of salt and pepper to taste.\n",
    Preparation: " 1- Fry spinach and oil on the skillet until golden (3min).\n2- Combine the eggs and oats together.\n3- Cook the egg oats with a fried mixture for three minutes.\n4- Season the omelet with a pinch of salt and pepper.\n "
}]
 const ListeDataAR= [{
      key:1,
        Img: "https://github.com/selimbenmrad/photos/blob/master/English/Programs/PhotoMenusProgram/Week2/Day2/OatsSpinachOmelette.jpg?raw=true",
        ListImg: [
          {img: "https://github.com/selimbenmrad/Files/blob/master/icon%20%20vegetarian.png?raw=true"},
          {img: "https://github.com/selimbenmrad/Files/blob/master/high%20protein.png?raw=true"},
        ],
        Title:"البيض المخفوق بالشوفان",
        Min: " 10 دقائق",
        Ingredients: "1- بيضتان.\n2-ستة اوراق السبانخ.\n3- خمس ملاعق كبيرة من الشوفان (حوالي 50 غ).\n4-ملعقة من ويت الزيتون.\n5- رشة من الملح و الفلفل الاسود حسب المذاق.\n",
        Preparation: "1- (3 دقائق) تقلى السبانخ مع قليل من الزيت حتى تصبح ذهبية اللون.\n2- يمزج البيض و الشوفان معا .\n3-يطهى البيض بالشوفان مع الخليط لمدة ثلاث دقائق.\n4-يتبل البيض المخفوق بالملح و الفلفل الاسود.\n "



    }]
    const ListeDataFR= [{
      key:1,
      Img: "https://github.com/selimbenmrad/photos/blob/master/English/Programs/PhotoMenusProgram/Week2/Day2/OatsSpinachOmelette.jpg?raw=true",
      ListImg: [
        {img: "https://github.com/selimbenmrad/Files/blob/master/icon%20%20vegetarian.png?raw=true"},
        {img: "https://github.com/selimbenmrad/Files/blob/master/high%20protein.png?raw=true"},
      ],
      Title:"Omelette d'avoine",
      Min: " 10 min",
      Ingredients: "1-Deux œufs.\n2-Six feuilles d'épinards.\n3-Cinq cuillères à soupe d'avoine (environ 50 g).\n4-Une cuillère à café d'huile d'olive.\n5-Une pincée de sel et de poivre au goût.\n",
      Preparation: "1-Faire revenir les épinards et l'huile dans la poêle jusqu'à ce qu'ils soient dorés (3 min).\n2-Mélanger les œufs et l'avoine.\n3-Cuire les œufs d'avoine avec le mélange frit pendant trois minutes.\n4-Assaisonner l'omelette avec une pincée de sel et de poivre.\n "

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


export default connect(mapStateToProps, mapDispatchToProps)(OatsOmelet);






