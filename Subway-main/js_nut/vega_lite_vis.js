var spec2 = "js_nut/calories.vg.json";
vegaEmbed('#calories', spec2).then(function(result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);

var spec3 = "js_nut/sugar.vg.json";
vegaEmbed('#sugars', spec3).then(function(result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);

document.getElementById('CategorySelector').addEventListener('change', function () {
    var selectedCategory = this.value;
    // Update the shared filter
    vegaEmbed('#yourVegaLiteContainer', yourVegaLiteSpec, {
      actions: false, // Disable actions for this example
      mode: "vega-lite"
    }).then(result => {
      result.view.signal("sharedFilter", selectedCategory === "All" ? null : selectedCategory).run();
    });
  });