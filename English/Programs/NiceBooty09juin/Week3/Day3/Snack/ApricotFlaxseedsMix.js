import React, { Component } from 'react';
import { connect } from 'react-redux';
import Desserts from "./Desserts"




class ApricotFlaxseedsMix extends Component {

  constructor(props) {
    super(props);


  const   ListeDataEN= [{
    key:1,
        Img: "https://github.com/selimbenmrad/photos/blob/master/English/Programs/PhotoMenusProgram/Week1/Day1/MuseliYogurtBF.jpg?raw=true",
        ListImg: [
          {img: "https://github.com/selimbenmrad/Files/blob/master/icon%20vegan.png?raw=true"},
          {img: "https://github.com/selimbenmrad/Files/blob/master/gluten%20free.png?raw=true"},
        ],
        Title: "Apricot Flaxseeds Mix",
        Min: "5 min",
        Ingredients: "1- 0.22 lb (ca.100g) apricot.\n2- 0.11 lb strawberries (ca.50 g).\n3- One tsp of flaxseed (15g).\n",
        Preparation: "1- Mix the ingredient together in a bowl.\n" 



  }]
  
    const ListeDataAR= [{
      key:1,
        Img: "https://github.com/selimbenmrad/photos/blob/master/English/Programs/PhotoMenusProgram/Week1/Day1/MuseliYogurtBF.jpg?raw=true",
        ListImg: [
          {img: "https://github.com/selimbenmrad/Files/blob/master/icon%20vegan.png?raw=true"},
          {img: "https://github.com/selimbenmrad/Files/blob/master/gluten%20free.png?raw=true"},
        ],
        Title: "مزيج بذور الكتان  مع المشمش",
        Min: " 5 دقائق",
        Ingredients: "1- 100 غ  مشمش.\n2- 50 غ  فراولة.\n3- ملعقة صغيرة من بذور الكتان (15 غ).\n",
        Preparation: "1- مزج جميع المكونات في وعاء.\n" 



    }]
    const ListeDataFR= [{
      key:1,
      Img: "https://github.com/selimbenmrad/photos/blob/master/English/Programs/PhotoMenusProgram/Week1/Day1/MuseliYogurtBF.jpg?raw=true",
      ListImg: [
        {img: "https://github.com/selimbenmrad/Files/blob/master/icon%20vegan.png?raw=true"},
        {img: "https://github.com/selimbenmrad/Files/blob/master/gluten%20free.png?raw=true"},
      ],
      Title: "Bol de graines de lin et abricot",
      Min: " 5 min",
      Ingredients: "1- 100g d'abricot.\n2- 50g de fraises.\n3- Une cuillère à café de graines de lin (15g).\n",
      Preparation: "1- Mélangez les ingrédients dans un bol.\n" 



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


export default connect(mapStateToProps, mapDispatchToProps)(ApricotFlaxseedsMix);






