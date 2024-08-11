import { dessertMenu } from '../utils/dessertMenu'

export default function Desserts() {
  return (
    <ul>
      {dessertMenu.map(item => (
        <li key={item.id}>
          <div>
            <img src={item.thumbnail} alt={item.fullName} width='100' />
            <img src={item.imageDesktop} alt={item.fullName} width='100' />
            <img src={item.imageTablet} alt={item.fullName} width='100' />
            <img src={item.imageMobile} alt={item.fullName} width='100' />
          </div>
          <span>{item.name}</span>
          <h3>{item.description}</h3>
          <p>{item.price}</p>
        </li>
      ))}
    </ul>
  )
}