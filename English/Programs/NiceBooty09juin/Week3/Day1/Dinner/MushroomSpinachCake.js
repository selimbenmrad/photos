import React, { Component } from 'react';
import { connect } from 'react-redux';
import Desserts from "./Desserts"




class MushroomSpinachCake  extends Component {

  constructor(props) {
    super(props);


  const   ListeDataEN= [{
    key:1,
        Img: "https://github.com/selimbenmrad/photos/blob/master/English/Programs/PhotoMenusProgram/Week1/Day2/SteamedVeggiesTuna.jpg?raw=true",
        ListImg: [
          {img: "https://github.com/selimbenmrad/Files/blob/master/icon%20vegan.png?raw=true"},
        ],
        Title:"Mushroom Spinach Cake  with Cheese",
        Min: " 30 min",
        Ingredients: "1- 0.44 lb (ca.200 g) mushrooms.\n2- 0.44 lb (ca.200 g) spinach.\n3- 6 basil leaves.\n4- 4 garlic cloves.\n5- 0.11 lb (50 g) low-fat mozzarella cheese.\n6- 0.06 lb (ca.30 g) parmesan cheese.\n7- 100 ml low-fat milk.\n8-3 eggs.\n9-One tablespoon of olive oil.\n10-salt, black pepper.\n",
        Preparation: "1-Fry the mushrooms and garlic with a little olive oil for 5 minutes.\n2-Mix the milk, mozzarella, Parmesan, eggs, salt, and black pepper together.\n3-Boil the spinach and basil in boiling water for 3 minutes, then drain and rinse with cold water .\n4-Cut spinach and basil and combine them with mushrooms and garlic and add milk mixture, then mix them all together.\n5-Put the mixture in an oven dish (covered with parchment paper) at 180 ° C for 15 min.\n"



  }]
  
    const ListeDataAR= [{
      key:1,
      Img: "https://github.com/selimbenmrad/photos/blob/master/English/Programs/PhotoMenusProgram/Week1/Day2/SteamedVeggiesTuna.jpg?raw=true",
      ListImg: [
        {img: "https://github.com/selimbenmrad/Files/blob/master/icon%20vegan.png?raw=true"},
      ],
      Title:"كيكة الفطر والسبانخ بالجبن",
      Min: " 30 دقيقة",
      Ingredients: "1- 200 غ فطر.\n2- 200 غ سبانخ.\n3- 6 أوراق ريحان.\n4- 4 فصوص ثوم.\n5- 50 غ جبنة  موتزاريلا قليلة  الدسم.\n6- 30 غ جبن بارميزان.\n7- 100 مل حليب قليل الدسم .\n8-3 بيضات.\n9-ملعقة كبيرة زيت زيتون.\n10-ملح ، فلفل أسود.\n",
      Preparation: "1-اقلي الفطر و الثوم مع قليل من زيت الزيتون (5 دقائق).\n2-اخلط الحليب مع الموزاريلا والبارميزان والبيض بالملح والفلفل الأسود.\n3- إسلق السبانخ والريحان في الماء المغلي  لي 3 دقائق   ثم  صفهم أشطفهم  بالماء البارد.\n4-قطع السبانخ والريحان و  إمزجهم  مع  الفطر والثوم  وأضف خليط الحليب.\n5-ضع الخليط   في طبق الفرن (مغلف بورق الزبدة )  على حرارة 180 درجة مئوية لمدة  15 دقيقة.\n"



    }]
    const ListeDataFR= [{
      key:1,
        Img: "https://github.com/selimbenmrad/photos/blob/master/English/Programs/PhotoMenusProgram/Week1/Day2/SteamedVeggiesTuna.jpg?raw=true",
        ListImg: [
          {img: "https://github.com/selimbenmrad/Files/blob/master/icon%20vegan.png?raw=true"},
        ],
        Title:"Cake Salé Aux Champignons",
        Min: " 30 min",
        Ingredients: "1- 200 g de champignons.\n2- 200 g d'épinards.\n3- 6 feuilles de basilic.\n4- 4 gousses d'ail.\n5- 50 g de mozzarella faible en gras.\n6- 30g de parmesan.\n7- 100 ml de lait écrémé.\n8- 3 oeufs.\n9- Une cuillère à soupe d'huile d'olive.\n10- Sel, Poivre noir.\n",
        Preparation: "1- Faire revenir les champignons et l'ail avec un peu d'huile d'olive pendant 5 minutes.\n2- Mélanger le lait, la mozzarella, le parmesan, les œufs, le sel et le poivre noir.\n3- Faire bouillir les épinards et le basilic dans l'eau bouillante pendant 3 minutes immédiatement, puis égoutter et rincer à l'eau froide.\n4- Coupez les épinards et le basilic et combinez-les avec les champignons et l'ail et ajoutez le mélange de lait, puis mélangez-les tous ensemble.\n5- Mettre le mélange dans un plat allant au four (recouvert de papier sulfurisé) à 180°C pendant 15 min.\n"
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


export default connect(mapStateToProps, mapDispatchToProps)(MushroomSpinachCake);






