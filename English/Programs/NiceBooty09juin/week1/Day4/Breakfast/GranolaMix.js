import React, { Component } from 'react';
import { connect } from 'react-redux';
import Desserts from "./Desserts"




class GranolaMix extends Component {

  constructor(props) {
    super(props);


  const   ListeDataEN= [{
    key:1,
    Img: "https://github.com/selimbenmrad/photos/blob/master/English/Programs/PhotoMenusProgram/Week2/Day4/GranolaMix.jpg?raw=true",
    ListImg: [
      {img: "https://github.com/selimbenmrad/Files/blob/master/icon%20vegan.png?raw=true"},
      {img: "https://github.com/selimbenmrad/Files/blob/master/gluten%20free.png?raw=true"},
    ],
    Title: "Granola Mix",
    Min: "5 min",
    Ingredients: "1- Six tbsp of granola (ca. 60 g).\n2- One small apple (90g).\n3- One tbsp of peanut butter (15g).\n4- One cup of soy milk (200 ml).\n",
    Preparation: "1- In the blender, mix the apple,peanut butter, and soy milk together.\n2- Add granola to the mixture.\n" 



  }]
  
    const ListeDataAR= [{
      key:1,
        Img: "https://github.com/selimbenmrad/photos/blob/master/English/Programs/PhotoMenusProgram/Week2/Day4/GranolaMix.jpg?raw=true",
        ListImg: [
          {img: "https://github.com/selimbenmrad/Files/blob/master/icon%20vegan.png?raw=true"},
          {img: "https://github.com/selimbenmrad/Files/blob/master/gluten%20free.png?raw=true"},
        ],
        Title: "قرانيولا متنوعة",
        Min: "5 دقائق",
        Ingredients: "1- ستة ملاعق كبيرة من قرانيولا (حوالي. 60 غ).\n2- (تفاحة (صغيرة ، 90 غ.\n3- ملعقة كبيرة من زبدة الفول السوداني.\n4- كأس من حليب الصويا(200 مل).\n",
        Preparation: "1- إخلط  التفاح و زبدة الفول السوداني و حليب الصويا معا في خلاط كهربائي\n2- اضف القرانيولا الى المزيج.\n" 



    }]
    const ListeDataFR= [{
      key:1,
        Img: "https://github.com/selimbenmrad/photos/blob/master/English/Programs/PhotoMenusProgram/Week2/Day4/GranolaMix.jpg?raw=true",
        ListImg: [
          {img: "https://github.com/selimbenmrad/Files/blob/master/icon%20vegan.png?raw=true"},
          {img: "https://github.com/selimbenmrad/Files/blob/master/gluten%20free.png?raw=true"},
        ],
        Title: "Mélange de Granola",
        Min: "5 min",
        Ingredients: "1- Six cuillères à soupe de granola (environ 60 g).\n2- Une pomme (petite de 90 g).\n3- Une cuillère à soupe de beurre de cacahuéte (15g).\n4- Une tasse de lait de soja (200 ml).\n",
        Preparation: "1- Dans le mixeur, mélanger la pomme, le beurre de cacahuéte et le lait de soja ensemble.\n2- Ajouter le granola au mélange.\n" 

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


export default connect(mapStateToProps, mapDispatchToProps)(GranolaMix);






