import React, { Component } from 'react';
import { connect } from 'react-redux';
import Desserts from "./Desserts"




class SteamedVeggiesTuna extends Component {

  constructor(props) {
    super(props);


  const   ListeDataEN= [{
    key:1,
        Img: "https://github.com/selimbenmrad/photos/blob/master/English/Programs/PhotoMenusProgram/Week1/Day2/SteamedVeggiesTuna.jpg?raw=true",
        ListImg: [
          {img: "https://github.com/selimbenmrad/Files/blob/master/icon%20vegan.png?raw=true"},
        ],
        Title:"Steamed Veggies Tuna",
        Min: " 20-30 min",
        Ingredients: "1- Three  small potatoes (150 g).\n2- Three carrots (180g).\n3- One onion.\n4- Some parsley.\n5- One tbsp of olive oil.\n6- Two boiled eggs.\n7- 0.35 lb (1ca.60g) tuna (drained).\n",
        Preparation: "1- Cook (steam) the vegetables for five minutes until tender.\n2-Cut the vegetables into slices.\n3-Top the vegetables with boiled egg and tuna\n4-Sprinkle the vegetables with salt, parsley and parsley.\n"



  }]
  
    const ListeDataAR= [{
      key:1,
      Img: "https://github.com/selimbenmrad/photos/blob/master/English/Programs/PhotoMenusProgram/Week1/Day2/SteamedVeggiesTuna.jpg?raw=true",
      ListImg: [
        {img: "https://github.com/selimbenmrad/Files/blob/master/icon%20vegan.png?raw=true"},
      ],
      Title:"خضار مع التونة",
      Min: "30 دقيقة",
      Ingredients: "1- ثلاث حبات بطاطس صغيرة (150 غ).\n2- (غ180) ثلاث حبات جزر.\n3- بصلة واحدة.\n4- بعض البقدونس.\n5- ملعقة كبيرة من زيت الزيتون.\n6- بيضتان مسلوقتان.\n7-  160  غ تونة (معلبة ومصفاة) .\n",
      Preparation: "1- اطهي الخضار على البخار لمدة خمس دقائق حتى تنضج.\n2-قطع الخضار الى قطع صغيرة.\n3-ضع البيض المسلوق و التونة فوق الخضار \n4-رش قليل من الملح و البقدونس فوق الخضار.\n"



    }]
    const ListeDataFR= [{
      key:1,
        Img: "https://github.com/selimbenmrad/photos/blob/master/English/Programs/PhotoMenusProgram/Week1/Day2/SteamedVeggiesTuna.jpg?raw=true",
        ListImg: [
          {img: "https://github.com/selimbenmrad/Files/blob/master/icon%20vegan.png?raw=true"},
        ],
        Title:"Thon aux légumes à la vapeur",
        Min: "30 min",
        Ingredients: "1-Trois petites pommes de terre (150 g).\n2- Trois carottes (180g).\n3- Un oignon.\n4- Un peu de persil.\n5- Une cuillère à soupe d'huile d'olive.\n6- Deux œufs durs.\n7- 160 g thon.\n",
        Preparation: "1-Faites cuire  au vapeur les légumes pendant cinq minutes jusqu'à ce qu'ils soient tendres.\n2-Coupez les légumes en tranches.\n3-Garnissez les légumes d'œuf dur et de thon.\n4-Saupoudrez les légumes de sel, de persil.\n"
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


export default connect(mapStateToProps, mapDispatchToProps)(SteamedVeggiesTuna);






