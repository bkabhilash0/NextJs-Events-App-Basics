export const getAllEvents = async () => {
  try {
    const response = await fetch("http://localhost:4000/data");
    const data = await response.json();
    return data;
  } catch (e) {
    return e.message;
  }
};

export async function getFeaturedEvents() {
  const allEvents = await getAllEvents();
  return allEvents.filter((event) => event.isFeatured);
}

export const getFilteredEvents = async (dateFilter) => {
  const { year, month } = dateFilter;
  const allEvents = await getAllEvents();

  let filteredEvents = allEvents.filter((event) => {
    const eventDate = new Date(event.date);
    return (
      eventDate.getFullYear() === year && eventDate.getMonth() === month - 1
    );
  });

  return filteredEvents;
};

export async function getEventById(id) {
  const allEvents = await getAllEvents();
  return allEvents.find((event) => event.id === id);
}
