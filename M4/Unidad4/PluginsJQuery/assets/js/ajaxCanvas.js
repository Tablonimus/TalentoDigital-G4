let dataPointsArray = [];

const chartOptions = {
  animationEnabled: true,

  title: {
    text: "Valores del dolar de los últimos dias.",
  },

  axisX: {
    valueFormatString: "MMM",
  },

  axisY: {
    title: "Sales (in USD)",
    prefix: "$",
  },

  data: [
    {
      yValueFormatString: "$#,###",
      xValueFormatString: "MMMM",
      type: "spline",
      dataPoints: dataPointsArray,
    },
  ],
};

const ajaxConfig = {
  url: "https://mindicador.cl/api/dolar",
  type: "GET",
  dataType: "json",

  success: function (response) {
    const precioHistorico = response.serie; // opción=> .reverse()

    precioHistorico.forEach((precio) => {
      let fechaFormateada = precio.fecha
        .split("T")[0]
        .split("-")
        .reverse()
        .join("/");
      const objectData = { label: fechaFormateada, y: precio.valor };

      dataPointsArray.push(objectData);
    });

    $("#chartContainer").CanvasJSChart(chartOptions);
  },

  error: function (error) {
    alert("ERROR!");
    console.log("Error => ", error);
  },
};

$.ajax(ajaxConfig);
