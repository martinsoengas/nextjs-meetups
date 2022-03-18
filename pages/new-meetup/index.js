import NewMeetupForm from "../../components/meetups/NewMeetupForm";

const addMeetupHanlder = (enteredMeetupData) => {
  console.log(enteredMeetupData);
};

const NewMeetupPage = () => {
  return <NewMeetupForm onAddMeetup={addMeetupHanlder} />;
};

export default NewMeetupPage;
