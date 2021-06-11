import React, { Component } from 'react';
import { connect } from 'react-redux';
import Breakfast from "./EasyHealthyBreakfast"




class ApricotBananaBowl extends Component {

  constructor(props) {
    super(props);


  const   ListeDataEN= [{
    key:1,
    Img: "https://github.com/selimbenmrad/Files/blob/master/yorgranate.jpg?raw=true",
    ListImg: [
      {img: "https://github.com/selimbenmrad/Files/blob/master/icon%20%20vegetarian.png?raw=true"},
    ],
    Title:"Apricot Banana Bowl",
    Min: " 5 min",
    Ingredients: "1- 0.22 lb (ca.100 g) of banana, sliced.\n2- 4 apricots (50g), sliced.\n3- One hard-boiled egg.\n",
    Preparation: "1- Mix the apricots and bananas in a bowl and eat the egg as a second snack.\n"



  }]
  
    const ListeDataAR= [{
      key:1,
      Img: "https://github.com/selimbenmrad/Files/blob/master/yorgranate.jpg?raw=true",
      ListImg: [
        {img: "https://github.com/selimbenmrad/Files/blob/master/icon%20%20vegetarian.png?raw=true"},
      ],
      Title:"مزيج الموز و المشمش",
      Min: "5 دقائق",
      Ingredients: "1- 100 غ موز مقطع إلى شرائح.\n2- 4 حبات مشمش (50 غ) مقطعة إلى شرائح.\n3- بيضة مسلوقة.\n",
      Preparation: "1- إمزج المشمش والموز في وعاء وتناول البيضة كسناك ثاني.\n"



    }]
    const ListeDataFR= [{
      key:1,
      Img: "https://github.com/selimbenmrad/Files/blob/master/yorgranate.jpg?raw=true",
      ListImg: [
        {img: "https://github.com/selimbenmrad/Files/blob/master/icon%20%20vegetarian.png?raw=true"},
      ],
      Title:"Salade de banane et d'abricot",
      Min: "5 min",
      Ingredients: "1- Une banane de 150 g, tranchée.\n2- 4 Abricots (50 g,) tranchées.\n3- Un Oeuf dur.\n",
      Preparation: "1- Mélangez les abricots et les bananes dans un bol et mangez l'œuf comme deuxième collation.\n"



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


export default connect(mapStateToProps, mapDispatchToProps)(ApricotBananaBowl);







