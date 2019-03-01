import React, { Component } from "react";
import { Card } from "react-bootstrap";
import {findDOMNode} from 'react-dom'
import ReactTooltip from 'react-tooltip'
import Popup from "react-popup";

var SeatType = {
  ASSIGNED: 1,
  LAV: 2,
  GAL: 4,
  DOR: 6,
  AISLE: 5,
  AVAILABLE: 7,
  NOTBOARDED: 8,
  FREE: 9,
  PREFERRED: 10,
  BOARDED: 11,
  EXIT: 12,
  BROKEN: 13,
  UNUSABLE: 14,
  INDIF: 15,
  WING: 16,
  ADVANCED: 17,
  HELD: 18,
  BULKHEAD: 19,
  THRU: 20,
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
          RowNumber: 1,
          RowLabel: "W",
          Seats: [
            {
              Cabin: 2,
              SeatNumber: "1A",
              Row: 1,
              RowLabel: "W20",
              Col: 0,
              ColName: "A",
              Type: 21,
              Location: 24,
              Text: "ZL ",
              Price: 0.0,               PNR: "",               FirstName: "",     LastName: ""             
            },
            {
              Cabin: 2,
              SeatNumber: "1B",
              Row: 1,
              RowLabel: "W20",
              Col: 1,
              ColName: "B",
              Type: 7,
              Location: 24,
              Text: "ZL  ",
              Price: 0.0,               PNR: "",               FirstName: "",     LastName: ""             
            },
            {
              Cabin: 2,
              SeatNumber: "1C",
              Row: 1,
              RowLabel: "W20",
              Col: 2,
              ColName: "C",
              Type: 21,
              Location: 24,
              Text: "ZL ",
              Price: 0.0,               PNR: "",               FirstName: "",       
                      LastName: ""             
            },
            {
              Cabin: 2,
              SeatNumber: "1 ",
              Row: 1,
              RowLabel: "W20",
              Col: 3,
              ColName: " ",
              Type: 7,
              Location: 5,
              Text: "   ",
              Price: 0.0,               PNR: "",               FirstName: "",     LastName: ""             
            },
            {
              Cabin: 2,
              SeatNumber: "1D",
              Row: 1,
              RowLabel: "W20",
              Col: 4,
              ColName: "D",
              Type: 7,
              Location: 24,
              Text: "*L ",
              Price: 0.0,               PNR: "",               FirstName: "",     LastName: ""             
            },
            {
              Cabin: 2,
              SeatNumber: "1E",
              Row: 1,
              RowLabel: "W20",
              Col: 5,
              ColName: "E",
              Type: 20,
              Location: 24,
              Text: "*L ",
              Price: 0.0,               PNR: "XYVDFR",               FirstName: "First",               LastName: "last"             
            },
            {
              Cabin: 2,
              SeatNumber: "1G",
              Row: 1,
              RowLabel: "W20",
              Col: 6,
              ColName: "G",
              Type: 7,
              Location: 24,
              Text: "*L ",
              Price: 0.0,               PNR: "",               FirstName: "",     LastName: ""             
            },
            {
              Cabin: 2,
              SeatNumber: "1H",
              Row: 1,
              RowLabel: "W20",
              Col: 7,
              ColName: "H",
              Type: 7,
              Location: 24,
              Text: "*L ",
              Price: 0.0,               PNR: "",               FirstName: "",     LastName: ""             
            },
            {
              Cabin: 2,
              SeatNumber: "1 ",
              Row: 1,
              RowLabel: "W20",
              Col: 8,
              ColName: " ",
              Type: 7,
              Location: 5,
              Text: "   ",
              Price: 0.0,               PNR: "",               FirstName: "",     LastName: ""             
            },
            {
              Cabin: 2,
              SeatNumber: "1J",
              Row: 1,
              RowLabel: "W20",
              Col: 9,
              ColName: "J",
              Type: 7,
              Location: 24,
              Text: "*L ",
              Price: 0.0,               PNR: "",               FirstName: "",     LastName: ""             
            },
            {
              Cabin: 2,
              SeatNumber: "1K",
              Row: 1,
              RowLabel: "W20",
              Col: 10,
              ColName: "K",
              Type: 7,
              Location: 24,
              Text: "   ",
              Price: 0.0,               PNR: "",               FirstName: "",     LastName: ""             
            },
            {
              Cabin: 2,
              SeatNumber: "1L",
              Row: 1,
              RowLabel: "W20",
              Col: 11,
              ColName: "L",
              Type: 7,
              Location: 24,
              Text: "*L ",
              Price: 0.0,               PNR: "",               FirstName: "",     LastName: ""             
            }
          ]
        },
        {
          Name: "W21",
          RowNumber: 2,
          RowLabel: "W",
          Seats: [
            {
              Cabin: 2,
              SeatNumber: "2A",
              Row: 2,
              RowLabel: "W21",
              Col: 0,
              ColName: "A",
              Type: 11,
              Location: 24,
              Text: "*P ",
              Price: 0.0,               PNR: "XYVDFR",               FirstName: "First",               LastName: "last"             
            },
            {
              Cabin: 2,
              SeatNumber: "2B",
              Row: 2,
              RowLabel: "W21",
              Col: 1,
              ColName: "B",
              Type: 8,
              Location: 24,
              Text: "   ",
              Price: 0.0,               PNR: "XYVDFR",               FirstName: "First",               LastName: "last"             
            },
            {
              Cabin: 2,
              SeatNumber: "2C",
              Row: 2,
              RowLabel: "W21",
              Col: 2,
              ColName: "C",
              Type: 11,
              Location: 24,
              Text: "*PH",
              Price: 0.0,               PNR: "XYVDFR",               FirstName: "First",               LastName: "last"             
            },
            {
              Cabin: 2,
              SeatNumber: "2 ",
              Row: 2,
              RowLabel: "W21",
              Col: 3,
              ColName: " ",
              Type: 7,
              Location: 5,
              Text: "   ",
              Price: 0.0,               PNR: "",               FirstName: "",     LastName: ""             
            },
            {
              Cabin: 2,
              SeatNumber: "2D",
              Row: 2,
              RowLabel: "W21",
              Col: 4,
              ColName: "D",
              Type: 11,
              Location: 24,
              Text: "*PH",
              Price: 0.0,               PNR: "XYVDFR",               FirstName: "First",               LastName: "last"             
            },
            {
              Cabin: 2,
              SeatNumber: "2E",
              Row: 2,
              RowLabel: "W21",
              Col: 5,
              ColName: "E",
              Type: 11,
              Location: 24,
              Text: "*P ",
              Price: 0.0,               PNR: "XYVDFR",               FirstName: "First",               LastName: "last"             
            },
            {
              Cabin: 2,
              SeatNumber: "2G",
              Row: 2,
              RowLabel: "W21",
              Col: 6,
              ColName: "G",
              Type: 11,
              Location: 24,
              Text: "*P ",
              Price: 0.0,               PNR: "XYVDFR",               FirstName: "First",               LastName: "last"             
            },
            {
              Cabin: 2,
              SeatNumber: "2H",
              Row: 2,
              RowLabel: "W21",
              Col: 7,
              ColName: "H",
              Type: 11,
              Location: 24,
              Text: "*PH",
              Price: 0.0,               PNR: "XYVDFR",               FirstName: "First",               LastName: "last"             
            },
            {
              Cabin: 2,
              SeatNumber: "2 ",
              Row: 2,
              RowLabel: "W21",
              Col: 8,
              ColName: " ",
              Type: 7,
              Location: 5,
              Text: "   ",
              Price: 0.0,               PNR: "",               FirstName: "",     LastName: ""             
            },
            {
              Cabin: 2,
              SeatNumber: "2J",
              Row: 2,
              RowLabel: "W21",
              Col: 9,
              ColName: "J",
              Type: 11,
              Location: 24,
              Text: "*PH",
              Price: 0.0,               PNR: "XYVDFR",               FirstName: "First",               LastName: "last"             
            },
            {
              Cabin: 2,
              SeatNumber: "2K",
              Row: 2,
              RowLabel: "W21",
              Col: 10,
              ColName: "K",
              Type: 8,
              Location: 24,
              Text: "   ",
              Price: 0.0,               PNR: "XYVDFR",               FirstName: "First",               LastName: "last"             
            },
            {
              Cabin: 2,
              SeatNumber: "2L",
              Row: 2,
              RowLabel: "W21",
              Col: 11,
              ColName: "L",
              Type: 11,
              Location: 24,
              Text: "*P ",
              Price: 0.0,               PNR: "XYVDFR",               FirstName: "First",               LastName: "last"             
            }
          ]
        },
        {
          Name: "W22",
          RowNumber: 3,
          RowLabel: "W",
          Seats: [
            {
              Cabin: 2,
              SeatNumber: "3A",
              Row: 3,
              RowLabel: "W22",
              Col: 0,
              ColName: "A",
              Type: 11,
              Location: 24,
              Text: "*P ",
              Price: 0.0,               PNR: "XYVDFR",               FirstName: "First",               LastName: "last"             
            },
            {
              Cabin: 2,
              SeatNumber: "3B",
              Row: 3,
              RowLabel: "W22",
              Col: 1,
              ColName: "B",
              Type: 11,
              Location: 24,
              Text: "*P ",
              Price: 0.0,               PNR: "XYVDFR",               FirstName: "First",               LastName: "last"             
            },
            {
              Cabin: 2,
              SeatNumber: "3C",
              Row: 3,
              RowLabel: "W22",
              Col: 2,
              ColName: "C",
              Type: 20,
              Location: 24,
              Text: "*PH",
              Price: 0.0,               PNR: "XYVDFR",               FirstName: "First",               LastName: "last"             
            },
            {
              Cabin: 2,
              SeatNumber: "3 ",
              Row: 3,
              RowLabel: "W22",
              Col: 3,
              ColName: " ",
              Type: 7,
              Location: 5,
              Text: "   ",
              Price: 0.0,               PNR: "",               FirstName: "",     LastName: ""             
            },
            {
              Cabin: 2,
              SeatNumber: "3D",
              Row: 3,
              RowLabel: "W22",
              Col: 4,
              ColName: "D",
              Type: 11,
              Location: 24,
              Text: "*PH",
              Price: 0.0,               PNR: "XYVDFR",               FirstName: "First",               LastName: "last"             
            },
            {
              Cabin: 2,
              SeatNumber: "3E",
              Row: 3,
              RowLabel: "W22",
              Col: 5,
              ColName: "E",
              Type: 11,
              Location: 24,
              Text: "*P ",
              Price: 0.0,               PNR: "XYVDFR",               FirstName: "First",               LastName: "last"             
            },
            {
              Cabin: 2,
              SeatNumber: "3G",
              Row: 3,
              RowLabel: "W22",
              Col: 6,
              ColName: "G",
              Type: 11,
              Location: 24,
              Text: "*P ",
              Price: 0.0,               PNR: "XYVDFR",               FirstName: "First",               LastName: "last"             
            },
            {
              Cabin: 2,
              SeatNumber: "3H",
              Row: 3,
              RowLabel: "W22",
              Col: 7,
              ColName: "H",
              Type: 11,
              Location: 24,
              Text: "*PH",
              Price: 0.0,               PNR: "XYVDFR",               FirstName: "First",               LastName: "last"             
            },
            {
              Cabin: 2,
              SeatNumber: "3 ",
              Row: 3,
              RowLabel: "W22",
              Col: 8,
              ColName: " ",
              Type: 7,
              Location: 5,
              Text: "   ",
              Price: 0.0,               PNR: "",               FirstName: "",     LastName: ""             
            },
            {
              Cabin: 2,
              SeatNumber: "3J",
              Row: 3,
              RowLabel: "W22",
              Col: 9,
              ColName: "J",
              Type: 11,
              Location: 24,
              Text: "*PH",
              Price: 0.0,               PNR: "XYVDFR",               FirstName: "First",               LastName: "last"             
            },
            {
              Cabin: 2,
              SeatNumber: "3K",
              Row: 3,
              RowLabel: "W22",
              Col: 10,
              ColName: "K",
              Type: 11,
              Location: 24,
              Text: "*P ",
              Price: 0.0,               PNR: "XYVDFR",               FirstName: "First",               LastName: "last"             
            },
            {
              Cabin: 2,
              SeatNumber: "3L",
              Row: 3,
              RowLabel: "W22",
              Col: 11,
              ColName: "L",
              Type: 11,
              Location: 24,
              Text: "*P ",
              Price: 0.0,               PNR: "XYVDFR",               FirstName: "First",               LastName: "last"             
            }
          ]
        },
        {
          Name: "W23",
          RowNumber: 4,
          RowLabel: "W",
          Seats: [
            {
              Cabin: 2,
              SeatNumber: "4A",
              Row: 4,
              RowLabel: "W23",
              Col: 0,
              ColName: "A",
              Type: 11,
              Location: 24,
              Text: "*P ",
              Price: 0.0,               PNR: "XYVDFR",               FirstName: "First",               LastName: "last"             
            },
            {
              Cabin: 2,
              SeatNumber: "4B",
              Row: 4,
              RowLabel: "W23",
              Col: 1,
              ColName: "B",
              Type: 7,
              Location: 24,
              Text: "*G ",
              Price: 0.0,               PNR: "",               FirstName: "",     LastName: ""             
            },
            {
              Cabin: 2,
              SeatNumber: "4C",
              Row: 4,
              RowLabel: "W23",
              Col: 2,
              ColName: "C",
              Type: 11,
              Location: 24,
              Text: "*PH",
              Price: 0.0,               PNR: "XYVDFR",               FirstName: "First",               LastName: "last"             
            },
            {
              Cabin: 2,
              SeatNumber: "4 ",
              Row: 4,
              RowLabel: "W23",
              Col: 3,
              ColName: " ",
              Type: 7,
              Location: 5,
              Text: "   ",
              Price: 0.0,               PNR: "",               FirstName: "",     LastName: ""             
            },
            {
              Cabin: 2,
              SeatNumber: "4D",
              Row: 4,
              RowLabel: "W23",
              Col: 4,
              ColName: "D",
              Type: 11,
              Location: 24,
              Text: "*PH",
              Price: 0.0,               PNR: "XYVDFR",               FirstName: "First",               LastName: "last"             
            },
            {
              Cabin: 2,
              SeatNumber: "4E",
              Row: 4,
              RowLabel: "W23",
              Col: 5,
              ColName: "E",
              Type: 7,
              Location: 24,
              Text: "*G ",
              Price: 0.0,               PNR: "",               FirstName: "",     LastName: ""             
            },
            {
              Cabin: 2,
              SeatNumber: "4G",
              Row: 4,
              RowLabel: "W23",
              Col: 6,
              ColName: "G",
              Type: 7,
              Location: 24,
              Text: "*G ",
              Price: 0.0,               PNR: "",               FirstName: "",     LastName: ""             
            },
            {
              Cabin: 2,
              SeatNumber: "4H",
              Row: 4,
              RowLabel: "W23",
              Col: 7,
              ColName: "H",
              Type: 11,
              Location: 24,
              Text: "*PH",
              Price: 0.0,               PNR: "XYVDFR",               FirstName: "First",               LastName: "last"             
            },
            {
              Cabin: 2,
              SeatNumber: "4 ",
              Row: 4,
              RowLabel: "W23",
              Col: 8,
              ColName: " ",
              Type: 7,
              Location: 5,
              Text: "   ",
              Price: 0.0,               PNR: "",               FirstName: "",     LastName: ""             
            },
            {
              Cabin: 2,
              SeatNumber: "4J",
              Row: 4,
              RowLabel: "W23",
              Col: 9,
              ColName: "J",
              Type: 11,
              Location: 24,
              Text: "*PH",
              Price: 0.0,               PNR: "XYVDFR",               FirstName: "First",               LastName: "last"             
            },
            {
              Cabin: 2,
              SeatNumber: "4K",
              Row: 4,
              RowLabel: "W23",
              Col: 10,
              ColName: "K",
              Type: 7,
              Location: 24,
              Text: "*G ",
              Price: 0.0,               PNR: "",               FirstName: "",     LastName: ""             
            },
            {
              Cabin: 2,
              SeatNumber: "4L",
              Row: 4,
              RowLabel: "W23",
              Col: 11,
              ColName: "L",
              Type: 11,
              Location: 24,
              Text: "*P ",
              Price: 0.0,               PNR: "XYVDFR",               FirstName: "First",               LastName: "last"             
            }
          ]
        },
        {
          Name: "W24",
          RowNumber: 5,
          RowLabel: "W",
          Seats: [
            {
              Cabin: 2,
              SeatNumber: "5A",
              Row: 5,
              RowLabel: "W24",
              Col: 0,
              ColName: "A",
              Type: 11,
              Location: 24,
              Text: "*P ",
              Price: 0.0,               PNR: "XYVDFR",               FirstName: "First",               LastName: "last"             
            },
            {
              Cabin: 2,
              SeatNumber: "5B",
              Row: 5,
              RowLabel: "W24",
              Col: 1,
              ColName: "B",
              Type: 7,
              Location: 24,
              Text: "*G ",
              Price: 0.0,               PNR: "",               FirstName: "",     LastName: ""             
            },
            {
              Cabin: 2,
              SeatNumber: "5C",
              Row: 5,
              RowLabel: "W24",
              Col: 2,
              ColName: "C",
              Type: 11,
              Location: 24,
              Text: "*PH",
              Price: 0.0,               PNR: "XYVDFR",               FirstName: "First",               LastName: "last"             
            },
            {
              Cabin: 2,
              SeatNumber: "5 ",
              Row: 5,
              RowLabel: "W24",
              Col: 3,
              ColName: " ",
              Type: 7,
              Location: 5,
              Text: "   ",
              Price: 0.0,               PNR: "",               FirstName: "",     LastName: ""             
            },
            {
              Cabin: 2,
              SeatNumber: "5D",
              Row: 5,
              RowLabel: "W24",
              Col: 4,
              ColName: "D",
              Type: 11,
              Location: 24,
              Text: "*PH",
              Price: 0.0,               PNR: "XYVDFR",               FirstName: "First",               LastName: "last"             
            },
            {
              Cabin: 2,
              SeatNumber: "5E",
              Row: 5,
              RowLabel: "W24",
              Col: 5,
              ColName: "E",
              Type: 7,
              Location: 24,
              Text: "*G ",
              Price: 0.0,               PNR: "",               FirstName: "",     LastName: ""             
            },
            {
              Cabin: 2,
              SeatNumber: "5G",
              Row: 5,
              RowLabel: "W24",
              Col: 6,
              ColName: "G",
              Type: 7,
              Location: 24,
              Text: "*G ",
              Price: 0.0,               PNR: "",               FirstName: "",     LastName: ""             
            },
            {
              Cabin: 2,
              SeatNumber: "5H",
              Row: 5,
              RowLabel: "W24",
              Col: 7,
              ColName: "H",
              Type: 11,
              Location: 24,
              Text: "*PH",
              Price: 0.0,               PNR: "XYVDFR",               FirstName: "First",               LastName: "last"             
            },
            {
              Cabin: 2,
              SeatNumber: "5 ",
              Row: 5,
              RowLabel: "W24",
              Col: 8,
              ColName: " ",
              Type: 7,
              Location: 5,
              Text: "   ",
              Price: 0.0,               PNR: "",               FirstName: "",     LastName: ""             
            },
            {
              Cabin: 2,
              SeatNumber: "5J",
              Row: 5,
              RowLabel: "W24",
              Col: 9,
              ColName: "J",
              Type: 11,
              Location: 24,
              Text: "*PH",
              Price: 0.0,               PNR: "XYVDFR",               FirstName: "First",               LastName: "last"             
            },
            {
              Cabin: 2,
              SeatNumber: "5K",
              Row: 5,
              RowLabel: "W24",
              Col: 10,
              ColName: "K",
              Type: 7,
              Location: 24,
              Text: "*G ",
              Price: 0.0,               PNR: "",               FirstName: "",     LastName: ""             
            },
            {
              Cabin: 2,
              SeatNumber: "5L",
              Row: 5,
              RowLabel: "W24",
              Col: 11,
              ColName: "L",
              Type: 11,
              Location: 24,
              Text: "*P ",
              Price: 0.0,               PNR: "XYVDFR",               FirstName: "First",               LastName: "last"             
            }
          ]
        },
        {
          Name: "W25",
          RowNumber: 6,
          RowLabel: "W",
          Seats: [
            {
              Cabin: 2,
              SeatNumber: "6A",
              Row: 6,
              RowLabel: "W25",
              Col: 0,
              ColName: "A",
              Type: 7,
              Location: 24,
              Text: "*G ",
              Price: 0.0,               PNR: "",               FirstName: "",     LastName: ""             
            },
            {
              Cabin: 2,
              SeatNumber: "6B",
              Row: 6,
              RowLabel: "W25",
              Col: 1,
              ColName: "B",
              Type: 7,
              Location: 24,
              Text: "*G ",
              Price: 0.0,               PNR: "",               FirstName: "",     LastName: ""             
            },
            {
              Cabin: 2,
              SeatNumber: "6C",
              Row: 6,
              RowLabel: "W25",
              Col: 2,
              ColName: "C",
              Type: 7,
              Location: 24,
              Text: "*GH",
              Price: 0.0,               PNR: "",               FirstName: "",     LastName: ""             
            },
            {
              Cabin: 2,
              SeatNumber: "6 ",
              Row: 6,
              RowLabel: "W25",
              Col: 3,
              ColName: " ",
              Type: 7,
              Location: 5,
              Text: "   ",
              Price: 0.0,               PNR: "",               FirstName: "",     LastName: ""             
            },
            {
              Cabin: 2,
              SeatNumber: "6D",
              Row: 6,
              RowLabel: "W25",
              Col: 4,
              ColName: "D",
              Type: 7,
              Location: 24,
              Text: "*GH",
              Price: 0.0,               PNR: "",               FirstName: "",     LastName: ""             
            },
            {
              Cabin: 2,
              SeatNumber: "6E",
              Row: 6,
              RowLabel: "W25",
              Col: 5,
              ColName: "E",
              Type: 7,
              Location: 24,
              Text: "*G ",
              Price: 0.0,               PNR: "",               FirstName: "",     LastName: ""             
            },
            {
              Cabin: 2,
              SeatNumber: "6G",
              Row: 6,
              RowLabel: "W25",
              Col: 6,
              ColName: "G",
              Type: 7,
              Location: 24,
              Text: "*G ",
              Price: 0.0,               PNR: "",               FirstName: "",     LastName: ""             
            },
            {
              Cabin: 2,
              SeatNumber: "6H",
              Row: 6,
              RowLabel: "W25",
              Col: 7,
              ColName: "H",
              Type: 7,
              Location: 24,
              Text: "*GH",
              Price: 0.0,               PNR: "",               FirstName: "",     LastName: ""             
            },
            {
              Cabin: 2,
              SeatNumber: "6 ",
              Row: 6,
              RowLabel: "W25",
              Col: 8,
              ColName: " ",
              Type: 7,
              Location: 5,
              Text: "   ",
              Price: 0.0,               PNR: "",               FirstName: "",     LastName: ""             
            },
            {
              Cabin: 2,
              SeatNumber: "6J",
              Row: 6,
              RowLabel: "W25",
              Col: 9,
              ColName: "J",
              Type: 7,
              Location: 24,
              Text: "*GH",
              Price: 0.0,               PNR: "",               FirstName: "",     LastName: ""             
            },
            {
              Cabin: 2,
              SeatNumber: "6K",
              Row: 6,
              RowLabel: "W25",
              Col: 10,
              ColName: "K",
              Type: 7,
              Location: 24,
              Text: "*G ",
              Price: 0.0,               PNR: "",               FirstName: "",     LastName: ""             
            },
            {
              Cabin: 2,
              SeatNumber: "6L",
              Row: 6,
              RowLabel: "W25",
              Col: 11,
              ColName: "L",
              Type: 7,
              Location: 24,
              Text: "*G ",
              Price: 0.0,               PNR: "",               FirstName: "",     LastName: ""             
            }
          ]
        },
        {
          Name: "W26",
          RowNumber: 7,
          RowLabel: "W",
          Seats: [
            {
              Cabin: 2,
              SeatNumber: "7A",
              Row: 7,
              RowLabel: "W26",
              Col: 0,
              ColName: "A",
              Type: 7,
              Location: 24,
              Text: "*G ",
              Price: 0.0,               PNR: "",               FirstName: "",     LastName: ""             
            },
            {
              Cabin: 2,
              SeatNumber: "7B",
              Row: 7,
              RowLabel: "W26",
              Col: 1,
              ColName: "B",
              Type: 7,
              Location: 24,
              Text: "*G ",
              Price: 0.0,               PNR: "",               FirstName: "",     LastName: ""             
            },
            {
              Cabin: 2,
              SeatNumber: "7C",
              Row: 7,
              RowLabel: "W26",
              Col: 2,
              ColName: "C",
              Type: 7,
              Location: 24,
              Text: "*GH",
              Price: 0.0,               PNR: "",               FirstName: "",     LastName: ""             
            },
            {
              Cabin: 2,
              SeatNumber: "7 ",
              Row: 7,
              RowLabel: "W26",
              Col: 3,
              ColName: " ",
              Type: 7,
              Location: 5,
              Text: "   ",
              Price: 0.0,               PNR: "",               FirstName: "",     LastName: ""             
            },
            {
              Cabin: 2,
              SeatNumber: "7D",
              Row: 7,
              RowLabel: "W26",
              Col: 4,
              ColName: "D",
              Type: 7,
              Location: 24,
              Text: "*GH",
              Price: 0.0,               PNR: "",               FirstName: "",     LastName: ""             
            },
            {
              Cabin: 2,
              SeatNumber: "7E",
              Row: 7,
              RowLabel: "W26",
              Col: 5,
              ColName: "E",
              Type: 7,
              Location: 24,
              Text: "*G ",
              Price: 0.0,               PNR: "",               FirstName: "",     LastName: ""             
            },
            {
              Cabin: 2,
              SeatNumber: "7G",
              Row: 7,
              RowLabel: "W26",
              Col: 6,
              ColName: "G",
              Type: 7,
              Location: 24,
              Text: "*G ",
              Price: 0.0,               PNR: "",               FirstName: "",     LastName: ""             
            },
            {
              Cabin: 2,
              SeatNumber: "7H",
              Row: 7,
              RowLabel: "W26",
              Col: 7,
              ColName: "H",
              Type: 7,
              Location: 24,
              Text: "*GH",
              Price: 0.0,               PNR: "",               FirstName: "",     LastName: ""             
            },
            {
              Cabin: 2,
              SeatNumber: "7 ",
              Row: 7,
              RowLabel: "W26",
              Col: 8,
              ColName: " ",
              Type: 7,
              Location: 5,
              Text: "   ",
              Price: 0.0,               PNR: "",               FirstName: "",     LastName: ""             
            },
            {
              Cabin: 2,
              SeatNumber: "7J",
              Row: 7,
              RowLabel: "W26",
              Col: 9,
              ColName: "J",
              Type: 7,
              Location: 24,
              Text: "*GH",
              Price: 0.0,               PNR: "",               FirstName: "",     LastName: ""             
            },
            {
              Cabin: 2,
              SeatNumber: "7K",
              Row: 7,
              RowLabel: "W26",
              Col: 10,
              ColName: "K",
              Type: 7,
              Location: 24,
              Text: "*G ",
              Price: 0.0,               PNR: "",               FirstName: "",     LastName: ""             
            },
            {
              Cabin: 2,
              SeatNumber: "7L",
              Row: 7,
              RowLabel: "W26",
              Col: 11,
              ColName: "L",
              Type: 7,
              Location: 24,
              Text: "*G ",
              Price: 0.0,               PNR: "",               FirstName: "",     LastName: ""             
            }
          ]
        },
        {
          Name: "W27",
          RowNumber: 8,
          RowLabel: "W",
          Seats: [
            {
              Cabin: 2,
              SeatNumber: "8A",
              Row: 8,
              RowLabel: "W27",
              Col: 0,
              ColName: "A",
              Type: 7,
              Location: 24,
              Text: "*G ",
              Price: 0.0,               PNR: "",               FirstName: "",     LastName: ""             
            },
            {
              Cabin: 2,
              SeatNumber: "8B",
              Row: 8,
              RowLabel: "W27",
              Col: 1,
              ColName: "B",
              Type: 7,
              Location: 24,
              Text: "*G ",
              Price: 0.0,               PNR: "",               FirstName: "",     LastName: ""             
            },
            {
              Cabin: 2,
              SeatNumber: "8C",
              Row: 8,
              RowLabel: "W27",
              Col: 2,
              ColName: "C",
              Type: 7,
              Location: 24,
              Text: "*GH",
              Price: 0.0,               PNR: "",               FirstName: "",     LastName: ""             
            },
            {
              Cabin: 2,
              SeatNumber: "8 ",
              Row: 8,
              RowLabel: "W27",
              Col: 3,
              ColName: " ",
              Type: 7,
              Location: 5,
              Text: "   ",
              Price: 0.0,               PNR: "",               FirstName: "",     LastName: ""             
            },
            {
              Cabin: 2,
              SeatNumber: "8D",
              Row: 8,
              RowLabel: "W27",
              Col: 4,
              ColName: "D",
              Type: 7,
              Location: 24,
              Text: "*GH",
              Price: 0.0,               PNR: "",               FirstName: "",     LastName: ""             
            },
            {
              Cabin: 2,
              SeatNumber: "8E",
              Row: 8,
              RowLabel: "W27",
              Col: 5,
              ColName: "E",
              Type: 7,
              Location: 24,
              Text: "*G ",
              Price: 0.0,               PNR: "",               FirstName: "",     LastName: ""             
            },
            {
              Cabin: 2,
              SeatNumber: "8G",
              Row: 8,
              RowLabel: "W27",
              Col: 6,
              ColName: "G",
              Type: 7,
              Location: 24,
              Text: "*G ",
              Price: 0.0,               PNR: "",               FirstName: "",     LastName: ""             
            },
            {
              Cabin: 2,
              SeatNumber: "8H",
              Row: 8,
              RowLabel: "W27",
              Col: 7,
              ColName: "H",
              Type: 7,
              Location: 24,
              Text: "*GH",
              Price: 0.0,               PNR: "",               FirstName: "",     LastName: ""             
            },
            {
              Cabin: 2,
              SeatNumber: "8 ",
              Row: 8,
              RowLabel: "W27",
              Col: 8,
              ColName: " ",
              Type: 7,
              Location: 5,
              Text: "   ",
              Price: 0.0,               PNR: "",               FirstName: "",     LastName: ""             
            },
            {
              Cabin: 2,
              SeatNumber: "8J",
              Row: 8,
              RowLabel: "W27",
              Col: 9,
              ColName: "J",
              Type: 7,
              Location: 24,
              Text: "*GH",
              Price: 0.0,               PNR: "",               FirstName: "",     LastName: ""             
            },
            {
              Cabin: 2,
              SeatNumber: "8K",
              Row: 8,
              RowLabel: "W27",
              Col: 10,
              ColName: "K",
              Type: 7,
              Location: 24,
              Text: "*G ",
              Price: 0.0,               PNR: "",               FirstName: "",     LastName: ""             
            },
            {
              Cabin: 2,
              SeatNumber: "8L",
              Row: 8,
              RowLabel: "W27",
              Col: 11,
              ColName: "L",
              Type: 7,
              Location: 24,
              Text: "*G ",
              Price: 0.0,               PNR: "",               FirstName: "",     LastName: ""             
            }
          ]
        },
        {
          Name: "W28",
          RowNumber: 9,
          RowLabel: "W",
          Seats: [
            {
              Cabin: 2,
              SeatNumber: "9A",
              Row: 9,
              RowLabel: "W28",
              Col: 0,
              ColName: "A",
              Type: 7,
              Location: 24,
              Text: "*G ",
              Price: 0.0,               PNR: "",               FirstName: "",     LastName: ""             
            },
            {
              Cabin: 2,
              SeatNumber: "9B",
              Row: 9,
              RowLabel: "W28",
              Col: 1,
              ColName: "B",
              Type: 7,
              Location: 24,
              Text: "*G ",
              Price: 0.0,               PNR: "",               FirstName: "",     LastName: ""             
            },
            {
              Cabin: 2,
              SeatNumber: "9C",
              Row: 9,
              RowLabel: "W28",
              Col: 2,
              ColName: "C",
              Type: 7,
              Location: 24,
              Text: "*GH",
              Price: 0.0,               PNR: "",               FirstName: "",     LastName: ""             
            },
            {
              Cabin: 2,
              SeatNumber: "9 ",
              Row: 9,
              RowLabel: "W28",
              Col: 3,
              ColName: " ",
              Type: 7,
              Location: 5,
              Text: "   ",
              Price: 0.0,               PNR: "",               FirstName: "",     LastName: ""             
            },
            {
              Cabin: 2,
              SeatNumber: "9D",
              Row: 9,
              RowLabel: "W28",
              Col: 4,
              ColName: "D",
              Type: 7,
              Location: 24,
              Text: "*GH",
              Price: 0.0,               PNR: "",               FirstName: "",     LastName: ""             
            },
            {
              Cabin: 2,
              SeatNumber: "9E",
              Row: 9,
              RowLabel: "W28",
              Col: 5,
              ColName: "E",
              Type: 7,
              Location: 24,
              Text: "*G ",
              Price: 0.0,               PNR: "",               FirstName: "",     LastName: ""             
            },
            {
              Cabin: 2,
              SeatNumber: "9G",
              Row: 9,
              RowLabel: "W28",
              Col: 6,
              ColName: "G",
              Type: 7,
              Location: 24,
              Text: "*G ",
              Price: 0.0,               PNR: "",               FirstName: "",     LastName: ""             
            },
            {
              Cabin: 2,
              SeatNumber: "9H",
              Row: 9,
              RowLabel: "W28",
              Col: 7,
              ColName: "H",
              Type: 7,
              Location: 24,
              Text: "*GH",
              Price: 0.0,               PNR: "",               FirstName: "",     LastName: ""             
            },
            {
              Cabin: 2,
              SeatNumber: "9 ",
              Row: 9,
              RowLabel: "W28",
              Col: 8,
              ColName: " ",
              Type: 7,
              Location: 5,
              Text: "   ",
              Price: 0.0,               PNR: "",               FirstName: "",     LastName: ""             
            },
            {
              Cabin: 2,
              SeatNumber: "9J",
              Row: 9,
              RowLabel: "W28",
              Col: 9,
              ColName: "J",
              Type: 7,
              Location: 24,
              Text: "*GH",
              Price: 0.0,               PNR: "",               FirstName: "",     LastName: ""             
            },
            {
              Cabin: 2,
              SeatNumber: "9K",
              Row: 9,
              RowLabel: "W28",
              Col: 10,
              ColName: "K",
              Type: 7,
              Location: 24,
              Text: "*G ",
              Price: 0.0,               PNR: "",               FirstName: "",     LastName: ""             
            },
            {
              Cabin: 2,
              SeatNumber: "9L",
              Row: 9,
              RowLabel: "W28",
              Col: 11,
              ColName: "L",
              Type: 7,
              Location: 24,
              Text: "*G ",
              Price: 0.0,               PNR: "",               FirstName: "",     LastName: ""             
            }
          ]
        },
        {
          Name: "W29",
          RowNumber: 10,
          RowLabel: "W",
          Seats: [
            {
              Cabin: 2,
              SeatNumber: "10A",
              Row: 10,
              RowLabel: "W29",
              Col: 0,
              ColName: "A",
              Type: 7,
              Location: 24,
              Text: "*G ",
              Price: 0.0,               PNR: "",               FirstName: "",     LastName: ""             
            },
            {
              Cabin: 2,
              SeatNumber: "10B",
              Row: 10,
              RowLabel: "W29",
              Col: 1,
              ColName: "B",
              Type: 7,
              Location: 24,
              Text: "*G ",
              Price: 0.0,               PNR: "",               FirstName: "",     LastName: ""             
            },
            {
              Cabin: 2,
              SeatNumber: "10C",
              Row: 10,
              RowLabel: "W29",
              Col: 2,
              ColName: "C",
              Type: 7,
              Location: 24,
              Text: "*GH",
              Price: 0.0,               PNR: "",               FirstName: "",     LastName: ""             
            },
            {
              Cabin: 2,
              SeatNumber: "10 ",
              Row: 10,
              RowLabel: "W29",
              Col: 3,
              ColName: " ",
              Type: 7,
              Location: 5,
              Text: "   ",
              Price: 0.0,               PNR: "",               FirstName: "",     LastName: ""             
            },
            {
              Cabin: 2,
              SeatNumber: "10D",
              Row: 10,
              RowLabel: "W29",
              Col: 4,
              ColName: "D",
              Type: 21,
              Location: 24,
              Text: "ZGH",
              Price: 0.0,               PNR: "",               FirstName: "",
                             LastName: ""             
            },
            {
              Cabin: 2,
              SeatNumber: "10E",
              Row: 10,
              RowLabel: "W29",
              Col: 5,
              ColName: "E",
              Type: 21,
              Location: 24,
              Text: "ZG ",
              Price: 0.0,               PNR: "",               FirstName: "",               LastName: ""             
            },
            {
              Cabin: 2,
              SeatNumber: "10G",
              Row: 10,
              RowLabel: "W29",
              Col: 6,
              ColName: "G",
              Type: 21,
              Location: 24,
              Text: "ZG ",
              Price: 0.0,               PNR: "",               FirstName: "",               LastName: ""             
            },
            {
              Cabin: 2,
              SeatNumber: "10H",
              Row: 10,
              RowLabel: "W29",
              Col: 7,
              ColName: "H",
              Type: 21,
              Location: 24,
              Text: "ZGH",
              Price: 0.0,               PNR: "",               FirstName: "",               LastName: ""             
            },
            {
              Cabin: 2,
              SeatNumber: "10 ",
              Row: 10,
              RowLabel: "W29",
              Col: 8,
              ColName: " ",
              Type: 7,
              Location: 5,
              Text: "   ",
              Price: 0.0,               PNR: "",               FirstName: "",     LastName: ""             
            },
            {
              Cabin: 2,
              SeatNumber: "10J",
              Row: 10,
              RowLabel: "W29",
              Col: 9,
              ColName: "J",
              Type: 7,
              Location: 24,
              Text: "*GH",
              Price: 0.0,               PNR: "",               FirstName: "",     LastName: ""             
            },
            {
              Cabin: 2,
              SeatNumber: "10K",
              Row: 10,
              RowLabel: "W29",
              Col: 10,
              ColName: "K",
              Type: 7,
              Location: 24,
              Text: "*G ",
              Price: 0.0,               PNR: "",               FirstName: "",     LastName: ""             
            },
            {
              Cabin: 2,
              SeatNumber: "10L",
              Row: 10,
              RowLabel: "W29",
              Col: 11,
              ColName: "L",
              Type: 7,
              Location: 24,
              Text: "*G ",
              Price: 0.0,               PNR: "",               FirstName: "",     LastName: ""             
            }
          ]
        },
        {
          Name: "W30",
          RowNumber: 11,
          RowLabel: "W",
          Seats: [
            {
              Cabin: 2,
              SeatNumber: "11A",
              Row: 11,
              RowLabel: "W30",
              Col: 0,
              ColName: "A",
              Type: 21,
              Location: 24,
              Text: "ZG ",
              Price: 0.0,               PNR: "",               FirstName: "",               LastName: ""             
            },
            {
              Cabin: 2,
              SeatNumber: "11B",
              Row: 11,
              RowLabel: "W30",
              Col: 1,
              ColName: "B",
              Type: 7,
              Location: 5,
              Text: "   ",
              Price: 0.0,               PNR: "",               FirstName: "",     LastName: ""             
            },
            {
              Cabin: 2,
              SeatNumber: "11C",
              Row: 11,
              RowLabel: "W30",
              Col: 2,
              ColName: "C",
              Type: 21,
              Location: 24,
              Text: "ZGH",
              Price: 0.0,               PNR: "",               FirstName: "",               LastName: ""             
            },
            {
              Cabin: 2,
              SeatNumber: "11 ",
              Row: 11,
              RowLabel: "W30",
              Col: 3,
              ColName: " ",
              Type: 7,
              Location: 5,
              Text: "   ",
              Price: 0.0,               PNR: "",               FirstName: "",     LastName: ""             
            },
            {
              Cabin: 2,
              SeatNumber: "11D",
              Row: 11,
              RowLabel: "W30",
              Col: 4,
              ColName: "D",
              Type: 8,
              Location: 24,
              Text: "LAV",
              Price: 0.0,               PNR: "XYVDFR",               FirstName: "First",               LastName: "last"             
            },
            {
              Cabin: 2,
              SeatNumber: "11E",
              Row: 11,
              RowLabel: "W30",
              Col: 5,
              ColName: "E",
              Type: 7,
              Location: 5,
              Text: "   ",
              Price: 0.0,               PNR: "",               FirstName: "",     LastName: ""             
            },
            {
              Cabin: 2,
              SeatNumber: "11G",
              Row: 11,
              RowLabel: "W30",
              Col: 6,
              ColName: "G",
              Type: 7,
              Location: 5,
              Text: "   ",
              Price: 0.0,               PNR: "",               FirstName: "",     LastName: ""             
            },
            {
              Cabin: 2,
              SeatNumber: "11H",
              Row: 11,
              RowLabel: "W30",
              Col: 7,
              ColName: "H",
              Type: 8,
              Location: 24,
              Text: "LAV",
              Price: 0.0,               PNR: "XYVDFR",               FirstName: "First",               LastName: "last"             
            },
            {
              Cabin: 2,
              SeatNumber: "11 ",
              Row: 11,
              RowLabel: "W30",
              Col: 8,
              ColName: " ",
              Type: 7,
              Location: 5,
              Text: "   ",
              Price: 0.0,               PNR: "",               FirstName: "",     LastName: ""             
            },
            {
              Cabin: 2,
              SeatNumber: "11J",
              Row: 11,
              RowLabel: "W30",
              Col: 9,
              ColName: "J",
              Type: 21,
              Location: 24,
              Text: "ZGH",
              Price: 0.0,               PNR: "",               FirstName: "",               LastName: ""             
            },
            {
              Cabin: 2,
              SeatNumber: "11K",
              Row: 11,
              RowLabel: "W30",
              Col: 10,
              ColName: "K",
              Type: 7,
              Location: 5,
              Text: "   ",
              Price: 0.0,               PNR: "",               FirstName: "",     LastName: ""             
            },
            {
              Cabin: 2,
              SeatNumber: "11L",
              Row: 11,
              RowLabel: "W30",
              Col: 11,
              ColName: "L",
              Type: 21,
              Location: 24,
              Text: "ZG ",
              Price: 0.0,               PNR: "",               FirstName: "",               LastName: ""             
            }
          ]
        },
        {
          Name: "P31X",
          RowNumber: 12,
          RowLabel: "PX",
          Seats: [
            {
              Cabin: 2,
              SeatNumber: "12A",
              Row: 12,
              RowLabel: "P31X",
              Col: 0,
              ColName: "A",
              Type: 20,
              Location: 12,
              Text: "*L ",
              Price: 0.0,               PNR: "XYVDFR",               FirstName: "First",               LastName: "last"             
            },
            {
              Cabin: 2,
              SeatNumber: "12B",
              Row: 12,
              RowLabel: "P31X",
              Col: 1,
              ColName: "B",
              Type: 7,
              Location: 5,
              Text: "   ",
              Price: 0.0,               PNR: "",               FirstName: "",     LastName: ""             
            },
            {
              Cabin: 2,
              SeatNumber: "12C",
              Row: 12,
              RowLabel: "P31X",
              Col: 2,
              ColName: "C",
              Type: 20,
              Location: 12,
              Text: "*L ",
              Price: 0.0,               PNR: "XYVDFR",               FirstName: "First",               LastName: "last"             
            },
            {
              Cabin: 2,
              SeatNumber: "12 ",
              Row: 12,
              RowLabel: "P31X",
              Col: 3,
              ColName: " ",
              Type: 7,
              Location: 5,
              Text: "   ",
              Price: 0.0,               PNR: "",               FirstName: "",     LastName: ""             
            },
            {
              Cabin: 2,
              SeatNumber: "12D",
              Row: 12,
              RowLabel: "P31X",
              Col: 4,
              ColName: "D",
              Type: 7,
              Location: 5,
              Text: "   ",
              Price: 0.0,               PNR: "",               FirstName: "",     LastName: ""             
            },
            {
              Cabin: 2,
              SeatNumber: "12E",
              Row: 12,
              RowLabel: "P31X",
              Col: 5,
              ColName: "E",
              Type: 4,
              Location: 12,
              Text: "GAL",
              Price: 0.0,               PNR: "XYVDFR",               FirstName: "First",               LastName: "last"             
            },
            {
              Cabin: 2,
              SeatNumber: "12G",
              Row: 12,
              RowLabel: "P31X",
              Col: 6,
              ColName: "G",
              Type: 4,
              Location: 12,
              Text: "GAL",
              Price: 0.0,               PNR: "XYVDFR",               FirstName: "First",               LastName: "last"             
            },
            {
              Cabin: 2,
              SeatNumber: "12H",
              Row: 12,
              RowLabel: "P31X",
              Col: 7,
              ColName: "H",
              Type: 7,
              Location: 5,
              Text: "   ",
              Price: 0.0,               PNR: "",               FirstName: "",     LastName: ""             
            },
            {
              Cabin: 2,
              SeatNumber: "12 ",
              Row: 12,
              RowLabel: "P31X",
              Col: 8,
              ColName: " ",
              Type: 7,
              Location: 5,
              Text: "   ",
              Price: 0.0,               PNR: "",               FirstName: "",     LastName: ""             
            },
            {
              Cabin: 2,
              SeatNumber: "12J",
              Row: 12,
              RowLabel: "P31X",
              Col: 9,
              ColName: "J",
              Type: 20,
              Location: 12,
              Text: "*L ",
              Price: 0.0,               PNR: "XYVDFR",               FirstName: "First",               LastName: "last"             
            },
            {
              Cabin: 2,
              SeatNumber: "12K",
              Row: 12,
              RowLabel: "P31X",
              Col: 10,
              ColName: "K",
              Type: 7,
              Location: 5,
              Text: "   ",
              Price: 0.0,               PNR: "",               FirstName: "",     LastName: ""             
            },
            {
              Cabin: 2,
              SeatNumber: "12L",
              Row: 12,
              RowLabel: "P31X",
              Col: 11,
              ColName: "L",
              Type: 20,
              Location: 12,
              Text: "*L ",
              Price: 0.0,               PNR: "XYVDFR",               FirstName: "First",               LastName: "last"             
            }
          ]
        },
        {
          Name: "P32",
          RowNumber: 13,
          RowLabel: "P",
          Seats: [
            {
              Cabin: 2,
              SeatNumber: "13A",
              Row: 13,
              RowLabel: "P32",
              Col: 0,
              ColName: "A",
              Type: 20,
              Location: 24,
              Text: "*L ",
              Price: 0.0,               PNR: "XYVDFR",               FirstName: "First",               LastName: "last"             
            },
            {
              Cabin: 2,
              SeatNumber: "13B",
              Row: 13,
              RowLabel: "P32",
              Col: 1,
              ColName: "B",
              Type: 7,
              Location: 5,
              Text: "   ",
              Price: 0.0,               PNR: "",               FirstName: "",     LastName: ""             
            },
            {
              Cabin: 2,
              SeatNumber: "13C",
              Row: 13,
              RowLabel: "P32",
              Col: 2,
              ColName: "C",
              Type: 20,
              Location: 24,
              Text: "*LH",
              Price: 0.0,               PNR: "XYVDFR",               FirstName: "First",               LastName: "last"             
            },
            {
              Cabin: 2,
              SeatNumber: "13 ",
              Row: 13,
              RowLabel: "P32",
              Col: 3,
              ColName: " ",
              Type: 7,
              Location: 5,
              Text: "   ",
              Price: 0.0,               PNR: "",               FirstName: "",     LastName: ""             
            },
            {
              Cabin: 2,
              SeatNumber: "13D",
              Row: 13,
              RowLabel: "P32",
              Col: 4,
              ColName: "D",
              Type: 7,
              Location: 5,
              Text: "   ",
              Price: 0.0,               PNR: "",               FirstName: "",     LastName: ""             
            },
            {
              Cabin: 2,
              SeatNumber: "13E",
              Row: 13,
              RowLabel: "P32",
              Col: 5,
              ColName: "E",
              Type: 7,
              Location: 5,
              Text: "   ",
              Price: 0.0,               PNR: "",               FirstName: "",     LastName: ""             
            },
            {
              Cabin: 2,
              SeatNumber: "13G",
              Row: 13,
              RowLabel: "P32",
              Col: 6,
              ColName: "G",
              Type: 7,
              Location: 5,
              Text: "   ",
              Price: 0.0,               PNR: "",               FirstName: "",     LastName: ""             
            },
            {
              Cabin: 2,
              SeatNumber: "13H",
              Row: 13,
              RowLabel: "P32",
              Col: 7,
              ColName: "H",
              Type: 7,
              Location: 5,
              Text: "   ",
              Price: 0.0,               PNR: "",               FirstName: "",     LastName: ""             
            },
            {
              Cabin: 2,
              SeatNumber: "13 ",
              Row: 13,
              RowLabel: "P32",
              Col: 8,
              ColName: " ",
              Type: 7,
              Location: 5,
              Text: "   ",
              Price: 0.0,               PNR: "",               FirstName: "",     LastName: ""             
            },
            {
              Cabin: 2,
              SeatNumber: "13J",
              Row: 13,
              RowLabel: "P32",
              Col: 9,
              ColName: "J",
              Type: 20,
              Location: 24,
              Text: "*LH",
              Price: 0.0,               PNR: "XYVDFR",               FirstName: "First",               LastName: "last"             
            },
            {
              Cabin: 2,
              SeatNumber: "13K",
              Row: 13,
              RowLabel: "P32",
              Col: 10,
              ColName: "K",
              Type: 7,
              Location: 5,
              Text: "   ",
              Price: 0.0,               PNR: "",               FirstName: "",     LastName: ""             
            },
            {
              Cabin: 2,
              SeatNumber: "13L",
              Row: 13,
              RowLabel: "P32",
              Col: 11,
              ColName: "L",
              Type: 20,
              Location: 24,
              Text: "*L ",
              Price: 0.0,               PNR: "XYVDFR",               FirstName: "First",               LastName: "last"             
            }
          ]
        },
        {
          Name: "P33",
          RowNumber: 14,
          RowLabel: "P",
          Seats: [
            {
              Cabin: 2,
              SeatNumber: "14A",
              Row: 14,
              RowLabel: "P33",
              Col: 0,
              ColName: "A",
              Type: 11,
              Location: 24,
              Text: "*P ",
              Price: 0.0,               PNR: "XYVDFR",               FirstName: "First",               LastName: "last"             
            },
            {
              Cabin: 2,
              SeatNumber: "14B",
              Row: 14,
              RowLabel: "P33",
              Col: 1,
              ColName: "B",
              Type: 11,
              Location: 24,
              Text: "*P ",
              Price: 0.0,               PNR: "XYVDFR",               FirstName: "First",               LastName: "last"             
            },
            {
              Cabin: 2,
              SeatNumber: "14C",
              Row: 14,
              RowLabel: "P33",
              Col: 2,
              ColName: "C",
              Type: 11,
              Location: 24,
              Text: "*P ",
              Price: 0.0,               PNR: "XYVDFR",               FirstName: "First",               LastName: "last"             
            },
            {
              Cabin: 2,
              SeatNumber: "14 ",
              Row: 14,
              RowLabel: "P33",
              Col: 3,
              ColName: " ",
              Type: 7,
              Location: 5,
              Text: "   ",
              Price: 0.0,               PNR: "",               FirstName: "",     LastName: ""             
            },
            {
              Cabin: 2,
              SeatNumber: "14D",
              Row: 14,
              RowLabel: "P33",
              Col: 4,
              ColName: "D",
              Type: 20,
              Location: 24,
              Text: "*L ",
              Price: 0.0,               PNR: "XYVDFR",               FirstName: "First",               LastName: "last"             
            },
            {
              Cabin: 2,
              SeatNumber: "14E",
              Row: 14,
              RowLabel: "P33",
              Col: 5,
              ColName: "E",
              Type: 20,
              Location: 24,
              Text: "*L ",
              Price: 0.0,               PNR: "XYVDFR",               FirstName: "First",               LastName: "last"             
            },
            {
              Cabin: 2,
              SeatNumber: "14G",
              Row: 14,
              RowLabel: "P33",
              Col: 6,
              ColName: "G",
              Type: 20,
              Location: 24,
              Text: "*L ",
              Price: 0.0,               PNR: "XYVDFR",               FirstName: "First",               LastName: "last"             
            },
            {
              Cabin: 2,
              SeatNumber: "14H",
              Row: 14,
              RowLabel: "P33",
              Col: 7,
              ColName: "H",
              Type: 20,
              Location: 24,
              Text: "*L ",
              Price: 0.0,               PNR: "XYVDFR",               FirstName: "First",               LastName: "last"             
            },
            {
              Cabin: 2,
              SeatNumber: "14 ",
              Row: 14,
              RowLabel: "P33",
              Col: 8,
              ColName: " ",
              Type: 7,
              Location: 5,
              Text: "   ",
              Price: 0.0,               PNR: "",               FirstName: "",     LastName: ""             
            },
            {
              Cabin: 2,
              SeatNumber: "14J",
              Row: 14,
              RowLabel: "P33",
              Col: 9,
              ColName: "J",
              Type: 11,
              Location: 24,
              Text: "*P ",
              Price: 0.0,               PNR: "XYVDFR",               FirstName: "First",               LastName: "last"             
            },
            {
              Cabin: 2,
              SeatNumber: "14K",
              Row: 14,
              RowLabel: "P33",
              Col: 10,
              ColName: "K",
              Type: 11,
              Location: 24,
              Text: "*P ",
              Price: 0.0,               PNR: "XYVDFR",               FirstName: "First",               LastName: "last"             
            },
            {
              Cabin: 2,
              SeatNumber: "14L",
              Row: 14,
              RowLabel: "P33",
              Col: 11,
              ColName: "L",
              Type: 11,
              Location: 24,
              Text: "*P ",
              Price: 0.0,               PNR: "XYVDFR",               FirstName: "First",               LastName: "last"             
            }
          ]
        },
        {
          Name: "P34",
          RowNumber: 15,
          RowLabel: "P",
          Seats: [
            {
              Cabin: 2,
              SeatNumber: "15A",
              Row: 15,
              RowLabel: "P34",
              Col: 0,
              ColName: "A",
              Type: 11,
              Location: 24,
              Text: "*P ",
              Price: 0.0,               PNR: "XYVDFR",               FirstName: "First",               LastName: "last"             
            },
            {
              Cabin: 2,
              SeatNumber: "15B",
              Row: 15,
              RowLabel: "P34",
              Col: 1,
              ColName: "B",
              Type: 7,
              Location: 24,
              Text: "*G ",
              Price: 0.0,               PNR: "",               FirstName: "",     LastName: ""             
            },
            {
              Cabin: 2,
              SeatNumber: "15C",
              Row: 15,
              RowLabel: "P34",
              Col: 2,
              ColName: "C",
              Type: 11,
              Location: 24,
              Text: "*P ",
              Price: 0.0,               PNR: "XYVDFR",               FirstName: "First",               LastName: "last"             
            },
            {
              Cabin: 2,
              SeatNumber: "15 ",
              Row: 15,
              RowLabel: "P34",
              Col: 3,
              ColName: " ",
              Type: 7,
              Location: 5,
              Text: "   ",
              Price: 0.0,               PNR: "",               FirstName: "",     LastName: ""             
            },
            {
              Cabin: 2,
              SeatNumber: "15D",
              Row: 15,
              RowLabel: "P34",
              Col: 4,
              ColName: "D",
              Type: 20,
              Location: 24,
              Text: "*LH",
              Price: 0.0,               PNR: "XYVDFR",               FirstName: "First",               LastName: "last"             
            },
            {
              Cabin: 2,
              SeatNumber: "15E",
              Row: 15,
              RowLabel: "P34",
              Col: 5,
              ColName: "E",
              Type: 20,
              Location: 24,
              Text: "*L ",
              Price: 0.0,               PNR: "XYVDFR",               FirstName: "First",               LastName: "last"             
            },
            {
              Cabin: 2,
              SeatNumber: "15G",
              Row: 15,
              RowLabel: "P34",
              Col: 6,
              ColName: "G",
              Type: 20,
              Location: 24,
              Text: "*LH",
              Price: 0.0,               PNR: "XYVDFR",               FirstName: "First",               LastName: "last"             
            },
            {
              Cabin: 2,
              SeatNumber: "15H",
              Row: 15,
              RowLabel: "P34",
              Col: 7,
              ColName: "H",
              Type: 20,
              Location: 24,
              Text: "*LH",
              Price: 0.0,               PNR: "XYVDFR",               FirstName: "First",               LastName: "last"             
            },
            {
              Cabin: 2,
              SeatNumber: "15 ",
              Row: 15,
              RowLabel: "P34",
              Col: 8,
              ColName: " ",
              Type: 7,
              Location: 5,
              Text: "   ",
              Price: 0.0,               PNR: "",               FirstName: "",     LastName: ""             
            },
            {
              Cabin: 2,
              SeatNumber: "15J",
              Row: 15,
              RowLabel: "P34",
              Col: 9,
              ColName: "J",
              Type: 11,
              Location: 24,
              Text: "*PH",
              Price: 0.0,               PNR: "XYVDFR",               FirstName: "First",               LastName: "last"             
            },
            {
              Cabin: 2,
              SeatNumber: "15K",
              Row: 15,
              RowLabel: "P34",
              Col: 10,
              ColName: "K",
              Type: 7,
              Location: 24,
              Text: "*G ",
              Price: 0.0,               PNR: "",               FirstName: "",     LastName: ""             
            },
            {
              Cabin: 2,
              SeatNumber: "15L",
              Row: 15,
              RowLabel: "P34",
              Col: 11,
              ColName: "L",
              Type: 11,
              Location: 24,
              Text: "*P ",
              Price: 0.0,               PNR: "XYVDFR",               FirstName: "First",               LastName: "last"             
            }
          ]
        },
        {
          Name: "P35",
          RowNumber: 16,
          RowLabel: "P",
          Seats: [
            {
              Cabin: 2,
              SeatNumber: "16A",
              Row: 16,
              RowLabel: "P35",
              Col: 0,
              ColName: "A",
              Type: 11,
              Location: 24,
              Text: "*P ",
              Price: 0.0,               PNR: "XYVDFR",               FirstName: "First",               LastName: "last"             
            },
            {
              Cabin: 2,
              SeatNumber: "16B",
              Row: 16,
              RowLabel: "P35",
              Col: 1,
              ColName: "B",
              Type: 7,
              Location: 24,
              Text: "*G ",
              Price: 0.0,               PNR: "",               FirstName: "",     LastName: ""             
            },
            {
              Cabin: 2,
              SeatNumber: "16C",
              Row: 16,
              RowLabel: "P35",
              Col: 2,
              ColName: "C",
              Type: 11,
              Location: 24,
              Text: "*P ",
              Price: 0.0,               PNR: "XYVDFR",               FirstName: "First",               LastName: "last"             
            },
            {
              Cabin: 2,
              SeatNumber: "16 ",
              Row: 16,
              RowLabel: "P35",
              Col: 3,
              ColName: " ",
              Type: 7,
              Location: 5,
              Text: "   ",
              Price: 0.0,               PNR: "",               FirstName: "",     LastName: ""             
            },
            {
              Cabin: 2,
              SeatNumber: "16D",
              Row: 16,
              RowLabel: "P35",
              Col: 4,
              ColName: "D",
              Type: 20,
              Location: 24,
              Text: "*LH",
              Price: 0.0,               PNR: "XYVDFR",               FirstName: "First",               LastName: "last"             
            },
            {
              Cabin: 2,
              SeatNumber: "16E",
              Row: 16,
              RowLabel: "P35",
              Col: 5,
              ColName: "E",
              Type: 20,
              Location: 24,
              Text: "*L ",
              Price: 0.0,               PNR: "XYVDFR",               FirstName: "First",               LastName: "last"             
            },
            {
              Cabin: 2,
              SeatNumber: "16G",
              Row: 16,
              RowLabel: "P35",
              Col: 6,
              ColName: "G",
              Type: 20,
              Location: 24,
              Text: "*LH",
              Price: 0.0,               PNR: "XYVDFR",               FirstName: "First",               LastName: "last"             
            },
            {
              Cabin: 2,
              SeatNumber: "16H",
              Row: 16,
              RowLabel: "P35",
              Col: 7,
              ColName: "H",
              Type: 20,
              Location: 24,
              Text: "*LH",
              Price: 0.0,               PNR: "XYVDFR",               FirstName: "First",               LastName: "last"             
            },
            {
              Cabin: 2,
              SeatNumber: "16 ",
              Row: 16,
              RowLabel: "P35",
              Col: 8,
              ColName: " ",
              Type: 7,
              Location: 5,
              Text: "   ",
              Price: 0.0,               PNR: "",               FirstName: "",     LastName: ""             
            },
            {
              Cabin: 2,
              SeatNumber: "16J",
              Row: 16,
              RowLabel: "P35",
              Col: 9,
              ColName: "J",
              Type: 11,
              Location: 24,
              Text: "*PH",
              Price: 0.0,               PNR: "XYVDFR",               FirstName: "First",               LastName: "last"             
            },
            {
              Cabin: 2,
              SeatNumber: "16K",
              Row: 16,
              RowLabel: "P35",
              Col: 10,
              ColName: "K",
              Type: 7,
              Location: 24,
              Text: "*G ",
              Price: 0.0,               PNR: "",               FirstName: "",     LastName: ""             
            },
            {
              Cabin: 2,
              SeatNumber: "16L",
              Row: 16,
              RowLabel: "P35",
              Col: 11,
              ColName: "L",
              Type: 11,
              Location: 24,
              Text: "*P ",
              Price: 0.0,               PNR: "XYVDFR",               FirstName: "First",               LastName: "last"             
            }
          ]
        },
        {
          Name: "P36",
          RowNumber: 17,
          RowLabel: "P",
          Seats: [
            {
              Cabin: 2,
              SeatNumber: "17A",
              Row: 17,
              RowLabel: "P36",
              Col: 0,
              ColName: "A",
              Type: 11,
              Location: 24,
              Text: "*P ",
              Price: 0.0,               PNR: "XYVDFR",               FirstName: "First",               LastName: "last"             
            },
            {
              Cabin: 2,
              SeatNumber: "17B",
              Row: 17,
              RowLabel: "P36",
              Col: 1,
              ColName: "B",
              Type: 7,
              Location: 24,
              Text: "*G ",
              Price: 0.0,               PNR: "",               FirstName: "",     LastName: ""             
            },
            {
              Cabin: 2,
              SeatNumber: "17C",
              Row: 17,
              RowLabel: "P36",
              Col: 2,
              ColName: "C",
              Type: 11,
              Location: 24,
              Text: "*P ",
              Price: 0.0,               PNR: "XYVDFR",               FirstName: "First",               LastName: "last"             
            },
            {
              Cabin: 2,
              SeatNumber: "17 ",
              Row: 17,
              RowLabel: "P36",
              Col: 3,
              ColName: " ",
              Type: 7,
              Location: 5,
              Text: "   ",
              Price: 0.0,               PNR: "",               FirstName: "",     LastName: ""             
            },
            {
              Cabin: 2,
              SeatNumber: "17D",
              Row: 17,
              RowLabel: "P36",
              Col: 4,
              ColName: "D",
              Type: 7,
              Location: 24,
              Text: "*GH",
              Price: 0.0,               PNR: "",               FirstName: "",     LastName: ""             
            },
            {
              Cabin: 2,
              SeatNumber: "17E",
              Row: 17,
              RowLabel: "P36",
              Col: 5,
              ColName: "E",
              Type: 7,
              Location: 24,
              Text: "*G ",
              Price: 0.0,               PNR: "",               FirstName: "",     LastName: ""             
            },
            {
              Cabin: 2,
              SeatNumber: "17G",
              Row: 17,
              RowLabel: "P36",
              Col: 6,
              ColName: "G",
              Type: 7,
              Location: 24,
              Text: "*GH",
              Price: 0.0,               PNR: "",               FirstName: "",     LastName: ""             
            },
            {
              Cabin: 2,
              SeatNumber: "17H",
              Row: 17,
              RowLabel: "P36",
              Col: 7,
              ColName: "H",
              Type: 7,
              Location: 24,
              Text: "*GH",
              Price: 0.0,               PNR: "",               FirstName: "",     LastName: ""             
            },
            {
              Cabin: 2,
              SeatNumber: "17 ",
              Row: 17,
              RowLabel: "P36",
              Col: 8,
              ColName: " ",
              Type: 7,
              Location: 5,
              Text: "   ",
              Price: 0.0,               PNR: "",               FirstName: "",     LastName: ""             
            },
            {
              Cabin: 2,
              SeatNumber: "17J",
              Row: 17,
              RowLabel: "P36",
              Col: 9,
              ColName: "J",
              Type: 11,
              Location: 24,
              Text: "*PH",
              Price: 0.0,
              PNR: "XYVDFR",
              FirstName: "First",
              LastName: "last"
            },
            {
              Cabin: 2,
              SeatNumber: "17K",
              Row: 17,
              RowLabel: "P36",
              Col: 10,
              ColName: "K",
              Type: 7,
              Location: 24,
              Text: "*G ",
              Price: 0.0,               PNR: "",               FirstName: "",     LastName: ""             
            },
            {
              Cabin: 2,
              SeatNumber: "17L",
              Row: 17,
              RowLabel: "P36",
              Col: 11,
              ColName: "L",
              Type: 11,
              Location: 24,
              Text: "*P ",
              Price: 0.0,
              PNR: "XYVDFR",
              FirstName: "First",
              LastName: "last"
            }
          ]
        },
        {
          Name: "P37",
          RowNumber: 18,
          RowLabel: "P",
          Seats: [
            {
              Cabin: 2,
              SeatNumber: "18A",
              Row: 18,
              RowLabel: "P37",
              Col: 0,
              ColName: "A",
              Type: 11,
              Location: 24,
              Text: "*P ",
              Price: 0.0,
              PNR: "XYVDFR",
              FirstName: "First",
              LastName: "last"
            },
            {
              Cabin: 2,
              SeatNumber: "18B",
              Row: 18,
              RowLabel: "P37",
              Col: 1,
              ColName: "B",
              Type: 7,
              Location: 24,
              Text: "*G ",
              Price: 0.0,               PNR: "",               FirstName: "",     LastName: ""             
            },
            {
              Cabin: 2,
              SeatNumber: "18C",
              Row: 18,
              RowLabel: "P37",
              Col: 2,
              ColName: "C",
              Type: 11,
              Location: 24,
              Text: "*P ",
              Price: 0.0,
              PNR: "XYVDFR",
              FirstName: "First",
              LastName: "last"
            },
            {
              Cabin: 2,
              SeatNumber: "18 ",
              Row: 18,
              RowLabel: "P37",
              Col: 3,
              ColName: " ",
              Type: 7,
              Location: 5,
              Text: "   ",
              Price: 0.0,               PNR: "",               FirstName: "",     LastName: ""             
            },
            {
              Cabin: 2,
              SeatNumber: "18D",
              Row: 18,
              RowLabel: "P37",
              Col: 4,
              ColName: "D",
              Type: 7,
              Location: 24,
              Text: "*GH",
              Price: 0.0,               PNR: "",               FirstName: "",     LastName: ""             
            },
            {
              Cabin: 2,
              SeatNumber: "18E",
              Row: 18,
              RowLabel: "P37",
              Col: 5,
              ColName: "E",
              Type: 7,
              Location: 24,
              Text: "*G ",
              Price: 0.0,               PNR: "",               FirstName: "",     LastName: ""             
            },
            {
              Cabin: 2,
              SeatNumber: "18G",
              Row: 18,
              RowLabel: "P37",
              Col: 6,
              ColName: "G",
              Type: 7,
              Location: 24,
              Text: "*GH",
              Price: 0.0,               PNR: "",               FirstName: "",     LastName: ""             
            },
            {
              Cabin: 2,
              SeatNumber: "18H",
              Row: 18,
              RowLabel: "P37",
              Col: 7,
              ColName: "H",
              Type: 7,
              Location: 24,
              Text: "*GH",
              Price: 0.0,               PNR: "",               FirstName: "",     LastName: ""             
            },
            {
              Cabin: 2,
              SeatNumber: "18 ",
              Row: 18,
              RowLabel: "P37",
              Col: 8,
              ColName: " ",
              Type: 7,
              Location: 5,
              Text: "   ",
              Price: 0.0,               PNR: "",               FirstName: "",     LastName: ""             
            },
            {
              Cabin: 2,
              SeatNumber: "18J",
              Row: 18,
              RowLabel: "P37",
              Col: 9,
              ColName: "J",
              Type: 11,
              Location: 24,
              Text: "*PH",
              Price: 0.0,
              PNR: "XYVDFR",
              FirstName: "First",
              LastName: "last"
            },
            {
              Cabin: 2,
              SeatNumber: "18K",
              Row: 18,
              RowLabel: "P37",
              Col: 10,
              ColName: "K",
              Type: 7,
              Location: 24,
              Text: "*G ",
              Price: 0.0,               PNR: "",               FirstName: "",     LastName: ""             
            },
            {
              Cabin: 2,
              SeatNumber: "18L",
              Row: 18,
              RowLabel: "P37",
              Col: 11,
              ColName: "L",
              Type: 11,
              Location: 24,
              Text: "*P ",
              Price: 0.0,
              PNR: "XYVDFR",
              FirstName: "First",
              LastName: "last"
            }
          ]
        },
        {
          Name: "38",
          RowNumber: 19,
          RowLabel: "",
          Seats: [
            {
              Cabin: 2,
              SeatNumber: "19A",
              Row: 19,
              RowLabel: "38",
              Col: 0,
              ColName: "A",
              Type: 7,
              Location: 24,
              Text: "*G ",
              Price: 0.0,               PNR: "",               FirstName: "",     LastName: ""             
            },
            {
              Cabin: 2,
              SeatNumber: "19B",
              Row: 19,
              RowLabel: "38",
              Col: 1,
              ColName: "B",
              Type: 7,
              Location: 24,
              Text: "*G ",
              Price: 0.0,               PNR: "",               FirstName: "",     LastName: ""             
            },
            {
              Cabin: 2,
              SeatNumber: "19C",
              Row: 19,
              RowLabel: "38",
              Col: 2,
              ColName: "C",
              Type: 7,
              Location: 24,
              Text: "*G ",
              Price: 0.0,               PNR: "",               FirstName: "",     LastName: ""             
            },
            {
              Cabin: 2,
              SeatNumber: "19 ",
              Row: 19,
              RowLabel: "38",
              Col: 3,
              ColName: " ",
              Type: 7,
              Location: 5,
              Text: "   ",
              Price: 0.0,               PNR: "",               FirstName: "",     LastName: ""             
            },
            {
              Cabin: 2,
              SeatNumber: "19D",
              Row: 19,
              RowLabel: "38",
              Col: 4,
              ColName: "D",
              Type: 7,
              Location: 24,
              Text: "*GH",
              Price: 0.0,               PNR: "",               FirstName: "",     LastName: ""             
            },
            {
              Cabin: 2,
              SeatNumber: "19E",
              Row: 19,
              RowLabel: "38",
              Col: 5,
              ColName: "E",
              Type: 7,
              Location: 24,
              Text: "*G ",
              Price: 0.0,               PNR: "",               FirstName: "",     LastName: ""             
            },
            {
              Cabin: 2,
              SeatNumber: "19G",
              Row: 19,
              RowLabel: "38",
              Col: 6,
              ColName: "G",
              Type: 7,
              Location: 24,
              Text: "*GH",
              Price: 0.0,               PNR: "",               FirstName: "",     LastName: ""             
            },
            {
              Cabin: 2,
              SeatNumber: "19H",
              Row: 19,
              RowLabel: "38",
              Col: 7,
              ColName: "H",
              Type: 7,
              Location: 24,
              Text: "*GH",
              Price: 0.0,               PNR: "",               FirstName: "",     LastName: ""             
            },
            {
              Cabin: 2,
              SeatNumber: "19 ",
              Row: 19,
              RowLabel: "38",
              Col: 8,
              ColName: " ",
              Type: 7,
              Location: 5,
              Text: "   ",
              Price: 0.0,               PNR: "",               FirstName: "",     LastName: ""             
            },
            {
              Cabin: 2,
              SeatNumber: "19J",
              Row: 19,
              RowLabel: "38",
              Col: 9,
              ColName: "J",
              Type: 7,
              Location: 24,
              Text: "*GH",
              Price: 0.0,               PNR: "",               FirstName: "",     LastName: ""             
            },
            {
              Cabin: 2,
              SeatNumber: "19K",
              Row: 19,
              RowLabel: "38",
              Col: 10,
              ColName: "K",
              Type: 7,
              Location: 24,
              Text: "*G ",
              Price: 0.0,               PNR: "",               FirstName: "",     LastName: ""             
            },
            {
              Cabin: 2,
              SeatNumber: "19L",
              Row: 19,
              RowLabel: "38",
              Col: 11,
              ColName: "L",
              Type: 7,
              Location: 24,
              Text: "*G ",
              Price: 0.0,               PNR: "",               FirstName: "",     LastName: ""             
            }
          ]
        },
        {
          Name: "39",
          RowNumber: 20,
          RowLabel: "",
          Seats: [
            {
              Cabin: 2,
              SeatNumber: "20A",
              Row: 20,
              RowLabel: "39",
              Col: 0,
              ColName: "A",
              Type: 7,
              Location: 24,
              Text: "*G ",
              Price: 0.0,               PNR: "",               FirstName: "",     LastName: ""             
            },
            {
              Cabin: 2,
              SeatNumber: "20B",
              Row: 20,
              RowLabel: "39",
              Col: 1,
              ColName: "B",
              Type: 7,
              Location: 24,
              Text: "*G ",
              Price: 0.0,               PNR: "",               FirstName: "",     LastName: ""             
            },
            {
              Cabin: 2,
              SeatNumber: "20C",
              Row: 20,
              RowLabel: "39",
              Col: 2,
              ColName: "C",
              Type: 7,
              Location: 24,
              Text: "*G ",
              Price: 0.0,               PNR: "",               FirstName: "",     LastName: ""             
            },
            {
              Cabin: 2,
              SeatNumber: "20 ",
              Row: 20,
              RowLabel: "39",
              Col: 3,
              ColName: " ",
              Type: 7,
              Location: 5,
              Text: "   ",
              Price: 0.0,               PNR: "",               FirstName: "",     LastName: ""             
            },
            {
              Cabin: 2,
              SeatNumber: "20D",
              Row: 20,
              RowLabel: "39",
              Col: 4,
              ColName: "D",
              Type: 7,
              Location: 24,
              Text: "*GH",
              Price: 0.0,               PNR: "",               FirstName: "",     LastName: ""             
            },
            {
              Cabin: 2,
              SeatNumber: "20E",
              Row: 20,
              RowLabel: "39",
              Col: 5,
              ColName: "E",
              Type: 7,
              Location: 24,
              Text: "*G ",
              Price: 0.0,               PNR: "",               FirstName: "",     LastName: ""             
            },
            {
              Cabin: 2,
              SeatNumber: "20G",
              Row: 20,
              RowLabel: "39",
              Col: 6,
              ColName: "G",
              Type: 7,
              Location: 24,
              Text: "*GH",
              Price: 0.0,               PNR: "",               FirstName: "",     LastName: ""             
            },
            {
              Cabin: 2,
              SeatNumber: "20H",
              Row: 20,
              RowLabel: "39",
              Col: 7,
              ColName: "H",
              Type: 7,
              Location: 24,
              Text: "*GH",
              Price: 0.0,               PNR: "",               FirstName: "",     LastName: ""             
            },
            {
              Cabin: 2,
              SeatNumber: "20 ",
              Row: 20,
              RowLabel: "39",
              Col: 8,
              ColName: " ",
              Type: 7,
              Location: 5,
              Text: "   ",
              Price: 0.0,               PNR: "",               FirstName: "",     LastName: ""             
            },
            {
              Cabin: 2,
              SeatNumber: "20J",
              Row: 20,
              RowLabel: "39",
              Col: 9,
              ColName: "J",
              Type: 7,
              Location: 24,
              Text: "*GH",
              Price: 0.0,               PNR: "",               FirstName: "",     LastName: ""             
            },
            {
              Cabin: 2,
              SeatNumber: "20K",
              Row: 20,
              RowLabel: "39",
              Col: 10,
              ColName: "K",
              Type: 7,
              Location: 24,
              Text: "*G ",
              Price: 0.0,               PNR: "",               FirstName: "",     LastName: ""             
            },
            {
              Cabin: 2,
              SeatNumber: "20L",
              Row: 20,
              RowLabel: "39",
              Col: 11,
              ColName: "L",
              Type: 7,
              Location: 24,
              Text: "*G ",
              Price: 0.0,               PNR: "",               FirstName: "",     LastName: ""             
            }
          ]
        },
        {
          Name: "40",
          RowNumber: 21,
          RowLabel: "",
          Seats: [
            {
              Cabin: 2,
              SeatNumber: "21A",
              Row: 21,
              RowLabel: "40",
              Col: 0,
              ColName: "A",
              Type: 7,
              Location: 24,
              Text: "*G ",
              Price: 0.0,               PNR: "",               FirstName: "",     LastName: ""             
            },
            {
              Cabin: 2,
              SeatNumber: "21B",
              Row: 21,
              RowLabel: "40",
              Col: 1,
              ColName: "B",
              Type: 7,
              Location: 24,
              Text: "*G ",
              Price: 0.0,               PNR: "",               FirstName: "",     LastName: ""             
            },
            {
              Cabin: 2,
              SeatNumber: "21C",
              Row: 21,
              RowLabel: "40",
              Col: 2,
              ColName: "C",
              Type: 7,
              Location: 24,
              Text: "*G ",
              Price: 0.0,               PNR: "",               FirstName: "",     LastName: ""             
            },
            {
              Cabin: 2,
              SeatNumber: "21 ",
              Row: 21,
              RowLabel: "40",
              Col: 3,
              ColName: " ",
              Type: 7,
              Location: 5,
              Text: "   ",
              Price: 0.0,               PNR: "",               FirstName: "",     LastName: ""             
            },
            {
              Cabin: 2,
              SeatNumber: "21D",
              Row: 21,
              RowLabel: "40",
              Col: 4,
              ColName: "D",
              Type: 7,
              Location: 24,
              Text: "*GH",
              Price: 0.0,               PNR: "",               FirstName: "",     LastName: ""             
            },
            {
              Cabin: 2,
              SeatNumber: "21E",
              Row: 21,
              RowLabel: "40",
              Col: 5,
              ColName: "E",
              Type: 18,
              Location: 24,
              Text: "RG ",
              Price: 0.0,               PNR: "",               FirstName: "",     LastName: ""             
            },
            {
              Cabin: 2,
              SeatNumber: "21G",
              Row: 21,
              RowLabel: "40",
              Col: 6,
              ColName: "G",
              Type: 18,
              Location: 24,
              Text: "RGH",
              Price: 0.0,               PNR: "",               FirstName: "",     LastName: ""             
            },
            {
              Cabin: 2,
              SeatNumber: "21H",
              Row: 21,
              RowLabel: "40",
              Col: 7,
              ColName: "H",
              Type: 18,
              Location: 24,
              Text: "RGH",
              Price: 0.0,               PNR: "",               FirstName: "",     LastName: ""             
            },
            {
              Cabin: 2,
              SeatNumber: "21 ",
              Row: 21,
              RowLabel: "40",
              Col: 8,
              ColName: " ",
              Type: 7,
              Location: 5,
              Text: "   ",
              Price: 0.0,               PNR: "",               FirstName: "",     LastName: ""             
            },
            {
              Cabin: 2,
              SeatNumber: "21J",
              Row: 21,
              RowLabel: "40",
              Col: 9,
              ColName: "J",
              Type: 18,
              Location: 24,
              Text: "RGH",
              Price: 0.0,               PNR: "",               FirstName: "",     LastName: ""             
            },
            {
              Cabin: 2,
              SeatNumber: "21K",
              Row: 21,
              RowLabel: "40",
              Col: 10,
              ColName: "K",
              Type: 18,
              Location: 24,
              Text: "RG ",
              Price: 0.0,               PNR: "",               FirstName: "",     LastName: ""             
            },
            {
              Cabin: 2,
              SeatNumber: "21L",
              Row: 21,
              RowLabel: "40",
              Col: 11,
              ColName: "L",
              Type: 7,
              Location: 24,
              Text: "*G ",
              Price: 0.0,               PNR: "",               FirstName: "",     LastName: ""             
            }
          ]
        },
        {
          Name: "P41",
          RowNumber: 22,
          RowLabel: "P",
          Seats: [
            {
              Cabin: 2,
              SeatNumber: "22A",
              Row: 22,
              RowLabel: "P41",
              Col: 0,
              ColName: "A",
              Type: 11,
              Location: 24,
              Text: "*P ",
              Price: 0.0,
              PNR: "XYVDFR",
              FirstName: "First",
              LastName: "last"
            },
            {
              Cabin: 2,
              SeatNumber: "22B",
              Row: 22,
              RowLabel: "P41",
              Col: 1,
              ColName: "B",
              Type: 7,
              Location: 5,
              Text: "   ",
              Price: 0.0,               PNR: "",               FirstName: "",     LastName: ""             
            },
            {
              Cabin: 2,
              SeatNumber: "22C",
              Row: 22,
              RowLabel: "P41",
              Col: 2,
              ColName: "C",
              Type: 11,
              Location: 24,
              Text: "*P ",
              Price: 0.0,
              PNR: "XYVDFR",
              FirstName: "First",
              LastName: "last"
            },
            {
              Cabin: 2,
              SeatNumber: "22 ",
              Row: 22,
              RowLabel: "P41",
              Col: 3,
              ColName: " ",
              Type: 7,
              Location: 5,
              Text: "   ",
              Price: 0.0,               PNR: "",               FirstName: "",     LastName: ""             
            },
            {
              Cabin: 2,
              SeatNumber: "22D",
              Row: 22,
              RowLabel: "P41",
              Col: 4,
              ColName: "D",
              Type: 7,
              Location: 24,
              Text: "*GH",
              Price: 0.0,               PNR: "",               FirstName: "",     LastName: ""             
            },
            {
              Cabin: 2,
              SeatNumber: "22E",
              Row: 22,
              RowLabel: "P41",
              Col: 5,
              ColName: "E",
              Type: 1,
              Location: 24,
              Text: ".G ",
              Price: 0.0,
              PNR: "XYVDFR",
              FirstName: "First",
              LastName: "last"
            },
            {
              Cabin: 2,
              SeatNumber: "22G",
              Row: 22,
              RowLabel: "P41",
              Col: 6,
              ColName: "G",
              Type: 1,
              Location: 24,
              Text: ".GH",
              Price: 0.0,
              PNR: "XYVDFR",
              FirstName: "First",
              LastName: "last"
            },
            {
              Cabin: 2,
              SeatNumber: "22H",
              Row: 22,
              RowLabel: "P41",
              Col: 7,
              ColName: "H",
              Type: 7,
              Location: 24,
              Text: "*GH",
              Price: 0.0,               PNR: "",               FirstName: "",     LastName: ""             
            },
            {
              Cabin: 2,
              SeatNumber: "22 ",
              Row: 22,
              RowLabel: "P41",
              Col: 8,
              ColName: " ",
              Type: 7,
              Location: 5,
              Text: "   ",
              Price: 0.0,               PNR: "",               FirstName: "",     LastName: ""             
            },
            {
              Cabin: 2,
              SeatNumber: "22J",
              Row: 22,
              RowLabel: "P41",
              Col: 9,
              ColName: "J",
              Type: 11,
              Location: 24,
              Text: "*PH",
              Price: 0.0,
              PNR: "XYVDFR",
              FirstName: "First",
              LastName: "last"
            },
            {
              Cabin: 2,
              SeatNumber: "22K",
              Row: 22,
              RowLabel: "P41",
              Col: 10,
              ColName: "K",
              Type: 7,
              Location: 5,
              Text: "   ",
              Price: 0.0,               PNR: "",               FirstName: "",     LastName: ""             
            },
            {
              Cabin: 2,
              SeatNumber: "22L",
              Row: 22,
              RowLabel: "P41",
              Col: 11,
              ColName: "L",
              Type: 11,
              Location: 24,
              Text: "*P ",
              Price: 0.0,
              PNR: "XYVDFR",
              FirstName: "First",
              LastName: "last"
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
              SeatNumber: "23A",
              Row: 23,
              RowLabel: "P42",
              Col: 0,
              ColName: "A",
              Type: 11,
              Location: 24,
              Text: "*P ",
              Price: 0.0,
              PNR: "XYVDFR",
              FirstName: "First",
              LastName: "last"
            },
            {
              Cabin: 2,
              SeatNumber: "23B",
              Row: 23,
              RowLabel: "P42",
              Col: 1,
              ColName: "B",
              Type: 7,
              Location: 5,
              Text: "   ",
              Price: 0.0,               PNR: "",               FirstName: "",     LastName: ""             
            },
            {
              Cabin: 2,
              SeatNumber: "23C",
              Row: 23,
              RowLabel: "P42",
              Col: 2,
              ColName: "C",
              Type: 11,
              Location: 24,
              Text: "*P ",
              Price: 0.0,
              PNR: "XYVDFR",
              FirstName: "First",
              LastName: "last"
            },
            {
              Cabin: 2,
              SeatNumber: "23 ",
              Row: 23,
              RowLabel: "P42",
              Col: 3,
              ColName: " ",
              Type: 7,
              Location: 5,
              Text: "   ",
              Price: 0.0,               PNR: "",               FirstName: "",     LastName: ""             
            },
            {
              Cabin: 2,
              SeatNumber: "23D",
              Row: 23,
              RowLabel: "P42",
              Col: 4,
              ColName: "D",
              Type: 7,
              Location: 24,
              Text: "*GH",
              Price: 0.0,               PNR: "",               FirstName: "",     LastName: ""             
            },
            {
              Cabin: 2,
              SeatNumber: "23E",
              Row: 23,
              RowLabel: "P42",
              Col: 5,
              ColName: "E",
              Type: 1,
              Location: 24,
              Text: ".G ",
              Price: 0.0,
              PNR: "XYVDFR",
              FirstName: "First",
              LastName: "last"
            },
            {
              Cabin: 2,
              SeatNumber: "23G",
              Row: 23,
              RowLabel: "P42",
              Col: 6,
              ColName: "G",
              Type: 1,
              Location: 24,
              Text: ".GH",
              Price: 0.0,
              PNR: "XYVDFR",
              FirstName: "First",
              LastName: "last"
            },
            {
              Cabin: 2,
              SeatNumber: "23H",
              Row: 23,
              RowLabel: "P42",
              Col: 7,
              ColName: "H",
              Type: 7,
              Location: 24,
              Text: "*GH",
              Price: 0.0,               PNR: "",               FirstName: "",     LastName: ""             
            },
            {
              Cabin: 2,
              SeatNumber: "23 ",
              Row: 23,
              RowLabel: "P42",
              Col: 8,
              ColName: " ",
              Type: 7,
              Location: 5,
              Text: "   ",
              Price: 0.0,               PNR: "",               FirstName: "",     LastName: ""             
            },
            {
              Cabin: 2,
              SeatNumber: "23J",
              Row: 23,
              RowLabel: "P42",
              Col: 9,
              ColName: "J",
              Type: 11,
              Location: 24,
              Text: "*PH",
              Price: 0.0,
              PNR: "XYVDFR",
              FirstName: "First",
              LastName: "last"
            },
            {
              Cabin: 2,
              SeatNumber: "23K",
              Row: 23,
              RowLabel: "P42",
              Col: 10,
              ColName: "K",
              Type: 7,
              Location: 5,
              Text: "   ",
              Price: 0.0,               PNR: "",               FirstName: "",     LastName: ""             
            },
            {
              Cabin: 2,
              SeatNumber: "23L",
              Row: 23,
              RowLabel: "P42",
              Col: 11,
              ColName: "L",
              Type: 11,
              Location: 24,
              Text: "*P ",
              Price: 0.0,
              PNR: "XYVDFR",
              FirstName: "First",
              LastName: "last"
            }
          ]
        },
        {
          Name: "P43",
          RowNumber: 24,
          RowLabel: "P",
          Seats: [
            {
              Cabin: 2,
              SeatNumber: "24A",
              Row: 24,
              RowLabel: "P43",
              Col: 0,
              ColName: "A",
              Type: 11,
              Location: 24,
              Text: "*P ",
              Price: 0.0,
              PNR: "XYVDFR",
              FirstName: "First",
              LastName: "last"
            },
            {
              Cabin: 2,
              SeatNumber: "24B",
              Row: 24,
              RowLabel: "P43",
              Col: 1,
              ColName: "B",
              Type: 7,
              Location: 5,
              Text: "   ",
              Price: 0.0,               PNR: "",               FirstName: "",     LastName: ""             
            },
            {
              Cabin: 2,
              SeatNumber: "24C",
              Row: 24,
              RowLabel: "P43",
              Col: 2,
              ColName: "C",
              Type: 11,
              Location: 24,
              Text: "*P ",
              Price: 0.0,
              PNR: "XYVDFR",
              FirstName: "First",
              LastName: "last"
            },
            {
              Cabin: 2,
              SeatNumber: "24 ",
              Row: 24,
              RowLabel: "P43",
              Col: 3,
              ColName: " ",
              Type: 7,
              Location: 5,
              Text: "   ",
              Price: 0.0,               PNR: "",               FirstName: "",     LastName: ""             
            },
            {
              Cabin: 2,
              SeatNumber: "24D",
              Row: 24,
              RowLabel: "P43",
              Col: 4,
              ColName: "D",
              Type: 21,
              Location: 24,
              Text: "ZGH",
                Price: 0.0,               PNR: "",               FirstName: "",               LastName: ""             
            },
            {
              Cabin: 2,
              SeatNumber: "24E",
              Row: 24,
              RowLabel: "P43",
              Col: 5,
              ColName: "E",
              Type: 21,
              Location: 24,
              Text: "ZG ",
              Price: 0.0,               PNR: "",               FirstName: "",               LastName: ""             
            },
            {
              Cabin: 2,
              SeatNumber: "24G",
              Row: 24,
              RowLabel: "P43",
              Col: 6,
              ColName: "G",
              Type: 21,
              Location: 24,
              Text: "ZGH",
              Price: 0.0,               PNR: "",               FirstName: "",               LastName: ""             
            },
            {
              Cabin: 2,
              SeatNumber: "24H",
              Row: 24,
              RowLabel: "P43",
              Col: 7,
              ColName: "H",
              Type: 21,
              Location: 24,
              Text: "ZGH",
              Price: 0.0,               PNR: "",               FirstName: "",               LastName: ""             
            },
            {
              Cabin: 2,
              SeatNumber: "24 ",
              Row: 24,
              RowLabel: "P43",
              Col: 8,
              ColName: " ",
              Type: 7,
              Location: 5,
              Text: "   ",
              Price: 0.0,               PNR: "",               FirstName: "",     LastName: ""             
            },
            {
              Cabin: 2,
              SeatNumber: "24J",
              Row: 24,
              RowLabel: "P43",
              Col: 9,
              ColName: "J",
              Type: 11,
              Location: 24,
              Text: "*PH",
              Price: 0.0,
              PNR: "XYVDFR",
              FirstName: "First",
              LastName: "last"
            },
            {
              Cabin: 2,
              SeatNumber: "24K",
              Row: 24,
              RowLabel: "P43",
              Col: 10,
              ColName: "K",
              Type: 7,
              Location: 5,
              Text: "   ",
              Price: 0.0,               PNR: "",               FirstName: "",     LastName: ""             
            },
            {
              Cabin: 2,
              SeatNumber: "24L",
              Row: 24,
              RowLabel: "P43",
              Col: 11,
              ColName: "L",
              Type: 11,
              Location: 24,
              Text: "*P ",
              Price: 0.0,
              PNR: "XYVDFR",
              FirstName: "First",
              LastName: "last"
            }
          ]
        },
        {
          Name: "44",
          RowNumber: 25,
          RowLabel: "",
          Seats: [
            {
              Cabin: 2,
              SeatNumber: "25A",
              Row: 25,
              RowLabel: "44",
              Col: 0,
              ColName: "A",
              Type: 8,
              Location: 24,
              Text: "LAV",
              Price: 0.0,
              PNR: "XYVDFR",
              FirstName: "First",
              LastName: "last"
            },
            {
              Cabin: 2,
              SeatNumber: "25B",
              Row: 25,
              RowLabel: "44",
              Col: 1,
              ColName: "B",
              Type: 7,
              Location: 5,
              Text: "   ",
              Price: 0.0,               PNR: "",               FirstName: "",     LastName: ""             
            },
            {
              Cabin: 2,
              SeatNumber: "25C",
              Row: 25,
              RowLabel: "44",
              Col: 2,
              ColName: "C",
              Type: 7,
              Location: 5,
              Text: "   ",
              Price: 0.0,               PNR: "",               FirstName: "",     LastName: ""             
            },
            {
              Cabin: 2,
              SeatNumber: "25 ",
              Row: 25,
              RowLabel: "44",
              Col: 3,
              ColName: " ",
              Type: 7,
              Location: 5,
              Text: "   ",
              Price: 0.0,               PNR: "",               FirstName: "",     LastName: ""             
            },
            {
              Cabin: 2,
              SeatNumber: "25D",
              Row: 25,
              RowLabel: "44",
              Col: 4,
              ColName: "D",
              Type: 21,
              Location: 24,
              Text: "ZGH",
              Price: 0.0,               PNR: "",               FirstName: "",               LastName: ""             
            },
            {
              Cabin: 2,
              SeatNumber: "25E",
              Row: 25,
              RowLabel: "44",
              Col: 5,
              ColName: "E",
              Type: 21,
              Location: 24,
              Text: "ZG ",
              Price: 0.0,               PNR: "",               FirstName: "",               LastName: ""             
            },
            {
              Cabin: 2,
              SeatNumber: "25G",
              Row: 25,
              RowLabel: "44",
              Col: 6,
              ColName: "G",
              Type: 21,
              Location: 24,
              Text: "ZG ",
              Price: 0.0,               PNR: "",               FirstName: "",               LastName: ""             
            },
            {
              Cabin: 2,
              SeatNumber: "25H",
              Row: 25,
              RowLabel: "44",
              Col: 7,
              ColName: "H",
              Type: 21,
              Location: 24,
              Text: "ZGH",
              Price: 0.0,               PNR: "",               FirstName: "",               LastName: ""             
            },
            {
              Cabin: 2,
              SeatNumber: "25 ",
              Row: 25,
              RowLabel: "44",
              Col: 8,
              ColName: " ",
              Type: 7,
              Location: 5,
              Text: "   ",
              Price: 0.0,               PNR: "",               FirstName: "",     LastName: ""             
            },
            {
              Cabin: 2,
              SeatNumber: "25J",
              Row: 25,
              RowLabel: "44",
              Col: 9,
              ColName: "J",
              Type: 8,
              Location: 24,
              Text: "   ",
              Price: 0.0,
              PNR: "XYVDFR",
              FirstName: "First",
              LastName: "last"
            },
            {
              Cabin: 2,
              SeatNumber: "25K",
              Row: 25,
              RowLabel: "44",
              Col: 10,
              ColName: "K",
              Type: 7,
              Location: 24,
              Text: "   ",
              Price: 0.0,               PNR: "",               FirstName: "",     LastName: ""             
            },
            {
              Cabin: 2,
              SeatNumber: "25L",
              Row: 25,
              RowLabel: "44",
              Col: 11,
              ColName: "L",
              Type: 8,
              Location: 24,
              Text: "LAV",
              Price: 0.0,
              PNR: "XYVDFR",
              FirstName: "First",
              LastName: "last"
            }
          ]
        }
      ]
    };

    this.state = { seatMap: [seatMock] };
   

    var flight = {
      flightNumber: 51,
      DepartTime: "23FEB",
      depart: "LHR",
      arrive: "DFW"
    };
  }
  handleSeatClick(seat, event) {
     if (event.type === 'contextmenu') {
      event.preventDefault();
    if(seat.Type == SeatType.BOARDED || seat.Type == SeatType.NOTBOARDED || seat.Type == SeatType.THRU || seat.Type == SeatType.HELD)
    {
           Popup.alert("Seat Number: " +  seat.SeatNumber + " PNR: " + seat.PNR + "         Name: " + seat.LastName + "/" + seat.FirstName  + "   Status: " + this.paxSeatStatus(seat.Type) );
    }
  }
    else {    
      if(seat.Type == SeatType.AVAILABLE || seat.Type == SeatType.BLOCKED)
      {
        var seatMapDetails = this.state.seatMap;
        seatMapDetails[0].Rows[0].Seats[0].Type=SeatType.BOARDED;
        this.setState({seatMap:seatMapDetails});
      }
    }
       
    
    
  }

  
