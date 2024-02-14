import propTypes from 'prop-types';
function DefaultProp({name,age,grade,address})
{
    return`${name} is now turning to ${age+5} from grade ${grade} lives in ${address.flatNo} ${address.city}`

}

DefaultProp.propType={
    name:propTypes.string,
    age:propTypes.number,
}
DefaultProp.defaultProps={
    grade:3,
    address:{flatNo:204,city:"pune"}
}
export default DefaultProp;