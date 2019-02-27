import React, { Component } from "react";
import { Card } from "react-bootstrap";

var SeatType = {
  ASSIGNED: 1,
  LAV: 2,
  GAL: 4,
  DOR: 6,
  AISLE: 5,
  AVAILABLE: 7,
  PERMBLKD: 8,
  FREE: 9,
  PREFERRED: 10,
  MCE: 11,
  EXIT: 12,
  BROKEN: 13,
  UNUSABLE: 14,
  INDIF: 15,
  WING: 16,
  ADVANCED: 17,
  HELD: 18,
  BULKHEAD: 19,
  PREMIUM: 20,
  BLOCKED: 21,
  UNKNOWN: 22,
  JUMP: 23,
  CABIN: 24,
  CABIN_JUMP: 25,
  FLIGHT_DECK: 26
};

export default class Seatmap extends React.Component {
  constructor(props) {
    super(props);

    var seatMock = {
      Cabin: "Y",
      Rows: [
        {
          Name: "W20",
          RowNumber: 20,
          RowLabel: "W",
          Seats: [
            {
              Cabin: 2,
              SeatNumber: "20A",
              Row: 20,
              RowLabel: "W20",
              Col: 0,
              ColName: "A",
              Type: 21,
              Location: 24,
              Text: "ZL ",
              Price: 0.0
            },
            {
              Cabin: 2,
              SeatNumber: "20B",
              Row: 20,
              RowLabel: "W20",
              Col: 1,
              ColName: "B",
              Type: 9,
              Location: 5,
              Text: "   ",
              Price: 0.0
            },
            {
              Cabin: 2,
              SeatNumber: "20C",
              Row: 20,
              RowLabel: "W20",
              Col: 2,
              ColName: "C",
              Type: 21,
              Location: 24,
              Text: "ZL ",
              Price: 0.0
            },
            {
              Cabin: 2,
              SeatNumber: "20 ",
              Row: 20,
              RowLabel: "W20",
              Col: 3,
              ColName: " ",
              Type: 9,
              Location: 5,
              Text: "   ",
              Price: 0.0
            },
            {
              Cabin: 2,
              SeatNumber: "20D",
              Row: 20,
              RowLabel: "W20",
              Col: 4,
              ColName: "D",
              Type: 20,
              Location: 24,
              Text: "*L ",
              Price: 0.0
            },
            {
              Cabin: 2,
              SeatNumber: "20E",
              Row: 20,
              RowLabel: "W20",
              Col: 5,
              ColName: "E",
              Type: 20,
              Location: 24,
              Text: "*L ",
              Price: 0.0
            },
            {
              Cabin: 2,
              SeatNumber: "20G",
              Row: 20,
              RowLabel: "W20",
              Col: 6,
              ColName: "G",
              Type: 20,
              Location: 24,
              Text: "*L ",
              Price: 0.0
            },
            {
              Cabin: 2,
              SeatNumber: "20H",
              Row: 20,
              RowLabel: "W20",
              Col: 7,
              ColName: "H",
              Type: 20,
              Location: 24,
              Text: "*L ",
              Price: 0.0
            },
            {
              Cabin: 2,
              SeatNumber: "20 ",
              Row: 20,
              RowLabel: "W20",
              Col: 8,
              ColName: " ",
              Type: 9,
              Location: 5,
              Text: "   ",
              Price: 0.0
            },
            {
              Cabin: 2,
              SeatNumber: "20J",
              Row: 20,
              RowLabel: "W20",
              Col: 9,
              ColName: "J",
              Type: 20,
              Location: 24,
              Text: "*L ",
              Price: 0.0
            },
            {
              Cabin: 2,
              SeatNumber: "20K",
              Row: 20,
              RowLabel: "W20",
              Col: 10,
              ColName: "K",
              Type: 9,
              Location: 5,
              Text: "   ",
              Price: 0.0
            },
            {
              Cabin: 2,
              SeatNumber: "20L",
              Row: 20,
              RowLabel: "W20",
              Col: 11,
              ColName: "L",
              Type: 20,
              Location: 24,
              Text: "*L ",
              Price: 0.0
            }
          ]
        },
        {
          Name: "W21",
          RowNumber: 21,
          RowLabel: "W",
          Seats: [
            {
              Cabin: 2,
              SeatNumber: "21A",
              Row: 21,
              RowLabel: "W21",
              Col: 0,
              ColName: "A",
              Type: 11,
              Location: 24,
              Text: "*P ",
              Price: 0.0
            },
            {
              Cabin: 2,
              SeatNumber: "21B",
              Row: 21,
              RowLabel: "W21",
              Col: 1,
              ColName: "B",
              Type: 9,
              Location: 5,
              Text: "   ",
              Price: 0.0
            },
            {
              Cabin: 2,
              SeatNumber: "21C",
              Row: 21,
              RowLabel: "W21",
              Col: 2,
              ColName: "C",
              Type: 11,
              Location: 24,
              Text: "*PH",
              Price: 0.0
            },
            {
              Cabin: 2,
              SeatNumber: "21 ",
              Row: 21,
              RowLabel: "W21",
              Col: 3,
              ColName: " ",
              Type: 9,
              Location: 5,
              Text: "   ",
              Price: 0.0
            },
            {
              Cabin: 2,
              SeatNumber: "21D",
              Row: 21,
              RowLabel: "W21",
              Col: 4,
              ColName: "D",
              Type: 11,
              Location: 24,
              Text: "*PH",
              Price: 0.0
            },
            {
              Cabin: 2,
              SeatNumber: "21E",
              Row: 21,
              RowLabel: "W21",
              Col: 5,
              ColName: "E",
              Type: 11,
              Location: 24,
              Text: "*P ",
              Price: 0.0
            },
            {
              Cabin: 2,
              SeatNumber: "21G",
              Row: 21,
              RowLabel: "W21",
              Col: 6,
              ColName: "G",
              Type: 11,
              Location: 24,
              Text: "*P ",
              Price: 0.0
            },
            {
              Cabin: 2,
              SeatNumber: "21H",
              Row: 21,
              RowLabel: "W21",
              Col: 7,
              ColName: "H",
              Type: 11,
              Location: 24,
              Text: "*PH",
              Price: 0.0
            },
            {
              Cabin: 2,
              SeatNumber: "21 ",
              Row: 21,
              RowLabel: "W21",
              Col: 8,
              ColName: " ",
              Type: 9,
              Location: 5,
              Text: "   ",
              Price: 0.0
            },
            {
              Cabin: 2,
              SeatNumber: "21J",
              Row: 21,
              RowLabel: "W21",
              Col: 9,
              ColName: "J",
              Type: 11,
              Location: 24,
              Text: "*PH",
              Price: 0.0
            },
            {
              Cabin: 2,
              SeatNumber: "21K",
              Row: 21,
              RowLabel: "W21",
              Col: 10,
              ColName: "K",
              Type: 9,
              Location: 5,
              Text: "   ",
              Price: 0.0
            },
            {
              Cabin: 2,
              SeatNumber: "21L",
              Row: 21,
              RowLabel: "W21",
              Col: 11,
              ColName: "L",
              Type: 11,
              Location: 24,
              Text: "*P ",
              Price: 0.0
            }
          ]
        },
        {
          Name: "W22",
          RowNumber: 22,
          RowLabel: "W",
          Seats: [
            {
              Cabin: 2,
              SeatNumber: "22A",
              Row: 22,
              RowLabel: "W22",
              Col: 0,
              ColName: "A",
              Type: 11,
              Location: 24,
              Text: "*P ",
              Price: 0.0
            },
            {
              Cabin: 2,
              SeatNumber: "22B",
              Row: 22,
              RowLabel: "W22",
              Col: 1,
              ColName: "B",
              Type: 11,
              Location: 24,
              Text: "*P ",
              Price: 0.0
            },
            {
              Cabin: 2,
              SeatNumber: "22C",
              Row: 22,
              RowLabel: "W22",
              Col: 2,
              ColName: "C",
              Type: 11,
              Location: 24,
              Text: "*PH",
              Price: 0.0
            },
            {
              Cabin: 2,
              SeatNumber: "22 ",
              Row: 22,
              RowLabel: "W22",
              Col: 3,
              ColName: " ",
              Type: 9,
              Location: 5,
              Text: "   ",
              Price: 0.0
            },
            {
              Cabin: 2,
              SeatNumber: "22D",
              Row: 22,
              RowLabel: "W22",
              Col: 4,
              ColName: "D",
              Type: 11,
              Location: 24,
              Text: "*PH",
              Price: 0.0
            },
            {
              Cabin: 2,
              SeatNumber: "22E",
              Row: 22,
              RowLabel: "W22",
              Col: 5,
              ColName: "E",
              Type: 11,
              Location: 24,
              Text: "*P ",
              Price: 0.0
            },
            {
              Cabin: 2,
              SeatNumber: "22G",
              Row: 22,
              RowLabel: "W22",
              Col: 6,
              ColName: "G",
              Type: 11,
              Location: 24,
              Text: "*P ",
              Price: 0.0
            },
            {
              Cabin: 2,
              SeatNumber: "22H",
              Row: 22,
              RowLabel: "W22",
              Col: 7,
              ColName: "H",
              Type: 11,
              Location: 24,
              Text: "*PH",
              Price: 0.0
            },
            {
              Cabin: 2,
              SeatNumber: "22 ",
              Row: 22,
              RowLabel: "W22",
              Col: 8,
              ColName: " ",
              Type: 9,
              Location: 5,
              Text: "   ",
              Price: 0.0
            },
            {
              Cabin: 2,
              SeatNumber: "22J",
              Row: 22,
              RowLabel: "W22",
              Col: 9,
              ColName: "J",
              Type: 11,
              Location: 24,
              Text: "*PH",
              Price: 0.0
            },
            {
              Cabin: 2,
              SeatNumber: "22K",
              Row: 22,
              RowLabel: "W22",
              Col: 10,
              ColName: "K",
              Type: 11,
              Location: 24,
              Text: "*P ",
              Price: 0.0
            },
            {
              Cabin: 2,
              SeatNumber: "22L",
              Row: 22,
              RowLabel: "W22",
              Col: 11,
              ColName: "L",
              Type: 11,
              Location: 24,
              Text: "*P ",
              Price: 0.0
            }
          ]
        },
        {
          Name: "W23",
          RowNumber: 23,
          RowLabel: "W",
          Seats: [
            {
              Cabin: 2,
              SeatNumber: "23A",
              Row: 23,
              RowLabel: "W23",
              Col: 0,
              ColName: "A",
              Type: 11,
              Location: 24,
              Text: "*P ",
              Price: 0.0
            },
            {
              Cabin: 2,
              SeatNumber: "23B",
              Row: 23,
              RowLabel: "W23",
              Col: 1,
              ColName: "B",
              Type: 9,
              Location: 24,
              Text: "*G ",
              Price: 0.0
            },
            {
              Cabin: 2,
              SeatNumber: "23C",
              Row: 23,
              RowLabel: "W23",
              Col: 2,
              ColName: "C",
              Type: 11,
              Location: 24,
              Text: "*PH",
              Price: 0.0
            },
            {
              Cabin: 2,
              SeatNumber: "23 ",
              Row: 23,
              RowLabel: "W23",
              Col: 3,
              ColName: " ",
              Type: 9,
              Location: 5,
              Text: "   ",
              Price: 0.0
            },
            {
              Cabin: 2,
              SeatNumber: "23D",
              Row: 23,
              RowLabel: "W23",
              Col: 4,
              ColName: "D",
              Type: 11,
              Location: 24,
              Text: "*PH",
              Price: 0.0
            },
            {
              Cabin: 2,
              SeatNumber: "23E",
              Row: 23,
              RowLabel: "W23",
              Col: 5,
              ColName: "E",
              Type: 9,
              Location: 24,
              Text: "*G ",
              Price: 0.0
            },
            {
              Cabin: 2,
              SeatNumber: "23G",
              Row: 23,
              RowLabel: "W23",
              Col: 6,
              ColName: "G",
              Type: 9,
              Location: 24,
              Text: "*G ",
              Price: 0.0
            },
            {
              Cabin: 2,
              SeatNumber: "23H",
              Row: 23,
              RowLabel: "W23",
              Col: 7,
              ColName: "H",
              Type: 11,
              Location: 24,
              Text: "*PH",
              Price: 0.0
            },
            {
              Cabin: 2,
              SeatNumber: "23 ",
              Row: 23,
              RowLabel: "W23",
              Col: 8,
              ColName: " ",
              Type: 9,
              Location: 5,
              Text: "   ",
              Price: 0.0
            },
            {
              Cabin: 2,
              SeatNumber: "23J",
              Row: 23,
              RowLabel: "W23",
              Col: 9,
              ColName: "J",
              Type: 11,
              Location: 24,
              Text: "*PH",
              Price: 0.0
            },
            {
              Cabin: 2,
              SeatNumber: "23K",
              Row: 23,
              RowLabel: "W23",
              Col: 10,
              ColName: "K",
              Type: 9,
              Location: 24,
              Text: "*G ",
              Price: 0.0
            },
            {
              Cabin: 2,
              SeatNumber: "23L",
              Row: 23,
              RowLabel: "W23",
              Col: 11,
              ColName: "L",
              Type: 11,
              Location: 24,
              Text: "*P ",
              Price: 0.0
            }
          ]
        },
        {
          Name: "W24",
          RowNumber: 24,
          RowLabel: "W",
          Seats: [
            {
              Cabin: 2,
              SeatNumber: "24A",
              Row: 24,
              RowLabel: "W24",
              Col: 0,
              ColName: "A",
              Type: 11,
              Location: 24,
              Text: "*P ",
              Price: 0.0
            },
            {
              Cabin: 2,
              SeatNumber: "24B",
              Row: 24,
              RowLabel: "W24",
              Col: 1,
              ColName: "B",
              Type: 9,
              Location: 24,
              Text: "*G ",
              Price: 0.0
            },
            {
              Cabin: 2,
              SeatNumber: "24C",
              Row: 24,
              RowLabel: "W24",
              Col: 2,
              ColName: "C",
              Type: 11,
              Location: 24,
              Text: "*PH",
              Price: 0.0
            },
            {
              Cabin: 2,
              SeatNumber: "24 ",
              Row: 24,
              RowLabel: "W24",
              Col: 3,
              ColName: " ",
              Type: 9,
              Location: 5,
              Text: "   ",
              Price: 0.0
            },
            {
              Cabin: 2,
              SeatNumber: "24D",
              Row: 24,
              RowLabel: "W24",
              Col: 4,
              ColName: "D",
              Type: 11,
              Location: 24,
              Text: "*PH",
              Price: 0.0
            },
            {
              Cabin: 2,
              SeatNumber: "24E",
              Row: 24,
              RowLabel: "W24",
              Col: 5,
              ColName: "E",
              Type: 9,
              Location: 24,
              Text: "*G ",
              Price: 0.0
            },
            {
              Cabin: 2,
              SeatNumber: "24G",
              Row: 24,
              RowLabel: "W24",
              Col: 6,
              ColName: "G",
              Type: 9,
              Location: 24,
              Text: "*G ",
              Price: 0.0
            },
            {
              Cabin: 2,
              SeatNumber: "24H",
              Row: 24,
              RowLabel: "W24",
              Col: 7,
              ColName: "H",
              Type: 11,
              Location: 24,
              Text: "*PH",
              Price: 0.0
            },
            {
              Cabin: 2,
              SeatNumber: "24 ",
              Row: 24,
              RowLabel: "W24",
              Col: 8,
              ColName: " ",
              Type: 9,
              Location: 5,
              Text: "   ",
              Price: 0.0
            },
            {
              Cabin: 2,
              SeatNumber: "24J",
              Row: 24,
              RowLabel: "W24",
              Col: 9,
              ColName: "J",
              Type: 11,
              Location: 24,
              Text: "*PH",
              Price: 0.0
            },
            {
              Cabin: 2,
              SeatNumber: "24K",
              Row: 24,
              RowLabel: "W24",
              Col: 10,
              ColName: "K",
              Type: 9,
              Location: 24,
              Text: "*G ",
              Price: 0.0
            },
            {
              Cabin: 2,
              SeatNumber: "24L",
              Row: 24,
              RowLabel: "W24",
              Col: 11,
              ColName: "L",
              Type: 11,
              Location: 24,
              Text: "*P ",
              Price: 0.0
            }
          ]
        },
        {
          Name: "W25",
          RowNumber: 25,
          RowLabel: "W",
          Seats: [
            {
              Cabin: 2,
              SeatNumber: "25A",
              Row: 25,
              RowLabel: "W25",
              Col: 0,
              ColName: "A",
              Type: 9,
              Location: 24,
              Text: "*G ",
              Price: 0.0
            },
            {
              Cabin: 2,
              SeatNumber: "25B",
              Row: 25,
              RowLabel: "W25",
              Col: 1,
              ColName: "B",
              Type: 9,
              Location: 24,
              Text: "*G ",
              Price: 0.0
            },
            {
              Cabin: 2,
              SeatNumber: "25C",
              Row: 25,
              RowLabel: "W25",
              Col: 2,
              ColName: "C",
              Type: 9,
              Location: 24,
              Text: "*GH",
              Price: 0.0
            },
            {
              Cabin: 2,
              SeatNumber: "25 ",
              Row: 25,
              RowLabel: "W25",
              Col: 3,
              ColName: " ",
              Type: 9,
              Location: 5,
              Text: "   ",
              Price: 0.0
            },
            {
              Cabin: 2,
              SeatNumber: "25D",
              Row: 25,
              RowLabel: "W25",
              Col: 4,
              ColName: "D",
              Type: 9,
              Location: 24,
              Text: "*GH",
              Price: 0.0
            },
            {
              Cabin: 2,
              SeatNumber: "25E",
              Row: 25,
              RowLabel: "W25",
              Col: 5,
              ColName: "E",
              Type: 9,
              Location: 24,
              Text: "*G ",
              Price: 0.0
            },
            {
              Cabin: 2,
              SeatNumber: "25G",
              Row: 25,
              RowLabel: "W25",
              Col: 6,
              ColName: "G",
              Type: 9,
              Location: 24,
              Text: "*G ",
              Price: 0.0
            },
            {
              Cabin: 2,
              SeatNumber: "25H",
              Row: 25,
              RowLabel: "W25",
              Col: 7,
              ColName: "H",
              Type: 9,
              Location: 24,
              Text: "*GH",
              Price: 0.0
            },
            {
              Cabin: 2,
              SeatNumber: "25 ",
              Row: 25,
              RowLabel: "W25",
              Col: 8,
              ColName: " ",
              Type: 9,
              Location: 5,
              Text: "   ",
              Price: 0.0
            },
            {
              Cabin: 2,
              SeatNumber: "25J",
              Row: 25,
              RowLabel: "W25",
              Col: 9,
              ColName: "J",
              Type: 9,
              Location: 24,
              Text: "*GH",
              Price: 0.0
            },
            {
              Cabin: 2,
              SeatNumber: "25K",
              Row: 25,
              RowLabel: "W25",
              Col: 10,
              ColName: "K",
              Type: 9,
              Location: 24,
              Text: "*G ",
              Price: 0.0
            },
            {
              Cabin: 2,
              SeatNumber: "25L",
              Row: 25,
              RowLabel: "W25",
              Col: 11,
              ColName: "L",
              Type: 9,
              Location: 24,
              Text: "*G ",
              Price: 0.0
            }
          ]
        },
        {
          Name: "W26",
          RowNumber: 26,
          RowLabel: "W",
          Seats: [
            {
              Cabin: 2,
              SeatNumber: "26A",
              Row: 26,
              RowLabel: "W26",
              Col: 0,
              ColName: "A",
              Type: 9,
              Location: 24,
              Text: "*G ",
              Price: 0.0
            },
            {
              Cabin: 2,
              SeatNumber: "26B",
              Row: 26,
              RowLabel: "W26",
              Col: 1,
              ColName: "B",
              Type: 9,
              Location: 24,
              Text: "*G ",
              Price: 0.0
            },
            {
              Cabin: 2,
              SeatNumber: "26C",
              Row: 26,
              RowLabel: "W26",
              Col: 2,
              ColName: "C",
              Type: 9,
              Location: 24,
              Text: "*GH",
              Price: 0.0
            },
            {
              Cabin: 2,
              SeatNumber: "26 ",
              Row: 26,
              RowLabel: "W26",
              Col: 3,
              ColName: " ",
              Type: 9,
              Location: 5,
              Text: "   ",
              Price: 0.0
            },
            {
              Cabin: 2,
              SeatNumber: "26D",
              Row: 26,
              RowLabel: "W26",
              Col: 4,
              ColName: "D",
              Type: 9,
              Location: 24,
              Text: "*GH",
              Price: 0.0
            },
            {
              Cabin: 2,
              SeatNumber: "26E",
              Row: 26,
              RowLabel: "W26",
              Col: 5,
              ColName: "E",
              Type: 9,
              Location: 24,
              Text: "*G ",
              Price: 0.0
            },
            {
              Cabin: 2,
              SeatNumber: "26G",
              Row: 26,
              RowLabel: "W26",
              Col: 6,
              ColName: "G",
              Type: 9,
              Location: 24,
              Text: "*G ",
              Price: 0.0
            },
            {
              Cabin: 2,
              SeatNumber: "26H",
              Row: 26,
              RowLabel: "W26",
              Col: 7,
              ColName: "H",
              Type: 9,
              Location: 24,
              Text: "*GH",
              Price: 0.0
            },
            {
              Cabin: 2,
              SeatNumber: "26 ",
              Row: 26,
              RowLabel: "W26",
              Col: 8,
              ColName: " ",
              Type: 9,
              Location: 5,
              Text: "   ",
              Price: 0.0
            },
            {
              Cabin: 2,
              SeatNumber: "26J",
              Row: 26,
              RowLabel: "W26",
              Col: 9,
              ColName: "J",
              Type: 9,
              Location: 24,
              Text: "*GH",
              Price: 0.0
            },
            {
              Cabin: 2,
              SeatNumber: "26K",
              Row: 26,
              RowLabel: "W26",
              Col: 10,
              ColName: "K",
              Type: 9,
              Location: 24,
              Text: "*G ",
              Price: 0.0
            },
            {
              Cabin: 2,
              SeatNumber: "26L",
              Row: 26,
              RowLabel: "W26",
              Col: 11,
              ColName: "L",
              Type: 9,
              Location: 24,
              Text: "*G ",
              Price: 0.0
            }
          ]
        },
        {
          Name: "W27",
          RowNumber: 27,
          RowLabel: "W",
          Seats: [
            {
              Cabin: 2,
              SeatNumber: "27A",
              Row: 27,
              RowLabel: "W27",
              Col: 0,
              ColName: "A",
              Type: 9,
              Location: 24,
              Text: "*G ",
              Price: 0.0
            },
            {
              Cabin: 2,
              SeatNumber: "27B",
              Row: 27,
              RowLabel: "W27",
              Col: 1,
              ColName: "B",
              Type: 9,
              Location: 24,
              Text: "*G ",
              Price: 0.0
            },
            {
              Cabin: 2,
              SeatNumber: "27C",
              Row: 27,
              RowLabel: "W27",
              Col: 2,
              ColName: "C",
              Type: 9,
              Location: 24,
              Text: "*GH",
              Price: 0.0
            },
            {
              Cabin: 2,
              SeatNumber: "27 ",
              Row: 27,
              RowLabel: "W27",
              Col: 3,
              ColName: " ",
              Type: 9,
              Location: 5,
              Text: "   ",
              Price: 0.0
            },
            {
              Cabin: 2,
              SeatNumber: "27D",
              Row: 27,
              RowLabel: "W27",
              Col: 4,
              ColName: "D",
              Type: 9,
              Location: 24,
              Text: "*GH",
              Price: 0.0
            },
            {
              Cabin: 2,
              SeatNumber: "27E",
              Row: 27,
              RowLabel: "W27",
              Col: 5,
              ColName: "E",
              Type: 9,
              Location: 24,
              Text: "*G ",
              Price: 0.0
            },
            {
              Cabin: 2,
              SeatNumber: "27G",
              Row: 27,
              RowLabel: "W27",
              Col: 6,
              ColName: "G",
              Type: 9,
              Location: 24,
              Text: "*G ",
              Price: 0.0
            },
            {
              Cabin: 2,
              SeatNumber: "27H",
              Row: 27,
              RowLabel: "W27",
              Col: 7,
              ColName: "H",
              Type: 9,
              Location: 24,
              Text: "*GH",
              Price: 0.0
            },
            {
              Cabin: 2,
              SeatNumber: "27 ",
              Row: 27,
              RowLabel: "W27",
              Col: 8,
              ColName: " ",
              Type: 9,
              Location: 5,
              Text: "   ",
              Price: 0.0
            },
            {
              Cabin: 2,
              SeatNumber: "27J",
              Row: 27,
              RowLabel: "W27",
              Col: 9,
              ColName: "J",
              Type: 9,
              Location: 24,
              Text: "*GH",
              Price: 0.0
            },
            {
              Cabin: 2,
              SeatNumber: "27K",
              Row: 27,
              RowLabel: "W27",
              Col: 10,
              ColName: "K",
              Type: 9,
              Location: 24,
              Text: "*G ",
              Price: 0.0
            },
            {
              Cabin: 2,
              SeatNumber: "27L",
              Row: 27,
              RowLabel: "W27",
              Col: 11,
              ColName: "L",
              Type: 9,
              Location: 24,
              Text: "*G ",
              Price: 0.0
            }
          ]
        },
        {
          Name: "W28",
          RowNumber: 28,
          RowLabel: "W",
          Seats: [
            {
              Cabin: 2,
              SeatNumber: "28A",
              Row: 28,
              RowLabel: "W28",
              Col: 0,
              ColName: "A",
              Type: 9,
              Location: 24,
              Text: "*G ",
              Price: 0.0
            },
            {
              Cabin: 2,
              SeatNumber: "28B",
              Row: 28,
              RowLabel: "W28",
              Col: 1,
              ColName: "B",
              Type: 9,
              Location: 24,
              Text: "*G ",
              Price: 0.0
            },
            {
              Cabin: 2,
              SeatNumber: "28C",
              Row: 28,
              RowLabel: "W28",
              Col: 2,
              ColName: "C",
              Type: 9,
              Location: 24,
              Text: "*GH",
              Price: 0.0
            },
            {
              Cabin: 2,
              SeatNumber: "28 ",
              Row: 28,
              RowLabel: "W28",
              Col: 3,
              ColName: " ",
              Type: 9,
              Location: 5,
              Text: "   ",
              Price: 0.0
            },
            {
              Cabin: 2,
              SeatNumber: "28D",
              Row: 28,
              RowLabel: "W28",
              Col: 4,
              ColName: "D",
              Type: 9,
              Location: 24,
              Text: "*GH",
              Price: 0.0
            },
            {
              Cabin: 2,
              SeatNumber: "28E",
              Row: 28,
              RowLabel: "W28",
              Col: 5,
              ColName: "E",
              Type: 9,
              Location: 24,
              Text: "*G ",
              Price: 0.0
            },
            {
              Cabin: 2,
              SeatNumber: "28G",
              Row: 28,
              RowLabel: "W28",
              Col: 6,
              ColName: "G",
              Type: 9,
              Location: 24,
              Text: "*G ",
              Price: 0.0
            },
            {
              Cabin: 2,
              SeatNumber: "28H",
              Row: 28,
              RowLabel: "W28",
              Col: 7,
              ColName: "H",
              Type: 9,
              Location: 24,
              Text: "*GH",
              Price: 0.0
            },
            {
              Cabin: 2,
              SeatNumber: "28 ",
              Row: 28,
              RowLabel: "W28",
              Col: 8,
              ColName: " ",
              Type: 9,
              Location: 5,
              Text: "   ",
              Price: 0.0
            },
            {
              Cabin: 2,
              SeatNumber: "28J",
              Row: 28,
              RowLabel: "W28",
              Col: 9,
              ColName: "J",
              Type: 9,
              Location: 24,
              Text: "*GH",
              Price: 0.0
            },
            {
              Cabin: 2,
              SeatNumber: "28K",
              Row: 28,
              RowLabel: "W28",
              Col: 10,
              ColName: "K",
              Type: 9,
              Location: 24,
              Text: "*G ",
              Price: 0.0
            },
            {
              Cabin: 2,
              SeatNumber: "28L",
              Row: 28,
              RowLabel: "W28",
              Col: 11,
              ColName: "L",
              Type: 9,
              Location: 24,
              Text: "*G ",
              Price: 0.0
            }
          ]
        },
        {
          Name: "W29",
          RowNumber: 29,
          RowLabel: "W",
          Seats: [
            {
              Cabin: 2,
              SeatNumber: "29A",
              Row: 29,
              RowLabel: "W29",
              Col: 0,
              ColName: "A",
              Type: 9,
              Location: 24,
              Text: "*G ",
              Price: 0.0
            },
            {
              Cabin: 2,
              SeatNumber: "29B",
              Row: 29,
              RowLabel: "W29",
              Col: 1,
              ColName: "B",
              Type: 9,
              Location: 24,
              Text: "*G ",
              Price: 0.0
            },
            {
              Cabin: 2,
              SeatNumber: "29C",
              Row: 29,
              RowLabel: "W29",
              Col: 2,
              ColName: "C",
              Type: 9,
              Location: 24,
              Text: "*GH",
              Price: 0.0
            },
            {
              Cabin: 2,
              SeatNumber: "29 ",
              Row: 29,
              RowLabel: "W29",
              Col: 3,
              ColName: " ",
              Type: 9,
              Location: 5,
              Text: "   ",
              Price: 0.0
            },
            {
              Cabin: 2,
              SeatNumber: "29D",
              Row: 29,
              RowLabel: "W29",
              Col: 4,
              ColName: "D",
              Type: 21,
              Location: 24,
              Text: "ZGH",
              Price: 0.0
            },
            {
              Cabin: 2,
              SeatNumber: "29E",
              Row: 29,
              RowLabel: "W29",
              Col: 5,
              ColName: "E",
              Type: 21,
              Location: 24,
              Text: "ZG ",
              Price: 0.0
            },
            {
              Cabin: 2,
              SeatNumber: "29G",
              Row: 29,
              RowLabel: "W29",
              Col: 6,
              ColName: "G",
              Type: 21,
              Location: 24,
              Text: "ZG ",
              Price: 0.0
            },
            {
              Cabin: 2,
              SeatNumber: "29H",
              Row: 29,
              RowLabel: "W29",
              Col: 7,
              ColName: "H",
              Type: 21,
              Location: 24,
              Text: "ZGH",
              Price: 0.0
            },
            {
              Cabin: 2,
              SeatNumber: "29 ",
              Row: 29,
              RowLabel: "W29",
              Col: 8,
              ColName: " ",
              Type: 9,
              Location: 5,
              Text: "   ",
              Price: 0.0
            },
            {
              Cabin: 2,
              SeatNumber: "29J",
              Row: 29,
              RowLabel: "W29",
              Col: 9,
              ColName: "J",
              Type: 9,
              Location: 24,
              Text: "*GH",
              Price: 0.0
            },
            {
              Cabin: 2,
              SeatNumber: "29K",
              Row: 29,
              RowLabel: "W29",
              Col: 10,
              ColName: "K",
              Type: 9,
              Location: 24,
              Text: "*G ",
              Price: 0.0
            },
            {
              Cabin: 2,
              SeatNumber: "29L",
              Row: 29,
              RowLabel: "W29",
              Col: 11,
              ColName: "L",
              Type: 9,
              Location: 24,
              Text: "*G ",
              Price: 0.0
            }
          ]
        },
        {
          Name: "W30",
          RowNumber: 30,
          RowLabel: "W",
          Seats: [
            {
              Cabin: 2,
              SeatNumber: "30A",
              Row: 30,
              RowLabel: "W30",
              Col: 0,
              ColName: "A",
              Type: 21,
              Location: 24,
              Text: "ZG ",
              Price: 0.0
            },
            {
              Cabin: 2,
              SeatNumber: "30B",
              Row: 30,
              RowLabel: "W30",
              Col: 1,
              ColName: "B",
              Type: 9,
              Location: 5,
              Text: "   ",
              Price: 0.0
            },
            {
              Cabin: 2,
              SeatNumber: "30C",
              Row: 30,
              RowLabel: "W30",
              Col: 2,
              ColName: "C",
              Type: 21,
              Location: 24,
              Text: "ZGH",
              Price: 0.0
            },
            {
              Cabin: 2,
              SeatNumber: "30 ",
              Row: 30,
              RowLabel: "W30",
              Col: 3,
              ColName: " ",
              Type: 9,
              Location: 5,
              Text: "   ",
              Price: 0.0
            },
            {
              Cabin: 2,
              SeatNumber: "30D",
              Row: 30,
              RowLabel: "W30",
              Col: 4,
              ColName: "D",
              Type: 2,
              Location: 24,
              Text: "LAV",
              Price: 0.0
            },
            {
              Cabin: 2,
              SeatNumber: "30E",
              Row: 30,
              RowLabel: "W30",
              Col: 5,
              ColName: "E",
              Type: 9,
              Location: 5,
              Text: "   ",
              Price: 0.0
            },
            {
              Cabin: 2,
              SeatNumber: "30G",
              Row: 30,
              RowLabel: "W30",
              Col: 6,
              ColName: "G",
              Type: 9,
              Location: 5,
              Text: "   ",
              Price: 0.0
            },
            {
              Cabin: 2,
              SeatNumber: "30H",
              Row: 30,
              RowLabel: "W30",
              Col: 7,
              ColName: "H",
              Type: 2,
              Location: 24,
              Text: "LAV",
              Price: 0.0
            },
            {
              Cabin: 2,
              SeatNumber: "30 ",
              Row: 30,
              RowLabel: "W30",
              Col: 8,
              ColName: " ",
              Type: 9,
              Location: 5,
              Text: "   ",
              Price: 0.0
            },
            {
              Cabin: 2,
              SeatNumber: "30J",
              Row: 30,
              RowLabel: "W30",
              Col: 9,
              ColName: "J",
              Type: 21,
              Location: 24,
              Text: "ZGH",
              Price: 0.0
            },
            {
              Cabin: 2,
              SeatNumber: "30K",
              Row: 30,
              RowLabel: "W30",
              Col: 10,
              ColName: "K",
              Type: 9,
              Location: 5,
              Text: "   ",
              Price: 0.0
            },
            {
              Cabin: 2,
              SeatNumber: "30L",
              Row: 30,
              RowLabel: "W30",
              Col: 11,
              ColName: "L",
              Type: 21,
              Location: 24,
              Text: "ZG ",
              Price: 0.0
            }
          ]
        },
        {
          Name: "P31X",
          RowNumber: 31,
          RowLabel: "PX",
          Seats: [
            {
              Cabin: 2,
              SeatNumber: "31A",
              Row: 31,
              RowLabel: "P31X",
              Col: 0,
              ColName: "A",
              Type: 20,
              Location: 12,
              Text: "*L ",
              Price: 0.0
            },
            {
              Cabin: 2,
              SeatNumber: "31B",
              Row: 31,
              RowLabel: "P31X",
              Col: 1,
              ColName: "B",
              Type: 9,
              Location: 5,
              Text: "   ",
              Price: 0.0
            },
            {
              Cabin: 2,
              SeatNumber: "31C",
              Row: 31,
              RowLabel: "P31X",
              Col: 2,
              ColName: "C",
              Type: 20,
              Location: 12,
              Text: "*L ",
              Price: 0.0
            },
            {
              Cabin: 2,
              SeatNumber: "31 ",
              Row: 31,
              RowLabel: "P31X",
              Col: 3,
              ColName: " ",
              Type: 9,
              Location: 5,
              Text: "   ",
              Price: 0.0
            },
            {
              Cabin: 2,
              SeatNumber: "31D",
              Row: 31,
              RowLabel: "P31X",
              Col: 4,
              ColName: "D",
              Type: 9,
              Location: 5,
              Text: "   ",
              Price: 0.0
            },
            {
              Cabin: 2,
              SeatNumber: "31E",
              Row: 31,
              RowLabel: "P31X",
              Col: 5,
              ColName: "E",
              Type: 4,
              Location: 12,
              Text: "GAL",
              Price: 0.0
            },
            {
              Cabin: 2,
              SeatNumber: "31G",
              Row: 31,
              RowLabel: "P31X",
              Col: 6,
              ColName: "G",
              Type: 4,
              Location: 12,
              Text: "GAL",
              Price: 0.0
            },
            {
              Cabin: 2,
              SeatNumber: "31H",
              Row: 31,
              RowLabel: "P31X",
              Col: 7,
              ColName: "H",
              Type: 9,
              Location: 5,
              Text: "   ",
              Price: 0.0
            },
            {
              Cabin: 2,
              SeatNumber: "31 ",
              Row: 31,
              RowLabel: "P31X",
              Col: 8,
              ColName: " ",
              Type: 9,
              Location: 5,
              Text: "   ",
              Price: 0.0
            },
            {
              Cabin: 2,
              SeatNumber: "31J",
              Row: 31,
              RowLabel: "P31X",
              Col: 9,
              ColName: "J",
              Type: 20,
              Location: 12,
              Text: "*L ",
              Price: 0.0
            },
            {
              Cabin: 2,
              SeatNumber: "31K",
              Row: 31,
              RowLabel: "P31X",
              Col: 10,
              ColName: "K",
              Type: 9,
              Location: 5,
              Text: "   ",
              Price: 0.0
            },
            {
              Cabin: 2,
              SeatNumber: "31L",
              Row: 31,
              RowLabel: "P31X",
              Col: 11,
              ColName: "L",
              Type: 20,
              Location: 12,
              Text: "*L ",
              Price: 0.0
            }
          ]
        },
        {
          Name: "P32",
          RowNumber: 32,
          RowLabel: "P",
          Seats: [
            {
              Cabin: 2,
              SeatNumber: "32A",
              Row: 32,
              RowLabel: "P32",
              Col: 0,
              ColName: "A",
              Type: 20,
              Location: 24,
              Text: "*L ",
              Price: 0.0
            },
            {
              Cabin: 2,
              SeatNumber: "32B",
              Row: 32,
              RowLabel: "P32",
              Col: 1,
              ColName: "B",
              Type: 9,
              Location: 5,
              Text: "   ",
              Price: 0.0
            },
            {
              Cabin: 2,
              SeatNumber: "32C",
              Row: 32,
              RowLabel: "P32",
              Col: 2,
              ColName: "C",
              Type: 20,
              Location: 24,
              Text: "*LH",
              Price: 0.0
            },
            {
              Cabin: 2,
              SeatNumber: "32 ",
              Row: 32,
              RowLabel: "P32",
              Col: 3,
              ColName: " ",
              Type: 9,
              Location: 5,
              Text: "   ",
              Price: 0.0
            },
            {
              Cabin: 2,
              SeatNumber: "32D",
              Row: 32,
              RowLabel: "P32",
              Col: 4,
              ColName: "D",
              Type: 9,
              Location: 5,
              Text: "   ",
              Price: 0.0
            },
            {
              Cabin: 2,
              SeatNumber: "32E",
              Row: 32,
              RowLabel: "P32",
              Col: 5,
              ColName: "E",
              Type: 9,
              Location: 5,
              Text: "   ",
              Price: 0.0
            },
            {
              Cabin: 2,
              SeatNumber: "32G",
              Row: 32,
              RowLabel: "P32",
              Col: 6,
              ColName: "G",
              Type: 9,
              Location: 5,
              Text: "   ",
              Price: 0.0
            },
            {
              Cabin: 2,
              SeatNumber: "32H",
              Row: 32,
              RowLabel: "P32",
              Col: 7,
              ColName: "H",
              Type: 9,
              Location: 5,
              Text: "   ",
              Price: 0.0
            },
            {
              Cabin: 2,
              SeatNumber: "32 ",
              Row: 32,
              RowLabel: "P32",
              Col: 8,
              ColName: " ",
              Type: 9,
              Location: 5,
              Text: "   ",
              Price: 0.0
            },
            {
              Cabin: 2,
              SeatNumber: "32J",
              Row: 32,
              RowLabel: "P32",
              Col: 9,
              ColName: "J",
              Type: 20,
              Location: 24,
              Text: "*LH",
              Price: 0.0
            },
            {
              Cabin: 2,
              SeatNumber: "32K",
              Row: 32,
              RowLabel: "P32",
              Col: 10,
              ColName: "K",
              Type: 9,
              Location: 5,
              Text: "   ",
              Price: 0.0
            },
            {
              Cabin: 2,
              SeatNumber: "32L",
              Row: 32,
              RowLabel: "P32",
              Col: 11,
              ColName: "L",
              Type: 20,
              Location: 24,
              Text: "*L ",
              Price: 0.0
            }
          ]
        },
        {
          Name: "P33",
          RowNumber: 33,
          RowLabel: "P",
          Seats: [
            {
              Cabin: 2,
              SeatNumber: "33A",
              Row: 33,
              RowLabel: "P33",
              Col: 0,
              ColName: "A",
              Type: 11,
              Location: 24,
              Text: "*P ",
              Price: 0.0
            },
            {
              Cabin: 2,
              SeatNumber: "33B",
              Row: 33,
              RowLabel: "P33",
              Col: 1,
              ColName: "B",
              Type: 11,
              Location: 24,
              Text: "*P ",
              Price: 0.0
            },
            {
              Cabin: 2,
              SeatNumber: "33C",
              Row: 33,
              RowLabel: "P33",
              Col: 2,
              ColName: "C",
              Type: 11,
              Location: 24,
              Text: "*P ",
              Price: 0.0
            },
            {
              Cabin: 2,
              SeatNumber: "33 ",
              Row: 33,
              RowLabel: "P33",
              Col: 3,
              ColName: " ",
              Type: 9,
              Location: 5,
              Text: "   ",
              Price: 0.0
            },
            {
              Cabin: 2,
              SeatNumber: "33D",
              Row: 33,
              RowLabel: "P33",
              Col: 4,
              ColName: "D",
              Type: 20,
              Location: 24,
              Text: "*L ",
              Price: 0.0
            },
            {
              Cabin: 2,
              SeatNumber: "33E",
              Row: 33,
              RowLabel: "P33",
              Col: 5,
              ColName: "E",
              Type: 20,
              Location: 24,
              Text: "*L ",
              Price: 0.0
            },
            {
              Cabin: 2,
              SeatNumber: "33G",
              Row: 33,
              RowLabel: "P33",
              Col: 6,
              ColName: "G",
              Type: 20,
              Location: 24,
              Text: "*L ",
              Price: 0.0
            },
            {
              Cabin: 2,
              SeatNumber: "33H",
              Row: 33,
              RowLabel: "P33",
              Col: 7,
              ColName: "H",
              Type: 20,
              Location: 24,
              Text: "*L ",
              Price: 0.0
            },
            {
              Cabin: 2,
              SeatNumber: "33 ",
              Row: 33,
              RowLabel: "P33",
              Col: 8,
              ColName: " ",
              Type: 9,
              Location: 5,
              Text: "   ",
              Price: 0.0
            },
            {
              Cabin: 2,
              SeatNumber: "33J",
              Row: 33,
              RowLabel: "P33",
              Col: 9,
              ColName: "J",
              Type: 11,
              Location: 24,
              Text: "*P ",
              Price: 0.0
            },
            {
              Cabin: 2,
              SeatNumber: "33K",
              Row: 33,
              RowLabel: "P33",
              Col: 10,
              ColName: "K",
              Type: 11,
              Location: 24,
              Text: "*P ",
              Price: 0.0
            },
            {
              Cabin: 2,
              SeatNumber: "33L",
              Row: 33,
              RowLabel: "P33",
              Col: 11,
              ColName: "L",
              Type: 11,
              Location: 24,
              Text: "*P ",
              Price: 0.0
            }
          ]
        },
        {
          Name: "P34",
          RowNumber: 34,
          RowLabel: "P",
          Seats: [
            {
              Cabin: 2,
              SeatNumber: "34A",
              Row: 34,
              RowLabel: "P34",
              Col: 0,
              ColName: "A",
              Type: 11,
              Location: 24,
              Text: "*P ",
              Price: 0.0
            },
            {
              Cabin: 2,
              SeatNumber: "34B",
              Row: 34,
              RowLabel: "P34",
              Col: 1,
              ColName: "B",
              Type: 9,
              Location: 24,
              Text: "*G ",
              Price: 0.0
            },
            {
              Cabin: 2,
              SeatNumber: "34C",
              Row: 34,
              RowLabel: "P34",
              Col: 2,
              ColName: "C",
              Type: 11,
              Location: 24,
              Text: "*P ",
              Price: 0.0
            },
            {
              Cabin: 2,
              SeatNumber: "34 ",
              Row: 34,
              RowLabel: "P34",
              Col: 3,
              ColName: " ",
              Type: 9,
              Location: 5,
              Text: "   ",
              Price: 0.0
            },
            {
              Cabin: 2,
              SeatNumber: "34D",
              Row: 34,
              RowLabel: "P34",
              Col: 4,
              ColName: "D",
              Type: 20,
              Location: 24,
              Text: "*LH",
              Price: 0.0
            },
            {
              Cabin: 2,
              SeatNumber: "34E",
              Row: 34,
              RowLabel: "P34",
              Col: 5,
              ColName: "E",
              Type: 20,
              Location: 24,
              Text: "*L ",
              Price: 0.0
            },
            {
              Cabin: 2,
              SeatNumber: "34G",
              Row: 34,
              RowLabel: "P34",
              Col: 6,
              ColName: "G",
              Type: 20,
              Location: 24,
              Text: "*LH",
              Price: 0.0
            },
            {
              Cabin: 2,
              SeatNumber: "34H",
              Row: 34,
              RowLabel: "P34",
              Col: 7,
              ColName: "H",
              Type: 20,
              Location: 24,
              Text: "*LH",
              Price: 0.0
            },
            {
              Cabin: 2,
              SeatNumber: "34 ",
              Row: 34,
              RowLabel: "P34",
              Col: 8,
              ColName: " ",
              Type: 9,
              Location: 5,
              Text: "   ",
              Price: 0.0
            },
            {
              Cabin: 2,
              SeatNumber: "34J",
              Row: 34,
              RowLabel: "P34",
              Col: 9,
              ColName: "J",
              Type: 11,
              Location: 24,
              Text: "*PH",
              Price: 0.0
            },
            {
              Cabin: 2,
              SeatNumber: "34K",
              Row: 34,
              RowLabel: "P34",
              Col: 10,
              ColName: "K",
              Type: 9,
              Location: 24,
              Text: "*G ",
              Price: 0.0
            },
            {
              Cabin: 2,
              SeatNumber: "34L",
              Row: 34,
              RowLabel: "P34",
              Col: 11,
              ColName: "L",
              Type: 11,
              Location: 24,
              Text: "*P ",
              Price: 0.0
            }
          ]
        },
        {
          Name: "P35",
          RowNumber: 35,
          RowLabel: "P",
          Seats: [
            {
              Cabin: 2,
              SeatNumber: "35A",
              Row: 35,
              RowLabel: "P35",
              Col: 0,
              ColName: "A",
              Type: 11,
              Location: 24,
              Text: "*P ",
              Price: 0.0
            },
            {
              Cabin: 2,
              SeatNumber: "35B",
              Row: 35,
              RowLabel: "P35",
              Col: 1,
              ColName: "B",
              Type: 9,
              Location: 24,
              Text: "*G ",
              Price: 0.0
            },
            {
              Cabin: 2,
              SeatNumber: "35C",
              Row: 35,
              RowLabel: "P35",
              Col: 2,
              ColName: "C",
              Type: 11,
              Location: 24,
              Text: "*P ",
              Price: 0.0
            },
            {
              Cabin: 2,
              SeatNumber: "35 ",
              Row: 35,
              RowLabel: "P35",
              Col: 3,
              ColName: " ",
              Type: 9,
              Location: 5,
              Text: "   ",
              Price: 0.0
            },
            {
              Cabin: 2,
              SeatNumber: "35D",
              Row: 35,
              RowLabel: "P35",
              Col: 4,
              ColName: "D",
              Type: 20,
              Location: 24,
              Text: "*LH",
              Price: 0.0
            },
            {
              Cabin: 2,
              SeatNumber: "35E",
              Row: 35,
              RowLabel: "P35",
              Col: 5,
              ColName: "E",
              Type: 20,
              Location: 24,
              Text: "*L ",
              Price: 0.0
            },
            {
              Cabin: 2,
              SeatNumber: "35G",
              Row: 35,
              RowLabel: "P35",
              Col: 6,
              ColName: "G",
              Type: 20,
              Location: 24,
              Text: "*LH",
              Price: 0.0
            },
            {
              Cabin: 2,
              SeatNumber: "35H",
              Row: 35,
              RowLabel: "P35",
              Col: 7,
              ColName: "H",
              Type: 20,
              Location: 24,
              Text: "*LH",
              Price: 0.0
            },
            {
              Cabin: 2,
              SeatNumber: "35 ",
              Row: 35,
              RowLabel: "P35",
              Col: 8,
              ColName: " ",
              Type: 9,
              Location: 5,
              Text: "   ",
              Price: 0.0
            },
            {
              Cabin: 2,
              SeatNumber: "35J",
              Row: 35,
              RowLabel: "P35",
              Col: 9,
              ColName: "J",
              Type: 11,
              Location: 24,
              Text: "*PH",
              Price: 0.0
            },
            {
              Cabin: 2,
              SeatNumber: "35K",
              Row: 35,
              RowLabel: "P35",
              Col: 10,
              ColName: "K",
              Type: 9,
              Location: 24,
              Text: "*G ",
              Price: 0.0
            },
            {
              Cabin: 2,
              SeatNumber: "35L",
              Row: 35,
              RowLabel: "P35",
              Col: 11,
              ColName: "L",
              Type: 11,
              Location: 24,
              Text: "*P ",
              Price: 0.0
            }
          ]
        },
        {
          Name: "P36",
          RowNumber: 36,
          RowLabel: "P",
          Seats: [
            {
              Cabin: 2,
              SeatNumber: "36A",
              Row: 36,
              RowLabel: "P36",
              Col: 0,
              ColName: "A",
              Type: 11,
              Location: 24,
              Text: "*P ",
              Price: 0.0
            },
            {
              Cabin: 2,
              SeatNumber: "36B",
              Row: 36,
              RowLabel: "P36",
              Col: 1,
              ColName: "B",
              Type: 9,
              Location: 24,
              Text: "*G ",
              Price: 0.0
            },
            {
              Cabin: 2,
              SeatNumber: "36C",
              Row: 36,
              RowLabel: "P36",
              Col: 2,
              ColName: "C",
              Type: 11,
              Location: 24,
              Text: "*P ",
              Price: 0.0
            },
            {
              Cabin: 2,
              SeatNumber: "36 ",
              Row: 36,
              RowLabel: "P36",
              Col: 3,
              ColName: " ",
              Type: 9,
              Location: 5,
              Text: "   ",
              Price: 0.0
            },
            {
              Cabin: 2,
              SeatNumber: "36D",
              Row: 36,
              RowLabel: "P36",
              Col: 4,
              ColName: "D",
              Type: 9,
              Location: 24,
              Text: "*GH",
              Price: 0.0
            },
            {
              Cabin: 2,
              SeatNumber: "36E",
              Row: 36,
              RowLabel: "P36",
              Col: 5,
              ColName: "E",
              Type: 9,
              Location: 24,
              Text: "*G ",
              Price: 0.0
            },
            {
              Cabin: 2,
              SeatNumber: "36G",
              Row: 36,
              RowLabel: "P36",
              Col: 6,
              ColName: "G",
              Type: 9,
              Location: 24,
              Text: "*GH",
              Price: 0.0
            },
            {
              Cabin: 2,
              SeatNumber: "36H",
              Row: 36,
              RowLabel: "P36",
              Col: 7,
              ColName: "H",
              Type: 9,
              Location: 24,
              Text: "*GH",
              Price: 0.0
            },
            {
              Cabin: 2,
              SeatNumber: "36 ",
              Row: 36,
              RowLabel: "P36",
              Col: 8,
              ColName: " ",
              Type: 9,
              Location: 5,
              Text: "   ",
              Price: 0.0
            },
            {
              Cabin: 2,
              SeatNumber: "36J",
              Row: 36,
              RowLabel: "P36",
              Col: 9,
              ColName: "J",
              Type: 11,
              Location: 24,
              Text: "*PH",
              Price: 0.0
            },
            {
              Cabin: 2,
              SeatNumber: "36K",
              Row: 36,
              RowLabel: "P36",
              Col: 10,
              ColName: "K",
              Type: 9,
              Location: 24,
              Text: "*G ",
              Price: 0.0
            },
            {
              Cabin: 2,
              SeatNumber: "36L",
              Row: 36,
              RowLabel: "P36",
              Col: 11,
              ColName: "L",
              Type: 11,
              Location: 24,
              Text: "*P ",
              Price: 0.0
            }
          ]
        },
        {
          Name: "P37",
          RowNumber: 37,
          RowLabel: "P",
          Seats: [
            {
              Cabin: 2,
              SeatNumber: "37A",
              Row: 37,
              RowLabel: "P37",
              Col: 0,
              ColName: "A",
              Type: 11,
              Location: 24,
              Text: "*P ",
              Price: 0.0
            },
            {
              Cabin: 2,
              SeatNumber: "37B",
              Row: 37,
              RowLabel: "P37",
              Col: 1,
              ColName: "B",
              Type: 9,
              Location: 24,
              Text: "*G ",
              Price: 0.0
            },
            {
              Cabin: 2,
              SeatNumber: "37C",
              Row: 37,
              RowLabel: "P37",
              Col: 2,
              ColName: "C",
              Type: 11,
              Location: 24,
              Text: "*P ",
              Price: 0.0
            },
            {
              Cabin: 2,
              SeatNumber: "37 ",
              Row: 37,
              RowLabel: "P37",
              Col: 3,
              ColName: " ",
              Type: 9,
              Location: 5,
              Text: "   ",
              Price: 0.0
            },
            {
              Cabin: 2,
              SeatNumber: "37D",
              Row: 37,
              RowLabel: "P37",
              Col: 4,
              ColName: "D",
              Type: 9,
              Location: 24,
              Text: "*GH",
              Price: 0.0
            },
            {
              Cabin: 2,
              SeatNumber: "37E",
              Row: 37,
              RowLabel: "P37",
              Col: 5,
              ColName: "E",
              Type: 9,
              Location: 24,
              Text: "*G ",
              Price: 0.0
            },
            {
              Cabin: 2,
              SeatNumber: "37G",
              Row: 37,
              RowLabel: "P37",
              Col: 6,
              ColName: "G",
              Type: 9,
              Location: 24,
              Text: "*GH",
              Price: 0.0
            },
            {
              Cabin: 2,
              SeatNumber: "37H",
              Row: 37,
              RowLabel: "P37",
              Col: 7,
              ColName: "H",
              Type: 9,
              Location: 24,
              Text: "*GH",
              Price: 0.0
            },
            {
              Cabin: 2,
              SeatNumber: "37 ",
              Row: 37,
              RowLabel: "P37",
              Col: 8,
              ColName: " ",
              Type: 9,
              Location: 5,
              Text: "   ",
              Price: 0.0
            },
            {
              Cabin: 2,
              SeatNumber: "37J",
              Row: 37,
              RowLabel: "P37",
              Col: 9,
              ColName: "J",
              Type: 11,
              Location: 24,
              Text: "*PH",
              Price: 0.0
            },
            {
              Cabin: 2,
              SeatNumber: "37K",
              Row: 37,
              RowLabel: "P37",
              Col: 10,
              ColName: "K",
              Type: 9,
              Location: 24,
              Text: "*G ",
              Price: 0.0
            },
            {
              Cabin: 2,
              SeatNumber: "37L",
              Row: 37,
              RowLabel: "P37",
              Col: 11,
              ColName: "L",
              Type: 11,
              Location: 24,
              Text: "*P ",
              Price: 0.0
            }
          ]
        },
        {
          Name: "38",
          RowNumber: 38,
          RowLabel: "",
          Seats: [
            {
              Cabin: 2,
              SeatNumber: "38A",
              Row: 38,
              RowLabel: "38",
              Col: 0,
              ColName: "A",
              Type: 9,
              Location: 24,
              Text: "*G ",
              Price: 0.0
            },
            {
              Cabin: 2,
              SeatNumber: "38B",
              Row: 38,
              RowLabel: "38",
              Col: 1,
              ColName: "B",
              Type: 9,
              Location: 24,
              Text: "*G ",
              Price: 0.0
            },
            {
              Cabin: 2,
              SeatNumber: "38C",
              Row: 38,
              RowLabel: "38",
              Col: 2,
              ColName: "C",
              Type: 9,
              Location: 24,
              Text: "*G ",
              Price: 0.0
            },
            {
              Cabin: 2,
              SeatNumber: "38 ",
              Row: 38,
              RowLabel: "38",
              Col: 3,
              ColName: " ",
              Type: 9,
              Location: 5,
              Text: "   ",
              Price: 0.0
            },
            {
              Cabin: 2,
              SeatNumber: "38D",
              Row: 38,
              RowLabel: "38",
              Col: 4,
              ColName: "D",
              Type: 9,
              Location: 24,
              Text: "*GH",
              Price: 0.0
            },
            {
              Cabin: 2,
              SeatNumber: "38E",
              Row: 38,
              RowLabel: "38",
              Col: 5,
              ColName: "E",
              Type: 9,
              Location: 24,
              Text: "*G ",
              Price: 0.0
            },
            {
              Cabin: 2,
              SeatNumber: "38G",
              Row: 38,
              RowLabel: "38",
              Col: 6,
              ColName: "G",
              Type: 9,
              Location: 24,
              Text: "*GH",
              Price: 0.0
            },
            {
              Cabin: 2,
              SeatNumber: "38H",
              Row: 38,
              RowLabel: "38",
              Col: 7,
              ColName: "H",
              Type: 9,
              Location: 24,
              Text: "*GH",
              Price: 0.0
            },
            {
              Cabin: 2,
              SeatNumber: "38 ",
              Row: 38,
              RowLabel: "38",
              Col: 8,
              ColName: " ",
              Type: 9,
              Location: 5,
              Text: "   ",
              Price: 0.0
            },
            {
              Cabin: 2,
              SeatNumber: "38J",
              Row: 38,
              RowLabel: "38",
              Col: 9,
              ColName: "J",
              Type: 9,
              Location: 24,
              Text: "*GH",
              Price: 0.0
            },
            {
              Cabin: 2,
              SeatNumber: "38K",
              Row: 38,
              RowLabel: "38",
              Col: 10,
              ColName: "K",
              Type: 9,
              Location: 24,
              Text: "*G ",
              Price: 0.0
            },
            {
              Cabin: 2,
              SeatNumber: "38L",
              Row: 38,
              RowLabel: "38",
              Col: 11,
              ColName: "L",
              Type: 9,
              Location: 24,
              Text: "*G ",
              Price: 0.0
            }
          ]
        },
        {
          Name: "39",
          RowNumber: 39,
          RowLabel: "",
          Seats: [
            {
              Cabin: 2,
              SeatNumber: "39A",
              Row: 39,
              RowLabel: "39",
              Col: 0,
              ColName: "A",
              Type: 9,
              Location: 24,
              Text: "*G ",
              Price: 0.0
            },
            {
              Cabin: 2,
              SeatNumber: "39B",
              Row: 39,
              RowLabel: "39",
              Col: 1,
              ColName: "B",
              Type: 9,
              Location: 24,
              Text: "*G ",
              Price: 0.0
            },
            {
              Cabin: 2,
              SeatNumber: "39C",
              Row: 39,
              RowLabel: "39",
              Col: 2,
              ColName: "C",
              Type: 9,
              Location: 24,
              Text: "*G ",
              Price: 0.0
            },
            {
              Cabin: 2,
              SeatNumber: "39 ",
              Row: 39,
              RowLabel: "39",
              Col: 3,
              ColName: " ",
              Type: 9,
              Location: 5,
              Text: "   ",
              Price: 0.0
            },
            {
              Cabin: 2,
              SeatNumber: "39D",
              Row: 39,
              RowLabel: "39",
              Col: 4,
              ColName: "D",
              Type: 9,
              Location: 24,
              Text: "*GH",
              Price: 0.0
            },
            {
              Cabin: 2,
              SeatNumber: "39E",
              Row: 39,
              RowLabel: "39",
              Col: 5,
              ColName: "E",
              Type: 9,
              Location: 24,
              Text: "*G ",
              Price: 0.0
            },
            {
              Cabin: 2,
              SeatNumber: "39G",
              Row: 39,
              RowLabel: "39",
              Col: 6,
              ColName: "G",
              Type: 9,
              Location: 24,
              Text: "*GH",
              Price: 0.0
            },
            {
              Cabin: 2,
              SeatNumber: "39H",
              Row: 39,
              RowLabel: "39",
              Col: 7,
              ColName: "H",
              Type: 9,
              Location: 24,
              Text: "*GH",
              Price: 0.0
            },
            {
              Cabin: 2,
              SeatNumber: "39 ",
              Row: 39,
              RowLabel: "39",
              Col: 8,
              ColName: " ",
              Type: 9,
              Location: 5,
              Text: "   ",
              Price: 0.0
            },
            {
              Cabin: 2,
              SeatNumber: "39J",
              Row: 39,
              RowLabel: "39",
              Col: 9,
              ColName: "J",
              Type: 9,
              Location: 24,
              Text: "*GH",
              Price: 0.0
            },
            {
              Cabin: 2,
              SeatNumber: "39K",
              Row: 39,
              RowLabel: "39",
              Col: 10,
              ColName: "K",
              Type: 9,
              Location: 24,
              Text: "*G ",
              Price: 0.0
            },
            {
              Cabin: 2,
              SeatNumber: "39L",
              Row: 39,
              RowLabel: "39",
              Col: 11,
              ColName: "L",
              Type: 9,
              Location: 24,
              Text: "*G ",
              Price: 0.0
            }
          ]
        },
        {
          Name: "40",
          RowNumber: 40,
          RowLabel: "",
          Seats: [
            {
              Cabin: 2,
              SeatNumber: "40A",
              Row: 40,
              RowLabel: "40",
              Col: 0,
              ColName: "A",
              Type: 9,
              Location: 24,
              Text: "*G ",
              Price: 0.0
            },
            {
              Cabin: 2,
              SeatNumber: "40B",
              Row: 40,
              RowLabel: "40",
              Col: 1,
              ColName: "B",
              Type: 9,
              Location: 24,
              Text: "*G ",
              Price: 0.0
            },
            {
              Cabin: 2,
              SeatNumber: "40C",
              Row: 40,
              RowLabel: "40",
              Col: 2,
              ColName: "C",
              Type: 9,
              Location: 24,
              Text: "*G ",
              Price: 0.0
            },
            {
              Cabin: 2,
              SeatNumber: "40 ",
              Row: 40,
              RowLabel: "40",
              Col: 3,
              ColName: " ",
              Type: 9,
              Location: 5,
              Text: "   ",
              Price: 0.0
            },
            {
              Cabin: 2,
              SeatNumber: "40D",
              Row: 40,
              RowLabel: "40",
              Col: 4,
              ColName: "D",
              Type: 9,
              Location: 24,
              Text: "*GH",
              Price: 0.0
            },
            {
              Cabin: 2,
              SeatNumber: "40E",
              Row: 40,
              RowLabel: "40",
              Col: 5,
              ColName: "E",
              Type: 18,
              Location: 24,
              Text: "RG ",
              Price: 0.0
            },
            {
              Cabin: 2,
              SeatNumber: "40G",
              Row: 40,
              RowLabel: "40",
              Col: 6,
              ColName: "G",
              Type: 18,
              Location: 24,
              Text: "RGH",
              Price: 0.0
            },
            {
              Cabin: 2,
              SeatNumber: "40H",
              Row: 40,
              RowLabel: "40",
              Col: 7,
              ColName: "H",
              Type: 18,
              Location: 24,
              Text: "RGH",
              Price: 0.0
            },
            {
              Cabin: 2,
              SeatNumber: "40 ",
              Row: 40,
              RowLabel: "40",
              Col: 8,
              ColName: " ",
              Type: 9,
              Location: 5,
              Text: "   ",
              Price: 0.0
            },
            {
              Cabin: 2,
              SeatNumber: "40J",
              Row: 40,
              RowLabel: "40",
              Col: 9,
              ColName: "J",
              Type: 18,
              Location: 24,
              Text: "RGH",
              Price: 0.0
            },
            {
              Cabin: 2,
              SeatNumber: "40K",
              Row: 40,
              RowLabel: "40",
              Col: 10,
              ColName: "K",
              Type: 18,
              Location: 24,
              Text: "RG ",
              Price: 0.0
            },
            {
              Cabin: 2,
              SeatNumber: "40L",
              Row: 40,
              RowLabel: "40",
              Col: 11,
              ColName: "L",
              Type: 9,
              Location: 24,
              Text: "*G ",
              Price: 0.0
            }
          ]
        },
        {
          Name: "P41",
          RowNumber: 41,
          RowLabel: "P",
          Seats: [
            {
              Cabin: 2,
              SeatNumber: "41A",
              Row: 41,
              RowLabel: "P41",
              Col: 0,
              ColName: "A",
              Type: 11,
              Location: 24,
              Text: "*P ",
              Price: 0.0
            },
            {
              Cabin: 2,
              SeatNumber: "41B",
              Row: 41,
              RowLabel: "P41",
              Col: 1,
              ColName: "B",
              Type: 9,
              Location: 5,
              Text: "   ",
              Price: 0.0
            },
            {
              Cabin: 2,
              SeatNumber: "41C",
              Row: 41,
              RowLabel: "P41",
              Col: 2,
              ColName: "C",
              Type: 11,
              Location: 24,
              Text: "*P ",
              Price: 0.0
            },
            {
              Cabin: 2,
              SeatNumber: "41 ",
              Row: 41,
              RowLabel: "P41",
              Col: 3,
              ColName: " ",
              Type: 9,
              Location: 5,
              Text: "   ",
              Price: 0.0
            },
            {
              Cabin: 2,
              SeatNumber: "41D",
              Row: 41,
              RowLabel: "P41",
              Col: 4,
              ColName: "D",
              Type: 9,
              Location: 24,
              Text: "*GH",
              Price: 0.0
            },
            {
              Cabin: 2,
              SeatNumber: "41E",
              Row: 41,
              RowLabel: "P41",
              Col: 5,
              ColName: "E",
              Type: 1,
              Location: 24,
              Text: ".G ",
              Price: 0.0
            },
            {
              Cabin: 2,
              SeatNumber: "41G",
              Row: 41,
              RowLabel: "P41",
              Col: 6,
              ColName: "G",
              Type: 1,
              Location: 24,
              Text: ".GH",
              Price: 0.0
            },
            {
              Cabin: 2,
              SeatNumber: "41H",
              Row: 41,
              RowLabel: "P41",
              Col: 7,
              ColName: "H",
              Type: 9,
              Location: 24,
              Text: "*GH",
              Price: 0.0
            },
            {
              Cabin: 2,
              SeatNumber: "41 ",
              Row: 41,
              RowLabel: "P41",
              Col: 8,
              ColName: " ",
              Type: 9,
              Location: 5,
              Text: "   ",
              Price: 0.0
            },
            {
              Cabin: 2,
              SeatNumber: "41J",
              Row: 41,
              RowLabel: "P41",
              Col: 9,
              ColName: "J",
              Type: 11,
              Location: 24,
              Text: "*PH",
              Price: 0.0
            },
            {
              Cabin: 2,
              SeatNumber: "41K",
              Row: 41,
              RowLabel: "P41",
              Col: 10,
              ColName: "K",
              Type: 9,
              Location: 5,
              Text: "   ",
              Price: 0.0
            },
            {
              Cabin: 2,
              SeatNumber: "41L",
              Row: 41,
              RowLabel: "P41",
              Col: 11,
              ColName: "L",
              Type: 11,
              Location: 24,
              Text: "*P ",
              Price: 0.0
            }
          ]
        },
        {
          Name: "P42",
          RowNumber: 42,
          RowLabel: "P",
          Seats: [
            {
              Cabin: 2,
              SeatNumber: "42A",
              Row: 42,
              RowLabel: "P42",
              Col: 0,
              ColName: "A",
              Type: 11,
              Location: 24,
              Text: "*P ",
              Price: 0.0
            },
            {
              Cabin: 2,
              SeatNumber: "42B",
              Row: 42,
              RowLabel: "P42",
              Col: 1,
              ColName: "B",
              Type: 9,
              Location: 5,
              Text: "   ",
              Price: 0.0
            },
            {
              Cabin: 2,
              SeatNumber: "42C",
              Row: 42,
              RowLabel: "P42",
              Col: 2,
              ColName: "C",
              Type: 11,
              Location: 24,
              Text: "*P ",
              Price: 0.0
            },
            {
              Cabin: 2,
              SeatNumber: "42 ",
              Row: 42,
              RowLabel: "P42",
              Col: 3,
              ColName: " ",
              Type: 9,
              Location: 5,
              Text: "   ",
              Price: 0.0
            },
            {
              Cabin: 2,
              SeatNumber: "42D",
              Row: 42,
              RowLabel: "P42",
              Col: 4,
              ColName: "D",
              Type: 9,
              Location: 24,
              Text: "*GH",
              Price: 0.0
            },
            {
              Cabin: 2,
              SeatNumber: "42E",
              Row: 42,
              RowLabel: "P42",
              Col: 5,
              ColName: "E",
              Type: 1,
              Location: 24,
              Text: ".G ",
              Price: 0.0
            },
            {
              Cabin: 2,
              SeatNumber: "42G",
              Row: 42,
              RowLabel: "P42",
              Col: 6,
              ColName: "G",
              Type: 1,
              Location: 24,
              Text: ".GH",
              Price: 0.0
            },
            {
              Cabin: 2,
              SeatNumber: "42H",
              Row: 42,
              RowLabel: "P42",
              Col: 7,
              ColName: "H",
              Type: 9,
              Location: 24,
              Text: "*GH",
              Price: 0.0
            },
            {
              Cabin: 2,
              SeatNumber: "42 ",
              Row: 42,
              RowLabel: "P42",
              Col: 8,
              ColName: " ",
              Type: 9,
              Location: 5,
              Text: "   ",
              Price: 0.0
            },
            {
              Cabin: 2,
              SeatNumber: "42J",
              Row: 42,
              RowLabel: "P42",
              Col: 9,
              ColName: "J",
              Type: 11,
              Location: 24,
              Text: "*PH",
              Price: 0.0
            },
            {
              Cabin: 2,
              SeatNumber: "42K",
              Row: 42,
              RowLabel: "P42",
              Col: 10,
              ColName: "K",
              Type: 9,
              Location: 5,
              Text: "   ",
              Price: 0.0
            },
            {
              Cabin: 2,
              SeatNumber: "42L",
              Row: 42,
              RowLabel: "P42",
              Col: 11,
              ColName: "L",
              Type: 11,
              Location: 24,
              Text: "*P ",
              Price: 0.0
            }
          ]
        },
        {
          Name: "P43",
          RowNumber: 43,
          RowLabel: "P",
          Seats: [
            {
              Cabin: 2,
              SeatNumber: "43A",
              Row: 43,
              RowLabel: "P43",
              Col: 0,
              ColName: "A",
              Type: 11,
              Location: 24,
              Text: "*P ",
              Price: 0.0
            },
            {
              Cabin: 2,
              SeatNumber: "43B",
              Row: 43,
              RowLabel: "P43",
              Col: 1,
              ColName: "B",
              Type: 9,
              Location: 5,
              Text: "   ",
              Price: 0.0
            },
            {
              Cabin: 2,
              SeatNumber: "43C",
              Row: 43,
              RowLabel: "P43",
              Col: 2,
              ColName: "C",
              Type: 11,
              Location: 24,
              Text: "*P ",
              Price: 0.0
            },
            {
              Cabin: 2,
              SeatNumber: "43 ",
              Row: 43,
              RowLabel: "P43",
              Col: 3,
              ColName: " ",
              Type: 9,
              Location: 5,
              Text: "   ",
              Price: 0.0
            },
            {
              Cabin: 2,
              SeatNumber: "43D",
              Row: 43,
              RowLabel: "P43",
              Col: 4,
              ColName: "D",
              Type: 21,
              Location: 24,
              Text: "ZGH",
              Price: 0.0
            },
            {
              Cabin: 2,
              SeatNumber: "43E",
              Row: 43,
              RowLabel: "P43",
              Col: 5,
              ColName: "E",
              Type: 21,
              Location: 24,
              Text: "ZG ",
              Price: 0.0
            },
            {
              Cabin: 2,
              SeatNumber: "43G",
              Row: 43,
              RowLabel: "P43",
              Col: 6,
              ColName: "G",
              Type: 21,
              Location: 24,
              Text: "ZGH",
              Price: 0.0
            },
            {
              Cabin: 2,
              SeatNumber: "43H",
              Row: 43,
              RowLabel: "P43",
              Col: 7,
              ColName: "H",
              Type: 21,
              Location: 24,
              Text: "ZGH",
              Price: 0.0
            },
            {
              Cabin: 2,
              SeatNumber: "43 ",
              Row: 43,
              RowLabel: "P43",
              Col: 8,
              ColName: " ",
              Type: 9,
              Location: 5,
              Text: "   ",
              Price: 0.0
            },
            {
              Cabin: 2,
              SeatNumber: "43J",
              Row: 43,
              RowLabel: "P43",
              Col: 9,
              ColName: "J",
              Type: 11,
              Location: 24,
              Text: "*PH",
              Price: 0.0
            },
            {
              Cabin: 2,
              SeatNumber: "43K",
              Row: 43,
              RowLabel: "P43",
              Col: 10,
              ColName: "K",
              Type: 9,
              Location: 5,
              Text: "   ",
              Price: 0.0
            },
            {
              Cabin: 2,
              SeatNumber: "43L",
              Row: 43,
              RowLabel: "P43",
              Col: 11,
              ColName: "L",
              Type: 11,
              Location: 24,
              Text: "*P ",
              Price: 0.0
            }
          ]
        },
        {
          Name: "44",
          RowNumber: 44,
          RowLabel: "",
          Seats: [
            {
              Cabin: 2,
              SeatNumber: "44A",
              Row: 44,
              RowLabel: "44",
              Col: 0,
              ColName: "A",
              Type: 2,
              Location: 24,
              Text: "LAV",
              Price: 0.0
            },
            {
              Cabin: 2,
              SeatNumber: "44B",
              Row: 44,
              RowLabel: "44",
              Col: 1,
              ColName: "B",
              Type: 9,
              Location: 5,
              Text: "   ",
              Price: 0.0
            },
            {
              Cabin: 2,
              SeatNumber: "44C",
              Row: 44,
              RowLabel: "44",
              Col: 2,
              ColName: "C",
              Type: 9,
              Location: 5,
              Text: "   ",
              Price: 0.0
            },
            {
              Cabin: 2,
              SeatNumber: "44 ",
              Row: 44,
              RowLabel: "44",
              Col: 3,
              ColName: " ",
              Type: 9,
              Location: 5,
              Text: "   ",
              Price: 0.0
            },
            {
              Cabin: 2,
              SeatNumber: "44D",
              Row: 44,
              RowLabel: "44",
              Col: 4,
              ColName: "D",
              Type: 21,
              Location: 24,
              Text: "ZGH",
              Price: 0.0
            },
            {
              Cabin: 2,
              SeatNumber: "44E",
              Row: 44,
              RowLabel: "44",
              Col: 5,
              ColName: "E",
              Type: 21,
              Location: 24,
              Text: "ZG ",
              Price: 0.0
            },
            {
              Cabin: 2,
              SeatNumber: "44G",
              Row: 44,
              RowLabel: "44",
              Col: 6,
              ColName: "G",
              Type: 21,
              Location: 24,
              Text: "ZG ",
              Price: 0.0
            },
            {
              Cabin: 2,
              SeatNumber: "44H",
              Row: 44,
              RowLabel: "44",
              Col: 7,
              ColName: "H",
              Type: 21,
              Location: 24,
              Text: "ZGH",
              Price: 0.0
            },
            {
              Cabin: 2,
              SeatNumber: "44 ",
              Row: 44,
              RowLabel: "44",
              Col: 8,
              ColName: " ",
              Type: 9,
              Location: 5,
              Text: "   ",
              Price: 0.0
            },
            {
              Cabin: 2,
              SeatNumber: "44J",
              Row: 44,
              RowLabel: "44",
              Col: 9,
              ColName: "J",
              Type: 9,
              Location: 5,
              Text: "   ",
              Price: 0.0
            },
            {
              Cabin: 2,
              SeatNumber: "44K",
              Row: 44,
              RowLabel: "44",
              Col: 10,
              ColName: "K",
              Type: 9,
              Location: 5,
              Text: "   ",
              Price: 0.0
            },
            {
              Cabin: 2,
              SeatNumber: "44L",
              Row: 44,
              RowLabel: "44",
              Col: 11,
              ColName: "L",
              Type: 2,
              Location: 24,
              Text: "LAV",
              Price: 0.0
            }
          ]
        }
      ]
    };

    this.state = { seatMap: [seatMock] };

    this.handleSeatClick = function(event, seat) {};

    this.handleSeatDrag = function(event, seat) {};

    this.handleSeatDrop = function(event, seat) {};

    var flight = {
      flightNumber: 51,
      DepartTime: "23FEB",
      depart: "LHR",
      arrive: "DFW"
    };
  }

