"use client";

import { Button } from "./ui/button";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import * as React from "react";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Calendar } from "@/components/ui/calendar";
import { useState } from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";



const ReservationForm = () => {
  const [date, setDate] = useState<Date>();

  return (
    <form>
      <div className="grid grid-cols-1 gap-4">
        {/* First name & last name */}
        <div className="grid md:grid-cols-2 max-md:grid-cols-1 gap-2">
          <div>
            <Label htmlFor="firstname">first name :</Label>
            <Input type="firstname" id="firstname" />
          </div>
          <div>
            <Label htmlFor="lastname">last name :</Label>
            <Input type="lastname" id="lastname" />
          </div>
        </div>
        {/* Date and pepole */}
        <div className="grid md:grid-cols-2 max-md:grid-cols-1 gap-2 items-end">
          <div>
            <Label>date :</Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="input"
                  className={cn(
                    "w-full bg-black justify-start text-left font-normal"
                  )}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {date ? (
                    format(date, "PPP")
                  ) : (
                    <span>How many people are coming ?</span>
                  )}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0 ">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
          </div>
          <div>
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="How many people will come ?" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>People</SelectLabel>
                  <SelectItem value="1">1</SelectItem>
                  <SelectItem value="2">2</SelectItem>
                  <SelectItem value="3">3</SelectItem>
                  <SelectItem value="4">4</SelectItem>
                  <SelectItem value="5">5</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>
        {/* Button */}
        <div className="flex flex-col items-end max-md:items-center max-md:w-full">
          <Button className="max-md:w-full">Book</Button>
        </div>
      </div>
    </form>
  );
};

export default ReservationForm;
