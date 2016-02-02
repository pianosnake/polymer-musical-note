# <musical-note>

A [Polymer](https://www.polymer-project.org) element for a musical note in treble clef.

![alt tag](demo/demo.png)

## Usage

Install using [Bower](http://bower.io/)

```
bower install polymer-musical-note
```

In your HEAD tag include the webcomponents script and link the musical-note element

```
<script src="bower_components/webcomponentsjs/webcomponents-lite.js"></script>
<link rel="import" href="bower_components/musical-note/musical-note.html">
```

In your HTML create `<musical-note>` tags with a value attribute set to a note name and octave. Middle C would have a value of c4.

```html
<musical-note value="c"></musical-note>
<musical-note value="c#"></musical-note>
<musical-note value="c#5"></musical-note>
<musical-note value="eb5"></musical-note>
```

## License

[MIT License](http://opensource.org/licenses/MIT)