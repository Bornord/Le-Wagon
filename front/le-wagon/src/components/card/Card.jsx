// import de composants
import './Card.scss';

function Card(info) {
	return (
		<div>
			<img className="img" src={info.link} alt="123 tests" />
			<h3>{info.content}</h3>
		</div>
	);
}

export default Card;
