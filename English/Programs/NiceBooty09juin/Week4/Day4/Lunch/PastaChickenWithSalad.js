import React, { Component } from 'react';
import { connect } from 'react-redux';
import Desserts from "./Desserts"




class DarckChocolatMandarins extends Component {

  constructor(props) {
    super(props);


  const   ListeDataEN= [{
    key:1,
    Img: "https://github.com/selimbenmrad/photos/blob/master/English/Programs/PhotoMenusProgram/Week1/Day1/PastaChickenTomatoes.jpg?raw=true",
    ListImg: [
      {img: "https://github.com/selimbenmrad/Files/blob/master/icon%20vegan.png?raw=true"},
    ],
    Title:"Pasta Chicken Tomatoes",
    Min: " 30 min",
    Ingredients: "1-Two cups of lettuce (114g).\n2- Half cup of pomegranate (80g).\n3- 150 g of cooked whole-wheat pasta.\n4- 100 g tomatoes.\n5-One tbsp of parmesan cheese (10g).\n6-  One chicken breast ( 150g).\n7- One tbsp olive oil (20 ml).\n",
    Preparation: "1-Preheat the oven to 180 °C (356 °F).\n2- Season the chicken with salt and black pepper and put it in the oven for 15 min until browned. \n3-Meanwhile, mix the tomatoes, garlic, and olive oil in a blender.\n4- Transfer the tomato mixture into a pot, add a cup of water, salt, and paprika, and let it cook over medium heat until the sauce thickens.\n5- Cook the pasta in boiling water, until soft  (seven minutes).\n6- Drain the pasta from water, mix it with the sauce and the chicken, and put the lettuce and pomegranate salad aside.\n"



  }]
  
    const ListeDataAR= [{
      key:1,
      Img: "https://github.com/selimbenmrad/photos/blob/master/English/Programs/PhotoMenusProgram/Week1/Day1/PastaChickenTomatoes.jpg?raw=true",
      ListImg: [
        {img: "https://github.com/selimbenmrad/Files/blob/master/icon%20vegan.png?raw=true"},
      ],
      Title:"  معكرونة الدجاج و الطماطم",
      Min: " 30 دقيقة",
      Ingredients: "1- (كوبين من الخس، مقطع(100 غ.\n2- نصف كوب من الرمان (80 غ) .\n3-150 غ (بعد الطبخ)المكرونة المصنوعة من القمح الكامل .\n4- 100 غ  من الطماطم.\n5-ملعقة كبيرة من جبن البارميزان (10 غ ).\n6- صدر دجاج ( 150غ).\n7- ملعقة من زيت الزيتون (20 مل).\n",
      Preparation: "1- سخن الفرن إلى 180 درجة مئوية .\n2- تبل الدجاج بالملح والفلفل الأسود وضعه في الفرن لمدة 15 دقيقة حتى يصبح لونه ذهبياً .\n3-في الأثناء ، اخلط الطماطم والثوم وزيت الزيتون في الخلاط.\n4- انقل خليط الطماطم في قدر وأضف كوبًا من الماء والملح والبابريكا واتركها تطهى على نار متوسطة حتى  تتكاثف الصلصة .\n5- إطهى المعكرونة في الماء مغلي ، حتى تصبح طرية (سبع دقائق).\n6- صفي المعكرونة من الماء ، واخلطيها مع الصلصة والدجاج ، وضع سلطة الخس والرمان جانبًا.\n"



    }]
    const ListeDataFR= [{
      key:1,
      Img: "https://github.com/selimbenmrad/photos/blob/master/English/Programs/PhotoMenusProgram/Week1/Day1/PastaChickenTomatoes.jpg?raw=true",
      ListImg: [
        {img: "https://github.com/selimbenmrad/Files/blob/master/icon%20vegan.png?raw=true"},
      ],
      Title:" Pâtes Tomates Poulet",
      Min: "30 min",
      Ingredients: "1-Deux tasses de laitue , émincé (100g).\n2- Une dmi-tasse de grenade (80 g).\n3- 150 g de pâtes de blé entier (cuites).\n4- 100 g de tomate.\n5-une cuillére à soupe de fromage parmesan (10g).\n6- Blanc de poulet ( 150g).\n7- Une cuilléres à soupe d'huile d'olive  (20 ml).\n",
      Preparation: "1-Préchauffer le four à 180 °C .\n2- Assaisonner le poulet avec du sel et du poivre noir et le mettre au four pendant 15 min jusqu'à ce qu'il soit doré.\n3- Pendant ce temps, mélangez les tomates, l'ail et l'huile d'olive dans un mixeur.\n4- Transférez le mélange de tomates dans une casserole, ajoutez une tasse d'eau, du sel et du paprika, et laissez cuire à feu moyen jusqu'à ce que la sauce épaissit.\n5- Cuire les pâtes dans l'eau bouillante, jusqu'à ce qu'elles soient tendres (sept minutes)\ n6- Égoutter les pâtes de l'eau, les mélanger avec la sauce et le poulet, et mettre de côté la salade de laitue et de grenade.\n"

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


export default connect(mapStateToProps, mapDispatchToProps)(DarckChocolatMandarins);






