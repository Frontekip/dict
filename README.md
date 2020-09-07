# dictlist
Dictlist is the object of a list.

# Install

    yarn add dictlist
    
# Create DictList

```JS
import DictList from 'dictlist';

// object list.
const characters = new DictList();

// add character
// set(<id>, <object>)
characters.set("12345", {
  name: "yasaricli"
});

// get character
// get(<id>)
const character = characters.get("12345");

// update character
// set(<key>, <value>)
character.set("name", "Onur");

// remove character
// remove()
character.remove();


```