  componentWillUnmount() {
    //   type: "Unsubscribe",
    //   message: this.stateActor
    // });
    // this.stateActor.kill();
  }

  renderSeat(seat) {
    if (seat.Location === SeatType.AISLE) {
      return <div style={{ width: "30px" }} />;
    } else {
      var color = "black";
      var backStyle = {};
      switch (seat.Type) {
        case SeatType.BLOCKED:
          backStyle = { backgroundColor: "coral" };
          break;
        case SeatType.LAV:
        case SeatType.DOR:
        case SeatType.GAL:
          backStyle = { backgroundColor: "grey" };
          break;
        case SeatType.MCE:
          backStyle = { backgroundColor: "green" };
          break;
        case SeatType.PREFERRED:
        case SeatType.PREMIUM:
          backStyle = { backgroundColor: "DarkGreen" };
          break;
        default:
          break;
      }

      return (
        <div className="card" style={{ width: "40px" }}>
          <div className="card-body" style={backStyle}>
            <p className="card-text">{seat.name}</p>
          </div>
        </div>
      );
    }
  }

  renderRow(row) {
    return (
      <tr>
        <td>{row.RowNumber}</td>
        {row.Seats.map(seat => {
          return <td>{this.renderSeat(seat)}</td>;
        })}
        <td>{row.RowNumber}</td>
      </tr>
    );
  }

  renderCabin(cabin) {
    var rows = cabin.Rows;

    return (
      <table style={{ width: "300px" }}>
        <tbody>
          {rows.map(row => {
            return this.renderRow(row);
          })}
        </tbody>
      </table>
    );
  }

  render() {
    return (
      <div style={{ width: "300px" }}>
        {" "}
        {this.state.seatMap.map(cabin => this.renderCabin(cabin))}
      </div>
    );
  }
}
