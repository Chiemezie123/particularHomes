import React, { useState } from "react";
import Select, { components, StylesConfig } from "react-select";
import { MainSelectProps, SelectOption } from "./index.types";
import styles from "./select.module.css"
import { Typography } from "../typography";
import { cn } from "@/utils/helper";

const CountrySelector: React.FC<MainSelectProps> = (props) => {


  type StylesType = StylesConfig<SelectOption, false>;

  const styles: StylesType = {
    control: (styles, { isFocused }) => ({
      ...styles,
      height: props.height || "56px",
      width: "100%",
      borderRadius: "8px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      fontFamily: "Poppins",
      padding:"0px 4px",
      fontStyle: "normal",
      fontWeight: 400,
      fontSize: "14px",
      border:"1px solid #DFDFDF",
      textAlign: "start",
      color: "#ADADAD",
      boxShadow: isFocused ? "0 0 0 1px #008273" : "none",
      "&:hover": {
        borderColor: isFocused ? "#008273" : "0",
      },
    }),

    singleValue: (styles: any) => ({
      ...styles,
      color: "#008273", // Apply text color for the selected value
    }),

    option: (styles, {isDisabled, isFocused, isSelected }) => {
      return {
        ...styles,
        width: "100%",
        fontFamily: "Poppins",
        fontStyle: "normal",
        fontWeight: 400,
        fontSize: "14px",
        backgroundColor: isDisabled
          ? null
          : isSelected
          ? ""
          : isFocused
          ? ""
          : null,
        color: isSelected ? "#008273" : isFocused ? "" : null,
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      } as any;
    },

    dropdownIndicator: (styles) => ({
      ...styles,
      display:"flex",
      width:"30px",
      height:"30px",
      padding:"10px",
      justifyContent:"center",
      alignItems:'center',
      borderRadius:"10px",
      background:props.backgroundIconColor || "#F6F6F6",
      border:"none",
      borderLeft:"none"
    }),

    indicatorSeparator: () => ({
      display: "none", // Hide the default separator
    }),
  };

  const [selectedOption, setSelectedOption] = useState<SelectOption | null>(
    null
  );

  const handleChange = (e: SelectOption | null) => {
    setSelectedOption(e);
    if (e && e.value) {
      //   Navigate(e.value);
      console.log("take drug money");
    }
    console.log(e?.value, "event");
  };

  const CustomOption = (props: any) => (
    <components.Option {...props}>
      {props.data.label}
      {props.isSelected && (
        <svg
          width="15"
          height="10"
          viewBox="0 0 15 10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5.12559 10.0001C4.95993 9.99785 4.8011 9.93376 4.68027 9.82041L0.305274 5.44541C0.20561 5.32398 0.154677 5.16981 0.162383 5.0129C0.17009 4.856 0.235884 4.70756 0.346968 4.59648C0.458052 4.4854 0.606484 4.4196 0.763392 4.4119C0.9203 4.40419 1.07446 4.45512 1.1959 4.55479L5.12559 8.49229L13.4303 0.179786C13.5517 0.0801216 13.7059 0.0291889 13.8628 0.0368952C14.0197 0.0446015 14.1681 0.110396 14.2792 0.22148C14.3903 0.332564 14.4561 0.480996 14.4638 0.637904C14.4715 0.794811 14.4206 0.948976 14.3209 1.07041L5.5709 9.82041C5.45007 9.93376 5.29124 9.99785 5.12559 10.0001Z"
            fill="#654EF2"
          />
        </svg>
      )}
    </components.Option>
  );
  return (
    <div>
      {props.label && (
        <label
          className={cn(
            "mb-3 w-fit first-letter:capitalize",
            props.errorMsg ? "text-error" : "",
            props.labelCustomClassName
          )}
        >
          <Typography variant="c-m" font="poppins" fontWeight="medium" className="leading-normal" color="navPathColor">
            {props.label}
          </Typography>
        </label>
      )}
      <Select
        placeholder={props?.placeholder}
        inputId="select-center"
        styles={styles}
        options={props?.options?.map((option) => ({
          value: option.value,
          label: option.label,
        }))}
        value={selectedOption}
        onChange={handleChange}
        components={{
          DropdownIndicator: (props) => (
            <components.DropdownIndicator {...props}>
                 <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  d="M5 7.5L10 12.5L15 7.5"
                  stroke="#A2A2A2"
                  stroke-width="1.66667"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </components.DropdownIndicator>
          ),
          Option: CustomOption,
        }}
      />
    </div>
  );
};

export default CountrySelector;

