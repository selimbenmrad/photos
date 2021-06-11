import React, { Component } from 'react';
import { connect } from 'react-redux';
import Desserts from "./Desserts"




class RiceWithPumpkinSauce extends Component {

  constructor(props) {
    super(props);


  const   ListeDataEN= [{
    key:1,
    Img: "https://github.com/selimbenmrad/photos/blob/master/English/Diet/PhotoLunch/FevabeanswithChard.jpg?raw=true",
    ListImg: [
      {img: "https://github.com/selimbenmrad/Files/blob/master/icon%20vegan.png?raw=true"},
      {img: "https://github.com/selimbenmrad/Files/blob/master/gluten%20free.png?raw=true"},
    ],
    Title: "Rice With Pumpkin Sauce",
    Min: "35 min",
    Ingredients: "1-0.44 lb (200g) of chicken breast.\n2-0.55 lb (250g) of pumpkin.\n3-A small union.\n4-A little parsley.\n5-0.33 lb (150g) of  brown rice .\n6-A tablespoon of olive oil.\n7-Salt, black pepper.\n8-Turmeric.\n9-Two cloves of garlic.\n",
    Preparation: "1-Cook diced pumpkin in boiling water for 15 minutes then drain.\n2-Mash the pumpkin with garlic and season with salt, black pepper and olive oil.\n3-Cook the rice in boiling water with a little turmeric for 5 minutes while stirring.\n4-Drain the rice from the water and season with salt and black pepper.\n5-Chop the parsley and onions well and mix them with the rice.\n6-Season the chicken with salt and black pepper.\n7-Put the chicken in the oven for 15 minutes at a temperature of 150 degrees.\n8-In a bowl, place chicken, rice, and pumpkin sauce.\n" 


  }]
  
    const ListeDataAR= [{
      key:1,
        Img: "https://github.com/selimbenmrad/photos/blob/master/English/Diet/PhotoLunch/FevabeanswithChard.jpg?raw=true",
        ListImg: [
          {img: "https://github.com/selimbenmrad/Files/blob/master/icon%20vegan.png?raw=true"},
          {img: "https://github.com/selimbenmrad/Files/blob/master/gluten%20free.png?raw=true"},
        ],
        Title: "ارز بصلصة اليقطين",
        Min: "35 دقيقة",
        Ingredients: "1- 200 غرام من صدر الدجاج.\n2- 250 غرام من اليقطين\n3- بصلة صغيرة.\n4- القليل من البقدونس.\n5- 150 غرام من الأرز الكامل.\n6- ملعقة كبيرة زيت زيتون.\n7-ملح، فلفل أسود.\n8- كركم.\n9- فصين من الثوم.\n",
        Preparation: "1- اطهي اليقطين المقطع لمكعبات في الماء المغلي لمدة 15 دقيقة، ثم صفيه  من الماء.\n2-أهرس اليقطين مع الثوم ويتبل بالملح والفلفل الأسود وزيت زيتون.\n3- اطهي الأرز في الماء المغلي  مع القليل من الكركم لمدة 5 دقائق مع تحريك.\n4- قم بتصفية الأرز من الماء و يتبل بالملح و الفلفل الأسود.\n5- افرم البقدونس و البصل جيدا و امزجه مع الأرز.\n6- قم  بتتبيل الدجاج بالملح، الفلفل الأسود.\n7- ضع الدجاج في الفرن لمدة 15 دقيقة على حرارة 150 درجة.\n8- في صحن ضع الدجاج والأرز مع صلصة اليقطين .\n" 


    }]
    const ListeDataFR= [{
      key:1,
        Img: "https://github.com/selimbenmrad/photos/blob/master/English/Diet/PhotoLunch/FevabeanswithChard.jpg?raw=true",
        ListImg: [
          {img: "https://github.com/selimbenmrad/Files/blob/master/icon%20vegan.png?raw=true"},
          {img: "https://github.com/selimbenmrad/Files/blob/master/gluten%20free.png?raw=true"},
        ],
        Title: "Riz au sauce de citrouille",
        Min: " 35 min",
        Ingredients: "1- 200g de  blanc de poulet.\n2- 250 g de citrouille\n3- Petit oignon.\n4- Un peu de persil.\n5- 150 g de riz complet.\n6- Une cuillére à soupe de d'huile d'olive.\n7- Sel, poivre noir.\n8-Curcuma.\n9- Deux gousses d'ail.\n",
        Preparation: "1- Faites cuire la citrouille en dés dans l'eau bouillante pendant 15 minutes puis l'égoutter.\n2- Écrasez la citrouille avec l'ail et assaisonnez avec du sel, du poivre noir et de l'huile d'olive.\n3- Faites cuire le riz dans de l'eau bouillante avec un peu de curcuma pendant 5 minutes en remuant.\n4- Égouttez le riz de l'eau et assaisonnez avec du sel et du poivre noir.\n5- Hachez bien le persil et les oignons et mélangez avec du riz.\n6- Assaisonnez le poulet avec du sel et du poivre noir.\n7- Placez le poulet au four pendant 15 minutes à 150 degrés.\n8- Dans un bol, placer le poulet et le riz avec la sauce à la citrouille.\n" 

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


export default connect(mapStateToProps, mapDispatchToProps)(RiceWithPumpkinSauce);






