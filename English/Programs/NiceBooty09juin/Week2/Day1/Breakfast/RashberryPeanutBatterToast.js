import React, { Component } from 'react';
import { connect } from 'react-redux';
import Desserts from "./Desserts"




class RaspberryPeanutToast extends Component {

  constructor(props) {
    super(props);


  const   ListeDataEN= [{
    key:1,
    Img: "https://github.com/selimbenmrad/photos/blob/master/English/Programs/PhotoMenusProgram/Week2/Day1/RaspberryPeanutToast.jpg?raw=true",
    ListImg: [
      {img: "https://github.com/selimbenmrad/Files/blob/master/icon%20vegan.png?raw=true"},
      {img: "https://github.com/selimbenmrad/Files/blob/master/gluten%20free.png?raw=true"},
    ],
    Title: "Raspberry Peanut Toast",
    Min: " 10 min",
    Ingredients: "1- Two brown toast (ca.60g).\n2- Two tbsps of peanut butter.\n3- 0.22 lb (ca.100g) of raspberry.\n4- Two cooked white eggs.\n",
    Preparation: "1- Spread peanut butter over the bread.\n2- Top the toast with raspberries, serve with white eggs.\n"



  }]
  
    const ListeDataAR= [{
      key:1,
        Img: "https://github.com/selimbenmrad/photos/blob/master/English/Programs/PhotoMenusProgram/Week2/Day1/RaspberryPeanutToast.jpg?raw=true",
        ListImg: [
          {img: "https://github.com/selimbenmrad/Files/blob/master/icon%20vegan.png?raw=true"},
          {img: "https://github.com/selimbenmrad/Files/blob/master/gluten%20free.png?raw=true"},
        ],
        Title: "توست التوت بالفول السوداني",
        Min: " 10 دقائق",
        Ingredients: "1- 2 (60 غ ) توست اسمر.\n2- ملعقتان كبيرتان من زبدة الفول السوداني.\n3- 100 غ من توت العليق.\n4- اثنين من بياض البيض المطبوخ.\n",
        Preparation: "1- وزع زبدة فول السوداني على الخبز.\n2- ضع التوت على التوست و قدمه مع ابيض البيض .\n"



    }]
    const ListeDataFR= [{
      key:1,
        Img: "https://github.com/selimbenmrad/photos/blob/master/English/Programs/PhotoMenusProgram/Week2/Day1/RaspberryPeanutToast.jpg?raw=true",
        ListImg: [
          {img: "https://github.com/selimbenmrad/Files/blob/master/icon%20vegan.png?raw=true"},
          {img: "https://github.com/selimbenmrad/Files/blob/master/gluten%20free.png?raw=true"},
        ],
        Title: "Toast aux framboises et à cacahuéte",
        Min: " 10 min",
        Ingredients: "1- Deux toasts bruns (60g).\n2- Deux cuillère à soupe de beurre de cacahuéte.\n3- 100g de framboise.\n4- Deux blancs d'oeuf cuits.\n",
        Preparation: "1- Tartiner le beurre de cacahuéte sur le pain.\n2- Garnir le pain grillé de framboises, puis servir avec des blancs oeuf.\n"


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


export default connect(mapStateToProps, mapDispatchToProps)(RaspberryPeanutToast);






