import React, { Component } from 'react';
import { connect } from 'react-redux';
import Desserts from "./Desserts"




class RicottaCheesePancake extends Component {

  constructor(props) {
    super(props);


  const   ListeDataEN= [{
    key:1,
    Img: "https://github.com/selimbenmrad/photos/blob/master/English/Diet/PhotoLunch/FevabeanswithChard.jpg?raw=true",
    ListImg: [
      {img: "https://github.com/selimbenmrad/Files/blob/master/icon%20vegan.png?raw=true"},
      {img: "https://github.com/selimbenmrad/Files/blob/master/gluten%20free.png?raw=true"},
    ],
    Title: "RicottaCheesePancake",
    Min: " 15 min",
    Ingredients: "1-One egg.\n2-0.17 lb (ca.80 g) of whole wheat flour.\n3-Half a teaspoon of baking powder.\n4-1/2 vanilla pod .\n5- 100 ml skimmed milk.\n6-0.15 lb (ca.70g) low fat Ricotta cheese.\n7-Ten blackberries.\n",
    Preparation: "1-Mix the egg, flour, milk, and baking powder, vanilla ( the small vanilla beans inside) together.\n2-Divide the mixture in three.\n3-Cook the mixture in a frying pan over low heat for 5 minutes per side.\n4- Place the pancakes on a plate with ricotta cheese and decorate it with blackberries.\n" 


  }]
  
    const ListeDataAR= [{
      key:1,
      Img: "https://github.com/selimbenmrad/photos/blob/master/English/Diet/PhotoLunch/FevabeanswithChard.jpg?raw=true",
      ListImg: [
        {img: "https://github.com/selimbenmrad/Files/blob/master/icon%20vegan.png?raw=true"},
        {img: "https://github.com/selimbenmrad/Files/blob/master/gluten%20free.png?raw=true"},
      ],
      Title: "بان كيك مع الريكوتا",
      Min: " 15 min",
      Ingredients: " 1- بيضة واحدة.\n2-80 غرام من طحين القمح الكامل.\n3-نصف ملعقة صغيرة من بكنج بودر .\n4-1/2 حبة فانيليا.\n5- 100 مل حليب منزوع الدسم .\n6- غ جبنة الريكوتا  قليل الدسم 70.\n7-عشرة حبات من التوت.\n",
      Preparation: " 1- اخلط البيض والدقيق والحليب والخميرة وأضف  الفانيليا (الحبيبات الصغيرة بالداخل).\n2-قم بتقسيم الخليط على ثلاث.\n3-قم بطبخ الخليط في مقلاة على نار هادئة لمدة  5 دقائق لكل جانب.\n4-ضع الفطائر على طبق  مع جبنة الريكوتا وزيّنيها بالتوت .\n" 



    }]
    const ListeDataFR= [{
      key:1,
      Img: "https://github.com/selimbenmrad/photos/blob/master/English/Diet/PhotoLunch/FevabeanswithChard.jpg?raw=true",
      ListImg: [
        {img: "https://github.com/selimbenmrad/Files/blob/master/icon%20vegan.png?raw=true"},
        {img: "https://github.com/selimbenmrad/Files/blob/master/gluten%20free.png?raw=true"},
      ],
      Title: "Pancake à la ricotta",
      Min: " 15 min",
      Ingredients: " 1- Un œuf.\n2-80 g de farine de blé entier.\n3-Une  demi-cuillère à café de  levure chimique.\n4- 1/2 gousse de vanille.\n5- 100 ml lait écrémé.\n6- 70 g ricotta faible en matière grasse.\n7- Dix mûres.\n",
      Preparation: " 1- Mélanger l'œufs, la farine, le lait,le levure,ajoutez la ½ gousse de vanille ( les petits grains qui sont à l’intérieur) ensemble.\n2-Divisez le mélange en trois.\n4- Faites Cuire le mélange dans une poêle à feu doux pendant 5 minutes de chaque côté.\n5-Mettez les pancakes dans une assiette avec le fromage ricotta et décorer avec les mûres.\n" 

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


export default connect(mapStateToProps, mapDispatchToProps)(RicottaCheesePancake);






