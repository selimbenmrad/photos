import React, { Component } from 'react';
import { connect } from 'react-redux';
import Breakfast from "./EasyHealthyBreakfast"




class BananaStrawberryMix extends Component {

  constructor(props) {
    super(props);


  const   ListeDataEN= [{
    key:1,
    Img: "https://github.com/selimbenmrad/Files/blob/master/yorgranate.jpg?raw=true",
    ListImg: [
      {img: "https://github.com/selimbenmrad/Files/blob/master/icon%20%20vegetarian.png?raw=true"},
    ],
    Title:"Banana Strawberry Mix",
    Min: " 5 min",
    Ingredients: "1- One small banana (ca.100g), sliced.\n2- 5 strawberries (50g,)sliced.\n3-One spoon (10 g) of oats.\n4- 4 apricots (50g), sliced.\n5- One teaspoon (5 g) flaxseed.\n",
    Preparation: "1- Mix all the ingredients together in the bowl.\n"



  }]
  
    const ListeDataAR= [{
      key:1,
      Img: "https://github.com/selimbenmrad/Files/blob/master/yorgranate.jpg?raw=true",
      ListImg: [
        {img: "https://github.com/selimbenmrad/Files/blob/master/icon%20%20vegetarian.png?raw=true"},
      ],
      Title:"مزيج الموز والفراولة",
      Min: "5 دقائق",
      Ingredients: "1- 100 غ موز مقطع إلى شرائح.\n2- 5 حبات فراولة (50 غ) مقطعة إلى شرائح.\n3-ملعقة شوفان (10 غ).\n4- 4 حبات مشمش (50 غ) مقطعة إلى شرائح.\n5- ملعقة صغيرة (5 غ) من بذور الكتان.\n",
      Preparation: "1- ضع جميع المكوّنات في وعاء، واخلطها معًا.\n"



    }]
    const ListeDataFR= [{
      key:1,
      Img: "https://github.com/selimbenmrad/Files/blob/master/yorgranate.jpg?raw=true",
      ListImg: [
        {img: "https://github.com/selimbenmrad/Files/blob/master/icon%20%20vegetarian.png?raw=true"},
      ],
      Title:"Salade de banane et fraise",
      Min: "5 min",
      Ingredients: "1-100 g de banane, tranchée.\n2- 5 fraises (50 g) tranchées.\n3-Une cuillère (10 g) d'avoine.\n4- 4 abricots (50 g), tranchés.\n5- Une cuillère à café (5 g) de graines de lin.\n",
      Preparation: "1-Mélanger tous les Ingredients ensemble.\n"



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


export default connect(mapStateToProps, mapDispatchToProps)(BananaStrawberryMix);







