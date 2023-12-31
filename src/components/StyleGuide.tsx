"use client";

import Link from "next/link";
import { Button } from "./ui/button";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import * as React from "react";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Calendar } from "@/components/ui/calendar";
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

const StyleGuide = () => {
  const [date, setDate] = React.useState<Date>();
  return (
    <>
      <div className="flex flex-col gap-y-4 p-24">
        <h1>Headding 1</h1>
        <h2>Headding 2</h2>
        <h3>Headding 3</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas laborum
          necessitatibus eum perspiciatis accusamus rerum adipisci quidem
          repudiandae ut officiis quod laudantium labore soluta, debitis minima
          doloribus aut? Neque, quis.
        </p>
      </div>
      <div className="bg-black p-24 flex flex-col gap-y-4 ">
        <Link href="/">Link</Link>
        <Button>Button 1</Button>
        <Button variant="orange">Button 2</Button>
        <Button variant="input">Button 3</Button>
        <Button variant="orange" size="sm">
          Button 4
        </Button>
        {/* Lable & input */}
        <div>
          <Label htmlFor="firstname">first name :</Label>
          <Input type="firstname" id="firstname" />
        </div>
        <div>
          <Label htmlFor="lastname">last name :</Label>
          <Input type="lastname" id="lastname" />
        </div>
        <div>
          <Label>date :</Label>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="input"
                className={cn("w-full bg-black justify-start text-left font-normal")}
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {date ? format(date, "PPP") : <span>Pick a date</span>}
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
              <SelectValue placeholder="Select a fruit" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Fruits</SelectLabel>
                <SelectItem value="apple">Apple</SelectItem>
                <SelectItem value="banana">Banana</SelectItem>
                <SelectItem value="blueberry">Blueberry</SelectItem>
                <SelectItem value="grapes">Grapes</SelectItem>
                <SelectItem value="pineapple">Pineapple</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>
    </>
  );
};

export default StyleGuide;
