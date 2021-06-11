import React, { Component } from 'react';
import { connect } from 'react-redux';
import Desserts from "./Desserts"




class  CarrotTunaMix extends Component {

  constructor(props) {
    super(props);


  const   ListeDataEN= [{
    key:1,
        Img: "https://github.com/selimbenmrad/photos/blob/master/English/Programs/PhotoMenusProgram/Week1/Day1/MuseliYogurtBF.jpg?raw=true",
        ListImg: [
          {img: "https://github.com/selimbenmrad/Files/blob/master/icon%20vegan.png?raw=true"},
          {img: "https://github.com/selimbenmrad/Files/blob/master/gluten%20free.png?raw=true"},
        ],
        Title: "Carrot Tuna Mix",
        Min: "5 min",
        Ingredients: "1- 3 carrots (180 g),diced .\n2- 0.22 lb (ca.100g) tuna (canned ,drained).\n3- 0.22 lb (ca.100g) cottage cheese.\n",
        Preparation: "1-In a bowl, combine all ingredients together.\n"  



  }]
  
    const ListeDataAR= [{
      key:1,
        Img: "https://github.com/selimbenmrad/photos/blob/master/English/Programs/PhotoMenusProgram/Week1/Day1/MuseliYogurtBF.jpg?raw=true",
        ListImg: [
          {img: "https://github.com/selimbenmrad/Files/blob/master/icon%20vegan.png?raw=true"},
          {img: "https://github.com/selimbenmrad/Files/blob/master/gluten%20free.png?raw=true"},
        ],
        Title: "مزيج الجزر مع التونة",
        Min: " 5 دقائق",
        Ingredients: "1-ثلاث حبات جزر (180 غ)  مقطعة  إلى مكعبات.\n2-100 غ تونة (معلبة ، مصفى).\n3-100  غ جبن قريش.\n",
        Preparation: "1-في وعاء ، اخلطي جميع المكونات معًا.\n" 



    }]
    const ListeDataFR= [{
      key:1,
      Img: "https://github.com/selimbenmrad/photos/blob/master/English/Programs/PhotoMenusProgram/Week1/Day1/MuseliYogurtBF.jpg?raw=true",
      ListImg: [
        {img: "https://github.com/selimbenmrad/Files/blob/master/icon%20vegan.png?raw=true"},
        {img: "https://github.com/selimbenmrad/Files/blob/master/gluten%20free.png?raw=true"},
      ],
      Title: "Bol de  Carotte au Thon",
      Min: " 5 min",
      Ingredients: "1- 3 carottes (180 g), coupées en dés.\n2- 100g de thon (en conserve, égoutté).\n3- 100 g de fromage cottage.\n",
      Preparation: "1- Dans un bol, mélanger tous les ingrédients ensemble.\n" 



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


export default connect(mapStateToProps, mapDispatchToProps)(CarrotTunaMix);






