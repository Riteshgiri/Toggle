# Toggle Labels ![Build Status](http://img.shields.io/travis/badges/badgerbadgerbadger.svg?style=flat-square) [![License](http://img.shields.io/:license-ISC-blue.svg?style=flat-square)](http://badges.ISC-license.org)

Toggle Button between two options with flexibility to assign labels to the two options for toggle, rather than the generic 'ON/OFF'

Example :

```
<Toggle
    defaultOption="STRING"
    otherOption="INT"
    onChange={this.handleChange}
/>
```
Currently it takes in 3 props:

1. defaultOption : The default selected Option/label in Toggle
2. otherOption : The second option/label in Toggle
3. onChange : On shifting the toggle button

Example view
 
![](ToggelLabels.gif)

Updates Coming Soon:
Color and Style Selection via props
