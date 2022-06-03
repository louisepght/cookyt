//Pour les recettes de cuisine

class RecipeModel{
    name="";
    image="";
    rating=0;
    ingredients=[];
    steps=[];
    constructor(name){
        this.name = name;
    }

    setName(newName){
        this.name=newName;
    }
    setImage(newIm){
        this.image = newIm;
    }
    setRating(newRating){
        this.rating=newRating;
    }
    setIngredients(newIngredientsTab){
        //verifier que c'est bien un tableau d'abord
        this.ingredients = newIngredientsTab;
    }
    setSteps(newStepsTab){
        //verifier que c'est bien un tableau d'abord
        this.steps=newStepsTab;
    }
}

export default RecipeModel;