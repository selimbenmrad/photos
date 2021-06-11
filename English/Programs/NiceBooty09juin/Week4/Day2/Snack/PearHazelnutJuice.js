import React, { Component } from 'react';
import { connect } from 'react-redux';
import Drinks from "./HealthyDrinks"




class PearSesameJuice extends Component {

  constructor(props) {
    super(props);


  const   ListeDataEN= [{
    key:1,
    Img: "https://github.com/selimbenmrad/Files/blob/master/English/Diet/drinktof/PearSesameJuice.jpg?raw=true",
    ListImg: [
      {img: "https://github.com/selimbenmrad/Files/blob/master/icon%20%20vegetarian.png?raw=true"},
    ],
    Title:"Pear Sesame Juice",
    Min: " 5 min",
    Ingredients: "1- One pear (148 g).\n2- One tsp (5g) of sesame seeds.\n3- One cup of skimmed milk (200ml).\n4- 0.06 lb (30 g) of hazelnuts.\n",
    Preparation: "1- Using the blender mix all ingredients together.\n"



  }]
  
    const ListeDataAR= [{
      key:1,
      Img: "https://github.com/selimbenmrad/Files/blob/master/English/Diet/drinktof/PearSesameJuice.jpg?raw=true",
      ListImg: [
        {img: "https://github.com/selimbenmrad/Files/blob/master/icon%20%20vegetarian.png?raw=true"},
      ],
      Title:"عصير الإجاص (كمثري)و السمسم ",
      Min: "5 دقائق",
      Ingredients: "1- (148 غ) إجاصة (كمثري) واحدة.\n2- (5غ) ملعقة صغيرة من السمسم .\n3- كوب حليب خالي الدسم (200 مل) .\n4- 30 غ من البندق.\n",
      Preparation: "1- اخلط جمیع المكونات بالخلاط الكهربائي.\n"



    }]
    const ListeDataFR= [{
      key:1,
      Img: "https://github.com/selimbenmrad/Files/blob/master/English/Diet/drinktof/PearSesameJuice.jpg?raw=true",
      ListImg: [
        {img: "https://github.com/selimbenmrad/Files/blob/master/icon%20%20vegetarian.png?raw=true"},
      ],
      Title:"Jus de poire et sésame ",
      Min: " 5 min",
      Ingredients: "1- Une poire (148g).\n2- Quatre cuillères à café de sésame.\n3- Une tasse de lait écrémé (200ml).\n4- 30 g de noisette.\n",
      Preparation: "1- Mélanger tous les Ingredients ensemble à l'aide d'un mixeur.\n"



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
        NamePage: < Drinks />,
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


export default connect(mapStateToProps, mapDispatchToProps)(PearSesameJuice);












