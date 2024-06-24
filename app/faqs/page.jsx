
import Accordion from '@/components/Accordion';
import Navbar from '@/components/Navbar3';

export const metadata = {
    title: "Faqs",
  };


export default function Faqs() {
    const buttonsData = [
        { id: 1, text: 'What is Midha Guru?', data: 'MidhaGuru is a learning platform dedicated to providing accessible, high-quality education to students from class 6 to 10.  We offer a diverse range of courses, study materials, expert faculty, and a supportive learning community. ' },
        { id: 2, text: 'How do I get started with MidhaGuru?', data: 'Download the app or connect with our team at +91 9506125061 for a free demo session.' },
        { id: 3, text: 'What is a free demo session and how to register for it?', data: `A free demo session is a brief introductory session designed to give students a firsthand experience of what a course has to offer.It allows you to explore a portion of the course content, get a sense of the teaching style, and assess the expertise of the instructor.To register for the same , go to our website midha.guru and fill "Book the free Demo Class" form. ` },
        { id: 4, text: 'What is a sample course? ', data: "A sample course is a condensed version of a complete course that is offered for free . The purpose of a sample course is to provide learners with a preview of the content, structure, and teaching style of the full course." },
        { id: 5, text: "Does MIDHAGURU's curriculum align with the syllabus or curriculum of the school?", data: "Yes, the curriculam are customised for each student based on the school's syllabus."},
        { id: 6, text: 'Is the app available for free?', data: 'You can download the app free of cost and part of the material for free. To access the entire learning programme, you must purchase the programme.' },
        { id: 7, text: 'What types of courses are available on MidhaGuru?', data: 'Midha Guru offers a wide range of courses, including self paced course, live online courses and one to one session. A student can enroll in any course according to his/her requirements and convenience.'},
        { id: 8, text: 'Are the materials provided by Midha Guru sufficient to pass the school exam?', data: "Our materials are very comprehensive and more than enough to pass the exam."},
        { id: 9, text: 'Are the materials updated according to the current curriculum?', data: 'Our material is up-to-date and is totally alligned with the current syllabus.'} ,
        { id: 10, text: "How can I contact MidhaGuru's customer support?", data: 'If you have any questions or need assistance, please feel free to contact our customer support team. You can find our contact information in the "Contact Us" section of the website'},
        { id: 11, text: 'Is my personal information secure on MidhaGuru?', data: "We take data security and privacy seriously. Your personal information is protected in accordance with our privacy policy. We do not share your information with third parties without your consent."}
   ];

    
    const JsonLD = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": buttonsData.map(faq => ({
            "@type": "Question",
            "name": faq.text,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.data
            }
        }))
    };



    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(JsonLD) }} />
            <div className="select-none">
                
                <div className="center-container px-4 ">
                    <h1 className="lg:text-[50px] sm:text-[38px] text-[24px] font-style:normal text-center font-bold lg:pt-6 sm:pt-4">
                        Frequently <span style={{ color: '#8B4513' }}>Asked </span> Questions
                    </h1>
                    <br />
                   
                    <Accordion buttonsData={buttonsData} />
                </div>
              
            </div>
        </>
    );
}











