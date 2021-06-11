import React, { Component } from 'react';
import { connect } from 'react-redux';
import LunchOrDinner from "./EasyHealthyLunchOrDinner"




class HealthyBolognese extends Component {

  constructor(props) {
    super(props);


  const   ListeDataEN= [{
    key:1,
    Img: "https://raw.githubusercontent.com/selimbenmrad/Files/master/English/Diet/lunchphoto/HealthyBolognese.jpg",
    ListImg: [
      {img: "https://github.com/selimbenmrad/Files/blob/master/high%20protein.png?raw=true"},
    ],
    Title:"Healthy Bolognese",
    Min: "30-40 min",
    Ingredients: "1- Whole-wheat pasta 0.33 lb (ca.150 g) (cooked).\n2-0.66 lb (ca. 300 g) tomatoes,chopped.\n3- Five  garlic cloves,minced .\n4- One  medium onion, chopped.\n5- 0.66 lb ( ca.300g)  fresh pumpkin ,shredded .\n6- 0.33 lb (ca. 150 g) of chicken breast, minced.\n7- One tbsp of  olive oil.\n8- One teaspoon of curcuma.\n9- Pinch of salt and pepper some parsely.\n",
    Preparation: "1- Boil the pasta  until tender (7 minutes).\n2- Meanwhile, Sauté the  onions, garlic ,and the chicken  with some olive oil  until soft brown.\n3- Add the pumpkin, tomatoes, curcuma, salt, pepper and  a cup of water, simmer until sauce thickens.\n4- Combine the pasta and the sauce together.\n5- Sprinkle the sauce with parsley.\n"



  }]
  
    const ListeDataAR= [{
      key:1,
      Img: "https://raw.githubusercontent.com/selimbenmrad/Files/master/English/Diet/lunchphoto/HealthyBolognese.jpg",
      ListImg: [
        {img: "https://github.com/selimbenmrad/Files/blob/master/high%20protein.png?raw=true"},
      ],
      Title:"معكرونة بولونيز",
      Min: "30 دقيقة",
      Ingredients: "1- 150 (بعد الطهي) غرام  من معكرونة القمح الكامل.\n2- حبّات طماطم مرحيّة (حوالي 300 غرام).\n3- حبة بصل متوسّطة مقطّعة.\n4- خمس فصوص ثوم مهروسة.\n5- (300 غ) كوبين من اليقطين الطازج المبشور.\n6- 150 غرام من صدر دجاج المفروم قليل الدّهن.\n7- ملعقة أكل زیت زیتون .\n8- ملعقة صغيرة من الكركم المطحون.\n9-القلیل من الملح والفلفل الأسود المرحي , و بقدونس.\n",
      Preparation: "1- ضع المعكرونة في قدر كبير من ماء مملح یغلي (7 دقائق) ثم  ّصفیها.\n2- سخن زیت الزیتون في قدر كبير على نار متوسطة.\n3- أضف الدجاج المفروم والبصل والثوم لیقلًیا و قلب حتى یستویا (5 دقائق).\n4- أضف الیقطين المبشور، الطماطم، الكركم، الملح والفلفل الأسود ثمّ كوب ماء.\n5- قلب جیًدا الصلصة و غطًها.\n6- عند الغلیان خفًض النار(لتطبخ الصلصة لي 15-20 دقیقة حتى تتكاثف).\n7- ضع المعكرونة في الطبق فوقها صلصة البولونیز وزین بالبقدونس.\n"



    }]
    const ListeDataFR= [{
      key:1,
      Img: "https://raw.githubusercontent.com/selimbenmrad/Files/master/English/Diet/lunchphoto/HealthyBolognese.jpg",
      ListImg: [
        {img: "https://github.com/selimbenmrad/Files/blob/master/high%20protein.png?raw=true"},
      ],
      Title:"Bolognaise saine",
      Min: " 5 min",
      Ingredients: "1- 150 g de pâtes de blé entier (cuite).\n2- Six tomates hachées (soit 300 g).\n3- Cinq gousses d'ail émincée.\n4- Un oignon moyen haché.\n5- Deux tasses de citrouille fraîche râpée (300g).\n6- 150 g de blanc de poulet hachée maigre.\n7- Une cuillère à soupe d'huile d'olive.\n8- Une cuillère à café de curcuma.\n9- Une pincée de sel et de poivre au goût, et de pérsil.\n",
      Preparation: "1- Faites cuire les pâtes complètes dans l'eau bouillante salée (7min).\n2- Chauffer l'huile d'olive dans une grande casserole à feu moyen.\n3- Ajouter le blanc de poulet, l'oignon et l'ail et faire remuer pendant 5 minutes jusqu'à ce que l'oignon ramollis.\n4- Ajouter la citrouille râpée, les tomates, la curcuma, le sel et le poivre noir, puis une tasse d'eau.\n5- Bien mélanger puis porter à ébullition.\n6- Réduire le feu puis laisser mijoter pendant 15 à 20 minutes jusqu'à ce que la sauce épaississe.\n7- Verser les pâtes dans le plat, et une cuillère sauce bolognaise au dessus, puis saupoudrer de persil.\n"



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


export default connect(mapStateToProps, mapDispatchToProps)(HealthyBolognese);






















