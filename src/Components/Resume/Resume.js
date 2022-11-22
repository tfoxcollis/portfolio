import React, { useState } from 'react'
import './Resume.css'
import { pdfjs, Document, Page} from "react-pdf";
import 'react-pdf/dist/esm/Page/TextLayer.css';
import myResume from '../../assets/myresume.pdf'

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
const Resume = () => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1)

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  }

  const myDoc = () => {

    return (
      <Document file={myResume} onLoadSuccess={onDocumentLoadSuccess}>
        <Page pageNumber={pageNumber} renderAnnotationLayer={false} />
      </Document>
    )
  }

  return (
    <div className="resume">
      <a className="resume-download" href={myResume} download={myResume}>Download My Resume</a>
      {myDoc()}
    </div>
  )
}

export default Resume