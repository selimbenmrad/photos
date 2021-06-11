import React, { Component } from 'react';
import { connect } from 'react-redux';
import Desserts from "./Desserts"




class RiceGrilledTuna extends Component {

  constructor(props) {
    super(props);


  const   ListeDataEN= [{
    key:1,
    Img: "https://github.com/selimbenmrad/photos/blob/master/English/Programs/PhotoMenusProgram/Week1/Day1/RiceGrilledTuna.jpg?raw=true",
    ListImg: [
      {img: "https://github.com/selimbenmrad/Files/blob/master/high%20protein.png?raw=true"},
    ],
    Title:"Rice Grilled Tuna",
    Min: "20 min",
    Ingredients: "1- 0.35 lb (ca.160 g) of fresh tuna.\n2- One cup of  Basmati rice (ca. 200 g).\n3-Two cups of water.\n4- One medium cucumber.\n5- One cup of cherry tomatoes.\n6-Two peppers.\n7-One apple.\n8-One tbsp of olive oil.\n9-One tsp cumin.\n10 Pinch of salt and pepper to taste.\n",
    Preparation: "1- Boil the rice in salted water in the bowl (18 minutes), then drain it from water.\n2- Cut the cucumber,appel and bell pepper into pieces.\n3- Mix the rice,cucumber,pepper, cherry tomatoes, appel, and olive oil together in a bowl.\n4- In another bowl, season the tuna with  cumin, pepper, and salt.\n5- Grill the tuna in the skillet.\n6-Place hot tuna and rice salad on the plate together.\n"





  }]
  
    const ListeDataAR= [{
        key:1,
        Img: "https://github.com/selimbenmrad/photos/blob/master/English/Programs/PhotoMenusProgram/Week1/Day1/RiceGrilledTuna.jpg?raw=true",
        ListImg: [
          {img: "https://github.com/selimbenmrad/Files/blob/master/high%20protein.png?raw=true"},
        ],
        Title:"تونة مشوية مع الارز",
        Min: "20 دقيقة",
        Ingredients: "1- غ160 من التونة الطازجة.\n2- كأس من ارز بسمتي  200 غ.\n3-كأسين من الماء.\n4- حبة خيار متوسطة.\n5- كأس من الطماطم الكرزية.\n6-حبتي فلفل.\n7- تفاحة.\n8- ملعقة كبيرة من زيت الزيتون.\n9- ملعقة صغيرة كمون.\n10-رشة ملح و فلفل حسب المذاق.\n",
        Preparation: "1- اسلق الأرز في ماء مغلي مملح لمدة 18 دقيقة,ثم صفيه.\n2- قطع الخيار و التفاح و الفلفل الى قطع.\n3- امزج الارز و الخيار و الفلفل و الطماطم الكرزية والتفاح و زيت الزيتون معا في وعاء.\n4- في وعاء اخر، تبلي التونة بالملح و الكمون و الفلفل.\n5- اشوي التونة في مقلاة.\n6-ضعي التونة الساخنة وسلطة الأرز على الطبق معًا.\n"





    }]
    const ListeDataFR= [{
        key:1,
        Img: "https://github.com/selimbenmrad/photos/blob/master/English/Programs/PhotoMenusProgram/Week1/Day1/RiceGrilledTuna.jpg?raw=true",
        ListImg: [
          {img: "https://github.com/selimbenmrad/Files/blob/master/high%20protein.png?raw=true"},
        ],
        Title:"Riz au Thon Grillé",
        Min: "20 min",
        Ingredients: "1- 160 g de thon frais.\n2- Une tasse de riz basmati (environ 200 g).\n3-Deux tasses d'eau.\n4- Un concombre moyen.\n5- Une tasse de tomates cerises.\n6- Deux poivrons.\n7- Une pomme.\n8- Une cuillère à soupe d'huile d'olive.\n9- Une cuillère à café de cumin.\n10- Une pincée de sel et de poivre au goût.\n",
        Preparation: "1- Faites bouillir le riz dans de l'eau bouillie salée (18 minutes), puis égouttez-le de l'eau.\n2- Coupez le concombre, la pomme et le poivron en morceaux.\n3- Mélangez le riz, le concombre, le poivron, les tomates cerises, la pomme et l'huile d'olive ensemble dans un bol.\n4- Dans un autre bol, assaisonner le thon avec le cumin, le poivre et le sel.\n5- Faire griller le thon dans la poêle.\n6- Placer ensemble le thon chaud et la salade de riz sur l'assiette.\n"

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


export default connect(mapStateToProps, mapDispatchToProps)(RiceGrilledTuna);






