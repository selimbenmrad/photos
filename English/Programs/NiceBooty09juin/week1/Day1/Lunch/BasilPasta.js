import React, { Component } from 'react';
import { connect } from 'react-redux';
import Desserts from "./Desserts"




class BasilPasta extends Component {

  constructor(props) {
    super(props);


  const   ListeDataEN= [{
    key:1,
    Img: "https://github.com/selimbenmrad/photos/blob/master/English/Programs/PhotoMenusProgram/Week2/Day2/BasilPasta.jpg?raw=true",
    ListImg: [
      {img: "https://github.com/selimbenmrad/Files/blob/master/icon%20vegan.png?raw=true"},
    ],
    Title:"Basil Pasta",
    Min: "30 min",
    Ingredients: "1-Two carrots.\n2- 0.33 lb (150 g) lettuce.\n3-One cup of whole wheat pasta (ca. 150 g cooked).\n4-Half cup of fresh basil (100 g).\n5-Two tbsps of olive oil (20 ml).\n6-One garlic.\n7-Chicken breast 0.33 lb (ca 150).\n8-Salt, black pepper, and four spice.\n",
    Preparation: "1-Mix the basil, olive oil, and garlic together in the blender together.\n2-Chop the chicken lengthwise.\n3-Put the basil mixture and the chicken in the skillet over medium heat (2 min).\n4-Season the mixture with salt, black pepper, and four spices; a half cup of water, keep in heat for 15 min.\n5-Boil the pasta in a large pot until tender.\n6-Add the pasta to the sauce, keep it on heat for three minutes.\n7-For the salad: cut the lettuce; carrot, then season with salt and black pepper.\n"



  }]
  
    const ListeDataAR= [{
      key:1,
        Img: "https://github.com/selimbenmrad/photos/blob/master/English/Programs/PhotoMenusProgram/Week2/Day2/BasilPasta.jpg?raw=true",
        ListImg: [
          {img: "https://github.com/selimbenmrad/Files/blob/master/icon%20vegan.png?raw=true"},
        ],
        Title:"باستا الريحان",
        Min: "30 دقيقة",
        Ingredients: "1-جزرتين.\n2- خس( حوالي 150غ).\n3-كوب واحد من معكرونة القمح الكامل ( حوالي 150غ مطبوخ ).\n4-نصف كوب من الريحان الطازج\n5- (20مل )ملعقتان كبيرتان من زيت الزيتون.\n6-حبة ثوم.\n7- صدر دجاج ( حوالي 150غ).\n8-ملح ،فلفل اسود و البهارات الاربع.\n",
        Preparation: "1-امزج الريحان و و زيت الزيتون و الثوم معا في خلاط.\n2- قطع الدجاج بالطول.\n3- ضع خليط الريحان و الدجاج في مقلاة على نار متوسطة لمدة دقيقتان.\n4- تبل الخليط بالملح و الفلف الاسودو اربع بهارات ، نصف كوب ماء،اتركه على النار لمدة 15 دقيقة.\n5-تُسلق المعكرونة في قدر حتى تنضج .\n6-أضيفي المعكرونة إلى الصلصة واتركيها على النار لمدة ثلاث دقائق.\n7- لتحضير السلطة ، قطع الخس و الجزر ثم تبله بالملح و الفلف الاسود.\n"



    }]
    const ListeDataFR= [{
      key:1,
        Img: "https://github.com/selimbenmrad/photos/blob/master/English/Programs/PhotoMenusProgram/Week2/Day2/BasilPasta.jpg?raw=true",
        ListImg: [
          {img: "https://github.com/selimbenmrad/Files/blob/master/icon%20vegan.png?raw=true"},
        ],
        Title:"Pâtes au basilic",
        Min: "30 min",
        Ingredients: "1-Deux carottes.\n2-150 g laitue.\n3-Une tasse de pâtes de blé entier (environ 150 g cuites).\n4-Une demi-tasse de basilic frais.\n5-Deux cuillères à soupe d'huile d'olive (20ml).\n6-Un ail.\n7-150 g Blanc de poulet.\n8-Sel, poivre noir et quatre épices.\n",
        Preparation: "1-Mélangez ensemble le basilic, l'huile d'olive et l'ail dans le mixeur.\n2-Hachez le poulet dans le sens de la longueur.\n3-Mettez le mélange de basilic et le poulet dans la poêle à feu moyen (2 min).\n4-Assaisonnez le mélange avec du sel, du poivre noir et quatre épices; une demi-tasse d'eau, garder au chaud pendant 15 min.\n5-Faire bouillir les pâtes dans une grande casserole jusqu'à ce qu'elles soient tendres.\n6-Ajouter les pâtes à la sauce, laisser chauffer pendant trois minutes.\n7-Pour la salade : couper la laitue; carotte, puis assaisonner de sel et de poivre noir.\n"

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


export default connect(mapStateToProps, mapDispatchToProps)(BasilPasta);






