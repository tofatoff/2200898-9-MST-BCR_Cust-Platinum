import React, { useState, forwardRef } from "react";
import { FiUsers } from "react-icons/fi";
import { Button, Input, InputGroup, InputGroupText } from "reactstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const CATEGORY_OPTION = {
  small: "2 - 4 orang",
  medium: "4 - 6 orang",
  large: "6 - 8 orang",
};

const DetailMobil = (props) => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const onChange = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };

  const DatePickerInput = forwardRef(({ value, onClick, placeholder }, ref) => (
    <InputGroup>
      <Input
        placeholder={placeholder}
        value={value}
        onClick={onClick}
        ref={ref}
        style={{
          borderRight: 0,
        }}
      />
      <InputGroupText
        style={{
          backgroundColor: "transparent",
        }}
      >
        <i class="fa-regular fa-calendar"></i>
      </InputGroupText>
    </InputGroup>
  ));

  const strToCurrIDR = (strnum) => {
    const formatterIDR = new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    });
    return formatterIDR.format(parseInt(strnum)); //ga pake parseInt jg bisa
  };
  return (
    <div
      style={{
        width: "405px",
        height: "435px",
        background: "#FFFFFF",
        boxShadow: "0px 0px 4px rgba(0, 0, 0, 0.15)",
        borderRadius: "8px",
        padding: "24px",
      }}
    >
      <img src={props.image} alt="" width="100%" />
      <p
        style={{
          fontFamily: "Arial",
          fontStyle: "normal",
          fontWeight: "700",
          fontSize: "14px",
          lineHeight: "20px",
        }}
      >
        {props.name}
      </p>
      <div>
        <FiUsers />
        <span
          style={{
            fontFamily: "Arial",
            fontStyle: "normal",
            fontSize: "14px",
            lineHeight: "20px",
          }}
        >
          {CATEGORY_OPTION[props.category]}
        </span>
      </div>
      <p>Tentukan lama sewa mobil (max. 7 hari)</p>
      <DatePicker
        placeholderText="Pilih tanggal mulai dan tanggal akhir sewa"
        selected={startDate}
        onChange={onChange}
        startDate={startDate}
        endDate={endDate}
        selectsRange
        customInput={<DatePickerInput />}
      />
      <div className="d-flex justify-content-between align-items-center">
        <span
          style={{
            fontFamily: "Arial",
            fontStyle: "normal",
            fontWeight: "700",
            fontSize: "14px",
            lineHeight: "20px",
          }}
        >
          Total
        </span>
        <span
          style={{
            fontFamily: "Arial",
            fontStyle: "normal",
            fontWeight: "700",
            fontSize: "14px",
            lineHeight: "20px",
          }}
        >
          {strToCurrIDR(props.price)}
        </span>
      </div>
      <div>
        <Button
          style={{
            backgroundColor: "#5CB85F",
            fontSize: "14px",
            fontFamily: "Arial",
            fontWeight: "700",
          }}
          block
        >
          Lanjutkan Pembayaran
        </Button>
      </div>
    </div>
  );
};

export default DetailMobil;
