import React, { Component } from 'react';
import { connect } from 'react-redux';
import Desserts from "./Desserts"




class  StuffedCucumber extends Component {

  constructor(props) {
    super(props);


  const   ListeDataEN= [{
    key:1,
        Img: "https://github.com/selimbenmrad/photos/blob/master/English/Programs/PhotoMenusProgram/Week1/Day1/MuseliYogurtBF.jpg?raw=true",
        ListImg: [
          {img: "https://github.com/selimbenmrad/Files/blob/master/icon%20vegan.png?raw=true"},
          {img: "https://github.com/selimbenmrad/Files/blob/master/gluten%20free.png?raw=true"},
        ],
        Title: "Cucumbers stuffed with tuna",
        Min: "5 min",
        Ingredients: "1-One cucumber (150 g).\n2- 0.13 lb (ca.60g) tuna (canned ,drained).\n3- 0.22 lb (ca.100 g) cottage cheese.\n4-Two tbsp of parsley (chopped).\n5- salt, black pepper.\n",
        Preparation: "1-Wash the cucumber and cut it in 2 lengthwise and then cut them into sections.\n2-Dig the inside of the cucumbers and remove the seeds.\n3-In a bowl, combine the tuna, cottage cheese , parsley ,salt and pepper.\n4-Fill the inside of the cucumbers with the preparation.\n"  



  }]
  
    const ListeDataAR= [{
      key:1,
        Img: "https://github.com/selimbenmrad/photos/blob/master/English/Programs/PhotoMenusProgram/Week1/Day1/MuseliYogurtBF.jpg?raw=true",
        ListImg: [
          {img: "https://github.com/selimbenmrad/Files/blob/master/icon%20vegan.png?raw=true"},
          {img: "https://github.com/selimbenmrad/Files/blob/master/gluten%20free.png?raw=true"},
        ],
        Title: "خيار  بخليط التونة",
        Min: " 5 دقائق",
        Ingredients: "1- حبة خيار (150 غ).\n2- 60  غ تونة (معلبة ومصفاة).\n3-100 غ جبن قريش.\n4-ملعقتان كبيرتان من البقدونس (مفروم).\n5- ملح ، فلفل أسود.\n",
        Preparation: "1-اغسل الخيار وقطعه إلى قسمين بالطول ثم قطعيه إلى أقسام.\n2-إحفر داخل الخيار وإزال البذور.\n3-في وعاء ، اخلط التونة وجبن قريش والبقدونس والملح والفلفل.\n4-املأ الجزء الداخلي من الخيار بالخليط.\n" 



    }]
    const ListeDataFR= [{
      key:1,
      Img: "https://github.com/selimbenmrad/photos/blob/master/English/Programs/PhotoMenusProgram/Week1/Day1/MuseliYogurtBF.jpg?raw=true",
      ListImg: [
        {img: "https://github.com/selimbenmrad/Files/blob/master/icon%20vegan.png?raw=true"},
        {img: "https://github.com/selimbenmrad/Files/blob/master/gluten%20free.png?raw=true"},
      ],
      Title: "Concombres farcis au thon",
      Min: " 5 min",
      Ingredients: "1-Un concombre (150 g).\n2-60 g de thon ( égoutté).\n3-100g de fromage cottage.\n4-Deux cuillères à soupe de persil (haché).\n5- Sel, poivre noir.\n",
      Preparation: "1- Lavez le concombre et coupez-le en 2 dans le sens de la longueur ​et Les couper ensuite en tronçons.\n2-Creuser l'intérieur des concombres  et enlevez les pépins (avec un vide pomme c’est plus facile.\n3-Dans un bol, mélanger le thon, le fromage  cottage  et le persil. Saler et poivrer.\n4-Remplir l'intérieur des concombres avec la préparation.\n" 



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


export default connect(mapStateToProps, mapDispatchToProps)(StuffedCucumber);






