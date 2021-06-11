import React, { Component } from 'react';
import { connect } from 'react-redux';
import Breakfast from "./EasyHealthyBreakfast"




class BlackberriesJuiceWithToast extends Component {

  constructor(props) {
    super(props);


  const   ListeDataEN= [{
    key:1,
    Img: "https://github.com/selimbenmrad/Files/blob/master/Pap%20Toest.jpg?raw=true",
    ListImg: [
      {img: "https://github.com/selimbenmrad/Files/blob/master/icon%20%20vegetarian.png?raw=true"}
    ],
    Title:"Blackberries Juice With Toast",
    Min: " 5 min",
    Ingredients: "1- Four slices of whole-wheat bread toast (100g).\n2- Four tbsp of ricotta cheese (60g).\n3-0.55 lb (250g) blackberries.\n",
    Preparation: "1- Spread ricotta cheese  over the toasts then garnish with a few blackberries.\n2- Blend the blackberries with a glass of water to obtain the juice of the blackberries and serve with ricotta-blackberries toast.\n"



  }]
  
    const ListeDataAR= [{
      key:1,
      Img: "https://github.com/selimbenmrad/Files/blob/master/Pap%20Toest.jpg?raw=true",
      ListImg: [
        {img: "https://github.com/selimbenmrad/Files/blob/master/icon%20%20vegetarian.png?raw=true"},
        {img: "https://github.com/selimbenmrad/Files/blob/master/icon%20vegan.png?raw=true"},
      ],
      Title:"عصير توت اسود مع توست",
      Min: " 5 دقائق",
      Ingredients: "1- أربع شرائح من خبز توست القمح الكامل (100 غ).\n2- أربع ملاعق كبيرة من جبنة الريكوتا (60 غ).\n3- 250 غ من التوت.\n",
      Preparation: "1- افرد  جبنة  الريكوته على شرائح الخبز  و زينه  ببعض  حبات التوت.\n2-اخلط  بالخلاط  الكهربائي التوت  مع كأس من الماء  لنتحصل  عل عصير  التوت  و يقدم مع توست  الريكوتا و التوت.\n"



    }]
    const ListeDataFR= [{
      key:1,
      Img: "https://github.com/selimbenmrad/Files/blob/master/Pap%20Toest.jpg?raw=true",
      ListImg: [
        {img: "https://github.com/selimbenmrad/Files/blob/master/icon%20%20vegetarian.png?raw=true"},
        {img: "https://github.com/selimbenmrad/Files/blob/master/icon%20vegan.png?raw=true"},
      ],
      Title:"Jus De Mûres Avec Toast",
      Min: " 5 min",
      Ingredients: "1- Quatre tranches de pain grillé de blé entier (100 g).\n2- Quatre cuillères à soupe de ricotta (60 g).\n3- 250 g de mûres.\n",
      Preparation: "1- Étalez la ricotta sur le pain grillé, puis décorez-le de quelques mûres.\n2- Mélangez ( par un mixeur)  les mûres avec un verre d'eau pour obtenir du jus de mûre et servez avec des toasts à la ricotta et des mûres.\n"



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


export default connect(mapStateToProps, mapDispatchToProps)(BlackberriesJuiceWithToast);








