import React, { useEffect,useState } from 'react'
import TemplateCard from '../component/TemplateCard'
export default function Home() {
  const [selectedTemplate, setSelectedTemplate] = useState(null);
  const [showNextButton, setShowNextButton] = useState(false);
  const handleTemplateSelect = (template) => {
    setSelectedTemplate(template);
    setShowNextButton(true);
  };
  return (
    <div className='template-container'>
        <h3>Choose a template</h3>
        <div className="gridtemplates">
          
        </div>
    </div>
  )
}
