import Faq from "./Components/Faq/Faq";

const faqData = [
  {
    id: "1",
    question: "How many team members can I invite?",
    answer:
      "No more than 2GB. All files in your account must fit your allotted storage space.",
  },
  {
    id: "2",
    question: "What is the maximum file upload size?",
    answer:
      "No more than 2GB. All files in your account must fit your allotted storage space.",
  },
  {
    id: "3",
    question: "How do I reset my password?",
    answer:
      "No more than 2GB. All files in your account must fit your allotted storage space.",
  },
  {
    id: "4",
    question: "Can I cancel my subscription?",
    answer:
      "No more than 2GB. All files in your account must fit your allotted storage space.",
  },
  {
    id: "5",
    question: "Do you provide additional support?",
    answer:
      "No more than 2GB. All files in your account must fit your allotted storage space.",
  },
];

const App = (props) => {
  return <Faq faqData={faqData} />;
};

export default App;
