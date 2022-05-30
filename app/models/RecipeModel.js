//Pour les recettes de cuisine

class RecipeModel{
    name="";
    image="";
    rating=0;
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
}

export default RecipeModel;