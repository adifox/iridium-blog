import Heading from '../heading'

const Placeholder = ({ componentName }) => {
  return (
    <div>
      <Heading title={`${componentName} is not defined in the Project`} />
    </div>
  )
}

export default Placeholder
