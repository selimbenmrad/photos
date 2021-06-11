import React, { Component } from 'react';
import { connect } from 'react-redux';
import Desserts from "./Desserts"




class ChickenMashedPotato extends Component {

  constructor(props) {
    super(props);


  const   ListeDataEN= [{
    key:1,
    Img: "https://github.com/selimbenmrad/photos/blob/master/English/Programs/PhotoMenusProgram/Week2/Day1/ChickenMashedPotato.jpg?raw=true",
    ListImg: [
      {img: "https://github.com/selimbenmrad/Files/blob/master/icon%20vegan.png?raw=true"},
    ],
    Title:"Chicken Mashed Potato",
    Min: " 40 min",
    Ingredients: "1-Two potatoes (200g).\n2-One pepper.\n3-One small onion.\n4-One tomato.\n5-0.44 lb Chicken breast (ca 200 g).\n6-One tbsp of olive oil.\n7-Four olives.\n8-Salt and black pepper.\n9-Thyme and nutmeg.\n10-Two tbsp of milk.\n",
    Preparation: "1-Boil the potatoes in the bowl until tender (15 minutes).\n2-Combine potatoes with milk in the electric beater until creamy, then season with salt pepper, and nutmeg.\n3-Cut the vegetables lengthwise.\n4-Fry the vegetables with olive oil in the skillet until tender, then season with salt and black pepper.\n5-Season the chicken with salt; black pepper and thyme.\n6-Bake the chicken in the oven 180 °C (356 °F) (20 minutes).\n7-Put the potatoes and vegetables together, then top with chicken.\n"



  }]
  
    const ListeDataAR= [{
      key:1,
        Img: "https://github.com/selimbenmrad/photos/blob/master/English/Programs/PhotoMenusProgram/Week2/Day1/ChickenMashedPotato.jpg?raw=true",
        ListImg: [
          {img: "https://github.com/selimbenmrad/Files/blob/master/icon%20vegan.png?raw=true"},
        ],
        Title:"دجاج مع البطاطا المهروسة",
        Min: " 40 دقيقة",
        Ingredients: "1-(حوالي 200 غ) حبتي بطاطا.\n2-فلفل.\n3- بصلة صغيرة.\n4- حبة طماطم.\n5- صدر دجاج  (حوالي 200 غ).\n6-ملعقة كبيرة من زيت الزيتون.\n7-اربع حبات زيتون.\n8-ملح و فلفل اسود.\n9-زعتر و جوزة الطيب.\n10-ملعقتين كبيرتين من الحليب.\n",
        Preparation: "1-اسلق البطاطا لمدة 15 دقيقة حتى تنضج.\n2-اخفق البطاطا مع مع الحليب في خلاط كهربائي حتى تصبح كريمية، ثم تبلها بالملح و الفلفل و جوزة الطيب.\n3-قطعي الخضار بالطول.\n4-اقلي الخضار  بزيت الزيتون في مقلاة حتى تنضج ثم تبلها بالملح و الفلفل الاسود.\n5-تبل الدجاج بالملح و الفلفل الاسود و الزعتر.\n6-180°C ضع الدجاج في الفرن بدرجة حرارة (دقيقة20 لمدة).\n7-ضع البطاطا و الخضروات معا في طبق ثم ضع الدجاج فوقها.\n"



    }]
    const ListeDataFR= [{
      key:1,
        Img: "https://github.com/selimbenmrad/photos/blob/master/English/Programs/PhotoMenusProgram/Week2/Day1/ChickenMashedPotato.jpg?raw=true",
        ListImg: [
          {img: "https://github.com/selimbenmrad/Files/blob/master/icon%20vegan.png?raw=true"},
        ],
        Title:"Purée de Pommes de Terre au Poulet",
        Min: " 40 min",
        Ingredients: "1-Deux pommes de terre (200g).\n2-Un poivron.\n3-Un petit oignon.\n4-Une tomate.\n5-200 g Blanc de poulet.\n6-Une cuillère à soupe d'huile d'olive.\n7-Quatre olives.\n8-Sel et poivre noir.\n9-Thym et muscade.\n10-Deux cuillères à soupe de lait.\n",
        Preparation: "1-Faites bouillir les pommes de terre dans le bol jusqu'à ce qu'elles soient tendres (15 minutes).\n2- Combinez les pommes de terre avec le lait dans le batteur électrique jusqu'à ce qu'elles soient crémeuses, puis assaisonnez avec du sel poivre et de la muscade.\n3- Coupez les légumes dans le sens de la longueur.\n4-Faites frire les légumes avec de l'huile d'olive dans la poêle jusqu'à ce qu'ils soient tendres, puis assaisonnez avec du sel et du poivre noir.\n5- Assaisonnez le poulet avec du sel; poivre noir et thym.\n6- Cuire le poulet au four à 180 ° C(20 minutes).\n7- Mettre les pommes de terre et les légumes ensemble, puis garnir de poulet.\n"

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


export default connect(mapStateToProps, mapDispatchToProps)(ChickenMashedPotato);






