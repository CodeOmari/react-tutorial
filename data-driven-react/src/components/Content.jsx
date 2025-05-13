// Props are arguments passed into React components
// They are passsed into components via HTML attributes
export default function Content(props){
    return(
        <div className="content">
            <img src={props.img} alt="Kyoto city" className="content-img" />

            <div className="content-info">
                <section className="location">
                    <img src={props.marker} alt="location logo" className="content-location" />

                    <span className="country">{props.country}</span>

                    <span className="maps">
                        <a href={props.url}>View on Google Maps</a>
                    </span>
                </section>

                <section className="name">
                    <h2>{props.city}</h2>
                </section>

                <section className="period">
                    <span className="dates">
                        {props.date}
                    </span>
                </section>


                <section className="description">
                    <p className="details">
                        {props.description}
                    </p>
                </section>
            </div>
        </div>
    )
}