import {useEffect, useState } from "react"

import { useDispatch, useSelector } from "react-redux";
import { MultiStepForm, Step } from 'react-multi-form'

import { addFormElement } from "../redux/actions";
import { generateFormType } from "../utils";

import Card from "./Card"
import FormElement from "./FormElement";

import PreviewForm from "./PreviewForm";
import createSuvery from "./PreviewForm";
import '../pages/home.css';


const FormBuilder = () => {
    const formElements = useSelector(state => state.formElements)
    const dispatch = useDispatch()

    const [title, setTitle] = useState('Form Title')
    const [description, setDescription] = useState('Form Description')
    const [showQuestionType, setShowQuestionType] = useState(false)
    const [createForm, setCreateForm] = useState(false)
    const [activeStep, setActiveStep] = useState(1)
    const [error, setError] = useState(false)
    const [surveyJson, setSurveyJson] = useState({})
    useEffect(() => {
        setSurveyJson({
            title,
            description,
            elements: formElements
        })
        setCreateForm(false)
    }, [title, description, formElements])

    const createQuestion = (type) => {
        setShowQuestionType(false)
        const newQuestion = generateFormType(type)
        dispatch(addFormElement(newQuestion))
    }
    
    const nextStep = () => {
        setCreateForm(true);
        if (activeStep === 2 && formElements.length < 1) {
            setError(true)
        } else {
            setError(false)
            setActiveStep(activeStep + 1)
        }
    }

      const click = async (e) => {
        e.preventDefault();

        await fetch('http://localhost:8000/formquestion', {
            method: 'POST',
            body: JSON.stringify(surveyJson),
            headers: { 'Content-Type': 'application/json' }
        })

        window.location.replace('/form-list')
    }

    return (
        <>
        <div className="formslider container mt-5 p-5">
          <MultiStepForm activeStep={activeStep} accentColor="#ADD8E6">
            <Step label="Title and description">
              <Card className="mt-5 mb-3">
                
                <div className="mb-4">
                  <label htmlFor="fromTitle" className="form-label">
                    Program Title
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Program Title"
                    id="fromTitle"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </div>
                <div>
                  <label htmlFor="formDescription" className="form-label">
                    Program Description
                  </label>
                  <textarea
                    className="form-control"
                    id="formDescription"
                    placeholder="Program Description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  />
                </div>
              </Card>
            </Step>
  
            <Step label="Add Question">
              {formElements?.map((formElement, index) => (
                <FormElement
                  key={formElement.id}
                  element={formElement}
                  index={index}
                  createQuestion={createQuestion}
                  createForm={createForm}
                />
              ))}
  
              {showQuestionType && (
                <Card className="mt-3 position-relative">
                  <button
                    className="position-absolute top-0 end-0 btn"
                    onClick={() => setShowQuestionType(false)}
                  >
                    <i className="bi bi-x-lg"></i>
                  </button>
                  <h5 className="text-info">Select question type</h5>
                  <div className="row">
                    <div className="col-12 col-md-6 my-1 d-grid">
                      <button
                        className="card p-2 btn btn-info"
                        onClick={() => createQuestion("text")}
                      >
                        <h6>Text question</h6>
                      </button>
                    </div>
                    <div className="col-12 col-md-6 my-1 d-grid">
                      <button
                        className="card p-2 btn btn-info"
                        onClick={() => createQuestion("dropdown")}
                      >
                        <h6>Dropdown</h6>
                      </button>
                    </div>
  
                    <div className="col-12 col-md-6 my-1 d-grid">
                      <button
                        className="card p-2 btn btn-info"
                        onClick={() => createQuestion("boolean")}
                      >
                        <h6>Boolean, Yes/No, True/False</h6>
                      </button>
                    </div>
                    <div className="col-12 col-md-6 my-1 d-grid">
                      <button
                        className="card p-2 btn btn-info"
                        onClick={() => createQuestion("rating")}
                      >
                        <h6>Ratings</h6>
                      </button>
                    </div>
                    <div className="col-12 col-md-6 my-1 d-grid">
                      <button
                        className="card p-2 btn btn-info"
                        onClick={() => createQuestion("file")}
                      >
                        <h6>Browse file</h6>
                      </button>
                    </div>
                    <div className="col-12 col-md-6 my-1 d-grid">
                      <button
                        className="card p-2 btn btn-info"
                        onClick={() => createQuestion("radiogroup")}
                      >
                        <h6>Radio Button</h6>
                      </button>
                    </div>
                    <div className="col-12 col-md-6 my-1 d-grid">
                      <button
                        className="card p-2 btn btn-info"
                        onClick={() => createQuestion("checkbox")}
                      >
                        <h6>CheckBox</h6>
                      </button>
                    </div>
                    <div className="col-12 col-md-6 my-1 d-grid">
                      <button
                        className="card p-2 btn btn-info"
                        onClick={() => createQuestion("signaturepad")}
                      >
                        <h6>Signaturepad</h6>
                      </button>
                    </div>
                  </div>
                </Card>
              )}
  
              <div
                className="d-flex justify-content-center flex-row mt-3"
                style={{ marginBottom: "5rem" }}
              >
                <button
                  className="btn btn-primary"
                  onClick={() => {
                    setShowQuestionType(true);
                    setCreateForm(false);
                    setError(false);
                  }}
                >
                  + Add Question
                </button>
              </div>
  
              {error && (
                <h5 className="text-danger text-center">
                  *** Add at least one question
                </h5>
              )}
            </Step>
  
            <Step label="confirmation">
              <h1 className="my-5 text-center">Confirmation</h1>
              <h4 className="text-center">
                Click 'Previous' to edit form. Click 'Create Form' to continue.
              </h4>
              <div className="mb-3">
               
                <PreviewForm
                  
                  title={title}
                  description={description}
                  setCreateForm={setCreateForm}
                />
              </div>
            </Step>
          </MultiStepForm>
  
          <div style={{ marginBottom: "5rem" }}>
            {activeStep !== 1 && (
              <button
                className="btn btn-primary"
                onClick={() => setActiveStep(activeStep - 1)}
              >
                <i className="bi bi-arrow-left"></i> Previous
              </button>
            )}
            {activeStep !== 3 && (
              <button
                className="btn btn-primary"
                onClick={nextStep}
                style={{ float: "right" }}
              >
                Next <i className="bi bi-arrow-right"></i>
              </button>
            )}
          </div>
        </div>
        {formElements?.length > 0 && (
          <>
            <div className="bg-info position-fixed bottom-0 create-section p-3">
              <div className="container d-flex justify-content-end">
                <button
                  className="btn btn-primary me-1"
                  onClick={() => setCreateForm(true)}
                  data-bs-toggle="modal"
                  data-bs-target="#previewFormModal"
                >
                  Preview
                </button>
                {activeStep === 3 && (
                  <button className="btn btn-primary" onClick={click}>
                    Create Form
                  </button>
                )}
              </div>
            </div>
  
            <div className="modal fade" id="previewFormModal">
              <div className="modal-dialog modal-dialog-centered modal-xl">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title">Form Preview</h5>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
  
                  <div className="modal-body">
                    <PreviewForm
                      
                      title={title}
                      description={description}
                      setCreateForm={setCreateForm}
                    />
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </>
    );
           
    
}

export default FormBuilder