
class AddModal extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      description: '',
      instructions: '',
      ingredients: '',
      errors: {
        name: '',
        description: '',
        instructions: '',
        ingredients: '' } };



    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  //Set this components state based on the name of the input
  handleInputChange(event) {
    const value = event.target.value;
    const name = event.target.name;

    this.setState({
      [name]: value });

  }

  //Validation and submission to parent for state change
  handleSubmit(event) {
    let results = validateIngredient(this.state);

    if (results.hasErrors === false) {
      //Success!
      this.props.onClick(this.state);
      jQuery('#addModal').modal('hide');
    } else {
      //Error!
      this.setState({
        errors: results.errors });

    }

  }

  render() {
    return (
      React.createElement("div", { className: "modal fade", id: "addModal", tabIndex: "-1", role: "dialog", "aria-labelledby": "addModalLabel" },
      React.createElement("div", { className: "modal-dialog", role: "document" },
      React.createElement("div", { className: "modal-content" },
      React.createElement("div", { className: "modal-header" },
      React.createElement("button", { type: "button", className: "close", "data-dismiss": "modal", "aria-label": "Close" }, React.createElement("span", { "aria-hidden": "true" }, "\xD7")),
      React.createElement("h4", { className: "modal-title", id: "addModalLabel" }, "Ajouter une recette")),

      React.createElement("div", { className: "modal-body" },
      React.createElement("table", { className: "table" },
      React.createElement("tbody", null,
      React.createElement("tr", null,
      React.createElement("th", null, "Nom"),
      React.createElement("td", { className: this.state.errors.name }, React.createElement("input", { type: "text", className: "form-control", id: "add-name",
        name: "name",
        value: this.state.name,
        onChange: this.handleInputChange }))),

      React.createElement("tr", null,
      React.createElement("th", null, "Description"),
      React.createElement("td", { className: this.state.errors.description }, React.createElement("input", { type: "text", className: "form-control", id: "add-description",
        name: "description",
        value: this.state.description,
        onChange: this.handleInputChange }))),

      React.createElement("tr", null,
      React.createElement("th", null, "Instructions"),
      React.createElement("td", { className: this.state.errors.instructions }, React.createElement("textarea", { className: "form-control", style: { resize: "none" }, id: "add-instructions", rows: "5",
        name: "instructions",
        value: this.state.instructions,
        onChange: this.handleInputChange }))),

      React.createElement("tr", null,
      React.createElement("th", null, "Ingrédients"),
      React.createElement("td", { className: this.state.errors.ingredients }, React.createElement("textarea", { className: "form-control", style: { resize: "none" }, id: "add-ingredients", rows: "5",
        name: "ingredients",
        value: this.state.ingredients,
        onChange: this.handleInputChange })))))),





      React.createElement("div", { className: "modal-footer" },
      React.createElement("button", { type: "button", className: "btn btn-default", "data-dismiss": "modal" }, "Fermer"),
      React.createElement("button", { type: "button", className: "btn btn-primary", id: "add-save", onClick: () => this.handleSubmit(this.state) }, "Sauvegarder"))))));





  }}


