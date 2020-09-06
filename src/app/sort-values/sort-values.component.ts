import { Component, OnInit } from '@angular/core';
import { Sort } from '@angular/material/sort';
export interface Flights {
  arrivalTime: string;
  arrivalCity: string;
  arrivalStateCoun: string;
  company: string;

  duration: string;
  departureTime: string;

  departureCity: string;
  departureStateCoun: string;
  emi: string;
  logo: string;
  price;
  status: string;
}
@Component({
  selector: 'app-sort-values',
  templateUrl: './sort-values.component.html',
  styleUrls: ['./sort-values.component.scss'],
})
export class SortValuesComponent implements OnInit {
  flights: Flights[] = [
    {
      arrivalTime: '20:05',
      arrivalCity: 'BOM',
      arrivalStateCoun: 'Mumbai, India',
      company: 'Vistara',
      departureCity: 'DEL',
      departureStateCoun: 'New Delhi, India',
      logo: 'assets/logo.png',
      status: 'Partially Refundable',
      price: '6,266',
      emi: '2,085',
      duration: '2h 20m',
      departureTime: '17:45',
    },
    {
      arrivalTime: '20:50',
      arrivalCity: 'BOM',
      arrivalStateCoun: 'Mumbai, India',
      company: 'Spice Jet',
      departureCity: 'DEL',
      departureStateCoun: 'New Delhi, India',
      logo: 'assets/logo.png',
      status: 'Partially Refundable',
      price: '7,776',
      emi: '2,592',
      duration: '2h 15m',
      departureTime: '18:35',
    },
    {
      arrivalTime: '20:05',
      arrivalCity: 'BOM',
      arrivalStateCoun: 'Mumbai, India',
      company: 'Air India',
      departureCity: 'DEL',
      departureStateCoun: 'New Delhi, India',
      logo: 'assets/logo.png',
      status: 'Partially Refundable',
      price: '7,776',
      emi: '2,592',
      duration: '2h 40m',
      departureTime: '19:45',
    },
  ];

  ngOnInit(): void {}

  sortedData: Flights[];

  constructor() {
    this.sortedData = this.flights.slice();
  }

  sortData(sort: Sort) {
    console.log(sort);

    const data = this.flights.slice();
    if (!sort.active || sort.direction === '') {
      this.sortedData = data;
      return;
    }

    this.sortedData = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'Departure':
          return compare(a.departureTime, b.departureTime, isAsc);
        case 'Duration':
          return compare(a.duration, b.duration, isAsc);
        case 'Arrival':
          return compare(a.arrivalTime, b.arrivalTime, isAsc);
        case 'Price':
          return compare(a.price, b.price, isAsc);

        default:
          return 0;
      }
    });
  }
}

function compare(a: number | string, b: number | string, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
