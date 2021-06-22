import React from "react";
import EventList from "../components/events/EventList";
import { getFeaturedEvents } from "../helpers/api-util";

const HomePage = (props) => {
  const featuredEvents = props.events;
  return (
    <div>
      <EventList items={featuredEvents} />
    </div>
  );
};

export const getStaticProps = async () => {
  const featuredEvents = await getFeaturedEvents();
  return {
    props: { events: featuredEvents },
    revalidate: 1800,
  };
};

export default HomePage;
