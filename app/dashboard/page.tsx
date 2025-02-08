"use client";
import { Typography } from "@/components/typography";
import React from "react";
import { ThinkingWoman } from "@/assets/svg";
import RatingComp from "@/components/ratingComp";
import { tree } from "next/dist/build/templates/app-page";
import OwnApartmentContainer from "@/components/ownApartmentContainer";
import { SecondButton } from "@/components/button";
import SearchWhiteIcon from "@/assets/svg/searchWhiteIcon.svg";
import CountrySelector from "@/components/selectCountries";
import DateSelector from "@/components/datePicker";
import { Input } from "@/components/input";
import countryList from "react-select-country-list";
import { TabUnderline } from "@/components/tab";
import { useRouter, useSearchParams } from "next/navigation";
import { queryParamsHelper } from "@/utils/helper";
import { queryTabs } from "@/constants/data";

export const optionsList = countryList().getData();

export default function Page() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const activeQueryTab = searchParams.get("t") || "Top-Picks";
  
  
  const allQueryParamsObj = queryParamsHelper.queryStringToObject(
    searchParams.toString()
  );

  

  

  
  const handleTabChange = (query: Record<string, string>) => {
    const qString = queryParamsHelper.objectToQueryString({
      ...allQueryParamsObj,
      ...query,
    });
    return router.push(qString, {
      scroll: false,
    });
  };

  return (
    <div className="px-[24px] py-[16px] bg-[#E6F1F1] h-full flex flex-col gap-[24px]">
      <section className="flex p-4 sm:p-6 items-start gap-6 self-stretch justify-between rounded-[16px] bg-[var(--White,#FFF)] shadow-[0px_4px_16px_0px_rgba(0,0,0,0.12)]">
        <div className="flex flex-col pb-4  gap-4 h-full">
          <div className="">
            <div>
              <Typography color="dashboardGrey" font="Inter" fontWeight="regular" className=" text-base leading-normal">
                Good Morning, Jake
              </Typography>
            </div>
            <div>
              <Typography color="dashboardGreen" font="poppins" fontWeight="semibold" customClassName="  text-[30px] leading-normal tracking-[-0.56px]">
                Need an Apartment? We got you covered!
              </Typography>
            </div>
          </div>
          <div className="flex items-center flex-[1_0_0] gap-[12px] w-full border-t">
            <div className="flex-1">
              <CountrySelector options={optionsList} placeholder="select country" />
            </div>
            <div className="flex-1">
              <DateSelector />
            </div>
            <div className="flex-1">
              <Input
                name="number"
                placeholder="Number of People"
                customClassName="h-[56px]"
                bgcolor="font-poppins text-[16px] font-normal leading-normal "
              />
            </div>
            <div className="flex-1">
              <SecondButton
                children={"search"}
                size="button"
                leftIcon={<SearchWhiteIcon />}
                customClassName="flex items-center gap-2 rounded-custom bg-[#003D36] text-white rounded-[8px]"
                fit
              />
            </div>
          </div>
        </div>
        <div>
          <ThinkingWoman />
        </div>
      </section>
      <section className="flex gap-4">
        <div className="flex p-4  gap-6 self-stretch flex-grow border border-green-500 bg-white shadow-[0px_4px_24px_0px_rgba(0,0,0,0.04)] rounded-md w-[736px]">
          <TabUnderline
            tabs={queryTabs}
            activeTab={activeQueryTab}
            onChange={(t) => handleTabChange({ t })}
          />
        </div>
        <div className="flex flex-col gap-4 w-[360px]">
          <div className="flex gap-4 w-full">
            <RatingComp
              title="Available Apartments"
              number={205}
              isIncrease={true}
              rating="16.01%"
            />
            <RatingComp
              title="Rented  Apartments"
              number={128}
              isIncrease={false}
              rating="2.09%"
            />
          </div>
          <div className="w-full">
            <OwnApartmentContainer />
          </div>
        </div>
      </section>
    </div>
  );
}
