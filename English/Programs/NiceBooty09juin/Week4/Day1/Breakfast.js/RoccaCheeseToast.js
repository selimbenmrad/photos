import React, { Component } from 'react';
import { connect } from 'react-redux';
import Breakfast from "./EasyHealthyBreakfast"




class RoccaCheeseToast extends Component {

  constructor(props) {
    super(props);


  const   ListeDataEN= [{
    key:1,
    Img: "https://github.com/selimbenmrad/Files/blob/master/Pap%20Toest.jpg?raw=true",
    ListImg: [
      {img: "https://github.com/selimbenmrad/Files/blob/master/icon%20%20vegetarian.png?raw=true"}
    ],
    Title:"Rocca Cheese Toast",
    Min: " 5 min",
    Ingredients: "1- Four slices of whole-wheat bread toast (100g).\n2- Four tbsp of cottage cheese (60g).\n3- Some rocket leaves, chopped.\n4- One boiled egg, sliced.\n",
    Preparation: "1- Spread cottage cheese  over the toasts then put the  rocket and the egg on top.\n"



  }]
  
    const ListeDataAR= [{
      key:1,
      Img: "https://github.com/selimbenmrad/Files/blob/master/Pap%20Toest.jpg?raw=true",
      ListImg: [
        {img: "https://github.com/selimbenmrad/Files/blob/master/icon%20%20vegetarian.png?raw=true"},
        {img: "https://github.com/selimbenmrad/Files/blob/master/icon%20vegan.png?raw=true"},
      ],
      Title:"توست الجبنه و الجرجير",
      Min: " 5 دقائق",
      Ingredients: "1- أربع شرائح توست من القمح الكامل (100 غ ).\n2- أربع ملاعق كبيرة من جبنة قريش  (60 غ).\n3-بعض أوراق الجرجير مفرومة \n4- بيضة مسلوقة مقطعة إلى شرائح.\n",
      Preparation: "1-  افرد الجبن القريش فوق الخبز المحمص ثم ضعي الجرجير والبيض فوقها.\n"



    }]
    const ListeDataFR= [{
      key:1,
      Img: "https://github.com/selimbenmrad/Files/blob/master/Pap%20Toest.jpg?raw=true",
      ListImg: [
        {img: "https://github.com/selimbenmrad/Files/blob/master/icon%20%20vegetarian.png?raw=true"},
        {img: "https://github.com/selimbenmrad/Files/blob/master/icon%20vegan.png?raw=true"},
      ],
      Title:"Toast au fromage et aux roquette",
      Min: " 5 min",
      Ingredients: "1- Quatre tranches de pain grillé de blé entier (100g).\n2- Quatre cuillères à soupe de fromage cottage (60g).\n3- Quelques feuilles de roquette, hachées.\n4- Un œuf dur, tranché\n",
      Preparation: "1- Étaler du fromage cottage sur les toasts puis mettre les feuilles de roquette et l'œuf dessus.\n"



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


export default connect(mapStateToProps, mapDispatchToProps)(RoccaCheeseToast);








