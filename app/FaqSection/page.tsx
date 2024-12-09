import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
  
  export default function FAQSection() {
    const faqs = [
      {
        question: "What types of chairs do you offer?",
        answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debiis libero veritatis enim repellat optio tellus eum delentur deserunt, odit expedita eos molestiae ipsa totem quidem?"
      },
      {
        question: "How can we get in touch with you?",
        answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debiis libero veritatis enim repellat optio tellus eum delentur deserunt, odit expedita eos molestiae ipsa totem quidem?"
      },
      {
        question: "Do your chairs come with a warranty?",
        answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debiis libero veritatis enim repellat optio tellus eum delentur deserunt, odit expedita eos molestiae ipsa totem quidem?"
      },
      {
        question: "What will be delivered? And When?",
        answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debiis libero veritatis enim repellat optio tellus eum delentur deserunt, odit expedita eos molestiae ipsa totem quidem?"
      },
      {
        question: "Can I try a chair before purchasing?",
        answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debiis libero veritatis enim repellat optio tellus eum delentur deserunt, odit expedita eos molestiae ipsa totem quidem?"
      },
      {
        question: "How do I clean and maintain my Comforty chair?",
        answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debiis libero veritatis enim repellat optio tellus eum delentur deserunt, odit expedita eos molestiae ipsa totem quidem?"
      }
    ]
  
    return (
      <div className="w-full max-w-[1440px] mx-auto px-4 py-16">
        <div className="max-w-[1100px] mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold mb-4">Questions Looks Here</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {faqs.map((faq, index) => (
              <Accordion key={index} type="single" collapsible>
                <AccordionItem value={`item-${index}`}>
                  <AccordionTrigger className="text-left">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent>
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            ))}
          </div>
        </div>
      </div>
    )
  }
  
  