import React, { Component } from 'react';
import { connect } from 'react-redux';
import Breakfast from "./EasyHealthyBreakfast"




class ChocolatePorrdige extends Component {

  constructor(props) {
    super(props);


  const   ListeDataEN= [{
    key:1,
    Img: "https://github.com/selimbenmrad/Files/blob/master/ChocolataAlmondPorrdige.jpg?raw=true",
    ListImg: [
      {img: "https://github.com/selimbenmrad/Files/blob/master/icon%20%20vegetarian.png?raw=true"},
      {img: "https://github.com/selimbenmrad/Files/blob/master/high%20protein.png?raw=true"},
    ],
    Title:"Chocolate Porrdige",
    Min: " 15-20 min",
    Ingredients: "1- Five tbsps of oats flour (50 g).\n2- Two tsps of ground coconut (10 g).\n3- 200 ml of almond milk.\n4- One egg.\n5- Three tbsps (30 g) of dark chocolate chips (more than 70% cocoa).\n",
    Preparation: "1- In a saucepan, cook the oats flour, coconuts, milk,chocolate and the egg while stirring.\n2- Pour the cooked mixture in the bowl.\n3- Decorate the mixture with some chocolate chips.\n",



  }]
  
    const ListeDataAR= [{
      key:1,
      Img: "https://github.com/selimbenmrad/Files/blob/master/ChocolataAlmondPorrdige.jpg?raw=true",
      ListImg: [
        {img: "https://github.com/selimbenmrad/Files/blob/master/icon%20%20vegetarian.png?raw=true"},
        {img: "https://github.com/selimbenmrad/Files/blob/master/high%20protein.png?raw=true"},
      ],
      Title:"عصيدة اللّوز و الشّكولاطة",
      Min: " بين 15 و 20 دقيقة",
      Ingredients: "1- خمس ملاعق كبيرة من دقيق الشوفان (50 غ).\n2- ملعقتان صغيرتان من جوز الهند  (10 غ).\n3- 200 مل حليب لوز.\n4- بيضة واحدة.\n5-ثلاث ملاعق أكل (30غ) من رقائق الشّكولاطة الدّاكنة (أكثر من 70٪ كاكاو) .\n",
      Preparation: "1- في قدر، اخلط المكوّنات و ضعها على النّار.\n2- عندما يغلي المزيج خفِّض في النّار و قلِّب  بشكل متكرِّر إلى أن ينضج.\n3- زيِّن ببعض رقائق الشكولاطة.\n",



    }]
    const ListeDataFR= [{
      key:1,
      Img: "https://github.com/selimbenmrad/Files/blob/master/ChocolataAlmondPorrdige.jpg?raw=true",
      ListImg: [
        {img: "https://github.com/selimbenmrad/Files/blob/master/icon%20%20vegetarian.png?raw=true"},
        {img: "https://github.com/selimbenmrad/Files/blob/master/high%20protein.png?raw=true"},
      ],
      Title:"Porridge au chocolat",
      Min: " 15-20 min",
      Ingredients: "1- Cinq cuillères à soupe de farine d'avoine (50 g).\n2- Deux cuillères à soupe de noix de coco  (10 g).\n3- 150 ml de lait d'amande.\n4- Un oeuf.\n5- Trois cuillères (30 g) à soupe de pépites de chocolat noir.\n",
      Preparation: "1- Dans une casserole, mélanger la farine d'avoine, les noix de coco  et les pépites de chocolat, le lait et l'œuf.\n2- Apporter-les à ébullition, puis réduire à feu doux, après remuer souvent.\n3- Laisser mijoter jusqu'à ce que le liquide soit absorbé.\n4- Verser le porridge dans un bol.\n5- Décorer avec des pépites de chocolat.\n",



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
        NamePage: < Breakfast />,
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


export default connect(mapStateToProps, mapDispatchToProps)(ChocolatePorrdige);



