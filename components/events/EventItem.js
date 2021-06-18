import React from "react";
import Link from "next/link";
import Image from "next/image";
import DateIcon from "../icons/date-icon";
import AddressIcon from "../icons/address-icon";
import ArrowRightIcon from "../icons/arrow-right-icon";
import Button from "../UI/Button";
import classes from "./EventItem.module.css";

const EventItem = (props) => {
  const { title, image, date, location, id } = props;

  const humanReadableDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const formattedAddress = location.replace(", ", "\n");
  const exploreLink = `/events/${id}`;

  return (
    <li className={classes.item}>
      <div className={classes.wrapper}>
        <Image
          src={"/" + image}
          alt={title}
          layout="fill"
          objectFit="cover"
        />
      </div>
      {/* <img src={'/' + image} alt={title} /> */}
      <div className={classes.content}>
        <div className={classes.summary}>
          <h2>{title}</h2>
          <div className={classes.date}>
            <DateIcon />
            <time>{humanReadableDate}</time>
          </div>
          <div className={classes.address}>
            <AddressIcon />
            <address>{formattedAddress}</address>
          </div>
        </div>
        <div className={classes.actions}>
          <Button link={exploreLink}>
            <span>Explore Event</span>
            <span className={classes.icon}>
              <ArrowRightIcon />
            </span>
          </Button>
        </div>
      </div>
    </li>
  );
};

export default EventItem;
