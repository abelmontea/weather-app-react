import React from "react";

export default function FormattedDate(props) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[props.date.getDay()];
  let hours = props.date.getHours();
  let minutes = props.date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  if (hours < 12) {
    hours = `${hours}`;
    minutes = `${minutes} AM`;
  }
  if (hours === 12) {
    hours = `${hours}`;
    minutes = `${minutes} PM`;
  }
  if (hours >= 13) {
    hours = `${hours - 12}`;
    minutes = `${minutes} PM`;
  }
  return (
    <span>
      {day} {hours}:{minutes}
    </span>
  );
}
