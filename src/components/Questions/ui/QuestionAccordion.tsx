import React, { useState, useCallback } from 'react';
import '../Questions.css';

interface Question {
    title: string;
    content: string;
}

interface QuestionAccordionProps {
    questions: Question[];
}

const AccordionItem = React.memo(({ question, isActive, onClick }: { question: Question; isActive: boolean; onClick: () => void }) => (
    <div className="accordion-item">
        <button
            className={`accordion-button ${isActive ? 'active' : ''}`}
            onClick={onClick}
        >
            <span className="accordion-title">{question.title}</span>
            <span className={`accordion-icon ${isActive ? 'open' : ''}`}>▼</span>
        </button>
        <div className={`accordion-content ${isActive ? 'show' : ''}`} style={{ height: isActive ? 'auto' : '0' }}>
            <p>{question.content}</p>
        </div>
    </div>
));

const QuestionAccordion: React.FC<QuestionAccordionProps> = ({ questions }) => {
    const [activeIndex, setActiveIndex] = useState<number>(0);

    const toggleAccordion = useCallback((index: number) => {
        setActiveIndex(prevIndex => prevIndex === index ? -1 : index);
    }, []);

    return (
        <div className="question-accordion">
            {questions.map((question, index) => (
                <AccordionItem
                    key={index}
                    question={question}
                    isActive={activeIndex === index}
                    onClick={() => toggleAccordion(index)}
                />
            ))}
        </div>
    );
};

export default React.memo(QuestionAccordion);