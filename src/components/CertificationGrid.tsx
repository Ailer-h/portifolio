import type { Certification } from "../content/certifications"
import "../stylesheets/CertificationGrid.css"

interface CertificationGridProps {
    elements: Certification[]
}

const CertificationGrid = ({ elements }: CertificationGridProps) => {

    return <><div className="certificationGrid">

        {
            elements.sort((a, b) => b.issueDate.getTime() - a.issueDate.getTime()).map((element) => {
                return <>
                    <div className="certification">
                        <img src={element.logo} />
                        <div className="info">
                            <h3>{element.name}</h3>
                            <p>{element.issuingOrg}</p>

                            <hr />

                            <div style={{"display": "flex", "gap": "8px"}}>
                                <h2 style={{"fontWeight": "normal"}}><b>Issued on:</b> {element.issueDate.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}</h2>

                                {
                                    element.expirationDate && 
                                    <>
                                        •
                                        <h2 style={{"fontWeight": "normal"}}><b>Expires on:</b> {element.expirationDate.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}</h2>
                                    </>
                                }
                            </div>

                            {
                                element.credentialURL && 
                                <a href={element.credentialURL} target="_blank">
                                    Show Credential
                                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M218.62-128q-38.35 0-64.48-26.14Q128-180.27 128-218.62v-522.76q0-38.35 26.14-64.48Q180.27-832 218.62-832h249.61v66H218.62q-9.24 0-16.93 7.69-7.69 7.69-7.69 16.93v522.76q0 9.24 7.69 16.93 7.69 7.69 16.93 7.69h522.76q9.24 0 16.93-7.69 7.69-7.69 7.69-16.93v-249.61h66v249.61q0 38.35-26.14 64.48Q779.73-128 741.38-128H218.62Zm167.92-212.23-46.31-46.31L719.69-766H579v-66h253v253h-66v-140.69L386.54-340.23Z"/></svg>
                                </a>
                            }
                            
                        </div>
                    </div>
                </>
            })
        }

    </div></>

}

export default CertificationGrid