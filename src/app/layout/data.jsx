import React, { Component } from "react";
import "./App.css";

import filterFactory, {
  multiSelectFilter
} from "react-bootstrap-table2-filter";

function headerTextFormatter(column, colIndex) {
  return (
    <div className="AppStandbyList" style={{ fontSize: 14 }}>
      <strong>{column.text}</strong>
    </div>
  );
}

const selectOptions = {
  0: "OS",
  1: "VOL",
  2: "D1",
  3: "D2"
};

const sampleData = {
  columns: [
    {
      dataField: "id",
      text: "ID",
      sort: true,
      headerFormatter: headerTextFormatter
    },

    {
      dataField: "name",
      text: "Name",
      sort: true,
      headerFormatter: headerTextFormatter
    },
    {
      dataField: "bpIssued",
      text: "Seat",
      sort: true,
      headerFormatter: headerTextFormatter
    },
    {
      dataField: "priorityCode",
      text: "Priority",
      sort: true,
      headerFormatter: headerTextFormatter
    },
    // {
    //   dataField: "thruStatus",
    //   text: "Thru Status",
    //   sort: true
    // },
    {
      dataField: "groupCode",
      text: "Group Code",
      sort: true,
      headerFormatter: headerTextFormatter
    },
    {
      dataField: "cabinBooked",
      text: "FC",
      sort: true,
      headerFormatter: headerTextFormatter
    },
    {
      dataField: "cabinDesired",
      text: "CoS",
      sort: true,
      headerFormatter: headerTextFormatter
    },
    {
      dataField: "destination",
      text: "Dest",
      sort: true,
      headerFormatter: headerTextFormatter
    },
    {
      dataField: "seatOrTransferFlight",
      text: "Inbound",
      sort: true,
      headerFormatter: headerTextFormatter
    },
    {
      dataField: "bags",
      text: "Bags",
      sort: true,
      headerFormatter: headerTextFormatter
    }
  ],
  passengers: [
    {
      id: 1,
      bpIssued: "21A",
      priorityCode: "OS",
      name: "LUKE SKYWALKER",
      groupCode: "AB4",
      cabinBooked: "F",
      cabinDesired: "Y",
      destination: "TUS",
      seatOrTransferFlight: NaN,
      bags: "NB"
      // remarks: "FDJ AA"
    },
    {
      id: 2,
      bpIssued: true,
      priorityCode: "OS",
      name: "LEAH ORGANA",
      groupCode: "AB4",
      cabinBooked: "F",
      cabinDesired: "Y",
      destination: "TUS",
      seatOrTransferFlight: NaN,
      bags: "NB"
      // remarks: "CJ"
    },
    {
      id: 3,
      //priorityList: 3,
      bpIssued: true,
      priorityCode: "OS",
      name: "HAN SOLO",
      groupCode: "AB4",
      cabinBooked: "F",
      cabinDesired: "Y",
      destination: "TUS",
      seatOrTransferFlight: NaN,
      bags: "NB"
      // remarks: NaN
    },
    {
      id: 4,
      //priorityList: 4,
      bpIssued: false,
      priorityCode: "VOL",
      name: "DARTH VADER",
      groupCode: NaN,
      cabinBooked: "F",
      cabinDesired: "J",
      destination: "TUS",
      seatOrTransferFlight: NaN,
      bags: "NB"
      // remarks: NaN
    },
    {
      id: 5,
      //priorityList: 5,
      bpIssued: false,
      priorityCode: "VOL",
      name: "OBIWAN KENOBI",
      groupCode: NaN,
      cabinBooked: "F",
      cabinDesired: "Y",
      destination: "TUS",
      seatOrTransferFlight: NaN,
      bags: "NB"
      // remarks: NaN
    },
    {
      id: 6,
      //priorityList: 6,
      bpIssued: false,
      priorityCode: "VOL",
      name: "MACE WINDU",
      groupCode: NaN,
      cabinBooked: "Y",
      cabinDesired: "J",
      destination: "TUS",
      seatOrTransferFlight: NaN,
      bags: "NB"
      // remarks: NaN
    },
    {
      id: 7,
      //priorityList: 7,
      bpIssued: false,
      priorityCode: "VOL",
      name: "KYLO REN",
      groupCode: NaN,
      cabinBooked: "Y",
      cabinDesired: "Y",
      destination: "TUS",
      seatOrTransferFlight: NaN,
      bags: "NB"
      // remarks: NaN
    },

    {
      id: 8,
      //priorityList: 8,
      bpIssued: false,
      priorityCode: "D1",
      name: "POE DAMERON",
      groupCode: "RR7",
      cabinBooked: "Y",
      cabinDesired: "F",
      destination: "TUS",
      seatOrTransferFlight: NaN,
      bags: "NB"
      // remarks: NaN
    },
    {
      id: 9,
      //priorityList: 9,
      bpIssued: false,
      priorityCode: "D1",
      name: "DARTH MAUL",
      groupCode: NaN,
      cabinBooked: "Y",
      cabinDesired: "Y",
      destination: "TUS",
      seatOrTransferFlight: NaN,
      bags: "NB"
      // remarks: NaN
    },
    {
      id: 10,
      //priorityList: 10,
      bpIssued: false,
      priorityCode: "D2",
      name: "BOBA FETT",
      groupCode: "AB5",
      cabinBooked: "Y",
      cabinDesired: "Y",
      destination: "TUS",
      seatOrTransferFlight: NaN,
      bags: "NB"
      // remarks: NaN
    },
    {
      id: 11,
      //priorityList: 11,
      bpIssued: false,
      priorityCode: "D2",
      name: "JANGO FETT",
      groupCode: "AB5",
      cabinBooked: "Y",
      cabinDesired: "Y",
      destination: "TUS",
      seatOrTransferFlight: NaN,
      bags: "NB"
      // remarks: NaN
    },
    {
      id: 12,
      //priorityList: 12,
      bpIssued: false,
      priorityCode: "D2",
      name: "MAZ KANATA",
      groupCode: "AB5",
      cabinBooked: "Y",
      cabinDesired: "Y",
      destination: "TUS",
      seatOrTransferFlight: NaN,
      bags: "NB"
      // remarks: NaN
    },
    {
      id: 13,
      //priorityList: 13,
      bpIssued: false,
      priorityCode: "D2",
      name: "ROSE TICO",
      groupCode: "AB5",
      cabinBooked: "Y",
      cabinDesired: "Y",
      destination: "TUS",
      seatOrTransferFlight: NaN,
      bags: "NB"
      // remarks: NaN
    },
    {
      id: 14,
      // priorityList: 14,
      bpIssued: false,
      priorityCode: "D2",
      name: "JYN ERSO",
      groupCode: "AB5",
      cabinBooked: "Y",
      cabinDesired: "Y",
      destination: "TUS",
      seatOrTransferFlight: NaN,
      bags: "NB"
      // remarks: NaN
    }
  ]
};

export default sampleData;
