import Faq from "./Components/Faq/Faq";

const faqData = [
  {
    id: "1",
    title: "How many team members can I invite?",
    description:
      "No more than 2GB. All files in your account must fit your allotted storage space.",
  },
  {
    id: "2",
    title: "What is the maximum file upload size?",
    description:
      "No more than 2GB. All files in your account must fit your allotted storage space.",
  },
  {
    id: "3",
    title: "How do I reset my password?",
    description:
      "No more than 2GB. All files in your account must fit your allotted storage space.",
  },
  {
    id: "4",
    title: "Can I cancel my subscription?",
    description:
      "No more than 2GB. All files in your account must fit your allotted storage space.",
  },
  {
    id: "5",
    title: "Do you provide additional support?",
    description:
      "No more than 2GB. All files in your account must fit your allotted storage space.",
  },
];

const App = (props) => {
  return <Faq data={faqData} />;
};

export default App;
