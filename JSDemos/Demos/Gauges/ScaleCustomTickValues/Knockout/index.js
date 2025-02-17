window.onload = function () {
  const viewModel = {
    gaugeOptions: {
      geometry: { orientation: 'vertical' },
      scale: {
        startValue: 0,
        endValue: 50,
        customTicks: [0, 10, 25, 50],
      },
      title: {
        text: 'Fuel Volume (in Liters)',
        font: { size: 28 },
      },
      export: {
        enabled: true,
      },
      value: 35,
    },
  };

  ko.applyBindings(viewModel, $('#gauge-demo').get(0));
};
