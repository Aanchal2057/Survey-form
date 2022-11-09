import 'survey-core/defaultV2.min.css';
import { StylesManager, Model } from 'survey-core';
import { Survey } from 'survey-react-ui';
import { useEffect, useState, useCallback } from "react";


StylesManager.applyTheme("defaultV2");

function App({ forms }) {



  const survey = new Model(forms);
  survey.focusFirstQuestionAutomatic = false;

  const titlesubmit = forms.title;



  const alertResults = useCallback((sender) => {
    const results = sender.data;
    results["formname"] = titlesubmit.toLowerCase();
    console.log(results);
    const jsonString = JSON.stringify(results);
    alert(jsonString);
    
    const createSuvery = async () => {

      await fetch('http://localhost:8000/forms', {
        method: 'POST',
        body: JSON.stringify(results),
        headers: { 'Content-Type': 'application/json' }
      })


    }
    createSuvery()

  }, []);

  survey.onComplete.add(alertResults);
  return <Survey model={survey} />;
}

export default App;


