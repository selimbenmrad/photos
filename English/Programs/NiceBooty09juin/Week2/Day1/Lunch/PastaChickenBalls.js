import React, { Component } from 'react';
import { connect } from 'react-redux';
import Desserts from "./Desserts"




class PastaChickenBalls extends Component {

  constructor(props) {
    super(props);


  const   ListeDataEN= [{
    key:1,
    Img: "https://github.com/selimbenmrad/Files/blob/master/English/diet/lunchphoto/AutumVeggieSalad.jpg?raw=true",
    ListImg: [
      {img: "https://github.com/selimbenmrad/Files/blob/master/icon%20vegan.png?raw=true"},
    ],
    Title:"Pasta Chicken Balls",
    Min: " 40 min",
    Ingredients: "1-0.441 lb (ca.200 g) of minced chicken breast.\n2-0.441 lb (ca.200 g) of whole wheat pasta.\n3-0.441 lb (ca.200 g) of Lettuce.\n4-0.066 lb (ca.30 g) of feta low-fat.\n5-Three tomatoes (100g).\n6-Three basil leaves.\n7-Two garlic.\n8-Salt,  pepper.\n9- One tbsp olive oil.\n",
    Preparation: "1-Blend the tomatoes  with basil, olive oil and garlic together.\n2-Cook tomato mixture in the skillet for 15 minutes.\n3-Combine the chicken, salt black pepper, and 4 spices.\n4-Out of chicken mixture, form balls.\n5-Add the chicken balls to the sauce, then cook until the sauce thicken and chicken balls browned.\n6-Cook the pasta in salted water until tender.\n7-Combine the pasta with chicken balls tomato sauce.\n8-Serve the pasta accompanied by lettuce Feta salad.\n"



  }]
  
    const ListeDataAR= [{
      key:1,
        Img: "https://github.com/selimbenmrad/Files/blob/master/English/diet/lunchphoto/AutumVeggieSalad.jpg?raw=true",
        ListImg: [
          {img: "https://github.com/selimbenmrad/Files/blob/master/icon%20vegan.png?raw=true"},
        ],
        Title:"باستا كرات الدجاج",
        Min: " 30 دقيقة",
        Ingredients: "1- 200 غ من صدر دجاج مفروم.\n2-200 غ من معكرونة قمح كامل.\n3- 200 غ من الخس.\n4-30 غ من جبن فيتا.\n5- (100غ) ثلاث حبات طماطم.\n6-ثلاث اوراق الريحان.\n7-2 ثوم.\n8-ملح،فلفل أسود .\n9- ملعقة كبيرة من زيت الزيتون.\n",
        Preparation: "1-اخلطي الطماطم مع الريحان وزيت الزيتون والثوم معًا.\n2-يُطهى مزيج الطماطم في المقلاة لمدة 15 دقيقة.\n3-يمزج الدجاج و الملح و الفلفل الاسود و اربع بهارات.\n4-شكلي كرات من خليط الدجاج.\n5-تُضاف كرات الدجاج إلى الصلصة ، ثم تُطهى حتى تتكاثف الصلصة وتتحول كرات الدجاج إلى اللون البني.\n6-تُطهى المعكرونة في ماء مملح حتى تنضج.\n7-تُمزج المعكرونة مع كرات الدجاج بصلصة الطماطم.\n8-قدمي المعكرونة مع سلطة الخس و جبن فيتا.\n"



    }]
    const ListeDataFR= [{
      key:1,
      Img: "https://github.com/selimbenmrad/Files/blob/master/English/diet/lunchphoto/AutumVeggieSalad.jpg?raw=true",
      ListImg: [
        {img: "https://github.com/selimbenmrad/Files/blob/master/icon%20vegan.png?raw=true"},
      ],
      Title:"Pâtes a Boules de poulet",
      Min: " 30 min",
      Ingredients: "1-200 g de blanc de poulet hachée.\n2- 200 g de pâtes de blé entier.\n3- 200 g de laitue.\n4-30 g de fromage feta.\n5-Trois tomates.\n6-Trois feuilles de basilic.\n7-Deux ail.\n8-Sel, poivre.\n9-une cuillère à soupe d'huile d'olive.\n",
      Preparation: "1-Mélanger les tomates avec le basilic, l'huile d'olive et l'ail.\n2-Cuire le mélange de tomates dans la poêle pendant 15 minutes.\n3- Mélanger le poulet, le sel, le poivre noir et 4 épices.\n4-Hors du mélange de poulet, former des boules.\n5- Ajouter les boulettes de poulet à la sauce, puis cuire jusqu'à ce que la sauce épaississe et les boulettes de poulet dorées.\n6- Faites cuire les pâtes dans de l'eau salée jusqu'à ce qu'elles soient tendres.\n7-Combinez les pâtes avec des boulettes de poulet sauce tomate.\n8-Servez les pâtes accompagnées d'une salade de laitue Feta.\n"


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


export default connect(mapStateToProps, mapDispatchToProps)(PastaChickenBalls);






