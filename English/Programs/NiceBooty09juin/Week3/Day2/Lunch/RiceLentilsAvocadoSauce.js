import React, { Component } from 'react';
import { connect } from 'react-redux';
import LunchOrDinner from "./EasyHealthyLunchOrDinner"




class RiceLentilsAvocadoSauce extends Component {

  constructor(props) {
    super(props);


  const   ListeDataEN= [{
    key:1,
    Img: "https://github.com/selimbenmrad/photos/blob/master/English/Diet/PhotoLunch/RiceAndLentilAVOCADOsauce2.jpg?raw=true",
    ListImg: [
      {img: "https://github.com/selimbenmrad/Files/blob/master/gluten%20free.png?raw=true"},
      {img: "https://github.com/selimbenmrad/Files/blob/master/icon%20%20vegetarian.png?raw=true"},
    ],
    Title:"Rice Lentils Avocado Sauce",
    Min: "40 min",
    Ingredients: "1- 0.33 lb (ca. 150 g) of rice.\n2- 0.22 lb (ca. 100 g) of green lentils (soaked).\n3- One small onion.\n4- One cup (150 g) green cabbage,chopped.\n5- One avocado (100g).\n6- Three tbsps of cottage Cheese (30g).\n7- One tbsp of olive oil.\n8- One cup of chopped parsely.\n9-salt and black pepper.\n ",
    Preparation: "1- Cook the rice and lentils (separately) in boiling water over medium heat until tender.\n2- Heat the oil in a frying pan then add the onions and cabbage.\n3- Add the lentils and rice to the pan, stir to combine, then place them on a plate.\n4- Mix avocado with cottage cheese, salt, and black pepper to make the avocado sauce.\n5- Add the avocado sauce to the rice and sprinkle with some parsley.\n"



  }]
  
    const ListeDataAR= [{
      key:1,
      Img: "https://github.com/selimbenmrad/photos/blob/master/English/Diet/PhotoLunch/RiceAndLentilAVOCADOsauce2.jpg?raw=true",
      ListImg: [
        {img: "https://github.com/selimbenmrad/Files/blob/master/gluten%20free.png?raw=true"},
        {img: "https://github.com/selimbenmrad/Files/blob/master/icon%20%20vegetarian.png?raw=true"},
      ],
      Title:"الأرزّ مع العدس و سلطة الأفوكادو",
      Min: " 40 دقيقة",
      Ingredients: "1- 150 غرام  من الأرزّ.\n2- 100(منقوع)غرام من العدس.\n3- بصلة صغيرة مقطّعة.\n4- 150 غ  ملفوف (كرنب) خضراء مقطّعة.\n5- (100 غ ) حبّة أفوكادو واحدة.\n6- (30غ) ثلاث ملاعق أكل من جبنة القريش.\n7- ملعقة أكل من زيت الزّيتون.\n8- القليل  من البقدونس المقطّع.\n9-ملح  ,فلفل الأسود.\n ",
      Preparation: "1- قم بطهي الأرز والعدس (بشكل منفصل) في الماء المغلي على نار متوسطة حتى يصبح طريًا.\n2- سخن الزيت في مقلاة ثم أضف البصل والملفوف  و قلب إلى أن يصبح  البصل شفاف .\n3- أضف العدس والأرز إلى المقلاة و إمزج  جيداً  ثم ضعها في طبق.\n4-  لعمل صلصة الأفوكادو : اخلطي الأفوكادو مع الجبن والملح والفلفل الأسود.\n5- أضف صلصة الأفوكادو إلى الأرز ورش القليل من البقدونس.\n"  



    }]
    const ListeDataFR= [{
      key:1,
      Img: "https://github.com/selimbenmrad/photos/blob/master/English/Diet/PhotoLunch/RiceAndLentilAVOCADOsauce2.jpg?raw=true",
      ListImg: [
        {img: "https://github.com/selimbenmrad/Files/blob/master/gluten%20free.png?raw=true"},
        {img: "https://github.com/selimbenmrad/Files/blob/master/icon%20%20vegetarian.png?raw=true"},
      ],
      Title:"Riz et lentilles avec sauce à l'avocat",
      Min: "40 min",
      Ingredients: "1- 150g de riz rincé et égoutté.\n2- 100g de lentilles (trempées, rincées et égouttées).\n3- Un petit oignon.\n4-150 g de chou vert hachée.\n5- Un avocat (100g).\n6- Trois cuillères à soupe de fromage cottage (30g).\n7- Une cuillères à soupe d'huile d'olive.\n8- Une tasse de persil haché.\n9- sel , poivre noir.\n",
      Preparation: "1- Faitre cuire le riz et les lentilles (séparément) dans  de l'eau bouillante à feu moyen jusqu'à ce qu'il ramollisse.\n2- Faire chauffer une cuillère à soupe d'huile dans une poêle puis ajouter les oignons et le chou et remuez jusqu'à ce que les oignons soient translucides.\n3- Ajouter les lentilles et le riz dans le poêle , remuer jusqu'à ce qu'ils soient combinés, puis mettre les dans une assiette. \n4- Pour faire de la sauce à l'avocat: Mélanger l'avocat, le fromage, le sel et le poivre noir.\n5- Ajouter la sauce à l'avocat sur le riz avec un peu de persil.\n"



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


export default connect(mapStateToProps, mapDispatchToProps)(RiceLentilsAvocadoSauce);


