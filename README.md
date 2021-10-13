# React Native Iconsax

![npm](https://img.shields.io/npm/v/react-native-iconsax?style=flat-square)
![NPM](https://img.shields.io/npm/l/react-native-iconsax?style=flat-square)
![npm](https://img.shields.io/npm/dw/react-native-iconsax?style=flat-square)

Iconsax is Perfectly balanced, 24px grid-based open source icons for React Native, Perfect for buttons, logos and nav/tab bars. Easy to extend, style and integrate into your project. 

[![iconsax.png](https://i.postimg.cc/sghGK1xP/iconsax.png)](https://postimg.cc/v4GmZYWD)

Icons converted from [`iconsax`](https://iconsax.io/) svg files into React native components and compatible with [`react-native-svg`](https://github.com/react-native-community/react-native-svg) package.

Icons list available at [`iconsax`](https://iconsax.io/).

### Installation
1. Make sure your have installed [`react-native-svg`](https://github.com/react-native-community/react-native-svg).
2. `npm i react-native-iconsax`

### Usage
```javascript
import { ShoppingBag } from "react-native-iconsax";

const App = () => {
  return <ShoppingBag />;
};
```

Whole package can be included as below:
```javascript
import * as Icon from "react-native-iconsax";

const App = () => {
  return <Icon.ShoppingBag />;
};
```

Icons can be customized by svg props:
```javascript
<ShoppingBag stroke="#292D32" strokeWidth={1.5} width={24} height={24} />
```

### Props
All [Svg property](https://github.com/react-native-community/react-native-svg#common-props) and the following props supported:

| Prop                      | Description                                                             | Default          |
| -----------------         | --------------------------------------------------------------------    | ---------------- |
| **`width`**               | Width of the icon.                                                      | `24`             |
| **`height`**              | Height of the icon.                                                     | `24`             |
| **`stroke`**              | The stroke prop refers to the color.                                    | `"#292D32"`      |
| **`strokeWidth`**         | The strokeWidth prop specifies the width of the outline on the icon.    | `1.5`            |
| **`strokeLinecap`**       | StrokeLinecap defines different types of endings to an open path.       | `"round"`        |
| **`strokeLinejoin`**      | Paths should appear at the point where two lines are joined together.   | `"round"`        |
| **`fill`**                | The fill prop refers to the color inside the icon.                      | `"none"`         |
| **`viewBox`**             | Defines the position and dimension, in user space, of an SVG viewport.  | `"0 0 24 24"`    |


# Authors
[![Ehsan Bigzad](https://avatars.githubusercontent.com/u/35545441?size=50)](https://github.com/ehsanbigzad)

# License
This project is licenced under the [MIT License](http://opensource.org/licenses/mit-license.html).

All bundled icons are copyright to their respective author [`iconsax`](https://iconsax.io/) and mostly under MIT.