class EditModal extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      id: null,
      name: '',
      description: '',
      instructions: '',
      ingredients: '',

      errors: {
        name: '',
        description: '',
        instructions: '',
        ingredients: '' } };



    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.componentWillReceiveProps = this.componentWillReceiveProps.bind(this);
  }

  //Set this components state based on the name of the input
  handleInputChange(event) {
    const value = event.target.value;
    const name = event.target.name;

    this.setState({
      [name]: value });

  }

  //Validation and submission to parent for state change
  handleSubmit(event) {
    let results = validateIngredient(this.state);

    if (results.hasErrors === false) {
      //Success!
      this.props.onClick(this.state);
      jQuery('#editModal').modal('hide');
    } else {
      //Error!
      this.setState({
        errors: results.errors });

    }
  }

  //when the user clicks on any of the "Edit" buttons, we have to update our modal so it contains the new information
  componentWillReceiveProps(nextProps) {
    if (nextProps.recipe.id !== this.state.id) {
      this.setState({
        id: nextProps.recipe.id,
        name: nextProps.recipe.name,
        description: nextProps.recipe.description,
        instructions: nextProps.recipe.instructions,
        ingredients: nextProps.recipe.ingredients });

    }
  }

  render() {

    return (
      React.createElement("div", { className: "modal fade", id: "editModal", tabIndex: "-1", role: "dialog", "aria-labelledby": "editModalLabel" },
      React.createElement("div", { className: "modal-dialog", role: "document" },
      React.createElement("div", { className: "modal-content" },
      React.createElement("div", { className: "modal-header" },
      React.createElement("button", { type: "button", className: "close", "data-dismiss": "modal", "aria-label": "Close" }, React.createElement("span", { "aria-hidden": "true" }, "\xD7")),
      React.createElement("h4", { className: "modal-title", id: "editModalLabel" }, "Editer la  Recette")),

      React.createElement("div", { className: "modal-body" },
      React.createElement("table", { className: "table" },
      React.createElement("tbody", null,
      React.createElement("tr", null,
      React.createElement("th", null, "Nom"),
      React.createElement("td", { className: this.state.errors.name }, React.createElement("input", { type: "text", className: "form-control", id: "edit-name",
        name: "name",
        value: this.state.name,
        onChange: this.handleInputChange }))),

      React.createElement("tr", null,
      React.createElement("th", null, "Description"),
      React.createElement("td", { className: this.state.errors.description }, React.createElement("input", { type: "text", className: "form-control", id: "edit-description",
        name: "description",
        value: this.state.description,
        onChange: this.handleInputChange }))),

      React.createElement("tr", null,
      React.createElement("th", null, "Instructions"),
      React.createElement("td", { className: this.state.errors.instructions }, React.createElement("textarea", { className: "form-control", style: { resize: "none" }, id: "edit-instructions", rows: "5",
        name: "instructions",
        value: this.state.instructions,
        onChange: this.handleInputChange }))),

      React.createElement("tr", null,
      React.createElement("th", null, "Ingrédients"),
      React.createElement("td", { className: this.state.errors.ingredients }, React.createElement("textarea", { className: "form-control", style: { resize: "none" }, id: "edit-ingredients", rows: "5",
        name: "ingredients",
        value: this.state.ingredients,
        onChange: this.handleInputChange })))))),





      React.createElement("div", { className: "modal-footer" },
      React.createElement("button", { type: "button", className: "btn btn-default", "data-dismiss": "modal" }, "Fermer"),
      React.createElement("button", { type: "button", className: "btn btn-primary", id: "edit-save", onClick: () => this.handleSubmit(this.state) }, "Sauvegarder"))))));





  }}


class DeleteModal extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      id: null,
      name: '',
      description: '',
      instructions: '',
      ingredients: '' };


    this.componentWillReceiveProps = this.componentWillReceiveProps.bind(this);
  }

  //when the user clicks on any of the "Delete" buttons, we have to update our modal so it contains the new information
  componentWillReceiveProps(nextProps) {

    if (nextProps.recipe && nextProps.recipe.id !== this.state.id) {
      this.setState({
        id: nextProps.recipe.id,
        name: nextProps.recipe.name,
        description: nextProps.recipe.description,
        instructions: nextProps.recipe.instructions,
        ingredients: nextProps.recipe.ingredients });

    }

  }

  render() {
    return (
      React.createElement("div", { className: "modal fade", id: "deleteModal", tabIndex: "-1", role: "dialog", "aria-labelledby": "deleteModalLabel" },
      React.createElement("div", { className: "modal-dialog", role: "document" },
      React.createElement("div", { className: "modal-content" },
      React.createElement("div", { className: "modal-header" },
      React.createElement("button", { type: "button", className: "close", "data-dismiss": "modal", "aria-label": "Close" }, React.createElement("span", { "aria-hidden": "true" }, "\xD7")),
      React.createElement("h4", { className: "modal-title", id: "addModalLabel" }, "Les Amicals du Lycée Fulbert")),

      React.createElement("div", { className: "modal-body" },
      React.createElement("h3", null, "Etes-vous sûr de vouloir supprimer ? ", '"' + this.state.name + '"', "?")),

      React.createElement("div", { className: "modal-footer" },
      React.createElement("button", { type: "button", className: "btn btn-default", "data-dismiss": "modal" }, "CANCEL"),
      React.createElement("button", { type: "button", className: "btn btn-danger", id: "delete", "data-delete": "", onClick: () => this.props.onClick(this.state) }, "DELETE"))))));





  }}



