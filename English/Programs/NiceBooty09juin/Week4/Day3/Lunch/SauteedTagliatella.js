import React, { Component } from 'react';
import { connect } from 'react-redux';
import LunchOrDinner from "./EasyHealthyLunchOrDinner"




class SauttedTagliatelle extends Component {

  constructor(props) {
    super(props);


  const   ListeDataEN= [{
    key:1,
    Img: "https://github.com/selimbenmrad/photos/blob/master/English/Diet/PhotoLunch/tagliatelle%20with%20sauted%20veggie.jpg?raw=true",
    ListImg: [
      {img: "https://github.com/selimbenmrad/Files/blob/master/icon%20%20vegetarian.png?raw=true"},
    ],
    Title:"Sautted Tagliatelle",
    Min: " 30-40 min",
    Ingredients: " 1- 0.33 lb (ca. 150 g) of Tagliatelle.\n2- 0.22 lb (ca. 100 g) of chopped green beans.\n3- 0.22 lb (ca. 100 g) of red chopped cabbage.\n4- Three minced cloves of garlic.\n5- One thinly sliced green pepper.\n6- Four Chopped tomatoes (100 g).\n7- 0.066 lb (ca.30 g) of shredded mozzarella cheese.\n8- Two tbsps (20 g) of olive oil.\n9- One teaspoon of turmeric and a pinch of salt and pepper.\n10- Three boiled eggs (2 white eggs and 1 whole egg).\n11- Garnish: chopped parsley, chopped green pepper.\n",
    Preparation: " 1- Cook the pasta in boiling water, until soft (seven minutes).\n2- Cut the vegetables.\n3- Heat the oil over medium heat in the pan.\n4- sauté the garlic, green beans, cabbage, tomatoes, and peppers with some water in the pan for five minutes.\n5- Season the vegetable mixture with salt and pepper.\n6- Pour vegetable mixture and mozzarella over the pasta then mix .\n7- Garnish with  eggs , parsley, and green pepper.\n"



  }]
  
    const ListeDataAR= [{
      key:1,
      Img: "https://github.com/selimbenmrad/photos/blob/master/English/Diet/PhotoLunch/tagliatelle%20with%20sauted%20veggie.jpg?raw=true",
      ListImg: [
        {img: "https://github.com/selimbenmrad/Files/blob/master/icon%20%20vegetarian.png?raw=true"},
      ],
      Title:"تالياتيلي بالخضار",
      Min: "بين 30 و 40 دقيقة",
      Ingredients: "1- 150 غرام من معكرونة التالياتيلي.\n2-100 غرام من الفاصولياالخضراءالمقطّعة.\n3- 100 غرام من الملفوف الأحمرالمقطّّع.\n4- ثلاث فصوص ثوم مقطّعة.\n5- حبّة فلفل أخضر مقطّعة إلى شرائح صغيرة.\n6- (100 غ) أربع حبّات طماطم مقطّعة.\n7- 30 غرام من  جبن الموتزاريلا المبشور.\n8- (20 مل) ملعقتي أكل من زيت الزّيتون.\n9- ملعقة صغيرة من الكركم والقليل من الملح والفلفل الأسود المرحيّ (حسب الرّغبة).\n10- ثلاث بيضات مسلوقة (2 بياض البيض و 1 بيضة كاملة).\n11- للتّزين: بقدونس مفروم وفلفل أخضر مفروم.\n",
      Preparation: "1- طه المعكرونة في ماء يغلي (7 دقائق) ثم صفّها.\n2- سخّن الزّيت على نار متوسّطة في مقلاة.\n3-أضف الثّوم ،الفاصوليا الخضراء ،الملفوف ،الطّماطم والفلفل لتقلّى (لمدّة 5 دقائق).\n4-أضف الكركم ،الملح ،الفلفل الأسود ونصف كوب من  الماء.\n5- يُطهى المزيج على نار خفيفة حتّى تنضج الخضار.\n6- أضف الخضارالمطهيّة و جبنة المتوزاريلا إلى التالياتيلي وامزج.\n7- زيّن بالبقدونس ،الزّيتون ،الفلفل الأخضر والبيض المسلوق.\n"



    }]
    const ListeDataFR= [{
      key:1,
      Img: "https://github.com/selimbenmrad/photos/blob/master/English/Diet/PhotoLunch/tagliatelle%20with%20sauted%20veggie.jpg?raw=true",
      ListImg: [
        {img: "https://github.com/selimbenmrad/Files/blob/master/icon%20%20vegetarian.png?raw=true"},
      ],
      Title:"Tagliatelle aux légumes sautés",
      Min: " 30-40 min",
      Ingredients: "1- 150 g de tagliatelles.\n2- 100 g de haricots verts hachés.\n3- 100 g de chou rouge haché.\n4- Trois gousses d'ail émincées.\n5- Un poivron vert finement tranché.\n6- Quatre tomates hachées (100g).\n7- 30 g de fromage mozzarella râpé.\n8- Deux cuillères à soupe d'huile d'olive.\n9- Une cuillère à café de curcumine et une pincée de sel et de poivre.\n10- Trois œufs durs (2 blancs d'œufs et 1 œuf entier).\n11- Pour la garniture : persil et piment vert haché.\n",
      Preparation: "1- Faire cuire les pâtes dans l'eau bouillante environ 7 min, puis égoutter les.\n2- Faire chauffer l'huile à feu moyen dans une poêle.\n3- Ajouter l'ail, les haricots verts, le chou, les tomates et le poivron pour faire frire pendant 5 min.\n4- Ajouter le curcuma, le sel, le poivre noir et une demi-tasse d'eau.\n5- Cuire à feu doux jusqu'à ce que les légumes soient tendres.\n6- Ajouter les légumes cuits et le fromage mozzarella aux tagliatelles puis mélanger.\n7- Garnir de persil, de poivrons verts et d'œufs durs.\n"



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


export default connect(mapStateToProps, mapDispatchToProps)(SauttedTagliatelle);



