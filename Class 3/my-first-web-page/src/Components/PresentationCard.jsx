// First component yeah!!!!

//This is your function "The box"
export function PresentationCard({
    // Here comes the function arguments ("THE BOX INPUT")
    name,
    description,
    email
}) {
    // this is the function output ("THE BOX OUTPUT")
    return (
        //!! WARNING!!! THIS IS HTML LAND
        <div>
            {/** Do not forget to use {} for js blocks */}
            <h1> Hello My names is { name }</h1>
            <p>{ description }</p>
            <h2> Get in touch!!</h2>
            <p>{ email }</p>
        </div>
    )
}