function Ingredient(props) {
  var ingredientList = [];
  for (var i = 0; i < props.recipe.ingredients.length; i++) {
    ingredientList.push(React.createElement("li", { key: props.index + '' + i }, props.recipe.ingredients[i]));
  }

  return React.createElement("table", { className: "table table-striped" },
  React.createElement("tbody", null,
  React.createElement("tr", { role: "button", className: 'recipe-' + props.recipe.id },
  React.createElement("td", { className: "index", "data-toggle": "collapse", href: '#recipe-' + props.recipe.id, "aria-expanded": "false" }, props.index),
  React.createElement("td", { className: "name", "data-toggle": "collapse", href: '#recipe-' + props.recipe.id, "aria-expanded": "false" }, props.recipe.name),
  React.createElement("td", { className: "description", "data-toggle": "collapse", href: '#recipe-' + props.recipe.id, "aria-expanded": "false" }, props.recipe.description),
  React.createElement("td", { className: "date", "data-toggle": "collapse", href: '#recipe-' + props.recipe.id, "aria-expanded": "false" }, props.recipe.date),
  React.createElement("td", { className: "edit" }, React.createElement("button", { type: "button", className: "btn btn-warning", "data-toggle": "modal", "data-target": "#editModal", onClick: () => props.setupEdit(props.recipe) }, "Modifier")),
  React.createElement("td", { className: "delete" }, React.createElement("button", { type: "button", className: "btn btn-danger", "data-toggle": "modal", "data-target": "#deleteModal", onClick: () => props.setupDelete(props.recipe) }, "Supprimer"))),

  React.createElement("tr", { className: 'recipe-' + props.recipe.id },
  React.createElement("td", { colSpan: "6" },
  React.createElement("div", { className: "collapse recipe", id: 'recipe-' + props.recipe.id },
  React.createElement("div", { className: "col-50" },
  React.createElement("div", { className: "instructions" },
  React.createElement("h3", null, "Instructions"),
  props.recipe.instructions)),


  React.createElement("div", { className: "col-50" },
  React.createElement("div", { className: "ingredients" },
  React.createElement("h3", null, "Ingredients"),
  React.createElement("ul", null,
  ingredientList))),



  React.createElement("div", { className: "clearfix" }))))));





}

function Ingredients(props) {
  const recipes = props.recipes;
  const setupEdit = props.setupEdit;
  const setupDelete = props.setupDelete;
  return React.createElement("div", null,
  recipes.map((recipe, index) =>

  React.createElement(Ingredient, { key: 'ingredient' + recipe.id,
    recipe: recipe,
    index: index + 1,
    setupEdit: setupEdit,
    setupDelete: setupDelete })));


}

class App extends React.Component {
  constructor() {
    super();
    const emptyRecipe = {
      id: null,
      name: '',
      date: '',
      description: '',
      instructions: '',
      ingredients: [] };


    this.state = {
      edit: emptyRecipe };


    this.addRecipe = this.addRecipe.bind(this);
    this.setupEdit = this.setupEdit.bind(this);
    this.editRecipe = this.editRecipe.bind(this);
    this.setupDelete = this.setupDelete.bind(this);
    this.deleteRecipe = this.deleteRecipe.bind(this);
  }

  componentWillMount() {
    let recipes = [];
    let recipeID = 0;

    // Retrieve
    var recipeState = getLocal("recipeState");

    if (recipeState !== null) {
      recipes = recipeState.recipes;
      recipeID = recipeState.recipeID;
    } else {
      //initial recipes
      recipes = [
      {
        id: 1,
        name: 'Recette 1',
        date: '1/10/2017',
        description: 'Ceci est la Description',
        instructions: 'Ici se trouvent les instructions',
        ingredients: ['Ingredient 1', 'Ingredient 2', 'Ingredient 3'] },

      {
        id: 2,
        name: 'Recipe 2',
        date: '1/11/2017',
        description: 'Ceci est la Description 2',
        instructions: 'Ici se trouvent les instructions 2',
        ingredients: ['Ingredient 11', 'Ingredient 21', 'Ingredient 31'] }];



      recipeID = 3;

    }

    this.setState({
      recipes: recipes,
      recipeID: recipeID });

  }

  /**
     * Add a new recipe to our state
     */
  addRecipe(addRecipe) {
    const ingredients = addRecipe.ingredients.split(",");
    const d = new Date();

    const newRecipe = {
      id: this.state.recipeID,
      name: addRecipe.name,
      date: d.getMonth() + '/' + d.getDate() + '/' + d.getFullYear(),
      description: addRecipe.description,
      instructions: addRecipe.instructions,
      ingredients: ingredients };


    const newState = {
      recipes: this.state.recipes.concat([newRecipe]),
      recipeID: ++this.state.recipeID };


    this.setState(newState);

    storeLocal("recipeState", newState);
  }

