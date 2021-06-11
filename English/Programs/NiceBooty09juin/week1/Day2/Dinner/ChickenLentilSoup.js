import React, { Component } from 'react';
import { connect } from 'react-redux';
import Desserts from "./Desserts"




class ChickenLentilsSoup extends Component {

  constructor(props) {
    super(props);


  const   ListeDataEN= [{
    key:1,
        Img: "https://github.com/selimbenmrad/photos/blob/master/English/Programs/PhotoMenusProgram/Week1/Day3/ChickenLentilSoup.jpg?raw=true",
        ListImg: [
          {img: "https://github.com/selimbenmrad/Files/blob/master/icon%20vegan.png?raw=true"},
        ],
        Title:"Chicken Lentils Soup",
        Min: "20-30 min",
        Ingredients: "1- Two  carrots.\n2- One cucumber.\n3- Chicken breast 0.33 lb (ca. 150 g ).\n4- One tbsp olive oil.\n5- One cup of red lentil (ca. 200 g).\n6- salt ; black pepper ;  Four epices ; curcuma ( to taste).\n",
        Preparation: "1- Preheat the oven over 180 °C ( 356°F).\n2-Boil the lentil in a bowl until tender (30min).\n3-Season the lentil with salt, pepper curcuma,olive oil and four spices.\n4-Mash the lentil in the blender.\n5-Season the chicken with salt and black pepper and thyme\n6-Put the chicken in the oven for 20 minutes.\n7-Cut the chichen and put over the lentil soup\n8-Cut the vegetables into slices to make the salad.\n"





  }]
  
    const ListeDataAR= [{
      key:1,
        Img: "https://github.com/selimbenmrad/photos/blob/master/English/Programs/PhotoMenusProgram/Week1/Day3/ChickenLentilSoup.jpg?raw=true",
        ListImg: [
          {img: "https://github.com/selimbenmrad/Files/blob/master/icon%20vegan.png?raw=true"},
        ],
        Title:"شربة العدس مع الدجاج",
        Min: "20-30  دقيقة",
        Ingredients: "1- جزرتين.\n2- حبة خيار .\n3- غ صدر دجاج 150.\n4- ملعقة كبيرة من زيت الزيتون.\n5- كأس من العدس الاحمر (200 غ) .\n6- ملح ; فلفل اسود ;  البهارات الاربع ; كركم ( حسب الطلب).\n",
        Preparation: "1- 180°C سخن الفرن على درجة حرارة.\n2-اسلق العدس في وعاء حتى ينضج(30 دقيقة).\n3-تبل العدس بالملح و البهارات الاربع و زيت الزيتون و الكركم و الفلفل.\n4-ارحي العدس في الخلاط.\n5-تبل الدجاج بالملح و الفلفل الاسود و الزعتر.\n6-ضع الدجاج في الفرن لمدة 20 دقيقة.\n7-قطع الدجاج الى شرائح و ضعها فوق شربة العدس.\n8-قطع الخضار لتحضير السلطة.\n"





    }]
    const ListeDataFR= [{
      key:1,
        Img: "https://github.com/selimbenmrad/photos/blob/master/English/Programs/PhotoMenusProgram/Week1/Day3/ChickenLentilSoup.jpg?raw=true",
        ListImg: [
          {img: "https://github.com/selimbenmrad/Files/blob/master/icon%20vegan.png?raw=true"},
        ],
        Title:"Soupe de lentilles au poulet",
        Min: "20-30 min",
        Ingredients: "1- Deux carottes.\n2- Un concombre.\n3- 150 g Blanc de poulet.\n4- Une cuillère à soupe d'huile d'olive.\n5- Une tasse de lentille rouge ( 200 g).\n6- Sel ; poivre noir ; quatres epices ; curcuma (au goût ).\n",
        Preparation: "1- Préchauffer le four à 180 ° C .\n2- Faire bouillir les lentilles dans un bol jusqu'à ce qu'elles soient tendres (30 min).\n3- Assaisonner les lentilles avec du sel, du poivre, de la curcuma, de l'huile d'olive et quatre épices.\n4- Écrasez les lentilles dans le mixeur.\n5- Assaisonnez le poulet avec du sel, du poivre noir et du thym.\n6- Mettez le poulet au four pendant 20 minutes.\n7- Coupez le poulet et mettez sur la soupe de lentilles.\n8- Coupez le légumes en tranches pour faire la salade.\n"

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


export default connect(mapStateToProps, mapDispatchToProps)(ChickenLentilsSoup);






