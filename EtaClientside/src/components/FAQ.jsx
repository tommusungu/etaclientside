import AccordionItem from "./AccordionItem";
import Header from "./Header";

export default function FAQ() {
  return (
    <div className="container py-6 ">
      <div className='flex flex-wrap justify-center items-center '>
        <div className="py-6 w-full flex flex-col justify-center space-x-2 items-center relative">
          <Header title='Common Questions' />
        </div>
      </div>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-3">
        <div className="mt-5 w-full mx-auto flex flex-col gap-2 justify-start items-start">
          <AccordionItem headerTitle="What is the purpose of the ETA Awards Kenya?" description="The ETA Awards Kenya aims to identify, recognize, and award the best in various fields including Entertainment, Leadership and Governance, Business, and Community Work. The award ceremony showcases the greats of Kenya in their trades, helping to make Kenya great in different ways." />
          <AccordionItem headerTitle="What is the vision of ETA Awards Kenya?" description="The vision of ETA Awards Kenya is to take Kenyan music and arts to greater horizons beyond county borders, reaching national and international levels. The goal is to become the best East African Awards event by 2025." />
          <AccordionItem headerTitle="What is the vision statement of ETA Awards Kenya?" description="The vision statement of ETA Awards Kenya is to be the most prestigious and most sought-after music awards in Kenya and East Africa, admired by artists, sponsors, and music lovers." />
        </div>
        <div className="md:mt-5 w-full mx-auto flex flex-col gap-2 justify-start items-start">
          <AccordionItem headerTitle="What is the mission of ETA Awards Kenya?" description="The mission of ETA Awards Kenya is to promote excellence in music and transform the image of Kenyan music into a top-quality, world-class industry." />
          <AccordionItem headerTitle="What are the objectives of ETA Awards Kenya?" description="The objectives of ETA Awards Kenya include:
          1. Producing a glamorous and dazzling awards event that portrays the endowment of the arts industry in Kenya and East Africa.
          2. Promoting unity and harmonious living among different denominations using music as an art discipline.
          3. Promoting Kenyan artists and their works locally, regionally, and internationally by networking with other world-class music awards.
          4. Encouraging excellence in the Kenyan music industry through positive competition and recognition.
          5. Promoting morality and positive living through music as an alternative and positive entertainment.
          6. Promoting music business as a profitable industry." />
          <AccordionItem headerTitle="How can one participate or nominate someone for the ETA Awards Kenya?" description="To participate or nominate someone for the ETA Awards Kenya, you can visit the official nomination page and follow the instructions provided. The nomination process typically involves submitting details about the nominee and their achievements in their respective fields." />
        </div>
      </div>
    </div>
  );
}
