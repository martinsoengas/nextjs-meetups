import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "A first Meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/d/d3/Stadtbild_M%C3%BCnchen.jpg",
    address: "Some address 1",
    description: "First Meetup",
  },
  {
    id: "m2",
    title: "A second Meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/d/d3/Stadtbild_M%C3%BCnchen.jpg",
    address: "Some address 2",
    description: "Second Meetup",
  },
];

const HomePage = () => {
  return <MeetupList meetups={DUMMY_MEETUPS} />;
};

export default HomePage;
