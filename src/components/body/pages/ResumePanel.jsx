import CollapsiblePanel from "./components/CollapsiblePanel"


const ResumePanel = ({ exp, id, opened, register }) => {
  const clients = exp.clients.length >= 1
  return (
    <CollapsiblePanel id={ id } opened={ opened } register={ register }
      header={
        <>
          <div className="hmb-expRow">
            <div className="hmb-expColumn hmb-expRole">
              <span>{ exp.position }</span>
            </div>
            <div className="hmb-whiteText">
              <span id="dateSpacer">|</span> { exp.date }
            </div>
          </div>
          <div className="hmb-expRow">
            <div className="hmb-expColumn" style={ { textTransform: 'uppercase', fontWeight: '700' } }>
              { exp.company }
            </div>
            <div className="hmb-expColumn hmb-whiteText">- { exp.location }</div>
            <div style={ { display: exp.contract ? 'inline' : 'none', fontWeight: 'bold', fontStyle: 'italic' } }> - Contract</div>
          </div>
        </>
      }
      children={
        <div className="hmb-companies">
          <div className="hmb-whiteText">{ exp.description }</div>
          <div style={ { padding: '10px', display: exp.details.length > 0 ? 'block' : 'none' } }>
            { !clients &&
              exp.details.map((det, i) => (
                <div key={ i } className="hmb-row hmb-whiteText">
                  &#x2022; { det }
                </div>
              )) }
          </div>
          { !clients && (
            <div className="hmb-row hmb-whiteText" style={ { marginTop: '20px' } }>
              Skills: { exp.used }
            </div>
          ) }
          <>
            { exp.clients.map((c, i) => (
              <div key={ i } className="hmb-clients hmb-bottomLine">
                <div className="hmb-row hmb-nameDescription">
                  <span style={ { fontWeight: '700', color: 'var(--HMB-orange)' } }>{ c.company }</span>
                  <span style={ { paddingLeft: '10px' } }>{ c.description }</span>
                </div>
                <div style={ { padding: '10px' } }>
                  { c.details.map((det, i) => (
                    <div key={ i } className="hmb-row hmb-whiteText">
                      &#x2022; { det }
                    </div>
                  )) }
                </div>
                <div className="hmb-row hmb-whiteText" style={ { padding: '10px' } }>
                  Skills: { c.used }
                </div>
              </div>
            )) }
          </>
        </div>
      }
    />
  )
}

export default ResumePanel