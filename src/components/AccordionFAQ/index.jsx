import { AccordionBody, AccordionHeader, AccordionItem } from "reactstrap";

const AccordionFAQ = (props) => {
  return (
    <div>
      <AccordionItem>
        <AccordionHeader
          targetId={props.id}
          style={{
            fontFamily: "Arial",
            fontStyle: "normal",
            fontWeight: "700",
            fontSize: "14px",
            lineHeight: "20px",
          }}
        >
          {props.question}
        </AccordionHeader>
        <AccordionBody accordionId={props.id}>{props.answer}</AccordionBody>
      </AccordionItem>
    </div>
  );
};

export default AccordionFAQ;
