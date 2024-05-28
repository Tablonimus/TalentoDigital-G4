//Better to construct options first and then pass it as a parameter
var options = {
  title: {
    text: "Estadísticas de frutas X Kg X Persona",
  },

  axisX:{
    title : "Frutas Tropicales",
    titleFontSize: 24
   },

   axisY:{
    title : "Consumo Kg/persona/año",
    titleFontSize: 24
   },
   

  data: [
    {
      // Change type to "doughnut", "line", "splineArea", etc.
      type: "column",
      dataPoints: [
        { label: "Papaya", y: 23 },
        { label: "Naranaja", y: 15 },
        { label: "Platano", y: 25 },
        { label: "Guayaba", y: 20 },
      ],
    },
  ],
};


$("#chartContainer").CanvasJSChart(options);
