import { serviceCardData } from "../data/serviceCardData";

function Services() {
  return (
    <><div>
      <h1 className='pageTitle'>What we offer</h1>
      <p className='pageDescription'>We offer a wide range of services to help your business succeed.
        Whether you need help with everday admin tasks so you can focus on the important stuff,
        to spruce your website so it is always up to date, we can help. Contact us today to help your business grow.</p>
    </div>
    <div className="serviceCards">
      {serviceCardData.map((card) => (
        <div className="serviceCard" key={card.id}>
          <h3>{card.title}</h3>
          <img src={card.image} alt={card.title} />
          <p>{card.description}</p>
          <h4>Services:</h4>
          <ul>{card.services.map((service, index) => (
            <li key={index}>{service}</li>
          ))}</ul>
          {card.packages && card.packages.length > 0 && (
            <>
              <h4>Packages:</h4> 
              <ul>
                {card.packages.map((pkg, index) => (
                  <li key={index}>
                    <h5>{pkg.name}</h5>
                    <p>{pkg.description}</p>
                    <p>Price: {pkg.price}</p>
                    <p>Time: {pkg.time}</p>
                  </li>
                ))}
              </ul> 
            </>
          )}
        </div>
      ))}
    </div></>
  )
}

export default Services;