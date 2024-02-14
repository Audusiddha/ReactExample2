//import App from "./App"

function Carone() {
    return <h1> This is a {props.brand} car</h1>
}

function Garage() {
    //  const cars=["Ford","BWM","AUDI"]
    const cars = [{ id: 1, brand: "Ford" },
                  { id: 2, brand: "BMW" },
                  { id: 3, brand: "Audi" }]
    return (
        <>
            <h1>These are  the cars in the showroom </h1>
            { /*for rendering a component in an arrow function we no need to take currly bracket*/}

            <ul> {cars.map((car) => <Carone key={car.id} brand={car.brand} />)}</ul>
        </>

    )
}
export default Garage;