  editRecipe(editRecipe) {
    let didEdit = false;
    const recipeList = this.state.recipes;

    if (editRecipe) {

      for (var i = 0; i < recipeList.length; i++) {
        //which recipe are we editing?
        if (recipeList[i].id === editRecipe.id) {
          recipeList[i] = editRecipe;

          const d = new Date();
          //set new date for this recipe
          recipeList[i].date = d.getMonth() + '/' + d.getDate() + '/' + d.getFullYear();
          didEdit = true;
          break;
        }
      }

      //if we edited one of our recipes
      if (didEdit) {
        if (typeof recipeList.ingredients === 'string') {
          recipeList.ingredients = recipeList.ingredients.split(",");
        }

        this.setState({
          recipes: recipeList });


        const newState = {
          recipes: recipeList };


        storeLocal("recipeState", newState);
      }
    }
  }

  setupEdit(recipe) {
    this.setState({
      edit: recipe });

  }

  setupDelete(recipe) {
    this.setState({
      delete: recipe });

  }

  deleteRecipe(deleteRecipe) {
    let didDelete = false;
    const recipeList = this.state.recipes;

    if (deleteRecipe) {

      for (var i = 0; i < recipeList.length; i++) {
        //which recipe are we editing?
        if (recipeList[i].id === deleteRecipe.id) {
          recipeList.splice(i, 1);
          didDelete = true;
          break;
        }
      }

      //if we deleted one of our recipes
      if (didDelete) {

        this.setState({
          recipes: recipeList });


        const newState = {
          recipes: recipeList };


        storeLocal("recipeState", newState);

        jQuery('#deleteModal').modal('hide');
      }
    }
  }

  render() {
    return React.createElement("div", null,
    React.createElement(Ingredients, { recipes: this.state.recipes, setupEdit: this.setupEdit, setupDelete: this.setupDelete }),
    React.createElement(AddModal, { onClick: this.addRecipe }),
    React.createElement(EditModal, { onClick: this.editRecipe, recipe: this.state.edit }),
    React.createElement(DeleteModal, { onClick: this.deleteRecipe, recipe: this.state.delete }));

  }}



// ========================================

ReactDOM.render(
React.createElement(App, null),
document.getElementById('app'));




// ====================================
//              FUNCTIONS
// ====================================


/**
 * SAVE any value to local storage
 * @param string Storage name
 * @param mixed Storage Value
 */
function storeLocal(name, value) {
  if (typeof Storage !== "undefined") {
    localStorage.setItem(name, JSON.stringify(value));
  } else {
    //if we do not have local storage for some reason try to use cookies
    //we are just saving for 1 day for now
    setCookie(name, JSON.stringify(value), 1);
  }
}

/**
   * GET any value to local storage
   * @param  string cname  Storage Name
   * @return string        Storage Value
   */
function getLocal(name) {

  if (typeof Storage !== "undefined") {
    return JSON.parse(localStorage.getItem(name));
  } else {
    //if we do not have local storage for some reason try to use cookies
    return JSON.parse(getCookie(name));
  }

}

/**
   * Set a Cookie
   * @param string cname  Cookie Name
   * @param mixed cvalue  Cookie Value
   * @param int exdays How many days before expire
   */
function setCookie(cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
  var expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

/**
   * Get a cookie
   * @param  string cname  Cookie Name
   * @return string        Cookie Value
   */
function getCookie(cname) {
  var name = cname + "=";
  var ca = document.cookie.split(';');
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

/**
   * Delete a Cookie
   * @param string cname  Cookie Name
   */
function deleteCookie(cname) {
  setCookie(cname, '', -1);
}


function validateIngredient(ingredient, modalerrors) {
  let errors = ingredient.errors;
  let hasErrors = false;

  if (!ingredient.name) {
    errors.name = 'has-error';
    hasErrors = true;
  } else {
    errors.name = '';
  }

  if (!ingredient.description) {
    errors.description = 'has-error';
    hasErrors = true;
  } else {
    errors.description = '';
  }

  if (!ingredient.instructions) {
    errors.instructions = 'has-error';
    hasErrors = true;
  } else {
    errors.instructions = '';
  }

  if (!ingredient.ingredients) {
    errors.ingredients = 'has-error';
    hasErrors = true;
  } else {
    errors.ingredients = '';
  }

  return {
    hasErrors: hasErrors,
    errors: errors };

}