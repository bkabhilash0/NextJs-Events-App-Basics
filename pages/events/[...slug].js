import React from "react";
import Head from "next/head";
import EventList from "../../components/events/EventList";
import ResultsTitle from "../../components/events/ResultsTitle";
import Button from "../../components/UI/Button";
import ErrorAlert from "../../components/UI/ErrorAlert";
import { useRouter } from "next/router";
import { getFilteredEvents } from "../../helpers/api-util";

const FilteredEventsPage = (props) => {
  // const router = useRouter();
  // const filterData = router.query.slug;

  // if (!filterData) {
  //   return <p className="center">Loading...</p>;
  // }

  // const year = +filterData[0];
  // const month = +filterData[1];

  if (props.hasError) {
    return (
      <>
        <ErrorAlert>
          <p>Invalid Filter Please Check the Values</p>
        </ErrorAlert>
        <div className="center">
          <Button link="/events">Show All Events</Button>
        </div>
      </>
    );
  }

  const { events, year, month } = props;

  if (!events || events.length === 0) {
    return (
      <>
        <ErrorAlert>
          <p className="center">No Events Found</p>
        </ErrorAlert>
        <div className="center">
          <Button link="/events">Show All Events</Button>
        </div>
      </>
    );
  }

  const date = new Date(year, month - 1);

  return (
    <>
      <Head>
        <meta name="description" content={`All Events for ${month}/${year}`} />
        <title>Filtered Events</title>
      </Head>
      <ResultsTitle date={date} />
      <EventList items={events} />
    </>
  );
};

export const getServerSideProps = async (context) => {
  const { params } = context;
  const filterData = params.slug;

  const year = +filterData[0];
  const month = +filterData[1];

  if (isNaN(year) || isNaN(month) || month < 1 || month > 12) {
    return {
      props: {
        hasError: true,
      },
    };
  }

  const events = await getFilteredEvents({ year, month });

  return {
    props: {
      events,
      year,
      month,
    },
  };
};

export default FilteredEventsPage;
