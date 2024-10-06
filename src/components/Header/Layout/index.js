
export function Layout() {

    return (
        <>

            <div className="MainGrid" >

                <div className="first-column" style={{gridArea: "firstColumn"}}>
                    <div className="box" >
                       
                    </div>

                    <div className="box" style={{margin: "30px 0"}} >
                        
                    </div>
                </div>
               

                <div style={{ gridArea: "secondColumn" }} >
                    <div className="suggestionBox" >
                        
                    </div>
                </div>

            </div>
            
        </>
    )

}