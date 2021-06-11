import React, { Component } from 'react';
import { connect } from 'react-redux';
import LunchOrDinner from "./EasyHealthyLunchOrDinner"




class QuinoaVeggiesBowl extends Component {

  constructor(props) {
    super(props);


  const   ListeDataEN= [{
    key:1,
    Img: "https://github.com/selimbenmrad/photos/blob/master/English/Diet/PhotoLunch/quinoaOvoViggie%20(1).jpg?raw=true",
    ListImg: [
      {img: "https://github.com/selimbenmrad/Files/blob/master/icon%20%20vegetarian.png?raw=true"},
      {img: "https://github.com/selimbenmrad/Files/blob/master/high%20protein.png?raw=true"},
    ],
    Title:"Quinoa Veggies Bowl",
    Min: "20-30 min",
    Ingredients: "1- 0.33 lb ( ca 150 g) quinoa.\n2- Four red turnips.\n3- One cucumber (150g).\n4- Two tomatoes (100g).\n5- 0.066 lb (ca. 30 g) of  semi-soft white cheese.\n6- One tbsp of olive oil.\n7- Juice from half lemon.\n8- One tbsp of dried mint powder.\n9- Two boiled eggs.\n",
    Preparation: "1- Boil the quinoa (15 minutes).\n2- Cut the tomatoes, red turnips, cucumbers, then pour them into the bowl.\n3- Mix the quinoa, vegetables, white cheese, oil, lemon juice, and dried mint together.\n4- Top the quinoa salad with the egg.\n "



  }]
  
    const ListeDataAR= [{
      key:1,
        Img: "https://github.com/selimbenmrad/photos/blob/master/English/Diet/PhotoLunch/quinoaOvoViggie%20(1).jpg?raw=true",
        ListImg: [
          {img: "https://github.com/selimbenmrad/Files/blob/master/icon%20%20vegetarian.png?raw=true"},
          {img: "https://github.com/selimbenmrad/Files/blob/master/high%20protein.png?raw=true"},
        ],
        Title:"وعاء خضروات كينوا",
        Min: "20-30 min",
        Ingredients: "1-كينوا 150 غ . \n2- أربع لفت أحمر.\n3-خيار150 غ .\n4-100 غ  طماطم.\n5-  30 غ  من الجبن الأبيض.\n6- ملعقة زيت زيتون.\n7- عصير نصف ليمونة.\n8- ملعقة كبيرة من مسحوق النعناع المجفف.\n9-بيضتان مسلوقتان.\n ",
        Preparation: "1- (غلي الكينوا (15 دقيقة .\n2قطّع الطماطم واللفت الأحمر والخيار ثم اسكبيها في الوعاء.\n3- اخلط الكينوا والخضروات والجبن الأبيض والزيت وعصير الليمون والنعناع معًا.\n4 ضع البيض على سلطة الكينوا.\n "



      }]
    const ListeDataFR= [{
      key:1,
      Img: "https://github.com/selimbenmrad/photos/blob/master/English/Diet/PhotoLunch/quinoaOvoViggie%20(1).jpg?raw=true",
      ListImg: [
        {img: "https://github.com/selimbenmrad/Files/blob/master/icon%20%20vegetarian.png?raw=true"},
        {img: "https://github.com/selimbenmrad/Files/blob/master/high%20protein.png?raw=true"},
      ],
      Title:"Légumes au quinoa",
      Min: "20-30 min",
      Ingredients: "1- 150 g quinoa.\n2- Quatre navets rouges.\n3-Un petit concombre (150g).\n4- Deux tomates (100g).\n5- 30g de fromage blanc faible en matière grasse.\n6- Une cuillère à soupe d'huile d'olive.\n7- Jus d'un demi citron.\n8- Une cuillère à soupe de poudre de menthe séchée.\n9- Deux œufs durs.\n",
      Preparation: "1- Préparer le quinoa puis laisser mijoter pendant 15 min dans l'eau bouillante.\n2- Rincer les tomates, le navet rouge, le concombre, puis les verser dans un saladier en ajoutant le quinoa.\n3- Ajouter le fromage blanc.\n4- Fouetter l'huile, le jus de citron et la menthe séchée dans un petit bol jusqu'à ce que la vinaigrette soit combinée.\n5- Garnir d'œuf bouilli et coupé en dés.\n"



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


export default connect(mapStateToProps, mapDispatchToProps)(QuinoaVeggiesBowl);











