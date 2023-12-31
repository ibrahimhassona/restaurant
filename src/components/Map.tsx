"use client";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { useMediaQuery } from "react-responsive";
import { Icon } from "leaflet";
import Image from "next/image";

// Motion 
import {motion} from 'framer-motion'
import {FadeIn} from '../variants'

// leaflet css
import "leaflet/dist/leaflet.css";
import { MarkerProps } from "@/app/types";

const markers: MarkerProps[] = [
  {
    position: [31.1430758, 30.6527049],
    title: "Desouq",
    subtitle: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    image: "/map/1.png",
  },
  {
    position: [31.1151, 29.5333],
    title: "Alex",
    subtitle: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    image: "/map/1.png",
  },
];
const customIcon = new Icon({
  iconUrl: "/pin-solid.svg",
  iconSize: [40, 40],
});
const Map = () => {
  // Mobile Media => return boolean value.
  const isMobile = useMediaQuery({
    query: "(max-width: 768px",
  });

  return (
    <motion.section
    variants={FadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.4 }}
      className="pt-5 xl:after:w-full xl:after:h-[180px] xl:after:bg-gradient-to-b xl:after:from-white xl:after:via-white/80 xl:after:to-white/20  xl:after:z-20 relative xl:after:absolute xl:after:top-0"
      id="contact"
    >
      <MapContainer
        center={[31.1430758, 30.6527049]}
        zoom={11}
        className={`${isMobile ? "h-[300px]" : "h-[calc(100vh-100px)]"} z-10`}
        zoomControl={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {/* markers */}
        {markers.map((marker, index) => (
          <Marker key={index} position={marker.position} icon={customIcon}>
            <Popup>
              <div className="flex gap-3 justify-center items-center">
                <div className="flex-1">
                  <h3>{marker.title}</h3>
                  <p>{marker.subtitle}</p>
                </div>
                <div>
                  <Image
                    src={marker.image}
                    height={200}
                    width={150}
                    alt={marker.title}
                    className="w-full flex-1"
                  />
                </div>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </motion.section>
  );
};

export default Map;
