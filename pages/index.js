import React from "react";
import Head from "next/head";
import EventList from "../components/events/EventList";
import NewsletterRegistration from "../components/input/newsletter-registration";
import { getFeaturedEvents } from "../helpers/api-util";

const HomePage = (props) => {
  const featuredEvents = props.events;
  if (typeof featuredEvents === "string") {
    return <p className="center">Error Fetching Data</p>;
  }
  return (
    <div>
      <Head>
        <meta
          name="description"
          content="Find a Lot of Great Event that allow you to Evolve."
        />
        <title>Next JS Events</title>
      </Head>
      <NewsletterRegistration/>
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
