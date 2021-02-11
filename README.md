# dict
Dict is the object of a list.

# Install

    yarn add @frontekip/dict
    
# Create Dict

```JS
import Dict from '@frontkip/dict';

// object list.
const characters = new Dict();

// add character
// set(<id>, <object>)
characters.set("12345", {
  name: "yasaricli"
});

// get character
// get(<id>)
const character = characters.get("12345");" // set, fetch, remove

// fetch character
// fetch()
character.fetch(); // { name: "yasaricli" }


// update character
// set(<key>, <value>)
character.set("name", "Onur");

// remove character
// remove()
character.remove();


```
