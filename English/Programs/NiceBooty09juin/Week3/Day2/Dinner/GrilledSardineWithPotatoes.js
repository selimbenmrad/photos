import React, { Component } from 'react';
import { connect } from 'react-redux';
import Desserts from "./Desserts"




class SardineMashedPotatoes extends Component {

  constructor(props) {
    super(props);


  const   ListeDataEN= [{
    key:1,
    Img: "https://github.com/selimbenmrad/photos/blob/master/English/Programs/PhotoMenusProgram/Week1/Day3/SardineMashedPotatoes.jpg?raw=true",
    ListImg: [
      {img: "https://github.com/selimbenmrad/Files/blob/master/icon%20vegan.png?raw=true"},
    ],
    Title:"Sardine Mashed Potatoes",
    Min: " 15-20 min",
    Ingredients: "1- A half cup of  cabbage.\n2-One  small cucumber.\n3-A half cup of fennel.\n4- 0,22 lb(ca.100 g)of sweet potatoes.\n5- 1/4 cup of milk.\n6-Sardine 0,44 lb (ca.200 g).\n7- A half tbsp of olive oil.\n8-Salt ; Black pepper.\n",
    Preparation: "1- Season the sardines with black pepper, cumin and salt.\n2-Preheat the oven 180°C(356°F).\n3-Bake the sardines in the oven for 15 min.\n4- Boil the potatoes over medium heat until tender.\n5- Mash the potatoes with milk.\n6-Mix the mashed potatoes with black pepper and salt.\n7-Combine cucumber, fennel,oil, and cabbage together to make the salad.\n8-Put the salad,sardine and potatoes in the same plate together.\n"



  }]
  
    const ListeDataAR= [{
      key:1,
      Img: "https://github.com/selimbenmrad/photos/blob/master/English/Programs/PhotoMenusProgram/Week1/Day3/SardineMashedPotatoes.jpg?raw=true",
      ListImg: [
        {img: "https://github.com/selimbenmrad/Files/blob/master/icon%20vegan.png?raw=true"},
      ],
      Title:"سردين مع البطاطا المهروسة",
      Min: " 15-20 دقيقة",
      Ingredients: "1- كوب ملفوف مقطع .\n2- حبة خيار.\n3-حبة شمر.\n4- 100 غ  من البطاطا الحلوة.\n5- 1/4 كأس حليب.\n6- سردين .200 غ.\n7-نصف ملعقة زيت زيتون.\n8-ملح ; فلفل اسود.\n",
      Preparation: "1-تبل السردين بالملح و الفلفل الاسود و الكمون.\n2- 180°C  سخن الفرن على درجة حرارة.\n3-ضع السردين في الفرن لمدة 15 دقيقة.\n4-اسلق البطاطا على نار متوسطة حتى تنضج.\n5-اهرس البطاطا مع الحليب.\n6-امزج البطاطا المهروسة مع الفلفل الاسود.\n7-اخلط الخيار و الشمر و الملفوف  و الزيت معا لتحضير السلطة\n8-ضع السلطة و السردين و البطاطا في نفس الطبق .\n"


    }]
    const ListeDataFR= [{
      key:1,
      Img: "https://github.com/selimbenmrad/photos/blob/master/English/Programs/PhotoMenusProgram/Week1/Day3/SardineMashedPotatoes.jpg?raw=true",
      ListImg: [
        {img: "https://github.com/selimbenmrad/Files/blob/master/icon%20vegan.png?raw=true"},
      ],
      Title:"Purée de pommes de terre à la sardine ",
      Min: "20 min",
      Ingredients: "1- Une tasse de chou.\n2- Un petit concombre.\n3- Une tasse de fenouil.\n4- 100 g de patates douces.\n5- 1/4 tasse de lait.\n6- 200 g Sardine.\n7- Une demi-cuillère d'huile d'olive.\n8- Sel; Poivre noir.\n",
      Preparation: "1- Assaisonner les sardines avec du poivre noir, du cumin et du sel.\n2- Préchauffer le four à 180 ° C .\n3- Cuire les sardines au four pendant 15 min.\n4-Faire bouillir le pomme de terre à feu moyen jusqu'à tendre.\n5- Faites écraser le pomme de terre avec du lait.\n6- Mélangez la purée de pommes de terre avec du poivre noir.\n7- Combinez le concombre, l'huile,le fenouil et le chou pour faire la salade.\n8- Mettez la salade, la sardine et le chou,pommes de terre dans la même assiette ensemble.\n"


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


export default connect(mapStateToProps, mapDispatchToProps)(SardineMashedPotatoes);






