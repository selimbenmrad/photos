import React, { Component } from 'react';
import { connect } from 'react-redux';
import Desserts from "./Desserts"




class ChickenBallsRice extends Component {

  constructor(props) {
    super(props);


  const   ListeDataEN= [{
    key:1,
    Img: "https://github.com/selimbenmrad/photos/blob/master/English/Diet/PhotoLunch/PumpkinOmelette.jpg?raw=true",
    ListImg: [
      {img: "https://github.com/selimbenmrad/Files/blob/master/icon%20%20vegetarian.png?raw=true"},
      {img: "https://github.com/selimbenmrad/Files/blob/master/high%20protein.png?raw=true"},
    ],
    Title:"Chicken balls rice with orange salad and lettuce",
    Min: "40 min",
    Ingredients: "1-One small orange.\n2-Three  almonds.\n3-Lettuce (150g).\n4-Spoonful of olive oil.\n5- 0.33 lb (150 g) of minced chicken breast.\n6-0.22 (100 g) of tomatoes.\n7-0.33 lb (150 g) of BASMATI rice.\n8-3 garlic cloves.\n9-Two leaves of laurel.\n10-Salt, black pepper.\n11- One tsp of Turmeric, allspices.\n",
    Preparation: "1- Blend tomatoes with half a spoonful of olive oil and garlic.\n2- In a saucepan and on low heat, place the tomato mixture with two cups of water and season with salt, black pepper, four spices with two leaves of laurel.\n3- season the chicken with salt, and  black pepper and  allspices.\n4- Shape chicken balls\n5- Add the chicken balls to the sauce, then cook until the sauce thickens and the chicken balls turn brown.\n6- Put the rice in boiling water with a little turmeric for 15 Minutes.\n7- Drain the rice from the water and season with salt and black pepper.\n8- Chop the lettuce and oranges for the salad and add the almonds.\n9- Place the rice in a bowl and add the sauce with the chicken balls.\n"



  }]
  
    const ListeDataAR= [{
      key:1,
      Img: "https://github.com/selimbenmrad/photos/blob/master/English/Diet/PhotoLunch/PumpkinOmelette.jpg?raw=true",
      ListImg: [
        {img: "https://github.com/selimbenmrad/Files/blob/master/icon%20%20vegetarian.png?raw=true"},
        {img: "https://github.com/selimbenmrad/Files/blob/master/high%20protein.png?raw=true"},
      ],
      Title:"الأرز بكرات الدجاج مع سلطة البرتقال والخس",
      Min: "40 دقيقة ",
      Ingredients: "1- حبة برتقال صغيرة .\n2-ثلاث حبات من اللوز.\n3- (حوالي 150 غ) خس.\n4- ملعقة من زيت الزيتون.\n5- 150 غ من صدر الدجاج المفروم.\n6-100 غ من الطماطم.\n7-150 غ من الأرز البسمتي.\n8-3 فصوص الثوم.\n9-ورقتين من الغار.\n10-ملح ,فلفل اسود.\n11- كركم ,أربعة بهارات.\n",
      Preparation: "1- قم برحي الطماطم مع نصف ملعقة من زيت الزيتون والثوم.\n2-في قدر وعلى نار هادئة قم بوضع خليط الطماطم مع كأسين من الماء وتبل بالملح الفلفل الأسود، أربعة بهارات مع ورقتين من الغار.\n3-يمزج الدجاج و الملح و الفلفل الاسود و اربع بهارات.\n4-شكلي كرات من خليط الدجاج.\n5-تُضاف كرات الدجاج إلى الصلصة ، ثم تُطهى حتى تتكاثف الصلصة وتتحول كرات الدجاج إلى اللون البني.\n6-قم بوضع الأرز في ماء مغلي مع القليل من الكركم  لمدة 15 دقيقة.\n7-قم بتصفية الأرز من الماء وتتبل بالملح الفلفل الاسود.\n8-قم بتقطيع الخس والبرتقال لسلطة و أضف حبات اللوز.\n9-قم بوضع الأرز في وعاء و أضف فوقه الصلصة مع كرات الدجاج.\n"



    }]
    const ListeDataFR= [{
      key:1,
        Img: "https://github.com/selimbenmrad/photos/blob/master/English/Diet/PhotoLunch/PumpkinOmelette.jpg?raw=true",
        ListImg: [
          {img: "https://github.com/selimbenmrad/Files/blob/master/icon%20%20vegetarian.png?raw=true"},
          {img: "https://github.com/selimbenmrad/Files/blob/master/high%20protein.png?raw=true"},
        ],
        Title:"Riz aux boulettes de poulet avec salade d'orange et laitue",
        Min: "40 min",
        Ingredients: "1- Une orange ( petite taille).\n2- Trois amandes.\n3- laitue (150g).\n4- Cuillerée d'huile d'olive.\n5- 150 g de blanc de poulet hachée.\n6- 100 g de tomates.\n7- 150 g de riz BASMATI.\n8- 3 gousses d'ail.\n9- Deux feuilles de laurier.\n10- Sel, poivre noir.\n11- Curcuma, quatre-épices.\n",
        Preparation: "1- Mélanger les tomates avec une demi-cuillerée d'huile d'olive et l'ail (par un mixeur).\n2- Dans une casserole et à feu doux, placer le mélange de tomates avec deux tasses d'eau et assaisonner avec du sel, du poivre noir, quatre épices avec deux feuilles de laurier.\n3- Saisonner le poulet avec du sel et de poivre noir et quatre-épices.\n4- Façonner les boulettes de poulet.\n5- Ajouter les boulettes de poulet à la sauce, puis cuire jusqu'à ce que la sauce épaississe et que les boulettes de poulet brunissent.\n6- Mettez le riz dans de l'eau bouillante avec un peu de curcuma pendant 15 Minutes.\n7- Égoutter le riz de l'eau et assaisonner avec du sel et du poivre noir.\n8- Hacher la laitue et les oranges pour une salade et ajouter les amandes.\n9- Mettre le riz dans un bol et ajouter la sauce avec le boulettes de poulet.\n"

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


export default connect(mapStateToProps, mapDispatchToProps)(ChickenBallsRice);