paxSeatStatus(type) {

  if(type ==  SeatType.BLOCKED)
    return "BLOCKED";
  else if(type == SeatType.BOARDED)
    return "BOARDED";
    else if(type ==SeatType.NOTBOARDED)
    return "NOTBOARDED";
    else if(type ==SeatType.THRU)
    return "THRU";
    else if(type == SeatType.HELD)
    return "HELD";
    else if(type ==SeatType.AVAILABLE)
    return "OPEN";
    else
    return "Default";
  
}
  
  componentDidMount() {
   // document.addEventListener('contextmenu', this.handleSeatClick);
   
}

componentWillUnmount() {
  //document.removeEventListener('contextmenu', this.handleSeatClick);
 
}

  
   
  renderSeat(seat) {
    if (seat.Location === SeatType.AISLE) {
      return <div style={{ width: "30px" }} />;
    } else {
      var color = "black";
      var backStyle = {};
      switch (seat.Type) {
        case SeatType.BLOCKED:
          backStyle = { backgroundColor: "#daa520" };
          break;
        case SeatType.NOTBOARDED:
          backStyle = { backgroundColor: "#ffff00" };
          break;
        case SeatType.DOR:
        case SeatType.HELD:
          backStyle = { backgroundColor: "#800080" };
          break;
        case SeatType.BOARDED:
          backStyle = { backgroundColor: "#00ff00" };
          break;
        case SeatType.AVAILABLE:
          backStyle = { backgroundColor: "#191970" };
          break;
        case SeatType.PREFERRED:
        case SeatType.THRU:
          backStyle = { backgroundColor: "#dc143c" };
          break;
        default:
          break;
      }

      return (
        <div className="card" style={{ width: "40px" }}>
          <div className="card-body" style={backStyle} >
            <p  className="card-text">{seat.name}</p>
          </div>
        </div>
       
      );
    }
  }

  renderRow(row) {
    return (      
      <tr>
           {row.Seats.map(seat => {
          return <td data-tip={seat.SeatNumber + " " + seat.PNR } onContextMenu={this.handleSeatClick.bind(this, seat)} onClick={this.handleSeatClick.bind(this, seat)}>{this.renderSeat(seat)}</td>;
        })}
       
      </tr>
    );
  }

  renderCabin(cabin) {
    var rows = cabin.Rows;

    return (
     <div>
       <div className="row" style={{lineHeight:'1em',paddingBottom:5}}>
        <div className="col-sm-2 text-center" style={{background:"#00ff00", color:"#00467f",paddingBottom:5}}>
          <span style={{fontSize:'0.6em'}}>Boarded</span>
        </div>
        <div className="col-sm-2 text-center" style={{background:"#ffff00", color:"#00467f",paddingBottom:5}}>
          <span style={{fontSize:'0.6em'}}>Not Brd</span>
        </div>
        <div className="col-sm-2 text-center" style={{background:"#dc143c", color:"white",paddingBottom:5}}>
          <span style={{fontSize:'0.6em'}}>Thru</span>
        </div>
        <div className="col-sm-2 text-center" style={{background:"#800080", color:"white",paddingBottom:5}}>
          <span style={{fontSize:'0.6em'}}>Held</span>
        </div>
        <div className="col-sm-2 text-center" style={{background:"#191970", color:"white",paddingBottom:5}}>
          <span style={{fontSize:'0.6em'}}>Open</span>
        </div>
        <div className="col-sm-2 text-center" style={{background:"#daa520", color:"#00467f",paddingBottom:5}}>
          <span style={{fontSize:'0.6em'}}>Block</span>
        </div>
       </div>

        <div style={{width:'100%',overflow:'auto'}}>
          <table style={{width:'100%'}}>
            <tbody>             
              {rows.map(row => {
                return this.renderRow(row);
              })}
            </tbody>
          </table>
        </div>
      </div>
    );
  }

  render() {
    return (
      <div>
        {" "}
        {this.state.seatMap.map(cabin => this.renderCabin(cabin))}
        <ReactTooltip></ReactTooltip>
      
      </div>     

    );
  }
}