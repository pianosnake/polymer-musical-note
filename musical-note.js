(function () {
  const svg = `
  <style>
  :host {
    display: inline-block;
  }
  #svgImage{
    vertical-align: middle;
  }
</style>
<svg id="svgImage" width="75" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <g>
    <path fill="black" d="m67.310333,89.824921zm-17.16193,85.054581q0,13.684235 -12.701439,18.447052q0.151184,0.831726 2.116905,9.97998q1.285255,5.972519 1.285255,10.055267q0,6.199371 -4.233818,10.09285q-4.233818,3.893509 -10.433359,3.893509q-5.519066,0 -9.677292,-3.099411q-4.611822,-3.402115 -4.611822,-8.694534q0,-3.402069 2.381528,-6.464401q2.38153,-3.061813 5.708097,-3.061813q3.25098,0 5.51907,2.495163q2.268141,2.494583 2.268141,5.74559q0,7.25798 -8.089626,7.25798q2.041317,3.175232 6.577549,3.175232q3.780167,0 7.031143,-2.116638q4.763058,-3.09996 4.763058,-10.73587q0,-2.797302 -3.250977,-17.540115q-3.250982,0.755905 -6.275137,0.755905q-11.189369,0 -19.354587,-8.542908q-8.16522,-8.543411 -8.16522,-19.808319q0,-9.753113 6.95556,-19.80835q4.007043,-5.745621 14.289161,-16.027832q-2.570557,-9.223694 -2.570557,-17.464508q0,-6.653137 1.890083,-12.928268q2.343733,-7.711571 6.653137,-10.811356q1.587666,-1.134018 2.948563,-1.134018q1.360895,0 2.646147,1.512016q6.123905,7.257973 6.123905,20.866722q0,18.825317 -13.003866,30.846451l2.797331,13.533157q2.041315,-0.377945 3.40221,-0.377945q7.560333,0 12.474628,6.350449q4.536221,5.821426 4.536221,13.608948l0.000004,0.000015l0.000004,0zm-13.4575,-68.421722q0,-6.426315 -3.931408,-6.426315q-4.68741,0 -7.635975,8.240814q-2.343729,6.350716 -2.343729,12.247787q0,4.46064 1.663309,8.392044q4.309406,-2.646149 8.278603,-9.979706q3.969189,-7.333557 3.969189,-12.474625l0.000011,0zm8.089619,72.277069q0,-6.048309 -3.553391,-10.055252q-3.780167,-4.15802 -9.752888,-4.15802l5.292301,26.30986q8.013977,-3.326294 8.013977,-12.096603l0,0.000015zm-10.433304,12.928314l-5.367886,-26.839432q-3.326571,0.983337 -5.821537,4.045105q-2.494913,3.061798 -2.494913,6.463898q0,4.385437 3.440004,7.333786q3.439957,2.948334 3.439957,2.721451l-0.831657,0.529556q-4.687412,-1.209656 -7.711565,-5.027878q-3.024154,-3.817673 -3.024154,-8.656311q0,-5.065552 3.21313,-9.790756q3.213182,-4.725204 7.900648,-6.539688l-2.343729,-12.172424q-18.069334,15.044952 -18.069334,29.334564q0,8.31601 6.350722,14.137436q6.123899,5.670349 14.515937,5.670349q2.041319,0 6.804377,-1.209656z"/>
    <g id="noteAndModifier">
      <path fill="black" id="bubble" d="m122.243675,215.540649q0,4.77034 -5.399391,7.286545q-4.141251,1.887177 -9.593063,1.887177q-5.818764,0 -9.907639,-1.93956q-5.346947,-2.568634 -5.346947,-7.705948q0,-4.665466 5.346947,-7.129288q4.193703,-1.939575 9.488274,-1.939575q5.713898,0 9.9076,1.939575q5.504219,2.568634 5.504219,7.601074zm-9.802773,2.358994q0,-3.459839 -1.467796,-6.238144q-1.834763,-3.459778 -4.979988,-3.459778q-4.298561,0 -4.298561,4.403351q0,3.407394 1.52021,6.343002q1.834747,3.617035 4.875198,3.617035q4.350937,0 4.350937,-4.665466z"/>
      <path fill="black" id="flat" d="m66.054893,208.502991q3.071327,-4.313904 6.869453,-4.313904q2.438301,0 3.973946,1.535645q1.535683,1.53566 1.535683,3.36441q0,4.149796 -3.247162,7.818985q-3.247169,3.669159 -10.819977,8.897476l0,-34.863098l1.688057,0l0,17.560486zm0,14.371948q8.838844,-6.424026 8.838844,-11.957077q0,-1.406723 -0.867462,-2.367996q-0.867493,-0.961243 -2.203873,-0.961243q-1.523926,0 -2.743088,0.761978q-1.219162,0.761963 -3.024422,2.801712l0,11.722626z"/>
      <path fill="black" id="sharp" d="m79.183769,221.12027l-3.743523,1.006088l0,7.370056l-1.684601,0l0,-6.948914l-7.463631,2.012146l0,7.908173l-1.684593,0l0,-7.463638l-3.74353,1.006058l0,-4.188065l3.74353,-1.006073l0,-10.154327l-3.74353,1.006073l0,-4.164673l3.74353,-1.006073l0,-7.370056l1.684593,0l0,6.948929l7.463631,-2.012146l0,-7.908218l1.684601,0l0,7.463669l3.743523,-1.006073l0,4.164658l-3.743523,1.006104l0,10.177704l3.743523,-1.006058l0,4.164658zm-5.428123,-2.737442l0,-10.154343l-7.463631,2.012177l0,10.154312l7.463631,-2.012146z"/>
    </g>
    <g id="staff">
      <rect height="2" width="150" y="114" x="0" fill="black"/>
      <rect height="2" width="150" y="134" x="0" fill="black"/>
      <rect height="2" width="150" y="154" x="0" fill="black"/>
      <rect height="2" width="150" y="174" x="0" fill="black"/>
      <rect height="2" width="150" y="194" x="0" fill="black"/>
    </g>
    <g id="helperLines"></g>
  </g>
</svg>`;

  var NOTES = ["c", "c#", "db", "d", "d#", "eb", "e", "f", "f#", "gb", "g", "g#", "ab", "a", "a#", "bb", "b"];
  var SEMITONES = [0, 1, 1, 2, 3, 3, 4, 5, 6, 6, 7, 8, 8, 9, 10, 10, 11];
  var POSITIONS = { c: 0, d: -10, e: -20, f: -30, g: -40, a: -50, b: -60 };
  var OCTAVE_OFFSETS = { 3: 70, 4: 0, 5: -70, 6: -140 };

  class Note {
    // Note is made with either (1) a given value like 'c#4' or (2) a numeric value.
    // Numeric value will default to # but an optional parameter exists to use the flat name
    constructor(value, preferFlatName) {
      this.preferFlatName = preferFlatName || false;
      this.parseValue(value);
    }

    parseValue(value) {
      if (isNaN(value)) {
        this.value = value.toLowerCase();
        this.setNameAndOctave();
        this.setNumericValue();
      } else {
        this.numericValue = parseInt(value);
        this.name = this.getName();
        this.value = this.getValue();
        this.octave = this.getOctave();
      }
    }

    setNameAndOctave() {
      const parts = this.value.split("");
      if (parts.length == 3 && !isNaN(parts[2])) {
        // if the note is like gb3
        this.name = parts[0] + "" + parts[1];
        this.octave = parseInt(parts[2]);
      } else if (parts.length == 2 && !isNaN(parts[1])) {
        //or if it's like a3
        this.name = parts[0];
        this.octave = parseInt(parts[1]);
      } else if (parts.length == 1) {
        //or if it's like c then just use c4
        this.name = parts[0];
        this.octave = 4;
      }
    }

    setNumericValue() {
      this.numericValue = SEMITONES[NOTES.indexOf(this.name)] + (this.octave * 12);
    }

    getOctave() {
      return Math.floor(this.numericValue / 12) - 1;
    }

    getName() {
      while (this.numericValue < 0) {
        this.numericValue += 12;
      }
      var name;
      if (this.preferFlatName) {
        name = NOTES[SEMITONES.lastIndexOf(this.numericValue % 12)];
      } else {
        name = NOTES[SEMITONES.indexOf(this.numericValue % 12)];
      }
      return name;
    }

    isFlat() {
      return this.name.charAt(1) === "b";
    }

    isSharp() {
      return this.name.charAt(1) === "#";
    }

    getValue() {
      return this.name + "" + this.getOctave();
    }
  }

  const _translate = function (x, y, el) {
    el.setAttribute("transform", "translate(" + x + "," + y + ")");
  }

  function getViewBox(customHeight) {
    const x = 0;
    const y = customHeight ? (160 - customHeight) : 80
    //If width is 150, it means "take 150 of the original SVG and fit it in the width of the SVG container"
    const width = 150;
    const height = customHeight ? customHeight * 2 : 160;

    return [x, y, width, height].join(" ");
  }

  class MusicalNote extends HTMLElement {
    connectedCallback() {
      const value = this.getAttribute('value');
      this.preferFlatName = !!this.hasAttribute('flat');
      this.note = value ? new Note(value, this.preferFlatName) : null;
      this.height = this.getAttribute('height') || 80;

      this.attachShadow({ mode: 'open' });
      const template = document.createElement("template");
      template.innerHTML = svg;

      const elementsWithId = template.content.querySelectorAll('*[id]');
      this.$ = {};
      // add all svg elements with an id to this.$
      elementsWithId.forEach(el => { this.$[el.id] = el; })
      this.shadowRoot.appendChild(template.content);

      this._reset();
      this._layout();
      if(value) this._draw();
    }

    getValue() {
      return this.note.value;
    }

    getNumericValue() {
      return this.note.numericValue;
    }

    setValue(value, preferFlat) {
      this.note = new Note(value, preferFlat);
      this._reset();
      this._draw();
    }

    _reset() {
      this.$.flat.style.visibility = "hidden";
      this.$.sharp.style.visibility = "hidden";
      this.$.bubble.style.visibility = "hidden";
      this._removeAllHelperLines();
    }

    _layout(){
      this.$.svgImage.setAttribute("viewBox", getViewBox(this.height));
    }

    _draw() {
      this.$.bubble.style.visibility = "visible";
      this.notePosition = this._computePosition();
      this.staffBBox = this.$.staff.getBBox();

      _translate(0, this.notePosition, this.$.noteAndModifier)

      if (this.note.isFlat()) {
        this.$.flat.style.visibility = "visible";
        this.$.sharp.style.visibility = "hidden";
      } else if (this.note.isSharp()) {
        this.$.sharp.style.visibility = "visible";
        this.$.flat.style.visibility = "hidden";
      }

      this._showHelperLines();
    }

    _computePosition() {
      const start = OCTAVE_OFFSETS[this.note.octave];
      return start + POSITIONS[this.note.name.charAt(0)];
    }

    _showHelperLines() {
      if (this.notePosition >= 0) {
        this._addHelperLinesBelow();
      } else if (this.notePosition <= -120) {
        this._addHelperLinesAbove();
      }
    }

    _addHelperLinesBelow() {
      const lines = Math.floor(this.notePosition / 20) + 1;
      for (let i = 0; i < lines; i++) {
        this._addHelperLine(this.staffBBox.height + this.staffBBox.y + (i * 20) + 18);
      }
    }

    _addHelperLinesAbove() {
      const pMod = this.notePosition * (-1) - 120;
      const lines = Math.floor(pMod / 20) + 1;
      for (let i = 0; i < lines; i++) {
        this._addHelperLine(this.staffBBox.y - ((i + 1) * 20));
      }
    }

    _addHelperLine(y) {
      const r = document.createElementNS("http://www.w3.org/2000/svg", "rect");
      r.setAttributeNS(null, "height", 2);
      r.setAttributeNS(null, "width", 45);
      r.setAttributeNS(null, "x", 85);
      r.setAttributeNS(null, "y", y);
      this.$.helperLines.appendChild(r);
    }

    _removeAllHelperLines() {
      while (this.$.helperLines.firstChild) {
        this.$.helperLines.removeChild(this.$.helperLines.firstChild);
      }
    }
  }

  customElements.define('musical-note', MusicalNote);
})();
