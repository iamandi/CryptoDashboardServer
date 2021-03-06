const projectDashboardAppDB = {
  widgets: {
    widgetDon: {
      name: "Donpia Wallet",
      ticker: "DON",
      icon: "don",
      balance: 634.0008,
      classes: "text-red",
      change: 2.11
    },
    widgetEth: {
      name: "Ethereum Wallet",
      ticker: "ETH",
      icon: "eth",
      balance: 1,
      classes: "text-green",
      change: 1.32
    },
    widgetBtc: {
      name: "Bitcoin Wallet",
      ticker: "BTC",
      icon: "btc",
      balance: 28.97376,
      classes: "text-orange",
      change: -7.01
    },
    widgetUnia: {
      name: "UNIA points",
      ticker: "UNIA",
      icon: "unia",
      balance: 15000,
      classes: "text-yellow"
    },
    widgetCryptoUsd: {
      rows: [
        {
          id: 1,
          title: "Donpia",
          symbol: "DON",
          icon: "don",
          balance: 634.0008,
          classes: "text-red",
          change: 2.11
        },
        {
          id: 2,
          title: "Ethereum",
          symbol: "ETH",
          icon: "eth",
          balance: 1,
          classes: "text-green",
          change: 1.32
        },
        {
          id: 3,
          title: "Bitcoin",
          symbol: "BTC",
          icon: "btc",
          balance: 28.97376,
          classes: "text-orange",
          change: -7.01
        }
      ]
    },
    widgetBudgetAllocation: {
      title: "Budget Details",
      table: {
        columns: [
          {
            id: "cryptocurrency",
            title: "Cryptocurrency"
          },
          {
            id: "balance",
            title: "Balance"
          },
          {
            id: "usdBalance",
            title: "Balance($)"
          }
        ],
        rows: [
          {
            id: 1,
            title: "Donpia",
            symbol: "DON",
            icon: "don",
            balance: 634.0008,
            classes: "text-red"
          },
          {
            id: 2,
            title: "Ethereum",
            symbol: "ETH",
            icon: "eth",
            balance: 1,
            classes: "text-green"
          },
          {
            id: 3,
            title: "Bitcoin",
            symbol: "BTC",
            icon: "btc",
            balance: 28.97376,
            classes: "text-orange"
          }
        ]
      }
    },
    widgetPie: {
      title: "Crypto Allocation",
      mainChart: {
        labels: ["DON", "BTC", "ETH"],
        datasets: {
          data: [634.0008, 28.97376, 0.000379],
          backgroundColor: ["red", "orange", "green"],
          hoverBackgroundColor: ["#f45a4d", "#ffd341", "#90EE90"]
        },
        options: {
          cutoutPercentage: 0,
          spanGaps: false,
          legend: {
            display: true,
            position: "bottom",
            labels: {
              padding: 16,
              usePointStyle: true,
              fontColor: "white"
            }
          },
          maintainAspectRatio: false
        }
      }
    },
    widgetPie1: {
      title: "Crypto Allocation",
      mainChart: {
        labels: ["DON", "BTC", "ETH"],
        datasets: [
          {
            id: 1,
            title: "Donpia",
            symbol: "DON",
            icon: "don",
            balance: 634.0008,
            classes: "text-red",
            backgroundColor: "red",
            hoverBackgroundColor: "#f45a4d"
          },
          {
            id: 2,
            title: "Ethereum",
            symbol: "ETH",
            icon: "eth",
            balance: 1,
            classes: "text-green",
            backgroundColor: "orange",
            hoverBackgroundColor: "#ffd341"
          },
          {
            id: 3,
            title: "Bitcoin",
            symbol: "BTC",
            icon: "btc",
            balance: 28.97376,
            classes: "text-orange",
            backgroundColor: "green",
            hoverBackgroundColor: "#90EE90"
          },
          {
            data: [],
            backgroundColor: ["red", "orange", "green"],
            hoverBackgroundColor: ["#f45a4d", "#ffd341", "#90EE90"]
          }
        ],
        options: {
          cutoutPercentage: 0,
          spanGaps: false,
          legend: {
            display: true,
            position: "bottom",
            labels: {
              padding: 16,
              usePointStyle: true,
              fontColor: "white"
            }
          },
          maintainAspectRatio: false
        }
      }
    },
    widgetCryptoPrices: [],
    weatherWidget: {
      locations: {
        NewYork: {
          name: "New York",
          icon: "rainy2",
          temp: {
            C: "22",
            F: "72"
          },
          windSpeed: {
            KMH: 12,
            MPH: 7.5
          },
          windDirection: "NW",
          rainProbability: "98%",
          next3Days: [
            {
              name: "Sunday",
              icon: "rainy",
              temp: {
                C: "21",
                F: "70"
              }
            },
            {
              name: "Monday",
              icon: "cloudy",
              temp: {
                C: "19",
                F: "66"
              }
            },
            {
              name: "Tuesday",
              icon: "windy3",
              temp: {
                C: "24",
                F: "75"
              }
            }
          ]
        }
      },
      currentLocation: "NewYork",
      tempUnit: "C",
      speedUnit: "KMH"
    },
    widgetLine: {
      title: "Crypto Allocation",
      labels: ["January", "February", "March", "April", "May", "June", "July"],
      mainChart: [
        {
          label: "DON",
          borderColor: "red",
          pointHoverBackgroundColor: "red",
          pointHoverBorderColor: "red",
          data: [65, 59, 80, 81, 56, 55, 340]
        },
        {
          label: "BTC",
          borderColor: "orange",
          pointHoverBackgroundColor: "orange",
          pointHoverBorderColor: "orange",
          data: [15, 159, 80, 81, 56, 255, 40]
        },
        {
          label: "ETH",
          borderColor: "green",
          pointHoverBackgroundColor: "green",
          pointHoverBorderColor: "green",
          data: [65, 31, 80, 1, 56, 45, 140]
        }
      ],
      options: {
        fill: false,
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        legend: {
          display: true,
          position: "bottom",
          labels: {
            padding: 16,
            usePointStyle: true,
            fontColor: "white"
          }
        }
      }
    }
  },
  projects: [
    {
      id: 1,
      name: "ACME Corp. Backend App"
    },
    {
      id: 2,
      name: "ACME Corp. Frontend App"
    },
    {
      id: 3,
      name: "Creapond"
    },
    {
      id: 4,
      name: "Withinpixels"
    }
  ]
};

module.exports = projectDashboardAppDB;
