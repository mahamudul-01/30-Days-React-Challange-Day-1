export default function Singer({singer}){
    return (
        <div>
            <h2>Name: {singer.name} </h2>
        <h3>Age: {singer.age}</h3>
        <h4>Country: {singer.country}</h4>
        </div>
    )
}