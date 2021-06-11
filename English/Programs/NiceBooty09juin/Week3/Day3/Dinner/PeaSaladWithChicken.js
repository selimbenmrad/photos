import React, { Component } from 'react';
import { connect } from 'react-redux';
import LunchOrDinner from "./EasyHealthyLunchOrDinner"




class ChickenPeaSalad extends Component {

  constructor(props) {
    super(props);


  const   ListeDataEN= [{
    key:1,
    Img: "https://github.com/selimbenmrad/photos/blob/master/English/Diet/PhotoLunch/pumpkin%20pasta%20sandwich.jpg?raw=true",
    ListImg: [
      {img: "https://github.com/selimbenmrad/Files/blob/master/icon%20%20vegetarian.png?raw=true"},
    ],
    Title:"Chicken Pea Salad",
    Min: " 30 min",
    Ingredients: "1- 0.22 lb (100 g) tomatoes.\n2- 0.22 lb (100 g) peas.\n3- 0.22 lb (ca.100 g) green beans.\n4- 0.22 lb (100 g) mushrooms.\n5- One onion (50 g).\n6- 0.22 lb (ca.100 g) sweet corn.\n7- 0.44 lb (ca.200 g) chicken breast.\n8- Salt, black pepper .\n9- A spoonful of olive oil.\n10- A spoonful of lemon juice.\n",
    Preparation: "1- Boil green beans, peas and mushrooms in boiling water with a little salt each separately until they are done.\n2- Meanwhile, preheat the oven to 302°F (150°C).\n3- Season the chicken with half a tablespoon of olive oil, salt and black pepper and put it in the oven for a 20 minutes.\n4- Drain the cooked vegetables and place them in a plate, then add tomatoes, onions, sweet corn and chicken with a spoonful of lemon juice.\n"



  }]
  
    const ListeDataAR= [{
      key:1,
      Img: "https://github.com/selimbenmrad/photos/blob/master/English/Diet/PhotoLunch/pumpkin%20pasta%20sandwich.jpg?raw=true",
      ListImg: [
        {img: "https://github.com/selimbenmrad/Files/blob/master/icon%20%20vegetarian.png?raw=true"},
      ],
      Title:"سلطة دجاج والبازلاء",
      Min: "30 دقيقة",
      Ingredients: "1- طماطم   100غ .\n2-100غ بزلاء \n3-100غ لوبيا خضراء.\n4-100غ فطر.\n5-بصلة واحدة.\n6-100غ ذرة حلوة.\n7-200غ صدر دجاح .\n8-ملح،فلفل أسود.\n9-ملعقة زيت زيتون.\n10-ملعقة عصير ليمون.\n",
      Preparation: "1- إسلق  الفاصوليا الخضراء و البزلاء و الفطر في ماء يغلي مع قليل من الملح  كل على حدة حتي ينضجوا.\n2- في الأثناء سخن الفرن على  150درجة  حرارية .\n3-  تبل الدجاج  بنصف ملعقة زيت زيتون و ملح و فلفل أسود و ضعه في الفرن  لمدة 20 دقيقة .\n4-قم بتصفية الخضروات المطهوة وضعهم في طبق ، ثم اضف  الطماطم والبصل  والذرة و الدجاج  مع ملعقة عصير ليمون.\n"



    }]
    const ListeDataFR= [{
      key:1,
      Img: "https://github.com/selimbenmrad/photos/blob/master/English/Diet/PhotoLunch/pumpkin%20pasta%20sandwich.jpg?raw=true",
      ListImg: [
        {img: "https://github.com/selimbenmrad/Files/blob/master/icon%20%20vegetarian.png?raw=true"},
      ],
      Title:"Salade de poulet et pois",
      Min: " 30 min",
      Ingredients: "1- 100g tomate .\n2-100 g de  petits pois.\n3-100 g de haricots verts.\n4-100 g de champignons.\n5- Un oignon.\n6-100 g de maïs doux.\n7-200 g  blanc de poulet.\n8- sel, poivre noir.\n9- Une cuillère d'huile d'olive.\n10- Une cuillère de jus de citron.\n ",
      Preparation: "1- Faire bouillir les haricots verts, les petits pois et les champignons dans de l'eau bouillante avec un peu de sel chacun séparément jusqu'à ce qu'ils soient cuits.\n2- Pendant ce temps, préchauffer le four à 150 °C degrés.\n3- Assaisonner le poulet avec une demi-cuillère à soupe d'huile d'olive, sel et noir et mettez-le au four pendant  20 minutes.\n4- Égouttez les légumes cuits et placez-les dans une assiette, puis ajoutez les tomates, les oignons, le maïs et le poulet avec une cuillerée de jus de citron.\n"


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
        NamePage: < LunchOrDinner />,
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


export default connect(mapStateToProps, mapDispatchToProps)(ChickenPeaSalad);









