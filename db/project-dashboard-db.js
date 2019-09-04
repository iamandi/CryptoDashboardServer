const projectDashboardAppDB = {
  widgets: {
    widgetDon: {
      title: 'Donpia',
      symbol: 'DON',
      icon: 'don',
      balance: 634.0008,
      classes: 'text-red',
      change: 2.11
    },
    widgetEth: {
      title: 'Ethereum',
      symbol: 'ETH',
      icon: 'eth',
      balance: 0.000379,
      classes: 'text-green',
      change: 1.32
    },
    widgetBtc: {
      title: 'Bitcoin',
      symbol: 'BTC',
      icon: 'btc',
      balance: 28.97376,
      classes: 'text-orange',
      change: -7.01
    },
    widgetUnia: {
      title: 'UNIA points',
      symbol: 'UNIA',
      icon: 'unia',
      balance: 5000,
      classes: 'text-yellow'
    },
    widgetCryptoUsd: {
      rows: [{
          id: 1,
          title: 'Donpia',
          symbol: 'DON',
          icon: 'don',
          balance: 634.0008,
          classes: 'text-red',
          change: 2.11
        },
        {
          id: 2,
          title: 'Ethereum',
          symbol: 'ETH',
          icon: 'eth',
          balance: 0.000379,
          classes: 'text-green',
          change: 1.32
        },
        {
          id: 3,
          title: 'Bitcoin',
          symbol: 'BTC',
          icon: 'btc',
          balance: 28.97376,
          classes: 'text-orange',
          change: -7.01
        }
      ]
    },
    widgetBudgetAllocation: {
      title: 'Budget Details',
      table: {
        columns: [{
            id: 'cryptocurrency',
            title: 'Cryptocurrency'
          },
          {
            id: 'balance',
            title: 'Balance'
          },
          {
            id: 'usdBalance',
            title: 'Balance($)'
          }
        ],
        rows: [{
            id: 1,
            title: 'Donpia',
            symbol: 'DON',
            icon: 'don',
            balance: 634.0008,
            classes: 'text-red'
          },
          {
            id: 2,
            title: 'Ethereum',
            symbol: 'ETH',
            icon: 'eth',
            balance: 0.000379,
            classes: 'text-green'
          },
          {
            id: 3,
            title: 'Bitcoin',
            symbol: 'BTC',
            icon: 'btc',
            balance: 28.97376,
            classes: 'text-orange'
          }
        ]
      }
    },
    widgetPie: {
      title: 'Crypto Allocation',
      mainChart: {
        labels: ['DON', 'BTC', 'ETH'],
        datasets: {
          data: [634.0008, 28.97376, 0.000379],
          backgroundColor: ['red', 'orange', 'green'],
          hoverBackgroundColor: ['#f45a4d', '#ffd341', '#90EE90']
        },
        options: {
          cutoutPercentage: 0,
          spanGaps: false,
          legend: {
            display: true,
            position: 'bottom',
            labels: {
              padding: 16,
              usePointStyle: true,
              fontColor: 'white'
            }
          },
          maintainAspectRatio: false
        }
      }
    },
    widgetPie1: {
      title: 'Crypto Allocation',
      mainChart: {
        labels: ['DON', 'BTC', 'ETH'],
        datasets: [{
            id: 1,
            title: 'Donpia',
            symbol: 'DON',
            icon: 'don',
            balance: 634.0008,
            classes: 'text-red',
            backgroundColor: 'red',
            hoverBackgroundColor: '#f45a4d'
          },
          {
            id: 2,
            title: 'Ethereum',
            symbol: 'ETH',
            icon: 'eth',
            balance: 0.000379,
            classes: 'text-green',
            backgroundColor: 'orange',
            hoverBackgroundColor: '#ffd341'
          },
          {
            id: 3,
            title: 'Bitcoin',
            symbol: 'BTC',
            icon: 'btc',
            balance: 28.97376,
            classes: 'text-orange',
            backgroundColor: 'green',
            hoverBackgroundColor: '#90EE90'
          },
          {
            data: [],
            backgroundColor: ['red', 'orange', 'green'],
            hoverBackgroundColor: ['#f45a4d', '#ffd341', '#90EE90']
          }
        ],
        options: {
          cutoutPercentage: 0,
          spanGaps: false,
          legend: {
            display: true,
            position: 'bottom',
            labels: {
              padding: 16,
              usePointStyle: true,
              fontColor: 'white'
            }
          },
          maintainAspectRatio: false
        }
      }
    },
    widgetLine: {
      title: 'Crypto Allocation',
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      mainChart: [{
          label: 'DON',
          borderColor: 'red',
          pointHoverBackgroundColor: 'red',
          pointHoverBorderColor: 'red',
          data: [65, 59, 80, 81, 56, 55, 340]
        },
        {
          label: 'BTC',
          borderColor: 'orange',
          pointHoverBackgroundColor: 'orange',
          pointHoverBorderColor: 'orange',
          data: [15, 159, 80, 81, 56, 255, 40]
        },
        {
          label: 'ETH',
          borderColor: 'green',
          pointHoverBackgroundColor: 'green',
          pointHoverBorderColor: 'green',
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
          position: 'bottom',
          labels: {
            padding: 16,
            usePointStyle: true,
            fontColor: 'white'
          }
        }
      }
    },
    widgetCryptoPrices: [],
    widgetCryptoPrices1: [{
        symbol: 'DON',
        changePercent24Hr: 0.3
      },
      {
        symbol: 'BTC',
        changePercent24Hr: 7
      },
      {
        symbol: 'ETH',
        changePercent24Hr: 0
      },
      {
        symbol: 'LTC',
        changePercent24Hr: 8
      },
      {
        symbol: 'XRP',
        changePercent24Hr: 4
      }
    ],
    WidgetBudgetAllocation1: {
      title: 'Budget Details',
      table: {
        columns: [{
            id: 'budget_type',
            title: 'Cryptocurrency'
          },
          {
            id: 'total_budget',
            title: 'Total Allocation'
          }
        ],
        rows: [{
            id: 1,
            cells: [{
                id: 'budget_type',
                value: 'Donpia',
                symbol: 'DON',
                classes: 'bg-red text-white',
                icon: 'DON'
              },
              {
                id: 'total_budget',
                value: '14880.00',
                classes: 'font-bold',
                icon: ''
              }
            ]
          },
          {
            id: 2,
            cells: [{
                id: 'budget_type',
                value: 'Bitcoin',
                symbol: 'BTC',
                classes: 'bg-orange text-white',
                icon: 'BTC'
              },
              {
                id: 'total_budget',
                value: '21080.00',
                classes: 'font-bold',
                icon: ''
              }
            ]
          },
          {
            id: 3,
            cells: [{
                id: 'budget_type',
                value: 'Ethereum',
                symbol: 'ETH',
                classes: 'bg-green text-white',
                icon: 'ETH'
              },
              {
                id: 'total_budget',
                value: '37720.00',
                classes: 'font-bold',
                icon: ''
              }
            ]
          }
        ]
      }
    },
    widget16: {
      rows: [{
          title: 'DON',
          conversion: 0.3
        },
        {
          title: 'BTC',
          conversion: 7
        },
        {
          title: 'ETH',
          conversion: 0
        },
        {
          title: 'LTC',
          conversion: 8
        },
        {
          title: 'XRP',
          conversion: 4
        }
      ]
    },
    widget99: {
      title: 'Spent',
      ranges: {
        TW: 'This Week',
        LW: 'Last Week',
        '2W': '2 Weeks Ago'
      },
      currentRange: 'TW',
      weeklySpent: {
        title: 'WEEKLY SPENT',
        count: {
          '2W': '2,682.85',
          LW: '1,445.34',
          TW: '3,630.15'
        },
        chart: {
          '2W': {
            datasets: [{
              label: 'Created',
              data: [2, 6, 5, 4, 5, 3, 6],
              fill: true,
              backgroundColor: '#42BFF7',
              pointRadius: 0,
              pointHitRadius: 20,
              borderWidth: 0
            }],
            labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
          },
          LW: {
            datasets: [{
              label: 'Created',
              data: [4, 6, 2, 2, 1, 3, 4],
              fill: true,
              backgroundColor: '#42BFF7',
              pointRadius: 0,
              pointHitRadius: 20,
              borderWidth: 0
            }],
            labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
          },
          TW: {
            datasets: [{
              label: 'Created',
              data: [2, 6, 5, 4, 5, 3, 6],
              fill: true,
              backgroundColor: '#42BFF7',
              pointRadius: 0,
              pointHitRadius: 20,
              borderWidth: 0
            }],
            labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
          },
          options: {
            legend: {
              display: false
            },
            maintainAspectRatio: false,
            scales: {
              xAxes: [{
                display: false
              }],
              yAxes: [{
                display: false
              }]
            }
          }
        }
      }
    },
    widget22: {
      conversion: {
        value: 492,
        ofTarget: 13
      },
      chartType: 'line',
      datasets: [{
        label: 'Conversion',
        data: [221, 428, 492, 471, 413, 344, 294]
      }],
      labels: [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday'
      ],
      options: {
        spanGaps: false,
        legend: {
          display: false
        },
        maintainAspectRatio: true,
        layout: {
          padding: {
            top: 24,
            left: 16,
            right: 16,
            bottom: 16
          }
        },
        scales: {
          xAxes: [{
            display: false
          }],
          yAxes: [{
            display: false,
            ticks: {
              min: 100,
              max: 500
            }
          }]
        }
      }
    },
    widget88: {
      title: 'Crypto Allocation',
      mainChart: {
        labels: ['DON', 'BTC', 'ETHC'],
        datasets: [{
          data: [12, 17, 28],
          backgroundColor: ['red', 'orange', 'green'],
          hoverBackgroundColor: ['#f45a4d', '#ffd341', '#90EE90']
        }],
        options: {
          cutoutPercentage: 0,
          spanGaps: false,
          legend: {
            display: true,
            position: 'bottom',
            labels: {
              padding: 16,
              usePointStyle: true
            }
          },
          maintainAspectRatio: false
        }
      }
    },
    widget44: {
      conversion: {
        value: 492,
        ofTarget: 13
      },
      chartType: 'line',
      datasets: [{
        label: 'Conversion',
        data: [221, 428, 492, 471, 413, 344, 294]
      }],
      labels: [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday'
      ],
      options: {
        spanGaps: false,
        legend: {
          display: false
        },
        maintainAspectRatio: false,
        layout: {
          padding: {
            top: 24,
            left: 16,
            right: 16,
            bottom: 16
          }
        },
        scales: {
          xAxes: [{
            display: false
          }],
          yAxes: [{
            display: false,
            ticks: {
              min: 100,
              max: 500
            }
          }]
        }
      }
    },
    widget33: {
      conversion: {
        value: 492,
        ofTarget: 13
      },
      chartType: 'line',
      datasets: [{
        label: 'Conversion',
        data: [221, 428, 492, 471, 413, 344, 294]
      }],
      labels: [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday'
      ],
      options: {
        spanGaps: false,
        legend: {
          display: false
        },
        maintainAspectRatio: false,
        layout: {
          padding: {
            top: 24,
            left: 16,
            right: 16,
            bottom: 16
          }
        },
        scales: {
          xAxes: [{
            display: false
          }],
          yAxes: [{
            display: false,
            ticks: {
              min: 100,
              max: 500
            }
          }]
        }
      }
    },
    widget100: {
      title: 'Budget Details',
      table: {
        columns: [{
            id: 'budget_type',
            title: 'Cryptocurrency'
          },
          {
            id: 'total_budget',
            title: 'Total Allocation'
          }
        ],
        rows: [{
            id: 1,
            cells: [{
                id: 'budget_type',
                value: 'Donpia',
                classes: 'bg-red text-white',
                icon: ''
              },
              {
                id: 'total_budget',
                value: '$14,880.00',
                classes: 'font-bold',
                icon: ''
              }
            ]
          },
          {
            id: 2,
            cells: [{
                id: 'budget_type',
                value: 'Bitcoin',
                classes: 'bg-orange text-white',
                icon: ''
              },
              {
                id: 'total_budget',
                value: '$21,080.00',
                classes: 'font-bold',
                icon: ''
              }
            ]
          },
          {
            id: 3,
            cells: [{
                id: 'budget_type',
                value: 'Ethereum',
                classes: 'bg-green text-white',
                icon: ''
              },
              {
                id: 'total_budget',
                value: '$34,720.00',
                classes: 'font-bold',
                icon: ''
              }
            ]
          }
        ]
      }
    },
    widget12: {
      title: 'Donpia Wallet',
      data: {
        label: 'DON',
        count: 634.0008,
        extra: {
          label: 'Last balance',
          count: 2
        }
      },
      detail: 'Donpia wallet balance'
    },
    widget13: {
      title: 'Bitcoin Wallet',
      data: {
        label: 'BTC',
        count: 28.97376,
        extra: {
          label: 'Last balance',
          count: 2
        }
      },
      detail: 'Bitcoin wallet balance'
    },
    widget14: {
      title: 'Ethereum Wallet',
      data: {
        label: 'ETH',
        count: 0.000379,
        extra: {
          label: 'Last balance',
          count: 2
        }
      },
      detail: 'Ethereum wallet balance'
    },
    widget15: {
      title: 'Unia Points Wallet',
      data: {
        label: 'UNIA',
        count: 5000,
        extra: {
          label: 'Last balance',
          count: 2
        }
      },
      detail: 'Unia Points wallet balance'
    },
    widget17: {
      title: 'Donpia Balance',
      conversion: {
        value: 631,
        ofTarget: 0
      },
      chartType: 'line',
      datasets: [{
        label: 'Conversion',
        data: [221, 428, 492, 471, 413, 344, 294]
      }],
      labels: [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday'
      ],
      options: {
        spanGaps: false,
        legend: {
          display: false
        },
        maintainAspectRatio: true,
        layout: {
          padding: {
            top: 24,
            left: 16,
            right: 16,
            bottom: 16
          }
        },
        scales: {
          xAxes: [{
            display: false
          }],
          yAxes: [{
            display: false,
            ticks: {
              min: 100,
              max: 500
            }
          }]
        }
      }
    },
    widget18: {
      title: 'Bitcoin Balance',
      conversion: {
        value: 492,
        ofTarget: -13
      },
      chartType: 'line',
      datasets: [{
        label: 'Conversion',
        data: [221, 428, 492, 471, 413, 344, 294]
      }],
      labels: [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday'
      ],
      options: {
        spanGaps: false,
        legend: {
          display: false
        },
        maintainAspectRatio: false,
        layout: {
          padding: {
            top: 24,
            left: 16,
            right: 16,
            bottom: 16
          }
        },
        scales: {
          xAxes: [{
            display: false
          }],
          yAxes: [{
            display: false,
            ticks: {
              min: 100,
              max: 500
            }
          }]
        }
      }
    },
    widget19: {
      title: 'Ethereum Balance',
      conversion: {
        value: 492,
        ofTarget: 13
      },
      chartType: 'line',
      datasets: [{
        label: 'Conversion',
        data: [221, 428, 492, 471, 413, 344, 294]
      }],
      labels: [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday'
      ],
      options: {
        spanGaps: false,
        legend: {
          display: false
        },
        maintainAspectRatio: false,
        layout: {
          padding: {
            top: 24,
            left: 16,
            right: 16,
            bottom: 16
          }
        },
        scales: {
          xAxes: [{
            display: false
          }],
          yAxes: [{
            display: false,
            ticks: {
              min: 100,
              max: 500
            }
          }]
        }
      }
    }
  },
  widget88: {
    title: 'Crypto Allocation',
    mainChart: {
      labels: ['DON', 'BTC', 'ETHC'],
      datasets: [{
        data: [12, 17, 28],
        backgroundColor: ['red', 'orange', 'green'],
        hoverBackgroundColor: ['#f45a4d', '#ffd341', '#90EE90']
      }],
      options: {
        cutoutPercentage: 0,
        spanGaps: false,
        legend: {
          display: true,
          position: 'bottom',
          labels: {
            padding: 16,
            usePointStyle: true
          }
        },
        maintainAspectRatio: false
      }
    }
  },
  widget9: {
    title: 'Spent',
    ranges: {
      TW: 'This Week',
      LW: 'Last Week',
      '2W': '2 Weeks Ago'
    },
    currentRange: 'TW',
    weeklySpent: {
      title: 'WEEKLY SPENT',
      count: {
        '2W': '2,682.85',
        LW: '1,445.34',
        TW: '3,630.15'
      },
      chart: {
        '2W': {
          datasets: [{
            label: 'Created',
            data: [2, 6, 5, 4, 5, 3, 6],
            fill: true,
            backgroundColor: '#42BFF7',
            pointRadius: 0,
            pointHitRadius: 20,
            borderWidth: 0
          }],
          labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        LW: {
          datasets: [{
            label: 'Created',
            data: [4, 6, 2, 2, 1, 3, 4],
            fill: true,
            backgroundColor: '#42BFF7',
            pointRadius: 0,
            pointHitRadius: 20,
            borderWidth: 0
          }],
          labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        TW: {
          datasets: [{
            label: 'Created',
            data: [2, 6, 5, 4, 5, 3, 6],
            fill: true,
            backgroundColor: '#42BFF7',
            pointRadius: 0,
            pointHitRadius: 20,
            borderWidth: 0
          }],
          labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        options: {
          legend: {
            display: false
          },
          maintainAspectRatio: false,
          scales: {
            xAxes: [{
              display: false
            }],
            yAxes: [{
              display: false
            }]
          }
        }
      }
    },
    totalSpent: {
      title: 'TOTAL SPENT',
      count: {
        '2W': '29,682.85',
        LW: '31,128.19',
        TW: '34,758.34'
      },
      chart: {
        '2W': {
          datasets: [{
            label: 'Created',
            data: [3, 2, 2, 4, 7, 7, 4],
            fill: true,
            backgroundColor: '#42BFF7',
            pointRadius: 0,
            pointHitRadius: 20,
            borderWidth: 0
          }],
          labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        LW: {
          datasets: [{
            label: 'Created',
            data: [5, 7, 8, 8, 6, 4, 1],
            fill: true,
            backgroundColor: '#42BFF7',
            pointRadius: 0,
            pointHitRadius: 20,
            borderWidth: 0
          }],
          labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        TW: {
          datasets: [{
            label: 'Created',
            data: [6, 4, 7, 5, 5, 4, 7],
            fill: true,
            backgroundColor: '#42BFF7',
            pointRadius: 0,
            pointHitRadius: 20,
            borderWidth: 0
          }],
          labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        options: {
          legend: {
            display: false
          },
          maintainAspectRatio: false,
          scales: {
            xAxes: [{
              display: false
            }],
            yAxes: [{
              display: false
            }]
          }
        }
      }
    },
    remaining: {
      title: 'REMAINING',
      count: {
        '2W': '94.317,15',
        LW: '92.871,81',
        TW: '89.241,66'
      },
      chart: {
        '2W': {
          datasets: [{
            label: 'Created',
            data: [1, 4, 5, 7, 8, 2, 4],
            fill: true,
            backgroundColor: '#42BFF7',
            pointRadius: 0,
            pointHitRadius: 20,
            borderWidth: 0
          }],
          labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        LW: {
          datasets: [{
            label: 'Created',
            data: [3, 2, 1, 4, 8, 8, 4],
            fill: true,
            backgroundColor: '#42BFF7',
            pointRadius: 0,
            pointHitRadius: 20,
            borderWidth: 0
          }],
          labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        TW: {
          datasets: [{
            label: 'Created',
            data: [2, 4, 8, 6, 2, 5, 1],
            fill: true,
            backgroundColor: '#42BFF7',
            pointRadius: 0,
            pointHitRadius: 20,
            borderWidth: 0
          }],
          labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        options: {
          legend: {
            display: false
          },
          maintainAspectRatio: false,
          scales: {
            xAxes: [{
              display: false
            }],
            yAxes: [{
              display: false
            }]
          }
        }
      }
    },
    totalBudget: {
      title: 'TOTAL BUDGET',
      count: '124.000,00'
    }
  },
  projects: [{
      id: 1,
      name: 'ACME Corp. Backend App'
    },
    {
      id: 2,
      name: 'ACME Corp. Frontend App'
    },
    {
      id: 3,
      name: 'Creapond'
    },
    {
      id: 4,
      name: 'Withinpixels'
    }
  ]
};

module.exports = projectDashboardAppDB;

/*
mock.onGet('/api/project-dashboard-app/widgets').reply(config => {
  return [200, projectDashboardAppDB.widgets];
});

mock
  .onGet('/api/project-dashboard-app/widgets/XgbuVEXBU5gtSKdbQRP1Zbbby1i0')
  .reply(config => {
    return [200, projectDashboardAppDB.widgets];
  });

mock
  .onGet('/api/project-dashboard-app/widgetDon/XgbuVEXBU5gtSKdbQRP1Zbbby1i0')
  .reply(config => {
    return [200, projectDashboardAppDB.widgets.widgetDon];
  });

mock
  .onGet('/api/project-dashboard-app/widgetBtc/XgbuVEXBU5gtSKdbQRP1Zbbby1i0')
  .reply(config => {
    return [200, projectDashboardAppDB.widgets.widgetBtc];
  });

mock
  .onGet('/api/project-dashboard-app/widgetEth/XgbuVEXBU5gtSKdbQRP1Zbbby1i0')
  .reply(config => {
    return [200, projectDashboardAppDB.widgets.widgetEth];
  });

mock.onGet('/api/project-dashboard-app/projects').reply(config => {
  return [200, projectDashboardAppDB.projects];
});
*/