import React from "react";
import EventSummary from "../../components/event-detail/event-summary";
import EventLogistics from "../../components/event-detail/event-logistics";
import EventContent from "../../components/event-detail/event-content";
import ErrorAlert from "../../components/UI/ErrorAlert";
import { getEventById, getFeaturedEvents } from "../../helpers/api-util";

<<<<<<< HEAD
const EventDetailPage = ({ event }) => {
=======
  // The Page source will have the loading code and not the data. 
>>>>>>> c9902373c5bd76ed108dd39628c4a9c7fe1c3b69
  if (!event) {
    return (
      <div className="center">
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <>
      <EventSummary title={event.title} />
      <EventLogistics
        date={event.date}
        address={event.location}
        image={event.image}
        imageAlt={event.title}
      />
      <EventContent>
        <p>{event.description}</p>
      </EventContent>
    </>
  );
};

export const getStaticPaths = async () => {
  const events = await getFeaturedEvents();
  const ids = events.map((event) => ({ params: { eventId: event.id } }));

  return {
    paths: ids,
    fallback: "blocking",
  };
};

export const getStaticProps = async (context) => {
  const eventId = context.params.eventId;
  const event = await getEventById(eventId);

  if (!event) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      event,
    },
    revalidate: 30,
  };
};

export default EventDetailPage;
