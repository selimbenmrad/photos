import React, { Component } from 'react';
import { connect } from 'react-redux';
import Desserts from "./Desserts"




class VeggiePancake extends Component {

  constructor(props) {
    super(props);


  const   ListeDataEN= [{
    key:1,
    Img: "https://github.com/selimbenmrad/photos/blob/master/English/Diet/PhotoLunch/FevabeanswithChard.jpg?raw=true",
    ListImg: [
      {img: "https://github.com/selimbenmrad/Files/blob/master/icon%20vegan.png?raw=true"},
      {img: "https://github.com/selimbenmrad/Files/blob/master/gluten%20free.png?raw=true"},
    ],
    Title: " Veggie Pancake",
    Min: " 15 min",
    Ingredients: "1- 0.22 lb (ca.100 g) zucchini.\n2- One carrot (ca.60g).\n3- 2 eggs.\n4- 0.11 lb (ca.50 g) oatmeal.\n5- 0.11 lb (ca.50 g) tuna.\n6- One tablespoon of olive oil.\n7- Three tablespoons of low-fat milk.\n8- 0.08 lb (ca.40 g) grated mozzarella cheese  low-Fat.\n9- 0.22 lb (ca.100 g) of lettuce , chopped.\n10- 0.22 lb (ca.100 g) of cherry tomatoes.\n11- Two garlic , minced.\n12- Salt.\n",
    Preparation: "1- Grate the carrots and zucchini well and cook them for 15 minutes in a pan with a tablespoon of olive oil and  garlic cloves.\n2- Mix the eggs, oatmeal, tuna, mozzarella, a pinch of salt,and milk in a large bowl, add the grated cooked vegetables and mix until well combined.\n3- Divide the mixture into three pancakes.\n4- Cook the pancakes in a pan over low heat for 5 minutes per side.\n5- Cut the lettuce, tomatoes and onions to prepare the salad; and serve alongside the pancakes.\n" 


  }]
  
    const ListeDataAR= [{
      key:1,
      Img: "https://github.com/selimbenmrad/photos/blob/master/English/Diet/PhotoLunch/FevabeanswithChard.jpg?raw=true",
      ListImg: [
        {img: "https://github.com/selimbenmrad/Files/blob/master/icon%20vegan.png?raw=true"},
        {img: "https://github.com/selimbenmrad/Files/blob/master/gluten%20free.png?raw=true"},
      ],
      Title: "بان كيك الخضار",
      Min: " 20 min",
      Ingredients: "1- 100 غ  كوسة.\n2- 60 غ جزر.\n3- بيضتين .\n4- 50 غ دقيق الشوفان.\n5- 50 غ تونة.\n6- ملعقة كبيرة من زيت الزيتون.\n7- 3 ملاعق كبيرة حليب قليل الدسم.\n8- 40 غ جبن موزاريلا  مبشور   قليل الدسم.\n9- 150 غ خس.\n10- 100 غ  طماطم كرزية.\n11- 2 فص ثوم.\n12- ملح.\n",
      Preparation: "1-  ابشر الجزر والكوسا  جيداً واطهيهما لمدة 15 دقيقة في مقلاة مع ملعقة كبيرة من زيت الزيتون و  فصين ثوم مهروس.\n2- أخلط البيض ودقيق الشوفان والتونة والموزاريلا ورشة ملح وحليب في وعاء كبير واضف الخضار المبشورة المطبوخة وامزجهم   جيدا حتى يتجانس الخليط.\n3- قم بتقسيم الخليط على  شكل  ثلاث فطائر.\n4- قم بطبخ الفطائر في مقلاة على نار هادئة لمدة  5 دقائق لكل جانب.\n5- قطع الخس وطماطم والبصل  لتحضير السلطة  وقدمها الى جانب الفطائر.\n" 



    }]
    const ListeDataFR= [{
      key:1,
      Img: "https://github.com/selimbenmrad/photos/blob/master/English/Diet/PhotoLunch/FevabeanswithChard.jpg?raw=true",
      ListImg: [
        {img: "https://github.com/selimbenmrad/Files/blob/master/icon%20vegan.png?raw=true"},
        {img: "https://github.com/selimbenmrad/Files/blob/master/gluten%20free.png?raw=true"},
      ],
      Title: "Pancake aux légumes",
      Min: " 20 min",
      Ingredients: "1- 100 g courgettes.\n2- Une carotte (60 g).\n3- Deux œufs.\n4- 50 g de flocons d'avoine.\n5- 50 g de thon.\n6- Une cuillère à soupe d'huile d'olive.\n7- 3 cuillères à soupe de lait écrémé.\n8- 40 g de mozzarella râpée  faible en  gras.\n9- Deux tasses(100g) de laitue ,émincé.\n10- 100 g de tomates cerises.\n11- Deux ails , émincé.\n12- Sel.\n",
      Preparation: "1- Râpez bien les carottes et les courgettes et faites-les cuire 15 minutes dans une poêle avec de l'huile d'olive et de l'ail.\n2- Mélanger les œufs, les flocons d'avoine, le thon, la mozzarella, une pincée de sel et le lait dans un bol, ajoutez les légumes cuits râpés et mélangez jusqu'à homogénéité.\n3- Divisez le mélange en trois pancakes.\n4- Faites cuire les crêpes dans une poêle à feu doux pendant 5 minutes de chaque côté.\n5- Couper la laitue, les tomates et l'onignon pour préparer la salade et servez -la avec les pancakes.\n" 

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


export default connect(mapStateToProps, mapDispatchToProps)(VeggiePancake);






